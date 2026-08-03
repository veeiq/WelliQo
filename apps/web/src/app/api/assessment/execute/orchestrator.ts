// The Conversation Orchestrator acts as the UX layer above the Intelligence Engine.
// It enforces conversational continuity, remembers the user, and manages Layers.

export interface EngineQuestion {
  id: string;
  label: string;
  tags: string[];
  humanMoment?: string;
  [key: string]: any;
}

export interface ScoredQuestion {
  question: EngineQuestion;
  informationGain: number;
}

export class ConversationOrchestrator {
  private currentLayer: string | null;
  private answeredQuestionIds: Set<string>;
  
  constructor(currentLayer: string | null, answeredQuestionIds: string[]) {
    this.currentLayer = currentLayer;
    this.answeredQuestionIds = new Set(answeredQuestionIds);
  }

  /**
   * Rule 3: The Assessment Must Remember The User.
   * Filters out any questions that have already been answered.
   */
  private filterAnswered(rankedQuestions: ScoredQuestion[]): ScoredQuestion[] {
    return rankedQuestions.filter(rq => !this.answeredQuestionIds.has(rq.question.id));
  }

  /**
   * Identifies the primary layer from a question's tags.
   */
  private extractLayer(question: EngineQuestion): string {
    // Assuming tags array has the primary domain/layer as the first or second element.
    // e.g., ['sleep', 'barrier'] -> 'sleep'
    return question.tags && question.tags.length > 0 ? (question.tags[0] ?? 'general') : 'general';
  }

  /**
   * Rule 2: Layers Are Flexible.
   * Given a list of questions ranked strictly by the Engine's information gain,
   * select the best question that keeps the user in the CURRENT layer, 
   * UNLESS there are no high-value questions left in that layer.
   */
  public selectNextQuestion(rankedQuestions: ScoredQuestion[]): { nextQuestion: EngineQuestion | null, isNewLayer: boolean, newLayerName: string | null } {
    const unasked = this.filterAnswered(rankedQuestions);
    
    if (unasked.length === 0) {
      return { nextQuestion: null, isNewLayer: false, newLayerName: null };
    }

    // If we don't have a current layer, we just take the absolute highest scoring question
    // and adopt its layer.
    if (!this.currentLayer) {
      const topQ = unasked[0];
      if (!topQ) return { nextQuestion: null, isNewLayer: false, newLayerName: null };
      const layer = this.extractLayer(topQ.question);
      return { nextQuestion: topQ.question, isNewLayer: true, newLayerName: layer };
    }

    // Try to find the highest-scoring question that belongs to the CURRENT layer
    // (We only consider it if its score is reasonably high, e.g., > 10, to avoid asking useless questions just to stay in the layer)
    const currentLayerQuestions = unasked.filter(rq => 
      this.extractLayer(rq.question) === this.currentLayer && rq.informationGain > 10
    );

    if (currentLayerQuestions.length > 0 && currentLayerQuestions[0]) {
      // The array is already sorted by information gain, so the first one is the best in the current layer
      return { nextQuestion: currentLayerQuestions[0].question, isNewLayer: false, newLayerName: this.currentLayer };
    }

    // If no valuable questions remain in the current layer, we follow the engine's absolute recommendation
    // which naturally shifts us to a new layer.
    const topOverall = unasked[0];
    if (!topOverall) return { nextQuestion: null, isNewLayer: false, newLayerName: null };
    const nextLayer = this.extractLayer(topOverall.question);
    return { nextQuestion: topOverall.question, isNewLayer: true, newLayerName: nextLayer };
  }
}
