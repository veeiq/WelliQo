import { HydratedReport } from "@/app/(dashboard)/dashboard/components/HydratedReport";
import { ExperienceEngineV1 } from "@/engine/experience-engine-v1";
import { CalculatedMetrics } from "@/store/assessment-store";

export default function AshaTestPage() {
  // Asha's raw answers
  const answers = {
    name: "Asha",
    age: 28,
    gender: "female",
    occupation: "Scientist",
    primary_goal: "optimize",
    conditions: [],
    sleep_hours: 8,
    sleep_quality: "excellent",
    stress_level: "low",
    diet_pattern: "structured",
    emotional_state: "motivated"
  };

  // Asha's calculated metrics
  const metrics: CalculatedMetrics = {
    overallScore: 94,
    scoreMeaning: "A 94 doesn't mean you need to find the missing 6 points. It means your body is thriving.",
    overallSummary: "Your sleep is restorative, your stress is managed, and your body feels strong.",
    rootCauseAttribution: "a highly effective routine",
    recognition: {
      headline: "Asha, your routine is working beautifully.",
      body: "When we look at your answers, the picture is incredibly clear: you are taking excellent care of yourself. Your sleep is restorative, your stress is managed, and your body feels strong.\n\nYou might be taking this assessment wondering if there is a hidden flaw you need to fix, or a new supplement you should be taking. Based on the information you shared with us today, we don't see evidence that you need a major change. You are already succeeding."
    },
    patternHeadline: "You don't need to invent a problem to be healthy.",
    goodNews: {
      s1: "Your biology is quietly humming along exactly as it should.",
      s2: "The urge to constantly find a new problem to fix is a false belief.",
      highlight: "Maintenance is an achievement."
    },
    score: {
      headline: "Your score is a reflection, not a finish line.",
      body: "A 94 doesn't mean you need to find the missing 6 points. It means your body is thriving.\n\nWe will use this number simply as a reference point to ensure you stay right where you are.",
      showScore: true
    },
    closingPhilosophy: "Your body is telling us that your current routine is working beautifully; the goal now is not to fix it, but to protect it.",
    biggestOpportunity: "Protecting the Baseline",
    biggestOpportunityExplanation: "Sometimes the most advanced wellness strategy in the world is simply protecting what is already working.",
    timeline: "Celebrate your current state for the next 90 days.",
    weightDirection: "maintain",
    pillarScores: [
      { id: "nutrition", label: "Nutrition", score: 95 },
      { id: "movement", label: "Movement", score: 92 },
      { id: "recovery", label: "Recovery", score: 96 },
      { id: "mindset", label: "Mindset", score: 93 },
    ],
    scoreExplanation: [
      { id: "high_energy", label: "high energy", humanAnswer: "You reported high daily energy", value: 9 },
      { id: "no_pain", label: "zero pain", humanAnswer: "You reported zero chronic pain", value: 9 },
      { id: "managed_stress", label: "managed stress", humanAnswer: "You reported excellent stress management", value: 9 }
    ],
    strengths: [
      "Reaching a baseline where your energy is stable and your sleep is deep does not happen by accident.",
      "Your ability to maintain that quiet consistency is a massive biological advantage."
    ],
    priorityPlan: [
      {
        id: "disconnect",
        title: "Leave your fitness tracker in another room for a full afternoon once a week.",
        why: "When your baseline health is excellent, the biggest risk is 'wellness anxiety'—the stress of over-tracking.",
        action: "Periodically disconnect to reinforce the trust you have built with your own body's natural cues.",
        difficulty: "Moderate",
        timeline: "Immediate.",
        successIndicators: ["A deeper sense of physical confidence"]
      }
    ],
    recommendedAssessments: [],

    // NEW MOCKED INTELLIGENCE
    bodyIntelligence: {
      age: 28,
      heightCm: 165,
      weightKg: 58,
      bmi: "21.3",
      bmiCategory: "Ideal",
      healthyWeightRange: "50 - 68",
      bmr: 1350,
      tdee: 1950,
      targetCalories: 1950,
      targetProtein: 90,
      targetWater: 2.8,
      targetFiber: 27,
      targetSleep: 7.5,
      targetSteps: 10000
    },
    nutritionIntelligence: {
      nutrients: [
        {
          id: "iron",
          label: "Iron",
          target: "Optimal",
          current: "Marginal",
          gap: "Evaluate",
          status: "yellow",
          whyItMatters: "Iron transports oxygen in your blood. Low iron leads to severe fatigue and poor metabolic function.",
          foods: [
            { category: "Plant", items: ["Spinach", "Lentils", "Amaranth", "Pumpkin Seeds"] }
          ],
          companionSupport: ["Formula 2 Multivitamin, Mineral & Herbal Tablets Plus"]
        },
        {
          id: "b12",
          label: "Vitamin B12",
          target: "Optimal",
          current: "Deficient",
          gap: "Evaluate",
          status: "red",
          whyItMatters: "B12 is vital for nerve function and DNA synthesis. It is extremely common for plant-based diets to lack B12.",
          foods: [
            { category: "Plant", items: ["Nutritional Yeast", "Fortified Plant Milks"] }
          ],
          companionSupport: ["Formula 2 Multivitamin, Mineral & Herbal Tablets Plus"]
        }
      ]
    },
    dailyBlueprint: {
      meals: [
        { name: "Breakfast", calories: 450, protein: 20 },
        { name: "Lunch", calories: 600, protein: 30 },
        { name: "Snack", calories: 300, protein: 10 },
        { name: "Dinner", calories: 600, protein: 30 }
      ]
    }
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
