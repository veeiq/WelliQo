export const config = {
  pillarWeights: {
    'Activity': 35,
    'Nutrition': 30,
    'Recovery': 20,
    'Behaviour': 15
  },
  questionToPillarMap: {
    // Section 1 - Training Foundation (Activity)
    'strength_training_days': 'Activity',
    'training_experience': 'Activity',
    'progressive_overload': 'Activity',
    'workout_duration': 'Activity',
    'muscle_group_frequency': 'Activity',
    'training_intensity': 'Activity',
    'structured_program': 'Activity',
    
    // Section 2 - Muscle Nutrition (Nutrition)
    'post_workout_protein': 'Nutrition',
    'daily_protein_intake': 'Nutrition',
    'calorie_surplus': 'Nutrition',
    'meal_frequency': 'Nutrition',
    'meal_skipping': 'Nutrition',
    'nutrition_consistency': 'Nutrition',
    
    // Section 3 - Recovery & Performance (Recovery)
    'muscle_recovery': 'Recovery',
    'rest_days': 'Recovery',
    'workout_energy': 'Recovery',
    'strength_progress': 'Recovery',
    'post_workout_fatigue': 'Recovery',
    
    // Section 4 - Consistency & Mindset (Behaviour)
    'biggest_obstacle': 'Behaviour',
    'progress_tracking': 'Behaviour',
    'confidence': 'Behaviour',
    'commitment': 'Behaviour',
    'missed_workouts': 'Behaviour',
    'routine_disruption': 'Behaviour',
    'primary_goal': 'Behaviour'
  }
};
