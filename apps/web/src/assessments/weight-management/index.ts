import { AssessmentModule } from '../../types/assessment';
import { questions } from './questions';
import { config } from './config';

export const weightManagement: AssessmentModule = {
  id: 'weight',
  title: 'Weight Management',
  emoji: '⚖️',
  icon: 'Scale',
  description: 'Detailed analysis of your weight history, habits, and barriers.',
  category: 'Weight & Body Goals',
  enabled: true,
  status: 'available',
  reassessmentIntervalDays: 30,
  goals: ['weight-management'],
  estimatedMinutes: 5,
  difficulty: 'Beginner',
  version: '1.0.0',
  questionCount: questions.length,
  questions,
  config: config as any
};
