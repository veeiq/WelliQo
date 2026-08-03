export type DecisionPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export interface Decision {
  id: string;
  type: string;
  priority: DecisionPriority;
  confidence: number;
  reasons: string[];
  metadata?: Record<string, unknown>;
}

export type RuleConditionOperator =
  | 'equals'
  | 'not-equals'
  | 'greater-than'
  | 'less-than'
  | 'contains'
  | 'in'
  | 'exists'
  | 'not-exists';

export interface RuleCondition {
  targetId: string;
  targetType: 'fact' | 'insight' | 'score';
  operator: RuleConditionOperator;
  value?: unknown;
}

export interface EngineRule {
  id: string;
  decisionId: string;
  decisionType: string;
  priority: DecisionPriority;
  baseConfidence: number;
  conditions: RuleCondition[];
  metadata?: Record<string, unknown>;
}
