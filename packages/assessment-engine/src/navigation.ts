import { NavigationCondition, NavigationRule } from './types';

function evaluateCondition(condition: NavigationCondition, answers: Record<string, any>): boolean {
  const actualValue = answers[condition.questionId];

  if (actualValue === undefined) return false;

  switch (condition.operator) {
    case 'equals':
      return actualValue === condition.value;
    case 'not-equals':
      return actualValue !== condition.value;
    case 'contains':
      if (Array.isArray(actualValue) || typeof actualValue === 'string') {
        return actualValue.includes(condition.value);
      }
      return false;
    case 'greater-than':
      return actualValue > condition.value;
    case 'less-than':
      return actualValue < condition.value;
    case 'in':
      if (Array.isArray(condition.value)) {
        return condition.value.includes(actualValue);
      }
      return false;
    default:
      return false;
  }
}

export function determineNextQuestionId(
  currentQuestionId: string,
  answers: Record<string, any>,
  navigationRules: NavigationRule[],
  defaultNextId: string | 'END',
): string | 'END' {
  for (const rule of navigationRules) {
    const isMatch = rule.conditions.every((condition) => evaluateCondition(condition, answers));
    if (isMatch) {
      return rule.targetId;
    }
  }

  return defaultNextId;
}
