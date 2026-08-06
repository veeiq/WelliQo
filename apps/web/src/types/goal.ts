import { ElementType } from 'react';

/**
 * The single source of truth for all Wellness Goals in the platform.
 * These IDs drive all relationships between content (Assessments, Articles, Recipes, etc.).
 */
export type GoalId =
  | 'better-sleep'
  | 'weight-management'
  | 'energy'
  | 'healthy-digestion'
  | 'heart-health'
  | 'healthy-aging'
  | 'womens-wellness'
  | 'sports-nutrition'
  | 'immunity'
  | 'general-wellness';

/**
 * Universal interface to be extended by ALL knowledge types in the platform
 * (Assessments, Articles, Recipes, Habits, Exercises, Products, etc.)
 */
export interface GoalLinked {
  goals: GoalId[];
}

/**
 * Defines the structure of a Goal in the registry.
 */
export interface GoalConfig {
  id: GoalId;
  title: string;
  description: string;
  icon: ElementType; // Expects a Lucide icon component or similar React component
}
