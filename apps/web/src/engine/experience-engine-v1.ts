import { CalculatedMetrics } from '../store/assessment-store';
import { 
  ExperienceBlock, 
  ExperienceGraph, 
  ExperienceGraphNode, 
  ConfidenceLevel, 
  JourneyMode,
  BlockMetadata
} from './types/experience-blocks';

export class ExperienceEngineV1 {
  
  public generate(
    answers: Record<string, any>,
    metrics: CalculatedMetrics
  ): ExperienceBlock[] {
    const graph = this.buildExperienceGraph(answers, metrics);
    return this.compileBlocks(graph, answers, metrics);
  }

  private buildExperienceGraph(answers: Record<string, any>, metrics: CalculatedMetrics): ExperienceGraph {
    const nodes = new Map<string, ExperienceGraphNode>();
    let context = 'Standard';
    
    // 1. Context Detection (Amendment #1)
    if (answers.conditions?.includes('pregnancy') || answers.life_stage === 'pregnancy') {
      context = 'Pregnancy';
    } else if (answers.conditions?.includes('terminal_illness') || answers.life_stage === 'palliative') {
      context = 'Palliative';
    } else if (answers.age > 65) {
      context = 'AdvancedAge';
    } else if (answers.conditions?.includes('pcos')) {
      context = 'PCOS';
    } else if (answers.occupation?.toLowerCase() === 'athlete' || answers.context?.toLowerCase() === 'athlete') {
      context = 'Athlete';
    }

    // 2. Journey Planner (Amendment from Trial 1.3)
    let journeyMode: JourneyMode = 'Improvement';
    
    if (context === 'Palliative') {
      journeyMode = 'Comfort';
    } else if (context === 'AdvancedAge') {
      journeyMode = 'Independence';
    } else if (metrics.weightDirection === 'maintain') {
      journeyMode = 'Maintenance';
    } else if (context === 'Pregnancy') {
      journeyMode = 'Adaptation';
    } else if (context === 'PCOS') {
      journeyMode = 'Adaptation';
    } else if (context === 'Athlete') {
      journeyMode = 'Recovery';
    }

    // 3. Contradiction Detection & Synergy (Trial 2.1 & 4.2)
    // In a real graph, we would map each finding to a Node.
    // For V1, we simulate contradiction detection based on gaps between self-reported habits and clinical outcomes (metrics).
    
    // Simulate populating nodes
    metrics.scoreExplanation.forEach(finding => {
      nodes.set(finding.id, {
        id: finding.id,
        type: 'Finding',
        confidence: 'Confident',
        value: finding,
        relationships: []
      });
    });

    const addNode = (node: ExperienceGraphNode) => nodes.set(node.id, node);
    const addRelationship = (fromId: string, toId: string) => {
      nodes.get(fromId)?.relationships.push(toId);
    };

    return {
      nodes,
      context,
      journeyMode,
      addNode,
      addRelationship
    };
  }

  private compileBlocks(
    graph: ExperienceGraph, 
    answers: Record<string, any>,
    metrics: CalculatedMetrics
  ): ExperienceBlock[] {
    const blocks: ExperienceBlock[] = [];
    const pushBlock = (block: ExperienceBlock) => blocks.push(block);

    // Helper to format evidence string
    const formatEvidence = () => {
      const issues = metrics.scoreExplanation.map(f => f.label || (f as any).title).slice(0, 4);
      if (issues.length === 0) return "your assessment responses";
      if (issues.length === 1) return issues[0];
      const last = issues.pop();
      return `${issues.join(', ')}, and ${last}`;
    };

    const evidenceText = formatEvidence();

    // 1. Recognition Block (Observation)
    pushBlock({
      meta: this.createMeta('Recognition', 1, graph.journeyMode),
      narrative: {
        intent: 'acknowledgment',
        headline: metrics.recognition?.headline || `${answers.name || 'Thank you'}, thank you for answering honestly.`,
        body: metrics.recognition?.body || `Your days are being shaped more by ${metrics.rootCauseAttribution || 'external factors'} than by a lack of effort. That's an important difference, and it changes how we approach your health.\n\nYou've probably blamed yourself for this. We don't think you should.`,
        evidence: [],
        confidence: 'Confident'
      },
      data: {
        userName: answers.name,
        contextDetected: graph.context
      }
    });

    // 2. Reflection Block (What picture do my answers create?)
    pushBlock({
      meta: this.createMeta('Reflection', 2, graph.journeyMode),
      narrative: {
        intent: 'reflection',
        headline: metrics.patternHeadline || "This isn't one problem. It's a pattern.",
        body: `Your assessment paints a picture we see often: ${evidenceText.toLowerCase()} quietly feeding into one another. None of these habits exist in isolation.`,
        evidence: [],
        confidence: 'Confident'
      },
      data: {
        pillars: (metrics.score?.showScore === false) ? [] : metrics.pillarScores.map(p => ({
          id: p.id,
          label: p.label,
          score: p.score,
          status: p.score > 80 ? 'excellent' : p.score > 60 ? 'good' : p.score > 40 ? 'fair' : 'poor'
        })),
        goodNews: metrics.goodNews || {
          s1: "Nothing we found suggests your body has stopped responding.",
          s2: "Your habits have become trapped in a cycle.",
          highlight: "Cycles can be broken."
        }
      }
    });

    // 3. Strength Block (Is there anything hopeful here?)
    pushBlock({
      meta: this.createMeta('Strength', 3, graph.journeyMode),
      narrative: {
        intent: 'validation',
        headline: 'There is one decision you made today that matters.',
        body: "You answered honestly, giving us a realistic starting point. Real progress begins with an accurate understanding of today, not an ideal version of ourselves. That honesty is one of your greatest advantages moving forward.",
        evidence: ["Honesty in reporting your baseline"],
        confidence: 'Confident'
      },
      data: { strengths: metrics.strengths.length > 0 ? metrics.strengths : ["Completing this assessment with complete honesty"] }
    });

    // 4. Understanding Block (Why is this happening?)
    pushBlock({
      meta: this.createMeta('Understanding', 4, graph.journeyMode),
      narrative: {
        intent: 'insight',
        headline: 'Why progress has felt harder than it should.',
        body: `Your biggest challenge isn't simply eating too much or exercising too little. Patterns like ${evidenceText.toLowerCase()} are working together in the background. When habits reinforce each other, seeing results becomes much harder.`,
        evidence: metrics.scoreExplanation.map(f => (f as any).humanAnswer || f.label || (f as any).title).slice(0, 4),
        confidence: 'High'
      },
      data: {
        contradictionsExplained: [],
        contextualInsights: [metrics.overallSummary || "We identified intersecting habits affecting your baseline."]
      }
    });

    // 5. The Turning Point Block (What matters most?)
    if (metrics.biggestOpportunity) {
      pushBlock({
        meta: this.createMeta('TurningPoint', 5, graph.journeyMode),
        narrative: {
          intent: 'focus',
          headline: 'The pattern most worth changing first.',
          body: `Trying to fix everything at once has probably become part of the cycle itself. Your assessment suggests your biggest opportunity isn't working harder—it's making fewer, more consistent decisions each day. That's where your effort will create the greatest return.`,
          evidence: [`Opportunity identified: ${metrics.biggestOpportunityExplanation || metrics.biggestOpportunity}`],
          confidence: 'High'
        },
        data: {
          primaryChallenge: metrics.biggestOpportunity,
          impact: 'High'
        }
      });
    }

    // --- NEW INTELLIGENCE BLOCKS ---

    // Body Intelligence Block
    if (metrics.bodyIntelligence) {
      pushBlock({
        meta: this.createMeta('BodyIntelligence', 5, graph.journeyMode),
        narrative: {
          intent: 'insight',
          headline: 'Your Body Today',
          body: '',
          evidence: [],
          confidence: 'High'
        },
        data: {
          metrics: metrics.bodyIntelligence,
          improvementsScoreboard: [
            { label: 'Sleep', current: `${answers.sleep_hours || 6}h`, target: `${metrics.bodyIntelligence.targetSleep}h` },
            { label: 'Protein', current: `${Math.round(metrics.bodyIntelligence.targetProtein * 0.6)}g`, target: `${metrics.bodyIntelligence.targetProtein}g` },
            { label: 'Steps', current: answers.daily_steps === 'more_10k' ? '10k+' : '3500', target: `${metrics.bodyIntelligence.targetSteps}` }
          ]
        }
      });
    }

    // Nutrition Intelligence Block
    if (metrics.nutritionIntelligence) {
      pushBlock({
        meta: this.createMeta('NutritionIntelligence', 6, graph.journeyMode),
        narrative: {
          intent: 'education',
          headline: 'Micronutrient Dashboard',
          body: '',
          evidence: [],
          confidence: 'High'
        },
        data: {
          nutrients: metrics.nutritionIntelligence.nutrients
        }
      });
    }

    // Daily Blueprint Block
    if (metrics.dailyBlueprint) {
      pushBlock({
        meta: this.createMeta('DailyBlueprint', 7, graph.journeyMode),
        narrative: {
          intent: 'education',
          headline: 'Your Daily Nutrition Blueprint',
          body: 'This is how your targets translate into real life.',
          evidence: [],
          confidence: 'High'
        },
        data: {
          meals: metrics.dailyBlueprint.meals
        }
      });
    }

    // Companion Nutrition Block
    if (metrics.nutritionIntelligence) {
      pushBlock({
        meta: this.createMeta('CompanionNutrition', 8, graph.journeyMode),
        narrative: {
          intent: 'education',
          headline: 'Companion Nutrition',
          body: 'These products may help address the identified nutritional gaps when used alongside a balanced diet.',
          evidence: [],
          confidence: 'High'
        },
        data: {
          nutrients: metrics.nutritionIntelligence.nutrients
        }
      });
    }

    // --- END INTELLIGENCE BLOCKS ---

    // 6. Journey Block (Where do I begin?)
    pushBlock({
      meta: this.createMeta('Journey', 6, graph.journeyMode),
      narrative: {
        intent: 'pathfinding',
        headline: "The next 90 days are about making tomorrow slightly easier than today.",
        body: `Your first goal is to rebuild momentum. Small, consistent improvements in areas like ${evidenceText.split(',')[0].toLowerCase() || 'daily routines'} will make your journey feel less like a constant battle. When consistency improves, the numbers usually begin to follow on their own.`,
        evidence: [],
        confidence: 'Confident'
      },
      data: {
        mode: graph.journeyMode,
        timelineExpectation: metrics.timeline || "Focus on the first 14 days of consistency."
      }
    });

    // 7. Actions Block (What should I do tomorrow?)
    if (metrics.priorityPlan.length > 0) {
      pushBlock({
        meta: this.createMeta('Actions', 7, graph.journeyMode),
        narrative: {
          intent: 'activation',
          headline: 'The Next Step',
          body: 'Do not try to change everything at once. Focus only on these priority actions.',
          evidence: [],
          confidence: 'Confident'
        },
        data: {
          actions: metrics.priorityPlan.map((r: any) => ({
            id: r.id,
            title: r.title,
            why: r.why || 'This addresses a key pattern we identified in your assessment.',
            action: r.action,
            difficulty: r.difficulty || 'Moderate',
            successIndicators: [
              ...(r.successIndicators || []),
              `Within 7-10 days many people notice ${r.timeline || 'meaningful improvement in this area'}.`
            ]
          }))
        }
      });
    }

    // 8. Resources Block (How can I learn more?)
    pushBlock({
      meta: this.createMeta('Resources', 8, graph.journeyMode),
      narrative: {
        intent: 'education',
        headline: 'Learn only what helps your next step.',
        body: 'We chose these resources because they directly relate to the patterns we identified—not because they\'re popular, but because they\'re likely to make your next decision easier.',
        evidence: [],
        confidence: 'Confident'
      },
      data: {
        recommendedAssessments: metrics.recommendedAssessments,
        learningPaths: []
      }
    });

    // 9. Score Block (Summary)
    pushBlock({
      meta: this.createMeta('Score', 9, graph.journeyMode),
      narrative: {
        intent: 'summary',
        headline: metrics.score?.headline || `Your future isn't ${metrics.overallScore}. Your starting point is.`,
        body: (metrics.score?.body || `This number simply summarizes today's assessment. From this point forward, we'll use it to measure progress—not worth.\n\nYou don't have to become a different person to become healthier. You only need to help today's habits reflect the life you want tomorrow.`) + (metrics.closingPhilosophy ? `\n\n${metrics.closingPhilosophy}` : ''),
        evidence: [],
        confidence: 'Confident'
      },
      data: {
        overallScore: metrics.overallScore,
        scoreMeaning: metrics.scoreMeaning,
        showScore: metrics.score?.showScore ?? true,
        pillars: metrics.pillarScores
      }
    });

    return blocks;
  }

  private createMeta(type: any, priority: number, journeyMode: JourneyMode): BlockMetadata {
    return {
      id: crypto.randomUUID(),
      type,
      priority,
      confidence: 'Confident',
      evidenceIds: [],
      journeyMode,
      visibilityRules: {},
      version: '1.0'
    };
  }
}
