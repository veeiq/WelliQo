import { HydratedReport } from "@/app/(dashboard)/dashboard/components/HydratedReport";
import { ExperienceEngineV1 } from "@/engine/experience-engine-v1";
import { CalculatedMetrics } from "@/store/assessment-store";

export default function RahulTestPage() {
  // Rahul's raw answers
  const answers = {
    name: "Rahul",
    age: 42,
    gender: "male",
    occupation: "software_engineer",
    primary_goal: "lose_weight",
    sleep_hours: 5,
    sleep_quality: "poor",
    stress_level: "high",
    diet_pattern: "erratic",
    late_night_snacking: true,
    energy_level: "low"
  };

  // Rahul's calculated metrics (Mocked from old Rules Engine)
  const metrics: CalculatedMetrics = {
    overallScore: 54,
    scoreMeaning: "Your baseline sits exactly where we expect for a busy professional carrying chronic stress.",
    overallSummary: "A demanding career and inconsistent sleep are quietly feeding a cycle of low energy and poor recovery.",
    rootCauseAttribution: "external stress and fatigue",
    recognition: {
      headline: "Rahul, thank you for answering honestly.",
      body: "Your days are being shaped more by external stress and fatigue than by a lack of effort. That's an important difference, and it changes how we approach your health.\n\nYou've probably blamed yourself for this. We don't think you should."
    },
    patternHeadline: "This isn't one problem. It's a pattern.",
    goodNews: {
      s1: "Nothing we found suggests your body has stopped responding.",
      s2: "Your habits have become trapped in a cycle.",
      highlight: "Cycles can be broken."
    },
    score: {
      headline: "Your future isn't 54. Your starting point is.",
      body: "This number simply summarizes today's assessment. From this point forward, we'll use it to measure progress—not worth.\n\nYou don't have to become a different person to become healthier. You only need to help today's habits reflect the life you want tomorrow.",
      showScore: true
    },
    closingPhilosophy: "Every cycle can be broken. Let's start with tomorrow morning.",
    biggestOpportunity: "Sleep Foundation",
    biggestOpportunityExplanation: "Without adequate sleep, your body relies on quick energy (sugar) to get through the day.",
    timeline: "Focus on establishing a wind-down routine for 14 days before attempting diet changes.",
    weightDirection: "lose",
    pillarScores: [
      { id: "nutrition", label: "Nutrition", score: 45 },
      { id: "movement", label: "Movement", score: 60 },
      { id: "recovery", label: "Recovery", score: 35 },
      { id: "mindset", label: "Mindset", score: 50 },
    ],
    scoreExplanation: [
      { id: "poor_sleep", label: "inconsistent sleep", humanAnswer: "You usually sleep less than 6 hours", value: 5 },
      { id: "high_stress", label: "high stress", humanAnswer: "Stress stays high most days", value: 8 },
      { id: "late_eating", label: "late-night snacking", humanAnswer: "You often snack late in the evening", value: true },
      { id: "sugar_cravings", label: "sugar cravings", humanAnswer: "You experience frequent sugar cravings", value: true }
    ],
    strengths: [
      "You recognized that energy levels are the root problem.",
      "Honesty about current erratic patterns."
    ],
    priorityPlan: [
      {
        id: "sleep_routine",
        title: "Establish a 15-minute wind-down routine.",
        why: "To break the cycle of high cortisol preventing deep sleep.",
        action: "No screens 30 minutes before bed. Read or stretch instead.",
        difficulty: "Moderate",
        timeline: "Better energy within 5 days.",
        successIndicators: ["Waking up feeling rested"]
      },
      {
        id: "hydrate_morning",
        title: "Drink 500ml of water immediately upon waking.",
        why: "Dehydration mimics fatigue and triggers sugar cravings.",
        action: "Keep a glass of water on your nightstand.",
        difficulty: "Easy",
        timeline: "Immediate energy boost.",
        successIndicators: ["Reduced mid-morning cravings"]
      }
    ],
    recommendedAssessments: [],
    
    // NEW MOCKED INTELLIGENCE
    bodyIntelligence: {
      age: 42,
      heightCm: 175,
      weightKg: 85,
      bmi: "27.8",
      bmiCategory: "Overweight",
      healthyWeightRange: "60 - 75",
      bmr: 1750,
      tdee: 2100,
      targetCalories: 1800,
      targetProtein: 140,
      targetWater: 3.2,
      targetFiber: 25,
      targetSleep: 7.5,
      targetSteps: 8000
    },
    nutritionIntelligence: {
      nutrients: [
        {
          id: "protein",
          label: "Protein",
          target: "140g",
          current: "80g",
          gap: "60g",
          status: "red",
          whyItMatters: "Protein helps preserve muscle while losing fat, stabilizes blood sugar, and is essential for metabolic recovery.",
          foods: [
            { category: "Meat & Fish", items: ["Chicken Breast", "Fish", "Lean Mutton"] },
            { category: "Egg", items: ["Eggs"] },
            { category: "Dairy", items: ["Paneer", "Greek Yogurt"] }
          ],
          companionSupport: ["Formula 1 Nutritional Shake Mix", "Personalized Protein Powder"]
        },
        {
          id: "fiber",
          label: "Fiber",
          target: "25g",
          current: "15g",
          gap: "10g",
          status: "yellow",
          whyItMatters: "Fiber promotes healthy digestion, keeps you full longer, and helps regulate blood sugar levels.",
          foods: [
            { category: "Grains & Legumes", items: ["Oats", "Lentils", "Brown Rice"] },
            { category: "Fruits & Veggies", items: ["Apples", "Guava", "Spinach"] }
          ],
          companionSupport: ["Active Fiber Complex"]
        },
        {
          id: "omega_3",
          label: "Omega 3",
          target: "Optimal",
          current: "Likely Low",
          gap: "Evaluate",
          status: "yellow",
          whyItMatters: "Omega 3 fatty acids are essential for heart health, reducing inflammation, and brain function.",
          foods: [
            { category: "Meat & Fish", items: ["Salmon", "Sardines"] },
            { category: "Nuts & Seeds", items: ["Walnuts", "Flaxseeds"] }
          ],
          companionSupport: ["Herbalifeline®"]
        }
      ]
    },
    dailyBlueprint: {
      meals: [
        { name: "Breakfast", calories: 450, protein: 35 },
        { name: "Lunch", calories: 600, protein: 45 },
        { name: "Snack", calories: 250, protein: 20 },
        { name: "Dinner", calories: 500, protein: 40 }
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
