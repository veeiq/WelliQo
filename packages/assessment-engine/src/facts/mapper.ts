import type { FactsRegistry } from './registry';
import { resolveFacts } from './resolver';
import type { Fact } from './types';

export function mapAnswersToFacts(registry: FactsRegistry, answers: Record<string, unknown>): Fact[] {
  const rules = registry.getAllRules();
  const factIds = resolveFacts(rules, answers);
  
  const resolvedFacts: Fact[] = [];
  for (const id of factIds) {
    const fact = registry.getFact(id);
    if (fact) {
      resolvedFacts.push(fact);
    }
  }
  return resolvedFacts;
}
