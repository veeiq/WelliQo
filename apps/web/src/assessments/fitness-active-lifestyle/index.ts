import { ImplementedAssessment } from '../../types/assessment';
import { config } from './config';
import { questions } from './questions';
import { ASSESSMENT_VERSION } from '../manifest';

export const fitnessActiveLifestyle: ImplementedAssessment = {
  implemented: true,
  
  id: 'fitness-active-lifestyle',
  title: 'Fitness & Active Lifestyle',
  emoji: '🏃',
  icon: 'Activity', // placeholder
  description: 'Detailed analysis and personalized plan for Fitness & Active Lifestyle.',
  category: 'Weight & Body Goals', // As per registry grouping or maybe Foundation Wellness? Spec says: "Unlike Assessment 1-4, focuses on overall physical fitness...". Let's match registry's "Weight & Body Goals" since it was in that block, or maybe "Foundation Wellness"? In registry it's currently "Weight & Body Goals".
  enabled: true,
  comingSoon: false,
  
  questionCount: 25,
  estimatedMinutes: 8,
  difficulty: 'Intermediate',
  version: ASSESSMENT_VERSION,
  
  questions,
  config: config as any,
};
