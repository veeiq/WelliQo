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
  'checklist'
]);

export const ContentIntentSchema = z.enum([
  'learn',
  'do',
  'cook',
  'understand',
  'track',
  'compare'
]);

export const WellnessRoleSchema = z.enum([
  'educates',
  'guides',
  'measures',
  'motivates',
  'supports',
  'tracks'
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
  
  // Layer 2: Knowledge Layer Edges
  // Maps relationship type (e.g. 'supports', 'requires') to an array of node IDs
  relationships: z.record(z.string(), z.array(z.string())).default({}),
  
  // Metadata
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  readingTimeMinutes: z.number().optional(),
  
  // SEO
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional()
});

export type BaseContent = z.infer<typeof BaseContentSchema>;

export const ContentManifestSchema = z.object({
  version: z.string(),
  generatedAt: z.string(),
  nodeCount: z.number(),
  relationshipCount: z.number(),
  nodesByType: z.record(NodeTypeSchema, z.number()),
  brokenLinks: z.number(),
  orphanNodes: z.number()
});

export type ContentManifest = z.infer<typeof ContentManifestSchema>;

export interface CompiledContentIndex {
  nodes: Record<string, BaseContent>;
  byType: Record<string, string[]>;
  byDomain: Record<string, string[]>;
}
