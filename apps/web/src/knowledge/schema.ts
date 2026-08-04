import { Severity, Priority, RecommendationCategory } from '../clinical/types';

export interface ScientificReference {
  organization: string;
  publication: string;
  year: number;
  evidenceLevel: 'Weak' | 'Moderate' | 'Strong' | 'High';
}

export interface KnowledgeModuleSchema {
  id: string;
  version: string;
  definition: string;
  reviewedBy: string;
  lastReviewed: string;
  nextReview: string;
  
  formulas?: FormulaSchema[];
  thresholds?: ThresholdSchema[];
  recommendations?: RecommendationSchema[];
  findings?: FindingSchema[];
  evidence?: EvidenceSchema[];
  rules?: ClinicalRuleSchema[];
  synergy?: SynergyRuleSchema[];
  contraindications?: ContraindicationSchema[];
  scientificReferences: ScientificReference[];
}

export interface FormulaSchema {
  id: string;
  name: string;
  purpose: string;
  expression: string; // mathematical formula
  unit: string;
  variables: string[]; // inputs
  assumptions: string[];
  limitations: string[];
  validationRules?: string[]; // logic for handling invalid values
  referenceIndex?: number;
  reusable: boolean;
}

export interface EvidenceSchema {
  id: string;
  description: string;
  category: string;
}

export interface ClinicalRuleSchema {
  id: string;
  questionId: string;
  answerValue: string;
  evidenceId?: string;
  findingId?: string;
  severity?: Severity;
  scoreDeduction: number;
  priority?: Priority;
  confidenceAdjustment?: number;
}

export interface SynergyRuleSchema {
  id: string;
  name?: string;
  requiredEvidence: string[];
  minRequiredMatches: number;
  findingId: string;
  priority: Priority | 'URGENT';
  confidence: number;
}

export interface FindingSchema {
  id: string;
  title: string;
  category: string;
  severity: Severity | 'INFO' | 'CRITICAL';
  confidence: number;
  priority: Priority | 'URGENT' | 'INFO';
  evidenceRequired: string[];
  clinicalExplanation: string;
  userExplanation: string;
  clinicalImpact?: string;
  recommendationIds: string[];
  contraindications: string[];
  reportVisibility: boolean;
  reusable: boolean;
}

export interface ThresholdBracket {
  min?: number;
  max?: number;
  equals?: string | number | boolean;
  clinicalMeaning: string;
  severity: Severity;
}

export interface ThresholdSchema {
  metricId: string; 
  name: string;
  brackets: ThresholdBracket[];
  referenceIndex?: number;
}

export interface RecommendationSchema {
  id: string;
  title: string;
  category: RecommendationCategory | string;
  priority: Priority | 'URGENT' | 'INFO';
  difficulty?: 'Easy' | 'Moderate' | 'Advanced';
  triggeredByFindings: string[];
  supportingEvidence?: string[];
  recommendationText: string;
  whyThisMatters: string;
  actionSteps: string[];
  expectedBenefits: string[];
  expectedTimeline: string;
  contraindications: string[];
  successIndicators: string[];
  reusable: boolean;
  referenceIndex?: number;
}

export interface ContraindicationSchema {
  recommendationId: string; 
  triggerCondition: string; 
  action: 'SUPPRESS' | 'MODIFY';
  modifiedRecommendationId?: string;
  reasoning: string;
  referenceIndex?: number;
}
