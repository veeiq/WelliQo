import type { EngineRule } from './types';

export class RuleRegistry {
  private rules: EngineRule[] = [];

  registerRule(rule: EngineRule): void {
    this.rules.push(rule);
  }

  getAllRules(): EngineRule[] {
    return this.rules;
  }

  clear(): void {
    this.rules = [];
  }
}
