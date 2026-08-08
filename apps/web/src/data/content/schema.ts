import { z } from 'zod';

export const ContentFrontmatterSchema = z.object({
  title: z.string(),
  type: z.enum(['ARTICLE', 'GUIDE', 'RECIPE', 'HABIT', 'EXERCISE_GUIDE']),
  category: z.enum([
    'Nutrition & Fuel',
    'Movement & Muscle',
    'Movement & Physiology',
    'Sleep & Recovery',
    'Mind & Lifestyle',
    'Mind & Neuroscience',
    'Energy & Metabolism'
  ]),
  summary: z.string(),
  thumbnail: z.string().optional(),
  tags: z.array(z.string()).default([]),
  goals: z.array(z.string()).default([]),
  findings: z.array(z.string()).default([]),
  medicalConditions: z.array(z.string()).default([]),
  foodPreferences: z.array(z.string()).default([]),
  assessmentIds: z.array(z.string()).default([]),
  priority: z.enum(['CRITICAL', 'HIGH', 'MEDIUM', 'LOW', 'OPTIONAL'] as any).default('MEDIUM'),
  journeyStage: z.array(z.enum(['DISCOVERY', 'BEGINNER', 'IMPROVING', 'CONSISTENT', 'ADVANCED', 'MAINTENANCE'] as any)).default(['BEGINNER']),
  estimatedMinutes: z.number().default(5),
  evidenceLevel: z.enum(['WELL_ESTABLISHED', 'EMERGING_SCIENCE', 'EXPERT_CONSENSUS', 'TRADITIONAL_PRACTICE'] as any).default('WELL_ESTABLISHED'),
  difficulty: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED'] as any).default('BEGINNER'),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
  relatedContent: z.array(z.string()).default([]),
  coachRecommended: z.boolean().default(false),
  version: z.string().default('1.0'),
  author: z.string().default('WelliQo Clinical Team')
});

export type ContentFrontmatter = z.infer<typeof ContentFrontmatterSchema>;
