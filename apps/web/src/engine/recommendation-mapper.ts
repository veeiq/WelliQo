export type IntentPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export interface ContentIntent {
  intent: string;
  priority: IntentPriority;
  rationale: string;
}

export class RecommendationMapper {
  
  /**
   * Translates raw clinical findings into actionable content intents
   * and generates a personalized rationale for the user.
   */
  public mapFindingsToIntents(findings: string[]): ContentIntent[] {
    const intents: ContentIntent[] = [];

    // Group 1: Sleep
    if (findings.includes('POOR_SLEEP') || findings.includes('LOW_ENERGY')) {
      intents.push({
        intent: 'SLEEP_IMPROVEMENT',
        priority: findings.includes('POOR_SLEEP') ? 'HIGH' : 'MEDIUM',
        rationale: 'Because your assessment detected poor sleep quality and low daily energy.'
      });
    }

    // Group 2: Hydration
    if (findings.includes('POOR_HYDRATION')) {
      intents.push({
        intent: 'HYDRATION',
        priority: 'MEDIUM',
        rationale: 'Because your assessment showed signs of sub-optimal hydration.'
      });
    }

    // Group 3: Nutrition / Protein
    if (findings.includes('LOW_PROTEIN') || findings.includes('LOW_MUSCLE')) {
      intents.push({
        intent: 'PROTEIN_BOOST',
        priority: 'HIGH',
        rationale: 'Because your protein intake is below the recommended threshold for muscle preservation.'
      });
    }

    // Group 4: Stress
    if (findings.includes('HIGH_STRESS')) {
      intents.push({
        intent: 'STRESS_RELIEF',
        priority: 'HIGH',
        rationale: 'Because you reported elevated stress levels impacting your daily life.'
      });
    }

    // Group 5: Heart & Activity
    if (findings.includes('LOW_ACTIVITY') || findings.includes('HIGH_SUGAR')) {
      intents.push({
        intent: 'METABOLIC_HEALTH',
        priority: findings.includes('HIGH_SUGAR') ? 'CRITICAL' : 'MEDIUM',
        rationale: 'Because increasing daily activity helps regulate blood sugar and cardiovascular health.'
      });
    }

    // Group 6: Digestion
    if (findings.includes('POOR_DIGESTION')) {
      intents.push({
        intent: 'GUT_HEALTH',
        priority: 'MEDIUM',
        rationale: 'Because you reported digestive discomfort.'
      });
    }

    return intents;
  }
}
