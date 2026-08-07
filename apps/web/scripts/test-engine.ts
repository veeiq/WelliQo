import { AssessmentRegistry } from '../src/assessments/registry';
import { ScoreEngine } from '../src/engine/score-engine';
import { ReportBuilder } from '../src/engine/report-builder';
import { RulesEngine } from '../src/engine/rules-engine';
import { SynergyEngine } from '../src/engine/synergy-engine';
import fs from 'fs';

const universalAnswers = {
  name: 'Rahul Sharma',
  age: 34,
  gender: 'male',
  height: 170,
  weight: 86,
  conditions: ['hbp'],
  occupation: 'professional',
  activityLevel: 'sedentary',
  food_preference: 'non_vegetarian',
  smoking: 'no',
  alcohol: 'occasionally'
};

const assessmentAnswers = {
  portion_control: 'never',
  restaurant_food: '2_3_week',
  sugary_drinks_fl: 'daily',
  protein_intake: 'rarely',
  mindless_snacking: 'frequently',
  late_eating_fl: 'every_day',
  weekend_eating: 'much_worse',
  daily_steps_fl: 'below_4k',
  strength_training: 'none',
  cardio: 'none',
  seated_hours: '10_plus',
  work_movement: 'never',
  daily_routine: 'mostly_sitting',
  sugar_cravings: 'daily',
  satiety: '2_3',
  energy_crashes: 'frequently',
  weight_plateau: 'yes',
  compensatory_eating: 'frequently',
  sleep_hours_fl: '5_6',
  stress_level: 'high',
  wake_refreshed: 'rarely',
  daily_energy: 'poor',
  emotional_eating_fl: 'frequently',
  biggest_obstacle_fl: 'schedule',
  commitment_fl: 9
};

async function main() {
  const assessment = AssessmentRegistry.get('lose_weight');
  if (!assessment || assessment.status !== 'available') {
    console.error('Assessment not found or not available');
    return;
  }
  
  const allAnswers = { ...universalAnswers, ...assessmentAnswers };
  
  const rulesEngine = new RulesEngine();
  const synergyEngine = new SynergyEngine();
  const scoreEngine = new ScoreEngine();
  const reportBuilder = new ReportBuilder();

  const rulesResult = rulesEngine.evaluate(allAnswers as any);
  const activeIndicators = new Set([...rulesResult.evidenceIds, ...rulesResult.findingIds]);
  const synergyResult = synergyEngine.evaluate(activeIndicators);
  const scoreResult = scoreEngine.calculate(rulesResult, synergyResult, assessment.config as any);
  const report = reportBuilder.build(allAnswers, rulesResult, synergyResult, scoreResult);
  
  fs.writeFileSync('rahul_report.json', JSON.stringify(report, null, 2));
  console.log('Report generated at rahul_report.json');
}

main().catch(console.error);
