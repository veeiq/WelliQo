import type { config, kernel } from '@welliqo/assessment-engine';
import { mockAssessmentResult } from '@welliqo/ui/components/assessment';

export const mockJourney: config.ValidatedJourney = {
  id: 'wellness-baseline',
  version: '1.0.0',
  name: 'WelliQo Baseline Assessment',
  description: 'Understand your body, energy, and habits.',
  sections: [
    {
      id: 'section-energy',
      title: 'Energy & Fatigue',
      enabled: true,
      questionGroups: [
        {
          id: 'group-energy-patterns',
          title: 'Daily Energy Patterns',
          questions: [
            {
              id: 'afternoon_crash',
              type: 'single-choice',
              label: 'Do you regularly experience a sharp drop in energy or brain fog in the mid-afternoon (around 2-3 PM)?',
              options: [
                { id: 'opt1', label: 'Yes, almost every day', value: 'frequent' },
                { id: 'opt2', label: 'Sometimes, depending on lunch', value: 'occasional' },
                { id: 'opt3', label: 'Rarely or never', value: 'never' },
              ],
              required: true,
            },
            {
              id: 'morning_caffeine',
              type: 'single-choice',
              label: 'When do you typically consume your first caffeinated beverage?',
              options: [
                { id: 'opt1', label: 'Immediately upon waking', value: 'immediate' },
                { id: 'opt2', label: 'Within 30-60 minutes of waking', value: 'under_hour' },
                { id: 'opt3', label: 'After 90 minutes of waking', value: 'delayed' },
                { id: 'opt4', label: 'I do not consume caffeine', value: 'none' },
              ],
              required: true,
            },
            {
              id: 'breakfast_habit',
              type: 'single-choice',
              label: 'What does a typical breakfast look like for you?',
              options: [
                { id: 'opt1', label: 'Carb-heavy (Cereal, toast, pastry, oatmeal)', value: 'carbs' },
                { id: 'opt2', label: 'Protein-heavy (Eggs, Greek yogurt, protein shake)', value: 'protein' },
                { id: 'opt3', label: 'I skip breakfast / Fast until lunch', value: 'skip' },
              ],
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

// We create a minimal engine configuration to satisfy the type.
// For Sprint 3D, we are bridging the execution pipeline.
// Since we don't have a real CMS config yet, the real engine will process this and return empty arrays.
// However, the instructions state "Consume the live AssessmentResult directly from the Zustand store."
// For the sake of having a rich report in Sprint 3D without CMS, we will inject the mock result fields
// via a mock config that has one rule, or we will just use the real engine which returns empty,
// and the report will handle the empty state.
export const mockEngineConfig: kernel.EngineConfiguration = {
  facts: [],
  factRules: [],
  insights: mockAssessmentResult.insights,
  insightRules: mockAssessmentResult.insights.map((insight) => ({
    id: `rule-${insight.id}`,
    insightId: insight.id,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    conditions: [{ operator: 'equals', factId: 'dummy', value: true }] as any,
  })),
  scoreCategories: [],
  scoreRules: [],
  engineRules: [],
  recommendationRules: mockAssessmentResult.recommendations.map((rec) => ({
    id: `rule-${rec.id}`,
    recommendationId: rec.id,
    decisionId: `dec-${rec.id}`,
    recommendationType: rec.type,
    target: 'general' as const,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    conditions: [{ operator: 'equals', factId: 'dummy', value: true }] as any,
  })),
};
