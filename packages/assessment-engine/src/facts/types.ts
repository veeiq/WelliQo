import type { NavigationCondition } from '../types';

export interface Fact {
  id: string;
  name: string;
  description?: string;
  metadata?: Record<string, unknown>;
}

export interface FactRule {
  id: string;
  factId: string;
  conditions: NavigationCondition[];
}
