import { QuestionDef } from '@/types/assessment';

export const questions: QuestionDef[] = [
  // Section 1 — Training Foundation
  { id: 'strength_training_days', label: 'How many days per week do you perform resistance (weight) training?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'never', label: 'Never', value: 'never' },
      { id: '1_2_days', label: '1–2 days', value: '1_2_days' },
      { id: '3_4_days', label: '3–4 days', value: '3_4_days' },
      { id: '5_6_days', label: '5–6 days', value: '5_6_days' },
      { id: 'daily', label: 'Daily', value: 'daily' }
    ]
  },
  { id: 'training_experience', label: 'How long have you been following your current strength training routine?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'none', label: 'I don\'t strength train', value: 'none' },
      { id: 'less_than_1_month', label: 'Less than 1 month', value: 'less_than_1_month' },
      { id: '1_3_months', label: '1–3 months', value: '1_3_months' },
      { id: '3_12_months', label: '3–12 months', value: '3_12_months' },
      { id: 'more_than_1_year', label: 'More than 1 year', value: 'more_than_1_year' }
    ]
  },
  { id: 'progressive_overload', label: 'Do you gradually increase the weight, repetitions, or difficulty of your workouts?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'never', label: 'Never', value: 'never' },
      { id: 'rarely', label: 'Rarely', value: 'rarely' },
      { id: 'sometimes', label: 'Sometimes', value: 'sometimes' },
      { id: 'often', label: 'Often', value: 'often' },
      { id: 'always', label: 'Always', value: 'always' }
    ]
  },
  { id: 'workout_duration', label: 'How long is your average strength training session?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'less_than_20_minutes', label: 'Less than 20 minutes', value: 'less_than_20_minutes' },
      { id: '20_40_minutes', label: '20–40 minutes', value: '20_40_minutes' },
      { id: '40_60_minutes', label: '40–60 minutes', value: '40_60_minutes' },
      { id: '60_90_minutes', label: '60–90 minutes', value: '60_90_minutes' },
      { id: 'more_than_90_minutes', label: 'More than 90 minutes', value: 'more_than_90_minutes' }
    ]
  },
  { id: 'muscle_group_frequency', label: 'How often do you train each major muscle group every week?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'rarely', label: 'Rarely', value: 'rarely' },
      { id: 'once', label: 'Once', value: 'once' },
      { id: 'twice', label: 'Twice', value: 'twice' },
      { id: 'three_times', label: 'Three times', value: 'three_times' },
      { id: 'more_than_three_times', label: 'More than three times', value: 'more_than_three_times' }
    ]
  },
  { id: 'training_intensity', label: 'Do you usually train until your muscles feel challenged?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'never', label: 'Never', value: 'never' },
      { id: 'rarely', label: 'Rarely', value: 'rarely' },
      { id: 'sometimes', label: 'Sometimes', value: 'sometimes' },
      { id: 'often', label: 'Often', value: 'often' },
      { id: 'almost_every_workout', label: 'Almost every workout', value: 'almost_every_workout' }
    ]
  },
  { id: 'structured_program', label: 'Do you follow a structured workout plan?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'never', label: 'Never', value: 'never' },
      { id: 'rarely', label: 'Rarely', value: 'rarely' },
      { id: 'sometimes', label: 'Sometimes', value: 'sometimes' },
      { id: 'most_of_the_time', label: 'Most of the time', value: 'most_of_the_time' },
      { id: 'always', label: 'Always', value: 'always' }
    ]
  },

  // Section 2 — Muscle Nutrition
  { id: 'post_workout_protein', label: 'How often do you consume a quality protein source after your workout?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'never', label: 'Never', value: 'never' },
      { id: 'rarely', label: 'Rarely', value: 'rarely' },
      { id: 'sometimes', label: 'Sometimes', value: 'sometimes' },
      { id: 'often', label: 'Often', value: 'often' },
      { id: 'always', label: 'Always', value: 'always' }
    ]
  },
  { id: 'daily_protein_intake', label: 'Approximately how much protein do you consume each day?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'very_little', label: 'Very little', value: 'very_little' },
      { id: 'less_than_recommended', label: 'Less than recommended', value: 'less_than_recommended' },
      { id: 'about_recommended', label: 'About recommended', value: 'about_recommended' },
      { id: 'slightly_above_recommended', label: 'Slightly above recommended', value: 'slightly_above_recommended' },
      { id: 'track_daily', label: 'I actively track my protein intake', value: 'track_daily' }
    ]
  },
  { id: 'calorie_surplus', label: 'Are you intentionally eating enough calories to support muscle growth?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'definitely_not', label: 'Definitely not', value: 'definitely_not' },
      { id: 'probably_not', label: 'Probably not', value: 'probably_not' },
      { id: 'not_sure', label: 'Not sure', value: 'not_sure' },
      { id: 'probably_yes', label: 'Probably yes', value: 'probably_yes' },
      { id: 'definitely_yes', label: 'Definitely yes', value: 'definitely_yes' }
    ]
  },
  { id: 'meal_frequency', label: 'How many complete meals do you usually eat each day?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'one', label: 'One', value: 'one' },
      { id: 'two', label: 'Two', value: 'two' },
      { id: 'three', label: 'Three', value: 'three' },
      { id: 'four', label: 'Four', value: 'four' },
      { id: 'five_or_more', label: 'Five or more', value: 'five_or_more' }
    ]
  },
  { id: 'meal_skipping', label: 'How often do you skip meals?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'never', label: 'Never', value: 'never' },
      { id: 'rarely', label: 'Rarely', value: 'rarely' },
      { id: 'sometimes', label: 'Sometimes', value: 'sometimes' },
      { id: 'often', label: 'Often', value: 'often' },
      { id: 'almost_every_day', label: 'Almost every day', value: 'almost_every_day' }
    ]
  },
  { id: 'nutrition_consistency', label: 'How consistent is your daily eating routine?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'very_inconsistent', label: 'Very inconsistent', value: 'very_inconsistent' },
      { id: 'somewhat_inconsistent', label: 'Somewhat inconsistent', value: 'somewhat_inconsistent' },
      { id: 'average', label: 'Average', value: 'average' },
      { id: 'mostly_consistent', label: 'Mostly consistent', value: 'mostly_consistent' },
      { id: 'extremely_consistent', label: 'Extremely consistent', value: 'extremely_consistent' }
    ]
  },

  // Section 3 — Recovery & Performance
  { id: 'muscle_recovery', label: 'How sore are your muscles before your next workout?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'extremely_sore', label: 'Extremely sore', value: 'extremely_sore' },
      { id: 'quite_sore', label: 'Quite sore', value: 'quite_sore' },
      { id: 'slightly_sore', label: 'Slightly sore', value: 'slightly_sore' },
      { id: 'fully_recovered', label: 'Fully recovered', value: 'fully_recovered' },
      { id: 'strong_and_energized', label: 'Strong and energized', value: 'strong_and_energized' }
    ]
  },
  { id: 'rest_days', label: 'How many complete rest days do you take each week?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'none', label: 'None', value: 'none' },
      { id: 'one', label: 'One', value: 'one' },
      { id: 'two', label: 'Two', value: 'two' },
      { id: 'three', label: 'Three', value: 'three' },
      { id: 'four_or_more', label: 'Four or more', value: 'four_or_more' }
    ]
  },
  { id: 'workout_energy', label: 'How would you rate your energy during workouts?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'very_low', label: 'Very low', value: 'very_low' },
      { id: 'low', label: 'Low', value: 'low' },
      { id: 'average', label: 'Average', value: 'average' },
      { id: 'good', label: 'Good', value: 'good' },
      { id: 'excellent', label: 'Excellent', value: 'excellent' }
    ]
  },
  { id: 'strength_progress', label: 'Do you feel stronger compared to three months ago?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'much_weaker', label: 'Much weaker', value: 'much_weaker' },
      { id: 'slightly_weaker', label: 'Slightly weaker', value: 'slightly_weaker' },
      { id: 'no_change', label: 'No change', value: 'no_change' },
      { id: 'slightly_stronger', label: 'Slightly stronger', value: 'slightly_stronger' },
      { id: 'much_stronger', label: 'Much stronger', value: 'much_stronger' }
    ]
  },
  { id: 'post_workout_fatigue', label: 'How often do your workouts leave you feeling exhausted for the rest of the day?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'never', label: 'Never', value: 'never' },
      { id: 'rarely', label: 'Rarely', value: 'rarely' },
      { id: 'sometimes', label: 'Sometimes', value: 'sometimes' },
      { id: 'often', label: 'Often', value: 'often' },
      { id: 'almost_always', label: 'Almost always', value: 'almost_always' }
    ]
  },

  // Section 4 — Consistency & Mindset
  { id: 'biggest_obstacle', label: 'What is your biggest obstacle to building muscle?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'dont_know_how', label: 'Don\'t know how to train', value: 'dont_know_how' },
      { id: 'not_eating_enough', label: 'Not eating enough', value: 'not_eating_enough' },
      { id: 'not_enough_protein', label: 'Not enough protein', value: 'not_enough_protein' },
      { id: 'lack_of_time', label: 'Lack of time', value: 'lack_of_time' },
      { id: 'poor_consistency', label: 'Poor consistency', value: 'poor_consistency' },
      { id: 'poor_recovery', label: 'Poor recovery', value: 'poor_recovery' },
      { id: 'lack_of_motivation', label: 'Lack of motivation', value: 'lack_of_motivation' },
      { id: 'budget', label: 'Budget', value: 'budget' },
      { id: 'other', label: 'Other', value: 'other' }
    ]
  },
  { id: 'progress_tracking', label: 'Do you track your progress (strength, weight, body measurements, or photos)?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'never', label: 'Never', value: 'never' },
      { id: 'rarely', label: 'Rarely', value: 'rarely' },
      { id: 'sometimes', label: 'Sometimes', value: 'sometimes' },
      { id: 'often', label: 'Often', value: 'often' },
      { id: 'every_week', label: 'Every week', value: 'every_week' }
    ]
  },
  { id: 'confidence', label: 'How confident are you that you can successfully build muscle?',
    type: 'scale',
    section: 'Build Muscle & Tone',
    options: [
      { id: '1', label: '1', value: 1 },
      { id: '2', label: '2', value: 2 },
      { id: '3', label: '3', value: 3 },
      { id: '4', label: '4', value: 4 },
      { id: '5', label: '5', value: 5 },
      { id: '6', label: '6', value: 6 },
      { id: '7', label: '7', value: 7 },
      { id: '8', label: '8', value: 8 },
      { id: '9', label: '9', value: 9 },
      { id: '10', label: '10', value: 10 }
    ]
  },
  { id: 'commitment', label: 'How committed are you to following your training and nutrition plan over the next 90 days?',
    type: 'scale',
    section: 'Build Muscle & Tone',
    options: [
      { id: '1', label: '1', value: 1 },
      { id: '2', label: '2', value: 2 },
      { id: '3', label: '3', value: 3 },
      { id: '4', label: '4', value: 4 },
      { id: '5', label: '5', value: 5 },
      { id: '6', label: '6', value: 6 },
      { id: '7', label: '7', value: 7 },
      { id: '8', label: '8', value: 8 },
      { id: '9', label: '9', value: 9 },
      { id: '10', label: '10', value: 10 }
    ]
  },
  { id: 'missed_workouts', label: 'How often do you miss planned workouts?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'never', label: 'Never', value: 'never' },
      { id: 'rarely', label: 'Rarely', value: 'rarely' },
      { id: 'sometimes', label: 'Sometimes', value: 'sometimes' },
      { id: 'often', label: 'Often', value: 'often' },
      { id: 'very_often', label: 'Very often', value: 'very_often' }
    ]
  },
  { id: 'routine_disruption', label: 'When your schedule becomes busy, what usually happens?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'continue_routine', label: 'I continue my routine', value: 'continue_routine' },
      { id: 'reduce_duration', label: 'I reduce workout duration', value: 'reduce_duration' },
      { id: 'skip_workouts', label: 'I skip some workouts', value: 'skip_workouts' },
      { id: 'stop_temporarily', label: 'I stop training temporarily', value: 'stop_temporarily' },
      { id: 'breaks_completely', label: 'My routine completely breaks', value: 'breaks_completely' }
    ]
  },
  { id: 'primary_goal', label: 'Which result is your highest priority?',
    type: 'single_choice',
    section: 'Build Muscle & Tone',
    options: [
      { id: 'build_lean_muscle', label: 'Build lean muscle', value: 'build_lean_muscle' },
      { id: 'increase_strength', label: 'Increase overall strength', value: 'increase_strength' },
      { id: 'improve_muscle_tone', label: 'Improve muscle tone', value: 'improve_muscle_tone' },
      { id: 'improve_athletic_performance', label: 'Improve athletic performance', value: 'improve_athletic_performance' },
      { id: 'body_recomposition', label: 'Body recomposition (gain muscle & reduce fat)', value: 'body_recomposition' }
    ]
  }
];
