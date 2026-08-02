import { z } from 'zod';

// ==========================================
// ZOD SCHEMAS FOR METADATA VALIDATION
// ==========================================

export const InsightMetadataSchema = z.object({
  type: z.string().optional(),
}).catchall(z.unknown());

export const RecommendationMetadataSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  effort: z.string().optional(),
  impact: z.string().optional(),
  whyItMatters: z.string().optional(),
}).catchall(z.unknown());

// ==========================================
// PRESENTATION TYPES
// ==========================================

export interface ReportHeroData {
  overallScore: number | null;
}

export interface ReportStrengthCard {
  id: string;
  title: string;
  description: string;
}

export interface ReportInsightCard {
  id: string;
  description: string;
  whyItMatters: string;
}

export interface ReportSnapshotItem {
  id: string;
  title: string;
  percentage: number;
}

export interface ReportActionCard {
  id: string;
  type: string;
  title: string;
  description: string;
}

export interface ReportFirstStepData {
  id: string;
  title: string;
  description: string;
  effort: string;
  impact: string;
  whyItMatters: string | null;
}

export interface ReportSupportCard {
  id: string;
  title: string;
  type: string;
}

// The complete ViewModel ready for rendering
export interface ReportViewModel {
  hero: ReportHeroData;
  strengths: ReportStrengthCard[];
  insights: ReportInsightCard[];
  snapshot: ReportSnapshotItem[];
  actionPlan: ReportActionCard[];
  firstStep: ReportFirstStepData | null;
  support: ReportSupportCard[];
}
