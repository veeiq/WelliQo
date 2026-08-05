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

  if (allPassed) {
    console.log('\n✅ ALL REGRESSION TESTS PASSED!');
  } else {
    console.log('\n❌ SOME REGRESSION TESTS FAILED!');
    process.exit(1);
  }
}

main().catch(console.error);
