import {
  Moon,
  Scale,
  Zap,
  Utensils,
  Heart,
  Sun,
  Activity,
  Dumbbell,
  Shield,
  Star,
} from 'lucide-react';
import { GoalConfig } from '@/types/goal';

export const GOALS: GoalConfig[] = [
  {
    id: 'better-sleep',
    title: 'Better Sleep',
    description: 'Improve your sleep quality and circadian rhythm',
    icon: Moon,
  },
  {
    id: 'weight-management',
    title: 'Weight Management',
    description: 'Strategies for healthy and sustainable weight management',
    icon: Scale,
  },
  {
    id: 'energy',
    title: 'More Energy',
    description: 'Boost your daily energy levels and focus',
    icon: Zap,
  },
  {
    id: 'healthy-digestion',
    title: 'Healthy Digestion',
    description: 'Optimize your gut health and microbiome',
    icon: Utensils,
  },
  {
    id: 'heart-health',
    title: 'Heart Health',
    description: 'Support cardiovascular function and longevity',
    icon: Heart,
  },
  {
    id: 'healthy-aging',
    title: 'Healthy Aging',
    description: 'Maintain vitality and healthspan as you age',
    icon: Sun,
  },
  {
    id: 'womens-wellness',
    title: "Women's Wellness",
    description: 'Targeted support for female health and hormones',
    icon: Activity,
  },
  {
    id: 'sports-nutrition',
    title: 'Sports Nutrition',
    description: 'Fuel your athletic performance and recovery',
    icon: Dumbbell,
  },
  {
    id: 'immunity',
    title: 'Immunity',
    description: 'Strengthen your immune system and resilience',
    icon: Shield,
  },
  {
    id: 'general-wellness',
    title: 'General Wellness',
    description: 'Foundational habits for overall well-being',
    icon: Star,
  },
];
