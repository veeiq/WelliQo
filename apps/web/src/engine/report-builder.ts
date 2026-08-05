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
    
    // We need baseline variables to feed into formulas
    // The store's 'answers' actually includes 'data' which has height/weight/age etc.
    const baseline = {
      weight: answers.weight || 70,
      height: (answers.height || 170) / 100, // formulas usually expect height in m
      age: answers.age || 30,
      gender: answers.gender || 'female',
      target_weight: answers.target_weight || 70,
    };

    // Calculate core metrics via FormulaRegistry instead of hardcoded logic
    // Calculate core metrics via FormulaRegistry for true clinical formulas
    const metrics = this.formulaRegistry.batchEvaluate([
      'FORMULA_BMI',
      'FORMULA_BODY_FAT_ESTIMATE',
      'FORMULA_BMR'
    ], baseline);

    const bmi = metrics['FORMULA_BMI'] || 0;
    const bmr = metrics['FORMULA_BMR'] || 0;
    const fatPercentage = metrics['FORMULA_BODY_FAT_ESTIMATE'] || 0;

    // Ideal Weight / Differences are simple targets, keeping them calculated here for now
    const heightM = baseline.height;
    const minIdealKg = 18.5 * (heightM * heightM);
    const maxIdealKg = 24.9 * (heightM * heightM);

    let weightDifferenceKg = 0;
    let weightDirection: 'lose' | 'gain' | 'maintain' = 'maintain';
    
    if (answers.assessmentId === 'healthy-weight-gain') {
      weightDirection = 'gain';
      weightDifferenceKg = Math.max(0, (baseline.target_weight || minIdealKg) - baseline.weight);
      if (weightDifferenceKg === 0) weightDifferenceKg = 5; // Assume 5kg muscle gain goal if unspecified
    } else if (answers.assessmentId === 'lose-weight') {
      weightDirection = 'lose';
      weightDifferenceKg = Math.max(0, baseline.weight - (baseline.target_weight || maxIdealKg));
      if (weightDifferenceKg === 0) weightDifferenceKg = 5;
    } else {
      if (baseline.target_weight > baseline.weight) {
        weightDifferenceKg = baseline.target_weight - baseline.weight;
        weightDirection = 'gain';
      } else if (baseline.target_weight < baseline.weight) {
        weightDifferenceKg = baseline.weight - baseline.target_weight;
        weightDirection = 'lose';
      } else if (baseline.weight > maxIdealKg) {
        weightDifferenceKg = baseline.weight - maxIdealKg;
        weightDirection = 'lose';
      } else if (baseline.weight < minIdealKg) {
        weightDifferenceKg = minIdealKg - baseline.weight;
        weightDirection = 'gain';
      }
    }

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
    let scoreMeaning = 'Excellent';
    if (scoreResult.overallWellnessScore < 90) scoreMeaning = 'Very Good';
    if (scoreResult.overallWellnessScore < 80) scoreMeaning = 'Good';
    if (scoreResult.overallWellnessScore < 70) scoreMeaning = 'Needs Improvement';
    if (scoreResult.overallWellnessScore < 60) scoreMeaning = 'High Priority';

    // Strengths and Improvements
    const strengths = Object.entries(scoreResult.pillarScores).filter(([_, s]) => s >= 85).map(([p]) => p);
    const improvements = Object.entries(scoreResult.pillarScores).filter(([_, s]) => s < 70).map(([p]) => p);

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

    // Timeline
    let timeline = 'Next 30 Days';
    if (weightDirection === 'lose' && weightDifferenceKg > 0) {
      const weeksNeeded = Math.ceil(weightDifferenceKg / 0.75);
      const monthsNeeded = Math.ceil(weeksNeeded / 4);
      const minMonths = Math.max(1, monthsNeeded - 1);
      const maxMonths = monthsNeeded + 1;
      timeline = `Approximately ${minMonths}–${maxMonths} months`;
    } else if (weightDirection === 'gain' && weightDifferenceKg > 0) {
      const weeksNeeded = Math.ceil(weightDifferenceKg / 0.25);
      const monthsNeeded = Math.ceil(weeksNeeded / 4);
      const minMonths = Math.max(1, monthsNeeded - 1);
      const maxMonths = monthsNeeded + 1;
      timeline = `Approximately ${minMonths}–${maxMonths} months`;
    }

    // Biggest Opportunity Explanation (Personalized)
    let biggestOpportunityExplanation = '';
    let overallSummary = '';
    const topNegativeHabits = scoreExplanation.map(f => {
      const labelStr = f.label || (f as any).title || '';
      return labelStr.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '') === 'drinking' ? 'Daily sugary drinks' : 
             labelStr.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '') === 'consistently' ? 'Very large portions' : 
             labelStr.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '') === 'intense' ? 'Frequent cravings' : 
             labelStr.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '') === 'you' ? 'Poor sleep schedule' : 
             'These core habits';
    });
    
    // Make it feel super personal instead of generic
    if (scoreExplanation.length >= 2) {
       const humanizeFinding = (id: string) => {
         if (id.includes('NO_LIQUID_CALORIES')) return 'low liquid calorie intake';
         if (id.includes('SUGAR') || id.includes('LIQUID')) return 'excess liquid calories';
         if (id.includes('APPETITE')) return 'low appetite';
         if (id.includes('EARLY_SATIETY')) return 'feeling full too quickly';
         if (id.includes('PORTION')) return 'oversized portions';
         if (id.includes('PROTEIN')) return 'low protein intake';
         if (id.includes('CRAVING')) return 'frequent cravings';
         if (id.includes('LOW_SNACKING')) return 'missing healthy snacks';
         if (id.includes('SNACK')) return 'frequent snacking';
         if (id.includes('SLEEP')) return 'poor sleep schedule';
         if (id.includes('LATE')) return 'late night eating';
         if (id.includes('STRESS')) return 'high stress';
         if (id.includes('RESTAURANT')) return 'frequent fast food';
         if (id.includes('NEAT')) return 'low daily activity';
         if (id.includes('MOVEMENT') || id.includes('ROUTINE')) return 'prolonged sitting';
         if (id.includes('EXERCISE') || id.includes('STRENGTH')) return 'lack of exercise';
         return id.replace('FINDING_HWG_', '').replace('FINDING_', '').replace(/_/g, ' ').toLowerCase();
       };

       // Get findings specifically for the biggest opportunity pillar
       const oppDeductions = scoreResult.auditTrail.deductionsApplied
         .filter(d => d.pillar.toLowerCase() === scoreResult.biggestOpportunity.toLowerCase() && d.findingId);
       
       let oppFindings = oppDeductions
         .map(d => activeFindingObjs.find(f => f!.id === d.findingId))
         .filter(Boolean)
         .slice(0, 3);
         
       if (oppFindings.length === 0) oppFindings = activeFindingObjs.slice(0, 3);

       const oppBullets = oppFindings.map(f => humanizeFinding(f!.id));
       const overallBullets = scoreExplanation.slice(0,3).map(f => humanizeFinding(f.id));
       
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
    
    const proteinGrams = Math.round(baseline.weight * 1.6);
    const nutritionPlan = {
      protein: `≈${proteinGrams} g/day`,
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
