import { z } from 'zod';

// ==========================================
// 1. QUESTION SCHEMA
// ==========================================
export const QuestionOptionSchema = z.object({
  id: z.string(),
  label: z.string(), // Must adhere to "Language Rule: For Real People"
  value: z.any(),
  generatesFacts: z.array(z.string()).optional(),
});

export const QuestionSchema = z.object({
  id: z.string(),
  purpose: z.string().describe('Why it exists'),
  label: z.string().describe('The simple, everyday language question'),
  type: z.enum(['single-choice', 'multiple-choice', 'slider', 'number', 'boolean', 'height', 'weight', 'text', 'time', 'scale']),
  tags: z.array(z.string()).min(1),
  options: z.array(QuestionOptionSchema).optional(),
  
  // Mandatory Engine Requirements
  dependsOn: z.array(z.string()).optional(),
  coachThinking: z.string().optional(),
  humanMoment: z.string().optional(),
  createsFacts: z.array(z.string()),
  supportsScores: z.array(z.string()),
  supportsInsights: z.array(z.string()),
  supportsDecisions: z.array(z.string()),
  supportsRecommendations: z.array(z.string()),
  expectedConfidenceGain: z.number().min(0).max(100),
});

export type MasterQuestion = z.infer<typeof QuestionSchema>;

// ==========================================
// 2. FACT SCHEMA
// ==========================================
export const FactSchema = z.object({
  id: z.string(),
  description: z.string(),
  generatedFrom: z.array(z.string()).min(1).describe('Question IDs'),
  tags: z.array(z.string()).min(1),
  usedBy: z.array(z.string()).describe('Decision IDs, Insight IDs, or Score IDs'),
  confidenceImpact: z.number(),
  
  // The raw mapping logic
  conditions: z.array(z.any()).optional(), 
});

export type MasterFact = z.infer<typeof FactSchema>;

// ==========================================
// 3. INSIGHT SCHEMA
// ==========================================
export const InsightSchema = z.object({
  id: z.string(),
  name: z.string(),
  meaning: z.string(),
  requiredFacts: z.array(z.string()),
  confidence: z.number(),
  linkedScores: z.array(z.string()),
  linkedDecisions: z.array(z.string()),
});

export type MasterInsight = z.infer<typeof InsightSchema>;

// ==========================================
// 4. SCORE SCHEMA
// ==========================================
export const ScoreSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  baseValue: z.number(),
  rules: z.array(z.object({
    requiredFacts: z.array(z.string()),
    valueModifier: z.number(),
  })),
});

export type MasterScore = z.infer<typeof ScoreSchema>;

// ==========================================
// 5. DECISION SCHEMA
// ==========================================
export const DecisionSchema = z.object({
  id: z.string(),
  clinicalMeaning: z.string(),
  requiredFacts: z.array(z.string()).optional(),
  requiredScores: z.array(z.string()).optional(),
  requiredInsights: z.array(z.string()).optional(),
  confidence: z.number(),
  severity: z.enum(['low', 'medium', 'high', 'critical']),
  priority: z.number(),
  linkedRecommendations: z.array(z.string()).min(1),
});

export type MasterDecision = z.infer<typeof DecisionSchema>;

// ==========================================
// 6. RECOMMENDATION SCHEMA
// ==========================================
export const RecommendationSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  priority: z.number(),
  evidenceLevel: z.enum(['clinical', 'coaching', 'general']),
  linkedDecisions: z.array(z.string()).min(1),
  
  // Mandatory No Assumptions Rule (Founder Addendum)
  requiredFacts: z.array(z.string()).optional(),
  whyWeThinkThis: z.string(),
  firstStep: z.string(),
  whyFirstStepMatters: z.string(),
  successVision: z.string(),
  coachSupportTiming: z.string(),
  
  // Content Node Linkages
  linkedGuides: z.array(z.string()).optional(),
  linkedHabits: z.array(z.string()).optional(),
  linkedRecipes: z.array(z.string()).optional(),
  linkedProducts: z.array(z.string()).optional(),
  linkedCoach: z.array(z.string()).optional(),
});

export type MasterRecommendation = z.infer<typeof RecommendationSchema>;

// ==========================================
// 7. DOMAIN COMPILATION SCHEMA
// ==========================================
export const DomainSchema = z.object({
  questions: z.array(QuestionSchema),
  facts: z.array(FactSchema),
  insights: z.array(InsightSchema),
  scores: z.array(ScoreSchema),
  decisions: z.array(DecisionSchema),
  recommendations: z.array(RecommendationSchema),
});

export type IntelligenceDomain = z.infer<typeof DomainSchema>;
