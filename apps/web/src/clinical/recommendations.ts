import { Priority, RecommendationCategory, VersionedEntity } from './types';
import { ClinicalEvidence } from './evidence';

export interface ClinicalRecommendation extends VersionedEntity {
  id: string;
  title: string;
  description: string;
  why: string; // Explains exactly why this recommendation was given based on the user's profile
  expectedBenefits: string[];
  priority: Priority;
  category: RecommendationCategory;
  estimatedDifficulty: 'Easy' | 'Moderate' | 'Hard';
  estimatedTime: string; // e.g., "Daily", "10 mins/day"
  supportingEvidence: ClinicalEvidence[];
  contraindications: string[]; // e.g., "Do not recommend high protein if renal issues present"
  followUpSuggestions: string[];
}
