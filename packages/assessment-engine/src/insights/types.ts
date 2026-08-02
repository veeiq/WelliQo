export interface Insight {
  id: string;
  name: string;
  description?: string;
  metadata?: Record<string, unknown>;
}

export interface InsightRule {
  id: string;
  insightId: string;
  requireFacts?: string[]; // ALL of these facts must be present
  excludeFacts?: string[]; // NONE of these facts must be present
  anyFacts?: string[];     // AT LEAST ONE of these facts must be present
}
