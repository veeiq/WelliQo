import { HydratedReport } from "@/app/(dashboard)/dashboard/components/HydratedReport";
import { ExperienceEngineV1 } from "@/engine/experience-engine-v1";
import { CalculatedMetrics } from "@/store/assessment-store";

export default function KaranTestPage() {
  // Karan's raw answers
  const answers = {
    name: "Karan",
    age: 41,
    gender: "male",
    occupation: "Professional",
    primary_goal: "feel_better",
    conditions: [],
    sleep_hours: 9, // Excellent sleep
    sleep_quality: "excellent",
    stress_level: "low", // 1/10 stress
    diet_pattern: "structured",
    emotional_state: "fatigued" // But severely exhausted
  };

  // Karan's calculated metrics
  const metrics: CalculatedMetrics = {
    overallScore: 0, // Score suspended
    scoreMeaning: "We have temporarily suspended your Wellness Score. Giving you a number right now would require us to guess.",
    overallSummary: "You are experiencing 10/10 fatigue despite excellent sleep and low stress. This is a physiological red flag.",
    rootCauseAttribution: "a hidden biological drain rather than lifestyle factors",
    recognition: {
      headline: "Karan, something here doesn't add up.",
      body: "When we look at your answers, we see a pattern that is highly unusual. You reported feeling completely exhausted every single day, yet you also reported sleeping nine hours a night perfectly and experiencing almost no stress.\n\nYour body is telling us two different stories, and before we act, we need to understand which one is true."
    },
    patternHeadline: "A generic plan won't fix a mystery.",
    goodNews: {
      s1: "If you are sleeping perfectly and living with low stress, yet still exhausted, that is a physiological flag, not a wellness plateau.",
      s2: "We refuse to give you a generic fitness plan that ignores that reality.",
      highlight: "Inquiry before action."
    },
    score: {
      headline: "Your score is paused.",
      body: "We have temporarily suspended your Wellness Score. Giving you a number right now would require us to guess, and that violates our promise to you.\n\nWe will calculate your baseline once the picture is clear.",
      showScore: false
    },
    closingPhilosophy: "Your body is telling us two different stories, and before we act, we need to understand which one is true.",
    biggestOpportunity: "Clinical Clarity",
    biggestOpportunityExplanation: "Seeking clinical clarity on why your biology isn't matching your lifestyle.",
    timeline: "Focus entirely on discovering the root cause.",
    weightDirection: "maintain",
    pillarScores: [
      { id: "nutrition", label: "Nutrition", score: 80 },
      { id: "movement", label: "Movement", score: 80 },
      { id: "recovery", label: "Recovery", score: 90 },
      { id: "mindset", label: "Mindset", score: 90 },
    ],
    scoreExplanation: [
      { id: "severe_fatigue", label: "severe fatigue", humanAnswer: "You reported 10/10 fatigue every day", value: 9 },
      { id: "perfect_sleep", label: "excellent sleep", humanAnswer: "You reported 9 hours of quality sleep", value: 8 },
      { id: "low_stress", label: "low stress", humanAnswer: "You reported 1/10 stress levels", value: 8 }
    ],
    strengths: [
      "Reaching out for an assessment when you are this exhausted takes effort.",
      "You clearly recognize that your current energy levels are not normal for you."
    ],
    priorityPlan: [
      {
        id: "clinical_inquiry",
        title: "Discuss these symptoms with your healthcare professional.",
        why: "Severe fatigue despite adequate sleep and low stress is a classic presentation of a systemic deficiency or imbalance. We need the clinical data to tell us what the questionnaire cannot.",
        action: "Ask your doctor about tests such as Vitamin D, B12, iron, or thyroid function.",
        difficulty: "Moderate",
        timeline: "Immediate next step.",
        successIndicators: ["Obtaining a factual baseline"]
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
