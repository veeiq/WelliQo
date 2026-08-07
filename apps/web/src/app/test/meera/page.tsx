import { HydratedReport } from "@/app/(dashboard)/dashboard/components/HydratedReport";
import { ExperienceEngineV1 } from "@/engine/experience-engine-v1";
import { CalculatedMetrics } from "@/store/assessment-store";

export default function MeeraTestPage() {
  // Meera's raw answers
  const answers = {
    name: "Meera",
    age: 62,
    gender: "female",
    occupation: "Retired",
    primary_goal: "feel_better",
    conditions: ["terminal_illness"],
    sleep_hours: 8,
    sleep_quality: "poor",
    stress_level: "low",
    diet_pattern: "structured",
    emotional_state: "fatigued"
  };

  // Meera's calculated metrics
  const metrics: CalculatedMetrics = {
    overallScore: 0, // Disabled in engine
    scoreMeaning: "We have disabled the Wellness Score for your assessment. A number cannot reflect the dignity, love, and meaning present in your life right now.",
    overallSummary: "Chronic fatigue is naturally draining your energy reserves, making traditional self-care feel pointless.",
    rootCauseAttribution: "a serious illness",
    recognition: {
      headline: "Meera, we are honored you shared this with us.",
      body: "When we look at your answers, we see a reality that requires profound strength to navigate. Your answers suggest you are living with a serious illness, and traditional health metrics probably feel very distant to you right now.\n\nYou might be wondering why an app like this is even relevant to you anymore. We want you to know that we hear you, we respect where you are, and we are not here to ask you to fight a battle you have already accepted."
    },
    patternHeadline: "Care does not require a cure.",
    goodNews: {
      s1: "Because you cannot recover, it is entirely natural to feel that caring for your body is pointless.",
      s2: "But wellness isn't always about getting better. Right now, it is simply about preserving your comfort and dignity.",
      highlight: "Meaning over improvement."
    },
    score: {
      headline: "Your life cannot be scored.",
      body: "We have disabled the Wellness Score for your assessment. A number cannot reflect the dignity, love, and meaning present in your life right now.\n\nOur goal is no longer to change your destination, but to bring as much comfort and dignity as possible to your days.",
      showScore: false
    },
    closingPhilosophy: "We are here to support your comfort.",
    biggestOpportunity: "Energy Conservation & Connection",
    biggestOpportunityExplanation: "The goal isn't to fix your body; it is to gently support it so you can spend your remaining energy on what truly matters to you.",
    timeline: "Focus exclusively on comfort and meaning from this moment on.",
    weightDirection: "maintain",
    pillarScores: [], // Hidden
    scoreExplanation: [
      { id: "chronic_fatigue", label: "chronic fatigue", humanAnswer: "You reported experiencing chronic fatigue", value: 9 },
      { id: "family_time", label: "family connection", humanAnswer: "You reported a deep desire to conserve energy for your grandchildren", value: 8 }
    ],
    strengths: [
      "Despite your fatigue, you are completely clear on what you value most: your family.",
      "That clarity is a profound emotional strength."
    ],
    priorityPlan: [
      {
        id: "energy_window",
        title: "Protect one 15-minute connection window.",
        why: "By proactively scheduling connection during your highest-energy windows, you prevent the fatigue of the day from stealing your most meaningful moments.",
        action: "Choose one small window each day when you feel most comfortable and protect it exclusively for family.",
        difficulty: "Moderate",
        timeline: "Immediate sense of control.",
        successIndicators: ["Feeling present during family time"]
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
