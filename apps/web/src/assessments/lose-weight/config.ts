export const config = {
  pillarWeights: {
    'Nutrition': 30,
    'Activity': 25,
    'Metabolic': 20,
    'Recovery': 15,
    'Behaviour': 10
  },
  questionToPillarMap: {
    'portion_control': 'Nutrition',
    'restaurant_food': 'Nutrition',
    'sugary_drinks_fl': 'Nutrition',
    'protein_intake': 'Nutrition',
    'mindless_snacking': 'Nutrition',
    'late_eating_fl': 'Nutrition',
    'weekend_eating': 'Nutrition',
    
    'daily_steps_fl': 'Activity',
    'strength_training': 'Activity',
    'cardio': 'Activity',
    'seated_hours': 'Activity',
    'work_movement': 'Activity',
    'daily_routine': 'Activity',
    
    'sugar_cravings': 'Metabolic',
    'satiety': 'Metabolic',
    'energy_crashes': 'Metabolic',
    'weight_plateau': 'Metabolic',
    'compensatory_eating': 'Metabolic',
    
    'sleep_hours_fl': 'Recovery',
    'stress_level': 'Recovery',
    'wake_refreshed': 'Recovery',
    'daily_energy': 'Recovery',
    
    'emotional_eating_fl': 'Behaviour',
    'biggest_obstacle_fl': 'Behaviour',
    'commitment_fl': 'Behaviour'
  }
};
