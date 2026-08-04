import { MetricType, Confidence, VersionedEntity } from './types';

export interface ClinicalMetric extends VersionedEntity {
  id: string;
  title: string;
  value: number;
  displayValue: string;
  unit: string;
  type: MetricType;
  formula: string; // "35 ml * body weight"
  clinicalSource: string; // "WHO / EFSA guidelines 2023"
  limitations: string; // "Kidney disease, Heart failure"
  confidence: Confidence;
  goal: string;
  interpretation: string; // Contextual meaning of this metric for the user
}
