import type { InsightRegistry } from './registry';
import { resolveInsights } from './resolver';
import type { Insight } from './types';
import type { Fact } from '../facts/types';

export function mapFactsToInsights(registry: InsightRegistry, facts: Fact[]): Insight[] {
  const rules = registry.getAllRules();
  const insightIds = resolveInsights(rules, facts);

  const resolvedInsights: Insight[] = [];
  for (const id of insightIds) {
    const insight = registry.getInsight(id);
    if (insight) {
      resolvedInsights.push(insight);
    }
  }
  return resolvedInsights;
}
