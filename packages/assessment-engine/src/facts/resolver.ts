import { evaluateConditions } from '../journey/resolver';
import type { FactRule } from './types';

export function resolveFacts(rules: FactRule[], answers: Record<string, unknown>): string[] {
  const resolvedFactIds = new Set<string>();

  for (const rule of rules) {
    if (evaluateConditions(rule.conditions, answers)) {
      resolvedFactIds.add(rule.factId);
    }
  }

  return Array.from(resolvedFactIds);
}
