import type { kernel } from '@welliqo/assessment-engine';

export const mockAssessmentResult: kernel.AssessmentResult = {
  journeyId: 'wellness_discovery_v1',
  answers: {},
  facts: [], // Not needed for UI directly
  insights: [
    {
      id: 'insight_good_hydration',
      name: 'Great Hydration Habit',
      description: 'You are consistently drinking enough water to support optimal energy levels.',
      metadata: { type: 'STRENGTH' },
    },
    {
      id: 'insight_active_lifestyle',
      name: 'Active Lifestyle',
      description: 'You are moving your body regularly, which is fantastic for long-term heart health.',
      metadata: { type: 'STRENGTH' },
    },
    {
      id: 'insight_inconsistent_sleep',
      name: 'Inconsistent Sleep',
      description: 'We noticed your sleep schedule has been inconsistent, and you often wake up feeling less refreshed.',
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
      id: 'rec_sleep_routine',
      type: 'ACTION',
      target: 'action_consistent_bedtime',
      priority: 'HIGH',
      confidence: 90,
      reasons: ['insight_inconsistent_sleep'],
      metadata: {
        title: 'Establish a Consistent Bedtime',
        description: 'Try going to bed and waking up at the exact same time every day, even on weekends.',
        effort: 'Medium',
        impact: 'High',
        whyItMatters: 'Consistency regulates your circadian rhythm, dramatically improving sleep quality.',
      },
    },
    {
      id: 'rec_article_sleep',
      type: 'ARTICLE',
      target: 'article_sleep_hygiene',
      priority: 'MEDIUM',
      confidence: 85,
      reasons: ['insight_inconsistent_sleep'],
      metadata: {
        title: 'The Science of Sleep Hygiene',
        description: 'Learn how light, temperature, and routine affect your rest.',
      },
    },
    {
      id: 'rec_coach_intro',
      type: 'COACH',
      target: 'coach_network',
      priority: 'LOW',
      confidence: 80,
      reasons: [],
      metadata: {
        title: 'Explore Coaching',
        description: 'You don’t have to do this alone. When you’re ready for accountability, our community is here.',
      },
    },
  ],
  metadata: {
    executionTimeMs: 15,
    executedAt: new Date().toISOString(),
    version: '1.0',
  },
};
