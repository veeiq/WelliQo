// Append Batch 2 to the existing generate_sleep_domain.js
const fs = require('fs');

const file = 'C:/Users/alokm/.gemini/antigravity/brain/401f6cba-85fa-422f-8b12-473e06bdabcc/scratch/generate_sleep_domain.js';
let content = fs.readFileSync(file, 'utf8');

// We will replace the final file write commands with the new batch content and then write everything at the end.
const finalWriteLines = `
fs.writeFileSync(path.join(dir, 'questions.yaml'), JSON.stringify(questions, null, 2), 'utf8');
fs.writeFileSync(path.join(dir, 'facts.yaml'), JSON.stringify(facts, null, 2), 'utf8');
fs.writeFileSync(path.join(dir, 'insights.yaml'), JSON.stringify(insights, null, 2), 'utf8');
fs.writeFileSync(path.join(dir, 'scores.yaml'), JSON.stringify(scores, null, 2), 'utf8');
fs.writeFileSync(path.join(dir, 'decisions.yaml'), JSON.stringify(decisions, null, 2), 'utf8');
fs.writeFileSync(path.join(dir, 'recommendations.yaml'), JSON.stringify(recommendations, null, 2), 'utf8');

console.log(\`Successfully generated Sleep & Recovery Batch 1 (20 Gold Standard scenarios)!\`);
`;

const newBatch = `
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
  humanMoment: 'When caffeine stops giving you energy and just brings you back to baseline, you are essentially borrowing tomorrow\'s energy to survive today.',
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
  firstStep: 'Immediately start eating meals at the correct local time of your destination, even if you aren\'t hungry.',
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
  options: [
    { id: 'opt:slp:q40:yes', label: 'Yes', value: 'yes' },
    { id: 'opt:slp:q40:no', label: 'No', value: 'no' }
  ],
  humanMoment: 'Hot flashes tearing through your body at 2 AM are deeply disruptive. Your brain is desperately trying to regulate a changing system.',
  coachThinking: 'Estrogen withdrawal disrupts the hypothalamus (the brain\'s thermostat), causing night sweats and waking.',
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

console.log(\`Successfully generated Sleep & Recovery (40 Gold Standard scenarios)!\`);
`;

content = content.replace(finalWriteLines, newBatch);

fs.writeFileSync('scratch/generate_sleep_domain_full.js', content, 'utf8');
