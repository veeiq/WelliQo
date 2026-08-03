'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.DomainSchema =
  exports.RecommendationSchema =
  exports.DecisionSchema =
  exports.ScoreSchema =
  exports.InsightSchema =
  exports.FactSchema =
  exports.QuestionSchema =
  exports.QuestionOptionSchema =
    void 0;
const zod_1 = require('zod');
// ==========================================
// 1. QUESTION SCHEMA
// ==========================================
exports.QuestionOptionSchema = zod_1.z.object({
  id: zod_1.z.string(),
  label: zod_1.z.string(), // Must adhere to "Language Rule: For Real People"
  value: zod_1.z.any(),
  generatesFacts: zod_1.z.array(zod_1.z.string()).optional(),
});
exports.QuestionSchema = zod_1.z.object({
  id: zod_1.z.string(),
  purpose: zod_1.z.string().describe('Why it exists'),
  label: zod_1.z.string().describe('The simple, everyday language question'),
  type: zod_1.z.enum([
    'single-choice',
    'multiple-choice',
    'slider',
    'number',
    'boolean',
    'height',
    'weight',
    'text',
    'time',
    'scale',
  ]),
  tags: zod_1.z.array(zod_1.z.string()).min(1),
  options: zod_1.z.array(exports.QuestionOptionSchema).optional(),
  // Mandatory Engine Requirements
  dependsOn: zod_1.z.array(zod_1.z.string()).optional(),
  coachThinking: zod_1.z.string().optional(),
  humanMoment: zod_1.z.string().optional(),
  createsFacts: zod_1.z.array(zod_1.z.string()),
  supportsScores: zod_1.z.array(zod_1.z.string()),
  supportsInsights: zod_1.z.array(zod_1.z.string()),
  supportsDecisions: zod_1.z.array(zod_1.z.string()),
  supportsRecommendations: zod_1.z.array(zod_1.z.string()),
  expectedConfidenceGain: zod_1.z.number().min(0).max(100),
});
// ==========================================
// 2. FACT SCHEMA
// ==========================================
exports.FactSchema = zod_1.z.object({
  id: zod_1.z.string(),
  description: zod_1.z.string(),
  generatedFrom: zod_1.z.array(zod_1.z.string()).min(1).describe('Question IDs'),
  tags: zod_1.z.array(zod_1.z.string()).min(1),
  usedBy: zod_1.z.array(zod_1.z.string()).describe('Decision IDs, Insight IDs, or Score IDs'),
  confidenceImpact: zod_1.z.number(),
  // The raw mapping logic
  conditions: zod_1.z.array(zod_1.z.any()).optional(),
});
// ==========================================
// 3. INSIGHT SCHEMA
// ==========================================
exports.InsightSchema = zod_1.z.object({
  id: zod_1.z.string(),
  name: zod_1.z.string(),
  meaning: zod_1.z.string(),
  requiredFacts: zod_1.z.array(zod_1.z.string()),
  confidence: zod_1.z.number(),
  linkedScores: zod_1.z.array(zod_1.z.string()),
  linkedDecisions: zod_1.z.array(zod_1.z.string()),
});
// ==========================================
// 4. SCORE SCHEMA
// ==========================================
exports.ScoreSchema = zod_1.z.object({
  id: zod_1.z.string(),
  name: zod_1.z.string(),
  description: zod_1.z.string(),
  baseValue: zod_1.z.number(),
  rules: zod_1.z.array(
    zod_1.z.object({
      requiredFacts: zod_1.z.array(zod_1.z.string()),
      valueModifier: zod_1.z.number(),
    }),
  ),
});
// ==========================================
// 5. DECISION SCHEMA
// ==========================================
exports.DecisionSchema = zod_1.z.object({
  id: zod_1.z.string(),
  clinicalMeaning: zod_1.z.string(),
  requiredFacts: zod_1.z.array(zod_1.z.string()).optional(),
  requiredScores: zod_1.z.array(zod_1.z.string()).optional(),
  requiredInsights: zod_1.z.array(zod_1.z.string()).optional(),
  confidence: zod_1.z.number(),
  severity: zod_1.z.enum(['low', 'medium', 'high', 'critical']),
  priority: zod_1.z.number(),
  linkedRecommendations: zod_1.z.array(zod_1.z.string()).min(1),
});
// ==========================================
// 6. RECOMMENDATION SCHEMA
// ==========================================
exports.RecommendationSchema = zod_1.z.object({
  id: zod_1.z.string(),
  title: zod_1.z.string(),
  description: zod_1.z.string(),
  priority: zod_1.z.number(),
  evidenceLevel: zod_1.z.enum(['clinical', 'coaching', 'general']),
  linkedDecisions: zod_1.z.array(zod_1.z.string()).min(1),
  // Mandatory No Assumptions Rule (Founder Addendum)
  requiredFacts: zod_1.z.array(zod_1.z.string()).optional(),
  whyWeThinkThis: zod_1.z.string(),
  firstStep: zod_1.z.string(),
  whyFirstStepMatters: zod_1.z.string(),
  successVision: zod_1.z.string(),
  coachSupportTiming: zod_1.z.string(),
  // Content Node Linkages
  linkedGuides: zod_1.z.array(zod_1.z.string()).optional(),
  linkedHabits: zod_1.z.array(zod_1.z.string()).optional(),
  linkedRecipes: zod_1.z.array(zod_1.z.string()).optional(),
  linkedProducts: zod_1.z.array(zod_1.z.string()).optional(),
  linkedCoach: zod_1.z.array(zod_1.z.string()).optional(),
});
// ==========================================
// 7. DOMAIN COMPILATION SCHEMA
// ==========================================
exports.DomainSchema = zod_1.z.object({
  questions: zod_1.z.array(exports.QuestionSchema),
  facts: zod_1.z.array(exports.FactSchema),
  insights: zod_1.z.array(exports.InsightSchema),
  scores: zod_1.z.array(exports.ScoreSchema),
  decisions: zod_1.z.array(exports.DecisionSchema),
  recommendations: zod_1.z.array(exports.RecommendationSchema),
});
