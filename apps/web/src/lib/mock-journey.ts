import type { config, kernel } from '@welliqo/assessment-engine';
import { mockAssessmentResult } from '@welliqo/ui/components/assessment';

export const mockJourney: config.ValidatedJourney = {
  id: 'wellness-baseline',
  version: '1.0.0',
  name: 'Wellness Baseline Assessment',
  description: 'Understand your foundational habits.',
  sections: [
    {
      id: 'section-1',
      title: 'Activity & Movement',
      enabled: true,
      questionGroups: [
        {
          id: 'group-1',
          title: 'Daily Activity',
          questions: [
            {
              id: 'activity_frequency',
              type: 'single-choice',
              label: 'How often do you engage in moderate physical activity?',
              options: [
                { id: 'opt1', label: 'Rarely', value: 'rarely' },
                { id: 'opt2', label: '1-2 days a week', value: '1_2_days' },
                { id: 'opt3', label: '3-4 days a week', value: '3_4_days' },
                { id: 'opt4', label: '5+ days a week', value: '5_plus_days' }
              ],
              required: true
            },
            {
              id: 'sleep_quality',
              type: 'slider',
              label: 'How would you rate your typical sleep quality?',
              options: [
                { id: 'min', label: 'Poor', value: 1 },
                { id: 'max', label: 'Excellent', value: 10 }
              ],
              required: true
            }
          ]
        }
      ]
    }
  ]
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
  insightRules: mockAssessmentResult.insights.map(insight => ({
    id: `rule-${insight.id}`,
    insightId: insight.id,
    conditions: [{ operator: 'equals', factId: 'dummy', value: true }] as unknown as kernel.InsightRule['conditions']
  })),
  scoreCategories: [],
  scoreRules: [],
  engineRules: [],
  recommendationRules: mockAssessmentResult.recommendations.map(rec => ({
    id: `rule-${rec.id}`,
    recommendationId: rec.id,
    decisionId: `dec-${rec.id}`,
    recommendationType: rec.type,
    target: 'general' as const,
    conditions: [{ operator: 'equals', factId: 'dummy', value: true }] as unknown as kernel.RecommendationRule['conditions']
  }))
};
