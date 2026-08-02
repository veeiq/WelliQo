import type { NavigationCondition } from '../types';
import type { Section, QuestionGroup } from './types';

export function evaluateConditions(
  conditions: NavigationCondition[] | undefined,
  answers: Record<string, unknown>
): boolean {
  if (!conditions || conditions.length === 0) {
    return true;
  }

  return conditions.every((condition) => {
    const actualValue = answers[condition.questionId];
    if (actualValue === undefined) return false;

    switch (condition.operator) {
      case 'equals':
        return actualValue === condition.value;
      case 'not-equals':
        return actualValue !== condition.value;
      case 'contains':
        if (Array.isArray(actualValue) || typeof actualValue === 'string') {
          return (actualValue as any).includes(condition.value);
        }
        return false;
      case 'greater-than':
        return (actualValue as number) > (condition.value as number);
      case 'less-than':
        return (actualValue as number) < (condition.value as number);
      case 'in':
        if (Array.isArray(condition.value)) {
          return condition.value.includes(actualValue);
        }
        return false;
      default:
        return false;
    }
  });
}

export function resolveEnabledSections(
  sections: Section[],
  answers: Record<string, unknown>
): Section[] {
  return sections.filter(
    (section) => section.enabled && evaluateConditions(section.conditions, answers)
  );
}

export function resolveEnabledGroups(
  groups: QuestionGroup[],
  answers: Record<string, unknown>
): QuestionGroup[] {
  return groups.filter((group) => evaluateConditions(group.conditions, answers));
}
