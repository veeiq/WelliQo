import { EngineValidator } from './validator';
import { RulesEvaluationResult } from './rules-engine';
import { SynergyEvaluationResult } from './synergy-engine';

export interface AssessmentScoringConfig {
  pillarWeights: Record<string, number>;
  questionToPillarMap: Record<string, string>;
}

export interface ScoreAuditDeduction {
  ruleId: string;
  evidenceIds: string[];
  findingId?: string;
  pillar: string;
  deductionValue: number;
  confidence: number;
}

export interface ScoreAuditTrail {
  initialPillarScores: Record<string, number>;
  deductionsApplied: ScoreAuditDeduction[];
  synergyAdjustments: Array<{
    synergyId: string;
    findingId: string;
    confidenceBoost: number;
    scoreAdjustment?: number;
    affectedPillar?: string;
  }>;
  finalPillarScores: Record<string, number>;
  rawFinalScore: number;
  finalScore: number;
  overallConfidence: number;
  validatorInterventions: import('./validator').ValidatorIntervention[];
}

export interface ScoreEngineResult {
  overallWellnessScore: number;
  pillarScores: Record<string, number>;
  biggestWin: string;
  biggestOpportunity: string;
  strengths: string[];
  improvements: string[];
  scoreMeaning: string;
  internalConfidenceScore: number;
  auditTrail: ScoreAuditTrail;
}

export class ScoreEngine {
  private validator: EngineValidator;

  constructor() {
    this.validator = new EngineValidator();
  }

  public calculate(
    rulesResult: RulesEvaluationResult,
    synergyResult: SynergyEvaluationResult,
    config: AssessmentScoringConfig
  ): ScoreEngineResult {
    // 1. Initialize pillars to 100
    const pillarScores: Record<string, number> = {};
    for (const pillar of Object.keys(config.pillarWeights)) {
      pillarScores[pillar] = 100;
    }

    const auditTrail: ScoreAuditTrail = {
      initialPillarScores: { ...pillarScores },
      deductionsApplied: [],
      synergyAdjustments: [],
      finalPillarScores: {},
      rawFinalScore: 100,
      finalScore: 100,
      overallConfidence: 50 + rulesResult.totalConfidenceAdjustment + synergyResult.totalConfidenceBoost,
      validatorInterventions: []
    };

    // Cap confidence
    auditTrail.overallConfidence = Math.min(100, Math.max(0, auditTrail.overallConfidence));

    // 2. Apply deductions
    // Track unique rule IDs to prevent double deductions in extreme edge cases
    const appliedRuleIds = new Set<string>();

    for (const deduction of rulesResult.scoreDeductions) {
      if (appliedRuleIds.has(deduction.ruleId)) {
         throw new Error(`Integrity Error: Duplicate deduction detected for Rule ${deduction.ruleId}`);
      }
      appliedRuleIds.add(deduction.ruleId);

      const pillar = config.questionToPillarMap[deduction.questionId];
      if (!pillar || pillarScores[pillar] === undefined) {
        // Fallback to a general pillar or throw. The spec says "No silent recovery"
        throw new Error(`Validation Error: Question '${deduction.questionId}' has no mapped pillar in config.`);
      }

      pillarScores[pillar] -= deduction.deduction;

      // Ensure no pillar drops below 0
      pillarScores[pillar] = Math.max(0, pillarScores[pillar]);

      auditTrail.deductionsApplied.push({
        ruleId: deduction.ruleId,
        evidenceIds: Array.from(rulesResult.evidenceIds), // Simplification: we might want to map exact evidence to rule
        findingId: deduction.findingId, // Exact mapped finding id
        pillar,
        deductionValue: deduction.deduction,
        confidence: 100 // Deduction confidence
      });
    }

    // 3. Log and apply synergy adjustments
    for (const syn of synergyResult.matchedSynergies) {
      auditTrail.synergyAdjustments.push({
        synergyId: syn.synergyId,
        findingId: syn.findingId,
        confidenceBoost: 5,
        scoreAdjustment: syn.scoreAdjustment,
        affectedPillar: syn.affectedPillar
      });

      if (syn.scoreAdjustment && syn.affectedPillar) {
        // Apply the adjustment to the specific pillar
        if (pillarScores[syn.affectedPillar] !== undefined) {
          pillarScores[syn.affectedPillar] += syn.scoreAdjustment;
          // Clamp pillar score back to 0-100 after synergy adjustment
          pillarScores[syn.affectedPillar] = Math.max(0, Math.min(100, pillarScores[syn.affectedPillar]));
        }
      }
    }

    auditTrail.finalPillarScores = { ...pillarScores };

    // 4. Calculate Final Score using weights
    let finalScore = 0;
    for (const [pillar, weight] of Object.entries(config.pillarWeights)) {
      finalScore += ((pillarScores[pillar] || 0) * (weight / 100));
    }

    // Mathematical rounding
    finalScore = Math.round(finalScore);
    auditTrail.rawFinalScore = finalScore;

    // 5. Run runtime validation
    const activeFindingIds = new Set([
      ...Array.from(rulesResult.findingIds),
      ...Array.from(synergyResult.synergyFindingIds)
    ]);
    
    const interventions = this.validator.validateScores(pillarScores, finalScore, config.pillarWeights, activeFindingIds);
    auditTrail.validatorInterventions = interventions;

    // Apply interventions (last intervention's newScore becomes final)
    if (interventions.length > 0) {
      finalScore = interventions[interventions.length - 1].newScore;
    }
    
    auditTrail.finalScore = finalScore;

    // 6. Determine Win/Opportunity
    let biggestWin = '';
    let biggestOpportunity = '';
    let maxScore = -1;
    let minScore = 101;

    for (const [pillar, score] of Object.entries(pillarScores)) {
      if (score > maxScore) {
        maxScore = score;
        biggestWin = pillar;
      }
      if (score < minScore) {
        minScore = score;
        biggestOpportunity = pillar;
      }
    }

    // Determine Meaning
    let scoreMeaning = 'Excellent';
    if (finalScore < 90) scoreMeaning = 'Very Good';
    if (finalScore < 80) scoreMeaning = 'Good';
    if (finalScore < 70) scoreMeaning = 'Needs Improvement';
    if (finalScore < 60) scoreMeaning = 'High Priority';

    const strengths = Object.entries(pillarScores).filter(([_, s]) => s >= 85).map(([p]) => p);
    const improvements = Object.entries(pillarScores).filter(([_, s]) => s < 70).map(([p]) => p);

    return {
      overallWellnessScore: finalScore,
      pillarScores,
      biggestWin,
      biggestOpportunity,
      strengths,
      improvements,
      scoreMeaning,
      internalConfidenceScore: auditTrail.overallConfidence,
      auditTrail
    };
  }
}
