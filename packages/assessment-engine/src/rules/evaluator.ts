import type { RuleCondition, EngineRule } from './types';
import type { Fact } from '../facts/types';
import type { Insight } from '../insights/types';
import type { CategoryScore } from '../scores/types';

export function evaluateCondition(
  condition: RuleCondition,
  facts: Fact[],
  insights: Insight[],
  scores: CategoryScore[],
): boolean {
  let actualValue: unknown;
  let exists = false;

  switch (condition.targetType) {
    case 'fact':
      exists = facts.some((f) => f.id === condition.targetId);
      actualValue = exists;
      break;
    case 'insight':
      exists = insights.some((i) => i.id === condition.targetId);
      actualValue = exists;
      break;
    case 'score':
      const score = scores.find((s) => s.categoryId === condition.targetId);
      exists = !!score;
      actualValue = score ? score.value : undefined;
      break;
  }

  switch (condition.operator) {
    case 'exists':
      return exists;
    case 'not-exists':
      return !exists;
    case 'equals':
      return actualValue === condition.value;
    case 'not-equals':
      return actualValue !== condition.value;
    case 'greater-than':
      return (
        typeof actualValue === 'number' &&
        typeof condition.value === 'number' &&
        actualValue > condition.value
      );
    case 'less-than':
      return (
        typeof actualValue === 'number' &&
        typeof condition.value === 'number' &&
        actualValue < condition.value
      );
    case 'contains':
      if (Array.isArray(actualValue) || typeof actualValue === 'string') {
        return (actualValue as any).includes(condition.value);
      }
      return false;
    case 'in':
      if (Array.isArray(condition.value)) {
        return condition.value.includes(actualValue);
      }
      return false;
    default:
      return false;
  }
}

export function evaluateRule(
  rule: EngineRule,
  facts: Fact[],
  insights: Insight[],
  scores: CategoryScore[],
): { isMatch: boolean; reasons: string[] } {
  const reasons: string[] = [];

  for (const condition of rule.conditions) {
    if (!evaluateCondition(condition, facts, insights, scores)) {
      return { isMatch: false, reasons: [] };
    }
    reasons.push(condition.targetId);
  }

  return { isMatch: true, reasons };
}
