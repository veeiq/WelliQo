export type KnowledgeType = 'ARTICLE' | 'RECIPE' | 'HABIT' | 'EXERCISE_GUIDE' | 'MEAL_PLAN' | 'SHOPPING_LIST' | 'FAQ' | 'COACH_TIP' | 'VIDEO' | 'DOWNLOAD' | 'CHALLENGE';
export type ContentStatus = 'DRAFT' | 'REVIEW' | 'PUBLISHED' | 'ARCHIVED';
export type ContentPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
export type JourneyStage = 'BEGINNER' | 'IMPROVING' | 'CONSISTENT' | 'ADVANCED';
export type EvidenceLevel = 'BEGINNER_EDUCATION' | 'WELL_ESTABLISHED' | 'EMERGING_EVIDENCE' | 'EXPERT_OPINION';
export type ContentDifficulty = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';

export interface KnowledgeContent {
  id: string;
  title: string;
  type: KnowledgeType;
  summary: string;
  thumbnail: string;
  category: string;
  
  // Taxonomy & Matching
  tags: string[];          
  goals: string[];         
  findings: string[];      
  medicalConditions: string[]; 
  foodPreferences: string[]; 
  assessmentIds: string[];   // Exposed in UI as "Related Assessments"
  
  // Advanced Ranking & Experience
  priority: ContentPriority;
  journeyStage: JourneyStage[];
  estimatedMinutes: number;
  evidenceLevel: EvidenceLevel;
  difficulty: ContentDifficulty;
  
  featured: boolean;
  published: boolean;
  relatedContent: string[];  // Graph linking IDs
  coachRecommended: boolean;
  
  // Versioning
  version: string;
  status: ContentStatus;
  
  // Specific data by type
  articleData?: {
    htmlContent: string;
    author: string;
    readTimeMinutes: number;
  };
  recipeData?: {
    calories: number;
    proteinGrams: number;
    carbsGrams: number;
    fatsGrams: number;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    ingredients: string[];
    instructions: string[];
    dietary: string[];
  };
  habitData?: {
    frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY';
    timeOfDay: 'MORNING' | 'AFTERNOON' | 'EVENING' | 'ANYTIME';
    instructions: string;
  };
  exerciseData?: {
    targetMuscleGroup: string[];
    equipmentNeeded: string[];
    videoUrl?: string;
    instructions: string;
  };
  
  createdAt: string;
  updatedAt: string;
}
