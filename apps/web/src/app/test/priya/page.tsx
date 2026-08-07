import { HydratedReport } from "@/app/(dashboard)/dashboard/components/HydratedReport";
import { ExperienceEngineV1 } from "@/engine/experience-engine-v1";
import { CalculatedMetrics } from "@/store/assessment-store";

export default function PriyaTestPage() {
  // Priya's raw answers
  const answers = {
    name: "Priya",
    age: 29,
    gender: "female",
    occupation: "IT Professional",
    primary_goal: "get_pregnant",
    conditions: ["pcos"],
    sleep_hours: 5,
    sleep_quality: "poor",
    stress_level: "high",
    diet_pattern: "restrictive_binge",
    emotional_state: "blamed_frustrated"
  };

  // Priya's calculated metrics
  const metrics: CalculatedMetrics = {
    overallScore: 62,
    scoreMeaning: "Your body is working overtime to manage hormonal fluctuations, drawing energy away from daily recovery.",
    overallSummary: "Hormonal imbalances are amplifying your daily stress, leading to poor sleep and exhaustion.",
    rootCauseAttribution: "a protective hormonal response",
    recognition: {
      headline: "Priya, thank you for answering honestly.",
      body: "Your days are being shaped more by a protective hormonal response than by a lack of effort. That's an important difference, and it changes how we approach your health.\n\nYou've probably blamed yourself for this. We don't think you should."
    },
    patternHeadline: "This isn't a lack of discipline. It's a biological pattern.",
    goodNews: {
      s1: "Nothing we found suggests your body has stopped responding.",
      s2: "Your body is protecting itself from stress.",
      highlight: "Your body can regain balance."
    },
    score: {
      headline: "Your future isn't 62. Your starting point is.",
      body: "This number simply summarizes today's assessment. From this point forward, we'll use it to measure how effectively your body feels safe enough to heal.\n\nYou don't have to become a different person to become healthier. You only need to help today's habits reflect the life you want tomorrow.",
      showScore: true
    },
    closingPhilosophy: "Your body is responding—not failing. Let's start working with it.",
    biggestOpportunity: "Cortisol Management & Nervous System Regulation",
    biggestOpportunityExplanation: "Healing your sleep and managing stress are more critical for your hormones right now than another restrictive diet.",
    timeline: "Focus on establishing safety for your body over the next 14 days.",
    weightDirection: "lose",
    pillarScores: [
      { id: "nutrition", label: "Nutrition", score: 40 },
      { id: "movement", label: "Movement", score: 55 },
      { id: "recovery", label: "Recovery", score: 30 },
      { id: "mindset", label: "Mindset", score: 45 },
    ],
    scoreExplanation: [
      { id: "pcos_hormonal", label: "hormonal imbalance", humanAnswer: "You are navigating PCOS and hormonal fluctuations", value: 9 },
      { id: "poor_sleep", label: "inconsistent sleep", humanAnswer: "You usually sleep poorly due to stress", value: 8 },
      { id: "restriction_fatigue", label: "restriction fatigue", humanAnswer: "You have tried many diets and feel exhausted by restriction", value: 7 },
      { id: "high_stress", label: "high stress", humanAnswer: "Your work responsibilities appear to be increasing your stress", value: 7 }
    ],
    strengths: [
      "You haven't given up on your body despite feeling frustrated.",
      "You answered honestly about the emotional toll of past diets."
    ],
    priorityPlan: [
      {
        id: "sleep_recovery",
        title: "Prioritize 7 hours of uninterrupted sleep.",
        why: "Sleep is when your body regulates the hormones disrupted by PCOS.",
        action: "Create a dark, cool sleep environment and disconnect from work 1 hour before bed.",
        difficulty: "Moderate",
        timeline: "Better emotional resilience in 7 days.",
        successIndicators: ["Feeling less overwhelmed in the morning"]
      },
      {
        id: "gentle_nourishment",
        title: "Eat a protein-rich breakfast within 60 minutes of waking.",
        why: "This stabilizes blood sugar immediately, telling your body it is safe rather than in starvation mode.",
        action: "Have eggs, Greek yogurt, or a protein shake every morning.",
        difficulty: "Easy",
        timeline: "More stable energy by afternoon.",
        successIndicators: ["Reduced afternoon crashes"]
      }
    ],
    recommendedAssessments: []
  };

  const engine = new ExperienceEngineV1();
  const blocks = engine.generate(answers, metrics);

  return (
    <HydratedReport 
      metrics={metrics} 
      data={answers} 
      answers={answers}
      experienceBlocks={blocks}
      hideSaveAction={true}
    />
  );
}
