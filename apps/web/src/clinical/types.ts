export enum Severity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT'
}

export enum Risk {
  NONE = 'NONE',
  LOW = 'LOW',
  MODERATE = 'MODERATE',
  HIGH = 'HIGH',
  SEVERE = 'SEVERE'
}

export enum RecommendationCategory {
  NUTRITION = 'NUTRITION',
  ACTIVITY = 'ACTIVITY',
  SLEEP = 'SLEEP',
  STRESS = 'STRESS',
  MINDSET = 'MINDSET',
  LIFESTYLE = 'LIFESTYLE',
  MEDICAL = 'MEDICAL'
}

export enum MetricType {
  BODY_COMPOSITION = 'BODY_COMPOSITION',
  MACRONUTRIENT = 'MACRONUTRIENT',
  MICRONUTRIENT = 'MICRONUTRIENT',
  LIFESTYLE = 'LIFESTYLE',
  BIOMARKER = 'BIOMARKER'
}

export enum FindingCategory {
  PHYSIOLOGICAL = 'PHYSIOLOGICAL',
  BEHAVIORAL = 'BEHAVIORAL',
  ENVIRONMENTAL = 'ENVIRONMENTAL',
  PSYCHOLOGICAL = 'PSYCHOLOGICAL'
}

export enum LifestyleFactor {
  SLEEP = 'SLEEP',
  STRESS = 'STRESS',
  ACTIVITY = 'ACTIVITY',
  NUTRITION = 'NUTRITION',
  HYDRATION = 'HYDRATION'
}

/** Confidence is a value from 0 to 100 */
export type Confidence = number;

export interface VersionedEntity {
  version: string;
  createdAt: string;
  updatedAt: string;
}
