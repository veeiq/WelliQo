import { KnowledgeRepositoryLoader } from './knowledge-loader';
import { ClinicalRuleSchema } from '../knowledge/schema';

export interface RulesEvaluationResult {
  evidenceIds: Set<string>;
  findingIds: Set<string>;
  scoreDeductions: Array<{
    ruleId: string;
    questionId: string;
    deduction: number;
    severity?: string;
    findingId?: string;
  }>;
  totalConfidenceAdjustment: number;
}

export class RulesEngine {
  private loader: KnowledgeRepositoryLoader;
  private rules: ClinicalRuleSchema[] = [];

  constructor() {
    this.loader = KnowledgeRepositoryLoader.getInstance();
    this.initialize();
  }

  private initialize() {
    const modules = this.loader.getAllModules();
    modules.forEach(mod => {
      if (mod.rules) {
        this.rules.push(...mod.rules);
      }
    });
  }

  /**
   * Evaluate a set of user answers against the rule registry.
   * @param answers A map of question ID to the selected answer value.
   */
  public evaluate(answers: Record<string, string | string[] | number | boolean>): RulesEvaluationResult {
    const result: RulesEvaluationResult = {
      evidenceIds: new Set(),
      findingIds: new Set(),
      scoreDeductions: [],
      totalConfidenceAdjustment: 0,
    };

    // For every question/answer pair
    for (const [questionId, answer] of Object.entries(answers)) {
      // Find matching rules. (Handling both single string answers and arrays if multiple select)
      const answerValues = Array.isArray(answer) ? answer.map(String) : [String(answer)];
      
      for (const val of answerValues) {
        // Find rule(s) matching this question and answer.
        // We also support wildcard '*' if a rule applies to any answer for that question (e.g. Q2 target weight set)
        const matchingRules = this.rules.filter(
          r => r.questionId === questionId && (r.answerValue === val || r.answerValue === '*')
        );

        for (const rule of matchingRules) {
          if (rule.evidenceId) {
            result.evidenceIds.add(rule.evidenceId);
          }
          if (rule.findingId) {
            result.findingIds.add(rule.findingId);
          }
          if (rule.scoreDeduction !== undefined && rule.scoreDeduction > 0) {
            result.scoreDeductions.push({
              ruleId: rule.id,
              questionId: rule.questionId,
              deduction: rule.scoreDeduction,
              severity: rule.severity,
              findingId: rule.findingId,
            });
          }
          if (rule.confidenceAdjustment) {
            result.totalConfidenceAdjustment += rule.confidenceAdjustment;
          }
        }
      }
    }

    return result;
  }
}
