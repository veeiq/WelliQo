import { z } from 'zod';

export const NodeTypeSchema = z.enum([
  'article',
  'recipe',
  'path',
  'faq',
  'concept',
  'habit',
  'goal',
  'myth',
  'tool',
  'checklist',
  'coach',
  'product',
]);

export const GoalSchema = z.enum([
  'better-sleep',
  'weight-management',
  'energy',
  'healthy-digestion',
  'heart-health',
  'healthy-aging',
  'womens-wellness',
  'sports-nutrition',
  'immunity',
  'general-wellness',
]);

export const ContentIntentSchema = z.enum([
  'learn',
  'do',
  'cook',
  'understand',
  'track',
  'compare',
]);

export const WellnessRoleSchema = z.enum([
  'educates',
  'guides',
  'measures',
  'motivates',
  'supports',
  'tracks',
]);

export const BaseContentSchema = z.object({
  id: z.string(),
  type: NodeTypeSchema,
  intent: ContentIntentSchema.optional(),
  wellnessRole: WellnessRoleSchema.optional(),
  title: z.string(),
  slug: z.string(),
  status: z.enum(['draft', 'published', 'archived']).default('published'),

  // Layer 1: Information Architecture
  domain: z.string(),
  category: z.string(),
  topic: z.string(),
  goals: z.array(GoalSchema).optional().default([]),

  // Layer 2: Knowledge Layer Edges
  // Maps relationship type (e.g. 'supports', 'requires') to an array of node IDs
  relationships: z.record(z.string(), z.array(z.string())).default({}),

  // Metadata & E-E-A-T
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  readingTimeMinutes: z.number().optional(),
  author: z.string().optional(),
  reviewedBy: z.string().optional(),
  lastUpdated: z.string().optional(),
  sources: z.array(z.string()).optional(),

  // Content Versioning
  version: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  nextReviewDate: z.string().optional(),
  reviewStatus: z.enum(['pending', 'approved', 'rejected', 'needs-revision']).optional(),

  // AI Readiness Layer
  summary: z.string().optional(),
  keyTakeaways: z.array(z.string()).optional(),
  faq: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
  estimatedReadTime: z.number().optional(),
  evidenceLevel: z
    .enum(['anecdotal', 'expert-opinion', 'clinical-trial', 'meta-analysis'])
    .optional(),
  relatedGoals: z.array(z.string()).optional(),
  relatedHabits: z.array(z.string()).optional(),
  relatedRecipes: z.array(z.string()).optional(),
  relatedProducts: z.array(z.string()).optional(),
  relatedConcepts: z.array(z.string()).optional(),

  // SEO
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),

  // Compiled Data
  rawBody: z.string().optional(),
});

export type BaseContent = z.infer<typeof BaseContentSchema>;

export const ContentManifestSchema = z.object({
  version: z.string(),
  generatedAt: z.string(),
  nodeCount: z.number(),
  relationshipCount: z.number(),
  nodesByType: z.record(NodeTypeSchema, z.number()),
  brokenLinks: z.number(),
  orphanNodes: z.number(),
});

export type ContentManifest = z.infer<typeof ContentManifestSchema>;

export interface CompiledContentIndex {
  nodes: Record<string, BaseContent>;
  byType: Record<string, string[]>;
  byDomain: Record<string, string[]>;
  byGoal: Record<string, string[]>;
}
