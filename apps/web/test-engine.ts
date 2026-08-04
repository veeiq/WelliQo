import { RulesEngine } from './src/engine/rules-engine';
import { SynergyEngine } from './src/engine/synergy-engine';
import { ScoreEngine } from './src/engine/score-engine';
import { config } from './src/assessments/weight-management/config';
import { EngineValidator } from './src/engine/validator';
import { FormulaRegistry } from './src/engine/formula-registry';

function run() {
  console.log("=== STARTING ENGINE VALIDATION ===");
  const validator = new EngineValidator();
  try {
    validator.validateKnowledgeIntegrity();
    console.log("✅ Knowledge Integrity Validated Successfully.");
  } catch (e) {
    console.error("❌ Integrity Check Failed:", e.message);
    process.exit(1);
  }

  console.log("\n=== EXECUTING TEST PERSONA ===");
  // Create test answers
  // Persona: Needs to lose weight, sedentary, high stress, emotional eater, poor diet
  const answers = {
    weight: 95,
    height: 1.75,
    age: 35,
    gender: 'female',
    weight_goal: 'lose',
    target_weight: 75,
    goal_timeline: '3m', // Unrealistic timeline (20kg in 3m)
    weight_history: 'large_fluctuations', // weight cycling
    weight_attempts: 'more_than_5', // chronic dieter
    biggest_obstacle: 'emotional_eating',
    meals_per_day: '1_2', // low freq
    skip_breakfast: 'almost_every_day', // skips breakfast
    snacking_frequency: 'throughout_day', // continuous grazing
    late_eating: 'every_day', // chronic late
    eating_out: 'almost_daily', // high restaurant
    sugary_drinks: 'daily', // high sugar
    portion_sizes: 'large', // large portions
    cravings_freq: 'daily', // persistent cravings
    cravings_time: 'late_night', // late cravings
    emotional_eating: 'almost_always', // chronic emotional
    sleep_hours: 'less_than_5', // severe depriv
    sleep_quality: 'very_poor', // severe disruption
    sitting_hours: 'more_than_10', // very high sedentary
    daily_steps: 'less_than_3000', // very low movement
    planned_exercise: 'never', // no exercise
    stress_level: 'very_high', // chronic stress
    energy_level: 'very_low', // low energy
    confidence: '2', // low confidence
    support_system: 'no_support' // no support
  };

  const rulesEngine = new RulesEngine();
  const synergyEngine = new SynergyEngine();
  const scoreEngine = new ScoreEngine();
  const formulaRegistry = FormulaRegistry.getInstance();

  // 1. Rules
  const rulesResult = rulesEngine.evaluate(answers);
  console.log(`\nGenerated Evidence IDs: ${rulesResult.evidenceIds.size}`);
  console.log(Array.from(rulesResult.evidenceIds));
  
  console.log(`\nGenerated Direct Findings: ${rulesResult.findingIds.size}`);
  console.log(Array.from(rulesResult.findingIds));

  // 2. Synergy
  const activeIndicators = new Set([...rulesResult.evidenceIds, ...rulesResult.findingIds]);
  const synergyResult = synergyEngine.evaluate(activeIndicators);
  console.log(`\nDiscovered Synergy Patterns: ${synergyResult.synergyFindingIds.size}`);
  synergyResult.matchedSynergies.forEach(s => {
    console.log(`- ${s.synergyId} -> ${s.findingId} (Boost: +5%)`);
  });

  // 3. Score Engine
  const scoreResult = scoreEngine.calculate(rulesResult, synergyResult, config);
  
  console.log("\n=== AUDIT TRAIL ===");
  console.log("Initial Pillar Scores:", scoreResult.auditTrail.initialPillarScores);
  console.log(`Total Deductions Applied: ${scoreResult.auditTrail.deductionsApplied.length}`);
  console.log("Final Pillar Scores:", scoreResult.auditTrail.finalPillarScores);
  console.log(`Raw Final Score: ${scoreResult.auditTrail.rawFinalScore}`);
  console.log(`Clamped Final Score: ${scoreResult.auditTrail.finalScore}`);
  console.log(`Internal Confidence Score: ${scoreResult.auditTrail.overallConfidence}%`);

  console.log("\n=== REPORT SUMMARY ===");
  console.log(`Final Wellness Score: ${scoreResult.overallWellnessScore}/100`);
  console.log(`Biggest Win: ${scoreResult.biggestWin} (${scoreResult.pillarScores[scoreResult.biggestWin] || 0}%)`);
  console.log(`Biggest Opportunity: ${scoreResult.biggestOpportunity} (${scoreResult.pillarScores[scoreResult.biggestOpportunity] || 0}%)`);
  
  // 4. Formulas
  console.log("\n=== FORMULA EVALUATION ===");
  const metrics = formulaRegistry.batchEvaluate([
    'FORMULA_BMI',
    'FORMULA_BODY_FAT_ESTIMATE',
    'FORMULA_BMR',
    'FORMULA_WATER_TARGET'
  ], {
    weight: answers.weight,
    height: answers.height,
    age: answers.age,
    gender: answers.gender,
    target_weight: answers.target_weight
  });
  console.log("Metrics calculated safely:", metrics);

  console.log("\n✅ Pipeline Executed Successfully.");
}

run();
