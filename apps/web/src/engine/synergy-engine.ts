import { KnowledgeRepositoryLoader } from './knowledge-loader';
import { SynergyRuleSchema } from '../knowledge/schema';

export interface SynergyEvaluationResult {
  synergyFindingIds: Set<string>;
  totalConfidenceBoost: number;
  matchedSynergies: Array<{
    synergyId: string;
    findingId: string;
    matchedEvidence: string[];
    priority: string;
    scoreAdjustment?: number;
    affectedPillar?: string;
  }>;
}

export class SynergyEngine {
  private loader: KnowledgeRepositoryLoader;
  private synergyRules: SynergyRuleSchema[] = [];

  constructor() {
    this.loader = KnowledgeRepositoryLoader.getInstance();
    this.initialize();
  }

  private initialize() {
    const modules = this.loader.getAllModules();
    modules.forEach(mod => {
      if (mod.synergy) {
        this.synergyRules.push(...mod.synergy);
      }
    });
  }

  /**
   * Evaluate active evidence and findings to discover higher-order synergy patterns.
   * @param activeIndicators Set of active Evidence IDs and direct Finding IDs from RulesEngine
   */
  public evaluate(activeIndicators: Set<string>): SynergyEvaluationResult {
    const result: SynergyEvaluationResult = {
      synergyFindingIds: new Set(),
      totalConfidenceBoost: 0,
      matchedSynergies: [],
    };

    for (const rule of this.synergyRules) {
      // Find intersection between required indicators and active indicators
      const matched = rule.requiredEvidence.filter(indicator => activeIndicators.has(indicator));

      if (matched.length >= rule.minRequiredMatches) {
        result.synergyFindingIds.add(rule.findingId);
        if (rule.confidence > 0) {
          result.totalConfidenceBoost += 5; // Flat +5% confidence per synergy pattern discovered
        }

        result.matchedSynergies.push({
          synergyId: rule.id,
          findingId: rule.findingId,
          matchedEvidence: matched,
          priority: rule.priority,
          scoreAdjustment: rule.scoreAdjustment || 0,
          affectedPillar: rule.affectedPillar
        });
      }
    }

    return result;
  }
}
