import { z } from 'zod';

export const NavigationOperatorSchema = z.enum([
  'equals',
  'not-equals',
  'contains',
  'greater-than',
  'less-than',
  'in',
]);

export const NavigationConditionSchema = z.object({
  questionId: z.string(),
  operator: NavigationOperatorSchema,
  value: z.unknown(),
});

export const ValidationRuleSchema = z.object({
  type: z.enum(['required', 'min', 'max', 'pattern', 'custom']),
  value: z.unknown().optional(),
  message: z.string(),
});

export const QuestionOptionSchema = z.object({
  id: z.string(),
  label: z.string(),
  value: z.unknown(),
  description: z.string().optional(),
  image: z.string().optional(),
});

export const QuestionMetadataSchema = z.object({
  icon: z.string().optional(),
  illustration: z.string().optional(),
  estimatedTime: z.number().optional(),
  emotionalWeight: z.string().optional(),
  analyticsKey: z.string().optional(),
  helpArticle: z.string().optional(),
  coachHint: z.string().optional(),
  tags: z.array(z.string()).optional(),
}).catchall(z.unknown());

export const QuestionSchema = z.object({
  id: z.string(),
  type: z.enum([
    'single-choice',
    'multiple-choice',
    'number',
    'slider',
    'height',
    'weight',
    'text',
    'textarea',
    'date',
    'time',
    'boolean',
    'scale',
    'card-selection',
    'image-selection',
  ]),
  label: z.string(),
  description: z.string().optional(),
  required: z.boolean().optional(),
  options: z.array(QuestionOptionSchema).optional(),
  validation: z.array(ValidationRuleSchema).optional(),
  metadata: QuestionMetadataSchema.optional(),
});

export const QuestionGroupSchema = z.object({
  id: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  questions: z.array(QuestionSchema),
  conditions: z.array(NavigationConditionSchema).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const SectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  enabled: z.boolean().default(true),
  conditions: z.array(NavigationConditionSchema).optional(),
  questionGroups: z.array(QuestionGroupSchema),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const JourneyMetadataSchema = z.object({
  locale: z.string().optional(),
  featureFlags: z.array(z.string()).optional(),
}).catchall(z.unknown());

export const JourneySchema = z.object({
  id: z.string(),
  version: z.string(),
  name: z.string(),
  description: z.string().optional(),
  metadata: JourneyMetadataSchema.optional(),
  sections: z.array(SectionSchema),
});

export const FactSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const FactRuleSchema = z.object({
  id: z.string(),
  factId: z.string(),
  conditions: z.array(NavigationConditionSchema),
});

export const InsightSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const InsightRuleSchema = z.object({
  id: z.string(),
  insightId: z.string(),
  requireFacts: z.array(z.string()).optional(),
  excludeFacts: z.array(z.string()).optional(),
  anyFacts: z.array(z.string()).optional(),
});

export const ScoreCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  baseScore: z.number(),
  minScore: z.number(),
  maxScore: z.number(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const ScoreRuleSchema = z.object({
  id: z.string(),
  categoryId: z.string(),
  targetId: z.string(),
  targetType: z.enum(['fact', 'insight']),
  weight: z.number(),
});

export const DecisionPrioritySchema = z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']);

export const RuleConditionOperatorSchema = z.enum([
  'equals', 'not-equals', 'greater-than', 'less-than', 'contains', 'in', 'exists', 'not-exists'
]);

export const RuleConditionSchema = z.object({
  targetId: z.string(),
  targetType: z.enum(['fact', 'insight', 'score']),
  operator: RuleConditionOperatorSchema,
  value: z.unknown().optional(),
});

export const EngineRuleSchema = z.object({
  id: z.string(),
  decisionId: z.string(),
  decisionType: z.string(),
  priority: DecisionPrioritySchema,
  baseConfidence: z.number(),
  conditions: z.array(RuleConditionSchema),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const RecommendationRuleSchema = z.object({
  id: z.string(),
  decisionId: z.string(),
  recommendationType: z.string(),
  target: z.string(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
