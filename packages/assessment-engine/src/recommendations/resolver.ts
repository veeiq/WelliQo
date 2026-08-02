import type { RecommendationRegistry } from './registry';
import type { Recommendation } from './types';
import type { Decision } from '../rules/types';

export function resolveRecommendations(
  registry: RecommendationRegistry,
  decisions: Decision[]
): Recommendation[] {
  const recommendations: Recommendation[] = [];

  for (const decision of decisions) {
    const rules = registry.getRulesForDecision(decision.id);
    for (const rule of rules) {
      recommendations.push({
        id: `${rule.id}-${decision.id}`,
        type: rule.recommendationType,
        target: rule.target,
        priority: decision.priority,
        confidence: decision.confidence,
        reasons: decision.reasons,
        metadata: {
          ...decision.metadata,
          ...rule.metadata,
        },
      });
    }
  }

  return recommendations;
}
