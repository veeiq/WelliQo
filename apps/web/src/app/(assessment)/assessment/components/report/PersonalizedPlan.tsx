import React from 'react';
import { CalculatedMetrics } from '../../../../../store/assessment-store';

export function PersonalizedPlan({ metrics, answers }: { metrics: CalculatedMetrics, answers: Record<string, any> }) {
  if (!metrics.pillarScores) return null;

  // Find lowest scores to provide actionable advice
  const sorted = [...metrics.pillarScores].sort((a, b) => a.score - b.score);
  const focusPillars = sorted.slice(0, 3); // bottom 3

  return (
    <div className="bg-emerald-950 dark:bg-emerald-950/50 rounded-3xl p-6 md:p-8 shadow-sm text-emerald-50">
      <h2 className="text-xl md:text-2xl font-bold mb-2">Priority Focus Areas</h2>
      <p className="text-emerald-200/80 text-sm mb-6 pb-6 border-b border-emerald-800/50">
        Based on your assessment, these are the top 3 areas to prioritize right now for maximum impact.
      </p>

      <div className="space-y-6">
        {focusPillars.map((pillar) => (
          <div key={pillar.id} className="bg-white/10 rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{pillar.icon}</span>
              <h3 className="font-semibold text-lg">{pillar.label}</h3>
            </div>
            <p className="text-emerald-100/90 text-sm leading-relaxed">
              {getAdviceForPillar(pillar.id, answers)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function getAdviceForPillar(id: string, answers: Record<string, any>) {
  switch (id) {
    case 'weight':
      return "Start by creating a slight caloric deficit. Focus on high-protein, high-fiber meals to keep you full while burning fat.";
    case 'muscle':
      return "Incorporate resistance training at least 3 times a week. Ensure you're consuming enough protein (approx. 1.6g per kg of body weight) to support muscle synthesis.";
    case 'sleep':
      return "Establish a strict sleep schedule. Dim lights 1 hour before bed and remove screens from the bedroom. Your body needs deep rest to balance hormones.";
    case 'nutrition':
      return "Focus on whole, unprocessed foods. Try adopting an 80/20 rule: 80% nutrient-dense whole foods, 20% flexibility to prevent bingeing.";
    case 'hydration':
      return "Aim for at least 3 liters of water a day. Drink a large glass immediately upon waking to kickstart your metabolism and digestion.";
    case 'gut':
      return "Add more fermented foods (kefir, kimchi, yogurt) and soluble fiber to your diet. Slow down while eating to reduce bloating.";
    case 'stress':
      return "Implement a 5-minute daily breathing exercise (box breathing) or meditation. High cortisol blocks fat loss and disrupts sleep.";
    case 'energy':
      return "Avoid heavy carb crashes at lunch. Switch to a protein and healthy fat-heavy midday meal to keep your energy stable into the evening.";
    case 'heart':
      return "Incorporate 150 minutes of Zone 2 cardio per week (like brisk walking or light cycling) to improve metabolic flexibility and heart health.";
    case 'activity':
      return "Try to break up long periods of sitting. Set a timer to stand or walk for 5 minutes every hour. Aim for 8,000+ steps daily.";
    case 'aging':
      return "Focus on mobility work and bone-loading exercises. Strength training is the single best intervention for healthy, independent aging.";
    case 'women':
      return "Sync your training and nutrition with your cycle. Focus on restorative yoga and iron-rich foods during your period, and higher intensity workouts during ovulation.";
    default:
      return "Focus on small, daily incremental habits rather than massive overnight overhauls.";
  }
}
