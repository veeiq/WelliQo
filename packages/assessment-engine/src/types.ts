export type InputType =
  | 'single-choice'
  | 'multiple-choice'
  | 'number'
  | 'slider'
  | 'height'
  | 'weight'
  | 'text'
  | 'textarea'
  | 'date'
  | 'time'
  | 'boolean'
  | 'scale'
  | 'card-selection'
  | 'image-selection';

export interface QuestionMetadata {
  icon?: string;
  illustration?: string;
  estimatedTime?: number;
  emotionalWeight?: string;
  analyticsKey?: string;
  helpArticle?: string;
  coachHint?: string;
  tags?: string[];
  [key: string]: unknown;
}

export interface ValidationRule {
  type: 'required' | 'min' | 'max' | 'pattern' | 'custom';
  value?: any;
  message: string;
}

export interface QuestionOption {
  id: string;
  label: string;
  value: any;
  description?: string;
  image?: string;
}

export interface Question {
  id: string;
  type: InputType;
  label: string;
  description?: string;
  required?: boolean;
  options?: QuestionOption[];
  validation?: ValidationRule[];
  metadata?: QuestionMetadata;
}

export interface NavigationCondition {
  questionId: string; // ID of the answered question to check against
  operator: 'equals' | 'not-equals' | 'contains' | 'greater-than' | 'less-than' | 'in';
  value: any;
}

export interface NavigationRule {
  conditions: NavigationCondition[];
  targetId: string | 'END'; // The next question to go to, or 'END' to finish
}

export interface AssessmentState {
  answers: Record<string, any>;
  history: string[]; // Stack of previous question IDs for 'back' navigation
  currentQuestionId: string | null;
  isComplete: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}
