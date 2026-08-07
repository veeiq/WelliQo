import { HydratedReport } from "@/app/(dashboard)/dashboard/components/HydratedReport";
import { ExperienceEngineV1 } from "@/engine/experience-engine-v1";
import { CalculatedMetrics } from "@/store/assessment-store";

export default function ArjunTestPage() {
  // Arjun's raw answers
  const answers = {
    name: "Arjun",
    age: 24,
    gender: "male",
    occupation: "Athlete",
    primary_goal: "improve_performance",
    conditions: [],
    sleep_hours: 5,
    sleep_quality: "poor",
    stress_level: "high",
    diet_pattern: "structured",
    emotional_state: "anxious_plateau"
  };

  // Arjun's calculated metrics
  const metrics: CalculatedMetrics = {
    overallScore: 72,
    scoreMeaning: "Your output is outpacing your biology, driving Central Nervous System fatigue.",
    overallSummary: "Extreme training volume and poor sleep are actively masking your true performance potential.",
    rootCauseAttribution: "an imbalance in recovery",
    recognition: {
      headline: "Arjun, we see the pressure you are carrying.",
      body: "Your answers suggest a level of dedication that most people never achieve. You don't need to prove how hard you've been trying. Your answers already tell us that.\n\nBetween your intense training schedule and the high expectations you've set for yourself, you are operating at an elite level of output. But that output is currently outpacing your biology."
    },
    patternHeadline: "This isn't a lack of effort. It's an imbalance in recovery.",
    goodNews: {
      s1: "Nothing we found suggests you lack discipline.",
      s2: "Your body is simply under-recovering from the demands you place on it.",
      highlight: "Recovery is part of performance."
    },
    score: {
      headline: "Your future isn't 72. Your starting point is.",
      body: "The number doesn't tell us who you are. It simply summarizes today's physical state.\n\nFrom this point forward, we'll use it to measure how effectively you recover—not how hard you can suffer.",
      showScore: true
    },
    closingPhilosophy: "Your greatest performance gain won't come from another hour on the court; it will come from allowing your body the time it needs to rebuild.",
    biggestOpportunity: "CNS Recovery & Sleep Architecture",
    biggestOpportunityExplanation: "Resting will not make you lose your edge; it is biologically required to sharpen it.",
    timeline: "Focus on physiological restoration for 14 days before attempting new PRs.",
    weightDirection: "maintain",
    pillarScores: [
      { id: "nutrition", label: "Nutrition", score: 85 },
      { id: "movement", label: "Movement", score: 95 },
      { id: "recovery", label: "Recovery", score: 40 },
      { id: "mindset", label: "Mindset", score: 60 },
    ],
    scoreExplanation: [
      { id: "cns_fatigue", label: "CNS fatigue", humanAnswer: "You regularly train through significant soreness", value: 9 },
      { id: "poor_sleep", label: "inconsistent sleep", humanAnswer: "You sleep around 5 hours a night", value: 8 },
      { id: "performance_anxiety", label: "performance anxiety", humanAnswer: "You feel anxious about losing your edge", value: 8 }
    ],
    strengths: [
      "Your ability to push through discomfort is elite.",
      "Your commitment to training is obvious."
    ],
    priorityPlan: [
      {
        id: "absolute_rest",
        title: "Schedule one absolute rest day per week.",
        why: "Removing physical stressors allows your Central Nervous System to clear fatigue, translating directly to faster reaction times.",
        action: "Zero active recovery. Complete physiological rest.",
        difficulty: "Hard (Psychologically)",
        timeline: "Sharper, more explosive movement in 10 days.",
        successIndicators: ["Feeling less anxious on rest days"]
      },
      {
        id: "sleep_extension",
        title: "Extend sleep window by 90 minutes.",
        why: "Muscle tissue doesn't adapt during the workout—it adapts during deep sleep.",
        action: "Set a hard cutoff time for screens to allow melatonin onset.",
        difficulty: "Moderate",
        timeline: "Improved morning HRV in 5 days.",
        successIndicators: ["Waking up without an alarm"]
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
