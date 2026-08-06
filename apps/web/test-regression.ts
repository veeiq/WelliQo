import { RulesEngine } from './src/engine/rules-engine';
import { SynergyEngine } from './src/engine/synergy-engine';
import { ScoreEngine } from './src/engine/score-engine';
import { ReportBuilder } from './src/engine/report-builder';
import { config } from './src/assessments/weight-management/config';

// Helper to run a test
async function runRegressionTest(personaName: string, answers: Record<string, any>, expectedRange: [number, number]) {
  const rulesEngine = new RulesEngine();
  const synergyEngine = new SynergyEngine();
  const scoreEngine = new ScoreEngine();
  const reportBuilder = new ReportBuilder();

  // Run the full pipeline
  const rulesResult = rulesEngine.evaluate(answers);
  const activeIndicators = new Set([...rulesResult.evidenceIds, ...rulesResult.findingIds]);
  const synergyResult = synergyEngine.evaluate(activeIndicators);
  const scoreResult = scoreEngine.calculate(rulesResult, synergyResult, config);
  const report = reportBuilder.build(answers, rulesResult, synergyResult, scoreResult);

  const score = report.overallScore;
  
  const passed = score >= expectedRange[0] && score <= expectedRange[1];
  console.log(`\n--- Persona: ${personaName} ---`);
  console.log(`Score: ${score}/100 (Expected: ${expectedRange[0]}-${expectedRange[1]}) => ${passed ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Biggest Opportunity: ${report.biggestOpportunity}`);
  console.log(`Strengths: ${report.strengths.join(', ') || 'None'}`);
  console.log(`Improvements: ${report.improvements.join(', ') || 'None'}`);
  
  if (scoreResult.auditTrail.validatorInterventions && scoreResult.auditTrail.validatorInterventions.length > 0) {
    console.log(`Validator Interventions:`);
    scoreResult.auditTrail.validatorInterventions.forEach(vi => {
      console.log(`  - Triggered: ${vi.ruleId} | Reason: ${vi.triggerCondition} | Score: ${vi.oldScore} -> ${vi.newScore}`);
    });
  }

  console.log(`Metrics -> BMI: ${report.bmi}, Protein: ${report.nutritionPlan.protein}, Timeline: ${report.timeline}, Calories: ${(report.nutritionPlan as any).calories || 'N/A'}, Water: ${(report.nutritionPlan as any).water || 'N/A'}`);
  return passed;
}

async function main() {
  let allPassed = true;

  // 1. Healthy Adult
  const healthyAdult = {
    name: 'Healthy Adult', age: 30, gender: 'female', height: 165, weight: 60,
    weight_goal: 'maintain', target_weight: 60, goal_timeline: 'none',
    weight_history: 'stable', weight_attempts: '0', biggest_obstacle: 'none',
    meals_per_day: '3', skip_breakfast: 'never', snacking_frequency: 'rarely',
    late_eating: 'never', eating_out: 'rarely', sugary_drinks: 'rarely',
    portion_sizes: 'moderate', cravings_freq: 'rarely', emotional_eating: 'never',
    sleep_hours: '7_plus', sitting_hours: '4_7', daily_steps: 'more_10k',
    confidence: '9', motivation: '9', support: 'family',
    easiest_habit: 'nutrition', hardest_habit: 'none', commitment: '10'
  };
  if (!await runRegressionTest('Healthy Adult', healthyAdult, [90, 100])) allPassed = false;

  // 2. Overweight Office Worker
  const officeWorker = {
    name: 'Office Worker', age: 45, gender: 'male', height: 175, weight: 95,
    weight_goal: 'lose', target_weight: 80, goal_timeline: '6m',
    weight_history: 'gained_5', weight_attempts: '2_3', biggest_obstacle: 'schedule',
    meals_per_day: '2', skip_breakfast: 'sometimes', snacking_frequency: 'once',
    late_eating: 'sometimes', eating_out: '1_2', sugary_drinks: 'weekly',
    portion_sizes: 'large', cravings_freq: 'sometimes', emotional_eating: 'sometimes',
    sleep_hours: '6_7', sitting_hours: '8_10', daily_steps: '3k_7k',
    confidence: '6', motivation: '7', support: 'spouse',
    easiest_habit: 'breakfast', hardest_habit: 'exercise', commitment: '8'
  };
  if (!await runRegressionTest('Overweight Office Worker', officeWorker, [70, 85])) allPassed = false;

  // 3. Severe Weight Management (The Test Persona from user)
  const testUser = {
    name: 'Test User', age: 38, gender: 'male', height: 168, weight: 91,
    weight_goal: 'lose', target_weight: 72, goal_timeline: '1m',
    weight_history: 'gained_10', weight_attempts: '3_plus', biggest_obstacle: 'stress',
    meals_per_day: '2', skip_breakfast: 'daily', snacking_frequency: 'multiple',
    late_eating: 'often', eating_out: '5_plus', sugary_drinks: 'daily',
    portion_sizes: 'very_large', cravings_freq: 'daily', emotional_eating: 'almost_always',
    sleep_hours: 'less_5', sitting_hours: 'more_10', daily_steps: 'less_3k',
    confidence: '4', motivation: '9', support: 'no_one',
    easiest_habit: 'sleep', hardest_habit: 'consistency', commitment: '10'
  };
  if (!await runRegressionTest('Severe Weight Management', testUser, [50, 70])) allPassed = false;

  // 4. Active Gym User
  const activeGym = {
    name: 'Active Gym User', age: 28, gender: 'male', height: 180, weight: 80,
    weight_goal: 'recomp', target_weight: 80, goal_timeline: '3m',
    weight_history: 'stable', weight_attempts: '1', biggest_obstacle: 'cravings',
    meals_per_day: '4', skip_breakfast: 'never', snacking_frequency: 'rarely',
    late_eating: 'rarely', eating_out: 'rarely', sugary_drinks: 'rarely',
    portion_sizes: 'large', cravings_freq: 'sometimes', emotional_eating: 'never',
    sleep_hours: '7_plus', sitting_hours: '4_7', daily_steps: 'more_10k',
    confidence: '9', motivation: '10', support: 'friends',
    easiest_habit: 'exercise', hardest_habit: 'cravings', commitment: '10'
  };
  if (!await runRegressionTest('Active Gym User', activeGym, [85, 100])) allPassed = false;

  // 5. Underweight User
  const underweight = {
    name: 'Underweight User', age: 22, gender: 'female', height: 165, weight: 45,
    weight_goal: 'gain', target_weight: 55, goal_timeline: '6m',
    weight_history: 'stable', weight_attempts: '2_3', biggest_obstacle: 'schedule',
    meals_per_day: '2', skip_breakfast: 'often', snacking_frequency: 'rarely',
    late_eating: 'rarely', eating_out: 'rarely', sugary_drinks: 'rarely',
    portion_sizes: 'small', cravings_freq: 'rarely', emotional_eating: 'never',
    sleep_hours: '6_7', sitting_hours: '8_10', daily_steps: '3k_7k',
    confidence: '7', motivation: '8', support: 'family',
    easiest_habit: 'snacking', hardest_habit: 'eating_more', commitment: '9'
  };
  if (!await runRegressionTest('Underweight User', underweight, [85, 100])) allPassed = false;

  // 6. Over-Penalized Eater (Nutrition Synergy Test)
  // Expecting: Large portions + Sugary drinks + Late eating -> Overlapping deductions offset by synergy
  const overPenalized = {
    name: 'Over-Penalized Eater', age: 35, gender: 'male', height: 175, weight: 105,
    weight_goal: 'lose', target_weight: 85, goal_timeline: '3m',
    weight_history: 'gained_10', weight_attempts: '2_3', biggest_obstacle: 'cravings',
    meals_per_day: '2', skip_breakfast: 'daily', snacking_frequency: 'multiple',
    late_eating: 'often', eating_out: '5_plus', sugary_drinks: 'daily',
    portion_sizes: 'very_large', cravings_freq: 'daily', emotional_eating: 'sometimes',
    sleep_hours: '6_7', sitting_hours: '4_7', daily_steps: '7k_10k',
    confidence: '7', motivation: '8', support: 'spouse',
    easiest_habit: 'exercise', hardest_habit: 'nutrition', commitment: '9'
  };
  // Baseline (without synergy score modifier) might be very low (e.g. 30). With synergy, it should recover a bit.
  if (!await runRegressionTest('Over-Penalized Eater', overPenalized, [65, 75])) allPassed = false;

  // 7. Burnout Worker (Recovery/Emotional Synergy Test)
  const burnoutWorker = {
    name: 'Burnout Worker', age: 42, gender: 'female', height: 162, weight: 75,
    weight_goal: 'lose', target_weight: 65, goal_timeline: '6m',
    weight_history: 'gained_5', weight_attempts: '1', biggest_obstacle: 'stress',
    meals_per_day: '3', skip_breakfast: 'sometimes', snacking_frequency: 'sometimes',
    late_eating: 'sometimes', eating_out: '1_2', sugary_drinks: 'rarely',
    portion_sizes: 'moderate', cravings_freq: 'often', emotional_eating: 'almost_always',
    sleep_hours: 'less_5', sitting_hours: '8_10', daily_steps: '3k_7k',
    confidence: '5', motivation: '6', support: 'no_one',
    easiest_habit: 'nutrition', hardest_habit: 'stress', commitment: '7'
  };
  if (!await runRegressionTest('Burnout Worker', burnoutWorker, [80, 95])) allPassed = false;

  // 8. Golden Health (Positive Synergy Test)
  const goldenHealth = {
    name: 'Golden Health', age: 29, gender: 'female', height: 170, weight: 62,
    weight_goal: 'maintain', target_weight: 62, goal_timeline: 'none',
    weight_history: 'stable', weight_attempts: '0', biggest_obstacle: 'none',
    meals_per_day: '3', skip_breakfast: 'never', snacking_frequency: 'rarely',
    late_eating: 'never', eating_out: 'rarely', sugary_drinks: 'rarely',
    portion_sizes: 'moderate', cravings_freq: 'rarely', emotional_eating: 'never',
    sleep_hours: '7_plus', sitting_hours: 'less_4', daily_steps: 'more_10k',
    confidence: '10', motivation: '10', support: 'friends',
    easiest_habit: 'exercise', hardest_habit: 'none', commitment: '10'
  };
  if (!await runRegressionTest('Golden Health', goldenHealth, [95, 100])) allPassed = false;

  // 9. Chronic Dieter (Weight Cycling Test)
  const chronicDieter = {
    name: 'Chronic Dieter', age: 39, gender: 'female', height: 160, weight: 80,
    weight_goal: 'lose', target_weight: 60, goal_timeline: '1m', // unrealistic timeline
    weight_history: 'gained_10', weight_attempts: '3_plus', biggest_obstacle: 'consistency',
    meals_per_day: '3', skip_breakfast: 'sometimes', snacking_frequency: 'sometimes',
    late_eating: 'sometimes', eating_out: 'rarely', sugary_drinks: 'rarely',
    portion_sizes: 'moderate', cravings_freq: 'sometimes', emotional_eating: 'sometimes',
    sleep_hours: '6_7', sitting_hours: '4_7', daily_steps: '7k_10k',
    confidence: '6', motivation: '10', support: 'spouse',
    easiest_habit: 'nutrition', hardest_habit: 'consistency', commitment: '10'
  };
  if (!await runRegressionTest('Chronic Dieter', chronicDieter, [80, 95])) allPassed = false;

  // 10. Unready Beginner (Low Behaviour Readiness Test)
  const unreadyBeginner = {
    name: 'Unready Beginner', age: 50, gender: 'male', height: 182, weight: 110,
    weight_goal: 'lose', target_weight: 95, goal_timeline: '6m',
    weight_history: 'stable', weight_attempts: '0', biggest_obstacle: 'motivation',
    meals_per_day: '3', skip_breakfast: 'sometimes', snacking_frequency: 'often',
    late_eating: 'often', eating_out: '1_2', sugary_drinks: 'sometimes',
    portion_sizes: 'large', cravings_freq: 'often', emotional_eating: 'sometimes',
    sleep_hours: '6_7', sitting_hours: '8_10', daily_steps: 'less_3k',
    confidence: '3', motivation: '5', support: 'no_one',
    easiest_habit: 'none', hardest_habit: 'motivation', commitment: '5'
  };
  if (!await runRegressionTest('Unready Beginner', unreadyBeginner, [80, 95])) allPassed = false;

  // 11. Flawed Athlete (Healthy Minimum Test)
  const flawedAthlete = {
    name: 'Flawed Athlete', age: 32, gender: 'male', height: 180, weight: 75,
    weight_goal: 'maintain', target_weight: 75, goal_timeline: 'none',
    weight_history: 'stable', weight_attempts: '0', biggest_obstacle: 'cravings',
    meals_per_day: '3', skip_breakfast: 'never', snacking_frequency: 'rarely',
    late_eating: 'often', eating_out: 'rarely', sugary_drinks: 'rarely',
    portion_sizes: 'moderate', cravings_freq: 'daily', emotional_eating: 'never',
    sleep_hours: '7_plus', sitting_hours: 'less_4', daily_steps: 'more_10k',
    confidence: '9', motivation: '9', support: 'friends',
    easiest_habit: 'exercise', hardest_habit: 'cravings', commitment: '9'
  };
  // Math might be ~82 due to cravings and late eating, but Rule 1 (VAL_HEALTHY_MINIMUM) should clamp to 85.
  if (!await runRegressionTest('Flawed Athlete', flawedAthlete, [85, 95])) allPassed = false;

  // 12. High Scoring Risk (High Risk Cap Test)
  const highScoringRisk = {
    name: 'High Scoring Risk', age: 40, gender: 'female', height: 165, weight: 85,
    weight_goal: 'lose', target_weight: 70, goal_timeline: '6m',
    weight_history: 'gained_10', weight_attempts: '3_plus', biggest_obstacle: 'stress', // Weight Cycling
    meals_per_day: '3', skip_breakfast: 'sometimes', snacking_frequency: 'rarely',
    late_eating: 'often', eating_out: '5_plus', sugary_drinks: 'daily', // Energy Balance
    portion_sizes: 'large', cravings_freq: 'constant', emotional_eating: 'almost_always', // Emotional Eating
    sleep_hours: 'less_5', sitting_hours: '8_10', daily_steps: 'less_3k', // Recovery Deficit
    confidence: '8', motivation: '9', support: 'family',
    easiest_habit: 'water', hardest_habit: 'nutrition', commitment: '8'
  };
  // Has some "good" isolated answers (meals=3, rarely snack, motivation=9, support=family, water=easiest)
  // Math might reach ~75 or 80. But they have 3+ critical synergies. Rule 2 (VAL_HIGH_RISK_CAP) should clamp to 70.
  if (!await runRegressionTest('High Scoring Risk', highScoringRisk, [50, 70])) allPassed = false;

  // 13. Impossible User (Contradiction Test)
  const impossibleUser = {
    name: 'Impossible User', age: 45, gender: 'male', height: 170, weight: 120, // BMI 41
    weight_goal: 'lose', target_weight: 80, goal_timeline: '6m',
    weight_history: 'stable', weight_attempts: '0', biggest_obstacle: 'none',
    meals_per_day: '3', skip_breakfast: 'never', snacking_frequency: 'rarely',
    late_eating: 'often', eating_out: '5_plus', sugary_drinks: 'daily', // Force Energy Balance
    portion_sizes: 'very_large', cravings_freq: 'rarely', emotional_eating: 'never',
    sleep_hours: '7_plus', sitting_hours: 'less_4', daily_steps: 'more_10k', // Force Active Lifestyle
    confidence: '10', motivation: '10', support: 'friends',
    easiest_habit: 'exercise', hardest_habit: 'none', commitment: '10'
  };
  // Math gives them a good score, but they trigger VAL_CONTRADICTION
  if (!await runRegressionTest('Impossible User', impossibleUser, [60, 85])) allPassed = false;

  if (allPassed) {
    console.log('\n✅ ALL REGRESSION TESTS PASSED!');
  } else {
    console.log('\n❌ SOME REGRESSION TESTS FAILED!');
    process.exit(1);
  }
}

main().catch(console.error);
