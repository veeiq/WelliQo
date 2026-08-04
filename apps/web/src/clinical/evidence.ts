import { Confidence, VersionedEntity } from './types';

/**
 * Every finding must be traceable down to the user's explicit answers and the engine's computed metrics.
 */
export interface ClinicalEvidence extends VersionedEntity {
  id: string;
  questionIds: string[];
  answers: Record<string, any>;
  observations: string[];
  calculatedMetrics: Record<string, number | string>;
  confidence: Confidence;
  notes: string;
}
