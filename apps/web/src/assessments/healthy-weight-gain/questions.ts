import { QuestionDef } from '@/types/assessment';

export const questions: QuestionDef[] = [
  {
    id: 'hwg_meal_frequency',
    section: 'Nutrition & Calorie Surplus',
    label: 'How many complete meals do you usually eat each day?',
    type: 'single_choice',
    options: [
      { id: '1', label: '1', value: '1' },
      { id: '2', label: '2', value: '2' },
      { id: '3', label: '3', value: '3' },
      { id: '4', label: '4', value: '4' },
      { id: '5_plus', label: '5+', value: '5_plus' }
    ],
    required: true
  },
  {
    id: 'hwg_intentional_fullness',
    section: 'Nutrition & Calorie Surplus',
    label: 'How often do you intentionally eat until comfortably full?',
    type: 'single_choice',
    options: [
      { id: 'never', label: '🚫 Never', value: 'never' },
      { id: 'rarely', label: '📉 Rarely', value: 'rarely' },
      { id: 'sometimes', label: '➖ Sometimes', value: 'sometimes' },
      { id: 'often', label: '📈 Often', value: 'often' },
      { id: 'almost_every_meal', label: '💯 Almost Every Meal', value: 'almost_every_meal' }
    ],
    required: true
  },
  {
    id: 'hwg_protein_frequency',
    section: 'Nutrition & Calorie Surplus',
    label: 'How often does each meal contain a good source of protein? (Examples: Eggs, Paneer, Chicken, Fish, Soy, Dal, Protein Shake)',
    type: 'single_choice',
    options: [
      { id: 'rarely', label: '🚫 Rarely', value: 'rarely' },
      { id: 'sometimes', label: '📉 Sometimes', value: 'sometimes' },
      { id: 'most_meals', label: '➖ Most Meals', value: 'most_meals' },
      { id: 'every_meal', label: '✅ Every Meal', value: 'every_meal' }
    ],
    required: true
  },
  {
    id: 'hwg_snack_frequency',
    section: 'Nutrition & Calorie Surplus',
    label: 'How often do you consume calorie-rich snacks between meals? (Examples: Nuts, Peanut Butter, Dry Fruits, Smoothies, Yogurt)',
    type: 'single_choice',
    options: [
      { id: 'never', label: '🚫 Never', value: 'never' },
      { id: 'rarely', label: '📉 Rarely', value: 'rarely' },
      { id: 'sometimes', label: '➖ Sometimes', value: 'sometimes' },
      { id: 'often', label: '📈 Often', value: 'often' },
      { id: 'daily', label: '💯 Daily', value: 'daily' }
    ],
    required: true
  },
  {
    id: 'hwg_liquid_calories',
    section: 'Nutrition & Calorie Surplus',
    label: 'Do you regularly consume calorie-dense drinks? (Examples: Milk, Smoothies, Protein Shakes)',
    type: 'single_choice',
    options: [
      { id: 'never', label: '🚫 Never', value: 'never' },
      { id: 'occasionally', label: '📉 Occasionally', value: 'occasionally' },
      { id: 'frequently', label: '📈 Frequently', value: 'frequently' },
      { id: 'daily', label: '💯 Daily', value: 'daily' }
    ],
    required: true
  },
  {
    id: 'hwg_appetite',
    section: 'Nutrition & Calorie Surplus',
    label: 'How would you describe your appetite?',
    type: 'single_choice',
    options: [
      { id: 'very_poor', label: '🍽️ Very Poor', value: 'very_poor' },
      { id: 'low', label: '😐 Low', value: 'low' },
      { id: 'normal', label: '🙂 Normal', value: 'normal' },
      { id: 'good', label: '😋 Good', value: 'good' },
      { id: 'excellent', label: '🔥 Excellent', value: 'excellent' }
    ],
    required: true
  },
  {
    id: 'hwg_early_satiety',
    section: 'Nutrition & Calorie Surplus',
    label: 'Do you frequently feel full before finishing your meals?',
    type: 'single_choice',
    options: [
      { id: 'never', label: '🚫 Never', value: 'never' },
      { id: 'rarely', label: '📉 Rarely', value: 'rarely' },
      { id: 'sometimes', label: '➖ Sometimes', value: 'sometimes' },
      { id: 'often', label: '📈 Often', value: 'often' },
      { id: 'almost_always', label: '💯 Almost Always', value: 'almost_always' }
    ],
    required: true
  },
  {
    id: 'hwg_resistance_training',
    section: 'Muscle Building & Activity',
    label: 'How many days each week do you perform resistance training?',
    type: 'single_choice',
    options: [
      { id: '0', label: '0', value: '0' },
      { id: '1_2', label: '1–2', value: '1_2' },
      { id: '3_4', label: '3–4', value: '3_4' },
      { id: '5_plus', label: '5+', value: '5_plus' }
    ],
    required: true
  },
  {
    id: 'hwg_workout_program',
    section: 'Muscle Building & Activity',
    label: 'Do you follow a structured workout program?',
    type: 'single_choice',
    options: [
      { id: 'no', label: '🚫 No', value: 'no' },
      { id: 'occasionally', label: '📉 Occasionally', value: 'occasionally' },
      { id: 'yes', label: '✅ Yes', value: 'yes' }
    ],
    required: true
  },
  {
    id: 'hwg_progressive_overload',
    section: 'Muscle Building & Activity',
    label: 'How often do you try to gradually increase your weights or repetitions?',
    type: 'single_choice',
    options: [
      { id: 'never', label: '🚫 Never', value: 'never' },
      { id: 'sometimes', label: '📉 Sometimes', value: 'sometimes' },
      { id: 'consistently', label: '✅ Consistently', value: 'consistently' }
    ],
    required: true
  },
  {
    id: 'hwg_cardio',
    section: 'Muscle Building & Activity',
    label: 'How much cardio do you perform every week?',
    type: 'single_choice',
    options: [
      { id: 'none', label: '🚫 None', value: 'none' },
      { id: '1_2_sessions', label: '🚶 1–2 sessions', value: '1_2_sessions' },
      { id: '3_4_sessions', label: '🏃 3–4 sessions', value: '3_4_sessions' },
      { id: '5_plus_sessions', label: '🔥 5+ sessions', value: '5_plus_sessions' }
    ],
    required: true
  },
  {
    id: 'hwg_daily_activity',
    section: 'Muscle Building & Activity',
    label: 'How physically active is your daily routine outside the gym?',
    type: 'single_choice',
    options: [
      { id: 'mostly_sitting', label: '🪑 Mostly Sitting', value: 'mostly_sitting' },
      { id: 'moderately_active', label: '🚶 Moderately Active', value: 'moderately_active' },
      { id: 'very_active', label: '🏃 Very Active', value: 'very_active' },
      { id: 'physically_demanding', label: '💪 Physically Demanding Job', value: 'physically_demanding' }
    ],
    required: true
  },
  {
    id: 'hwg_muscle_history',
    section: 'Muscle Building & Activity',
    label: 'Have you gained muscle successfully in the past?',
    type: 'single_choice',
    options: [
      { id: 'yes', label: '✅ Yes', value: 'yes' },
      { id: 'not_sure', label: '🤔 Not Sure', value: 'not_sure' },
      { id: 'no', label: '❌ No', value: 'no' }
    ],
    required: true
  },
  {
    id: 'hwg_sleep',
    section: 'Recovery & Growth',
    label: 'How many hours do you usually sleep each night?',
    type: 'single_choice',
    options: [
      { id: 'under_5', label: 'Less than 5', value: 'under_5' },
      { id: '5_6', label: '5–6', value: '5_6' },
      { id: '6_7', label: '6–7', value: '6_7' },
      { id: '7_9', label: '7–9', value: '7_9' },
      { id: 'over_9', label: 'More than 9', value: 'over_9' }
    ],
    required: true
  },
  {
    id: 'hwg_wake_refreshed',
    section: 'Recovery & Growth',
    label: 'Do you wake up feeling refreshed?',
    type: 'single_choice',
    options: [
      { id: 'never', label: '🚫 Never', value: 'never' },
      { id: 'rarely', label: '📉 Rarely', value: 'rarely' },
      { id: 'sometimes', label: '➖ Sometimes', value: 'sometimes' },
      { id: 'often', label: '📈 Often', value: 'often' },
      { id: 'always', label: '💯 Always', value: 'always' }
    ],
    required: true
  },
  {
    id: 'hwg_stress',
    section: 'Recovery & Growth',
    label: 'How would you rate your daily stress level?',
    type: 'single_choice',
    options: [
      { id: 'low', label: '😊 Low', value: 'low' },
      { id: 'moderate', label: '😐 Moderate', value: 'moderate' },
      { id: 'high', label: '😣 High', value: 'high' },
      { id: 'very_high', label: '😫 Very High', value: 'very_high' }
    ],
    required: true
  },
  {
    id: 'hwg_muscle_recovery',
    section: 'Recovery & Growth',
    label: 'How well do your muscles recover between workouts?',
    type: 'single_choice',
    options: [
      { id: 'excellent', label: '💪 Excellent', value: 'excellent' },
      { id: 'good', label: '🙂 Good', value: 'good' },
      { id: 'average', label: '😐 Average', value: 'average' },
      { id: 'poor', label: '😣 Poor', value: 'poor' },
      { id: 'very_poor', label: '😫 Very Poor', value: 'very_poor' }
    ],
    required: true
  },
  {
    id: 'hwg_rest_days',
    section: 'Recovery & Growth',
    label: 'How many complete rest days do you take each week?',
    type: 'single_choice',
    options: [
      { id: '0', label: '0', value: '0' },
      { id: '1', label: '1', value: '1' },
      { id: '2', label: '2', value: '2' },
      { id: '3_plus', label: '3+', value: '3_plus' }
    ],
    required: true
  },
  {
    id: 'hwg_hard_gainer',
    section: 'Appetite & Behaviour',
    label: 'Have you always found it difficult to gain weight?',
    type: 'single_choice',
    options: [
      { id: 'yes_childhood', label: '✅ Yes, since childhood', value: 'yes_childhood' },
      { id: 'mostly_yes', label: '📉 Mostly Yes', value: 'mostly_yes' },
      { id: 'sometimes', label: '🤔 Sometimes', value: 'sometimes' },
      { id: 'no', label: '❌ No', value: 'no' }
    ],
    required: true
  },
  {
    id: 'hwg_previous_attempts',
    section: 'Appetite & Behaviour',
    label: 'How many times have you seriously tried to gain weight?',
    type: 'single_choice',
    options: [
      { id: 'never', label: '🚫 Never', value: 'never' },
      { id: 'once', label: '☝️ Once', value: 'once' },
      { id: '2_3_times', label: '🔁 2–3 Times', value: '2_3_times' },
      { id: 'more_than_3', label: '♾️ More than 3 Times', value: 'more_than_3' }
    ],
    required: true
  },
  {
    id: 'hwg_biggest_obstacle',
    section: 'Appetite & Behaviour',
    label: 'What is your biggest obstacle to gaining healthy weight?',
    type: 'single_choice',
    options: [
      { id: 'poor_appetite', label: '🍽️ Poor Appetite', value: 'poor_appetite' },
      { id: 'busy_schedule', label: '⏱️ Busy Schedule', value: 'busy_schedule' },
      { id: 'budget', label: '💰 Budget', value: 'budget' },
      { id: 'dont_know_eat', label: '🏋️ Don\'t Know What To Eat', value: 'dont_know_eat' },
      { id: 'digestive_issues', label: '😣 Digestive Issues', value: 'digestive_issues' },
      { id: 'fear_of_fat', label: '😰 Fear Of Gaining Fat', value: 'fear_of_fat' },
      { id: 'dont_know', label: '🤷 Don\'t Know', value: 'dont_know' }
    ],
    required: true
  },
  {
    id: 'hwg_skip_meals',
    section: 'Appetite & Behaviour',
    label: 'How often do you skip meals because you are busy?',
    type: 'single_choice',
    options: [
      { id: 'never', label: '🚫 Never', value: 'never' },
      { id: 'rarely', label: '📉 Rarely', value: 'rarely' },
      { id: 'sometimes', label: '➖ Sometimes', value: 'sometimes' },
      { id: 'often', label: '📈 Often', value: 'often' },
      { id: 'daily', label: '💯 Daily', value: 'daily' }
    ],
    required: true
  },
  {
    id: 'hwg_portion_discomfort',
    section: 'Appetite & Behaviour',
    label: 'Do you feel uncomfortable eating larger portions?',
    type: 'single_choice',
    options: [
      { id: 'never', label: '🚫 Never', value: 'never' },
      { id: 'rarely', label: '📉 Rarely', value: 'rarely' },
      { id: 'sometimes', label: '➖ Sometimes', value: 'sometimes' },
      { id: 'often', label: '📈 Often', value: 'often' },
      { id: 'always', label: '💯 Always', value: 'always' }
    ],
    required: true
  },
  {
    id: 'hwg_confidence',
    section: 'Appetite & Behaviour',
    label: 'How confident are you that you can achieve your target weight?',
    type: 'scale',
    options: [
      { id: 'low', label: 'Not confident', value: 1 },
      { id: 'high', label: 'Very confident', value: 10 }
    ],
    required: true
  },
  {
    id: 'hwg_commitment',
    section: 'Appetite & Behaviour',
    label: 'How committed are you to changing your daily habits to gain weight?',
    type: 'scale',
    options: [
      { id: 'low', label: 'Not committed', value: 1 },
      { id: 'high', label: 'Very committed', value: 10 }
    ],
    required: true
  }
];
