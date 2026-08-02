import type { Insight, InsightRule } from './types';

export class InsightRegistry {
  private insights = new Map<string, Insight>();
  private rules: InsightRule[] = [];

  registerInsight(insight: Insight): void {
    this.insights.set(insight.id, insight);
  }

  registerRule(rule: InsightRule): void {
    this.rules.push(rule);
  }

  getInsight(id: string): Insight | undefined {
    return this.insights.get(id);
  }

  getAllRules(): InsightRule[] {
    return this.rules;
  }

  clear(): void {
    this.insights.clear();
    this.rules = [];
  }
}
