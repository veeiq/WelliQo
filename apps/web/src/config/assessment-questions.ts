export type QuestionType = 'single_choice' | 'multiple_choice' | 'number' | 'boolean' | 'scale' | 'height' | 'weight' | 'text';

export interface QuestionOption {
  id: string;
  label: string;
  description?: string;
  value: any;
}

export interface QuestionDef {
  id: string;
  section: string;
  label: string;
  type: QuestionType;
  options?: QuestionOption[];
  placeholder?: string;
  required?: boolean;
}

export type GoalQuestions = Record<string, QuestionDef[]>;

export const UNIVERSAL_PROFILE_QUESTIONS: QuestionDef[] = [
  {
    id: 'name',
    section: 'Personal Information',
    label: 'What is your full name?',
    type: 'text',
    placeholder: 'Enter your full name',
    required: false,
  },
  {
    id: 'age',
    section: 'Personal Information',
    label: 'How old are you?',
    type: 'number',
    placeholder: 'Age',
    required: true,
  },
  {
    id: 'gender',
    section: 'Personal Information',
    label: 'What is your gender?',
    type: 'single_choice',
    options: [
      { id: 'male', label: 'Male', value: 'male' },
      { id: 'female', label: 'Female', value: 'female' },
      { id: 'other', label: 'Other', value: 'other' },
    ],
    required: true,
  },
  {
    id: 'height',
    section: 'Body Information',
    label: 'How tall are you?',
    type: 'height',
    required: true,
  },
  {
    id: 'weight',
    section: 'Body Information',
    label: 'What is your current weight?',
    type: 'weight',
    required: true,
  },
  {
    id: 'occupation',
    section: 'Lifestyle',
    label: 'What is your occupation?',
    type: 'single_choice',
    options: [
      { id: 'student', label: 'Student', value: 'student' },
      { id: 'professional', label: 'Working Professional', value: 'professional' },
      { id: 'business', label: 'Business Owner', value: 'business' },
      { id: 'homemaker', label: 'Homemaker', value: 'homemaker' },
      { id: 'retired', label: 'Retired', value: 'retired' },
      { id: 'other', label: 'Other', value: 'other' },
    ],
  },
  {
    id: 'activityLevel',
    section: 'Lifestyle',
    label: 'How would you describe your activity level?',
    type: 'single_choice',
    options: [
      { id: 'sedentary', label: 'Not Active', value: 'sedentary', description: 'Little to no exercise' },
      { id: 'light', label: 'Lightly Active', value: 'light', description: '1-3 days/week' },
      { id: 'moderate', label: 'Moderately Active', value: 'moderate', description: '3-5 days/week' },
      { id: 'active', label: 'Very Active', value: 'active', description: '6-7 days/week' },
    ],
  },
  {
    id: 'conditions',
    section: 'Health',
    label: 'Do you have any known medical conditions?',
    type: 'multiple_choice',
    options: [
      { id: 'none', label: 'None', value: 'none' },
      { id: 'diabetes', label: 'Diabetes', value: 'diabetes' },
      { id: 'hbp', label: 'High Blood Pressure', value: 'hbp' },
      { id: 'thyroid', label: 'Thyroid', value: 'thyroid' },
      { id: 'heart', label: 'Heart Disease', value: 'heart' },
      { id: 'pcos', label: 'PCOS', value: 'pcos' },
      { id: 'asthma', label: 'Asthma', value: 'asthma' },
      { id: 'cholesterol', label: 'High Cholesterol', value: 'cholesterol' },
      { id: 'other', label: 'Other', value: 'other' },
    ],
  },
  {
    id: 'food_preference',
    section: 'Health',
    label: 'What is your food preference?',
    type: 'single_choice',
    options: [
      { id: 'veg', label: 'Vegetarian', value: 'vegetarian' },
      { id: 'egg', label: 'Eggetarian', value: 'eggetarian' },
      { id: 'nonveg', label: 'Non-Vegetarian', value: 'non_vegetarian' },
      { id: 'vegan', label: 'Vegan', value: 'vegan' },
      { id: 'jain', label: 'Jain', value: 'jain' },
      { id: 'other', label: 'Other', value: 'other' },
    ],
  },
  {
    id: 'smoking',
    section: 'Health',
    label: 'Do you smoke or use tobacco products?',
    type: 'single_choice',
    options: [
      { id: 'no', label: 'No', value: 'no' },
      { id: 'occasionally', label: 'Occasionally', value: 'occasionally' },
      { id: 'regularly', label: 'Regularly', value: 'regularly' },
    ],
  },
  {
    id: 'alcohol',
    section: 'Health',
    label: 'How often do you consume alcohol?',
    type: 'single_choice',
    options: [
      { id: 'no', label: 'No', value: 'no' },
      { id: 'occasionally', label: 'Occasionally', value: 'occasionally' },
      { id: 'regularly', label: 'Regularly', value: 'regularly' },
    ],
  },
];

const STRESS_QUESTIONS: QuestionDef[] = [
  {
    id: 'stress_level',
    section: 'Mental Wellbeing',
    label: 'On a scale of 1-10, how stressed do you feel on an average day?',
    type: 'scale',
  },
  {
    id: 'stress_physical',
    section: 'Mental Wellbeing',
    label: 'Where do you feel stress most in your body?',
    type: 'multiple_choice',
    options: [
      { id: 'shoulders', label: '💆 Neck & Shoulders', value: 'shoulders', description: 'Tension and stiffness' },
      { id: 'stomach', label: '🤢 Stomach / Gut', value: 'stomach', description: 'Nausea or butterflies' },
      { id: 'head', label: '🤕 Headaches', value: 'head', description: 'Jaw clenching & migraines' },
      { id: 'none', label: '✨ No physical symptoms', value: 'none', description: 'I carry stress mentally' },
    ],
  }
];

// Combine into goal specific arrays.
export const GOAL_QUESTIONS: GoalQuestions = {
  weight: [
    {
      id: 'weight_goal_type',
      section: 'Weight Management',
      label: 'What is your primary weight goal?',
      type: 'single_choice',
      options: [
        { id: 'lose', label: '📉 Lose Body Fat', value: 'lose', description: 'Drop inches and lean out' },
        { id: 'maintain', label: '⚖️ Maintain & Tone', value: 'maintain', description: 'Keep weight, build definition' },
        { id: 'gain', label: '💪 Gain Muscle Mass', value: 'gain', description: 'Bulk up and increase size' },
      ]
    },
    {
      id: 'weight_target',
      section: 'Weight Management',
      label: 'What is your target weight?',
      type: 'weight',
    },
    {
      id: 'weight_obstacle',
      section: 'Weight Management',
      label: 'What usually stops you from reaching your goal?',
      type: 'multiple_choice',
      options: [
        { id: 'hunger', label: '🤤 Constant Hunger', value: 'hunger' },
        { id: 'cravings', label: '🍫 Sweet Cravings', value: 'cravings' },
        { id: 'time', label: '⏰ No Time', value: 'time' },
        { id: 'knowledge', label: '🤷 Unsure what to eat', value: 'knowledge' },
      ]
    },
    {
      id: 'fat_storage',
      section: 'Body Composition',
      label: 'Where do you gain fat the most?',
      type: 'single_choice',
      options: [
        { id: 'belly', label: '👕 Belly & Midsection', value: 'belly' },
        { id: 'hips', label: '👖 Hips & Thighs', value: 'hips' },
        { id: 'face', label: '🧑 Face & Neck', value: 'face' },
        { id: 'overall', label: '🧍 Full Body (Evenly)', value: 'overall' },
      ]
    },
    ...STRESS_QUESTIONS,
  ],
  sleep: [
    {
      id: 'sleep_hours',
      section: 'Sleep Quality',
      label: 'How many hours of sleep do you average per night?',
      type: 'number',
      placeholder: 'Hours'
    },
    {
      id: 'sleep_issue',
      section: 'Sleep Quality',
      label: 'What is your biggest struggle with sleep?',
      type: 'single_choice',
      options: [
        { id: 'falling', label: '👀 Falling asleep', value: 'falling' },
        { id: 'staying', label: '🕰️ Staying asleep', value: 'staying' },
        { id: 'waking', label: '🧟 Waking up tired', value: 'waking' },
        { id: 'schedule', label: '📅 Irregular schedule', value: 'schedule' },
      ]
    },
    {
      id: 'snoring',
      section: 'Sleep Quality',
      label: 'Do you snore heavily or stop breathing in your sleep?',
      type: 'single_choice',
      options: [
        { id: 'yes', label: '😴 Yes', value: 'yes', description: 'I have been told I snore loudly' },
        { id: 'no', label: '🤫 No', value: 'no' },
        { id: 'unsure', label: '🤷 Unsure', value: 'unsure' },
      ]
    },
    ...STRESS_QUESTIONS,
  ],
  energy: [
    {
      id: 'energy_dip',
      section: 'Daily Energy',
      label: 'When do you experience your biggest energy crash?',
      type: 'single_choice',
      options: [
        { id: 'morning', label: '🌅 Mid-morning', value: 'morning' },
        { id: 'afternoon', label: '📉 Afternoon', value: 'afternoon', description: '2pm-4pm' },
        { id: 'evening', label: '🌙 Early evening', value: 'evening' },
        { id: 'never', label: '🔋 Steady energy all day', value: 'never' },
      ]
    },
    {
      id: 'caffeine',
      section: 'Daily Energy',
      label: 'How many caffeinated drinks do you have per day?',
      type: 'number',
      placeholder: 'Cups'
    },
    ...STRESS_QUESTIONS,
  ],
  gut: [
    {
      id: 'gut_symptom',
      section: 'Gut Health',
      label: 'Which digestive issue bothers you most frequently?',
      type: 'multiple_choice',
      options: [
        { id: 'bloating', label: '🎈 Bloating', value: 'bloating', description: 'After meals' },
        { id: 'acid', label: '🔥 Acid reflux', value: 'acid', description: 'Heartburn' },
        { id: 'irregular', label: '🚽 Irregular bowel', value: 'irregular', description: 'Constipation or loose motion' },
        { id: 'none', label: '✨ No issues', value: 'none' },
      ]
    },
    {
      id: 'poop_freq',
      section: 'Gut Health',
      label: 'How often do you typically have a bowel movement?',
      type: 'single_choice',
      options: [
        { id: 'daily', label: '✅ 1-2 times daily', value: 'daily' },
        { id: 'frequent', label: '🏃 3+ times daily', value: 'frequent' },
        { id: 'rare', label: '🐢 Every 2-3 days', value: 'rare' },
      ]
    },
    ...STRESS_QUESTIONS,
  ],
  stress: [
    ...STRESS_QUESTIONS,
    {
      id: 'stress_source',
      section: 'Mental Wellbeing',
      label: 'What is your main source of stress?',
      type: 'single_choice',
      options: [
        { id: 'work', label: '💼 Work / Career', value: 'work' },
        { id: 'family', label: '👨‍👩‍👧 Family', value: 'family' },
        { id: 'finance', label: '💰 Finances', value: 'finance' },
        { id: 'health', label: '🏥 Health', value: 'health' },
      ]
    },
    {
      id: 'stress_coping',
      section: 'Mental Wellbeing',
      label: 'How do you currently cope with stress?',
      type: 'multiple_choice',
      options: [
        { id: 'exercise', label: '🏃 Exercise', value: 'exercise' },
        { id: 'food', label: '🍩 Comfort eating', value: 'food' },
        { id: 'tv', label: '📺 Screen time / TV', value: 'tv' },
        { id: 'meditation', label: '🧘 Meditation', value: 'meditation' },
      ]
    },
  ],
  women: [
    {
      id: 'cycle_status',
      section: 'Women\'s Health',
      label: 'Which best describes your current life stage?',
      type: 'single_choice',
      options: [
        { id: 'regular', label: '📅 Regular cycles', value: 'regular' },
        { id: 'irregular', label: '🎢 Irregular cycles', value: 'irregular' },
        { id: 'peri', label: '🍂 Perimenopause', value: 'peri' },
        { id: 'post', label: '❄️ Postmenopause', value: 'post' },
      ]
    },
    ...STRESS_QUESTIONS,
  ],
  aging: [
    {
      id: 'longevity_goal',
      section: 'Healthy Aging',
      label: 'What is your primary focus for longevity?',
      type: 'single_choice',
      options: [
        { id: 'mobility', label: '🤸 Joint health & mobility', value: 'mobility' },
        { id: 'cognitive', label: '🧠 Brain health & memory', value: 'cognitive' },
        { id: 'heart', label: '❤️ Heart health', value: 'heart' },
        { id: 'appearance', label: '✨ Skin health & vitality', value: 'appearance' },
      ]
    },
    ...STRESS_QUESTIONS,
  ],
  fitness: [
    {
      id: 'fitness_goal',
      section: 'Fitness & Activity',
      label: 'What is your current primary fitness objective?',
      type: 'single_choice',
      options: [
        { id: 'strength', label: '💪 Build strength', value: 'strength' },
        { id: 'endurance', label: '🫀 Improve endurance', value: 'endurance' },
        { id: 'flexibility', label: '🧘 Enhance flexibility', value: 'flexibility' },
        { id: 'routine', label: '📅 Stay consistent', value: 'routine' },
      ]
    },
    ...STRESS_QUESTIONS,
  ]
};

// Fallback if goal not found
export const DEFAULT_QUESTIONS = [...STRESS_QUESTIONS];

