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
      { id: 'male', label: '👨 Male', value: 'male' },
      { id: 'female', label: '👩 Female', value: 'female' },
      { id: 'other', label: '🌈 Other', value: 'other' },
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
      { id: 'student', label: '🎓 Student', value: 'student' },
      { id: 'professional', label: '💼 Working Professional', value: 'professional' },
      { id: 'business', label: '🚀 Business Owner', value: 'business' },
      { id: 'homemaker', label: '🏡 Homemaker', value: 'homemaker' },
      { id: 'retired', label: '🏖️ Retired', value: 'retired' },
      { id: 'other', label: '✨ Other', value: 'other' },
    ],
  },
  {
    id: 'activityLevel',
    section: 'Lifestyle',
    label: 'How would you describe your activity level?',
    type: 'single_choice',
    options: [
      { id: 'sedentary', label: '🪑 Not Active', value: 'sedentary', description: 'Little to no exercise' },
      { id: 'light', label: '🚶 Lightly Active', value: 'light', description: '1-3 days/week' },
      { id: 'moderate', label: '🏃 Moderately Active', value: 'moderate', description: '3-5 days/week' },
      { id: 'active', label: '🏋️ Very Active', value: 'active', description: '6-7 days/week' },
    ],
  },
  {
    id: 'conditions',
    section: 'Health',
    label: 'Do you have any known medical conditions?',
    type: 'multiple_choice',
    options: [
      { id: 'none', label: '✨ None', value: 'none' },
      { id: 'diabetes', label: '🩸 Diabetes', value: 'diabetes' },
      { id: 'hbp', label: '🫀 High Blood Pressure', value: 'hbp' },
      { id: 'thyroid', label: '🦋 Thyroid', value: 'thyroid' },
      { id: 'heart', label: '❤️ Heart Disease', value: 'heart' },
      { id: 'pcos', label: '🌸 PCOS', value: 'pcos' },
      { id: 'asthma', label: '🫁 Asthma', value: 'asthma' },
      { id: 'cholesterol', label: '🍔 High Cholesterol', value: 'cholesterol' },
      { id: 'other', label: '🩺 Other', value: 'other' },
    ],
  },
  {
    id: 'food_preference',
    section: 'Health',
    label: 'What is your food preference?',
    type: 'single_choice',
    options: [
      { id: 'veg', label: '🥗 Vegetarian', value: 'vegetarian' },
      { id: 'egg', label: '🍳 Eggetarian', value: 'eggetarian' },
      { id: 'nonveg', label: '🍗 Non-Vegetarian', value: 'non_vegetarian' },
      { id: 'vegan', label: '🌱 Vegan', value: 'vegan' },
      { id: 'jain', label: '🧘 Jain', value: 'jain' },
      { id: 'other', label: '🍽️ Other', value: 'other' },
    ],
  },
  {
    id: 'smoking',
    section: 'Health',
    label: 'Do you smoke or use tobacco products?',
    type: 'single_choice',
    options: [
      { id: 'no', label: '🚭 No', value: 'no' },
      { id: 'occasionally', label: '🚬 Occasionally', value: 'occasionally' },
      { id: 'regularly', label: '😮‍💨 Regularly', value: 'regularly' },
    ],
  },
  {
    id: 'alcohol',
    section: 'Health',
    label: 'How often do you consume alcohol?',
    type: 'single_choice',
    options: [
      { id: 'no', label: '🚫 No', value: 'no' },
      { id: 'occasionally', label: '🥂 Occasionally', value: 'occasionally' },
      { id: 'regularly', label: '🍻 Regularly', value: 'regularly' },
    ],
  },
];

export const GOAL_QUESTIONS: GoalQuestions = {};

// Fallback if goal not found
export const DEFAULT_QUESTIONS: QuestionDef[] = [];

