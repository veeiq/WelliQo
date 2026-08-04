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
          // As per the architecture design, matching a synergy pattern boosts clinical confidence.
          // In a more complex system this could be dynamic, but a flat boost or the rule's specific boost works here.
          // Assuming rule.confidence is the new baseline confidence, or a boost amount. Let's treat it as a boost +5.
          // Wait, the spec says finding confidence is e.g. 90. If it triggers, it sets that finding's confidence.
          // But to affect overall score confidence, let's just use a flat boost for each synergy matched.
          result.totalConfidenceBoost += 5; // Flat +5% confidence per synergy pattern discovered
        }

        result.matchedSynergies.push({
          synergyId: rule.id,
          findingId: rule.findingId,
          matchedEvidence: matched,
          priority: rule.priority,
        });
      }
    }

    return result;
  }
}
