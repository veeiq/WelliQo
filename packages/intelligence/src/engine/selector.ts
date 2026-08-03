import type { IntelligenceDomain, MasterQuestion } from '../schemas';

export interface DomainConfidence {
  domain: string;
  confidence: number;
}

export interface SelectionState {
  answeredQuestionIds: string[];
  knownFacts: Set<string>;
}

export class QuestionSelectionEngine {
  private library: IntelligenceDomain;

  constructor(library: IntelligenceDomain) {
    this.library = library;
  }

  /**
   * Calculates current confidence for all domains based on known facts and decisions.
   */
  public calculateConfidence(state: SelectionState): DomainConfidence[] {
    const domainScores: Record<string, { totalPossible: number; current: number }> = {};

    // Initialize all domains from tags found in questions and facts
    this.library.questions.forEach(q => {
      q.tags.forEach(tag => {
        if (!domainScores[tag]) {
          domainScores[tag] = { totalPossible: 0, current: 0 };
        }
      });
    });

    // A real implementation evaluates how many Decisions per domain have reached their required facts.
    // For this blueprint implementation, we estimate confidence based on facts unlocked per domain.
    this.library.facts.forEach(fact => {
      fact.tags.forEach(tag => {
        if (!domainScores[tag]) domainScores[tag] = { totalPossible: 0, current: 0 };
        domainScores[tag].totalPossible += fact.confidenceImpact;
        if (state.knownFacts.has(fact.id)) {
          domainScores[tag].current += fact.confidenceImpact;
        }
      });
    });

    return Object.keys(domainScores).map(domain => {
      const stats = domainScores[domain];
      const confidence = stats.totalPossible > 0 
        ? Math.round((stats.current / stats.totalPossible) * 100) 
        : 0;
      return { domain, confidence };
    });
  }

  /**
   * Selects the single best next question to ask based on the Uncertainty Model (Lowest Confidence).
   */
  public selectNextQuestion(state: SelectionState): MasterQuestion | null {
    const confidences = this.calculateConfidence(state);
    
    // Check Stop Early Rule: If all domains > 85%, we stop asking.
    const allConfident = confidences.every(c => c.confidence >= 85);
    if (allConfident && confidences.length > 0) {
      return null; 
    }

    // Sort by Lowest Confidence First
    confidences.sort((a, b) => a.confidence - b.confidence);
    
    // Evaluate Questions
    let bestQuestion: MasterQuestion | null = null;
    let highestValue = -1;

    for (const question of this.library.questions) {
      if (state.answeredQuestionIds.includes(question.id)) continue;

      // Smart Skipping: If we already know ALL facts this question creates, skip it entirely.
      const createsNewFacts = question.createsFacts.some(f => !state.knownFacts.has(f));
      if (!createsNewFacts) continue;

      // Calculate the value of this question toward the lowest confidence domains
      let value = 0;
      
      confidences.forEach((domainConf, index) => {
        if (question.tags.includes(domainConf.domain)) {
          // Weight heavily towards the domains with the lowest confidence (index 0 is lowest)
          const domainWeight = 100 - index * 10;
          value += (question.expectedConfidenceGain * domainWeight);
        }
      });

      if (value > highestValue) {
        highestValue = value;
        bestQuestion = question;
      }
    }

    return bestQuestion;
  }
}
