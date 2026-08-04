import { AssessmentConfig } from '../../types/assessment';

export const WeightManagementConfig: AssessmentConfig = {
  id: 'weight',
  title: 'Weight Management',
  pillars: [
    { id: 'meal_consistency', label: 'Meal Consistency', icon: '🍽️', weightPercent: 15 },
    { id: 'food_quality', label: 'Food Quality', icon: '🥗', weightPercent: 40 },
    { id: 'cravings_control', label: 'Cravings Control', icon: '🍪', weightPercent: 15 },
    { id: 'activity', label: 'Physical Activity', icon: '🏃', weightPercent: 20 },
    { id: 'sleep', label: 'Sleep & Recovery', icon: '😴', weightPercent: 5 },
    { id: 'motivation', label: 'Motivation', icon: '🔥', weightPercent: 5 },
  ],
  scoringRules: [
    // Meal Consistency
    { questionId: 'skip_breakfast', answer: ['daily', 'often'], finding: { id: 'F_SKIP_BFAST', pillarId: 'meal_consistency', label: 'Skipping breakfast', penalty: 25, recommendationId: 'REC_MEAL_TIMING' } },
    { questionId: 'meals_per_day', answer: ['1', '2'], finding: { id: 'F_FEW_MEALS', pillarId: 'meal_consistency', label: 'Irregular meals', penalty: 20, recommendationId: 'REC_MEAL_TIMING' } },
    
    // Food Quality
    { questionId: 'eating_out', answer: 'daily', finding: { id: 'F_EAT_OUT_DAILY', pillarId: 'food_quality', label: 'Eating out daily', penalty: 40, recommendationId: 'REC_REDUCE_SUGAR' } }, // Re-using general food rec for now
    { questionId: 'eating_out', answer: '4_plus', finding: { id: 'F_EAT_OUT_OFTEN', pillarId: 'food_quality', label: 'Frequent restaurant food', penalty: 30, recommendationId: 'REC_REDUCE_SUGAR' } },
    { questionId: 'eating_out', answer: '2_3', finding: { id: 'F_EAT_OUT_SOMETIMES', pillarId: 'food_quality', label: 'Eating out sometimes', penalty: 15, recommendationId: 'REC_REDUCE_SUGAR' } },
    { questionId: 'sugary_drinks', answer: ['multiple', 'daily'], finding: { id: 'F_SUGARY_DRINKS', pillarId: 'food_quality', label: 'Sugary drinks', penalty: 30, recommendationId: 'REC_REDUCE_SUGAR' } },
    
    // Cravings
    { questionId: 'cravings_freq', answer: 'daily', finding: { id: 'F_CRAVINGS_DAILY', pillarId: 'cravings_control', label: 'Daily cravings', penalty: 40, recommendationId: 'REC_CRAVINGS' } },
    { questionId: 'cravings_freq', answer: 'often', finding: { id: 'F_CRAVINGS_OFTEN', pillarId: 'cravings_control', label: 'Frequent cravings', penalty: 20, recommendationId: 'REC_CRAVINGS' } },
    { questionId: 'emotional_eating', answer: 'always', finding: { id: 'F_EMOTIONAL_ALWAYS', pillarId: 'cravings_control', label: 'Emotional eating', penalty: 30, recommendationId: 'REC_CRAVINGS' } },
    { questionId: 'emotional_eating', answer: 'often', finding: { id: 'F_EMOTIONAL_OFTEN', pillarId: 'cravings_control', label: 'Emotional eating', penalty: 15, recommendationId: 'REC_CRAVINGS' } },

    // Activity
    // Note: sedentary/light penalty is calculated from baseline data in the engine, but we can also add a rule if needed. For now, the engine handles baseline activity penalty, but wait, the engine shouldn't hardcode weight logic. 
    // Let's add activityLevel as a scoring rule even though it's a baseline question!
    { questionId: 'activityLevel', answer: 'sedentary', finding: { id: 'F_SEDENTARY', pillarId: 'activity', label: 'Sedentary lifestyle', penalty: 40, recommendationId: 'REC_ACTIVITY' } },
    { questionId: 'activityLevel', answer: 'light', finding: { id: 'F_LIGHT_ACT', pillarId: 'activity', label: 'Low physical activity', penalty: 20, recommendationId: 'REC_ACTIVITY' } },
    { questionId: 'daily_steps', answer: 'less_3k', finding: { id: 'F_LOW_STEPS', pillarId: 'activity', label: 'Under 3,000 steps', penalty: 20, recommendationId: 'REC_ACTIVITY' } },
    { questionId: 'sitting_hours', answer: 'more_10', finding: { id: 'F_HIGH_SIT', pillarId: 'activity', label: 'Prolonged sitting', penalty: 20, recommendationId: 'REC_ACTIVITY' } },

    // Sleep
    { questionId: 'sleep_hours', answer: 'less_5', finding: { id: 'F_LOW_SLEEP_SEVERE', pillarId: 'sleep', label: 'Under 5 hours sleep', penalty: 40, recommendationId: 'REC_SLEEP' } },
    { questionId: 'sleep_hours', answer: '5_6', finding: { id: 'F_LOW_SLEEP', pillarId: 'sleep', label: 'Inadequate sleep', penalty: 20, recommendationId: 'REC_SLEEP' } },
  ],
  metricCards: [
    {
      id: 'current_weight',
      title: 'Current Weight',
      icon: '⚖️',
      calculate: (data, metrics) => ({
        current: `${data.weight || 70} kg`,
        ideal: `${Math.round(metrics.minIdealKg)} - ${Math.round(metrics.maxIdealKg)} kg`,
        difference: metrics.weightDifferenceKg > 0 ? `${metrics.weightDirection === 'lose' ? '+' : '-'}${Math.round(metrics.weightDifferenceKg)} kg` : '0 kg',
        meaning: metrics.weightDifferenceKg === 0 ? 'Within healthy range' : (metrics.weightDirection === 'lose' ? 'Above healthy range' : 'Below healthy range'),
        status: metrics.weightDifferenceKg === 0 ? 'good' : 'warning',
      })
    },
    {
      id: 'bmi',
      title: 'BMI',
      icon: '📊',
      calculate: (data, metrics) => {
        const IDEAL_BMI_TARGET = 21.7; // Midpoint of 18.5 - 24.9
        const diff = (metrics.bmi - IDEAL_BMI_TARGET).toFixed(1);
        
        let meaning = 'Healthy Weight';
        let status: 'good' | 'warning' | 'danger' | 'neutral' = 'good';

        if (metrics.bmi < 18.5) {
          meaning = 'Underweight';
          status = 'warning';
        } else if (metrics.bmi >= 25 && metrics.bmi < 30) {
          meaning = 'Overweight';
          status = 'warning';
        } else if (metrics.bmi >= 30) {
          meaning = 'Obesity';
          status = 'danger';
        }

        return {
          current: metrics.bmi.toFixed(1),
          ideal: '18.5 - 24.9',
          difference: Number(diff) > 0 ? `+${diff}` : diff,
          meaning,
          status,
        };
      }
    },
    {
      id: 'body_fat',
      title: 'Body Fat (Est.)',
      icon: '🔥',
      calculate: (data, metrics) => {
        const isMale = data.gender === 'male';
        const ideal = isMale ? '15 - 20%' : '20 - 25%';
        const current = metrics.fatPercentage.toFixed(1);
        return {
          current: `${current}%`,
          ideal: ideal,
          difference: '-',
          meaning: 'Estimate based on age/BMI',
          status: 'neutral',
        };
      }
    },
    {
      id: 'daily_calories',
      title: 'Daily Calories',
      icon: '⚡',
      calculate: (data, metrics) => {
        let activityMultiplier = 1.2;
        const actLvl = data.activityLevel || 'sedentary';
        if (actLvl === 'light') activityMultiplier = 1.375;
        if (actLvl === 'moderate') activityMultiplier = 1.55;
        if (actLvl === 'active') activityMultiplier = 1.725;
        
        const tdee = Math.round(metrics.bmr * activityMultiplier);
        let calorieTarget = tdee;
        if (metrics.weightDirection === 'lose') calorieTarget -= 500;
        if (metrics.weightDirection === 'gain') calorieTarget += 500;

        return {
          current: `${tdee} kcal (Maint.)`,
          ideal: `${calorieTarget} kcal`,
          difference: `${calorieTarget - tdee} kcal`,
          meaning: metrics.weightDirection === 'maintain' ? 'Maintenance calories' : (metrics.weightDirection === 'lose' ? 'Caloric deficit for fat loss' : 'Caloric surplus for gain'),
          status: 'good',
        };
      }
    },
    {
      id: 'protein_goal',
      title: 'Protein Goal',
      icon: '🍗',
      calculate: (data, metrics) => {
        const weight = data.weight || 70;
        const target = Math.round(weight * (metrics.weightDirection === 'lose' ? 2.0 : 1.6));
        return {
          current: '-',
          ideal: `${target}g`,
          difference: '-',
          meaning: 'Daily protein target',
          status: 'neutral',
        };
      }
    },
    {
      id: 'water_intake',
      title: 'Water Intake',
      icon: '💧',
      calculate: (data, metrics) => {
        const weight = data.weight || 70;
        const liters = (weight * 0.035).toFixed(1);
        return {
          current: '-',
          ideal: `${liters} L`,
          difference: '-',
          meaning: 'Minimum daily hydration',
          status: 'neutral',
        };
      }
    }
  ],
  nutritionLogic: {
    calculate: (data, weightDirection) => {
      let naturalSources = ['Lean chicken/fish', 'Eggs', 'Lentils & Beans', 'Greek Yogurt', 'Leafy Greens'];
      let supplements = ['Whey Protein', 'Omega-3 Fish Oil', 'Multivitamin Complex'];

      const pref = data.food_preference;
      if (pref === 'vegetarian') {
        naturalSources = ['Lentils & Beans', 'Paneer/Tofu', 'Greek Yogurt', 'Almonds & Walnuts', 'Leafy Greens'];
        supplements = ['Plant-Based Protein Powder', 'Algae-based Omega-3', 'Multivitamin Complex'];
      } else if (pref === 'eggetarian') {
        naturalSources = ['Eggs', 'Lentils & Beans', 'Greek Yogurt', 'Almonds & Walnuts', 'Leafy Greens'];
        supplements = ['Whey Protein', 'Omega-3 Fish Oil', 'Multivitamin Complex'];
      } else if (pref === 'vegan') {
        naturalSources = ['Lentils & Beans', 'Tofu & Tempeh', 'Quinoa', 'Almonds & Walnuts', 'Leafy Greens'];
        supplements = ['Plant-Based Protein Powder', 'Algae-based Omega-3', 'Vitamin B12 & D3'];
      } else if (pref === 'jain') {
        naturalSources = ['Moong Dal & Beans', 'Paneer', 'Milk/Yogurt', 'Almonds & Walnuts', 'Plantains'];
        supplements = ['Plant-Based Protein Powder', 'Algae-based Omega-3', 'Multivitamin Complex'];
      }

      return {
        protein: weightDirection === 'lose' ? 'High (1.6 - 2.2g per kg)' : 'Moderate (1.2 - 1.6g per kg)',
        carbs: weightDirection === 'lose' ? 'Moderate/Low (Focus on fiber)' : 'Moderate/High (Fuel for growth)',
        fats: 'Moderate (Healthy fats for hormones)',
        naturalSources,
        supplements
      };
    }
  }
};
