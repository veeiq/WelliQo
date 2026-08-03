import type { ScoreRule } from './types';

export function filterRulesForCategory(rules: ScoreRule[], categoryId: string): ScoreRule[] {
  return rules.filter((rule) => rule.categoryId === categoryId);
}

export function filterActiveRules(
  rules: ScoreRule[],
  factIds: Set<string>,
  insightIds: Set<string>,
): ScoreRule[] {
  return rules.filter((rule) => {
    if (rule.targetType === 'fact') {
      return factIds.has(rule.targetId);
    }
    if (rule.targetType === 'insight') {
      return insightIds.has(rule.targetId);
    }
    return false;
  });
}
