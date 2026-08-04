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
  }>;
  finalPillarScores: Record<string, number>;
  rawFinalScore: number;
  finalScore: number;
  overallConfidence: number;
}

export interface ScoreEngineResult {
  overallWellnessScore: number;
  pillarScores: Record<string, number>;
  biggestWin: string;
  biggestOpportunity: string;
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
      overallConfidence: 50 + rulesResult.totalConfidenceAdjustment + synergyResult.totalConfidenceBoost
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
        findingId: Array.from(rulesResult.findingIds)[0], // Simplification for audit
        pillar,
        deductionValue: deduction.deduction,
        confidence: 100 // Deduction confidence
      });
    }

    // 3. Log synergy adjustments
    for (const syn of synergyResult.matchedSynergies) {
      auditTrail.synergyAdjustments.push({
        synergyId: syn.synergyId,
        findingId: syn.findingId,
        confidenceBoost: 5
      });
    }

    auditTrail.finalPillarScores = { ...pillarScores };

    // 4. Calculate Final Score using weights
    let finalScore = 0;
    for (const [pillar, weight] of Object.entries(config.pillarWeights)) {
      finalScore += ((pillarScores[pillar] || 0) * (weight / 100));
    }

    // Mathematical rounding
    finalScore = Math.round(finalScore);
    
    // Impossible score protection (example: if they have a severe finding but score is 95, clamp to 85)
    // The exact logic for this can be expanded, but we implement the hook here.
    const hasCriticalFinding = Array.from(rulesResult.findingIds).some(id => id.includes('CRITICAL'));
    if (hasCriticalFinding && finalScore > 85) {
      finalScore = 85;
    }

    auditTrail.rawFinalScore = finalScore;
    auditTrail.finalScore = finalScore;

    // 5. Run runtime validation
    this.validator.validateScores(pillarScores, finalScore, config.pillarWeights);

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

    return {
      overallWellnessScore: finalScore,
      pillarScores,
      biggestWin,
      biggestOpportunity,
      internalConfidenceScore: auditTrail.overallConfidence,
      auditTrail
    };
  }
}
