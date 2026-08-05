export const config = {
  version: '1.0',
  sections: [
    {
      id: 'physical_activity',
      title: 'Physical Activity',
      description: 'Evaluate whether the user performs enough regular physical activity to support long-term health and fitness.',
      order: 1
    },
    {
      id: 'cardiovascular_fitness',
      title: 'Cardiovascular Fitness',
      description: 'Assess the user\'s cardiovascular endurance and aerobic fitness.',
      order: 2
    },
    {
      id: 'mobility_functional_fitness',
      title: 'Mobility & Functional Fitness',
      description: 'Evaluate flexibility, mobility, balance, movement quality, and physical function.',
      order: 3
    },
    {
      id: 'lifestyle_motivation',
      title: 'Lifestyle & Motivation',
      description: 'Measure behavioural consistency, motivation, confidence, and long-term adherence to an active lifestyle.',
      order: 4
    }
  ]
};
