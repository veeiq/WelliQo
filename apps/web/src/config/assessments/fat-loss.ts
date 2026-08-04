import { AssessmentConfig } from '../../types/assessment';

export const fatLossConfig: AssessmentConfig = {
  id: 'lose_weight',
  title: 'Lose Weight & Burn Fat',
  description: 'A deep clinical analysis of physiological and behavioral barriers to fat loss.',

  pillars: [
    { id: 'nutrition', label: 'Nutrition & Calorie Control', icon: '🍽️', weightPercent: 30 },
    { id: 'activity', label: 'Activity & Muscle Preservation', icon: '💪', weightPercent: 25 },
    { id: 'metabolic', label: 'Metabolic Health', icon: '⚙️', weightPercent: 20 },
    { id: 'recovery', label: 'Recovery & Hormonal Balance', icon: '😴', weightPercent: 15 },
    { id: 'behaviour', label: 'Behaviour & Consistency', icon: '🧠', weightPercent: 10 },
  ],

  scoringRules: [
    // Pillar 1: Nutrition & Calorie Control (30%)
    { questionId: 'portion_control', answer: 'most_meals', finding: { id: 'fl_num_1', label: 'Poor Portion Awareness', penalty: 5, recommendationId: 'REC_PORTION_CONTROL', pillarId: 'nutrition' } },
    { questionId: 'portion_control', answer: 'occasionally', finding: { id: 'fl_num_2', label: 'Poor Portion Awareness', penalty: 15, recommendationId: 'REC_PORTION_CONTROL', pillarId: 'nutrition' } },
    { questionId: 'portion_control', answer: 'never', finding: { id: 'fl_num_3', label: 'Poor Portion Awareness', penalty: 25, recommendationId: 'REC_PORTION_CONTROL', pillarId: 'nutrition' } },

    { questionId: 'restaurant_food', answer: 'once_week', finding: { id: 'fl_num_4', label: 'High Outside Food Intake', penalty: 10, recommendationId: 'REC_RESTAURANT_CONTROL', pillarId: 'nutrition' } },
    { questionId: 'restaurant_food', answer: '2_3_week', finding: { id: 'fl_num_5', label: 'High Outside Food Intake', penalty: 20, recommendationId: 'REC_RESTAURANT_CONTROL', pillarId: 'nutrition' } },
    { questionId: 'restaurant_food', answer: '4_plus', finding: { id: 'fl_num_6', label: 'High Outside Food Intake', penalty: 30, recommendationId: 'REC_RESTAURANT_CONTROL', pillarId: 'nutrition' } },

    { questionId: 'sugary_drinks_fl', answer: '1_2', finding: { id: 'fl_num_7', label: 'Hidden Liquid Calories', penalty: 10, recommendationId: 'REC_LIQUID_CALORIES', pillarId: 'nutrition' } },
    { questionId: 'sugary_drinks_fl', answer: '3_6', finding: { id: 'fl_num_8', label: 'Hidden Liquid Calories', penalty: 20, recommendationId: 'REC_LIQUID_CALORIES', pillarId: 'nutrition' } },
    { questionId: 'sugary_drinks_fl', answer: 'daily', finding: { id: 'fl_num_9', label: 'Hidden Liquid Calories', penalty: 30, recommendationId: 'REC_LIQUID_CALORIES', pillarId: 'nutrition' } },

    { questionId: 'protein_intake', answer: 'most_meals', finding: { id: 'fl_num_10', label: 'Low Protein Intake', penalty: 5, recommendationId: 'REC_PROTEIN', pillarId: 'nutrition' } },
    { questionId: 'protein_intake', answer: 'sometimes', finding: { id: 'fl_num_11', label: 'Low Protein Intake', penalty: 15, recommendationId: 'REC_PROTEIN', pillarId: 'nutrition' } },
    { questionId: 'protein_intake', answer: 'rarely', finding: { id: 'fl_num_12', label: 'Low Protein Intake', penalty: 30, recommendationId: 'REC_PROTEIN', pillarId: 'nutrition' } },

    { questionId: 'mindless_snacking', answer: 'occasionally', finding: { id: 'fl_num_13', label: 'Mindless Snacking', penalty: 10, recommendationId: 'REC_SNACK_CONTROL', pillarId: 'nutrition' } },
    { questionId: 'mindless_snacking', answer: 'frequently', finding: { id: 'fl_num_14', label: 'Mindless Snacking', penalty: 20, recommendationId: 'REC_SNACK_CONTROL', pillarId: 'nutrition' } },
    { questionId: 'mindless_snacking', answer: 'daily', finding: { id: 'fl_num_15', label: 'Mindless Snacking', penalty: 30, recommendationId: 'REC_SNACK_CONTROL', pillarId: 'nutrition' } },

    { questionId: 'late_eating_fl', answer: 'occasionally', finding: { id: 'fl_num_16', label: 'Late Night Eating', penalty: 10, recommendationId: 'REC_MEAL_TIMING', pillarId: 'nutrition' } },
    { questionId: 'late_eating_fl', answer: 'most_days', finding: { id: 'fl_num_17', label: 'Late Night Eating', penalty: 20, recommendationId: 'REC_MEAL_TIMING', pillarId: 'nutrition' } },
    { questionId: 'late_eating_fl', answer: 'every_day', finding: { id: 'fl_num_18', label: 'Late Night Eating', penalty: 25, recommendationId: 'REC_MEAL_TIMING', pillarId: 'nutrition' } },

    { questionId: 'weekend_eating', answer: 'worse', finding: { id: 'fl_num_19', label: 'Weekend Calorie Surplus', penalty: 10, recommendationId: 'REC_WEEKEND_CONTROL', pillarId: 'nutrition' } },
    { questionId: 'weekend_eating', answer: 'much_worse', finding: { id: 'fl_num_20', label: 'Weekend Calorie Surplus', penalty: 20, recommendationId: 'REC_WEEKEND_CONTROL', pillarId: 'nutrition' } },
    { questionId: 'weekend_eating', answer: 'uncontrolled', finding: { id: 'fl_num_21', label: 'Weekend Calorie Surplus', penalty: 30, recommendationId: 'REC_WEEKEND_CONTROL', pillarId: 'nutrition' } },

    // Pillar 2: Activity & Muscle Preservation (25%)
    { questionId: 'daily_steps_fl', answer: '7k_10k', finding: { id: 'fl_act_1', label: 'Low NEAT', penalty: 10, recommendationId: 'REC_STEPS', pillarId: 'activity' } },
    { questionId: 'daily_steps_fl', answer: '4k_7k', finding: { id: 'fl_act_2', label: 'Low NEAT', penalty: 20, recommendationId: 'REC_STEPS', pillarId: 'activity' } },
    { questionId: 'daily_steps_fl', answer: 'below_4k', finding: { id: 'fl_act_3', label: 'Low NEAT', penalty: 30, recommendationId: 'REC_STEPS', pillarId: 'activity' } },

    { questionId: 'strength_training', answer: '2_3', finding: { id: 'fl_act_4', label: 'High Muscle Loss Risk', penalty: 10, recommendationId: 'REC_STRENGTH', pillarId: 'activity' } },
    { questionId: 'strength_training', answer: '1', finding: { id: 'fl_act_5', label: 'High Muscle Loss Risk', penalty: 20, recommendationId: 'REC_STRENGTH', pillarId: 'activity' } },
    { questionId: 'strength_training', answer: 'none', finding: { id: 'fl_act_6', label: 'High Muscle Loss Risk', penalty: 35, recommendationId: 'REC_STRENGTH', pillarId: 'activity' } },

    { questionId: 'cardio', answer: '3_4', finding: { id: 'fl_act_7', label: 'Low Cardiovascular Activity', penalty: 5, recommendationId: 'REC_CARDIO', pillarId: 'activity' } },
    { questionId: 'cardio', answer: '1_2', finding: { id: 'fl_act_8', label: 'Low Cardiovascular Activity', penalty: 15, recommendationId: 'REC_CARDIO', pillarId: 'activity' } },
    { questionId: 'cardio', answer: 'none', finding: { id: 'fl_act_9', label: 'Low Cardiovascular Activity', penalty: 20, recommendationId: 'REC_CARDIO', pillarId: 'activity' } },

    { questionId: 'seated_hours', answer: '4_6', finding: { id: 'fl_act_10', label: 'Sedentary Lifestyle', penalty: 10, recommendationId: 'REC_MOVE_MORE', pillarId: 'activity' } },
    { questionId: 'seated_hours', answer: '7_9', finding: { id: 'fl_act_11', label: 'Sedentary Lifestyle', penalty: 20, recommendationId: 'REC_MOVE_MORE', pillarId: 'activity' } },
    { questionId: 'seated_hours', answer: '10_plus', finding: { id: 'fl_act_12', label: 'Sedentary Lifestyle', penalty: 30, recommendationId: 'REC_MOVE_MORE', pillarId: 'activity' } },

    { questionId: 'work_movement', answer: 'often', finding: { id: 'fl_act_13', label: 'Prolonged Sitting', penalty: 5, recommendationId: 'REC_ACTIVITY_BREAKS', pillarId: 'activity' } },
    { questionId: 'work_movement', answer: 'sometimes', finding: { id: 'fl_act_14', label: 'Prolonged Sitting', penalty: 15, recommendationId: 'REC_ACTIVITY_BREAKS', pillarId: 'activity' } },
    { questionId: 'work_movement', answer: 'never', finding: { id: 'fl_act_15', label: 'Prolonged Sitting', penalty: 20, recommendationId: 'REC_ACTIVITY_BREAKS', pillarId: 'activity' } },

    { questionId: 'daily_routine', answer: 'moderately_active', finding: { id: 'fl_act_16', label: 'Low Daily Energy Expenditure', penalty: 10, recommendationId: 'REC_ACTIVE_LIFESTYLE', pillarId: 'activity' } },
    { questionId: 'daily_routine', answer: 'mostly_sitting', finding: { id: 'fl_act_17', label: 'Low Daily Energy Expenditure', penalty: 20, recommendationId: 'REC_ACTIVE_LIFESTYLE', pillarId: 'activity' } },
    { questionId: 'daily_routine', answer: 'inactive', finding: { id: 'fl_act_18', label: 'Low Daily Energy Expenditure', penalty: 30, recommendationId: 'REC_ACTIVE_LIFESTYLE', pillarId: 'activity' } },

    // Pillar 3: Metabolic Health (20%)
    { questionId: 'sugar_cravings', answer: 'occasionally', finding: { id: 'fl_met_1', label: 'Sugar Dependency', penalty: 10, recommendationId: 'REC_CRAVINGS', pillarId: 'metabolic' } },
    { questionId: 'sugar_cravings', answer: 'frequently', finding: { id: 'fl_met_2', label: 'Sugar Dependency', penalty: 20, recommendationId: 'REC_CRAVINGS', pillarId: 'metabolic' } },
    { questionId: 'sugar_cravings', answer: 'daily', finding: { id: 'fl_met_3', label: 'Sugar Dependency', penalty: 30, recommendationId: 'REC_CRAVINGS', pillarId: 'metabolic' } },

    { questionId: 'satiety', answer: '3_4', finding: { id: 'fl_met_4', label: 'Poor Satiety', penalty: 5, recommendationId: 'REC_SATIETY', pillarId: 'metabolic' } },
    { questionId: 'satiety', answer: '2_3', finding: { id: 'fl_met_5', label: 'Poor Satiety', penalty: 15, recommendationId: 'REC_SATIETY', pillarId: 'metabolic' } },
    { questionId: 'satiety', answer: 'less_2', finding: { id: 'fl_met_6', label: 'Poor Satiety', penalty: 25, recommendationId: 'REC_SATIETY', pillarId: 'metabolic' } },

    { questionId: 'energy_crashes', answer: 'occasionally', finding: { id: 'fl_met_7', label: 'Blood Sugar Instability', penalty: 10, recommendationId: 'REC_BLOOD_SUGAR', pillarId: 'metabolic' } },
    { questionId: 'energy_crashes', answer: 'frequently', finding: { id: 'fl_met_8', label: 'Blood Sugar Instability', penalty: 20, recommendationId: 'REC_BLOOD_SUGAR', pillarId: 'metabolic' } },
    { questionId: 'energy_crashes', answer: 'daily', finding: { id: 'fl_met_9', label: 'Blood Sugar Instability', penalty: 25, recommendationId: 'REC_BLOOD_SUGAR', pillarId: 'metabolic' } },

    { questionId: 'weight_plateau', answer: 'sometimes', finding: { id: 'fl_met_10', label: 'Weight Loss Plateau', penalty: 10, recommendationId: 'REC_PLATEAU', pillarId: 'metabolic' } },
    { questionId: 'weight_plateau', answer: 'yes', finding: { id: 'fl_met_11', label: 'Weight Loss Plateau', penalty: 20, recommendationId: 'REC_PLATEAU', pillarId: 'metabolic' } },
    { questionId: 'weight_plateau', answer: 'unsure', finding: { id: 'fl_met_12', label: 'Weight Loss Plateau', penalty: 10, recommendationId: 'REC_PLATEAU', pillarId: 'metabolic' } },

    { questionId: 'compensatory_eating', answer: 'occasionally', finding: { id: 'fl_met_13', label: 'Compensatory Overeating', penalty: 10, recommendationId: 'REC_MEAL_REGULARITY', pillarId: 'metabolic' } },
    { questionId: 'compensatory_eating', answer: 'frequently', finding: { id: 'fl_met_14', label: 'Compensatory Overeating', penalty: 20, recommendationId: 'REC_MEAL_REGULARITY', pillarId: 'metabolic' } },
    { questionId: 'compensatory_eating', answer: 'daily', finding: { id: 'fl_met_15', label: 'Compensatory Overeating', penalty: 30, recommendationId: 'REC_MEAL_REGULARITY', pillarId: 'metabolic' } },

    // Pillar 4: Recovery & Hormonal Balance (15%)
    { questionId: 'sleep_hours_fl', answer: '6_7', finding: { id: 'fl_rec_1', label: 'Sleep Deficit', penalty: 10, recommendationId: 'REC_SLEEP', pillarId: 'recovery' } },
    { questionId: 'sleep_hours_fl', answer: '5_6', finding: { id: 'fl_rec_2', label: 'Sleep Deficit', penalty: 20, recommendationId: 'REC_SLEEP', pillarId: 'recovery' } },
    { questionId: 'sleep_hours_fl', answer: 'less_5', finding: { id: 'fl_rec_3', label: 'Sleep Deficit', penalty: 30, recommendationId: 'REC_SLEEP', pillarId: 'recovery' } },

    { questionId: 'stress_level', answer: 'moderate', finding: { id: 'fl_rec_4', label: 'Chronic Stress', penalty: 10, recommendationId: 'REC_STRESS', pillarId: 'recovery' } },
    { questionId: 'stress_level', answer: 'high', finding: { id: 'fl_rec_5', label: 'Chronic Stress', penalty: 20, recommendationId: 'REC_STRESS', pillarId: 'recovery' } },
    { questionId: 'stress_level', answer: 'extremely_high', finding: { id: 'fl_rec_6', label: 'Chronic Stress', penalty: 30, recommendationId: 'REC_STRESS', pillarId: 'recovery' } },

    { questionId: 'wake_refreshed', answer: 'usually', finding: { id: 'fl_rec_7', label: 'Poor Recovery', penalty: 5, recommendationId: 'REC_RECOVERY', pillarId: 'recovery' } },
    { questionId: 'wake_refreshed', answer: 'rarely', finding: { id: 'fl_rec_8', label: 'Poor Recovery', penalty: 15, recommendationId: 'REC_RECOVERY', pillarId: 'recovery' } },
    { questionId: 'wake_refreshed', answer: 'never', finding: { id: 'fl_rec_9', label: 'Poor Recovery', penalty: 20, recommendationId: 'REC_RECOVERY', pillarId: 'recovery' } },

    { questionId: 'daily_energy', answer: 'good', finding: { id: 'fl_rec_10', label: 'Low Energy Availability', penalty: 5, recommendationId: 'REC_ENERGY', pillarId: 'recovery' } },
    { questionId: 'daily_energy', answer: 'average', finding: { id: 'fl_rec_11', label: 'Low Energy Availability', penalty: 15, recommendationId: 'REC_ENERGY', pillarId: 'recovery' } },
    { questionId: 'daily_energy', answer: 'poor', finding: { id: 'fl_rec_12', label: 'Low Energy Availability', penalty: 20, recommendationId: 'REC_ENERGY', pillarId: 'recovery' } },

    // Pillar 5: Behaviour & Consistency (10%)
    { questionId: 'emotional_eating_fl', answer: 'occasionally', finding: { id: 'fl_beh_1', label: 'Emotional Eating', penalty: 10, recommendationId: 'REC_EMOTIONAL_EATING', pillarId: 'behaviour' } },
    { questionId: 'emotional_eating_fl', answer: 'frequently', finding: { id: 'fl_beh_2', label: 'Emotional Eating', penalty: 20, recommendationId: 'REC_EMOTIONAL_EATING', pillarId: 'behaviour' } },
    { questionId: 'emotional_eating_fl', answer: 'always', finding: { id: 'fl_beh_3', label: 'Emotional Eating', penalty: 30, recommendationId: 'REC_EMOTIONAL_EATING', pillarId: 'behaviour' } },

    // Q24 specific routing mapping
    { questionId: 'biggest_obstacle_fl', answer: 'consistency', finding: { id: 'fl_beh_4', label: 'Lack of Consistency', penalty: 0, recommendationId: 'REC_MAINTAIN', pillarId: 'behaviour' } },
    { questionId: 'biggest_obstacle_fl', answer: 'hunger', finding: { id: 'fl_beh_5', label: 'Hunger Struggles', penalty: 0, recommendationId: 'REC_SATIETY', pillarId: 'behaviour' } },
    { questionId: 'biggest_obstacle_fl', answer: 'schedule', finding: { id: 'fl_beh_6', label: 'Schedule Challenges', penalty: 0, recommendationId: 'REC_MEAL_REGULARITY', pillarId: 'behaviour' } },
    { questionId: 'biggest_obstacle_fl', answer: 'motivation', finding: { id: 'fl_beh_7', label: 'Motivation Low', penalty: 0, recommendationId: 'REC_EMOTIONAL_EATING', pillarId: 'behaviour' } },
    
    // Q25 scale penalties
    { questionId: 'commitment_fl', answer: ['1','2','3', 1, 2, 3] as unknown as string[], finding: { id: 'fl_beh_8', label: 'Low Fat Loss Readiness', penalty: 30, recommendationId: 'REC_MAINTAIN', pillarId: 'behaviour' } },
    { questionId: 'commitment_fl', answer: ['4','5','6', 4, 5, 6] as unknown as string[], finding: { id: 'fl_beh_9', label: 'Moderate Fat Loss Readiness', penalty: 15, recommendationId: 'REC_MAINTAIN', pillarId: 'behaviour' } },
  ],

  metricCards: [
    {
      id: 'fat_loss_readiness',
      title: 'Fat Loss Readiness Score',
      icon: '🔥',
      calculate: (data, metrics) => {
        const score = metrics.overallScore || 100;
        const readiness = score > 75 ? 'High' : score > 50 ? 'Moderate' : 'Low';
        const status = score > 75 ? 'good' : score > 50 ? 'warning' : 'danger';
        return {
          current: `${score}/100`,
          ideal: '80+',
          difference: score >= 80 ? 'Ready' : 'Needs work',
          meaning: readiness,
          status
        };
      }
    },
    {
      id: 'daily_calorie_target',
      title: 'Daily Calorie Target',
      icon: '⚖️',
      calculate: (data, metrics) => {
        const deficit = (metrics.bmr || 2000) * 1.2 - 500; // rough TDEE calculation fallback
        return {
          current: `${Math.round(deficit + 500)} kcal`,
          ideal: `${Math.round(deficit)} kcal`,
          difference: '-500 kcal',
          meaning: 'Caloric Deficit',
          status: 'good'
        };
      }
    },
    {
      id: 'protein_goal',
      title: 'Daily Protein Goal',
      icon: '🥩',
      calculate: (data, metrics) => {
        const weight = data.weight || 70;
        const protein = Math.round(weight * 2.0);
        return {
          current: 'Current',
          ideal: `${protein}g`,
          difference: `2.0g/kg`,
          meaning: 'Muscle Preservation',
          status: 'good'
        };
      }
    },
    {
      id: 'step_goal',
      title: 'Daily Step Goal',
      icon: '🚶',
      calculate: (data) => {
        return {
          current: 'Current',
          ideal: '10,000+',
          difference: 'NEAT boost',
          meaning: 'Fat oxidation',
          status: 'good'
        };
      }
    },
    {
      id: 'muscle_preservation',
      title: 'Muscle Preservation',
      icon: '💪',
      calculate: (data, metrics) => {
        const hasRisk = metrics.scoreExplanation?.some((f: any) => f.label === 'High Muscle Loss Risk') || false;
        return {
          current: hasRisk ? 'High Risk' : 'Protected',
          ideal: 'Protected',
          difference: hasRisk ? 'Needs weights' : 'Optimal',
          meaning: hasRisk ? 'Add resistance training' : 'Good routine',
          status: hasRisk ? 'danger' : 'good'
        };
      }
    },
    {
      id: 'water_intake',
      title: 'Water Intake Target',
      icon: '💧',
      calculate: (data, metrics) => {
        const weight = data.weight || 70;
        const target = Math.round(weight * 35 / 1000);
        return {
          current: 'Current',
          ideal: `${target}L`,
          difference: '35ml/kg',
          meaning: 'Hydration',
          status: 'good'
        };
      }
    },
    {
      id: 'recovery_score',
      title: 'Recovery Target',
      icon: '😴',
      calculate: (data, metrics) => {
        const hasSleepDeficit = metrics.scoreExplanation?.some((f: any) => f.label === 'Sleep Deficit' || f.label === 'Chronic Stress') || false;
        return {
          current: hasSleepDeficit ? 'Compromised' : 'Optimal',
          ideal: 'Optimal',
          difference: hasSleepDeficit ? 'Needs improvement' : 'Perfect',
          meaning: 'Hormonal Balance',
          status: hasSleepDeficit ? 'warning' : 'good'
        };
      }
    },
    {
      id: 'fat_loss_potential',
      title: 'Est. Weekly Fat Loss',
      icon: '📅',
      calculate: (data) => {
        return {
          current: '0 kg',
          ideal: '0.5 kg',
          difference: 'Optimal rate',
          meaning: 'Healthy deficit',
          status: 'good'
        };
      }
    }
  ],

  nutritionLogic: {
    calculate: (data, weightDirection) => {
      return {
        protein: '35%',
        carbs: '35%',
        fats: '30%',
        naturalSources: ['Chicken breast', 'White fish', 'Eggs', 'Greek yogurt', 'Cruciferous vegetables'],
        supplements: ['Whey Protein Isolate', 'Fish Oil', 'Vitamin D3']
      };
    }
  }
};
