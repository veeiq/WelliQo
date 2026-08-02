import type { RecommendationRule } from './types';

export class RecommendationRegistry {
  private rules: RecommendationRule[] = [];

  registerRule(rule: RecommendationRule): void {
    this.rules.push(rule);
  }

  getAllRules(): RecommendationRule[] {
    return this.rules;
  }

  getRulesForDecision(decisionId: string): RecommendationRule[] {
    return this.rules.filter((rule) => rule.decisionId === decisionId);
  }

  clear(): void {
    this.rules = [];
  }
}
