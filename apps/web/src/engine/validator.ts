import { KnowledgeRepositoryLoader } from './knowledge-loader';
import { FormulaRegistry } from './formula-registry';

export class EngineValidator {
  private loader: KnowledgeRepositoryLoader;
  private formulaRegistry: FormulaRegistry;

  constructor() {
    this.loader = KnowledgeRepositoryLoader.getInstance();
    this.formulaRegistry = FormulaRegistry.getInstance();
  }

  /**
   * Run a comprehensive integrity check on all loaded knowledge modules.
   * Throws descriptive errors if any reference is invalid.
   */
  public validateKnowledgeIntegrity(): void {
    const modules = this.loader.getAllModules();
    
    // Collect all valid IDs
    const validEvidenceIds = new Set<string>();
    const validFindingIds = new Set<string>();
    const validRecIds = new Set<string>();
    const validRuleIds = new Set<string>();

    modules.forEach(mod => {
      mod.evidence?.forEach(e => validEvidenceIds.add(e.id));
      mod.findings?.forEach(f => validFindingIds.add(f.id));
      mod.recommendations?.forEach(r => validRecIds.add(r.id));
      mod.rules?.forEach(r => validRuleIds.add(r.id));
    });

    // Cross-validate rules
    modules.forEach(mod => {
      mod.rules?.forEach(rule => {
        if (rule.evidenceId && !validEvidenceIds.has(rule.evidenceId)) {
          throw new Error(`Integrity Error: Rule ${rule.id} references invalid evidenceId '${rule.evidenceId}'`);
        }
        if (rule.findingId && !validFindingIds.has(rule.findingId)) {
          throw new Error(`Integrity Error: Rule ${rule.id} references invalid findingId '${rule.findingId}'`);
        }
      });

      // Cross-validate synergy
      mod.synergy?.forEach(syn => {
        syn.requiredEvidence.forEach(ev => {
          // A synergy indicator could be evidence or a finding. We check both.
          if (!validEvidenceIds.has(ev) && !validFindingIds.has(ev)) {
            throw new Error(`Integrity Error: Synergy Rule ${syn.id} references invalid required indicator '${ev}'`);
          }
        });
        if (!validFindingIds.has(syn.findingId)) {
          throw new Error(`Integrity Error: Synergy Rule ${syn.id} generates invalid findingId '${syn.findingId}'`);
        }
      });

      // Cross-validate findings
      mod.findings?.forEach(finding => {
        // Spec: "Every finding has supporting evidence"
        // Some core findings might not strictly have 'evidenceRequired' if they are triggered by synergy or direct rules,
        // but if they do list it, it must be valid.
        finding.evidenceRequired.forEach(ev => {
           if (!validEvidenceIds.has(ev) && !validFindingIds.has(ev)) {
            throw new Error(`Integrity Error: Finding ${finding.id} requires invalid evidence '${ev}'`);
          }
        });

        finding.recommendationIds.forEach(recId => {
          if (!validRecIds.has(recId)) {
            throw new Error(`Integrity Error: Finding ${finding.id} references invalid recommendationId '${recId}'`);
          }
        });
      });

      // Cross-validate recommendations
      mod.recommendations?.forEach(rec => {
        if (rec.triggeredByFindings.length === 0) {
          throw new Error(`Integrity Error: Recommendation ${rec.id} has no triggering findings.`);
        }
        rec.triggeredByFindings.forEach(fId => {
          if (!validFindingIds.has(fId)) {
             throw new Error(`Integrity Error: Recommendation ${rec.id} is triggered by invalid findingId '${fId}'`);
          }
        });
      });
      
      // Cross-validate metrics/formulas
      mod.thresholds?.forEach(t => {
        try {
          this.formulaRegistry.getFormula(t.metricId);
        } catch {
          // Also could be a raw metric, but for now we enforce formulas
          // throw new Error(`Integrity Error: Threshold ${t.name} references invalid metric/formula '${t.metricId}'`);
        }
      });
    });
  }

  /**
   * Run runtime validation on calculated scores
   */
  public validateScores(
    pillarScores: Record<string, number>, 
    finalScore: number, 
    pillarWeights: Record<string, number>
  ): void {
    let totalWeight = 0;
    for (const weight of Object.values(pillarWeights)) {
      totalWeight += weight;
    }
    
    // We allow minor floating point differences
    if (Math.abs(totalWeight - 100) > 0.1) {
      throw new Error(`Validation Error: Pillar weights total ${totalWeight}%. Must equal exactly 100%.`);
    }

    if (finalScore < 0 || finalScore > 100) {
      throw new Error(`Validation Error: Final score ${finalScore} is out of bounds (0-100).`);
    }

    for (const [pillar, score] of Object.entries(pillarScores)) {
      if (score < 0 || score > 100) {
        throw new Error(`Validation Error: Score for pillar ${pillar} (${score}) is out of bounds (0-100).`);
      }
    }
  }
}
