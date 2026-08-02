import type { ScoreRegistry } from './registry';
import { calculateCategoryScore } from './calculator';
import { filterRulesForCategory, filterActiveRules } from './weights';
import type { CategoryScore } from './types';
import type { Fact } from '../facts/types';
import type { Insight } from '../insights/types';

export function resolveScores(
  registry: ScoreRegistry,
  facts: Fact[],
  insights: Insight[]
): CategoryScore[] {
  const factIds = new Set(facts.map(f => f.id));
  const insightIds = new Set(insights.map(i => i.id));

  const allRules = registry.getAllRules();
  const activeRules = filterActiveRules(allRules, factIds, insightIds);

  const categories = registry.getAllCategories();
  const scores: CategoryScore[] = [];

  for (const category of categories) {
    const categoryActiveRules = filterRulesForCategory(activeRules, category.id);
    const score = calculateCategoryScore(category, categoryActiveRules);
    scores.push(score);
  }

  return scores;
}
