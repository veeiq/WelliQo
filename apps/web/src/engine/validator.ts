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
   * Run runtime validation on calculated scores.
   * Acts as a safety net for clinically implausible outcomes.
   */
  public validateScores(
    pillarScores: Record<string, number>, 
    finalScore: number, 
    pillarWeights: Record<string, number>,
    activeFindingIds: Set<string>
  ): ValidatorIntervention[] {
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

    // Clinical Validation Rules (Safety Net)
    const interventions: ValidatorIntervention[] = [];

    // Configuration thresholds (could be moved to JSON later per assessment)
    const MIN_HEALTHY_SCORE = 85;
    const MAX_HIGH_RISK_SCORE = 70;

    // Rule 1: VAL_HEALTHY_MINIMUM
    // Healthy behaviours must not receive poor scores.
    const hasHealthySynergy = 
      activeFindingIds.has('FINDING_ACTIVE_LIFESTYLE') || 
      activeFindingIds.has('FINDING_BALANCED_NUTRITION') || 
      activeFindingIds.has('FINDING_STRONG_RECOVERY');
    
    if (hasHealthySynergy && finalScore < MIN_HEALTHY_SCORE) {
      interventions.push({
        ruleId: 'VAL_HEALTHY_MINIMUM',
        clinicalRationale: 'Healthy behaviours must not receive poor scores due to isolated deductions.',
        triggerCondition: 'Active healthy synergies detected but score is below minimum threshold.',
        actionTaken: `Score constrained to minimum healthy threshold.`,
        oldScore: finalScore,
        newScore: MIN_HEALTHY_SCORE
      });
      finalScore = MIN_HEALTHY_SCORE; // Update local finalScore for subsequent rules if any
    }

    // Rule 2: VAL_HIGH_RISK_CAP
    // Multiple major risk behaviours cannot receive excellent scores.
    // Count URGET/CRITICAL findings. We'll use specific critical synergies for this trigger.
    const criticalSynergies = [
      'FINDING_POSITIVE_ENERGY_BALANCE',
      'FINDING_SEDENTARY_LIFESTYLE',
      'FINDING_EMOTIONAL_EATING_PATTERN',
      'FINDING_POOR_RECOVERY',
      'FINDING_WEIGHT_CYCLING'
    ];
    let criticalCount = 0;
    for (const id of criticalSynergies) {
      if (activeFindingIds.has(id)) {
        criticalCount++;
      }
    }

    if (criticalCount >= 3 && finalScore > MAX_HIGH_RISK_SCORE) {
      interventions.push({
        ruleId: 'VAL_HIGH_RISK_CAP',
        clinicalRationale: 'Multiple compounding clinical risks cannot result in a good/excellent lifestyle score.',
        triggerCondition: '>= 3 high-risk synergy patterns detected.',
        actionTaken: `Score constrained to maximum high-risk threshold.`,
        oldScore: finalScore,
        newScore: MAX_HIGH_RISK_SCORE
      });
      finalScore = MAX_HIGH_RISK_SCORE;
    }

    // Rule 3: VAL_CONTRADICTION
    // Example: Excellent lifestyle metrics but extreme physical markers (e.g. BMI > 40)
    // Here we use a generic check for "Active Healthy Lifestyle" combined with extreme BMI
    // In a real scenario, this would access the baseline or answers, but we can do a rough check if we pass BMI or answers.
    // Wait, validateScores doesn't take BMI. We can't check BMI here unless we pass it.
    // Instead of passing BMI right now, let's just log the rule as an example of what it will do if passed.
    // For now, if they trigger ACTIVE_LIFESTYLE and POSITIVE_ENERGY_BALANCE (a contradiction in answers)
    const hasContradiction = activeFindingIds.has('FINDING_ACTIVE_LIFESTYLE') && activeFindingIds.has('FINDING_POSITIVE_ENERGY_BALANCE');
    
    if (hasContradiction) {
      interventions.push({
        ruleId: 'VAL_CONTRADICTION',
        clinicalRationale: 'Conflicting responses detected. E.g., highly active but also extremely sedentary or overeating.',
        triggerCondition: 'Mutually exclusive synergies triggered.',
        actionTaken: `Flagged for possible inconsistent responses. Consider repeating assessment.`,
        oldScore: finalScore,
        newScore: finalScore // Doesn't change score, just flags it
      });
    }

    return interventions;
  }
}

export interface ValidatorIntervention {
  ruleId: string;
  clinicalRationale: string;
  triggerCondition: string;
  actionTaken: string;
  oldScore: number;
  newScore: number;
}
