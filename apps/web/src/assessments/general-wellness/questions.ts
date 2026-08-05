import { QuestionDef } from '../../types/assessment';

export const questions: QuestionDef[] = [
  {
    id: 'overall_health',
    label: 'How would you rate your overall health today?',
    type: 'single_choice',
    section: 'Overall Health Perception',
    options: [
      { id: 'poor', label: 'Poor', value: 1 },
      { id: 'fair', label: 'Fair', value: 2 },
      { id: 'good', label: 'Good', value: 3 },
      { id: 'very_good', label: 'Very Good', value: 4 },
      { id: 'excellent', label: 'Excellent', value: 5 }
    ]
  },
  {
    id: 'health_trend',
    label: 'Compared to one year ago, your health is...',
    type: 'single_choice',
    section: 'Overall Health Perception',
    options: [
      { id: 'much_worse', label: 'Much Worse', value: 1 },
      { id: 'slightly_worse', label: 'Slightly Worse', value: 2 },
      { id: 'about_same', label: 'About the Same', value: 3 },
      { id: 'slightly_better', label: 'Slightly Better', value: 4 },
      { id: 'much_better', label: 'Much Better', value: 5 }
    ]
  },
  {
    id: 'daily_function',
    label: 'How often do you feel physically healthy enough to complete your daily activities?',
    type: 'single_choice',
    section: 'Overall Health Perception',
    options: [
      { id: 'never', label: 'Never', value: 1 },
      { id: 'rarely', label: 'Rarely', value: 2 },
      { id: 'sometimes', label: 'Sometimes', value: 3 },
      { id: 'most_days', label: 'Most Days', value: 4 },
      { id: 'every_day', label: 'Every Day', value: 5 }
    ]
  },
  {
    id: 'health_satisfaction',
    label: 'How satisfied are you with your current health?',
    type: 'scale',
    section: 'Overall Health Perception',
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
    id: 'daily_energy_level',
    label: 'How often do you feel energetic throughout the day?',
    type: 'single_choice',
    section: 'Overall Health Perception',
    options: [
      { id: 'never', label: 'Never', value: 1 },
      { id: 'rarely', label: 'Rarely', value: 2 },
      { id: 'sometimes', label: 'Sometimes', value: 3 },
      { id: 'often', label: 'Often', value: 4 },
      { id: 'almost_always', label: 'Almost Always', value: 5 }
    ]
  },
  {
    id: 'fatigue_frequency',
    label: 'How often do you experience unexplained fatigue?',
    type: 'single_choice',
    section: 'Overall Health Perception',
    options: [
      { id: 'every_day', label: 'Every Day', value: 1 },
      { id: 'several_times_week', label: 'Several Times a Week', value: 2 },
      { id: 'occasionally', label: 'Occasionally', value: 3 },
      { id: 'rarely', label: 'Rarely', value: 4 },
      { id: 'never', label: 'Never', value: 5 }
    ]
  },
  {
    id: 'balanced_meals',
    label: 'How regularly do you eat balanced meals?',
    type: 'single_choice',
    section: 'Healthy Lifestyle Habits',
    options: [
      { id: 'never', label: 'Never', value: 1 },
      { id: 'rarely', label: 'Rarely', value: 2 },
      { id: 'sometimes', label: 'Sometimes', value: 3 },
      { id: 'most_days', label: 'Most Days', value: 4 },
      { id: 'every_day', label: 'Every Day', value: 5 }
    ]
  },
  {
    id: 'healthy_activity',
    label: 'How often do you intentionally engage in physical activity?',
    type: 'single_choice',
    section: 'Healthy Lifestyle Habits',
    options: [
      { id: 'never', label: 'Never', value: 1 },
      { id: '1_2_days', label: '1–2 Days/Week', value: 2 },
      { id: '3_4_days', label: '3–4 Days/Week', value: 3 },
      { id: '5_6_days', label: '5–6 Days/Week', value: 4 },
      { id: 'every_day', label: 'Every Day', value: 5 }
    ]
  },
  {
    id: 'refreshing_sleep',
    label: 'How often do you sleep well and wake up refreshed?',
    type: 'single_choice',
    section: 'Healthy Lifestyle Habits',
    options: [
      { id: 'never', label: 'Never', value: 1 },
      { id: 'rarely', label: 'Rarely', value: 2 },
      { id: 'sometimes', label: 'Sometimes', value: 3 },
      { id: 'often', label: 'Often', value: 4 },
      { id: 'almost_always', label: 'Almost Always', value: 5 }
    ]
  },
  {
    id: 'hydration_habit',
    label: 'How well do you stay hydrated during the day?',
    type: 'single_choice',
    section: 'Healthy Lifestyle Habits',
    options: [
      { id: 'very_poorly', label: 'Very Poorly', value: 1 },
      { id: 'poorly', label: 'Poorly', value: 2 },
      { id: 'fairly_well', label: 'Fairly Well', value: 3 },
      { id: 'well', label: 'Well', value: 4 },
      { id: 'very_well', label: 'Very Well', value: 5 }
    ]
  },
  {
    id: 'sunlight_exposure',
    label: 'How often do you spend time outdoors or in natural sunlight?',
    type: 'single_choice',
    section: 'Healthy Lifestyle Habits',
    options: [
      { id: 'almost_never', label: 'Almost Never', value: 1 },
      { id: '1_2_days', label: '1–2 Days/Week', value: 2 },
      { id: '3_4_days', label: '3–4 Days/Week', value: 3 },
      { id: '5_6_days', label: '5–6 Days/Week', value: 4 },
      { id: 'every_day', label: 'Every Day', value: 5 }
    ]
  },
  {
    id: 'prolonged_sitting',
    label: 'How often do you spend long periods sitting without taking movement breaks?',
    type: 'single_choice',
    section: 'Healthy Lifestyle Habits',
    options: [
      { id: 'almost_always', label: 'Almost Always', value: 1 },
      { id: 'often', label: 'Often', value: 2 },
      { id: 'sometimes', label: 'Sometimes', value: 3 },
      { id: 'rarely', label: 'Rarely', value: 4 },
      { id: 'never', label: 'Never', value: 5 }
    ]
  },
  {
    id: 'emotional_balance',
    label: 'How often do you feel emotionally balanced?',
    type: 'single_choice',
    section: 'Mental & Emotional Wellbeing',
    options: [
      { id: 'never', label: 'Never', value: 1 },
      { id: 'rarely', label: 'Rarely', value: 2 },
      { id: 'sometimes', label: 'Sometimes', value: 3 },
      { id: 'often', label: 'Often', value: 4 },
      { id: 'almost_always', label: 'Almost Always', value: 5 }
    ]
  },
  {
    id: 'stress_management',
    label: 'How well do you manage everyday stress?',
    type: 'single_choice',
    section: 'Mental & Emotional Wellbeing',
    options: [
      { id: 'very_poorly', label: 'Very Poorly', value: 1 },
      { id: 'poorly', label: 'Poorly', value: 2 },
      { id: 'fairly_well', label: 'Fairly Well', value: 3 },
      { id: 'well', label: 'Well', value: 4 },
      { id: 'very_well', label: 'Very Well', value: 5 }
    ]
  },
  {
    id: 'health_motivation',
    label: 'How often do you feel motivated to take care of your health?',
    type: 'single_choice',
    section: 'Mental & Emotional Wellbeing',
    options: [
      { id: 'never', label: 'Never', value: 1 },
      { id: 'rarely', label: 'Rarely', value: 2 },
      { id: 'sometimes', label: 'Sometimes', value: 3 },
      { id: 'often', label: 'Often', value: 4 },
      { id: 'always', label: 'Always', value: 5 }
    ]
  },
  {
    id: 'work_life_balance',
    label: 'How satisfied are you with your work-life balance?',
    type: 'single_choice',
    section: 'Mental & Emotional Wellbeing',
    options: [
      { id: 'very_dissatisfied', label: 'Very Dissatisfied', value: 1 },
      { id: 'dissatisfied', label: 'Dissatisfied', value: 2 },
      { id: 'neutral', label: 'Neutral', value: 3 },
      { id: 'satisfied', label: 'Satisfied', value: 4 },
      { id: 'very_satisfied', label: 'Very Satisfied', value: 5 }
    ]
  },
  {
    id: 'relaxation_frequency',
    label: 'How often do you make time to relax or unwind?',
    type: 'single_choice',
    section: 'Mental & Emotional Wellbeing',
    options: [
      { id: 'never', label: 'Never', value: 1 },
      { id: 'rarely', label: 'Rarely', value: 2 },
      { id: 'sometimes', label: 'Sometimes', value: 3 },
      { id: 'often', label: 'Often', value: 4 },
      { id: 'every_day', label: 'Every Day', value: 5 }
    ]
  },
  {
    id: 'social_connection',
    label: 'How connected do you feel with supportive family or friends?',
    type: 'single_choice',
    section: 'Mental & Emotional Wellbeing',
    options: [
      { id: 'not_at_all', label: 'Not at All', value: 1 },
      { id: 'slightly', label: 'Slightly', value: 2 },
      { id: 'moderately', label: 'Moderately', value: 3 },
      { id: 'strongly', label: 'Strongly', value: 4 },
      { id: 'very_strongly', label: 'Very Strongly', value: 5 }
    ]
  },
  {
    id: 'preventive_checkups',
    label: 'Do you usually schedule routine health check-ups?',
    type: 'single_choice',
    section: 'Preventive Wellness & Lifestyle',
    options: [
      { id: 'never', label: 'Never', value: 1 },
      { id: 'rarely', label: 'Rarely', value: 2 },
      { id: 'occasionally', label: 'Occasionally', value: 3 },
      { id: 'usually', label: 'Usually', value: 4 },
      { id: 'always', label: 'Always', value: 5 }
    ]
  },
  {
    id: 'ignore_health_signals',
    label: 'How often do you ignore early signs that something may be wrong with your health?',
    type: 'single_choice',
    section: 'Preventive Wellness & Lifestyle',
    options: [
      { id: 'always', label: 'Always', value: 1 },
      { id: 'often', label: 'Often', value: 2 },
      { id: 'sometimes', label: 'Sometimes', value: 3 },
      { id: 'rarely', label: 'Rarely', value: 4 },
      { id: 'never', label: 'Never', value: 5 }
    ]
  },
  {
    id: 'wellness_confidence',
    label: 'How confident are you in maintaining healthy habits long-term?',
    type: 'scale',
    section: 'Preventive Wellness & Lifestyle',
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
    id: 'wellness_commitment',
    label: 'How committed are you to improving your overall wellbeing over the next 90 days?',
    type: 'scale',
    section: 'Preventive Wellness & Lifestyle',
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
    id: 'biggest_health_barrier',
    label: 'What is your biggest challenge to maintaining good health?',
    type: 'single_choice',
    section: 'Preventive Wellness & Lifestyle',
    options: [
      { id: 'lack_of_time', label: 'Lack of Time', value: 1 },
      { id: 'lack_of_motivation', label: 'Lack of Motivation', value: 2 },
      { id: 'stress', label: 'Stress', value: 3 },
      { id: 'poor_routine', label: 'Poor Routine', value: 4 },
      { id: 'financial_reasons', label: 'Financial Reasons', value: 5 },
      { id: 'health_issues', label: 'Health Issues', value: 6 },
      { id: 'family_responsibilities', label: 'Family Responsibilities', value: 7 },
      { id: 'other', label: 'Other', value: 8 }
    ]
  },
  {
    id: 'primary_focus_area',
    label: 'Which area of your health would you most like to improve first?',
    type: 'single_choice',
    section: 'Preventive Wellness & Lifestyle',
    options: [
      { id: 'physical_fitness', label: 'Physical Fitness', value: 1 },
      { id: 'nutrition', label: 'Nutrition', value: 2 },
      { id: 'sleep', label: 'Sleep', value: 3 },
      { id: 'energy', label: 'Energy', value: 4 },
      { id: 'mental_wellbeing', label: 'Mental Wellbeing', value: 5 },
      { id: 'stress_management', label: 'Stress Management', value: 6 },
      { id: 'overall_health', label: 'Overall Health', value: 7 }
    ]
  },
  {
    id: 'wellness_readiness',
    label: 'Overall, how ready are you to transform your lifestyle?',
    type: 'scale',
    section: 'Preventive Wellness & Lifestyle',
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
  }
];
