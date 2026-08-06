export interface Recommendation {
  id: string;
  title: string;
  why: string;
  action: string;
  expectedBenefit: string;
  timeline: string;
  difficulty: 'Easy' | 'Moderate' | 'Advanced';
  successIndicators: string[];
  priority: 'High' | 'Medium' | 'Low';
}

export interface Finding {
  id: string;
  pillarId: string;
  label: string; // Internal or user-facing shorthand for "Why did I get this score"
  penalty: number;
  recommendationId?: string; // Links to Universal Library
}

export interface ScoringRule {
  questionId: string;
  answer: string | string[]; // Can trigger on one or multiple answers
  finding: Finding;
}

export interface Pillar {
  id: string;
  label: string;
  icon: string;
  weightPercent: number; // Must sum to 100 for an assessment
}

export interface MetricCardConfig {
  id: string;
  title: string;
  icon: string;
  // A function that takes baseline data and returns the standardized output
  calculate: (data: any, metrics: any) => {
    current: string;
    ideal: string;
    difference: string;
    meaning: string;
    status: 'good' | 'warning' | 'danger' | 'neutral';
  };
}

export interface NutritionLogic {
  // Can be expanded, but for now a simple function returning the standard object
  calculate: (data: any, weightDirection: 'lose' | 'gain' | 'maintain') => {
    protein: string;
    carbs: string;
    fats: string;
    naturalSources: string[];
    supplements: string[];
  };
}

export interface AssessmentConfig {
  id: string;
  title: string;
  description?: string;
  pillars: Pillar[];
  scoringRules: ScoringRule[];
  metricCards: MetricCardConfig[];
  nutritionLogic: NutritionLogic;
}

// ==========================================
// Question Types
// ==========================================

export type QuestionType = 'single_choice' | 'multiple_choice' | 'number' | 'boolean' | 'scale' | 'height' | 'weight' | 'text';

export interface QuestionOption {
  id: string;
  label: string;
  description?: string;
  value: any;
}

export interface QuestionDef {
  id: string;
  section: string; // Used to group questions logically
  label: string;
  type: QuestionType;
  options?: QuestionOption[]; // Only for choice types
  placeholder?: string;
  required?: boolean;
  dependsOn?: string; // ID of another question
  dependsOnValue?: any; // The value that triggers this question
  intro?: string; // Conversational prefix before the question
  why?: string; // Explanation of why we ask this question
}

// ==========================================
// Registry & Module Types
// ==========================================
import { GoalLinked } from './goal';

export interface ComingSoonAssessment extends GoalLinked {
  status: 'coming-soon';
  
  id: string;
  title: string;
  emoji: string;
  icon: string;
  description: string;
  category: string;
  enabled: boolean;
  reassessmentIntervalDays?: number;
  
  // Forbidden properties at compile time
  questions?: never;
  config?: never;
  questionCount?: never;
  estimatedMinutes?: never;
  difficulty?: never;
  version?: never;
}

export interface ImplementedAssessment extends GoalLinked {
  status: 'available';
  
  id: string;
  title: string;
  emoji: string;
  icon: string;
  description: string;
  category: string;
  enabled: boolean;
  reassessmentIntervalDays?: number;
  
  questionCount: number;
  estimatedMinutes: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  version: string;
  
  questions: QuestionDef[];
  config: AssessmentConfig;
}

export type AssessmentModule = ImplementedAssessment | ComingSoonAssessment;
