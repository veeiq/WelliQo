import { AssessmentModule } from '../types/assessment';
import { weightManagement } from './weight-management';
import { loseWeight } from './lose-weight';

export const ASSESSMENTS: AssessmentModule[] = [
  weightManagement,
  loseWeight,
  {
    implemented: false,
    id: 'healthy_weight_gain',
    title: 'Healthy Weight Gain',
    emoji: '🍽️',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Healthy Weight Gain.',
    category: 'Weight & Body Goals',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'muscle',
    title: 'Build Muscle & Tone',
    emoji: '💪',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Build Muscle & Tone.',
    category: 'Weight & Body Goals',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'fitness',
    title: 'Fitness & Active Lifestyle',
    emoji: '🏃',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Fitness & Active Lifestyle.',
    category: 'Weight & Body Goals',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'general_wellness',
    title: 'General Wellness Assessment',
    emoji: '🌍',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for General Wellness Assessment.',
    category: 'Foundation Wellness',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'sleep',
    title: 'Sleep & Recovery',
    emoji: '😴',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Sleep & Recovery.',
    category: 'Foundation Wellness',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'energy',
    title: 'Daily Energy',
    emoji: '⚡',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Daily Energy.',
    category: 'Foundation Wellness',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'nutrition',
    title: 'Nutrition',
    emoji: '🥗',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Nutrition.',
    category: 'Foundation Wellness',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'hydration',
    title: 'Hydration',
    emoji: '💧',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Hydration.',
    category: 'Foundation Wellness',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'stress',
    title: 'Stress & Mental Wellbeing',
    emoji: '😌',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Stress & Mental Wellbeing.',
    category: 'Foundation Wellness',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'brain_health',
    title: 'Brain Health & Mental Focus',
    emoji: '🧠',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Brain Health & Mental Focus.',
    category: 'Foundation Wellness',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'heart',
    title: 'Heart & Metabolic Health',
    emoji: '❤️',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Heart & Metabolic Health.',
    category: 'Metabolic Health',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'sugar',
    title: 'Blood Sugar Balance',
    emoji: '🩸',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Blood Sugar Balance.',
    category: 'Metabolic Health',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'gut',
    title: 'Gut Health',
    emoji: '🦠',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Gut Health.',
    category: 'Metabolic Health',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'digestive',
    title: 'Digestive Wellness',
    emoji: '🍃',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Digestive Wellness.',
    category: 'Metabolic Health',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'immunity',
    title: 'Stronger Immunity',
    emoji: '🛡️',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Stronger Immunity.',
    category: 'Metabolic Health',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'digital_wellness',
    title: 'Digital Wellness',
    emoji: '📱',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Digital Wellness.',
    category: 'Lifestyle Health',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'office_worker',
    title: 'Office Worker Wellness',
    emoji: '💻',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Office Worker Wellness.',
    category: 'Lifestyle Health',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'eye_wellness',
    title: 'Eye Wellness',
    emoji: '👁️',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Eye Wellness.',
    category: 'Lifestyle Health',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'posture',
    title: 'Posture & Spine Health',
    emoji: '🦴',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Posture & Spine Health.',
    category: 'Lifestyle Health',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'respiratory',
    title: 'Respiratory Wellness',
    emoji: '🫁',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Respiratory Wellness.',
    category: 'Lifestyle Health',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'preventive',
    title: 'Preventive Health & Risk',
    emoji: '🧬',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Preventive Health & Risk.',
    category: 'Lifestyle Health',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'seasonal',
    title: 'Seasonal Wellness',
    emoji: '🌞',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Seasonal Wellness.',
    category: 'Lifestyle Health',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'anxiety',
    title: 'Anxiety & Emotional Wellness',
    emoji: '😌',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Anxiety & Emotional Wellness.',
    category: 'Mental & Emotional',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'cognitive',
    title: 'Memory & Cognitive Health',
    emoji: '🧠',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Memory & Cognitive Health.',
    category: 'Mental & Emotional',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'aging',
    title: 'Healthy Aging & Joint Health',
    emoji: '❤️',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Healthy Aging & Joint Health.',
    category: 'Beauty & Healthy Aging',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'skin',
    title: 'Glowing Skin & Anti-Aging',
    emoji: '✨',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Glowing Skin & Anti-Aging.',
    category: 'Beauty & Healthy Aging',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'hair',
    title: 'Strong Hair & Nails',
    emoji: '💇',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Strong Hair & Nails.',
    category: 'Beauty & Healthy Aging',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'hormonal',
    title: 'Hormonal Wellness',
    emoji: '🌸',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Hormonal Wellness.',
    category: 'Beauty & Healthy Aging',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'womens',
    title: 'Women\'s Wellness',
    emoji: '🌿',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Women\'s Wellness.',
    category: 'Men & Women',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'mens',
    title: 'Men\'s Wellness',
    emoji: '👨',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Men\'s Wellness.',
    category: 'Men & Women',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'pregnancy',
    title: 'Pregnancy & Postpartum',
    emoji: '👶',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Pregnancy & Postpartum.',
    category: 'Men & Women',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'plant_based',
    title: 'Smart Plant-Based Nutrition',
    emoji: '🌱',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Smart Plant-Based Nutrition.',
    category: 'Food & Eating',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'grocery',
    title: 'Smart Grocery Shopping',
    emoji: '🛒',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Smart Grocery Shopping.',
    category: 'Food & Eating',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'family_nutrition',
    title: 'Healthy Family Nutrition',
    emoji: '👨‍👩‍👧‍👦',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Healthy Family Nutrition.',
    category: 'Food & Eating',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'student',
    title: 'Student Wellness',
    emoji: '🎓',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Student Wellness.',
    category: 'Special Lifestyle',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'travel',
    title: 'Travel Wellness',
    emoji: '🌍',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Travel Wellness.',
    category: 'Special Lifestyle',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'healthy_habits',
    title: 'Lifestyle Transformation',
    emoji: '🎯',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for Lifestyle Transformation.',
    category: 'Special Lifestyle',
    enabled: true,
    comingSoon: true
  },
  {
    implemented: false,
    id: 'ai_master',
    title: 'WelliQo Wellness 360°',
    emoji: '🤖',
    icon: 'FileQuestion', // Placeholder icon
    description: 'Detailed analysis and personalized plan for WelliQo Wellness 360°.',
    category: 'AI Master',
    enabled: false,
    comingSoon: true
  },
];
