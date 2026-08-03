import type { RuleRegistry } from './registry';
import { evaluateRule } from './evaluator';
import { comparePriorities } from './priorities';
import type { Decision } from './types';
import type { Fact } from '../facts/types';
import type { Insight } from '../insights/types';
import type { CategoryScore } from '../scores/types';

export function resolveDecisions(
  registry: RuleRegistry,
  facts: Fact[],
  insights: Insight[],
  scores: CategoryScore[],
): Decision[] {
  const rules = registry.getAllRules();
  const decisions: Decision[] = [];

  for (const rule of rules) {
    const { isMatch, reasons } = evaluateRule(rule, facts, insights, scores);

    if (isMatch) {
      decisions.push({
        id: rule.decisionId,
        type: rule.decisionType,
        priority: rule.priority,
        confidence: rule.baseConfidence,
        reasons,
        metadata: rule.metadata,
      });
    }
  }

  return decisions.sort((a, b) => {
    const priorityDiff = comparePriorities(a.priority, b.priority);
    if (priorityDiff !== 0) return priorityDiff;
    return b.confidence - a.confidence;
  });
}
