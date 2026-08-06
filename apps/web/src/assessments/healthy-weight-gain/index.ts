import { ImplementedAssessment } from '@/types/assessment';
import { config } from './config';
import { questions } from './questions';
import { ASSESSMENT_VERSION } from '../manifest';

export const healthyWeightGain: ImplementedAssessment = {
  status: 'available',
  goals: ['weight-management', 'sports-nutrition'],
  
  id: 'healthy_weight_gain',
  title: 'Healthy Weight Gain',
  emoji: '🍽️',
  icon: 'Activity', // placeholder
  description: 'Detailed analysis and personalized plan for Healthy Weight Gain.',
  category: 'Weight & Body Goals',
  enabled: true,
  
  questionCount: 25,
  estimatedMinutes: 8,
  difficulty: 'Intermediate',
  version: ASSESSMENT_VERSION,
  
  questions,
  config: config as any,
};
