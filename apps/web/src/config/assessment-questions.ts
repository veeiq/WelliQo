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

// Shared baseline questions for ALL goals (required for the math engine)
export const BASELINE_QUESTIONS: QuestionDef[] = [
  {
    id: 'name',
    section: 'Basic Info',
    label: 'What is your name?',
    type: 'text',
    placeholder: 'Enter your full name',
    required: true,
  },
  {
    id: 'age',
    section: 'Basic Info',
    label: 'How old are you?',
    type: 'number',
    placeholder: 'Age',
    required: true,
  },
  {
    id: 'gender',
    section: 'Basic Info',
    label: 'What is your biological sex?',
    type: 'single_choice',
    options: [
      { id: 'male', label: '👨 Male', value: 'male' },
      { id: 'female', label: '👩 Female', value: 'female' },
    ],
    required: true,
  },
  {
    id: 'height',
    section: 'Body Metrics',
    label: 'How tall are you?',
    type: 'height',
    required: true,
  },
  {
    id: 'weight',
    section: 'Body Metrics',
    label: 'What is your current weight?',
    type: 'weight',
    required: true,
  },
];

// Shared Lifestyle block
const LIFESTYLE_QUESTIONS: QuestionDef[] = [
  {
    id: 'activityLevel',
    section: 'Lifestyle',
    label: 'How would you describe your weekly activity level?',
    type: 'single_choice',
    options: [
      { id: 'sedentary', label: '🪑 Sedentary', value: 'sedentary', description: 'Little to no exercise' },
      { id: 'light', label: '🚶 Lightly Active', value: 'light', description: '1-3 days/week' },
      { id: 'moderate', label: '🏃 Moderately Active', value: 'moderate', description: '3-5 days/week' },
      { id: 'very', label: '🏋️ Very Active', value: 'very_active', description: '6-7 days/week' },
    ],
  },
  {
    id: 'profession',
    section: 'Lifestyle',
    label: 'What best describes your typical workday?',
    type: 'single_choice',
    options: [
      { id: 'desk', label: '💻 Desk Job', value: 'desk', description: 'Mostly sitting' },
      { id: 'mixed', label: '🔄 Mixed', value: 'mixed', description: 'Sitting & Standing' },
      { id: 'moving', label: '🏃 On my feet', value: 'moving', description: 'Retail, Healthcare' },
      { id: 'active', label: '🏗️ Highly Active', value: 'active', description: 'Physical labor' },
    ],
  },
  {
    id: 'alcohol',
    section: 'Lifestyle',
    label: 'How often do you consume alcohol?',
    type: 'single_choice',
    options: [
      { id: 'never', label: '🚫 Never', value: 'never' },
      { id: 'rarely', label: '🍷 Rarely', value: 'rarely', description: '1-2 times/month' },
      { id: 'weekly', label: '🥂 Weekly', value: 'weekly', description: '1-2 times/week' },
      { id: 'daily', label: '🍻 Daily', value: 'daily', description: 'Almost daily' },
    ],
  },
  {
    id: 'smoking',
    section: 'Lifestyle',
    label: 'Do you smoke or use tobacco products?',
    type: 'single_choice',
    options: [
      { id: 'yes', label: '🚬 Yes', value: 'yes', description: 'Regularly or occasionally' },
      { id: 'no', label: '🚭 No', value: 'no', description: 'Never or quit' },
    ]
  }
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

const MOTIVATION_QUESTION: QuestionDef = {
  id: 'motivation',
  section: 'Your Journey',
  label: 'Why do you want to become healthier right now?',
  type: 'text',
  placeholder: 'e.g. To feel more confident, have more energy...'
};

// Combine into goal specific arrays.
// For now we assemble ~10-15 robust questions for Weight. 
// We will expand this rapidly.
export const GOAL_QUESTIONS: GoalQuestions = {
  weight: [
    ...BASELINE_QUESTIONS,
    ...LIFESTYLE_QUESTIONS,
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
    {
      id: 'diet_type',
      section: 'Diet & Nutrition',
      label: 'Do you follow any specific dietary pattern?',
      type: 'multiple_choice',
      options: [
        { id: 'keto', label: '🥑 Keto / Low Carb', value: 'keto' },
        { id: 'vegan', label: '🥗 Vegan / Plant-based', value: 'vegan' },
        { id: 'fasting', label: '⏱️ Intermittent Fasting', value: 'fasting' },
        { id: 'none', label: '🍔 No specific diet', value: 'none' },
      ]
    },
    ...STRESS_QUESTIONS,
    MOTIVATION_QUESTION
  ],
  sleep: [
    ...BASELINE_QUESTIONS,
    ...LIFESTYLE_QUESTIONS,
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
    MOTIVATION_QUESTION
  ],
  energy: [
    ...BASELINE_QUESTIONS,
    ...LIFESTYLE_QUESTIONS,
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
    MOTIVATION_QUESTION
  ],
  gut: [
    ...BASELINE_QUESTIONS,
    ...LIFESTYLE_QUESTIONS,
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
    MOTIVATION_QUESTION
  ],
  stress: [
    ...BASELINE_QUESTIONS,
    ...LIFESTYLE_QUESTIONS,
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
    MOTIVATION_QUESTION
  ],
  women: [
    ...BASELINE_QUESTIONS,
    ...LIFESTYLE_QUESTIONS,
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
    MOTIVATION_QUESTION
  ],
  aging: [
    ...BASELINE_QUESTIONS,
    ...LIFESTYLE_QUESTIONS,
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
    MOTIVATION_QUESTION
  ],
  fitness: [
    ...BASELINE_QUESTIONS,
    ...LIFESTYLE_QUESTIONS,
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
    MOTIVATION_QUESTION
  ]
};

// Fallback if goal not found
export const DEFAULT_QUESTIONS = [...BASELINE_QUESTIONS, ...LIFESTYLE_QUESTIONS, ...STRESS_QUESTIONS, MOTIVATION_QUESTION];
