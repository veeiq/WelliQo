import type { Fact, FactRule } from './types';

export class FactsRegistry {
  private facts = new Map<string, Fact>();
  private rules: FactRule[] = [];

  registerFact(fact: Fact): void {
    this.facts.set(fact.id, fact);
  }

  registerRule(rule: FactRule): void {
    this.rules.push(rule);
  }

  getFact(id: string): Fact | undefined {
    return this.facts.get(id);
  }

  getAllRules(): FactRule[] {
    return this.rules;
  }

  clear(): void {
    this.facts.clear();
    this.rules = [];
  }
}
