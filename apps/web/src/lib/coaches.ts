export interface Coach {
  id: string;
  slug: string;
  name: string;
  photo: string;
  avatarUrl?: string;
  expertise: string;
  languages: string[];
  city?: string;
  experience?: string;
  timings?: string;
  phone?: string;
  email?: string;
  shortIntro: string;
  fullBio: string;
}

export const COACHES: Coach[] = [
  {
    id: 'coach-priya',
    slug: 'priya',
    name: 'Wellness Coach Priya',
    photo: 'P',
    avatarUrl: '/images/coaches/priya.jpg',
    expertise: 'Herbalife Wellness Coach',
    languages: ['English', 'Hindi', 'Odia'],
    city: 'Pune',
    experience: '5+ Years Experience',
    timings: '6:00 AM - 6:00 PM',
    phone: '919337616265',
    email: 'priya@welliqo.com',
    shortIntro: 'Having experience as a Herbalife Wellness Coach, training 200+ people physically on a regular basis and impacting the lives of 1000+ people virtually.',
    fullBio:
      'Priyadarshini focuses on sustainable, realistic nutritional interventions that fit into everyday life. She is an advocate for holistic wellness, believing that mental resilience and physical health are deeply interconnected. Nourishment isn\'t just about what you eat; it\'s about how you digest, move, and think.',
  },
  {
    id: 'coach-dipti',
    slug: 'dipti',
    name: 'Wellness Coach Dipti',
    photo: 'D',
    avatarUrl: '/images/coaches/dipti.jpg',
    expertise: 'Weight Management Coach',
    languages: ['English', 'Hindi', 'Odia'],
    city: 'Ahmedabad',
    experience: '5+ Years Experience',
    timings: '6:00 AM - 6:00 PM',
    phone: '917008183356',
    email: 'dipti@welliqo.com',
    shortIntro: 'Dedicated weight management specialist focused on sustainable lifestyle changes. Experienced in creating personalized wellness plans for diverse needs.',
    fullBio:
      'Dipti specializes in women\'s health, focusing on hormonal balance, postpartum recovery, and sustainable energy management. Her compassionate approach helps clients build resilience and vitality through mindful habit changes.',
  },
];
