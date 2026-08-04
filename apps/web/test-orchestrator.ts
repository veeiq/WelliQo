import { RulesEngine } from './src/engine/rules-engine';
import { SynergyEngine } from './src/engine/synergy-engine';
import { ScoreEngine } from './src/engine/score-engine';
import { ReportBuilder } from './src/engine/report-builder';
import { config } from './src/assessments/weight-management/config';

// 1. Simulate Persona (Same as test-engine.ts, but now focusing on the report output)
const testAnswers = {
  // Baseline / Universal Profile
  goal: "weight",
  age: 45,
  gender: "male",
  weight: 98,
  height: 175,
  activityLevel: "sedentary",

  // 1. Goals
  weight_goal: "lose",
  target_weight: 80,
  goal_timeline: "three_six_months",

  // 2. History
  weight_history: "gained_recently",
  weight_attempts: "many_times",
  biggest_obstacle: "cravings",

  // 3. Nutrition
  meals_per_day: "one_two",
  skip_breakfast: true,
  snacking_frequency: "often",
  late_eating: "often",
  eating_out: "frequently",
  sugary_drinks: "daily",
  portion_sizes: "large",
  cravings_freq: "often",
  cravings_time: "evening",
  emotional_eating: "often",

  // 4. Movement
  sitting_hours: "more_than_eight",
  daily_steps: "less_than_3k",
  planned_exercise: "never",

  // 5. Recovery
  sleep_hours: "less_than_5",
  sleep_quality: "poor",
  stress_level: "high",
  energy_level: "low",

  // 6. Mindset
  confidence: 4,
  support_system: "none"
};

console.log("=========================================");
console.log("    ORCHESTRATOR PIPELINE EXECUTION      ");
console.log("=========================================\n");

console.log("1. Input Answers (Simulating UI Submit)");
console.log("Profile & Assessment Data:", Object.keys(testAnswers).length, "fields\n");

// Engines
const rulesEngine = new RulesEngine();
const synergyEngine = new SynergyEngine();
const scoreEngine = new ScoreEngine();
const reportBuilder = new ReportBuilder();

// 2. Rules Evaluation
const rulesResult = rulesEngine.evaluate(testAnswers);
console.log("2. Rules Engine Output:");
console.log("Generated Evidence IDs:", rulesResult.evidenceIds.size);
console.log("Direct Findings Triggered:", rulesResult.findingIds.size, "\n");

// 3. Synergy Evaluation
const activeIndicators = new Set([...rulesResult.evidenceIds, ...rulesResult.findingIds]);
const synergyResult = synergyEngine.evaluate(activeIndicators);
console.log("3. Synergy Engine Output:");
console.log("Synergy Findings Discovered:", synergyResult.synergyFindingIds.size, "\n");

// 4. Score Calculation
const scoreResult = scoreEngine.calculate(rulesResult, synergyResult, config);
console.log("4. Score Engine Output:");
console.log("Base Scores:", scoreResult.auditTrail.initialPillarScores);
console.log("Deductions Applied:", scoreResult.auditTrail.deductionsApplied.length);
console.log("Final Pillar Scores:", scoreResult.pillarScores);
console.log("Overall Wellness Score:", scoreResult.overallWellnessScore, "\n");

// 5. Report Building (What the UI will consume)
const finalReport = reportBuilder.build(testAnswers, rulesResult, synergyResult, scoreResult);

console.log("=========================================");
console.log("      FINAL REPORT (UI CONSUMPTION)      ");
console.log("=========================================\n");

console.log("-> Core Metrics");
console.log(`BMI: ${finalReport.bmi}`);
console.log(`Est. Body Fat: ${finalReport.fatPercentage}%`);
console.log(`BMR: ${finalReport.bmr} kcal`);
console.log(`Ideal Weight: ${finalReport.idealWeight}`);
console.log(`Weight Direction: ${finalReport.weightDirection} (${finalReport.weightDifferenceKg.toFixed(1)}kg)`);
console.log(`Timeline: ${finalReport.timeline}\n`);

console.log("-> Pillars");
finalReport.pillarScores.forEach(p => console.log(`[${p.icon}] ${p.label}: ${p.score}/100`));
console.log(`\nOVERALL SCORE: ${finalReport.overallScore} (${finalReport.scoreMeaning})\n`);

console.log("-> Score Explanation (Top 3 Findings)");
finalReport.scoreExplanation.forEach(f => console.log(`- ${f.label}`));
console.log();

console.log("-> Priority Plan (Recommendations)");
finalReport.priorityPlan.forEach(r => console.log(`[${r.priority}] ${r.title}: ${r.action}`));
console.log();

console.log("-> Metric Cards");
finalReport.metricCards.forEach(c => console.log(`[${c.title}] Current: ${c.current} | Ideal: ${c.ideal} -> ${c.meaning} (${c.status})`));
console.log();
