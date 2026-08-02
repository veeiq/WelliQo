import type { DecisionPriority } from '../rules/types';

export interface Recommendation {
  id: string;
  type: string;
  target: string;
  priority: DecisionPriority;
  confidence: number;
  reasons: string[];
  metadata?: Record<string, unknown>;
}

export interface RecommendationRule {
  id: string;
  decisionId: string;
  recommendationType: string;
  target: string;
  metadata?: Record<string, unknown>;
}
