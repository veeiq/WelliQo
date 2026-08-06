import { ImplementedAssessment } from '../../types/assessment';
import { config } from './config';
import { questions } from './questions';
import { ASSESSMENT_VERSION } from '../manifest';

export const buildMuscleTone: ImplementedAssessment = {
  status: 'available',
  goals: ['weight-management', 'sports-nutrition', 'energy'],
  
  id: 'build_muscle_tone',
  title: 'Build Muscle & Tone',
  emoji: '💪',
  icon: 'Dumbbell', // placeholder
  description: 'Detailed analysis and personalized plan for Building Muscle & Tone.',
  category: 'Weight & Body Goals',
  enabled: true,
  
  questionCount: 25,
  estimatedMinutes: 8,
  difficulty: 'Intermediate',
  version: ASSESSMENT_VERSION,
  
  questions,
  config: config as any,
};
