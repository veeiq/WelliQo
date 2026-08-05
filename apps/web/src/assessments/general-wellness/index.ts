import { ImplementedAssessment } from '../../types/assessment';
import { config } from './config';
import { questions } from './questions';

import { ASSESSMENT_VERSION } from '../manifest';

export const generalWellnessAssessment: ImplementedAssessment = {
  implemented: true,
  id: 'general-wellness',
  title: 'General Wellness Assessment',
  emoji: '🌍',
  icon: 'FileQuestion', // Placeholder icon
  description: 'Detailed analysis and personalized plan for General Wellness Assessment.',
  category: 'Foundation Wellness',
  enabled: true,
  comingSoon: false,
  questionCount: 25,
  estimatedMinutes: 5,
  difficulty: 'Beginner',
  version: ASSESSMENT_VERSION,
  config: config as any,
  questions: questions as any
};
