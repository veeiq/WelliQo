import { ImplementedAssessment } from '@/types/assessment';
import { config } from './config';
import { questions } from './questions';
import { ASSESSMENT_VERSION } from '../manifest';

export const healthyWeightGain: ImplementedAssessment = {
  implemented: true,
  
  id: 'healthy_weight_gain',
  title: 'Healthy Weight Gain',
  emoji: '🍽️',
  icon: 'Activity', // placeholder
  description: 'Detailed analysis and personalized plan for Healthy Weight Gain.',
  category: 'Weight & Body Goals',
  enabled: true,
  comingSoon: false,
  
  questionCount: 25,
  estimatedMinutes: 8,
  difficulty: 'Intermediate',
  version: ASSESSMENT_VERSION,
  
  questions,
  config: config as any,
};
