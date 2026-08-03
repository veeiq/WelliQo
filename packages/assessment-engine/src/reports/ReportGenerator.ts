import type { IntelligenceDomain, MasterRecommendation, MasterFact, MasterDecision } from '../../../intelligence/src/schemas';

export interface UserState {
  id: string;
  triggeredFacts: string[];
  triggeredDecisions: string[];
}


export class ReportGenerator {
  private domain: IntelligenceDomain;

  constructor(domain: IntelligenceDomain) {
    this.domain = domain;
  }

  /**
   * Translates the raw DAG node output into a Gold Standard conversational coaching report.
   */
  public generate(userState: UserState): string {
    const { triggeredDecisions, triggeredFacts } = userState;
    
    // 1. Gather all triggered facts
    const activeFacts = this.domain.facts.filter((f: MasterFact) => triggeredFacts.includes(f.id));
    
    // 2. Gather all triggered decisions
    const activeDecisions = this.domain.decisions.filter((d: MasterDecision) => triggeredDecisions.includes(d.id));
    
    // 3. Gather linked recommendations
    const recommendedActionIds = new Set<string>();
    activeDecisions.forEach((d: MasterDecision) => {
      d.linkedRecommendations.forEach((rId: string) => recommendedActionIds.add(rId));
    });
    
    const activeRecs = this.domain.recommendations.filter((r: MasterRecommendation) => {
      if (!recommendedActionIds.has(r.id)) return false;
      
      // Final Eligibility Safeguard: Ensure user has ALL required facts for this recommendation
      if (r.requiredFacts && r.requiredFacts.length > 0) {
        const hasAllFacts = r.requiredFacts.every(factId => triggeredFacts.includes(factId));
        if (!hasAllFacts) return false;
      }
      
      return true;
    });
    
    // 4. Construct the Human-Readable Report
    let reportMarkdown = `# Your WelliQo Intelligence Report\n\n`;
    reportMarkdown += `*Based on your unique assessment, we have built a highly personalized roadmap.*\n\n`;
    
    if (activeRecs.length === 0) {
      reportMarkdown += `Everything looks perfectly balanced right now. Keep maintaining your healthy habits!\n`;
      return reportMarkdown;
    }

    // Refinement 1: Acknowledge at least one user strength
    reportMarkdown += `## Acknowledging Your Work\n`;
    reportMarkdown += `Before we look at what to improve, we want to acknowledge the hard work you are already doing. Simply showing up, taking this assessment, and confronting these realities takes courage. You are actively choosing to understand your body, and that is a massive strength.\n\n`;

    reportMarkdown += `## The Strategy\n\n`;
    reportMarkdown += `Let's dive into exactly what's going on and how we're going to fix it together.\n\n`;

    // Refinement 2: Prioritize recommendations
    const startToday = activeRecs.filter((r: MasterRecommendation) => r.priority === 1);
    const thisWeek = activeRecs.filter((r: MasterRecommendation) => r.priority === 2);
    const buildFuture = activeRecs.filter((r: MasterRecommendation) => r.priority >= 3);

    const renderRecs = (recs: MasterRecommendation[], bucketTitle: string) => {
      if (recs.length === 0) return '';
      let out = `### 📍 ${bucketTitle}\n\n`;
      recs.forEach((rec, index) => {
        out += `#### ${rec.title}\n`;
        out += `**Why we think this:** ${rec.whyWeThinkThis}\n\n`;
        out += `**Your First Step:** ${rec.firstStep}\n\n`;
        out += `**Why this matters:** ${rec.whyFirstStepMatters}\n\n`;
        out += `**Vision for Success:** ${rec.successVision}\n\n`;
        out += `*Coach Insight:* ${rec.coachSupportTiming}\n\n`;
        
        if (index < recs.length - 1) {
          out += `*You've got this. Now, let's look at the next piece...*\n\n`;
        }
        out += `---\n\n`;
      });
      return out;
    };

    reportMarkdown += renderRecs(startToday, "Start Today");
    reportMarkdown += renderRecs(thisWeek, "This Week");
    reportMarkdown += renderRecs(buildFuture, "Build for the Future");
    
    // Refinement 3: Hopeful WelliQo closing message
    reportMarkdown += `## Moving Forward\n`;
    reportMarkdown += `This isn't a strict diet plan. It is a roadmap to removing the friction in your life. Start with just ONE first step from the list above, and let's build momentum.\n\n`;
    reportMarkdown += `> **A Note from WelliQo:**\n`;
    reportMarkdown += `> Remember, long-term progress is always more important than short-term perfection. Be kind to yourself, take it one day at a time, and trust the process. We are with you every step of the way.\n`;
    
    return reportMarkdown;
  }
}
