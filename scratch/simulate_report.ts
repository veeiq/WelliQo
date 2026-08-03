import { MasterEngineConfig } from '../packages/intelligence/src/index';
import { ReportGenerator } from '../packages/assessment-engine/src/reports/ReportGenerator';

const generator = new ReportGenerator(MasterEngineConfig);

const fs = require('fs');
let output = `# Founder QA: 5 Persona Simulations\n\n`;

function generatePersonaReport(name: string, decisionKeywords: string[]) {
  // Find decisions that match the keywords
  const decisions = MasterEngineConfig.decisions
    .filter((d: any) => decisionKeywords.some((keyword) => d.clinicalMeaning.includes(keyword)))
    .map((d: any) => d.id);

  const mockUserState = {
    id: 'user_mock_123',
    facts: {},
    scores: {},
    triggeredFacts: [],
    triggeredInsights: [],
    triggeredDecisions: decisions,
  };

  const report = generator.generate(mockUserState);

  output += `## Persona: ${name}\n`;
  output += `${report}\n\n======================================================\n\n`;
}

generatePersonaReport('Office Worker with Emotional Eating', [
  'Desk job inactivity',
  'Stress eating after work',
]);
generatePersonaReport('Postpartum Mother', ['Postpartum exhaustion']);
generatePersonaReport('PCOS', ['PCOS belly fat']);
generatePersonaReport('College Student', ['Budget constraints', 'Late night TV snacking']);
generatePersonaReport('Middle-Aged Man with Diabetes', [
  'Prediabetes risk',
  'Joint pain during cardio',
]);

fs.writeFileSync('./scratch/founder_qa_five_personas.md', output);
console.log('Successfully generated 5 QA simulations.');
