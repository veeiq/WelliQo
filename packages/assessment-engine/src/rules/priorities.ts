import type { DecisionPriority } from './types';

const priorityWeights: Record<DecisionPriority, number> = {
  CRITICAL: 4,
  HIGH: 3,
  MEDIUM: 2,
  LOW: 1,
};

export function comparePriorities(a: DecisionPriority, b: DecisionPriority): number {
  return priorityWeights[b] - priorityWeights[a];
}
