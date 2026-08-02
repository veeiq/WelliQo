import { FactsRegistry } from '../facts/registry';
import { mapAnswersToFacts } from '../facts/mapper';
import { InsightRegistry } from '../insights/registry';
import { mapFactsToInsights } from '../insights/mapper';
import { ScoreRegistry } from '../scores/registry';
import { resolveScores } from '../scores/resolver';
import { RuleRegistry } from '../rules/registry';
import { resolveDecisions } from '../rules/resolver';
import { RecommendationRegistry } from '../recommendations/registry';
import { resolveRecommendations } from '../recommendations/resolver';

import type { EngineConfiguration } from './types';
import type { Fact } from '../facts/types';
import type { Insight } from '../insights/types';
import type { CategoryScore } from '../scores/types';
import type { Decision } from '../rules/types';
import type { Recommendation } from '../recommendations/types';

export function runPipeline(
  answers: Record<string, unknown>,
  config: EngineConfiguration
): {
  facts: Fact[];
  insights: Insight[];
  categoryScores: CategoryScore[];
  decisions: Decision[];
  recommendations: Recommendation[];
} {
  const factsRegistry = new FactsRegistry();
  config.facts.forEach((f) => factsRegistry.registerFact(f));
  config.factRules.forEach((r) => factsRegistry.registerRule(r));
  const facts = mapAnswersToFacts(factsRegistry, answers);

  const insightRegistry = new InsightRegistry();
  config.insights.forEach((i) => insightRegistry.registerInsight(i));
  config.insightRules.forEach((r) => insightRegistry.registerRule(r));
  const insights = mapFactsToInsights(insightRegistry, facts);

  const scoreRegistry = new ScoreRegistry();
  config.scoreCategories.forEach((c) => scoreRegistry.registerCategory(c));
  config.scoreRules.forEach((r) => scoreRegistry.registerRule(r));
  const categoryScores = resolveScores(scoreRegistry, facts, insights);

  const ruleRegistry = new RuleRegistry();
  config.engineRules.forEach((r) => ruleRegistry.registerRule(r));
  const decisions = resolveDecisions(ruleRegistry, facts, insights, categoryScores);

  const recommendationRegistry = new RecommendationRegistry();
  config.recommendationRules.forEach((r) => recommendationRegistry.registerRule(r));
  const recommendations = resolveRecommendations(recommendationRegistry, decisions);

  return {
    facts,
    insights,
    categoryScores,
    decisions,
    recommendations,
  };
}
