export type ConfidenceLevel = 'Confident' | 'Emerging' | 'Unknown';

export type JourneyMode = 
  | 'Improvement' 
  | 'Maintenance' 
  | 'Adaptation' 
  | 'Recovery' 
  | 'Comfort' 
  | 'Independence' 
  | 'Resilience';

export type BlockType = 
  | 'Recognition'
  | 'Reflection'
  | 'Strength'
  | 'Understanding'
  | 'Reality'
  | 'Journey'
  | 'Actions'
  | 'Resources'
  | 'Score'
  | 'NextAssessment';

export interface StructuredNarrative {
  intent: string;
  headline: string;
  body: string;
  evidence: string[];
  confidence: ConfidenceLevel;
}

export interface BlockMetadata {
  id: string;
  type: BlockType;
  priority: number; // For sorting and engine-level importance
  confidence: ConfidenceLevel;
  evidenceIds: string[];
  journeyMode: JourneyMode;
  visibilityRules: Record<string, boolean>;
  version: '1.0';
}

export interface BaseExperienceBlock {
  meta: BlockMetadata;
  narrative: StructuredNarrative;
}

// Block Specific Interfaces 
export interface RecognitionBlock extends BaseExperienceBlock {
  meta: BlockMetadata & { type: 'Recognition' };
  data: {
    userName: string;
    contextDetected: string;
  };
}

export interface ReflectionBlock extends BaseExperienceBlock {
  meta: BlockMetadata & { type: 'Reflection' };
  data: {
    pillars: Array<{
      id: string;
      label: string;
      score: number;
      status: 'excellent' | 'good' | 'fair' | 'poor' | 'unknown';
    }>;
    goodNews?: {
      s1: string;
      s2: string;
      highlight: string;
    };
  };
}

export interface StrengthBlock extends BaseExperienceBlock {
  meta: BlockMetadata & { type: 'Strength' };
  data: {
    strengths: string[];
  };
}

export interface UnderstandingBlock extends BaseExperienceBlock {
  meta: BlockMetadata & { type: 'Understanding' };
  data: {
    contradictionsExplained: string[];
    contextualInsights: string[];
  };
}

export interface RealityBlock extends BaseExperienceBlock {
  meta: BlockMetadata & { type: 'Reality' };
  data: {
    primaryChallenge: string;
    impact: string;
  };
}

export interface JourneyBlock extends BaseExperienceBlock {
  meta: BlockMetadata & { type: 'Journey' };
  data: {
    mode: JourneyMode;
    timelineExpectation: string;
  };
}

export interface ActionsBlock extends BaseExperienceBlock {
  meta: BlockMetadata & { type: 'Actions' };
  data: {
    actions: Array<{
      id: string;
      title: string;
      why: string;
      action: string;
      difficulty: 'Easy' | 'Moderate' | 'Advanced';
      successIndicators: string[];
    }>;
  };
}

export interface ResourcesBlock extends BaseExperienceBlock {
  meta: BlockMetadata & { type: 'Resources' };
  data: {
    recommendedAssessments: any[]; // Or properly typed if needed
    learningPaths: any[]; // Or properly typed if needed
  };
}

export interface ScoreBlock extends BaseExperienceBlock {
  meta: BlockMetadata & { type: 'Score' };
  data: {
    overallScore: number;
    scoreMeaning: string;
    showScore: boolean;
  };
}

export interface NextAssessmentBlock extends BaseExperienceBlock {
  meta: BlockMetadata & { type: 'NextAssessment' };
  data: {
    assessmentId: string;
    label: string;
  };
}

export interface BodyIntelligenceBlock extends BaseExperienceBlock {
  meta: BlockMetadata & { type: 'BodyIntelligence' };
  data: {
    metrics: any;
    improvementsScoreboard: { label: string; current: string; target: string; }[];
  };
}

export interface NutritionIntelligenceBlock extends BaseExperienceBlock {
  meta: BlockMetadata & { type: 'NutritionIntelligence' };
  data: {
    nutrients: any[];
  };
}

export interface DailyBlueprintBlock extends BaseExperienceBlock {
  meta: BlockMetadata & { type: 'DailyBlueprint' };
  data: {
    meals: any[];
  };
}

export interface CompanionNutritionBlock extends BaseExperienceBlock {
  meta: BlockMetadata & { type: 'CompanionNutrition' };
  data: {
    nutrients: any[];
  };
}

export type ExperienceBlock = 
  | RecognitionBlock 
  | ReflectionBlock 
  | StrengthBlock 
  | UnderstandingBlock 
  | RealityBlock 
  | JourneyBlock 
  | ActionsBlock 
  | ResourcesBlock 
  | ScoreBlock 
  | NextAssessmentBlock
  | BodyIntelligenceBlock
  | NutritionIntelligenceBlock
  | DailyBlueprintBlock
  | CompanionNutritionBlock;

// The intermediate structure the engine builds before emitting blocks
export interface ExperienceGraphNode {
  id: string;
  type: 'Finding' | 'Context' | 'Synergy' | 'Contradiction';
  confidence: ConfidenceLevel;
  value: any;
  relationships: string[]; // IDs of other nodes
}

export interface ExperienceGraph {
  nodes: Map<string, ExperienceGraphNode>;
  context: string;
  journeyMode: JourneyMode;
  addNode: (node: ExperienceGraphNode) => void;
  addRelationship: (fromId: string, toId: string) => void;
}
