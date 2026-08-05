import { QuestionDef } from '../../types/assessment';

export const questions: QuestionDef[] = [
  // 🏃 Section 1 — Physical Activity
  {
    id: 'exercise_frequency',
    section: 'physical_activity',
    label: 'On average, how many days per week do you intentionally exercise?',
    type: 'single_choice',
    options: [
      { id: 'never', value: 'never', label: 'Never' },
      { id: '1_2_days', value: '1_2_days', label: '1–2 days' },
      { id: '3_4_days', value: '3_4_days', label: '3–4 days' },
      { id: '5_6_days', value: '5_6_days', label: '5–6 days' },
      { id: 'every_day', value: 'every_day', label: 'Every day' }
    ]
  },
  {
    id: 'exercise_duration',
    section: 'physical_activity',
    label: 'How many minutes do you usually exercise on an active day?',
    type: 'single_choice',
    options: [
      { id: 'less_than_15', value: 'less_than_15', label: 'Less than 15 minutes' },
      { id: '15_30_min', value: '15_30_min', label: '15–30 minutes' },
      { id: '30_45_min', value: '30_45_min', label: '30–45 minutes' },
      { id: '45_60_min', value: '45_60_min', label: '45–60 minutes' },
      { id: 'more_than_60', value: 'more_than_60', label: 'More than 60 minutes' }
    ]
  },
  {
    id: 'exercise_type',
    section: 'physical_activity',
    label: 'What best describes your primary form of exercise?',
    type: 'single_choice',
    options: [
      { id: 'no_exercise', value: 'no_exercise', label: 'I don\'t exercise' },
      { id: 'walking', value: 'walking', label: 'Walking' },
      { id: 'running_cycling', value: 'running_cycling', label: 'Running/Cycling' },
      { id: 'gym_strength', value: 'gym_strength', label: 'Gym/Strength Training' },
      { id: 'mixed_activities', value: 'mixed_activities', label: 'Mixed Activities (Cardio + Strength + Sports)' }
    ]
  },
  {
    id: 'daily_movement',
    section: 'physical_activity',
    label: 'How active are you outside your planned workouts?',
    type: 'single_choice',
    options: [
      { id: 'mostly_sitting', value: 'mostly_sitting', label: 'Mostly sitting' },
      { id: 'light_movement', value: 'light_movement', label: 'Light movement' },
      { id: 'moderately_active', value: 'moderately_active', label: 'Moderately active' },
      { id: 'very_active', value: 'very_active', label: 'Very active' },
      { id: 'extremely_active', value: 'extremely_active', label: 'Extremely active' }
    ]
  },
  {
    id: 'daily_steps',
    section: 'physical_activity',
    label: 'Approximately how many steps do you take each day?',
    type: 'single_choice',
    options: [
      { id: 'less_than_3000', value: 'less_than_3000', label: 'Less than 3,000' },
      { id: '3000_5999', value: '3000_5999', label: '3,000–5,999' },
      { id: '6000_7999', value: '6000_7999', label: '6,000–7,999' },
      { id: '8000_9999', value: '8000_9999', label: '8,000–9,999' },
      { id: '10000_plus', value: '10000_plus', label: '10,000+' }
    ]
  },
  {
    id: 'active_choices',
    section: 'physical_activity',
    label: 'How often do you choose stairs instead of elevators or escalators?',
    type: 'single_choice',
    options: [
      { id: 'never', value: 'never', label: 'Never' },
      { id: 'rarely', value: 'rarely', label: 'Rarely' },
      { id: 'sometimes', value: 'sometimes', label: 'Sometimes' },
      { id: 'often', value: 'often', label: 'Often' },
      { id: 'always', value: 'always', label: 'Always' }
    ]
  },
  {
    id: 'exercise_consistency',
    section: 'physical_activity',
    label: 'During the past month, how consistent has your exercise routine been?',
    type: 'single_choice',
    options: [
      { id: 'very_inconsistent', value: 'very_inconsistent', label: 'Very inconsistent' },
      { id: 'somewhat_inconsistent', value: 'somewhat_inconsistent', label: 'Somewhat inconsistent' },
      { id: 'average', value: 'average', label: 'Average' },
      { id: 'mostly_consistent', value: 'mostly_consistent', label: 'Mostly consistent' },
      { id: 'extremely_consistent', value: 'extremely_consistent', label: 'Extremely consistent' }
    ]
  },

  // ❤️ Section 2 — Cardiovascular Fitness
  {
    id: 'cardio_endurance',
    section: 'cardiovascular_fitness',
    label: 'How would you rate your cardiovascular endurance?',
    type: 'single_choice',
    options: [
      { id: 'very_poor', value: 'very_poor', label: 'Very poor' },
      { id: 'poor', value: 'poor', label: 'Poor' },
      { id: 'average', value: 'average', label: 'Average' },
      { id: 'good', value: 'good', label: 'Good' },
      { id: 'excellent', value: 'excellent', label: 'Excellent' }
    ]
  },
  {
    id: 'breathlessness',
    section: 'cardiovascular_fitness',
    label: 'During moderate exercise, how quickly do you become out of breath?',
    type: 'single_choice',
    options: [
      { id: 'almost_immediately', value: 'almost_immediately', label: 'Almost immediately' },
      { id: 'within_few_minutes', value: 'within_few_minutes', label: 'Within a few minutes' },
      { id: 'after_moderate_effort', value: 'after_moderate_effort', label: 'After moderate effort' },
      { id: 'only_after_intense_effort', value: 'only_after_intense_effort', label: 'Only after intense effort' },
      { id: 'rarely', value: 'rarely', label: 'Rarely' }
    ]
  },
  {
    id: 'cardio_frequency',
    section: 'cardiovascular_fitness',
    label: 'How many days each week do you perform dedicated cardio exercise?',
    type: 'single_choice',
    options: [
      { id: 'none', value: 'none', label: 'None' },
      { id: '1_day', value: '1_day', label: '1 day' },
      { id: '2_days', value: '2_days', label: '2 days' },
      { id: '3_4_days', value: '3_4_days', label: '3–4 days' },
      { id: '5_plus_days', value: '5_plus_days', label: '5 or more days' }
    ]
  },
  {
    id: 'cardio_recovery',
    section: 'cardiovascular_fitness',
    label: 'After exercise, how quickly do you feel recovered?',
    type: 'single_choice',
    options: [
      { id: 'more_than_1_day', value: 'more_than_1_day', label: 'More than 1 day' },
      { id: 'several_hours', value: 'several_hours', label: 'Several hours' },
      { id: 'within_few_hours', value: 'within_few_hours', label: 'Within a few hours' },
      { id: 'within_1_hour', value: 'within_1_hour', label: 'Within 1 hour' },
      { id: 'very_quickly', value: 'very_quickly', label: 'Very quickly' }
    ]
  },
  {
    id: 'walking_capacity',
    section: 'cardiovascular_fitness',
    label: 'Can you comfortably walk continuously for 30 minutes?',
    type: 'single_choice',
    options: [
      { id: 'no', value: 'no', label: 'No' },
      { id: 'with_difficulty', value: 'with_difficulty', label: 'With difficulty' },
      { id: 'yes_comfortably', value: 'yes_comfortably', label: 'Yes, comfortably' },
      { id: 'easily', value: 'easily', label: 'Easily' },
      { id: 'very_easily', value: 'very_easily', label: 'Very easily' }
    ]
  },
  {
    id: 'sports_participation',
    section: 'cardiovascular_fitness',
    label: 'How often do you participate in recreational sports or outdoor activities?',
    type: 'single_choice',
    options: [
      { id: 'never', value: 'never', label: 'Never' },
      { id: 'rarely', value: 'rarely', label: 'Rarely' },
      { id: 'monthly', value: 'monthly', label: 'Monthly' },
      { id: 'weekly', value: 'weekly', label: 'Weekly' },
      { id: 'multiple_times_week', value: 'multiple_times_week', label: 'Multiple times per week' }
    ]
  },

  // 🤸 Section 3 — Mobility & Functional Fitness
  {
    id: 'flexibility',
    section: 'mobility_functional_fitness',
    label: 'How would you rate your flexibility?',
    type: 'single_choice',
    options: [
      { id: 'very_poor', value: 'very_poor', label: 'Very poor' },
      { id: 'poor', value: 'poor', label: 'Poor' },
      { id: 'average', value: 'average', label: 'Average' },
      { id: 'good', value: 'good', label: 'Good' },
      { id: 'excellent', value: 'excellent', label: 'Excellent' }
    ]
  },
  {
    id: 'mobility_training',
    section: 'mobility_functional_fitness',
    label: 'Do you perform stretching or mobility exercises?',
    type: 'single_choice',
    options: [
      { id: 'never', value: 'never', label: 'Never' },
      { id: 'rarely', value: 'rarely', label: 'Rarely' },
      { id: 'sometimes', value: 'sometimes', label: 'Sometimes' },
      { id: 'often', value: 'often', label: 'Often' },
      { id: 'every_workout', value: 'every_workout', label: 'Every workout' }
    ]
  },
  {
    id: 'balance',
    section: 'mobility_functional_fitness',
    label: 'How would you rate your balance and coordination?',
    type: 'single_choice',
    options: [
      { id: 'very_poor', value: 'very_poor', label: 'Very poor' },
      { id: 'poor', value: 'poor', label: 'Poor' },
      { id: 'average', value: 'average', label: 'Average' },
      { id: 'good', value: 'good', label: 'Good' },
      { id: 'excellent', value: 'excellent', label: 'Excellent' }
    ]
  },
  {
    id: 'muscle_stiffness',
    section: 'mobility_functional_fitness',
    label: 'How often do you experience muscle stiffness during daily activities?',
    type: 'single_choice',
    options: [
      { id: 'always', value: 'always', label: 'Always' },
      { id: 'often', value: 'often', label: 'Often' },
      { id: 'sometimes', value: 'sometimes', label: 'Sometimes' },
      { id: 'rarely', value: 'rarely', label: 'Rarely' },
      { id: 'never', value: 'never', label: 'Never' }
    ]
  },
  {
    id: 'physical_energy',
    section: 'mobility_functional_fitness',
    label: 'How physically energetic do you usually feel during the day?',
    type: 'single_choice',
    options: [
      { id: 'very_low', value: 'very_low', label: 'Very low' },
      { id: 'low', value: 'low', label: 'Low' },
      { id: 'moderate', value: 'moderate', label: 'Moderate' },
      { id: 'high', value: 'high', label: 'High' },
      { id: 'excellent', value: 'excellent', label: 'Excellent' }
    ]
  },

  // 🧠 Section 4 — Lifestyle & Motivation
  {
    id: 'fitness_barrier',
    section: 'lifestyle_motivation',
    label: 'What is your biggest obstacle to staying active?',
    type: 'single_choice',
    options: [
      { id: 'lack_of_time', value: 'lack_of_time', label: 'Lack of time' },
      { id: 'low_motivation', value: 'low_motivation', label: 'Low motivation' },
      { id: 'health_issues', value: 'health_issues', label: 'Health issues' },
      { id: 'dont_know_what_to_do', value: 'dont_know_what_to_do', label: 'Don\'t know what to do' },
      { id: 'work_schedule', value: 'work_schedule', label: 'Work schedule' },
      { id: 'family_responsibilities', value: 'family_responsibilities', label: 'Family responsibilities' },
      { id: 'financial_reasons', value: 'financial_reasons', label: 'Financial reasons' },
      { id: 'other', value: 'other', label: 'Other' }
    ]
  },
  {
    id: 'fitness_confidence',
    section: 'lifestyle_motivation',
    label: 'How confident are you that you can maintain an active lifestyle?',
    type: 'scale',
    options: [
      { id: '1', value: '1', label: '1' },
      { id: '2', value: '2', label: '2' },
      { id: '3', value: '3', label: '3' },
      { id: '4', value: '4', label: '4' },
      { id: '5', value: '5', label: '5' },
      { id: '6', value: '6', label: '6' },
      { id: '7', value: '7', label: '7' },
      { id: '8', value: '8', label: '8' },
      { id: '9', value: '9', label: '9' },
      { id: '10', value: '10', label: '10' }
    ]
  },
  {
    id: 'fitness_commitment',
    section: 'lifestyle_motivation',
    label: 'How committed are you to improving your fitness over the next 90 days?',
    type: 'scale',
    options: [
      { id: '1', value: '1', label: '1' },
      { id: '2', value: '2', label: '2' },
      { id: '3', value: '3', label: '3' },
      { id: '4', value: '4', label: '4' },
      { id: '5', value: '5', label: '5' },
      { id: '6', value: '6', label: '6' },
      { id: '7', value: '7', label: '7' },
      { id: '8', value: '8', label: '8' },
      { id: '9', value: '9', label: '9' },
      { id: '10', value: '10', label: '10' }
    ]
  },
  {
    id: 'missed_exercise',
    section: 'lifestyle_motivation',
    label: 'How often do you skip planned exercise sessions?',
    type: 'single_choice',
    options: [
      { id: 'never', value: 'never', label: 'Never' },
      { id: 'rarely', value: 'rarely', label: 'Rarely' },
      { id: 'sometimes', value: 'sometimes', label: 'Sometimes' },
      { id: 'often', value: 'often', label: 'Often' },
      { id: 'almost_always', value: 'almost_always', label: 'Almost always' }
    ]
  },
  {
    id: 'activity_tracking',
    section: 'lifestyle_motivation',
    label: 'Do you track your activity (steps, workouts, smartwatch, or fitness app)?',
    type: 'single_choice',
    options: [
      { id: 'never', value: 'never', label: 'Never' },
      { id: 'rarely', value: 'rarely', label: 'Rarely' },
      { id: 'sometimes', value: 'sometimes', label: 'Sometimes' },
      { id: 'often', value: 'often', label: 'Often' },
      { id: 'every_day', value: 'every_day', label: 'Every day' }
    ]
  },
  {
    id: 'routine_resilience',
    section: 'lifestyle_motivation',
    label: 'When life becomes busy, what usually happens to your exercise routine?',
    type: 'single_choice',
    options: [
      { id: 'continue_as_planned', value: 'continue_as_planned', label: 'I continue as planned' },
      { id: 'reduce_workout_duration', value: 'reduce_workout_duration', label: 'I reduce workout duration' },
      { id: 'skip_a_few_sessions', value: 'skip_a_few_sessions', label: 'I skip a few sessions' },
      { id: 'stop_temporarily', value: 'stop_temporarily', label: 'I stop temporarily' },
      { id: 'completely_stop', value: 'completely_stop', label: 'I completely stop' }
    ]
  },
  {
    id: 'fitness_goal',
    section: 'lifestyle_motivation',
    label: 'What is your primary fitness goal?',
    type: 'single_choice',
    options: [
      { id: 'become_more_active', value: 'become_more_active', label: 'Become more active' },
      { id: 'improve_stamina', value: 'improve_stamina', label: 'Improve stamina' },
      { id: 'improve_cardiovascular_fitness', value: 'improve_cardiovascular_fitness', label: 'Improve cardiovascular fitness' },
      { id: 'improve_overall_fitness', value: 'improve_overall_fitness', label: 'Improve overall fitness' },
      { id: 'maintain_lifelong_health', value: 'maintain_lifelong_health', label: 'Maintain lifelong health' }
    ]
  }
];
