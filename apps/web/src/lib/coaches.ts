export interface Coach {
  id: string;
  slug: string;
  name: string;
  photo: string;
  expertise: string;
  languages: string[];
  city?: string;
  shortIntro: string;
  fullBio: string;
}

export const COACHES: Coach[] = [
  {
    id: 'coach-alok',
    slug: 'alok',
    name: 'Coach Alok',
    photo: 'A', // Placeholder for avatar
    expertise: 'Metabolic Health & Systems Architecture',
    languages: ['English', 'Hindi'],
    city: 'Mumbai',
    shortIntro: 'Bringing systems thinking to human performance and wellness.',
    fullBio:
      'Alok brings a deep understanding of systems architecture combined with a passion for metabolic health and circadian optimization. With over 10 years of engineering experience, he focuses on the intersection of data-driven habits and human performance. Health is a system. You cannot optimize one part without understanding the whole.',
  },
  {
    id: 'coach-priya',
    slug: 'priya',
    name: 'Coach Priya',
    photo: 'P',
    expertise: 'Clinical Nutrition & Holistic Wellness',
    languages: ['English', 'Hindi', 'Marathi'],
    city: 'Pune',
    shortIntro: 'Sustainable, realistic nutritional interventions for everyday life.',
    fullBio:
      "Priyadarshini focuses on sustainable, realistic nutritional interventions that fit into everyday life. She is an advocate for holistic wellness, believing that mental resilience and physical health are deeply interconnected. Nourishment isn't just about what you eat; it's about how you digest, move, and think.",
  },
  {
    id: 'coach-dipti',
    slug: 'dipti',
    name: 'Coach Dipti',
    photo: 'D',
    expertise: "Women's Health & Hormonal Balance",
    languages: ['English', 'Gujarati'],
    city: 'Ahmedabad',
    shortIntro: 'Empowering women through targeted nutrition and lifestyle changes.',
    fullBio:
      "Dipti specializes in women's health, focusing on hormonal balance, postpartum recovery, and sustainable energy management. Her compassionate approach helps clients build resilience and vitality through mindful habit changes.",
  },
];
