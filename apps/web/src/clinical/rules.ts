import { Priority, VersionedEntity } from './types';
import { ClinicalFinding } from './findings';
import { AssessmentData } from '../store/assessment-store'; // Temporary reliance on existing store data structure

export interface ClinicalRule extends VersionedEntity {
  id: string;
  name: string;
  description: string;
  assessmentScope: string[]; // Which assessments this rule applies to (e.g., ['weight', 'lose_weight'])
  dependencies: string[]; // Rule IDs that must be evaluated before this one
  priority: Priority;
  enabled: boolean;
  
  // The core synergistic engine evaluation
  evaluate: (answers: Record<string, any>, baseline: AssessmentData, existingFindings: ClinicalFinding[]) => ClinicalFinding | null;
}
