import { ImplementedAssessment } from '@/types/assessment';
import { config } from './config';
import { questions } from './questions';
import { ASSESSMENT_VERSION } from '../manifest';

export const loseWeight: ImplementedAssessment = {
  implemented: true,
  
  id: 'lose_weight',
  title: 'Lose Weight & Burn Fat',
  emoji: '🔥',
  icon: 'Flame',
  description: 'A clinical analysis of physiological and behavioral barriers to fat loss.',
  category: 'Weight & Body Goals',
  enabled: true,
  comingSoon: false,
  
  questionCount: 25,
  estimatedMinutes: 8,
  difficulty: 'Intermediate',
  version: ASSESSMENT_VERSION,
  
  questions,
  config,
};
