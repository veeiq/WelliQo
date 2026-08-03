import { IntelligenceDomain } from '../schemas';

export class IntelligenceValidator {
  private domain: IntelligenceDomain;
  private errors: string[] = [];

  constructor(domain: IntelligenceDomain) {
    this.domain = domain;
  }

  public validate(): { isValid: boolean; errors: string[] } {
    this.errors = [];
    
    this.checkDuplicates();
    this.checkOrphanQuestions();
    this.checkOrphanFacts();
    this.checkOrphanInsights();
    this.checkOrphanDecisions();
    this.checkOrphanRecommendations();
    this.checkReferentialIntegrity();
    
    return {
      isValid: this.errors.length === 0,
      errors: this.errors,
    };
  }

  private checkDuplicates() {
    const ids = new Set<string>();
    
    const check = (collection: any[], type: string) => {
      collection.forEach(item => {
        if (ids.has(item.id)) {
          this.errors.push(`Duplicate ID found: [${type}] ${item.id}`);
        }
        ids.add(item.id);
      });
    };

    check(this.domain.questions, 'Question');
    check(this.domain.facts, 'Fact');
    check(this.domain.insights, 'Insight');
    check(this.domain.scores, 'Score');
    check(this.domain.decisions, 'Decision');
    check(this.domain.recommendations, 'Recommendation');
  }

  private checkOrphanQuestions() {
    const generatedFacts = new Set<string>();
    
    this.domain.questions.forEach(q => {
      q.createsFacts.forEach(f => generatedFacts.add(f));
      if (q.options) {
        q.options.forEach(opt => {
          if (opt.generatesFacts) {
            opt.generatesFacts.forEach(f => generatedFacts.add(f));
          }
        });
      }
    });

    // If a question creates no facts at all, it's an orphan
    this.domain.questions.forEach(q => {
      let hasFacts = q.createsFacts.length > 0;
      if (!hasFacts && q.options) {
        hasFacts = q.options.some(opt => opt.generatesFacts && opt.generatesFacts.length > 0);
      }
      if (!hasFacts) {
        this.errors.push(`Orphan Question: ${q.id} generates no facts. (Violates: "No question exists without purpose")`);
      }
    });
  }

  private checkOrphanFacts() {
    const usedFacts = new Set<string>();
    
    this.domain.insights.forEach(i => i.requiredFacts.forEach(f => usedFacts.add(f)));
    this.domain.scores.forEach(s => s.rules.forEach(r => r.requiredFacts.forEach(f => usedFacts.add(f))));
    this.domain.decisions.forEach(d => {
      if (d.requiredFacts) d.requiredFacts.forEach(f => usedFacts.add(f));
    });

    this.domain.facts.forEach(f => {
      if (!usedFacts.has(f.id)) {
        // if (!f.id.startsWith('fact:master:')) {
        //  this.errors.push(`Orphan Fact: ${f.id} is never used by any Insight, Score, or Decision.`);
        // }
      }
    });
  }

  private checkOrphanInsights() {
    // Insights must be linked to Scores or Decisions
    this.domain.insights.forEach(i => {
      if (i.linkedDecisions.length === 0 && i.linkedScores.length === 0) {
        this.errors.push(`Orphan Insight: ${i.id} does not link to any Decision or Score.`);
      }
    });
  }

  private checkOrphanDecisions() {
    // Every decision MUST link to at least one recommendation
    this.domain.decisions.forEach(d => {
      if (d.linkedRecommendations.length === 0) {
        this.errors.push(`Orphan Decision: ${d.id} produces no Recommendations.`);
      }
    });
  }

  private checkOrphanRecommendations() {
    const linkedRecs = new Set<string>();
    
    this.domain.decisions.forEach(d => {
      d.linkedRecommendations.forEach(r => linkedRecs.add(r));
    });

    this.domain.recommendations.forEach(r => {
      if (!linkedRecs.has(r.id)) {
        this.errors.push(`Unreachable Recommendation: ${r.id} is never triggered by any Decision.`);
      }
    });
  }

  private checkReferentialIntegrity() {
    const allFacts = new Set(this.domain.facts.map(f => f.id));
    const allDecisions = new Set(this.domain.decisions.map(d => d.id));
    
    // Check Decisions use valid facts
    this.domain.decisions.forEach(d => {
      if (d.requiredFacts) {
        d.requiredFacts.forEach(f => {
          if (!allFacts.has(f)) {
            this.errors.push(`Broken Link: Decision ${d.id} requires missing Fact ${f}`);
          }
        });
      }
    });

    // Check Recommendations are linked to valid decisions
    this.domain.recommendations.forEach(r => {
      r.linkedDecisions.forEach(d => {
        if (!allDecisions.has(d)) {
          this.errors.push(`Broken Link: Recommendation ${r.id} links to missing Decision ${d}`);
        }
      });
    });
  }
}
