import type { ScoreCategory, ScoreRule } from './types';

export class ScoreRegistry {
  private categories = new Map<string, ScoreCategory>();
  private rules: ScoreRule[] = [];

  registerCategory(category: ScoreCategory): void {
    this.categories.set(category.id, category);
  }

  registerRule(rule: ScoreRule): void {
    this.rules.push(rule);
  }

  getCategory(id: string): ScoreCategory | undefined {
    return this.categories.get(id);
  }

  getAllCategories(): ScoreCategory[] {
    return Array.from(this.categories.values());
  }

  getAllRules(): ScoreRule[] {
    return this.rules;
  }

  clear(): void {
    this.categories.clear();
    this.rules = [];
  }
}
