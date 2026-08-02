import type { ValidatedJourney } from '../config/types';
import type { Fact, FactRule } from '../facts/types';
import type { Insight, InsightRule } from '../insights/types';
import type { ScoreCategory, ScoreRule, CategoryScore } from '../scores/types';
import type { EngineRule, Decision } from '../rules/types';
import type { RecommendationRule, Recommendation } from '../recommendations/types';

export interface EngineConfiguration {
  facts: Fact[];
  factRules: FactRule[];
  insights: Insight[];
  insightRules: InsightRule[];
  scoreCategories: ScoreCategory[];
  scoreRules: ScoreRule[];
  engineRules: EngineRule[];
  recommendationRules: RecommendationRule[];
}

export interface AssessmentPayload {
  journey: ValidatedJourney;
  answers: Record<string, unknown>;
  configuration: EngineConfiguration;
}

export interface AssessmentResult {
  journeyId: string;
  answers: Record<string, unknown>;
  facts: Fact[];
  insights: Insight[];
  categoryScores: CategoryScore[];
  overallScore?: number;
  decisions: Decision[];
  recommendations: Recommendation[];
  metadata: {
    executionTimeMs: number;
    executedAt: string;
    version: string;
  };
}
