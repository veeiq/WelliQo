import { AssessmentModule } from '../types/assessment';
import { weightManagement } from './weight-management';
import { loseWeight } from './lose-weight';
import { healthyWeightGain } from './healthy-weight-gain';
import { buildMuscleTone } from './build-muscle-tone';
import { fitnessActiveLifestyle } from './fitness-active-lifestyle';
import { generalWellnessAssessment } from './general-wellness';

export const ASSESSMENTS: AssessmentModule[] = [
  weightManagement,
  loseWeight,
  healthyWeightGain,
  buildMuscleTone,
  fitnessActiveLifestyle,
  generalWellnessAssessment,
  {
    status: 'coming-soon',
    goals: ['better-sleep'],
    id: 'sleep',
    title: 'Sleep & Recovery',
    emoji: '😴',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Sleep & Recovery.',
    category: 'Foundation Wellness',
    enabled: true,
    reassessmentIntervalDays: 21,
    
  },
  {
    status: 'coming-soon',
    goals: ['energy'],
    id: 'energy',
    title: 'Daily Energy',
    emoji: '⚡',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Daily Energy.',
    category: 'Foundation Wellness',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['weight-management', 'sports-nutrition', 'healthy-digestion', 'healthy-aging', 'heart-health'],
    id: 'nutrition',
    title: 'Nutrition',
    emoji: '🥗',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Nutrition.',
    category: 'Foundation Wellness',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['general-wellness', 'energy', 'sports-nutrition'],
    id: 'hydration',
    title: 'Hydration',
    emoji: '💧',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Hydration.',
    category: 'Foundation Wellness',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['better-sleep', 'general-wellness'],
    id: 'stress',
    title: 'Stress & Mental Wellbeing',
    emoji: '😌',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Stress & Mental Wellbeing.',
    category: 'Foundation Wellness',
    enabled: true,
    reassessmentIntervalDays: 14,
    
  },
  {
    status: 'coming-soon',
    goals: ['energy', 'healthy-aging'],
    id: 'brain_health',
    title: 'Brain Health & Mental Focus',
    emoji: '🧠',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Brain Health & Mental Focus.',
    category: 'Foundation Wellness',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['heart-health'],
    id: 'heart',
    title: 'Heart & Metabolic Health',
    emoji: '❤️',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Heart & Metabolic Health.',
    category: 'Metabolic Health',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['weight-management', 'energy', 'heart-health'],
    id: 'sugar',
    title: 'Blood Sugar Balance',
    emoji: '🩸',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Blood Sugar Balance.',
    category: 'Metabolic Health',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['healthy-digestion', 'immunity'],
    id: 'gut',
    title: 'Gut Health',
    emoji: '🦠',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Gut Health.',
    category: 'Metabolic Health',
    enabled: true,
    reassessmentIntervalDays: 45,
    
  },
  {
    status: 'coming-soon',
    goals: ['healthy-digestion'],
    id: 'digestive',
    title: 'Digestive Wellness',
    emoji: '🍃',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Digestive Wellness.',
    category: 'Metabolic Health',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['immunity'],
    id: 'immunity',
    title: 'Stronger Immunity',
    emoji: '🛡️',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Stronger Immunity.',
    category: 'Metabolic Health',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['better-sleep', 'general-wellness'],
    id: 'digital_wellness',
    title: 'Digital Wellness',
    emoji: '📱',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Digital Wellness.',
    category: 'Lifestyle Health',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['general-wellness', 'better-sleep', 'energy'],
    id: 'office_worker',
    title: 'Office Worker Wellness',
    emoji: '💻',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Office Worker Wellness.',
    category: 'Lifestyle Health',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['general-wellness'],
    id: 'eye_wellness',
    title: 'Eye Wellness',
    emoji: '👁️',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Eye Wellness.',
    category: 'Lifestyle Health',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['general-wellness', 'healthy-aging'],
    id: 'posture',
    title: 'Posture & Spine Health',
    emoji: '🦴',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Posture & Spine Health.',
    category: 'Lifestyle Health',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['immunity', 'sports-nutrition'],
    id: 'respiratory',
    title: 'Respiratory Wellness',
    emoji: '🫁',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Respiratory Wellness.',
    category: 'Lifestyle Health',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['healthy-aging', 'heart-health', 'general-wellness'],
    id: 'preventive',
    title: 'Preventive Health & Risk',
    emoji: '🧬',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Preventive Health & Risk.',
    category: 'Lifestyle Health',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['immunity'],
    id: 'seasonal',
    title: 'Seasonal Wellness',
    emoji: '🌞',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Seasonal Wellness.',
    category: 'Lifestyle Health',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['better-sleep', 'general-wellness'],
    id: 'anxiety',
    title: 'Anxiety & Emotional Wellness',
    emoji: '😌',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Anxiety & Emotional Wellness.',
    category: 'Mental & Emotional',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['healthy-aging', 'energy'],
    id: 'cognitive',
    title: 'Memory & Cognitive Health',
    emoji: '🧠',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Memory & Cognitive Health.',
    category: 'Mental & Emotional',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['healthy-aging'],
    id: 'aging',
    title: 'Healthy Aging & Joint Health',
    emoji: '❤️',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Healthy Aging & Joint Health.',
    category: 'Beauty & Healthy Aging',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['healthy-aging', 'womens-wellness'],
    id: 'skin',
    title: 'Glowing Skin & Anti-Aging',
    emoji: '✨',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Glowing Skin & Anti-Aging.',
    category: 'Beauty & Healthy Aging',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['healthy-aging', 'womens-wellness'],
    id: 'hair',
    title: 'Strong Hair & Nails',
    emoji: '💇',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Strong Hair & Nails.',
    category: 'Beauty & Healthy Aging',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['womens-wellness', 'weight-management'],
    id: 'hormonal',
    title: 'Hormonal Wellness',
    emoji: '🌸',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Hormonal Wellness.',
    category: 'Beauty & Healthy Aging',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['womens-wellness'],
    id: 'womens',
    title: 'Women\'s Wellness',
    emoji: '🌿',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Women\'s Wellness.',
    category: 'Men & Women',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['general-wellness', 'energy'],
    id: 'mens',
    title: 'Men\'s Wellness',
    emoji: '👨',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Men\'s Wellness.',
    category: 'Men & Women',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['womens-wellness'],
    id: 'pregnancy',
    title: 'Pregnancy & Postpartum',
    emoji: '👶',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Pregnancy & Postpartum.',
    category: 'Men & Women',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['healthy-digestion', 'heart-health', 'weight-management'],
    id: 'plant_based',
    title: 'Smart Plant-Based Nutrition',
    emoji: '🌱',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Smart Plant-Based Nutrition.',
    category: 'Food & Eating',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['weight-management', 'healthy-digestion'],
    id: 'grocery',
    title: 'Smart Grocery Shopping',
    emoji: '🛒',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Smart Grocery Shopping.',
    category: 'Food & Eating',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['womens-wellness', 'general-wellness'],
    id: 'family_nutrition',
    title: 'Healthy Family Nutrition',
    emoji: '👨‍👩‍👧‍👦',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Healthy Family Nutrition.',
    category: 'Food & Eating',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['energy', 'better-sleep'],
    id: 'student',
    title: 'Student Wellness',
    emoji: '🎓',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Student Wellness.',
    category: 'Special Lifestyle',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['immunity', 'better-sleep'],
    id: 'travel',
    title: 'Travel Wellness',
    emoji: '🌍',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Travel Wellness.',
    category: 'Special Lifestyle',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['weight-management', 'general-wellness'],
    id: 'healthy_habits',
    title: 'Lifestyle Transformation',
    emoji: '🎯',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Lifestyle Transformation.',
    category: 'Special Lifestyle',
    enabled: true,
    
  },
  {
    status: 'coming-soon',
    goals: ['general-wellness'],
    id: 'ai_master',
    title: 'WelliQo Wellness 360°',
    emoji: '🤖',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for WelliQo Wellness 360°.',
    category: 'AI Master',
    enabled: false,
    
  },
];

export class AssessmentRegistry {
  static get(id: string): AssessmentModule | undefined {
    return ASSESSMENTS.find(a => a.id === id);
  }

  static getAll(): AssessmentModule[] {
    return ASSESSMENTS;
  }

  static available(): AssessmentModule[] {
    return ASSESSMENTS.filter(a => a.enabled && a.status !== 'coming-soon');
  }

  static findByGoal(goalId: string): AssessmentModule[] {
    return ASSESSMENTS.filter(a => a.goals?.includes(goalId as any));
  }

  static getRoute(id: string): string {
    return `/assessment?id=${id}`;
  }

  static getDirectoryRoute(): string {
    return '/assessments';
  }

  static getReportRoute(): string {
    return '/report';
  }

  // Dashboard helpers
  static getNextAssessment(userId?: string): string {
    // In the future, this would check user history. For MVP, we return a core assessment.
    return 'weight-management';
  }

  static getFeaturedAssessment(): string {
    return 'general-wellness';
  }
}

