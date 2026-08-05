const fs = require('fs');
const path = require('path');

const GOALS = ['weight-loss', 'better-sleep', 'energy', 'muscle-gain', 'healthy-aging', 'stress-management', 'gut-health'];
const FOOD_PREFS = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Keto', 'Paleo', 'None'];
const CONDITIONS = ['Diabetes', 'Hypertension', 'Celiac', 'None'];
const STAGES = ['BEGINNER', 'IMPROVING', 'CONSISTENT', 'ADVANCED'];
const EVIDENCE = ['FOUNDATIONAL', 'EMERGING', 'EXPERT_OPINION'];
const STATUS = ['PUBLISHED', 'REVIEW'];
const PRIORITIES = ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'];
const DIFFICULTIES = ['EASY', 'MEDIUM', 'HARD'];

// Helper for random items
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];
const sampleMultiple = (arr, count) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateId = (prefix, index) => `${prefix}-${String(index).padStart(3, '0')}`;

const generateBaseContent = (id, type, title, category, tags) => {
  return {
    id,
    title,
    type,
    summary: `A comprehensive ${type.toLowerCase()} designed to help you with ${sample(GOALS).replace('-', ' ')}.`,
    thumbnail: `https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400&h=300`, // generic healthy food/lifestyle placeholder
    category,
    tags,
    goals: sampleMultiple(GOALS, randomInt(1, 3)),
    findings: [`finding-${randomInt(1, 10)}`, `finding-${randomInt(11, 20)}`],
    medicalConditions: randomInt(1, 10) > 8 ? [sample(CONDITIONS)] : [],
    foodPreferences: randomInt(1, 10) > 5 ? sampleMultiple(FOOD_PREFS, randomInt(1, 2)) : [],
    assessmentIds: [`assessment-${randomInt(1, 5)}`],
    priority: sample(PRIORITIES),
    journeyStage: sampleMultiple(STAGES, randomInt(1, 3)),
    estimatedMinutes: randomInt(3, 30),
    evidenceLevel: sample(EVIDENCE),
    difficulty: sample(DIFFICULTIES),
    featured: randomInt(1, 10) > 8,
    published: true,
    relatedContent: [],
    coachRecommended: randomInt(1, 10) > 7,
    version: '1.0.0',
    status: 'PUBLISHED',
    createdAt: new Date(Date.now() - randomInt(0, 10000000000)).toISOString(),
    updatedAt: new Date().toISOString()
  };
};

// Generate 50 Articles
const articles = [];
for (let i = 1; i <= 50; i++) {
  const base = generateBaseContent(generateId('art', i), 'ARTICLE', `The Science of ${sample(GOALS).replace('-', ' ')} - Part ${i}`, 'Education', ['science', 'wellness']);
  base.articleData = {
    htmlContent: `<p>This is the detailed HTML content for article ${i}. It covers important aspects of wellness.</p><p>Always consult your healthcare provider.</p>`,
    author: `Dr. ${sample(['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'])}`,
    readTimeMinutes: base.estimatedMinutes
  };
  articles.push(base);
}

// Generate 50 Recipes
const recipes = [];
for (let i = 1; i <= 50; i++) {
  const base = generateBaseContent(generateId('rec', i), 'RECIPE', `Healthy ${sample(['Bowl', 'Salad', 'Smoothie', 'Wrap', 'Soup'])} ${i}`, 'Nutrition', ['recipe', 'healthy', 'meal']);
  base.recipeData = {
    calories: randomInt(250, 700),
    proteinGrams: randomInt(10, 50),
    carbsGrams: randomInt(20, 80),
    fatsGrams: randomInt(10, 30),
    prepTimeMinutes: randomInt(5, 20),
    cookTimeMinutes: randomInt(0, 45),
    ingredients: ['1 cup spinach', '1/2 cup quinoa', '4oz protein', 'Olive oil'],
    instructions: ['Chop vegetables', 'Cook protein', 'Mix together', 'Serve warm'],
    dietary: base.foodPreferences
  };
  recipes.push(base);
}

// Generate 50 Habits
const habits = [];
for (let i = 1; i <= 50; i++) {
  const base = generateBaseContent(generateId('hab', i), 'HABIT', `Daily ${sample(['Stretching', 'Meditation', 'Hydration', 'Reading', 'Walking'])} ${i}`, 'Lifestyle', ['habit', 'daily']);
  base.habitData = {
    frequency: sample(['DAILY', 'WEEKLY', 'MONTHLY']),
    timeOfDay: sample(['MORNING', 'AFTERNOON', 'EVENING', 'ANYTIME']),
    instructions: `Try to build this habit by stacking it with an existing routine. Start with just ${base.estimatedMinutes} minutes.`
  };
  habits.push(base);
}

// Generate 20 Exercises
const exercises = [];
for (let i = 1; i <= 20; i++) {
  const base = generateBaseContent(generateId('exe', i), 'EXERCISE_GUIDE', `${sample(['Core', 'Upper Body', 'Lower Body', 'Full Body'])} Workout ${i}`, 'Fitness', ['workout', 'exercise', 'fitness']);
  base.exerciseData = {
    targetMuscleGroup: sampleMultiple(['Core', 'Legs', 'Back', 'Arms', 'Chest'], randomInt(1, 3)),
    equipmentNeeded: sampleMultiple(['Dumbbells', 'Mat', 'Resistance Band', 'None'], randomInt(1, 2)),
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    instructions: `Complete 3 sets of 10-12 repetitions. Focus on form over weight.`
  };
  exercises.push(base);
}

const writeOutput = (filename, varName, data) => {
  const filepath = path.join(__dirname, '..', 'src', 'data', 'knowledge', filename);
  const content = `import { KnowledgeContent } from '@/types/knowledge';\n\nexport const ${varName}: KnowledgeContent[] = ${JSON.stringify(data, null, 2)};\n`;
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content, 'utf8');
  console.log(`Generated ${filepath}`);
};

writeOutput('articles.ts', 'articles', articles);
writeOutput('recipes.ts', 'recipes', recipes);
writeOutput('habits.ts', 'habits', habits);
writeOutput('exercises.ts', 'exercises', exercises);

const indexContent = `export * from './articles';\nexport * from './recipes';\nexport * from './habits';\nexport * from './exercises';\n
import { articles } from './articles';
import { recipes } from './recipes';
import { habits } from './habits';
import { exercises } from './exercises';
import { KnowledgeContent } from '@/types/knowledge';

export const allKnowledgeContent: KnowledgeContent[] = [
  ...articles,
  ...recipes,
  ...habits,
  ...exercises
];
`;
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'knowledge', 'index.ts'), indexContent, 'utf8');
console.log('Generated index.ts');
