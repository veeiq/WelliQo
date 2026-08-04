import { RulesEvaluationResult } from './rules-engine';
import { SynergyEvaluationResult } from './synergy-engine';
import { ScoreEngineResult } from './score-engine';
import { FormulaRegistry } from './formula-registry';
import { KnowledgeRepositoryLoader } from './knowledge-loader';
import { CalculatedMetrics, PillarScore, MetricCardData } from '../store/assessment-store';

export class ReportBuilder {
  private loader: KnowledgeRepositoryLoader;
  private formulaRegistry: FormulaRegistry;

  constructor() {
    this.loader = KnowledgeRepositoryLoader.getInstance();
    this.formulaRegistry = FormulaRegistry.getInstance();
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
    
    if (baseline.weight > maxIdealKg) {
      weightDifferenceKg = baseline.weight - maxIdealKg;
      weightDirection = 'lose';
    } else if (baseline.weight < minIdealKg) {
      weightDifferenceKg = minIdealKg - baseline.weight;
      weightDirection = 'gain';
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
        timeline: r!.expectedTimeline || '',
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
    const strengths = Object.entries(scoreResult.pillarScores).filter(([_, s]) => s >= 80).map(([p]) => p);
    const improvements = Object.entries(scoreResult.pillarScores).filter(([_, s]) => s < 70).map(([p]) => p);

    // Metric Cards
    const metricCards: MetricCardData[] = [
      {
        id: 'bmi',
        title: 'BMI',
        icon: 'Activity',
        current: bmi.toFixed(1),
        ideal: '18.5 - 24.9',
        difference: (bmi - 22).toFixed(1),
        meaning: bmi > 25 ? 'Above Ideal' : 'Ideal',
        status: bmi > 25 ? 'warning' : 'good',
        clinicalMeaning: bmi > 25 ? 'Above healthy range' : 'Within healthy range',
        primaryFocus: bmi > 25 ? 'Weight Management' : 'Maintenance',
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

    // Biggest Opportunity Explanation
    let biggestOpportunityExplanation = 'Focusing here will create a cascading effect of positive changes across all other areas of your health.';
    if (scoreResult.biggestOpportunity === 'Nutrition') {
      biggestOpportunityExplanation = 'Nutrition is the foundation of weight management. Fixing your energy balance and meal timing here will make the biggest impact in the shortest amount of time.';
    } else if (scoreResult.biggestOpportunity === 'Recovery') {
      biggestOpportunityExplanation = 'Improving your sleep and stress management makes healthy eating, exercise, and appetite control significantly easier because recovery deeply influences your metabolic hormones.';
    } else if (scoreResult.biggestOpportunity === 'Mindset') {
      biggestOpportunityExplanation = 'Your mindset dictates your consistency. By addressing mental blocks or stress, you build a sustainable foundation that outlasts temporary motivation.';
    }

    // Dummy Nutrition Plan (Can be fully dynamic later)
    const nutritionPlan = {
      protein: '1.6g / kg',
      carbs: 'Moderate',
      fats: 'Moderate',
      naturalSources: ['Chicken', 'Fish', 'Beans'],
      supplements: ['Protein Powder']
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
