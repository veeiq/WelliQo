export interface ScoreCategory {
  id: string;
  name: string;
  description?: string;
  baseScore: number;
  minScore: number;
  maxScore: number;
  metadata?: Record<string, unknown>;
}

export interface ScoreRule {
  id: string;
  categoryId: string;
  targetId: string;
  targetType: 'fact' | 'insight';
  weight: number;
}

export interface CategoryScore {
  categoryId: string;
  value: number;
}
