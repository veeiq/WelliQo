import type { ScoreCategory, ScoreRule, CategoryScore } from './types';

export function calculateCategoryScore(
  category: ScoreCategory,
  activeRules: ScoreRule[],
): CategoryScore {
  let score = category.baseScore;

  for (const rule of activeRules) {
    score += rule.weight;
  }

  if (score < category.minScore) score = category.minScore;
  if (score > category.maxScore) score = category.maxScore;

  return {
    categoryId: category.id,
    value: score,
  };
}
