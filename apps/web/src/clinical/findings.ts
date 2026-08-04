import { Severity, Confidence, Risk, Priority, FindingCategory, VersionedEntity } from './types';
import { ClinicalEvidence } from './evidence';

export interface ClinicalFinding extends VersionedEntity {
  id: string;
  pillarId: string;
  title: string;
  description: string;
  severity: Severity;
  confidence: Confidence;
  evidence: ClinicalEvidence;
  riskLevel: Risk;
  priority: Priority;
  clinicalMeaning: string;
  explanation: string;
  affectedMetrics: string[];
  recommendationIds: string[];
}
