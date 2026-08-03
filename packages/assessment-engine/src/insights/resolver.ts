import type { InsightRule } from './types';
import type { Fact } from '../facts/types';

export function resolveInsights(rules: InsightRule[], facts: Fact[]): string[] {
  const resolvedInsightIds = new Set<string>();
  const factIds = new Set(facts.map((f) => f.id));

  for (const rule of rules) {
    let isValid = true;

    if (rule.requireFacts && rule.requireFacts.length > 0) {
      if (!rule.requireFacts.every((id) => factIds.has(id))) {
        isValid = false;
      }
    }

    if (isValid && rule.excludeFacts && rule.excludeFacts.length > 0) {
      if (rule.excludeFacts.some((id) => factIds.has(id))) {
        isValid = false;
      }
    }

    if (isValid && rule.anyFacts && rule.anyFacts.length > 0) {
      if (!rule.anyFacts.some((id) => factIds.has(id))) {
        isValid = false;
      }
    }

    if (isValid) {
      resolvedInsightIds.add(rule.insightId);
    }
  }

  return Array.from(resolvedInsightIds);
}
