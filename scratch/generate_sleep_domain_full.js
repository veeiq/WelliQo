const fs = require('fs');
const path = require('path');

const dir = 'e:/VeeiQ Technologies/Websites/WelliQo/packages/intelligence/src/domains/sleep';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const questions = [];
const facts = [];
const insights = [];
const scores = [];
const decisions = [];
const recommendations = [];

function addScenario({ idStr, section, topic, qLabel, options, humanMoment, coachThinking, dependsOn, firstStep, whyFirstStepMatters, successVision, requiredFactsForRec }) {
  const qId = `q:slp:${idStr}:primary`;
  const fId = `fact:slp:${idStr}:struggle`;
  const iId = `insight:slp:${idStr}:impact`;
  const dId = `dec:slp:${idStr}:clinical`;
  const rId = `rec:slp:${idStr}:action`;
  const sId = `score:slp:restoration`;

  questions.push({
    id: qId,
    purpose: `Assess ${topic} within ${section}`,
    label: qLabel,
    type: 'single-choice',
    tags: ['sleep', section.toLowerCase().replace(/ /g, '_')],
    dependsOn: dependsOn,
    coachThinking,
    humanMoment,
    createsFacts: [fId],
    supportsScores: [sId],
    supportsInsights: [iId],
    supportsDecisions: [dId],
    supportsRecommendations: [rId],
    expectedConfidenceGain: 10,
    options: options
  });

  facts.push({ id: fId, description: `${section} - ${topic}`, generatedFrom: [qId], tags: ['sleep', 'barrier'], usedBy: [iId, sId, dId], confidenceImpact: 15 });
  insights.push({ id: iId, name: `${topic} Barrier`, meaning: `Indicates that ${topic} is an active roadblock for their sleep quality.`, requiredFacts: [fId], confidence: 80, linkedScores: [sId], linkedDecisions: [dId] });
  decisions.push({ id: dId, clinicalMeaning: `Requires protocol for ${topic}`, requiredFacts: [fId], confidence: 90, severity: 'medium', priority: 2, linkedRecommendations: [rId] });

  recommendations.push({ 
    id: rId, 
    title: `Improving ${topic}`, 
    description: `Targeted approach for ${topic.toLowerCase()}.`, 
    priority: 2, 
    evidenceLevel: 'coaching', 
    linkedDecisions: [dId],
    requiredFacts: requiredFactsForRec,
    whyWeThinkThis: `You indicated that ${topic.toLowerCase()} is actively impacting your sleep right now.`,
    firstStep,
    whyFirstStepMatters,
    successVision,
    coachSupportTiming: `If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle.`
  });
}

// Q001
addScenario({
  idStr: 'q001_wake_feeling', section: 'How Does Your Sleep Feel', topic: 'Waking exhaustion',
  qLabel: 'How do you usually feel when you wake up?',
  options: [
    { id: 'opt:slp:q1:fresh', label: 'Fresh and active', value: 'fresh' },
    { id: 'opt:slp:q1:okay', label: 'Okay', value: 'okay' },
    { id: 'opt:slp:q1:tired', label: 'Still tired', value: 'tired' },
    { id: 'opt:slp:q1:exhausted', label: 'Completely exhausted', value: 'exhausted' }
  ],
  humanMoment: 'Waking up exhausted is incredibly demoralizing. It feels like you are starting the race behind everyone else.',
  coachThinking: 'Assess baseline sleep architecture and restorative quality regardless of total duration.',
  firstStep: 'Get 5 minutes of direct sunlight in your eyes within 30 minutes of waking.',
  whyFirstStepMatters: 'Sunlight resets your circadian clock and triggers a natural cortisol spike, ending sleep inertia.',
  successVision: 'You will wake up feeling refreshed and ready to go without hitting snooze.'
});

// Q002
addScenario({
  idStr: 'q002_fall_asleep_time', section: 'How Does Your Sleep Feel', topic: 'Sleep onset latency',
  qLabel: 'About how long does it usually take you to fall asleep?',
  options: [
    { id: 'opt:slp:q2:fast', label: 'Less than 15 minutes', value: 'fast' },
    { id: 'opt:slp:q2:normal', label: '15–30 minutes', value: 'normal' },
    { id: 'opt:slp:q2:slow', label: '30–60 minutes', value: 'slow' },
    { id: 'opt:slp:q2:severe', label: 'More than an hour', value: 'severe' }
  ],
  humanMoment: 'Lying awake in the dark is terribly lonely. When sleep takes over an hour, the bed starts to feel like a stressful place.',
  coachThinking: 'Assess sleep onset latency. If >30 mins, highly suggestive of sympathetic overdrive or circadian delay.',
  firstStep: 'If you aren\'t asleep in 20 minutes, get out of bed and read a physical book in dim light.',
  whyFirstStepMatters: 'You must break the psychological association that your bed is a place for stress and being awake.',
  successVision: 'Your brain will relearn that the bed is strictly for sleeping, drastically reducing the time it takes to drift off.'
});

// Q003
addScenario({
  idStr: 'q003_wake_frequency', section: 'How Does Your Sleep Feel', topic: 'Sleep fragmentation',
  qLabel: 'How many times do you usually wake up during the night?',
  options: [
    { id: 'opt:slp:q3:none', label: 'Rarely or never', value: 'none' },
    { id: 'opt:slp:q3:once', label: 'Once or twice', value: 'once' },
    { id: 'opt:slp:q3:many', label: 'Three or more times', value: 'many' }
  ],
  humanMoment: 'Waking up multiple times shatters your deepest phases of rest. You might technically be in bed for 8 hours, but it feels like 3.',
  coachThinking: 'Sleep maintenance insomnia. Usually tied to blood sugar drops, bladder issues, or environmental disturbances.',
  firstStep: 'Eat a small spoonful of peanut butter or a handful of almonds 30 minutes before bed.',
  whyFirstStepMatters: 'Protein and fat stabilize your blood sugar overnight, preventing the adrenaline spikes that wake you up.',
  successVision: 'You will sleep solidly through the night without waking up in a panic.'
});

// Q004
addScenario({
  idStr: 'q004_fall_asleep_again', section: 'How Does Your Sleep Feel', topic: 'Return to sleep latency',
  qLabel: 'If you wake up, can you fall asleep again easily?',
  options: [
    { id: 'opt:slp:q4:yes', label: 'Yes, very easily', value: 'yes' },
    { id: 'opt:slp:q4:sometimes', label: 'Sometimes', value: 'sometimes' },
    { id: 'opt:slp:q4:no', label: 'No, it takes a long time', value: 'no' }
  ],
  humanMoment: 'Waking up at 3 AM and doing the math on how much sleep you are losing is incredibly stressful.',
  coachThinking: 'Cortisol spike during the night. The user is entering problem-solving mode instead of resting mode.',
  firstStep: 'Turn your clock face away from you. Do not check the time when you wake up.',
  whyFirstStepMatters: 'Seeing the time instantly triggers mental math and anxiety, flooding your brain with cortisol and destroying your chances of sleeping.',
  successVision: 'You will learn to drift comfortably back to sleep without panicking about tomorrow.'
});

// Q005
addScenario({
  idStr: 'q005_early_waking', section: 'How Does Your Sleep Feel', topic: 'Terminal insomnia',
  qLabel: 'Do you wake up before your alarm?',
  options: [
    { id: 'opt:slp:q5:always', label: 'Always', value: 'always' },
    { id: 'opt:slp:q5:sometimes', label: 'Sometimes', value: 'sometimes' },
    { id: 'opt:slp:q5:never', label: 'Never', value: 'never' }
  ],
  humanMoment: 'Waking up at 5 AM when you don\'t have to is infuriating. Your body is ready, but you know you need more rest.',
  coachThinking: 'Terminal insomnia. Can be an indicator of depression, massive stress, or circadian phase advance.',
  firstStep: 'Ensure your bedroom is completely pitch black. Use blackout curtains or a high-quality eye mask.',
  whyFirstStepMatters: 'Even a tiny amount of early morning light hitting your eyelids will signal your brain to halt melatonin production permanently for the day.',
  successVision: 'You will successfully stay asleep until your alarm actually goes off.'
});

// Q006
addScenario({
  idStr: 'q006_phone_in_bed', section: 'What Happens Before Bed', topic: 'Device usage',
  qLabel: 'How often do you use your phone or laptop in bed?',
  options: [
    { id: 'opt:slp:q6:always', label: 'Every night', value: 'always' },
    { id: 'opt:slp:q6:sometimes', label: 'A few nights a week', value: 'sometimes' },
    { id: 'opt:slp:q6:never', label: 'Rarely or never', value: 'never' }
  ],
  humanMoment: 'Doomscrolling in bed is often the only time you get to disconnect from the real world. It\'s hard to give up.',
  coachThinking: 'Blue light exposure and dopamine stimulation actively block melatonin synthesis.',
  firstStep: 'Buy a cheap physical alarm clock and charge your phone in the bathroom overnight.',
  whyFirstStepMatters: 'Physical distance is the only reliable way to break the dopamine loop of late-night scrolling.',
  successVision: 'You will fall asleep faster and your brain will feel significantly less scattered in the morning.'
});

// Q007
addScenario({
  idStr: 'q007_racing_thoughts', section: 'What Happens Before Bed', topic: 'Racing thoughts',
  qLabel: 'Do your thoughts keep running when you try to sleep?',
  options: [
    { id: 'opt:slp:q7:yes', label: 'Yes, almost always', value: 'yes' },
    { id: 'opt:slp:q7:sometimes', label: 'Sometimes', value: 'sometimes' },
    { id: 'opt:slp:q7:no', label: 'No, my mind is calm', value: 'no' }
  ],
  humanMoment: 'It\'s maddening when your body is exhausted but your brain refuses to shut off.',
  coachThinking: 'Sympathetic nervous system overdrive. Need cognitive offloading.',
  firstStep: 'Keep a notebook by your bed and do a physical "brain dump" of every thought before lying down.',
  whyFirstStepMatters: 'Writing things down removes the burden from your working memory, signaling safety to your brain.',
  successVision: 'You will fall asleep peacefully within 15 minutes of your head hitting the pillow.'
});

// Q008
addScenario({
  idStr: 'q008_stress_bedtime', section: 'What Happens Before Bed', topic: 'Bedtime stress',
  qLabel: 'Do you feel stressed at bedtime?',
  options: [
    { id: 'opt:slp:q8:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q8:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'Carrying the weight of the day into bed makes rest impossible. You deserve to lay that burden down.',
  coachThinking: 'Lack of transition boundaries between output mode and recovery mode.',
  firstStep: 'Take a hot shower or bath 60 minutes before bed.',
  whyFirstStepMatters: 'The rapid drop in core body temperature after you get out of the warm water acts as a physiological sleep trigger.',
  successVision: 'You will feel physically heavy and deeply relaxed before getting into bed.'
});

// Q009
addScenario({
  idStr: 'q009_tv_before_bed', section: 'What Happens Before Bed', topic: 'TV consumption',
  qLabel: 'Do you usually watch TV before sleeping?',
  options: [
    { id: 'opt:slp:q9:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q9:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'Binge-watching shows is a great way to numb out after a hard day, but it forces your brain to stay highly active.',
  coachThinking: 'Passive screen time vs active scrolling. Still a light issue, but also content-driven adrenaline (thrillers, news).',
  firstStep: 'Switch to purely lighthearted or comedic shows in the final hour, avoiding news or intense drama.',
  whyFirstStepMatters: 'Intense plotlines trigger adrenaline, which directly counteracts your natural sleep drive.',
  successVision: 'You will enjoy your downtime without accidentally telling your nervous system there is an emergency.'
});

// Q010
addScenario({
  idStr: 'q010_regular_bedtime', section: 'What Happens Before Bed', topic: 'Bedtime consistency',
  qLabel: 'Do you have a regular bedtime?',
  options: [
    { id: 'opt:slp:q10:yes', label: 'Yes, almost exactly the same every night', value: 'yes' },
    { id: 'opt:slp:q10:varies', label: 'It varies slightly', value: 'varies' },
    { id: 'opt:slp:q10:no', label: 'No, it changes constantly', value: 'no' }
  ],
  humanMoment: 'Life is chaotic, and maintaining a strict schedule can feel impossible when things pop up.',
  coachThinking: 'Circadian rhythm stability relies entirely on consistency.',
  firstStep: 'Pick a rigid wake-up time, even on weekends, rather than focusing on a strict bedtime.',
  whyFirstStepMatters: 'A rigid wake time anchors your circadian clock far more effectively than trying to force yourself to sleep early.',
  successVision: 'Your body will naturally start getting sleepy at the right time, rather than you having to force it.'
});

// Q011
addScenario({
  idStr: 'q011_bedroom_noise', section: 'Your Sleep Environment', topic: 'Noise levels',
  qLabel: 'Is your bedroom usually:',
  options: [
    { id: 'opt:slp:q11:quiet', label: 'Quiet', value: 'quiet' },
    { id: 'opt:slp:q11:little', label: 'A little noisy', value: 'little' },
    { id: 'opt:slp:q11:very', label: 'Very noisy', value: 'very' }
  ],
  humanMoment: 'Living in a noisy environment or near traffic puts your brain on constant alert, even while unconscious.',
  coachThinking: 'Environmental disruption. Need acoustic masking.',
  firstStep: 'Invest in a white noise machine or play continuous brown noise on a speaker.',
  whyFirstStepMatters: 'White noise masks sudden environmental sounds (like a door slamming or a car honking) that would normally spike your heart rate and wake you up.',
  successVision: 'You will sleep much deeper, unaffected by the chaos of the environment outside.'
});

// Q012
addScenario({
  idStr: 'q012_disturbances', section: 'Your Sleep Environment', topic: 'Partner/Pet disturbance',
  qLabel: 'Does anyone disturb your sleep?',
  options: [
    { id: 'opt:slp:q12:partner', label: 'Partner', value: 'partner' },
    { id: 'opt:slp:q12:children', label: 'Children', value: 'children' },
    { id: 'opt:slp:q12:pets', label: 'Pets', value: 'pets' },
    { id: 'opt:slp:q12:nobody', label: 'Nobody', value: 'nobody' }
  ],
  humanMoment: 'We love our family and pets, but having them constantly wake you up is a recipe for deep resentment and exhaustion.',
  coachThinking: 'Social sleep disruption. Boundaries need to be established for biological health.',
  firstStep: 'Establish a firm "no pets in the bed" rule, or consider sleeping in a separate bed from your partner two nights a week.',
  whyFirstStepMatters: 'Your biological need for uninterrupted sleep must take priority over social conventions.',
  successVision: 'You will finally get uninterrupted stretches of deep sleep, improving your mood and your relationships.'
});

// Q013
addScenario({
  idStr: 'q013_snoring', section: 'Your Sleep Environment', topic: 'Snoring',
  qLabel: 'Do you snore?',
  options: [
    { id: 'opt:slp:q13:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q13:no', label: 'No', value: 'no' },
    { id: 'opt:slp:q13:unsure', label: 'Not sure', value: 'unsure' }
  ],
  humanMoment: 'Snoring isn\'t just annoying for your partner; it means your body is physically struggling to get oxygen while you rest.',
  coachThinking: 'Red flag for obstructive sleep apnea. Need clinical referral or mechanical intervention.',
  firstStep: 'Try sleeping on your side using a body pillow to prevent rolling onto your back.',
  whyFirstStepMatters: 'Gravity pulls the soft tissue of your throat down when on your back, causing snoring. Side sleeping immediately opens the airway.',
  successVision: 'You will wake up feeling far more oxygenated and less groggy.'
});

// Q014
addScenario({
  idStr: 'q014_dry_mouth', section: 'Your Sleep Environment', topic: 'Mouth breathing',
  qLabel: 'Do you wake up with a dry mouth?',
  options: [
    { id: 'opt:slp:q14:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q14:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'Waking up feeling like you swallowed sand means you were breathing through your mouth, which triggers a stress response in your sleep.',
  coachThinking: 'Nasal breathing is mandatory for parasympathetic nervous system activation during sleep.',
  firstStep: 'Try using a nasal strip across the bridge of your nose at night.',
  whyFirstStepMatters: 'Nasal breathing increases nitric oxide and oxygenizes your blood significantly better than mouth breathing.',
  successVision: 'You will achieve significantly deeper, restorative sleep stages.'
});

// Q015
addScenario({
  idStr: 'q015_room_temp', section: 'Your Sleep Environment', topic: 'Temperature regulation',
  qLabel: 'Does your room feel too hot or too cold?',
  options: [
    { id: 'opt:slp:q15:hot', label: 'Too hot', value: 'hot' },
    { id: 'opt:slp:q15:cold', label: 'Too cold', value: 'cold' },
    { id: 'opt:slp:q15:fine', label: 'Just right', value: 'fine' }
  ],
  humanMoment: 'Waking up sweating or shivering is terrible. Your brain is highly sensitive to temperature during rest.',
  coachThinking: 'Core body temperature must drop by 1-2 degrees to initiate and maintain sleep.',
  firstStep: 'Set your thermostat to 65°F (18°C) or sleep with a fan pointing near you.',
  whyFirstStepMatters: 'A cold room physically forces your core temperature to drop, which is the primary biological trigger for deep sleep.',
  successVision: 'You will fall asleep faster and stay in the deep sleep phase much longer.'
});

// Q016
addScenario({
  idStr: 'q016_last_meal', section: 'Food & Drink', topic: 'Late meals',
  qLabel: 'When do you usually have your last meal?',
  options: [
    { id: 'opt:slp:q16:early', label: 'More than 3 hours before bed', value: 'early' },
    { id: 'opt:slp:q16:late', label: '1–2 hours before bed', value: 'late' },
    { id: 'opt:slp:q16:bedtime', label: 'Right before sleeping', value: 'bedtime' }
  ],
  humanMoment: 'Eating late is often the only time we have to truly relax and enjoy food. But digesting a heavy meal is hard work for your body.',
  coachThinking: 'Digestion raises core temperature and heart rate, directly antagonizing sleep architecture.',
  firstStep: 'Shift your dinner at least 2.5 hours before you intend to sleep.',
  whyFirstStepMatters: 'This gives your stomach time to empty, lowering your heart rate and core temperature before you lie down.',
  successVision: 'You will wake up feeling lighter, rather than groggy and bloated.'
});

// Q017
addScenario({
  idStr: 'q017_coffee_timing', section: 'Food & Drink', topic: 'Caffeine timing',
  qLabel: 'Do you drink coffee after 4 PM?',
  options: [
    { id: 'opt:slp:q17:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q17:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'The afternoon slump is real, and coffee is the easiest fix. But it secretly ruins your night.',
  coachThinking: 'Caffeine has a quarter-life of 10-12 hours. Afternoon coffee means high blood caffeine at midnight.',
  firstStep: 'Set a hard cut-off for all caffeine at 2 PM.',
  whyFirstStepMatters: 'Your brain needs time to clear the caffeine from your adenosine receptors so you can actually feel sleepy naturally.',
  successVision: 'You will easily drift off to sleep rather than lying in bed feeling "tired but wired."'
});

// Q018
addScenario({
  idStr: 'q018_alcohol_night', section: 'Food & Drink', topic: 'Alcohol before bed',
  qLabel: 'Do you drink alcohol at night?',
  options: [
    { id: 'opt:slp:q18:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q18:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'A drink is the fastest chemical way to shut off an anxious brain. It makes sense why it feels helpful, but it betrays you later.',
  coachThinking: 'Alcohol fragments REM sleep and destroys deep sleep architecture. Sedation is not sleep.',
  firstStep: 'Swap the evening drink for a hot shower or a cup of magnesium-based tea.',
  whyFirstStepMatters: 'Magnesium chemically relaxes your muscles and central nervous system without destroying your sleep architecture.',
  successVision: 'You will get true, restorative sleep and wake up with vastly more energy.'
});

// Q019
addScenario({
  idStr: 'q019_hungry_sleep', section: 'Food & Drink', topic: 'Hunger at bedtime',
  qLabel: 'Do you feel hungry when trying to sleep?',
  options: [
    { id: 'opt:slp:q19:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q19:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'Trying to sleep while your stomach is growling is miserable and keeps your brain on high alert.',
  coachThinking: 'Caloric restriction or poor macro timing leads to nighttime hypoglycemia.',
  firstStep: 'Eat more protein and fibrous vegetables during your daytime meals.',
  whyFirstStepMatters: 'Adequate daytime fueling prevents the nighttime blood sugar crash that triggers hunger pangs in bed.',
  successVision: 'You will go to bed feeling satisfied and sleep without interruption.'
});

// Q020
addScenario({
  idStr: 'q020_daytime_water', section: 'Food & Drink', topic: 'Hydration impact',
  qLabel: 'Do you drink enough water during the day?',
  options: [
    { id: 'opt:slp:q20:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q20:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'It is so easy to forget to drink water until you are suddenly incredibly thirsty right before bed.',
  coachThinking: 'Backloading hydration causes nocturia (frequent urination at night), ruining sleep maintenance.',
  firstStep: 'Front-load your hydration: Drink 3 big glasses of water before noon, and taper off after dinner.',
  whyFirstStepMatters: 'Getting hydrated early prevents the desperate need to chug water at 9 PM, saving you from bathroom trips at 3 AM.',
  successVision: 'You will sleep through the entire night without needing to get out of bed.'
});

// Shared Restoration Score
scores.push({
  id: `score:slp:restoration`,
  name: `Sleep & Restoration Score`,
  description: `Measures overall sleep quality and recovery capacity.`,
  baseValue: 80,
  rules: facts.map(f => ({ requiredFacts: [f.id], valueModifier: -2 }))
});

// BATCH 2

// Q021
addScenario({
  idStr: 'q021_wake_time', section: 'Daily Routine', topic: 'Wake time consistency',
  qLabel: 'What time do you usually wake up?',
  options: [
    { id: 'opt:slp:q21:early', label: 'Before 6 AM', value: 'early' },
    { id: 'opt:slp:q21:normal', label: '6 AM - 8 AM', value: 'normal' },
    { id: 'opt:slp:q21:late', label: 'After 8 AM', value: 'late' }
  ],
  humanMoment: 'Waking up is hard enough without feeling like you are already behind schedule.',
  coachThinking: 'Establishing circadian anchor point. Wake time is the most critical biological signal.',
  firstStep: 'Regardless of when you wake up, expose your eyes to bright light immediately.',
  whyFirstStepMatters: 'Light exposure is the switch that stops melatonin production and starts your daytime cortisol curve.',
  successVision: 'Your body will naturally expect to wake up at this time, making mornings far less painful.'
});

// Q022
addScenario({
  idStr: 'q022_bed_time', section: 'Daily Routine', topic: 'Bedtime alignment',
  qLabel: 'What time do you usually go to bed?',
  options: [
    { id: 'opt:slp:q22:early', label: 'Before 10 PM', value: 'early' },
    { id: 'opt:slp:q22:normal', label: '10 PM - 12 AM', value: 'normal' },
    { id: 'opt:slp:q22:late', label: 'After Midnight', value: 'late' }
  ],
  humanMoment: 'Fighting the clock to get enough hours of sleep is incredibly stressful when your day runs long.',
  coachThinking: 'Assess sleep window opportunity relative to wake time (chronotype vs social obligation).',
  firstStep: 'Work backward 8 hours from your mandatory wake time, and set a "winding down" alarm 1 hour before that.',
  whyFirstStepMatters: 'You cannot abruptly transition from "active" to "asleep." You must schedule the cooldown period.',
  successVision: 'You will transition into sleep smoothly rather than feeling rushed and anxious.'
});

// Q023
addScenario({
  idStr: 'q023_sleep_consistency', section: 'Daily Routine', topic: 'Sleep consistency',
  qLabel: 'Do you sleep at the same time every day?',
  options: [
    { id: 'opt:slp:q23:always', label: 'Always', value: 'always' },
    { id: 'opt:slp:q23:most', label: 'Most days', value: 'most' },
    { id: 'opt:slp:q23:rarely', label: 'Rarely', value: 'rarely' },
    { id: 'opt:slp:q23:never', label: 'Never', value: 'never' }
  ],
  humanMoment: 'When every day brings different demands, maintaining a strict sleep schedule feels like an impossible luxury.',
  coachThinking: 'Social jetlag and circadian arrhythmia. Consistency matters more than total duration for sleep quality.',
  firstStep: 'Anchor your wake time to the exact same 30-minute window every single day, including weekends.',
  whyFirstStepMatters: 'A rigid wake time forces your sleep drive (adenosine) to build at a predictable rate, naturally regulating your bedtime over time.',
  successVision: 'Your energy levels will become highly predictable, eliminating the "Monday morning hangover."'
});

// Q024
addScenario({
  idStr: 'q024_naps', section: 'Daily Routine', topic: 'Daytime naps',
  qLabel: 'Do you usually take naps?',
  options: [
    { id: 'opt:slp:q24:never', label: 'Never', value: 'never' },
    { id: 'opt:slp:q24:sometimes', label: 'Sometimes', value: 'sometimes' },
    { id: 'opt:slp:q24:always', label: 'Almost every day', value: 'always' }
  ],
  humanMoment: 'A nap can feel like a total lifesaver when you are completely depleted, but it often leaves you groggy.',
  coachThinking: 'Napping relieves sleep pressure (adenosine). If taken too late, it destroys nighttime sleep onset.',
  firstStep: 'Limit any daytime rest to a strict 20-minute "power nap" before 3 PM.',
  whyFirstStepMatters: 'Sleeping longer than 20 minutes drops you into deep sleep, causing severe grogginess when you wake and ruining your ability to sleep that night.',
  successVision: 'You will get a true mental refresh without sacrificing your nighttime rest.'
});

// Q025
addScenario({
  idStr: 'q025_nap_length', section: 'Daily Routine', topic: 'Nap duration',
  qLabel: 'If you nap, how long do you usually sleep?',
  options: [
    { id: 'opt:slp:q25:short', label: 'Less than 30 minutes', value: 'short' },
    { id: 'opt:slp:q25:long', label: '30 - 60 minutes', value: 'long' },
    { id: 'opt:slp:q25:deep', label: 'More than an hour', value: 'deep' }
  ],
  humanMoment: 'Waking up from a 2-hour nap feeling confused about what year it is completely ruins the rest of your day.',
  coachThinking: 'Deep sleep inertia. User is entering Slow Wave Sleep during the day due to severe sleep debt.',
  firstStep: 'Drink a small cup of coffee right before taking a 20-minute nap ("nappuccino").',
  whyFirstStepMatters: 'Caffeine takes 20 minutes to hit your brain. When you wake up, the sleep pressure is cleared AND the caffeine kicks in simultaneously.',
  successVision: 'You will wake up from your nap feeling sharp, focused, and immediately ready to go.'
});

// Q026
addScenario({
  idStr: 'q026_morning_sunlight', section: 'Morning', topic: 'Circadian light exposure',
  qLabel: 'Do you get sunlight within one hour of waking up?',
  options: [
    { id: 'opt:slp:q26:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q26:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'Rushing to get ready in a dark house or apartment means you start your day without your body actually knowing it is morning.',
  coachThinking: 'Absence of lux exposure delays the cortisol peak, causing morning lethargy and delayed melatonin onset at night.',
  firstStep: 'Spend 5-10 minutes outside or looking out a window immediately after waking.',
  whyFirstStepMatters: 'Sunlight contains specific blue-light frequencies that signal the suprachiasmatic nucleus in your brain to start the 14-hour countdown to sleep.',
  successVision: 'You will naturally feel sleepy at a reasonable hour every night.'
});

// Q027
addScenario({
  idStr: 'q027_first_coffee', section: 'Morning', topic: 'Caffeine timing',
  qLabel: 'How soon after waking do you drink your first coffee or tea?',
  options: [
    { id: 'opt:slp:q27:immediate', label: 'Immediately', value: 'immediate' },
    { id: 'opt:slp:q27:delayed', label: 'After an hour or more', value: 'delayed' },
    { id: 'opt:slp:q27:never', label: 'I do not drink caffeine', value: 'never' }
  ],
  humanMoment: 'Coffee is often the only thing that makes getting out of bed bearable. It feels essential.',
  coachThinking: 'Immediate caffeine blocks adenosine receptors before natural clearance, guaranteeing an afternoon crash.',
  firstStep: 'Delay your first cup of coffee by 90 minutes after waking up.',
  whyFirstStepMatters: 'Waiting allows your body to naturally clear out the sleepiness chemicals (adenosine) first, preventing a massive crash later.',
  successVision: 'You will have smooth, sustained energy all day without needing a 3 PM coffee.'
});

// Q028
addScenario({
  idStr: 'q028_morning_sleepy', section: 'Morning', topic: 'Morning fatigue',
  qLabel: 'Do you usually feel sleepy during the morning?',
  options: [
    { id: 'opt:slp:q28:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q28:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'Sitting at your desk struggling to keep your eyes open at 10 AM makes the day feel impossibly long.',
  coachThinking: 'Sleep inertia or insufficient deep sleep. The brain has not fully transitioned to wakefulness.',
  firstStep: 'Do 3 minutes of light stretching or jumping jacks before you start your workday.',
  whyFirstStepMatters: 'Physical movement increases heart rate and blood flow, physically forcing the remaining sleep inertia out of your system.',
  successVision: 'Your brain will "click" into focus faster, making your mornings highly productive.'
});

// Q029
addScenario({
  idStr: 'q029_caffeine_dependent', section: 'Morning', topic: 'Caffeine dependence',
  qLabel: 'Do you need caffeine just to feel normal?',
  options: [
    { id: 'opt:slp:q29:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q29:no', label: 'No', value: 'no' }
  ],
  humanMoment: "When caffeine stops giving you energy and just brings you back to baseline, you are essentially borrowing tomorrow's energy to survive today.",
  coachThinking: 'Adenosine receptor upregulation due to chronic high caffeine intake. User is constantly fighting withdrawal.',
  firstStep: 'Reduce your daily caffeine intake by just 25% (e.g., leave a quarter of your cup full) for the next 3 days.',
  whyFirstStepMatters: 'Gradually tapering prevents debilitating withdrawal headaches while allowing your brain to resensitize to natural energy cues.',
  successVision: 'You will slowly reclaim your natural energy and not feel panicked if you miss a cup of coffee.'
});

// Q030
addScenario({
  idStr: 'q030_afternoon_slump', section: 'Daytime', topic: 'Post-lunch sleepiness',
  qLabel: 'Do you feel sleepy after lunch?',
  options: [
    { id: 'opt:slp:q30:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q30:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'The post-lunch crash is brutal. Staring at your computer screen while your eyelids feel like lead is agonizing.',
  coachThinking: 'Postprandial somnolence caused by a massive insulin spike from a carb-heavy lunch.',
  firstStep: 'Ensure your lunch contains at least 30 grams of protein and limit simple carbohydrates like bread or pasta.',
  whyFirstStepMatters: 'Protein prevents the massive glucose spike and subsequent insulin crash that acts like a sedative in the afternoon.',
  successVision: 'You will power through your afternoon tasks with clear, consistent focus.'
});

// Q031
addScenario({
  idStr: 'q031_meeting_struggle', section: 'Daytime', topic: 'Daytime alertness',
  qLabel: 'Do you struggle to stay awake during meetings or classes?',
  options: [
    { id: 'opt:slp:q31:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q31:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'Pinching yourself to stay awake in a quiet room is embarrassing and physically painful.',
  coachThinking: 'Lack of stimulation unmasks severe underlying sleep debt. The user is dangerously sleep-deprived.',
  firstStep: 'Stand up and sip ice-cold water every 15 minutes during sedentary periods.',
  whyFirstStepMatters: 'Cold exposure and standing trigger a mild sympathetic nervous system response, forcing your brain to stay alert.',
  successVision: 'You will remain sharp and engaged without the painful struggle to keep your eyes open.'
});

// Q032
addScenario({
  idStr: 'q032_sleepy_driving', section: 'Daytime', topic: 'Microsleep risk',
  qLabel: 'Do you ever feel sleepy while driving?',
  options: [
    { id: 'opt:slp:q32:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q32:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'Feeling your head nod on the highway is terrifying. It is a massive red flag that your body is shutting down.',
  coachThinking: 'Critical safety risk. Microsleeps indicate absolute systemic exhaustion or severe sleep apnea.',
  firstStep: 'Pull over immediately if you feel your eyes heavy. Do not rely on rolling down windows or turning up music.',
  whyFirstStepMatters: 'Microsleeps happen involuntarily; your brain literally shuts off for 2-3 seconds without your permission.',
  successVision: 'You will prioritize your safety and avoid a potentially catastrophic accident.'
});

// Q033
addScenario({
  idStr: 'q033_yawning', section: 'Daytime', topic: 'Chronic yawning',
  qLabel: 'Do you often yawn throughout the day?',
  options: [
    { id: 'opt:slp:q33:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q33:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'Constantly yawning makes you look and feel bored, even when you are actually highly engaged but just exhausted.',
  coachThinking: 'Brain cooling mechanism or oxygen regulation due to poor nighttime respiration (possible apnea).',
  firstStep: 'Take 3 extremely deep breaths, inhaling through your nose and exhaling slowly through your mouth.',
  whyFirstStepMatters: 'Yawning is often your brain trying to cool itself down or rapidly alter oxygen levels. Controlled breathing helps regulate this.',
  successVision: 'You will feel more present and stop fighting the physical urge to yawn mid-conversation.'
});

// Q034
addScenario({
  idStr: 'q034_night_shift', section: 'Special Situations', topic: 'Shift work',
  qLabel: 'Do you work night shifts?',
  options: [
    { id: 'opt:slp:q34:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q34:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'Shift work goes against millions of years of human biology. You are asking your body to do a remarkably difficult thing.',
  coachThinking: 'Complete circadian inversion. Must control light exposure to trick the SCN (suprachiasmatic nucleus).',
  firstStep: 'Wear dark sunglasses during your commute home in the morning after a night shift.',
  whyFirstStepMatters: 'Morning sunlight hits your eyes and instantly destroys your melatonin production, making it impossible to sleep when you get home.',
  successVision: 'You will trick your brain into thinking it is dusk, allowing you to sleep deeply during the day.'
});

// Q035
addScenario({
  idStr: 'q035_jet_lag', section: 'Special Situations', topic: 'Jet lag',
  qLabel: 'Do you travel across time zones often?',
  options: [
    { id: 'opt:slp:q35:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q35:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'Jet lag makes you feel entirely disconnected from reality. Your body is in one place, but your brain is in another.',
  coachThinking: 'Rapid circadian phase shift. The fastest anchor is food timing, not just light.',
  firstStep: "Immediately start eating meals at the correct local time of your destination, even if you aren't hungry.",
  whyFirstStepMatters: 'Your liver has its own circadian clock driven by food. Eating at local times forces your body to adapt 50% faster than light exposure alone.',
  successVision: 'You will adapt to new time zones rapidly without losing days to intense fatigue.'
});

// Q036
addScenario({
  idStr: 'q036_weekend_sleep', section: 'Special Situations', topic: 'Weekend sleep variation',
  qLabel: 'Do you sleep differently on weekends?',
  options: [
    { id: 'opt:slp:q36:yes', label: 'Yes, I sleep much longer', value: 'yes' },
    { id: 'opt:slp:q36:no', label: 'No, it is the same', value: 'no' }
  ],
  humanMoment: 'Sleeping in on Saturday feels amazing, but it guarantees that Sunday night will be a sleepless disaster.',
  coachThinking: 'Social jetlag. "Catching up" on sleep disrupts the circadian anchor, making Monday mornings agonizing.',
  firstStep: 'Wake up within 60 minutes of your normal weekday time on weekends, even if you go to bed late.',
  whyFirstStepMatters: 'It is better to be slightly tired on Saturday than to completely wreck your biological clock for the entire upcoming work week.',
  successVision: 'You will eliminate the Sunday night insomnia and Monday morning exhaustion entirely.'
});

// Q037
addScenario({
  idStr: 'q037_sleep_change', section: 'Special Situations', topic: 'Recent sleep changes',
  qLabel: 'Has your sleep changed recently?',
  options: [
    { id: 'opt:slp:q37:yes', label: 'Yes, it has gotten worse', value: 'yes' },
    { id: 'opt:slp:q37:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'A sudden loss of good sleep is terrifying. It makes you feel like you are losing control of your body.',
  coachThinking: 'Acute insomnia is usually triggered by a specific stressful life event, illness, or medication change.',
  firstStep: 'Identify if any major stressors, dietary changes, or new medications occurred in the last 30 days.',
  whyFirstStepMatters: 'Acute sleep changes are a symptom, not the root cause. You must treat the recent trigger, not just take a sleeping pill.',
  successVision: 'You will address the root cause and return to your normal, healthy sleep baseline.'
});

// Q038
addScenario({
  idStr: 'q038_menstrual_cycle', section: 'Women Only', topic: 'Menstrual cycle sleep',
  qLabel: 'Does your monthly cycle affect your sleep?',
  dependsOn: ['fact:master:female'],
  requiredFactsForRec: ['fact:master:female', 'fact:slp:q038_menstrual_cycle:struggle'],
  options: [
    { id: 'opt:slp:q38:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q38:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'Tossing and turning during your luteal phase is incredibly frustrating, especially when society expects you to perform identically every day.',
  coachThinking: 'Progesterone drop before menstruation drastically lowers the seizure threshold and raises core body temperature, causing insomnia.',
  firstStep: 'Lower your bedroom temperature by 2 degrees during the week before your period.',
  whyFirstStepMatters: 'Hormonal shifts naturally raise your core body temperature. A colder room artificially compensates for this so you can still achieve deep sleep.',
  successVision: 'You will sleep much better during your luteal phase without waking up in a sweat.'
});

// Q039
addScenario({
  idStr: 'q039_pregnancy_sleep', section: 'Women Only', topic: 'Pregnancy sleep',
  qLabel: 'Are you currently pregnant?',
  dependsOn: ['fact:master:female'],
  requiredFactsForRec: ['fact:master:female', 'fact:slp:q039_pregnancy_sleep:struggle'],
  options: [
    { id: 'opt:slp:q39:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q39:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'Trying to sleep while pregnant is a physical battle. Between the bladder pressure and the physical discomfort, rest feels impossible.',
  coachThinking: 'Physical obstruction and hormonal flooding. Need mechanical support for alignment.',
  firstStep: 'Sleep on your left side using a U-shaped or C-shaped pregnancy pillow to support your hips and belly.',
  whyFirstStepMatters: 'Left-side sleeping maximizes blood flow to the uterus and kidneys, while the pillow prevents pelvic misalignment and lower back pain.',
  successVision: 'You will find a physically comfortable position that allows you to finally rest.'
});

// Q040
addScenario({
  idStr: 'q040_menopause_sleep', section: 'Women Only', topic: 'Menopause symptoms',
  qLabel: 'Have menopause symptoms affected your sleep?',
  dependsOn: ['fact:master:female'],
  requiredFactsForRec: ['fact:master:female', 'fact:slp:q040_menopause_sleep:struggle'],
  options: [
    { id: 'opt:slp:q40:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q40:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'Hot flashes tearing through your body at 2 AM are deeply disruptive. Your brain is desperately trying to regulate a changing system.',
  coachThinking: "Estrogen withdrawal disrupts the hypothalamus (the brain's thermostat), causing night sweats and waking.",
  firstStep: 'Keep a frozen gel pack or a cold damp washcloth on your nightstand in a small cooler.',
  whyFirstStepMatters: 'Applying cold to the back of your neck or wrists immediately cools the blood traveling to your brain, halting the hot flash.',
  successVision: 'You will recover from night sweats rapidly and get back to sleep much faster.'
});

fs.writeFileSync(path.join(dir, 'questions.yaml'), JSON.stringify(questions, null, 2), 'utf8');
fs.writeFileSync(path.join(dir, 'facts.yaml'), JSON.stringify(facts, null, 2), 'utf8');
fs.writeFileSync(path.join(dir, 'insights.yaml'), JSON.stringify(insights, null, 2), 'utf8');
fs.writeFileSync(path.join(dir, 'scores.yaml'), JSON.stringify(scores, null, 2), 'utf8');
fs.writeFileSync(path.join(dir, 'decisions.yaml'), JSON.stringify(decisions, null, 2), 'utf8');
fs.writeFileSync(path.join(dir, 'recommendations.yaml'), JSON.stringify(recommendations, null, 2), 'utf8');

console.log(`Successfully generated Sleep & Recovery (40 Gold Standard scenarios)!`);
