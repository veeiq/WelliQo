import { RulesEvaluationResult } from './rules-engine';
import { SynergyEvaluationResult } from './synergy-engine';
import { ScoreEngineResult } from './score-engine';
import { FormulaRegistry } from './formula-registry';
import { KnowledgeRepositoryLoader } from './knowledge-loader';
import { CalculatedMetrics, PillarScore, MetricCardData } from '../store/assessment-store';
import { FoodProvider } from './providers/food-provider';
import { SupplementProvider } from './providers/supplement-provider';

export class ReportBuilder {
  private loader: KnowledgeRepositoryLoader;
  private formulaRegistry: FormulaRegistry;
  private foodProvider: FoodProvider;
  private supplementProvider: SupplementProvider;

  constructor() {
    this.loader = KnowledgeRepositoryLoader.getInstance();
    this.formulaRegistry = FormulaRegistry.getInstance();
    this.foodProvider = new FoodProvider();
    this.supplementProvider = new SupplementProvider();
  }

  public build(
    answers: Record<string, any>,
    rulesResult: RulesEvaluationResult,
    synergyResult: SynergyEvaluationResult,
    scoreResult: ScoreEngineResult
  ): CalculatedMetrics {
    
    // Calculate activity multiplier from answers (e.g. daily_steps, sitting_hours) or default to 1.2
    let activity_multiplier = 1.2;
    if (answers.daily_steps === 'more_10k') activity_multiplier = 1.55;
    else if (answers.daily_steps === '7k_10k') activity_multiplier = 1.375;

    // We need baseline variables to feed into formulas
    // The store's 'answers' actually includes 'data' which has height/weight/age etc.
    const baseline = {
      weight: answers.weight || 70,
      height: (answers.height || 170) / 100, // formulas usually expect height in m
      age: answers.age || 30,
      gender: answers.gender || 'female',
      target_weight: answers.target_weight || 70,
      goal: answers.weight_goal || 'maintain',
      activity_multiplier
    };

    // Calculate core metrics via FormulaRegistry for true clinical formulas
    const metrics = this.formulaRegistry.batchEvaluate([
      'FORMULA_BMI',
      'FORMULA_BODY_FAT_ESTIMATE',
      'FORMULA_BMR',
      'FORMULA_HEALTHY_WEIGHT_RANGE_MIN',
      'FORMULA_HEALTHY_WEIGHT_RANGE_MAX',
      'FORMULA_TARGET_WEIGHT_DIFF',
      'FORMULA_TDEE',
      'FORMULA_CALORIE_TARGET',
      'FORMULA_PROTEIN_TARGET',
      'FORMULA_WATER_TARGET',
      'FORMULA_PROGRESS_TIMELINE'
    ], baseline);

    const bmi = metrics['FORMULA_BMI'] || 0;
    const bmr = metrics['FORMULA_BMR'] || 0;
    const fatPercentage = metrics['FORMULA_BODY_FAT_ESTIMATE'] || 0;
    const minIdealKg = metrics['FORMULA_HEALTHY_WEIGHT_RANGE_MIN'] || 0;
    const maxIdealKg = metrics['FORMULA_HEALTHY_WEIGHT_RANGE_MAX'] || 0;
    
    // Target Weight Diff might be negative depending on goal, but we want the absolute difference for the timeline/UI
    const weightDifferenceKg = Math.abs(metrics['FORMULA_TARGET_WEIGHT_DIFF'] || 0);

    let weightDirection: 'lose' | 'gain' | 'maintain' = 'maintain';
    if (baseline.goal === 'lose' || answers.assessmentId === 'lose-weight') weightDirection = 'lose';
    else if (baseline.goal === 'gain' || answers.assessmentId === 'healthy-weight-gain') weightDirection = 'gain';
    
    // Using FormulaRegistry calculations
    const proteinGrams = Math.round(metrics['FORMULA_PROTEIN_TARGET'] || (baseline.weight * 1.0));
    const dailyCalories = Math.round(metrics['FORMULA_CALORIE_TARGET'] || metrics['FORMULA_TDEE'] || 2000);
    const dailyWaterLiters = (metrics['FORMULA_WATER_TARGET'] || (baseline.weight * 0.035)).toFixed(1);
    const progressWeeks = metrics['FORMULA_PROGRESS_TIMELINE'] || 0;

    // Fetch findings metadata from knowledge repo
    const allFindings = this.loader.getAllModules().flatMap(m => m.findings || []);
    const allRecs = this.loader.getAllModules().flatMap(m => m.recommendations || []);

    const activeFindingObjs = Array.from(new Set([...rulesResult.findingIds, ...synergyResult.synergyFindingIds]))
      .map(id => allFindings.find(f => f.id === id))
      .filter(Boolean);

    // Score Explanation ("Why did I get this score")
    // Sort by severity or confidence, take top 3
    const severityMap: Record<string, number> = { 'CRITICAL': 3, 'HIGH': 2, 'MEDIUM': 1, 'LOW': 0, 'INFO': -1 };
    activeFindingObjs.sort((a, b) => (severityMap[b!.severity] || 0) - (severityMap[a!.severity] || 0));
    
    // Map them to the UI's old `Finding` interface structure to avoid UI changes
    const scoreExplanation = activeFindingObjs.slice(0, 3).map(f => ({
      id: f!.id,
      pillarId: 'overall', // Simplification, UI just needs a label
      label: f!.userExplanation,
      penalty: 0, 
      recommendationId: f!.recommendationIds?.[0]
    }));

    // Recommendations (Priority Plan)
    const activeRecIds = new Set<string>();
    activeFindingObjs.forEach(f => f!.recommendationIds?.forEach(id => activeRecIds.add(id)));

    const priorityPlan = Array.from(activeRecIds)
      .map(id => allRecs.find(r => r.id === id))
      .filter(Boolean)
      .slice(0, 5)
      .map(r => ({
        id: r!.id,
        title: r!.title,
        why: r!.whyThisMatters || '',
        action: r!.actionSteps?.[0] || r!.recommendationText,
        expectedBenefit: r!.expectedBenefits?.[0] || '',
        timeline: r!.expectedTimeline ? '2–4 weeks' : '',
        difficulty: (r!.difficulty || 'Moderate') as 'Easy' | 'Moderate' | 'Advanced',
        successIndicators: r!.successIndicators || [],
        priority: 'High' as 'High' // UI expectation
      }));

    // Pillar Scores formatted for UI
    const pillarScores: PillarScore[] = Object.entries(scoreResult.pillarScores).map(([pillar, score]) => {
      let icon = 'Activity';
      if (pillar === 'Nutrition') icon = 'Apple';
      if (pillar === 'Mindset') icon = 'Brain';
      if (pillar === 'Recovery') icon = 'Moon';
      if (pillar === 'Goals') icon = 'Target';
      if (pillar === 'History') icon = 'History';

      return {
        id: pillar.toLowerCase(),
        label: pillar,
        score: score,
        icon,
        weightPercent: 0
      };
    });

    // Score Meaning
    const scoreMeaning = scoreResult.scoreMeaning;

    // Strengths and Improvements
    const strengths = scoreResult.strengths;
    const improvements = scoreResult.improvements;

    // Metric Cards
    const metricCards: MetricCardData[] = [
      {
        id: 'bmi',
        title: 'BMI',
        icon: 'Activity',
        current: bmi.toFixed(1),
        ideal: '18.5 - 24.9',
        difference: bmi < 18.5 ? (18.5 - bmi).toFixed(1) : (bmi > 24.9 ? (bmi - 24.9).toFixed(1) : '0.0'),
        meaning: bmi < 18.5 ? 'Underweight' : (bmi > 24.9 ? 'Above Ideal' : 'Ideal'),
        status: bmi < 18.5 || bmi > 24.9 ? 'warning' : 'good',
        clinicalMeaning: bmi < 18.5 ? 'Underweight' : (bmi > 24.9 ? 'Above healthy range' : 'Within healthy range'),
        primaryFocus: weightDirection === 'gain' ? (bmi < 18.5 ? 'Healthy Weight Gain' : 'Lean Weight Gain') : (weightDirection === 'lose' ? 'Fat Loss' : 'Maintenance'),
        sourceType: 'Calculated',
        sourceExplanation: 'Based on your height and weight.'
      },
      {
        id: 'fat',
        title: 'Est. Body Fat',
        icon: 'Activity',
        current: fatPercentage.toFixed(1) + '%',
        ideal: '< 25%',
        difference: '',
        meaning: '',
        status: fatPercentage > 25 ? 'warning' : 'good',
        clinicalMeaning: fatPercentage > 25 ? 'Above healthy range' : 'Within healthy range',
        primaryFocus: fatPercentage > 25 ? 'Fat Loss' : 'Maintenance',
        sourceType: 'Estimated',
        sourceExplanation: 'Based on your height, weight, age, and biological sex.'
      }
    ];

    // Timeline (calculated by Formula Registry)
    let timeline = 'Next 30 Days';
    if (weightDifferenceKg > 0 && progressWeeks > 0) {
      const monthsNeeded = Math.ceil(progressWeeks / 4);
      const minMonths = Math.max(1, monthsNeeded - 1);
      const maxMonths = monthsNeeded + 1;
      timeline = `Approximately ${minMonths}–${maxMonths} months`;
    }

    // Biggest Opportunity Explanation (Personalized)
    let biggestOpportunityExplanation = '';
    let overallSummary = '';
    
    // Make it feel super personal instead of generic
    if (scoreExplanation.length >= 2) {
       // Get findings specifically for the biggest opportunity pillar
       const oppDeductions = scoreResult.auditTrail.deductionsApplied
         .filter(d => d.pillar.toLowerCase() === scoreResult.biggestOpportunity.toLowerCase() && d.findingId);
       
       let oppFindings = oppDeductions
         .map(d => activeFindingObjs.find(f => f!.id === d.findingId))
         .filter(Boolean)
         .slice(0, 3);
         
       if (oppFindings.length === 0) oppFindings = activeFindingObjs.slice(0, 3);

       const oppBullets = oppFindings.map(f => f!.title.toLowerCase());
       const overallBullets = scoreExplanation.slice(0,3).map(f => activeFindingObjs.find(a => a!.id === f.id)!.title.toLowerCase());
       
       biggestOpportunityExplanation = `Based on your answers, your biggest challenge isn't lack of motivation. It is the combination of:\n\n• ${oppBullets.join('\n• ')}\n\nImproving these habits alone is likely to produce the biggest improvement over the next few months.`;
       
       const habitsList = overallBullets.length > 1 
         ? overallBullets.slice(0, -1).join(', ') + ', and ' + overallBullets[overallBullets.length - 1]
         : overallBullets[0] || 'these daily habits';
       overallSummary = `You are highly motivated to ${weightDirection === 'gain' ? 'gain' : 'lose'} weight, but several daily habits—including ${habitsList}—are making progress much harder than it needs to be.\n\nThe good news is that improving just three habits could significantly improve your health over the next few months.`;
    } else {
       biggestOpportunityExplanation = `Nutrition is the foundation of weight management. Reducing excess calorie intake and improving meal timing here will make the biggest impact in the shortest amount of time.`;
       overallSummary = `You are highly motivated to ${weightDirection === 'gain' ? 'gain' : 'lose'} weight. We have identified some key areas to focus on. The good news is that optimizing these habits could significantly improve your health over the next few months.`;
    }

    // Extract medical conditions (e.g. from answers.medical_conditions)
    const medicalConditions = answers.medical_conditions ? (Array.isArray(answers.medical_conditions) ? answers.medical_conditions : [answers.medical_conditions]) : [];
    
    // Protein and Calories are pre-calculated at the top of the file
    const nutritionPlan = {
      protein: `≈${proteinGrams} g/day`,
      calories: `≈${dailyCalories} kcal/day`,
      water: `≈${dailyWaterLiters} L/day`,
      proteinGrams: proteinGrams,
      carbs: 'Moderate',
      fats: 'Moderate',
      naturalSources: this.foodProvider.getRecommendedFoods(answers.food_preference),
      supplements: this.supplementProvider.getRecommendedSupplements(
        answers.assessmentId || 'healthy-weight-gain', // default if not provided
        'generic', // can be dynamic based on user profile later
        medicalConditions
      )
    };

    return {
      bmi: bmi.toFixed(1),
      bmr: Math.round(bmr),
      fatPercentage: fatPercentage.toFixed(1),
      idealWeight: `${Math.round(minIdealKg)} - ${Math.round(maxIdealKg)} kg`,
      weightDifferenceKg,
      weightDirection,
      
      pillarScores,
      overallScore: scoreResult.overallWellnessScore,
      scoreMeaning,
      overallSummary,
      timeline,
      metricCards,
      strengths,
      improvements,
      scoreExplanation,
      biggestOpportunity: scoreResult.biggestOpportunity,
      biggestOpportunityExplanation,
      priorityPlan,
      nutritionPlan,
      recommendedAssessments: []
    } as CalculatedMetrics;
  }
}
