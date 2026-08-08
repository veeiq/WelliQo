export type LibraryImage = {
  id: string;
  category: "nutrition" | "sleep" | "movement" | "stress" | "gut" | "general";
  path: string;
  keywords: string[];
};

export const imageRegistry: LibraryImage[] = [
  {
    id: "protein-steak",
    category: "nutrition",
    path: "/images/library/nutrition/protein-steak.webp",
    keywords: ["protein","meat","beef","muscle"]
  },
  {
    id: "healthy-bowl",
    category: "nutrition",
    path: "/images/library/nutrition/healthy-bowl.webp",
    keywords: ["vegetables","bowl","healthy eating","lunch"]
  },
  {
    id: "fiber-salad",
    category: "nutrition",
    path: "/images/library/nutrition/fiber-salad.webp",
    keywords: ["salad","greens","fiber","gut health"]
  },
  {
    id: "berry-breakfast",
    category: "nutrition",
    path: "/images/library/nutrition/berry-breakfast.webp",
    keywords: ["berries","fruit","breakfast","antioxidants"]
  },
  {
    id: "sunrise-bedroom",
    category: "sleep",
    path: "/images/library/sleep/sunrise-bedroom.webp",
    keywords: ["bedroom","morning","light","waking up"]
  },
  {
    id: "sleeping-woman",
    category: "sleep",
    path: "/images/library/sleep/sleeping-woman.webp",
    keywords: ["sleep","rest","bed","night"]
  },
  {
    id: "morning-light",
    category: "sleep",
    path: "/images/library/sleep/morning-light.webp",
    keywords: ["morning","sunlight","circadian","window"]
  },
  {
    id: "cozy-bright-room",
    category: "sleep",
    path: "/images/library/sleep/cozy-bright-room.webp",
    keywords: ["room","cozy","interior","calm"]
  },
  {
    id: "gym-training",
    category: "movement",
    path: "/images/library/movement/gym-training.webp",
    keywords: ["gym","training","workout","fitness"]
  },
  {
    id: "fitness-workout",
    category: "movement",
    path: "/images/library/movement/fitness-workout.webp",
    keywords: ["exercise","active","sweat","cardio"]
  },
  {
    id: "heavy-weights",
    category: "movement",
    path: "/images/library/movement/heavy-weights.webp",
    keywords: ["weights","lifting","strength","dumbbells"]
  },
  {
    id: "core-pushups",
    category: "movement",
    path: "/images/library/movement/core-pushups.webp",
    keywords: ["pushups","core","bodyweight","training"]
  },
  {
    id: "gym-equipment",
    category: "movement",
    path: "/images/library/movement/gym-equipment.webp",
    keywords: ["equipment","gym","iron","weights"]
  },
  {
    id: "yoga-stretching",
    category: "stress",
    path: "/images/library/stress/yoga-stretching.webp",
    keywords: ["yoga","stretching","flexibility","calm"]
  },
  {
    id: "meditation-nature",
    category: "stress",
    path: "/images/library/stress/meditation-nature.webp",
    keywords: ["meditation","nature","mindfulness","peace"]
  },
  {
    id: "calm-tea",
    category: "stress",
    path: "/images/library/stress/calm-tea.webp",
    keywords: ["tea","calm","relax","warm"]
  },
  {
    id: "reading-brain",
    category: "stress",
    path: "/images/library/stress/reading-brain.webp",
    keywords: ["reading","book","brain","focus"]
  },
  {
    id: "healthy-pasta",
    category: "gut",
    path: "/images/library/gut/healthy-pasta.webp",
    keywords: ["pasta","carbs","meal","dinner"]
  },
  {
    id: "broth-soup",
    category: "gut",
    path: "/images/library/gut/broth-soup.webp",
    keywords: ["soup","broth","warm","digestion"]
  },
  {
    id: "smoothie-snack",
    category: "gut",
    path: "/images/library/gut/smoothie-snack.webp",
    keywords: ["smoothie","drink","snack","blended"]
  },
  {
    id: "fruit-bowl",
    category: "gut",
    path: "/images/library/gut/fruit-bowl.webp",
    keywords: ["fruit","bowl","fresh","sweet"]
  },
  {
    id: "water-glass",
    category: "gut",
    path: "/images/library/gut/water-glass.webp",
    keywords: ["water","hydration","glass","clear"]
  }
];
