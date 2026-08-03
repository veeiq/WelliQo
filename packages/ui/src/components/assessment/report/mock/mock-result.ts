import type { kernel } from '@welliqo/assessment-engine';

export const mockAssessmentResult: kernel.AssessmentResult = {
  journeyId: 'wellness_discovery_v1',
  answers: {},
  facts: [], // Not needed for UI directly
  insights: [
    {
      id: 'insight_inconsistent_energy',
      name: 'The 3 PM Wall',
      description:
        'You frequently experience a sharp drop in energy and focus in the mid-afternoon, likely driven by blood sugar variability.',
      metadata: { type: 'PATTERN' },
    },
    {
      id: 'insight_caffeine_dependence',
      name: 'Early Caffeine Dependence',
      description:
        'Consuming coffee immediately upon waking is masking your natural sleep pressure rather than clearing it.',
      metadata: { type: 'PATTERN' },
    },
    {
      id: 'insight_blood_sugar',
      name: 'Carbohydrate-Heavy Mornings',
      description:
        'Your current breakfast lacks sufficient protein, setting you up for an energy crash later in the day.',
      metadata: { type: 'PATTERN' },
    },
  ],
  categoryScores: [
    {
      categoryId: 'overall',
      value: 78,
    },
    {
      categoryId: 'nutrition',
      value: 85,
    },
    {
      categoryId: 'sleep',
      value: 62,
    },
    {
      categoryId: 'activity',
      value: 80,
    },
    {
      categoryId: 'mindset',
      value: 70,
    },
  ],
  decisions: [],
  recommendations: [
    {
      id: 'rec_3pm_crash',
      type: 'ARTICLE',
      target: 'guide-3pm-crash',
      priority: 'HIGH',
      confidence: 90,
      reasons: ['insight_inconsistent_energy'],
      metadata: {
        title: 'Conquer the 3 PM Crash',
        description:
          'A three-step protocol to eliminate afternoon brain fog by stabilizing blood sugar.',
        effort: 'Low',
        impact: 'High',
        whyItMatters:
          'Your afternoon fatigue is driven by a biological collision of blood sugar and adenosine.',
      },
    },
    {
      id: 'rec_delay_caffeine',
      type: 'ACTION',
      target: 'habit-delay-caffeine',
      priority: 'MEDIUM',
      confidence: 85,
      reasons: ['insight_caffeine_dependence'],
      metadata: {
        title: 'Delay Caffeine by 90 Minutes',
        description: 'Wait 90 minutes after waking before your first cup of coffee.',
      },
    },
    {
      id: 'rec_protein_breakfast',
      type: 'ACTION',
      target: 'recipe-high-protein-breakfast',
      priority: 'HIGH',
      confidence: 88,
      reasons: ['insight_blood_sugar'],
      metadata: {
        title: 'The 15-Minute Protein Scramble',
        description: '32 grams of protein to set a stable metabolic baseline for the entire day.',
      },
    },
  ],
  metadata: {
    executionTimeMs: 15,
    executedAt: new Date().toISOString(),
    version: '1.0',
  },
};
