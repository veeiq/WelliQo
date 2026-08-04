import { ClinicalFinding } from '../clinical/findings';
import { AssessmentData } from '../store/assessment-store';

export interface ScoreValidationResult {
  adjustedScore: number;
  reasoning: string;
}

/**
 * Purpose: Prevent impossible scores. 
 * e.g., BMI 35 + No activity -> Cannot receive 98/100.
 */
export class ScoreValidator {
  public validate(rawScore: number, findings: ClinicalFinding[], baseline: AssessmentData): ScoreValidationResult {
    // To be implemented
    return {
      adjustedScore: rawScore,
      reasoning: "Validation engine placeholder."
    };
  }
}
