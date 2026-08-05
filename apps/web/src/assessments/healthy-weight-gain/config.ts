export const config = {
  pillarWeights: {
    'Nutrition': 35,
    'Activity': 25,
    'Recovery': 20,
    'Behaviour': 20
  },
  questionToPillarMap: {
    'hwg_meal_frequency': 'Nutrition',
    'hwg_intentional_fullness': 'Nutrition',
    'hwg_protein_frequency': 'Nutrition',
    'hwg_snack_frequency': 'Nutrition',
    'hwg_liquid_calories': 'Nutrition',
    'hwg_appetite': 'Nutrition',
    'hwg_early_satiety': 'Nutrition',
    
    'hwg_resistance_training': 'Activity',
    'hwg_workout_program': 'Activity',
    'hwg_progressive_overload': 'Activity',
    'hwg_cardio': 'Activity',
    'hwg_daily_activity': 'Activity',
    'hwg_muscle_history': 'Activity',
    
    'hwg_sleep': 'Recovery',
    'hwg_wake_refreshed': 'Recovery',
    'hwg_stress': 'Recovery',
    'hwg_muscle_recovery': 'Recovery',
    'hwg_rest_days': 'Recovery',
    
    'hwg_hard_gainer': 'Behaviour',
    'hwg_previous_attempts': 'Behaviour',
    'hwg_biggest_obstacle': 'Behaviour',
    'hwg_skip_meals': 'Behaviour',
    'hwg_portion_discomfort': 'Behaviour',
    'hwg_confidence': 'Behaviour',
    'hwg_commitment': 'Behaviour'
  }
};
