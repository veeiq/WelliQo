// SYSTEM GENERATED FILE - DO NOT EDIT MANUALLY
// Compiled on 2026-08-03T13:41:35.441Z

import type { IntelligenceDomain } from './schemas';
export * from './schemas';

export const MasterEngineConfig: IntelligenceDomain = {
  "questions": [
    {
      "id": "q:eng:eng_1:primary",
      "purpose": "Assess Waking up exhausted within Morning Energy",
      "label": "When your alarm goes off, do you feel like you haven't slept at all?",
      "type": "single-choice",
      "tags": [
        "energy",
        "morning_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_1:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_1:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_1:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Check for sleep architecture disruption or cortisol awakening response failure.",
      "humanMoment": "Waking up exhausted is incredibly demoralizing. It feels like you're starting the race 10 steps behind everyone else.",
      "createsFacts": [
        "fact:eng:eng_1:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_1:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_1:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_1:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_2:primary",
      "purpose": "Assess Caffeine dependence within Morning Energy",
      "label": "Do you feel physically incapable of starting your day without coffee or caffeine?",
      "type": "single-choice",
      "tags": [
        "energy",
        "morning_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_2:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_2:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_2:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Identify if caffeine is masking profound sleep deprivation or if it's just a chemical dependency.",
      "humanMoment": "We live in a culture that runs on caffeine. Relying on it isn't a weakness; it's a symptom of a demanding world.",
      "createsFacts": [
        "fact:eng:eng_2:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_2:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_2:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_2:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_3:primary",
      "purpose": "Assess Snooze button reliance within Morning Energy",
      "label": "Do you hit snooze multiple times because your body physically refuses to get out of bed?",
      "type": "single-choice",
      "tags": [
        "energy",
        "morning_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_3:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_3:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_3:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Interrupting REM or deep sleep causes severe sleep inertia. Need to align wake times.",
      "humanMoment": "The snooze button isn't a sign of laziness; it's a sign that your body's sleep cycles are being interrupted at the wrong time.",
      "createsFacts": [
        "fact:eng:eng_3:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_3:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_3:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_3:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_4:primary",
      "purpose": "Assess Morning Brain Fog within Morning Energy",
      "label": "Even after you're physically out of bed, do you feel like you can't think clearly for the first hour or two?",
      "type": "single-choice",
      "tags": [
        "energy",
        "morning_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_4:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_4:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_4:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Brain fog is often linked to dehydration overnight or lack of morning movement.",
      "humanMoment": "Trying to work through brain fog feels like walking through molasses. It's frustrating when your body is awake but your mind isn't.",
      "createsFacts": [
        "fact:eng:eng_4:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_4:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_4:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_4:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_5:primary",
      "purpose": "Assess Dreading the day within Morning Energy",
      "label": "Do you wake up feeling a heavy sense of dread or overwhelm about everything you have to do today?",
      "type": "single-choice",
      "tags": [
        "energy",
        "morning_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_5:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_5:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_5:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Anticipatory stress drains dopamine. Need cognitive reframing first thing.",
      "humanMoment": "Waking up to anxiety immediately burns through your daily energy budget before you've even brushed your teeth.",
      "createsFacts": [
        "fact:eng:eng_5:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_5:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_5:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_5:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_6:primary",
      "purpose": "Assess The 3 PM Crash within Afternoon Energy",
      "label": "Do you reliably hit a wall around 2 or 3 PM where you feel like you physically need a nap?",
      "type": "single-choice",
      "tags": [
        "energy",
        "afternoon_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_6:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_6:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_6:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Highly likely to be postprandial somnolence (blood sugar crash) from lunch.",
      "humanMoment": "The afternoon crash hits so hard it feels impossible to keep your eyes open. This is a physiological response, not laziness.",
      "createsFacts": [
        "fact:eng:eng_6:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_6:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_6:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_6:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_7:primary",
      "purpose": "Assess Sugar cravings for energy within Afternoon Energy",
      "label": "Do you find yourself desperately hunting for chocolate or sweets in the afternoon just to stay awake?",
      "type": "single-choice",
      "tags": [
        "energy",
        "afternoon_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_7:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_7:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_7:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Glucose seeking behavior due to circadian dip. Substitute with sustainable energy.",
      "humanMoment": "Your brain knows exactly what provides the fastest, cheapest energy possible: sugar. It is trying to survive the afternoon.",
      "createsFacts": [
        "fact:eng:eng_7:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_7:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_7:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_7:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_8:primary",
      "purpose": "Assess Afternoon Screen Fatigue within Afternoon Energy",
      "label": "Do your eyes burn and your head feel heavy after staring at a computer screen all day?",
      "type": "single-choice",
      "tags": [
        "energy",
        "afternoon_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_8:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_8:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_8:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Ocular fatigue is frequently misinterpreted by the brain as systemic fatigue.",
      "humanMoment": "Digital eye strain is exhausting. Your eyes are muscles, and they aren't meant to stare at a glowing box for 8 hours.",
      "createsFacts": [
        "fact:eng:eng_8:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_8:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_8:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_8:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_9:primary",
      "purpose": "Assess Sluggish Digestion within Afternoon Energy",
      "label": "Do you feel physically heavy, bloated, or sluggish after eating lunch?",
      "type": "single-choice",
      "tags": [
        "energy",
        "afternoon_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_9:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_9:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_9:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Poor digestive motility or food intolerances. Need to stimulate digestion post-meal.",
      "humanMoment": "When digestion is slow, your body redirects all its energy to your stomach, leaving your brain and muscles with nothing.",
      "createsFacts": [
        "fact:eng:eng_9:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_9:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_9:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_9:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_10:primary",
      "purpose": "Assess Meeting Fatigue within Afternoon Energy",
      "label": "Does sitting through back-to-back afternoon meetings completely drain your social and mental batteries?",
      "type": "single-choice",
      "tags": [
        "energy",
        "afternoon_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_10:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_10:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_10:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Social/cognitive depletion. Need sensory deprivation or introverted recovery time.",
      "humanMoment": "Zoom fatigue and endless meetings require intense performative energy. Introverts especially feel this deeply.",
      "createsFacts": [
        "fact:eng:eng_10:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_10:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_10:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_10:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_11:primary",
      "purpose": "Assess Nothing left for personal life within Evening Energy",
      "label": "By the time work or chores are done, do you feel too exhausted to do things you actually enjoy?",
      "type": "single-choice",
      "tags": [
        "energy",
        "evening_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_11:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_11:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_11:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Assess overall energy budget. Need to build boundaries to protect residual energy for personal joy.",
      "humanMoment": "Giving all your energy to obligations and having nothing left for yourself is heartbreaking, but incredibly common.",
      "createsFacts": [
        "fact:eng:eng_11:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_11:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_11:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_11:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_12:primary",
      "purpose": "Assess Revenge Bedtime Procrastination within Evening Energy",
      "label": "Do you stay up late scrolling or watching TV because it's the only 'me time' you get?",
      "type": "single-choice",
      "tags": [
        "energy",
        "evening_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_12:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_12:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_12:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Address lack of autonomy during the day. If daytime is 100% obligation, nighttime procrastination is guaranteed.",
      "humanMoment": "When your entire day belongs to other people, stealing time from sleep feels like the only way to breathe.",
      "createsFacts": [
        "fact:eng:eng_12:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_12:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_12:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_12:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_13:primary",
      "purpose": "Assess Couch Lock within Evening Energy",
      "label": "Once you sit on the couch in the evening, does it feel physically impossible to get back up?",
      "type": "single-choice",
      "tags": [
        "energy",
        "evening_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_13:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_13:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_13:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Adrenaline crash. Need to maintain slight physical momentum before complete rest.",
      "humanMoment": "The momentum of the day suddenly stops, and gravity takes over. It's a sign your body was running on adrenaline.",
      "createsFacts": [
        "fact:eng:eng_13:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_13:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_13:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_13:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_14:primary",
      "purpose": "Assess Alcohol for relaxation within Evening Energy",
      "label": "Do you rely on a glass of wine or a drink to help you transition from 'stressed' to 'relaxed' in the evening?",
      "type": "single-choice",
      "tags": [
        "energy",
        "evening_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_14:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_14:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_14:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Alcohol fragments REM sleep and destroys tomorrow's energy. Need non-chemical decompression.",
      "humanMoment": "Alcohol is the fastest chemical way to shut off an anxious brain. It makes sense why it's so appealing.",
      "createsFacts": [
        "fact:eng:eng_14:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_14:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_14:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_14:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_15:primary",
      "purpose": "Assess Second Wind within Evening Energy",
      "label": "Do you feel exhausted all evening, but suddenly get a burst of energy right when you should be going to sleep?",
      "type": "single-choice",
      "tags": [
        "energy",
        "evening_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_15:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_15:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_15:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Circadian misalignment. Light exposure is triggering a daytime hormone response at night.",
      "humanMoment": "A 'second wind' is deeply frustrating when you just want to sleep. It's often a mistimed cortisol spike.",
      "createsFacts": [
        "fact:eng:eng_15:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_15:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_15:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_15:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_16:primary",
      "purpose": "Assess Racing mind at night within Sleep & Recovery",
      "label": "When you finally lie down, does your brain suddenly turn on, reviewing the day or worrying about tomorrow?",
      "type": "single-choice",
      "tags": [
        "energy",
        "sleep_recovery"
      ],
      "options": [
        {
          "id": "opt:e:eng_16:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_16:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_16:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Sympathetic nervous system overdrive. Need cognitive offloading before bed.",
      "humanMoment": "It's maddening when your body is exhausted but your brain refuses to shut off. You are not alone in this.",
      "createsFacts": [
        "fact:eng:eng_16:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_16:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_16:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_16:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_17:primary",
      "purpose": "Assess Waking up in the middle of the night within Sleep & Recovery",
      "label": "Do you frequently wake up between 2 AM and 4 AM and struggle to fall back asleep?",
      "type": "single-choice",
      "tags": [
        "energy",
        "sleep_recovery"
      ],
      "options": [
        {
          "id": "opt:e:eng_17:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_17:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_17:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Often caused by a blood sugar crash dropping too low at night, triggering an adrenaline spike to wake you up.",
      "humanMoment": "The 3 AM wake-up is incredibly lonely and frustrating. You lie there doing math on how much sleep you are losing.",
      "createsFacts": [
        "fact:eng:eng_17:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_17:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_17:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_17:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_18:primary",
      "purpose": "Assess Hot flashes or night sweats within Sleep & Recovery",
      "label": "Do night sweats or temperature fluctuations constantly wake you up and ruin your sleep quality?",
      "type": "single-choice",
      "tags": [
        "energy",
        "sleep_recovery"
      ],
      "options": [
        {
          "id": "opt:e:eng_18:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_18:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_18:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Thermoregulation failure, often hormonal (perimenopause/menopause). Core body temp must drop to sleep.",
      "humanMoment": "Waking up drenched in sweat is terribly uncomfortable and disrupts your deepest phases of sleep.",
      "createsFacts": [
        "fact:eng:eng_18:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_18:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_18:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_18:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_19:primary",
      "purpose": "Assess Partner snoring or restlessness within Sleep & Recovery",
      "label": "Does your partner's snoring, movement, or completely different sleep schedule destroy your ability to rest?",
      "type": "single-choice",
      "tags": [
        "energy",
        "sleep_recovery"
      ],
      "options": [
        {
          "id": "opt:e:eng_19:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_19:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_19:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Environmental sleep disruption. Must protect the sleep environment from external noise/motion.",
      "humanMoment": "It's a tough conversation to have, but 'sleep divorce' is sometimes necessary for your biological health.",
      "createsFacts": [
        "fact:eng:eng_19:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_19:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_19:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_19:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_20:primary",
      "purpose": "Assess Mouth breathing within Sleep & Recovery",
      "label": "Do you often wake up with a severely dry mouth, or have you been told you sleep with your mouth open?",
      "type": "single-choice",
      "tags": [
        "energy",
        "sleep_recovery"
      ],
      "options": [
        {
          "id": "opt:e:eng_20:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_20:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_20:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Nasal breathing is mandatory for parasympathetic nervous system activation during sleep.",
      "humanMoment": "Mouth breathing during sleep triggers a stress response in the body, ensuring you never truly rest deeply.",
      "createsFacts": [
        "fact:eng:eng_20:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_20:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_20:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_20:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_21:primary",
      "purpose": "Assess Irregular sleep schedule within Sleep & Recovery",
      "label": "Do you go to sleep and wake up at wildly different times on the weekends compared to the weekdays?",
      "type": "single-choice",
      "tags": [
        "energy",
        "sleep_recovery"
      ],
      "options": [
        {
          "id": "opt:e:eng_21:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_21:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_21:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Circadian anchor needed. The wake-up time must be rigidly consistent.",
      "humanMoment": "Social jetlag forces your body to constantly readjust time zones every single week. No wonder Monday feels terrible.",
      "createsFacts": [
        "fact:eng:eng_21:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_21:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_21:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_21:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_22:primary",
      "purpose": "Assess Skipping meals within Food & Hydration",
      "label": "Do you get so busy that you accidentally skip meals, only to feel shaky and exhausted later?",
      "type": "single-choice",
      "tags": [
        "energy",
        "food_hydration"
      ],
      "options": [
        {
          "id": "opt:e:eng_22:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_22:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_22:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Identify if skipping is due to stress or lack of time. Blood sugar instability is a massive energy drain.",
      "humanMoment": "When you are overwhelmed, eating feels like an inconvenience. But running on fumes always catches up to you.",
      "createsFacts": [
        "fact:eng:eng_22:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_22:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_22:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_22:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_23:primary",
      "purpose": "Assess Chronic dehydration within Food & Hydration",
      "label": "Do you go most of the day drinking only coffee, tea, or soda, but very little pure water?",
      "type": "single-choice",
      "tags": [
        "energy",
        "food_hydration"
      ],
      "options": [
        {
          "id": "opt:e:eng_23:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_23:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_23:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Cellular dehydration causes a 10-15% drop in cognitive and physical performance.",
      "humanMoment": "Water is boring, and coffee is highly rewarding. But your cells literally cannot produce ATP (energy) without water.",
      "createsFacts": [
        "fact:eng:eng_23:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_23:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_23:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_23:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_24:primary",
      "purpose": "Assess Heavy Carb Coma within Food & Hydration",
      "label": "Does eating a meal heavy in pasta, bread, or rice make you feel like you took a sleeping pill?",
      "type": "single-choice",
      "tags": [
        "energy",
        "food_hydration"
      ],
      "options": [
        {
          "id": "opt:e:eng_24:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_24:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_24:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Postprandial hypoglycemia. Need to modulate the glycemic load.",
      "humanMoment": "Carbohydrates aren't evil, but eating a massive portion of them spikes insulin so high it acts as a sedative.",
      "createsFacts": [
        "fact:eng:eng_24:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_24:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_24:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_24:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_25:primary",
      "purpose": "Assess Under-eating for weight loss within Food & Hydration",
      "label": "Are you currently restricting calories or dieting so strictly that your energy has completely tanked?",
      "type": "single-choice",
      "tags": [
        "energy",
        "food_hydration"
      ],
      "options": [
        {
          "id": "opt:e:eng_25:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_25:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_25:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Metabolic downregulation due to severe caloric restriction. Must increase intake to restore energy.",
      "humanMoment": "You cannot starve your way to health. If you are exhausted, your body is shutting down non-essential functions to survive.",
      "createsFacts": [
        "fact:eng:eng_25:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_25:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_25:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_25:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_26:primary",
      "purpose": "Assess Iron deficiency symptoms within Food & Hydration",
      "label": "Do you feel physically weak, dizzy when standing up, or unusually cold, especially if you have heavy menstrual cycles?",
      "type": "single-choice",
      "tags": [
        "energy",
        "food_hydration"
      ],
      "options": [
        {
          "id": "opt:e:eng_26:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_26:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_26:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "dependsOn": [
        "fact:master:female"
      ],
      "coachThinking": "Clinical red flag for anemia. Cannot out-lifestyle a mineral deficiency.",
      "humanMoment": "Low iron physically prevents your blood from carrying enough oxygen to your brain and muscles. It's suffocating.",
      "createsFacts": [
        "fact:eng:eng_26:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_26:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_26:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_26:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_27:primary",
      "purpose": "Assess Burnout and Overwhelm within Work & Lifestyle",
      "label": "Does the sheer amount of things you have to do make you feel paralyzed and exhausted before you even start?",
      "type": "single-choice",
      "tags": [
        "energy",
        "work_lifestyle"
      ],
      "options": [
        {
          "id": "opt:e:eng_27:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_27:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_27:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Allostatic load is maxed out. Do not prescribe exercise or complex diets. Focus on radical rest and subtraction.",
      "humanMoment": "Burnout is a state of systemic depletion. You aren't tired because you are weak; you are tired because you've been strong for too long.",
      "createsFacts": [
        "fact:eng:eng_27:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_27:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_27:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_27:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_28:primary",
      "purpose": "Assess Shift Work / Jetlag within Work & Lifestyle",
      "label": "Does working irregular shifts (or traveling across time zones) make you feel completely detached from normal time?",
      "type": "single-choice",
      "tags": [
        "energy",
        "work_lifestyle"
      ],
      "options": [
        {
          "id": "opt:e:eng_28:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_28:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_28:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Circadian disruption. Cannot fix the shift, but can anchor light and food.",
      "humanMoment": "Shift work is classified as a carcinogen for a reason. It is fundamentally against human biology. You are doing a remarkably hard thing.",
      "createsFacts": [
        "fact:eng:eng_28:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_28:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_28:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_28:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_29:primary",
      "purpose": "Assess High-stress environment within Work & Lifestyle",
      "label": "Are you constantly on high alert, dealing with toxic bosses, stressful clients, or a chaotic household?",
      "type": "single-choice",
      "tags": [
        "energy",
        "work_lifestyle"
      ],
      "options": [
        {
          "id": "opt:e:eng_29:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_29:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_29:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Chronic sympathetic nervous system activation. Need to trigger parasympathetic tone.",
      "humanMoment": "Living in 'fight or flight' mode burns massive amounts of energy. Anxiety is incredibly metabolically expensive.",
      "createsFacts": [
        "fact:eng:eng_29:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_29:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_29:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_29:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_30:primary",
      "purpose": "Assess Sedentary lethargy within Work & Lifestyle",
      "label": "Do you feel incredibly tired despite doing almost no physical activity all day?",
      "type": "single-choice",
      "tags": [
        "energy",
        "work_lifestyle"
      ],
      "options": [
        {
          "id": "opt:e:eng_30:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_30:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_30:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Deconditioning. Need to prescribe low-barrier movement to stimulate mitochondria.",
      "humanMoment": "Newton's first law applies to human bodies: a body at rest stays at rest. Lack of movement literally creates fatigue.",
      "createsFacts": [
        "fact:eng:eng_30:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_30:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_30:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_30:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_31:primary",
      "purpose": "Assess Constant Context Switching within Work & Lifestyle",
      "label": "Is your day filled with constant interruptions, forcing you to switch tasks every 5 minutes?",
      "type": "single-choice",
      "tags": [
        "energy",
        "work_lifestyle"
      ],
      "options": [
        {
          "id": "opt:e:eng_31:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_31:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_31:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Cognitive depletion from task switching. Need deep work blocks.",
      "humanMoment": "Context switching destroys cognitive energy. Every interruption costs you 20 minutes of focus and drains your brain battery.",
      "createsFacts": [
        "fact:eng:eng_31:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_31:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_31:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_31:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_32:primary",
      "purpose": "Assess Hormonal Energy Dips within Women's Energy",
      "label": "Do you experience severe, predictable drops in energy that seem tied to your menstrual cycle or hormonal changes?",
      "type": "single-choice",
      "tags": [
        "energy",
        "women's_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_32:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_32:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_32:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "dependsOn": [
        "fact:master:female"
      ],
      "coachThinking": "Acknowledge infradian rhythms. Need to adapt expectations and workload based on cycle phase.",
      "humanMoment": "Female energy isn't a straight line; it's a wave. Society expects you to operate exactly the same every day, which goes against biology.",
      "createsFacts": [
        "fact:eng:eng_32:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_32:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_32:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_32:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_33:primary",
      "purpose": "Assess Perimenopause fatigue within Women's Energy",
      "label": "Are you in your late 30s or 40s and experiencing sudden, inexplicable exhaustion and brain fog?",
      "type": "single-choice",
      "tags": [
        "energy",
        "women's_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_33:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_33:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_33:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "dependsOn": [
        "fact:master:female"
      ],
      "coachThinking": "Estrogen and progesterone fluctuations. Need to support adrenal health.",
      "humanMoment": "Perimenopause is a massive neurological and hormonal transition. You aren't going crazy; your brain is rewiring itself.",
      "createsFacts": [
        "fact:eng:eng_33:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_33:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_33:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_33:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_34:primary",
      "purpose": "Assess Pregnancy Exhaustion within Women's Energy",
      "label": "Are you currently pregnant and finding it hard to get off the couch?",
      "type": "single-choice",
      "tags": [
        "energy",
        "women's_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_34:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_34:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_34:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "dependsOn": [
        "fact:master:female"
      ],
      "coachThinking": "Absolute permission to rest. Do not push through pregnancy fatigue.",
      "humanMoment": "You are 3D-printing a human skeleton. The exhaustion you feel is the physical cost of creating life.",
      "createsFacts": [
        "fact:eng:eng_34:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_34:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_34:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_34:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_35:primary",
      "purpose": "Assess Postpartum depletion within Women's Energy",
      "label": "Have you had a baby in the last 2 years and still feel like you never fully recovered your energy?",
      "type": "single-choice",
      "tags": [
        "energy",
        "women's_energy"
      ],
      "options": [
        {
          "id": "opt:e:eng_35:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_35:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_35:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "dependsOn": [
        "fact:master:female"
      ],
      "coachThinking": "Nutrient depletion. Focus on massive micronutrient repletion.",
      "humanMoment": "Postnatal depletion can last for years if you aren't properly re-nourished. Society expects you to bounce back instantly, which is absurd.",
      "createsFacts": [
        "fact:eng:eng_35:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_35:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_35:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_35:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_36:primary",
      "purpose": "Assess Unexplained Chronic Fatigue within Medical Safety",
      "label": "Have you been experiencing severe, debilitating fatigue for months that doesn't improve with sleep?",
      "type": "single-choice",
      "tags": [
        "energy",
        "medical_safety"
      ],
      "options": [
        {
          "id": "opt:e:eng_36:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_36:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_36:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Red flag for CFS, thyroid issues, or post-viral fatigue. Must recommend medical screening.",
      "humanMoment": "Living with invisible, chronic exhaustion is incredibly isolating. We hear you, and we take this seriously.",
      "createsFacts": [
        "fact:eng:eng_36:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_36:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_36:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_36:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_37:primary",
      "purpose": "Assess Loud snoring or gasping at night within Medical Safety",
      "label": "Has anyone ever told you that you snore loudly, or gasp for air while sleeping?",
      "type": "single-choice",
      "tags": [
        "energy",
        "medical_safety"
      ],
      "options": [
        {
          "id": "opt:e:eng_37:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_37:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_37:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "High risk of obstructive sleep apnea. Medical intervention is mandatory.",
      "humanMoment": "Sleep apnea literally stops you from breathing hundreds of times a night. It is terrifying for your heart and ruins your energy.",
      "createsFacts": [
        "fact:eng:eng_37:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_37:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_37:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_37:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:eng_38:primary",
      "purpose": "Assess Depression-linked low energy within Medical Safety",
      "label": "Do you feel a deep lack of motivation or a heaviness that makes it hard to even care about your energy levels?",
      "type": "single-choice",
      "tags": [
        "energy",
        "medical_safety"
      ],
      "options": [
        {
          "id": "opt:e:eng_38:major",
          "label": "Yes, this happens constantly",
          "value": "major"
        },
        {
          "id": "opt:e:eng_38:sometimes",
          "label": "Sometimes, it depends on the day",
          "value": "sometimes"
        },
        {
          "id": "opt:e:eng_38:rarely",
          "label": "Rarely or never",
          "value": "rarely"
        }
      ],
      "coachThinking": "Clinical depression can present entirely as physical fatigue. Need to remove shame and seek support.",
      "humanMoment": "Depression is a heavy blanket that weighs down every aspect of your life. It's completely valid that you feel this way.",
      "createsFacts": [
        "fact:eng:eng_38:struggle"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [
        "insight:eng:eng_38:impact"
      ],
      "supportsDecisions": [
        "dec:eng:eng_38:clinical"
      ],
      "supportsRecommendations": [
        "rec:eng:eng_38:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:eng:special:best_time",
      "purpose": "Identify Best Time of Day",
      "label": "When do you generally feel your absolute best?",
      "type": "single-choice",
      "tags": [
        "energy",
        "timeline"
      ],
      "options": [
        {
          "id": "opt:e:best:morning",
          "label": "Early Morning",
          "value": "morning"
        },
        {
          "id": "opt:e:best:afternoon",
          "label": "Mid-Afternoon",
          "value": "afternoon"
        },
        {
          "id": "opt:e:best:evening",
          "label": "Late at Night",
          "value": "evening"
        }
      ],
      "coachThinking": "Establishing the peak circadian window to anchor their most difficult tasks.",
      "humanMoment": "Everyone has a natural peak. Knowing yours is the secret to getting more done with less effort.",
      "createsFacts": [
        "fact:eng:special:best_time"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:eng:special:biggest_drain",
      "purpose": "Identify Biggest Energy Drain",
      "label": "If you had to choose, what is draining your energy the most right now?",
      "type": "single-choice",
      "tags": [
        "energy",
        "drain"
      ],
      "options": [
        {
          "id": "opt:e:drain:stress",
          "label": "Mental Stress & Overwhelm",
          "value": "stress"
        },
        {
          "id": "opt:e:drain:sleep",
          "label": "Lack of Quality Sleep",
          "value": "sleep"
        },
        {
          "id": "opt:e:drain:physical",
          "label": "Physical pain or health issues",
          "value": "physical"
        }
      ],
      "coachThinking": "Forcing prioritization to identify the primary intervention target.",
      "humanMoment": "It often feels like everything is exhausting, but usually, there is one heavy anchor holding you down.",
      "createsFacts": [
        "fact:eng:special:biggest_drain"
      ],
      "supportsScores": [
        "score:eng:vitality"
      ],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:greeting",
      "purpose": "Establish absolute emotional safety.",
      "label": "Welcome to WelliQo. I'm genuinely glad you're here today. How are you feeling about starting this journey?",
      "type": "single-choice",
      "tags": [
        "master",
        "identity",
        "baseline"
      ],
      "options": [
        {
          "id": "opt:master:greet:excited",
          "label": "Excited",
          "value": "excited"
        },
        {
          "id": "opt:master:greet:nervous",
          "label": "A bit nervous",
          "value": "nervous"
        },
        {
          "id": "opt:master:greet:overwhelmed",
          "label": "Overwhelmed",
          "value": "overwhelmed"
        }
      ],
      "coachThinking": "If I start firing clinical questions immediately, they will put their walls up. I need them to know they aren't being judged.",
      "humanMoment": "Take a deep breath. You're in a safe place. We're going to do this together.",
      "createsFacts": [
        "fact:master:emotional_state"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:goal",
      "purpose": "Discover the emotional anchor driving the desire to change.",
      "label": "What is the main reason you want to focus on your health right now?",
      "type": "single-choice",
      "tags": [
        "master",
        "identity",
        "baseline"
      ],
      "options": [
        {
          "id": "opt:master:goal:health",
          "label": "To feel healthier",
          "value": "health"
        },
        {
          "id": "opt:master:goal:energy",
          "label": "To have more energy",
          "value": "energy"
        },
        {
          "id": "opt:master:goal:confidence",
          "label": "To feel more confident",
          "value": "confidence"
        },
        {
          "id": "opt:master:goal:event",
          "label": "For an upcoming event",
          "value": "event"
        }
      ],
      "coachThinking": "Nobody just wants to 'lose 10 kilos.' They want to stop feeling breathless playing with their kids. I need to find the anchor.",
      "humanMoment": "Understanding why you are here is more important than any number on a scale.",
      "createsFacts": [
        "fact:master:primary_goal"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 20
    },
    {
      "id": "q:master:age",
      "purpose": "Know WHO the person is. Do NOT make assumptions.",
      "label": "How old are you?",
      "type": "number",
      "tags": [
        "master",
        "identity",
        "baseline"
      ],
      "coachThinking": "I need their age to calculate their BMR and TDEE, but I shouldn't linger on this. It's just a starting line.",
      "humanMoment": "To help me understand your body's baseline needs, I'm going to ask a few quick numbers.",
      "createsFacts": [
        "fact:master:age",
        "fact:master:age_group"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:gender",
      "purpose": "Know WHO the person is. Do NOT make assumptions.",
      "label": "Are you",
      "type": "single-choice",
      "tags": [
        "master",
        "identity",
        "baseline"
      ],
      "options": [
        {
          "id": "opt:master:gender:male",
          "label": "Male",
          "value": "male"
        },
        {
          "id": "opt:master:gender:female",
          "label": "Female",
          "value": "female"
        },
        {
          "id": "opt:master:gender:prefer_not",
          "label": "Prefer not to say",
          "value": "prefer_not"
        }
      ],
      "coachThinking": "Biological sex impacts BMR calculations and hormonal profiles.",
      "humanMoment": "Just capturing the basics so we can give you the right biological baseline.",
      "createsFacts": [
        "fact:master:gender"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:height",
      "purpose": "Know WHO the person is. Do NOT make assumptions.",
      "label": "How tall are you?",
      "type": "height",
      "tags": [
        "master",
        "identity",
        "measurements"
      ],
      "coachThinking": "Required for accurate BMI and metabolic calculations.",
      "humanMoment": "Almost done with the numbers.",
      "createsFacts": [
        "fact:master:height"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:weight",
      "purpose": "Know WHO the person is. Do NOT make assumptions.",
      "label": "What is your current weight?",
      "type": "weight",
      "tags": [
        "master",
        "identity",
        "measurements"
      ],
      "coachThinking": "The primary metabolic variable. Must capture without triggering shame.",
      "humanMoment": "Your current measurements simply give us a starting point. Many successful wellness journeys begin exactly where you are today.",
      "createsFacts": [
        "fact:master:weight",
        "fact:master:bmi",
        "fact:master:healthy_weight_range",
        "fact:master:ideal_weight",
        "fact:master:estimated_body_fat",
        "fact:master:daily_water_need",
        "fact:master:daily_protein_need",
        "fact:master:estimated_calories",
        "fact:master:risk_category"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 30
    },
    {
      "id": "q:master:waist",
      "purpose": "Know WHO the person is. Do NOT make assumptions.",
      "label": "What is your waist size?",
      "type": "number",
      "tags": [
        "master",
        "identity",
        "measurements"
      ],
      "createsFacts": [
        "fact:master:waist"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:occupation",
      "purpose": "Know WHO the person is. Do NOT make assumptions.",
      "label": "What do you do?",
      "type": "single-choice",
      "tags": [
        "master",
        "identity",
        "lifestyle"
      ],
      "options": [
        {
          "id": "opt:master:occ:student",
          "label": "Student",
          "value": "student"
        },
        {
          "id": "opt:master:occ:office",
          "label": "Office Job",
          "value": "office"
        },
        {
          "id": "opt:master:occ:business",
          "label": "Business",
          "value": "business"
        },
        {
          "id": "opt:master:occ:homemaker",
          "label": "Homemaker",
          "value": "homemaker"
        },
        {
          "id": "opt:master:occ:labour",
          "label": "Labour",
          "value": "labour"
        },
        {
          "id": "opt:master:occ:retired",
          "label": "Retired",
          "value": "retired"
        },
        {
          "id": "opt:master:occ:other",
          "label": "Other",
          "value": "other"
        }
      ],
      "createsFacts": [
        "fact:master:occupation"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:city",
      "purpose": "Know WHO the person is. Do NOT make assumptions.",
      "label": "Which city do you live in?",
      "type": "text",
      "tags": [
        "master",
        "identity",
        "demographics"
      ],
      "createsFacts": [
        "fact:master:city"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:master:marital_status",
      "purpose": "Know WHO the person is. Do NOT make assumptions.",
      "label": "Are you",
      "type": "single-choice",
      "tags": [
        "master",
        "identity",
        "demographics"
      ],
      "options": [
        {
          "id": "opt:master:marital:single",
          "label": "Single",
          "value": "single"
        },
        {
          "id": "opt:master:marital:married",
          "label": "Married",
          "value": "married"
        },
        {
          "id": "opt:master:marital:other",
          "label": "Other",
          "value": "other"
        }
      ],
      "createsFacts": [
        "fact:master:marital_status"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:master:children",
      "purpose": "Know WHO the person is. Do NOT make assumptions.",
      "label": "Do you have children?",
      "type": "single-choice",
      "tags": [
        "master",
        "identity",
        "demographics"
      ],
      "options": [
        {
          "id": "opt:master:child:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:child:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:has_children"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:master:language",
      "purpose": "Know WHO the person is. Do NOT make assumptions.",
      "label": "What language do you prefer?",
      "type": "text",
      "tags": [
        "master",
        "identity",
        "demographics"
      ],
      "createsFacts": [
        "fact:master:language"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:master:wake_time",
      "purpose": "Understand daily routine.",
      "label": "What time do you usually wake up?",
      "type": "time",
      "tags": [
        "master",
        "lifestyle",
        "routine"
      ],
      "createsFacts": [
        "fact:master:wake_time"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:master:bed_time",
      "purpose": "Understand daily routine.",
      "label": "What time do you usually go to bed?",
      "type": "time",
      "tags": [
        "master",
        "lifestyle",
        "routine"
      ],
      "createsFacts": [
        "fact:master:bed_time"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:master:sleep_hours",
      "purpose": "Understand daily routine.",
      "label": "How many hours do you usually sleep?",
      "type": "number",
      "tags": [
        "master",
        "lifestyle",
        "sleep"
      ],
      "coachThinking": "Sleep dictates cortisol and recovery. Without enough sleep, weight loss is biochemically blocked.",
      "humanMoment": "Sleep is the foundation of everything. How much rest is your body actually getting?",
      "createsFacts": [
        "fact:master:sleep_duration"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 15
    },
    {
      "id": "q:master:water_intake",
      "purpose": "Understand daily routine.",
      "label": "How much water do you drink in a day?",
      "type": "single-choice",
      "tags": [
        "master",
        "lifestyle",
        "nutrition"
      ],
      "options": [
        {
          "id": "opt:master:water:low",
          "label": "Less than 1 liter",
          "value": "low"
        },
        {
          "id": "opt:master:water:med",
          "label": "1-2 liters",
          "value": "med"
        },
        {
          "id": "opt:master:water:high",
          "label": "More than 2 liters",
          "value": "high"
        }
      ],
      "createsFacts": [
        "fact:master:water_intake"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:breakfast",
      "purpose": "Understand daily routine.",
      "label": "Do you eat breakfast?",
      "type": "single-choice",
      "tags": [
        "master",
        "lifestyle",
        "nutrition"
      ],
      "options": [
        {
          "id": "opt:master:bfast:always",
          "label": "Always",
          "value": "always"
        },
        {
          "id": "opt:master:bfast:sometimes",
          "label": "Sometimes",
          "value": "sometimes"
        },
        {
          "id": "opt:master:bfast:never",
          "label": "Never",
          "value": "never"
        }
      ],
      "createsFacts": [
        "fact:master:breakfast_habit"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:meal_count",
      "purpose": "Understand daily routine.",
      "label": "How many meals do you usually eat?",
      "type": "number",
      "tags": [
        "master",
        "lifestyle",
        "nutrition"
      ],
      "createsFacts": [
        "fact:master:meal_count"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:eating_out",
      "purpose": "Understand daily routine.",
      "label": "How often do you eat outside food?",
      "type": "single-choice",
      "tags": [
        "master",
        "lifestyle",
        "nutrition"
      ],
      "options": [
        {
          "id": "opt:master:eatout:daily",
          "label": "Daily",
          "value": "daily"
        },
        {
          "id": "opt:master:eatout:weekly",
          "label": "A few times a week",
          "value": "weekly"
        },
        {
          "id": "opt:master:eatout:rarely",
          "label": "Rarely",
          "value": "rarely"
        }
      ],
      "createsFacts": [
        "fact:master:eating_out_frequency"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:exercise",
      "purpose": "Understand daily routine.",
      "label": "Do you exercise?",
      "type": "single-choice",
      "tags": [
        "master",
        "lifestyle",
        "fitness"
      ],
      "options": [
        {
          "id": "opt:master:ex:daily",
          "label": "Daily",
          "value": "daily"
        },
        {
          "id": "opt:master:ex:weekly",
          "label": "Few times a week",
          "value": "weekly"
        },
        {
          "id": "opt:master:ex:rarely",
          "label": "Rarely",
          "value": "rarely"
        },
        {
          "id": "opt:master:ex:never",
          "label": "Never",
          "value": "never"
        }
      ],
      "coachThinking": "Assess baseline metabolic demand from activity.",
      "humanMoment": "Any movement counts. We just need to know where you are starting from.",
      "createsFacts": [
        "fact:master:exercise_frequency"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 15
    },
    {
      "id": "q:master:sitting_hours",
      "purpose": "Understand daily routine.",
      "label": "About how many hours do you sit every day?",
      "type": "number",
      "tags": [
        "master",
        "lifestyle",
        "fitness"
      ],
      "createsFacts": [
        "fact:master:sitting_hours"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:smoke_alcohol",
      "purpose": "Understand daily routine.",
      "label": "Do you smoke or drink alcohol?",
      "type": "multiple-choice",
      "tags": [
        "master",
        "lifestyle",
        "habits"
      ],
      "options": [
        {
          "id": "opt:master:habit:smoke",
          "label": "Smoke",
          "value": "smoke"
        },
        {
          "id": "opt:master:habit:alcohol",
          "label": "Drink alcohol",
          "value": "alcohol"
        },
        {
          "id": "opt:master:habit:neither",
          "label": "Neither",
          "value": "neither"
        }
      ],
      "createsFacts": [
        "fact:master:smoking",
        "fact:master:alcohol"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 15
    },
    {
      "id": "q:master:pregnant",
      "purpose": "Ensure recommendations are always safe.",
      "label": "Are you pregnant?",
      "type": "single-choice",
      "tags": [
        "master",
        "medical_safety"
      ],
      "options": [
        {
          "id": "opt:master:preg:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:preg:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:pregnant"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 20
    },
    {
      "id": "q:master:breastfeeding",
      "purpose": "Ensure recommendations are always safe.",
      "label": "Are you breastfeeding?",
      "type": "single-choice",
      "tags": [
        "master",
        "medical_safety"
      ],
      "options": [
        {
          "id": "opt:master:bf:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:bf:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:breastfeeding"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 20
    },
    {
      "id": "q:master:medical_diet",
      "purpose": "Ensure recommendations are always safe.",
      "label": "Has a doctor advised you to follow any special diet?",
      "type": "single-choice",
      "tags": [
        "master",
        "medical_safety"
      ],
      "options": [
        {
          "id": "opt:master:md:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:md:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:medical_diet"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 20
    },
    {
      "id": "q:master:diabetes",
      "purpose": "Ensure recommendations are always safe.",
      "label": "Do you have diabetes?",
      "type": "single-choice",
      "tags": [
        "master",
        "medical_safety"
      ],
      "options": [
        {
          "id": "opt:master:dia:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:dia:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:diabetes"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 20
    },
    {
      "id": "q:master:blood_pressure",
      "purpose": "Ensure recommendations are always safe.",
      "label": "Do you have high blood pressure?",
      "type": "single-choice",
      "tags": [
        "master",
        "medical_safety"
      ],
      "options": [
        {
          "id": "opt:master:bp:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:bp:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:high_bp"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 20
    },
    {
      "id": "q:master:thyroid",
      "purpose": "Ensure recommendations are always safe.",
      "label": "Do you have thyroid problems?",
      "type": "single-choice",
      "tags": [
        "master",
        "medical_safety"
      ],
      "options": [
        {
          "id": "opt:master:thy:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:thy:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:thyroid"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 20
    },
    {
      "id": "q:master:medication",
      "purpose": "Ensure recommendations are always safe.",
      "label": "Are you taking any regular medicines?",
      "type": "single-choice",
      "tags": [
        "master",
        "medical_safety"
      ],
      "options": [
        {
          "id": "opt:master:med:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:med:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:regular_medication"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 20
    },
    {
      "id": "q:master:surgery",
      "purpose": "Ensure recommendations are always safe.",
      "label": "Have you had any major surgery in the last year?",
      "type": "single-choice",
      "tags": [
        "master",
        "medical_safety"
      ],
      "options": [
        {
          "id": "opt:master:surg:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:surg:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:recent_surgery"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 20
    },
    {
      "id": "q:master:allergies",
      "purpose": "Ensure recommendations are always safe.",
      "label": "Do you have any food allergies?",
      "type": "single-choice",
      "tags": [
        "master",
        "medical_safety"
      ],
      "options": [
        {
          "id": "opt:master:allg:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:allg:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:food_allergies"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 20
    },
    {
      "id": "q:master:other_health",
      "purpose": "Ensure recommendations are always safe.",
      "label": "Is there anything important about your health we should know?",
      "type": "text",
      "tags": [
        "master",
        "medical_safety"
      ],
      "createsFacts": [
        "fact:master:other_health_info"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:cooks",
      "purpose": "Understand the person's real environment.",
      "label": "Who usually cooks at home?",
      "type": "single-choice",
      "tags": [
        "master",
        "family_home"
      ],
      "options": [
        {
          "id": "opt:master:cook:me",
          "label": "Me",
          "value": "me"
        },
        {
          "id": "opt:master:cook:partner",
          "label": "Partner/Family",
          "value": "partner"
        },
        {
          "id": "opt:master:cook:help",
          "label": "House Help",
          "value": "help"
        }
      ],
      "createsFacts": [
        "fact:master:primary_cook"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:groceries",
      "purpose": "Understand the person's real environment.",
      "label": "Who buys groceries?",
      "type": "single-choice",
      "tags": [
        "master",
        "family_home"
      ],
      "options": [
        {
          "id": "opt:master:groc:me",
          "label": "Me",
          "value": "me"
        },
        {
          "id": "opt:master:groc:partner",
          "label": "Partner/Family",
          "value": "partner"
        },
        {
          "id": "opt:master:groc:help",
          "label": "House Help",
          "value": "help"
        }
      ],
      "createsFacts": [
        "fact:master:primary_shopper"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:family_support",
      "purpose": "Understand the person's real environment.",
      "label": "Does your family support your health goals?",
      "type": "single-choice",
      "tags": [
        "master",
        "family_home"
      ],
      "options": [
        {
          "id": "opt:master:sup:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:sup:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:family_support"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 15
    },
    {
      "id": "q:master:eat_with_family",
      "purpose": "Understand the person's real environment.",
      "label": "Do you usually eat with your family?",
      "type": "single-choice",
      "tags": [
        "master",
        "family_home"
      ],
      "options": [
        {
          "id": "opt:master:ewf:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:ewf:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:eat_with_family"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:travel",
      "purpose": "Understand the person's real environment.",
      "label": "Do you travel frequently for work?",
      "type": "single-choice",
      "tags": [
        "master",
        "family_home"
      ],
      "options": [
        {
          "id": "opt:master:trav:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:trav:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:frequent_travel"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 15
    },
    {
      "id": "q:master:living_situation",
      "purpose": "Understand the person's real environment.",
      "label": "Do you live alone or with family?",
      "type": "single-choice",
      "tags": [
        "master",
        "family_home"
      ],
      "options": [
        {
          "id": "opt:master:liv:alone",
          "label": "Alone",
          "value": "alone"
        },
        {
          "id": "opt:master:liv:family",
          "label": "With Family",
          "value": "family"
        }
      ],
      "createsFacts": [
        "fact:master:living_situation"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:food_availability",
      "purpose": "Understand the person's real environment.",
      "label": "Is healthy food easily available where you live?",
      "type": "single-choice",
      "tags": [
        "master",
        "family_home"
      ],
      "options": [
        {
          "id": "opt:master:favail:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:favail:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:food_availability"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:food_decisions",
      "purpose": "Understand the person's real environment.",
      "label": "Who usually decides what food is prepared?",
      "type": "single-choice",
      "tags": [
        "master",
        "family_home"
      ],
      "options": [
        {
          "id": "opt:master:fdec:me",
          "label": "Me",
          "value": "me"
        },
        {
          "id": "opt:master:fdec:partner",
          "label": "Partner/Family",
          "value": "partner"
        },
        {
          "id": "opt:master:fdec:help",
          "label": "House Help",
          "value": "help"
        }
      ],
      "createsFacts": [
        "fact:master:food_decision_maker"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:cook_time",
      "purpose": "Recommend solutions people can actually follow.",
      "label": "Do you have time to cook every day?",
      "type": "single-choice",
      "tags": [
        "master",
        "financial_reality"
      ],
      "options": [
        {
          "id": "opt:master:ctime:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:ctime:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:daily_cooking_time"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 15
    },
    {
      "id": "q:master:kitchen_access",
      "purpose": "Recommend solutions people can actually follow.",
      "label": "Do you have access to a kitchen?",
      "type": "single-choice",
      "tags": [
        "master",
        "financial_reality"
      ],
      "options": [
        {
          "id": "opt:master:kacc:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:kacc:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:kitchen_access"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 15
    },
    {
      "id": "q:master:fridge_access",
      "purpose": "Recommend solutions people can actually follow.",
      "label": "Do you have a refrigerator?",
      "type": "single-choice",
      "tags": [
        "master",
        "financial_reality"
      ],
      "options": [
        {
          "id": "opt:master:facc:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:facc:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:refrigerator_access"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:health_time",
      "purpose": "Recommend solutions people can actually follow.",
      "label": "How much time can you realistically spend on your health daily?",
      "type": "single-choice",
      "tags": [
        "master",
        "financial_reality"
      ],
      "options": [
        {
          "id": "opt:master:htime:little",
          "label": "Less than 15 minutes",
          "value": "little"
        },
        {
          "id": "opt:master:htime:some",
          "label": "15 to 45 minutes",
          "value": "some"
        },
        {
          "id": "opt:master:htime:lots",
          "label": "More than 45 minutes",
          "value": "lots"
        }
      ],
      "createsFacts": [
        "fact:master:daily_health_time"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 15
    },
    {
      "id": "q:master:low_cost_meals",
      "purpose": "Recommend solutions people can actually follow.",
      "label": "Would you prefer low-cost meal ideas?",
      "type": "single-choice",
      "tags": [
        "master",
        "financial_reality"
      ],
      "options": [
        {
          "id": "opt:master:lcm:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:lcm:no",
          "label": "No, budget is flexible",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:prefer_low_cost"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 15
    },
    {
      "id": "q:master:buy_healthy",
      "purpose": "Recommend solutions people can actually follow.",
      "label": "Are you comfortable buying healthy foods every week?",
      "type": "single-choice",
      "tags": [
        "master",
        "financial_reality"
      ],
      "options": [
        {
          "id": "opt:master:bh:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:bh:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:buy_healthy_comfort"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:home_solutions",
      "purpose": "Recommend solutions people can actually follow.",
      "label": "Would you like home-based solutions instead of gym-based solutions?",
      "type": "single-choice",
      "tags": [
        "master",
        "financial_reality"
      ],
      "options": [
        {
          "id": "opt:master:hs:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:hs:no",
          "label": "No, I go to a gym",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:prefer_home_solutions"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:exercise_type",
      "purpose": "Personalize recommendations.",
      "label": "Which type of exercise do you enjoy?",
      "type": "multiple-choice",
      "tags": [
        "master",
        "personal_preferences"
      ],
      "options": [
        {
          "id": "opt:master:extype:walking",
          "label": "Walking / Running",
          "value": "walking"
        },
        {
          "id": "opt:master:extype:weights",
          "label": "Lifting weights",
          "value": "weights"
        },
        {
          "id": "opt:master:extype:yoga",
          "label": "Yoga / Stretching",
          "value": "yoga"
        },
        {
          "id": "opt:master:extype:none",
          "label": "I do not enjoy exercise",
          "value": "none"
        }
      ],
      "createsFacts": [
        "fact:master:enjoyed_exercise"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:workout_location",
      "purpose": "Personalize recommendations.",
      "label": "Do you prefer home workouts or a gym?",
      "type": "single-choice",
      "tags": [
        "master",
        "personal_preferences"
      ],
      "options": [
        {
          "id": "opt:master:wloc:home",
          "label": "Home",
          "value": "home"
        },
        {
          "id": "opt:master:wloc:gym",
          "label": "Gym",
          "value": "gym"
        }
      ],
      "createsFacts": [
        "fact:master:workout_location"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:vegetarian",
      "purpose": "Personalize recommendations.",
      "label": "Are you vegetarian?",
      "type": "single-choice",
      "tags": [
        "master",
        "personal_preferences"
      ],
      "options": [
        {
          "id": "opt:master:veg:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:veg:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:is_vegetarian"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 20
    },
    {
      "id": "q:master:eat_eggs",
      "purpose": "Personalize recommendations.",
      "label": "Do you eat eggs?",
      "type": "single-choice",
      "tags": [
        "master",
        "personal_preferences"
      ],
      "options": [
        {
          "id": "opt:master:eggs:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:eggs:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:eats_eggs"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 15
    },
    {
      "id": "q:master:eat_meat",
      "purpose": "Personalize recommendations.",
      "label": "Do you eat chicken or fish?",
      "type": "single-choice",
      "tags": [
        "master",
        "personal_preferences"
      ],
      "options": [
        {
          "id": "opt:master:meat:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:meat:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:eats_meat"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 15
    },
    {
      "id": "q:master:hardest_meal",
      "purpose": "Personalize recommendations.",
      "label": "Which meal is hardest for you to manage?",
      "type": "single-choice",
      "tags": [
        "master",
        "personal_preferences"
      ],
      "options": [
        {
          "id": "opt:master:hm:breakfast",
          "label": "Breakfast",
          "value": "breakfast"
        },
        {
          "id": "opt:master:hm:lunch",
          "label": "Lunch",
          "value": "lunch"
        },
        {
          "id": "opt:master:hm:dinner",
          "label": "Dinner",
          "value": "dinner"
        }
      ],
      "createsFacts": [
        "fact:master:hardest_meal"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:like_cooking",
      "purpose": "Personalize recommendations.",
      "label": "Do you like cooking?",
      "type": "single-choice",
      "tags": [
        "master",
        "personal_preferences"
      ],
      "options": [
        {
          "id": "opt:master:lc:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:lc:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:likes_cooking"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:change_size",
      "purpose": "Personalize recommendations.",
      "label": "Would you rather make small changes or bigger changes?",
      "type": "single-choice",
      "tags": [
        "master",
        "personal_preferences"
      ],
      "options": [
        {
          "id": "opt:master:cs:small",
          "label": "Small, easy changes",
          "value": "small"
        },
        {
          "id": "opt:master:cs:big",
          "label": "Bigger, faster changes",
          "value": "big"
        }
      ],
      "createsFacts": [
        "fact:master:preferred_change_size"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:like_schedule",
      "purpose": "Personalize recommendations.",
      "label": "Do you like following a schedule?",
      "type": "single-choice",
      "tags": [
        "master",
        "personal_preferences"
      ],
      "options": [
        {
          "id": "opt:master:ls:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:ls:no",
          "label": "No, I need flexibility",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:likes_schedule"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:want_reminders",
      "purpose": "Personalize recommendations.",
      "label": "Would you like reminders and habit tracking?",
      "type": "single-choice",
      "tags": [
        "master",
        "personal_preferences"
      ],
      "options": [
        {
          "id": "opt:master:wr:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:master:wr:no",
          "label": "No",
          "value": "no"
        }
      ],
      "createsFacts": [
        "fact:master:wants_reminders"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:improve_why",
      "purpose": "Measure mindset before recommendations.",
      "label": "Why do you want to improve your health now?",
      "type": "text",
      "tags": [
        "master",
        "motivation"
      ],
      "createsFacts": [
        "fact:master:health_motivation"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 15
    },
    {
      "id": "q:master:worries",
      "purpose": "Measure mindset before recommendations.",
      "label": "What worries you the most?",
      "type": "text",
      "tags": [
        "master",
        "motivation"
      ],
      "createsFacts": [
        "fact:master:primary_worry"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 15
    },
    {
      "id": "q:master:stopped_past",
      "purpose": "Measure mindset before recommendations.",
      "label": "What has stopped you in the past?",
      "type": "text",
      "tags": [
        "master",
        "motivation"
      ],
      "createsFacts": [
        "fact:master:past_blockers"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 15
    },
    {
      "id": "q:master:worked_past",
      "purpose": "Measure mindset before recommendations.",
      "label": "What has worked well for you before?",
      "type": "text",
      "tags": [
        "master",
        "motivation"
      ],
      "createsFacts": [
        "fact:master:past_successes"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 15
    },
    {
      "id": "q:master:motivator",
      "purpose": "Measure mindset before recommendations.",
      "label": "Who motivates you?",
      "type": "text",
      "tags": [
        "master",
        "motivation"
      ],
      "createsFacts": [
        "fact:master:primary_motivator"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:confidence",
      "purpose": "Measure mindset before recommendations.",
      "label": "How confident are you that you can make changes?",
      "type": "scale",
      "tags": [
        "master",
        "motivation"
      ],
      "createsFacts": [
        "fact:master:change_confidence"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:master:readiness",
      "purpose": "Measure mindset before recommendations.",
      "label": "How ready are you to start today? (1-10)",
      "type": "scale",
      "tags": [
        "master",
        "motivation"
      ],
      "createsFacts": [
        "fact:master:readiness_score"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 20
    },
    {
      "id": "q:master:improve_first",
      "purpose": "Measure mindset before recommendations.",
      "label": "What is the one thing you want to improve first?",
      "type": "text",
      "tags": [
        "master",
        "motivation"
      ],
      "createsFacts": [
        "fact:master:priority_improvement"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 15
    },
    {
      "id": "q:master:success_vision",
      "purpose": "Measure mindset before recommendations.",
      "label": "What would success look like after 3 months?",
      "type": "text",
      "tags": [
        "master",
        "motivation"
      ],
      "createsFacts": [
        "fact:master:success_vision"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 15
    },
    {
      "id": "q:master:other_info",
      "purpose": "Measure mindset before recommendations.",
      "label": "Is there anything else you want us to know?",
      "type": "text",
      "tags": [
        "master",
        "motivation"
      ],
      "createsFacts": [
        "fact:master:additional_info"
      ],
      "supportsScores": [],
      "supportsInsights": [],
      "supportsDecisions": [],
      "supportsRecommendations": [],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:slp:q001_wake_feeling:primary",
      "purpose": "Assess Waking exhaustion within How Does Your Sleep Feel",
      "label": "How do you usually feel when you wake up?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "how_does_your_sleep_feel"
      ],
      "options": [
        {
          "id": "opt:slp:q1:fresh",
          "label": "Fresh and active",
          "value": "fresh"
        },
        {
          "id": "opt:slp:q1:okay",
          "label": "Okay",
          "value": "okay"
        },
        {
          "id": "opt:slp:q1:tired",
          "label": "Still tired",
          "value": "tired"
        },
        {
          "id": "opt:slp:q1:exhausted",
          "label": "Completely exhausted",
          "value": "exhausted"
        }
      ],
      "coachThinking": "Assess baseline sleep architecture and restorative quality regardless of total duration.",
      "humanMoment": "Waking up exhausted is incredibly demoralizing. It feels like you are starting the race behind everyone else.",
      "createsFacts": [
        "fact:slp:q001_wake_feeling:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q001_wake_feeling:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q001_wake_feeling:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q001_wake_feeling:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q002_fall_asleep_time:primary",
      "purpose": "Assess Sleep onset latency within How Does Your Sleep Feel",
      "label": "About how long does it usually take you to fall asleep?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "how_does_your_sleep_feel"
      ],
      "options": [
        {
          "id": "opt:slp:q2:fast",
          "label": "Less than 15 minutes",
          "value": "fast"
        },
        {
          "id": "opt:slp:q2:normal",
          "label": "15–30 minutes",
          "value": "normal"
        },
        {
          "id": "opt:slp:q2:slow",
          "label": "30–60 minutes",
          "value": "slow"
        },
        {
          "id": "opt:slp:q2:severe",
          "label": "More than an hour",
          "value": "severe"
        }
      ],
      "coachThinking": "Assess sleep onset latency. If >30 mins, highly suggestive of sympathetic overdrive or circadian delay.",
      "humanMoment": "Lying awake in the dark is terribly lonely. When sleep takes over an hour, the bed starts to feel like a stressful place.",
      "createsFacts": [
        "fact:slp:q002_fall_asleep_time:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q002_fall_asleep_time:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q002_fall_asleep_time:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q002_fall_asleep_time:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q003_wake_frequency:primary",
      "purpose": "Assess Sleep fragmentation within How Does Your Sleep Feel",
      "label": "How many times do you usually wake up during the night?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "how_does_your_sleep_feel"
      ],
      "options": [
        {
          "id": "opt:slp:q3:none",
          "label": "Rarely or never",
          "value": "none"
        },
        {
          "id": "opt:slp:q3:once",
          "label": "Once or twice",
          "value": "once"
        },
        {
          "id": "opt:slp:q3:many",
          "label": "Three or more times",
          "value": "many"
        }
      ],
      "coachThinking": "Sleep maintenance insomnia. Usually tied to blood sugar drops, bladder issues, or environmental disturbances.",
      "humanMoment": "Waking up multiple times shatters your deepest phases of rest. You might technically be in bed for 8 hours, but it feels like 3.",
      "createsFacts": [
        "fact:slp:q003_wake_frequency:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q003_wake_frequency:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q003_wake_frequency:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q003_wake_frequency:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q004_fall_asleep_again:primary",
      "purpose": "Assess Return to sleep latency within How Does Your Sleep Feel",
      "label": "If you wake up, can you fall asleep again easily?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "how_does_your_sleep_feel"
      ],
      "options": [
        {
          "id": "opt:slp:q4:yes",
          "label": "Yes, very easily",
          "value": "yes"
        },
        {
          "id": "opt:slp:q4:sometimes",
          "label": "Sometimes",
          "value": "sometimes"
        },
        {
          "id": "opt:slp:q4:no",
          "label": "No, it takes a long time",
          "value": "no"
        }
      ],
      "coachThinking": "Cortisol spike during the night. The user is entering problem-solving mode instead of resting mode.",
      "humanMoment": "Waking up at 3 AM and doing the math on how much sleep you are losing is incredibly stressful.",
      "createsFacts": [
        "fact:slp:q004_fall_asleep_again:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q004_fall_asleep_again:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q004_fall_asleep_again:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q004_fall_asleep_again:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q005_early_waking:primary",
      "purpose": "Assess Terminal insomnia within How Does Your Sleep Feel",
      "label": "Do you wake up before your alarm?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "how_does_your_sleep_feel"
      ],
      "options": [
        {
          "id": "opt:slp:q5:always",
          "label": "Always",
          "value": "always"
        },
        {
          "id": "opt:slp:q5:sometimes",
          "label": "Sometimes",
          "value": "sometimes"
        },
        {
          "id": "opt:slp:q5:never",
          "label": "Never",
          "value": "never"
        }
      ],
      "coachThinking": "Terminal insomnia. Can be an indicator of depression, massive stress, or circadian phase advance.",
      "humanMoment": "Waking up at 5 AM when you don't have to is infuriating. Your body is ready, but you know you need more rest.",
      "createsFacts": [
        "fact:slp:q005_early_waking:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q005_early_waking:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q005_early_waking:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q005_early_waking:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q006_phone_in_bed:primary",
      "purpose": "Assess Device usage within What Happens Before Bed",
      "label": "How often do you use your phone or laptop in bed?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "what_happens_before_bed"
      ],
      "options": [
        {
          "id": "opt:slp:q6:always",
          "label": "Every night",
          "value": "always"
        },
        {
          "id": "opt:slp:q6:sometimes",
          "label": "A few nights a week",
          "value": "sometimes"
        },
        {
          "id": "opt:slp:q6:never",
          "label": "Rarely or never",
          "value": "never"
        }
      ],
      "coachThinking": "Blue light exposure and dopamine stimulation actively block melatonin synthesis.",
      "humanMoment": "Doomscrolling in bed is often the only time you get to disconnect from the real world. It's hard to give up.",
      "createsFacts": [
        "fact:slp:q006_phone_in_bed:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q006_phone_in_bed:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q006_phone_in_bed:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q006_phone_in_bed:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q007_racing_thoughts:primary",
      "purpose": "Assess Racing thoughts within What Happens Before Bed",
      "label": "Do your thoughts keep running when you try to sleep?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "what_happens_before_bed"
      ],
      "options": [
        {
          "id": "opt:slp:q7:yes",
          "label": "Yes, almost always",
          "value": "yes"
        },
        {
          "id": "opt:slp:q7:sometimes",
          "label": "Sometimes",
          "value": "sometimes"
        },
        {
          "id": "opt:slp:q7:no",
          "label": "No, my mind is calm",
          "value": "no"
        }
      ],
      "coachThinking": "Sympathetic nervous system overdrive. Need cognitive offloading.",
      "humanMoment": "It's maddening when your body is exhausted but your brain refuses to shut off.",
      "createsFacts": [
        "fact:slp:q007_racing_thoughts:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q007_racing_thoughts:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q007_racing_thoughts:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q007_racing_thoughts:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q008_stress_bedtime:primary",
      "purpose": "Assess Bedtime stress within What Happens Before Bed",
      "label": "Do you feel stressed at bedtime?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "what_happens_before_bed"
      ],
      "options": [
        {
          "id": "opt:slp:q8:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q8:no",
          "label": "No",
          "value": "no"
        }
      ],
      "coachThinking": "Lack of transition boundaries between output mode and recovery mode.",
      "humanMoment": "Carrying the weight of the day into bed makes rest impossible. You deserve to lay that burden down.",
      "createsFacts": [
        "fact:slp:q008_stress_bedtime:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q008_stress_bedtime:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q008_stress_bedtime:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q008_stress_bedtime:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q009_tv_before_bed:primary",
      "purpose": "Assess TV consumption within What Happens Before Bed",
      "label": "Do you usually watch TV before sleeping?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "what_happens_before_bed"
      ],
      "options": [
        {
          "id": "opt:slp:q9:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q9:no",
          "label": "No",
          "value": "no"
        }
      ],
      "coachThinking": "Passive screen time vs active scrolling. Still a light issue, but also content-driven adrenaline (thrillers, news).",
      "humanMoment": "Binge-watching shows is a great way to numb out after a hard day, but it forces your brain to stay highly active.",
      "createsFacts": [
        "fact:slp:q009_tv_before_bed:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q009_tv_before_bed:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q009_tv_before_bed:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q009_tv_before_bed:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q010_regular_bedtime:primary",
      "purpose": "Assess Bedtime consistency within What Happens Before Bed",
      "label": "Do you have a regular bedtime?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "what_happens_before_bed"
      ],
      "options": [
        {
          "id": "opt:slp:q10:yes",
          "label": "Yes, almost exactly the same every night",
          "value": "yes"
        },
        {
          "id": "opt:slp:q10:varies",
          "label": "It varies slightly",
          "value": "varies"
        },
        {
          "id": "opt:slp:q10:no",
          "label": "No, it changes constantly",
          "value": "no"
        }
      ],
      "coachThinking": "Circadian rhythm stability relies entirely on consistency.",
      "humanMoment": "Life is chaotic, and maintaining a strict schedule can feel impossible when things pop up.",
      "createsFacts": [
        "fact:slp:q010_regular_bedtime:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q010_regular_bedtime:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q010_regular_bedtime:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q010_regular_bedtime:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q011_bedroom_noise:primary",
      "purpose": "Assess Noise levels within Your Sleep Environment",
      "label": "Is your bedroom usually:",
      "type": "single-choice",
      "tags": [
        "sleep",
        "your_sleep_environment"
      ],
      "options": [
        {
          "id": "opt:slp:q11:quiet",
          "label": "Quiet",
          "value": "quiet"
        },
        {
          "id": "opt:slp:q11:little",
          "label": "A little noisy",
          "value": "little"
        },
        {
          "id": "opt:slp:q11:very",
          "label": "Very noisy",
          "value": "very"
        }
      ],
      "coachThinking": "Environmental disruption. Need acoustic masking.",
      "humanMoment": "Living in a noisy environment or near traffic puts your brain on constant alert, even while unconscious.",
      "createsFacts": [
        "fact:slp:q011_bedroom_noise:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q011_bedroom_noise:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q011_bedroom_noise:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q011_bedroom_noise:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q012_disturbances:primary",
      "purpose": "Assess Partner/Pet disturbance within Your Sleep Environment",
      "label": "Does anyone disturb your sleep?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "your_sleep_environment"
      ],
      "options": [
        {
          "id": "opt:slp:q12:partner",
          "label": "Partner",
          "value": "partner"
        },
        {
          "id": "opt:slp:q12:children",
          "label": "Children",
          "value": "children"
        },
        {
          "id": "opt:slp:q12:pets",
          "label": "Pets",
          "value": "pets"
        },
        {
          "id": "opt:slp:q12:nobody",
          "label": "Nobody",
          "value": "nobody"
        }
      ],
      "coachThinking": "Social sleep disruption. Boundaries need to be established for biological health.",
      "humanMoment": "We love our family and pets, but having them constantly wake you up is a recipe for deep resentment and exhaustion.",
      "createsFacts": [
        "fact:slp:q012_disturbances:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q012_disturbances:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q012_disturbances:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q012_disturbances:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q013_snoring:primary",
      "purpose": "Assess Snoring within Your Sleep Environment",
      "label": "Do you snore?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "your_sleep_environment"
      ],
      "options": [
        {
          "id": "opt:slp:q13:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q13:no",
          "label": "No",
          "value": "no"
        },
        {
          "id": "opt:slp:q13:unsure",
          "label": "Not sure",
          "value": "unsure"
        }
      ],
      "coachThinking": "Red flag for obstructive sleep apnea. Need clinical referral or mechanical intervention.",
      "humanMoment": "Snoring isn't just annoying for your partner; it means your body is physically struggling to get oxygen while you rest.",
      "createsFacts": [
        "fact:slp:q013_snoring:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q013_snoring:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q013_snoring:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q013_snoring:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q014_dry_mouth:primary",
      "purpose": "Assess Mouth breathing within Your Sleep Environment",
      "label": "Do you wake up with a dry mouth?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "your_sleep_environment"
      ],
      "options": [
        {
          "id": "opt:slp:q14:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q14:no",
          "label": "No",
          "value": "no"
        }
      ],
      "coachThinking": "Nasal breathing is mandatory for parasympathetic nervous system activation during sleep.",
      "humanMoment": "Waking up feeling like you swallowed sand means you were breathing through your mouth, which triggers a stress response in your sleep.",
      "createsFacts": [
        "fact:slp:q014_dry_mouth:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q014_dry_mouth:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q014_dry_mouth:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q014_dry_mouth:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q015_room_temp:primary",
      "purpose": "Assess Temperature regulation within Your Sleep Environment",
      "label": "Does your room feel too hot or too cold?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "your_sleep_environment"
      ],
      "options": [
        {
          "id": "opt:slp:q15:hot",
          "label": "Too hot",
          "value": "hot"
        },
        {
          "id": "opt:slp:q15:cold",
          "label": "Too cold",
          "value": "cold"
        },
        {
          "id": "opt:slp:q15:fine",
          "label": "Just right",
          "value": "fine"
        }
      ],
      "coachThinking": "Core body temperature must drop by 1-2 degrees to initiate and maintain sleep.",
      "humanMoment": "Waking up sweating or shivering is terrible. Your brain is highly sensitive to temperature during rest.",
      "createsFacts": [
        "fact:slp:q015_room_temp:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q015_room_temp:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q015_room_temp:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q015_room_temp:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q016_last_meal:primary",
      "purpose": "Assess Late meals within Food & Drink",
      "label": "When do you usually have your last meal?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "food_&_drink"
      ],
      "options": [
        {
          "id": "opt:slp:q16:early",
          "label": "More than 3 hours before bed",
          "value": "early"
        },
        {
          "id": "opt:slp:q16:late",
          "label": "1–2 hours before bed",
          "value": "late"
        },
        {
          "id": "opt:slp:q16:bedtime",
          "label": "Right before sleeping",
          "value": "bedtime"
        }
      ],
      "coachThinking": "Digestion raises core temperature and heart rate, directly antagonizing sleep architecture.",
      "humanMoment": "Eating late is often the only time we have to truly relax and enjoy food. But digesting a heavy meal is hard work for your body.",
      "createsFacts": [
        "fact:slp:q016_last_meal:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q016_last_meal:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q016_last_meal:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q016_last_meal:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q017_coffee_timing:primary",
      "purpose": "Assess Caffeine timing within Food & Drink",
      "label": "Do you drink coffee after 4 PM?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "food_&_drink"
      ],
      "options": [
        {
          "id": "opt:slp:q17:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q17:no",
          "label": "No",
          "value": "no"
        }
      ],
      "coachThinking": "Caffeine has a quarter-life of 10-12 hours. Afternoon coffee means high blood caffeine at midnight.",
      "humanMoment": "The afternoon slump is real, and coffee is the easiest fix. But it secretly ruins your night.",
      "createsFacts": [
        "fact:slp:q017_coffee_timing:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q017_coffee_timing:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q017_coffee_timing:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q017_coffee_timing:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q018_alcohol_night:primary",
      "purpose": "Assess Alcohol before bed within Food & Drink",
      "label": "Do you drink alcohol at night?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "food_&_drink"
      ],
      "options": [
        {
          "id": "opt:slp:q18:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q18:no",
          "label": "No",
          "value": "no"
        }
      ],
      "coachThinking": "Alcohol fragments REM sleep and destroys deep sleep architecture. Sedation is not sleep.",
      "humanMoment": "A drink is the fastest chemical way to shut off an anxious brain. It makes sense why it feels helpful, but it betrays you later.",
      "createsFacts": [
        "fact:slp:q018_alcohol_night:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q018_alcohol_night:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q018_alcohol_night:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q018_alcohol_night:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q019_hungry_sleep:primary",
      "purpose": "Assess Hunger at bedtime within Food & Drink",
      "label": "Do you feel hungry when trying to sleep?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "food_&_drink"
      ],
      "options": [
        {
          "id": "opt:slp:q19:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q19:no",
          "label": "No",
          "value": "no"
        }
      ],
      "coachThinking": "Caloric restriction or poor macro timing leads to nighttime hypoglycemia.",
      "humanMoment": "Trying to sleep while your stomach is growling is miserable and keeps your brain on high alert.",
      "createsFacts": [
        "fact:slp:q019_hungry_sleep:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q019_hungry_sleep:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q019_hungry_sleep:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q019_hungry_sleep:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q020_daytime_water:primary",
      "purpose": "Assess Hydration impact within Food & Drink",
      "label": "Do you drink enough water during the day?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "food_&_drink"
      ],
      "options": [
        {
          "id": "opt:slp:q20:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q20:no",
          "label": "No",
          "value": "no"
        }
      ],
      "coachThinking": "Backloading hydration causes nocturia (frequent urination at night), ruining sleep maintenance.",
      "humanMoment": "It is so easy to forget to drink water until you are suddenly incredibly thirsty right before bed.",
      "createsFacts": [
        "fact:slp:q020_daytime_water:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q020_daytime_water:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q020_daytime_water:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q020_daytime_water:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q021_wake_time:primary",
      "purpose": "Assess Wake time consistency within Daily Routine",
      "label": "What time do you usually wake up?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "daily_routine"
      ],
      "options": [
        {
          "id": "opt:slp:q21:early",
          "label": "Before 6 AM",
          "value": "early"
        },
        {
          "id": "opt:slp:q21:normal",
          "label": "6 AM - 8 AM",
          "value": "normal"
        },
        {
          "id": "opt:slp:q21:late",
          "label": "After 8 AM",
          "value": "late"
        }
      ],
      "coachThinking": "Establishing circadian anchor point. Wake time is the most critical biological signal.",
      "humanMoment": "Waking up is hard enough without feeling like you are already behind schedule.",
      "createsFacts": [
        "fact:slp:q021_wake_time:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q021_wake_time:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q021_wake_time:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q021_wake_time:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q022_bed_time:primary",
      "purpose": "Assess Bedtime alignment within Daily Routine",
      "label": "What time do you usually go to bed?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "daily_routine"
      ],
      "options": [
        {
          "id": "opt:slp:q22:early",
          "label": "Before 10 PM",
          "value": "early"
        },
        {
          "id": "opt:slp:q22:normal",
          "label": "10 PM - 12 AM",
          "value": "normal"
        },
        {
          "id": "opt:slp:q22:late",
          "label": "After Midnight",
          "value": "late"
        }
      ],
      "coachThinking": "Assess sleep window opportunity relative to wake time (chronotype vs social obligation).",
      "humanMoment": "Fighting the clock to get enough hours of sleep is incredibly stressful when your day runs long.",
      "createsFacts": [
        "fact:slp:q022_bed_time:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q022_bed_time:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q022_bed_time:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q022_bed_time:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q023_sleep_consistency:primary",
      "purpose": "Assess Sleep consistency within Daily Routine",
      "label": "Do you sleep at the same time every day?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "daily_routine"
      ],
      "options": [
        {
          "id": "opt:slp:q23:always",
          "label": "Always",
          "value": "always"
        },
        {
          "id": "opt:slp:q23:most",
          "label": "Most days",
          "value": "most"
        },
        {
          "id": "opt:slp:q23:rarely",
          "label": "Rarely",
          "value": "rarely"
        },
        {
          "id": "opt:slp:q23:never",
          "label": "Never",
          "value": "never"
        }
      ],
      "coachThinking": "Social jetlag and circadian arrhythmia. Consistency matters more than total duration for sleep quality.",
      "humanMoment": "When every day brings different demands, maintaining a strict sleep schedule feels like an impossible luxury.",
      "createsFacts": [
        "fact:slp:q023_sleep_consistency:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q023_sleep_consistency:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q023_sleep_consistency:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q023_sleep_consistency:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q024_naps:primary",
      "purpose": "Assess Daytime naps within Daily Routine",
      "label": "Do you usually take naps?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "daily_routine"
      ],
      "options": [
        {
          "id": "opt:slp:q24:never",
          "label": "Never",
          "value": "never"
        },
        {
          "id": "opt:slp:q24:sometimes",
          "label": "Sometimes",
          "value": "sometimes"
        },
        {
          "id": "opt:slp:q24:always",
          "label": "Almost every day",
          "value": "always"
        }
      ],
      "coachThinking": "Napping relieves sleep pressure (adenosine). If taken too late, it destroys nighttime sleep onset.",
      "humanMoment": "A nap can feel like a total lifesaver when you are completely depleted, but it often leaves you groggy.",
      "createsFacts": [
        "fact:slp:q024_naps:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q024_naps:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q024_naps:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q024_naps:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q025_nap_length:primary",
      "purpose": "Assess Nap duration within Daily Routine",
      "label": "If you nap, how long do you usually sleep?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "daily_routine"
      ],
      "options": [
        {
          "id": "opt:slp:q25:short",
          "label": "Less than 30 minutes",
          "value": "short"
        },
        {
          "id": "opt:slp:q25:long",
          "label": "30 - 60 minutes",
          "value": "long"
        },
        {
          "id": "opt:slp:q25:deep",
          "label": "More than an hour",
          "value": "deep"
        }
      ],
      "coachThinking": "Deep sleep inertia. User is entering Slow Wave Sleep during the day due to severe sleep debt.",
      "humanMoment": "Waking up from a 2-hour nap feeling confused about what year it is completely ruins the rest of your day.",
      "createsFacts": [
        "fact:slp:q025_nap_length:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q025_nap_length:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q025_nap_length:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q025_nap_length:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q026_morning_sunlight:primary",
      "purpose": "Assess Circadian light exposure within Morning",
      "label": "Do you get sunlight within one hour of waking up?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "morning"
      ],
      "options": [
        {
          "id": "opt:slp:q26:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q26:no",
          "label": "No",
          "value": "no"
        }
      ],
      "coachThinking": "Absence of lux exposure delays the cortisol peak, causing morning lethargy and delayed melatonin onset at night.",
      "humanMoment": "Rushing to get ready in a dark house or apartment means you start your day without your body actually knowing it is morning.",
      "createsFacts": [
        "fact:slp:q026_morning_sunlight:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q026_morning_sunlight:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q026_morning_sunlight:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q026_morning_sunlight:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q027_first_coffee:primary",
      "purpose": "Assess Caffeine timing within Morning",
      "label": "How soon after waking do you drink your first coffee or tea?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "morning"
      ],
      "options": [
        {
          "id": "opt:slp:q27:immediate",
          "label": "Immediately",
          "value": "immediate"
        },
        {
          "id": "opt:slp:q27:delayed",
          "label": "After an hour or more",
          "value": "delayed"
        },
        {
          "id": "opt:slp:q27:never",
          "label": "I do not drink caffeine",
          "value": "never"
        }
      ],
      "coachThinking": "Immediate caffeine blocks adenosine receptors before natural clearance, guaranteeing an afternoon crash.",
      "humanMoment": "Coffee is often the only thing that makes getting out of bed bearable. It feels essential.",
      "createsFacts": [
        "fact:slp:q027_first_coffee:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q027_first_coffee:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q027_first_coffee:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q027_first_coffee:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q028_morning_sleepy:primary",
      "purpose": "Assess Morning fatigue within Morning",
      "label": "Do you usually feel sleepy during the morning?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "morning"
      ],
      "options": [
        {
          "id": "opt:slp:q28:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q28:no",
          "label": "No",
          "value": "no"
        }
      ],
      "coachThinking": "Sleep inertia or insufficient deep sleep. The brain has not fully transitioned to wakefulness.",
      "humanMoment": "Sitting at your desk struggling to keep your eyes open at 10 AM makes the day feel impossibly long.",
      "createsFacts": [
        "fact:slp:q028_morning_sleepy:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q028_morning_sleepy:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q028_morning_sleepy:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q028_morning_sleepy:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q029_caffeine_dependent:primary",
      "purpose": "Assess Caffeine dependence within Morning",
      "label": "Do you need caffeine just to feel normal?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "morning"
      ],
      "options": [
        {
          "id": "opt:slp:q29:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q29:no",
          "label": "No",
          "value": "no"
        }
      ],
      "coachThinking": "Adenosine receptor upregulation due to chronic high caffeine intake. User is constantly fighting withdrawal.",
      "humanMoment": "When caffeine stops giving you energy and just brings you back to baseline, you are essentially borrowing tomorrow's energy to survive today.",
      "createsFacts": [
        "fact:slp:q029_caffeine_dependent:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q029_caffeine_dependent:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q029_caffeine_dependent:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q029_caffeine_dependent:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q030_afternoon_slump:primary",
      "purpose": "Assess Post-lunch sleepiness within Daytime",
      "label": "Do you feel sleepy after lunch?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "daytime"
      ],
      "options": [
        {
          "id": "opt:slp:q30:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q30:no",
          "label": "No",
          "value": "no"
        }
      ],
      "coachThinking": "Postprandial somnolence caused by a massive insulin spike from a carb-heavy lunch.",
      "humanMoment": "The post-lunch crash is brutal. Staring at your computer screen while your eyelids feel like lead is agonizing.",
      "createsFacts": [
        "fact:slp:q030_afternoon_slump:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q030_afternoon_slump:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q030_afternoon_slump:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q030_afternoon_slump:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q031_meeting_struggle:primary",
      "purpose": "Assess Daytime alertness within Daytime",
      "label": "Do you struggle to stay awake during meetings or classes?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "daytime"
      ],
      "options": [
        {
          "id": "opt:slp:q31:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q31:no",
          "label": "No",
          "value": "no"
        }
      ],
      "coachThinking": "Lack of stimulation unmasks severe underlying sleep debt. The user is dangerously sleep-deprived.",
      "humanMoment": "Pinching yourself to stay awake in a quiet room is embarrassing and physically painful.",
      "createsFacts": [
        "fact:slp:q031_meeting_struggle:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q031_meeting_struggle:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q031_meeting_struggle:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q031_meeting_struggle:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q032_sleepy_driving:primary",
      "purpose": "Assess Microsleep risk within Daytime",
      "label": "Do you ever feel sleepy while driving?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "daytime"
      ],
      "options": [
        {
          "id": "opt:slp:q32:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q32:no",
          "label": "No",
          "value": "no"
        }
      ],
      "coachThinking": "Critical safety risk. Microsleeps indicate absolute systemic exhaustion or severe sleep apnea.",
      "humanMoment": "Feeling your head nod on the highway is terrifying. It is a massive red flag that your body is shutting down.",
      "createsFacts": [
        "fact:slp:q032_sleepy_driving:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q032_sleepy_driving:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q032_sleepy_driving:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q032_sleepy_driving:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q033_yawning:primary",
      "purpose": "Assess Chronic yawning within Daytime",
      "label": "Do you often yawn throughout the day?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "daytime"
      ],
      "options": [
        {
          "id": "opt:slp:q33:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q33:no",
          "label": "No",
          "value": "no"
        }
      ],
      "coachThinking": "Brain cooling mechanism or oxygen regulation due to poor nighttime respiration (possible apnea).",
      "humanMoment": "Constantly yawning makes you look and feel bored, even when you are actually highly engaged but just exhausted.",
      "createsFacts": [
        "fact:slp:q033_yawning:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q033_yawning:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q033_yawning:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q033_yawning:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q034_night_shift:primary",
      "purpose": "Assess Shift work within Special Situations",
      "label": "Do you work night shifts?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "special_situations"
      ],
      "options": [
        {
          "id": "opt:slp:q34:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q34:no",
          "label": "No",
          "value": "no"
        }
      ],
      "coachThinking": "Complete circadian inversion. Must control light exposure to trick the SCN (suprachiasmatic nucleus).",
      "humanMoment": "Shift work goes against millions of years of human biology. You are asking your body to do a remarkably difficult thing.",
      "createsFacts": [
        "fact:slp:q034_night_shift:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q034_night_shift:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q034_night_shift:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q034_night_shift:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q035_jet_lag:primary",
      "purpose": "Assess Jet lag within Special Situations",
      "label": "Do you travel across time zones often?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "special_situations"
      ],
      "options": [
        {
          "id": "opt:slp:q35:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q35:no",
          "label": "No",
          "value": "no"
        }
      ],
      "coachThinking": "Rapid circadian phase shift. The fastest anchor is food timing, not just light.",
      "humanMoment": "Jet lag makes you feel entirely disconnected from reality. Your body is in one place, but your brain is in another.",
      "createsFacts": [
        "fact:slp:q035_jet_lag:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q035_jet_lag:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q035_jet_lag:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q035_jet_lag:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q036_weekend_sleep:primary",
      "purpose": "Assess Weekend sleep variation within Special Situations",
      "label": "Do you sleep differently on weekends?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "special_situations"
      ],
      "options": [
        {
          "id": "opt:slp:q36:yes",
          "label": "Yes, I sleep much longer",
          "value": "yes"
        },
        {
          "id": "opt:slp:q36:no",
          "label": "No, it is the same",
          "value": "no"
        }
      ],
      "coachThinking": "Social jetlag. \"Catching up\" on sleep disrupts the circadian anchor, making Monday mornings agonizing.",
      "humanMoment": "Sleeping in on Saturday feels amazing, but it guarantees that Sunday night will be a sleepless disaster.",
      "createsFacts": [
        "fact:slp:q036_weekend_sleep:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q036_weekend_sleep:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q036_weekend_sleep:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q036_weekend_sleep:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q037_sleep_change:primary",
      "purpose": "Assess Recent sleep changes within Special Situations",
      "label": "Has your sleep changed recently?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "special_situations"
      ],
      "options": [
        {
          "id": "opt:slp:q37:yes",
          "label": "Yes, it has gotten worse",
          "value": "yes"
        },
        {
          "id": "opt:slp:q37:no",
          "label": "No",
          "value": "no"
        }
      ],
      "coachThinking": "Acute insomnia is usually triggered by a specific stressful life event, illness, or medication change.",
      "humanMoment": "A sudden loss of good sleep is terrifying. It makes you feel like you are losing control of your body.",
      "createsFacts": [
        "fact:slp:q037_sleep_change:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q037_sleep_change:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q037_sleep_change:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q037_sleep_change:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q038_menstrual_cycle:primary",
      "purpose": "Assess Menstrual cycle sleep within Women Only",
      "label": "Does your monthly cycle affect your sleep?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "women_only"
      ],
      "options": [
        {
          "id": "opt:slp:q38:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q38:no",
          "label": "No",
          "value": "no"
        }
      ],
      "dependsOn": [
        "fact:master:female"
      ],
      "coachThinking": "Progesterone drop before menstruation drastically lowers the seizure threshold and raises core body temperature, causing insomnia.",
      "humanMoment": "Tossing and turning during your luteal phase is incredibly frustrating, especially when society expects you to perform identically every day.",
      "createsFacts": [
        "fact:slp:q038_menstrual_cycle:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q038_menstrual_cycle:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q038_menstrual_cycle:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q038_menstrual_cycle:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q039_pregnancy_sleep:primary",
      "purpose": "Assess Pregnancy sleep within Women Only",
      "label": "Are you currently pregnant?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "women_only"
      ],
      "options": [
        {
          "id": "opt:slp:q39:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q39:no",
          "label": "No",
          "value": "no"
        }
      ],
      "dependsOn": [
        "fact:master:female"
      ],
      "coachThinking": "Physical obstruction and hormonal flooding. Need mechanical support for alignment.",
      "humanMoment": "Trying to sleep while pregnant is a physical battle. Between the bladder pressure and the physical discomfort, rest feels impossible.",
      "createsFacts": [
        "fact:slp:q039_pregnancy_sleep:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q039_pregnancy_sleep:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q039_pregnancy_sleep:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q039_pregnancy_sleep:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:slp:q040_menopause_sleep:primary",
      "purpose": "Assess Menopause symptoms within Women Only",
      "label": "Have menopause symptoms affected your sleep?",
      "type": "single-choice",
      "tags": [
        "sleep",
        "women_only"
      ],
      "options": [
        {
          "id": "opt:slp:q40:yes",
          "label": "Yes",
          "value": "yes"
        },
        {
          "id": "opt:slp:q40:no",
          "label": "No",
          "value": "no"
        }
      ],
      "dependsOn": [
        "fact:master:female"
      ],
      "coachThinking": "Estrogen withdrawal disrupts the hypothalamus (the brain's thermostat), causing night sweats and waking.",
      "humanMoment": "Hot flashes tearing through your body at 2 AM are deeply disruptive. Your brain is desperately trying to regulate a changing system.",
      "createsFacts": [
        "fact:slp:q040_menopause_sleep:struggle"
      ],
      "supportsScores": [
        "score:slp:restoration"
      ],
      "supportsInsights": [
        "insight:slp:q040_menopause_sleep:impact"
      ],
      "supportsDecisions": [
        "dec:slp:q040_menopause_sleep:clinical"
      ],
      "supportsRecommendations": [
        "rec:slp:q040_menopause_sleep:action"
      ],
      "expectedConfidenceGain": 10
    },
    {
      "id": "q:weight:wm_bespoke_1:primary",
      "purpose": "Assess Desk job inactivity",
      "label": "Does your daily routine, especially things like desk job inactivity, disrupt your healthy habits?",
      "type": "single-choice",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "options": [
        {
          "id": "opt:w:wm_bespoke_1:yes",
          "label": "Yes, this is a major issue",
          "value": "major"
        },
        {
          "id": "opt:w:wm_bespoke_1:somewhat",
          "label": "Sometimes",
          "value": "sometimes"
        },
        {
          "id": "opt:w:wm_bespoke_1:no",
          "label": "Not an issue for me",
          "value": "none"
        }
      ],
      "coachThinking": "Focusing on NEAT (Non-Exercise Activity Thermogenesis). We need low-friction movement triggers that don't require changing clothes or going to a gym.",
      "humanMoment": "Sitting at a desk all day wasn't how human bodies were meant to live. Finding time to move feels impossible when your inbox never stops.",
      "createsFacts": [
        "fact:weight:wm_bespoke_1:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_bespoke_1:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_bespoke_1:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_bespoke_1:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:weight:wm_bespoke_2:primary",
      "purpose": "Assess Stress eating after work",
      "label": "When dealing with strong emotions, do you find yourself drawn to stress eating after work?",
      "type": "single-choice",
      "tags": [
        "weight",
        "emotional"
      ],
      "options": [
        {
          "id": "opt:w:wm_bespoke_2:yes",
          "label": "Yes, this is a major issue",
          "value": "major"
        },
        {
          "id": "opt:w:wm_bespoke_2:somewhat",
          "label": "Sometimes",
          "value": "sometimes"
        },
        {
          "id": "opt:w:wm_bespoke_2:no",
          "label": "Not an issue for me",
          "value": "none"
        }
      ],
      "coachThinking": "Need to decouple decompression from food intake. Focus on transitional routines between work and home.",
      "humanMoment": "When you've been putting out fires all day, food is often the fastest, most reliable comfort available. It's not a lack of willpower; it's your brain asking for relief.",
      "createsFacts": [
        "fact:weight:wm_bespoke_2:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_bespoke_2:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_bespoke_2:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_bespoke_2:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:weight:wm_bespoke_3:primary",
      "purpose": "Assess Postpartum exhaustion",
      "label": "Have you noticed that postpartum exhaustion is making it physically harder to manage your weight?",
      "type": "single-choice",
      "tags": [
        "weight",
        "clinical"
      ],
      "options": [
        {
          "id": "opt:w:wm_bespoke_3:yes",
          "label": "Yes, this is a major issue",
          "value": "major"
        },
        {
          "id": "opt:w:wm_bespoke_3:somewhat",
          "label": "Sometimes",
          "value": "sometimes"
        },
        {
          "id": "opt:w:wm_bespoke_3:no",
          "label": "Not an issue for me",
          "value": "none"
        }
      ],
      "dependsOn": [
        "fact:master:female",
        "fact:master:has_children"
      ],
      "coachThinking": "Survival mode is active. High cortisol, low sleep. Caloric deficit is dangerous right now. Focus entirely on nutrient density and hydration.",
      "humanMoment": "You are keeping a tiny human alive, which is a full-time job running on empty. Moms always put themselves last, and it is entirely unfair.",
      "createsFacts": [
        "fact:weight:wm_bespoke_3:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_bespoke_3:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_bespoke_3:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_bespoke_3:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:weight:wm_bespoke_4:primary",
      "purpose": "Assess PCOS belly fat",
      "label": "Have you noticed that pcos belly fat is making it physically harder to manage your weight?",
      "type": "single-choice",
      "tags": [
        "weight",
        "clinical"
      ],
      "options": [
        {
          "id": "opt:w:wm_bespoke_4:yes",
          "label": "Yes, this is a major issue",
          "value": "major"
        },
        {
          "id": "opt:w:wm_bespoke_4:somewhat",
          "label": "Sometimes",
          "value": "sometimes"
        },
        {
          "id": "opt:w:wm_bespoke_4:no",
          "label": "Not an issue for me",
          "value": "none"
        }
      ],
      "dependsOn": [
        "fact:master:female"
      ],
      "coachThinking": "Insulin resistance is the primary driver here. Traditional low-calorie diets will fail and cause metabolic damage. Focus entirely on glucose curves.",
      "humanMoment": "PCOS makes your body fight against you. It's deeply frustrating when you're doing everything 'right' and the scale doesn't move because your hormones are holding onto everything.",
      "createsFacts": [
        "fact:weight:wm_bespoke_4:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_bespoke_4:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_bespoke_4:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_bespoke_4:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:weight:wm_bespoke_5:primary",
      "purpose": "Assess Budget constraints",
      "label": "Does your daily routine, especially things like budget constraints, disrupt your healthy habits?",
      "type": "single-choice",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "options": [
        {
          "id": "opt:w:wm_bespoke_5:yes",
          "label": "Yes, this is a major issue",
          "value": "major"
        },
        {
          "id": "opt:w:wm_bespoke_5:somewhat",
          "label": "Sometimes",
          "value": "sometimes"
        },
        {
          "id": "opt:w:wm_bespoke_5:no",
          "label": "Not an issue for me",
          "value": "none"
        }
      ],
      "coachThinking": "Focus on cheap, shelf-stable proteins and frozen vegetables. Remove the stigma that health equals organic or expensive.",
      "humanMoment": "Eating healthy on a tight budget feels like a luxury reserved for other people. It is incredibly stressful trying to manage your health when money is tight.",
      "createsFacts": [
        "fact:weight:wm_bespoke_5:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_bespoke_5:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_bespoke_5:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_bespoke_5:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:weight:wm_bespoke_6:primary",
      "purpose": "Assess Late night TV snacking",
      "label": "Does your daily routine, especially things like late night tv snacking, disrupt your healthy habits?",
      "type": "single-choice",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "options": [
        {
          "id": "opt:w:wm_bespoke_6:yes",
          "label": "Yes, this is a major issue",
          "value": "major"
        },
        {
          "id": "opt:w:wm_bespoke_6:somewhat",
          "label": "Sometimes",
          "value": "sometimes"
        },
        {
          "id": "opt:w:wm_bespoke_6:no",
          "label": "Not an issue for me",
          "value": "none"
        }
      ],
      "coachThinking": "Late-night eating disrupts sleep architecture and digestion. Need to break the psychological anchor between the screen and the snack.",
      "humanMoment": "Late nights are when your willpower is at zero. After studying or stressing all day, eating while watching a show feels like the ultimate reward.",
      "createsFacts": [
        "fact:weight:wm_bespoke_6:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_bespoke_6:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_bespoke_6:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_bespoke_6:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:weight:wm_bespoke_7:primary",
      "purpose": "Assess Prediabetes risk",
      "label": "Have you noticed that prediabetes risk is making it physically harder to manage your weight?",
      "type": "single-choice",
      "tags": [
        "weight",
        "clinical"
      ],
      "options": [
        {
          "id": "opt:w:wm_bespoke_7:yes",
          "label": "Yes, this is a major issue",
          "value": "major"
        },
        {
          "id": "opt:w:wm_bespoke_7:somewhat",
          "label": "Sometimes",
          "value": "sometimes"
        },
        {
          "id": "opt:w:wm_bespoke_7:no",
          "label": "Not an issue for me",
          "value": "none"
        }
      ],
      "coachThinking": "The goal is glycemic control and muscular insulin sensitivity. Prioritize walking after meals to clear postprandial glucose.",
      "humanMoment": "Hearing a doctor talk about blood sugar or diabetes can be terrifying. It feels like a sudden cliff, but your body is incredibly resilient and capable of healing.",
      "createsFacts": [
        "fact:weight:wm_bespoke_7:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_bespoke_7:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_bespoke_7:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_bespoke_7:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:weight:wm_bespoke_8:primary",
      "purpose": "Assess Joint pain during cardio",
      "label": "Have you noticed that joint pain during cardio is making it physically harder to manage your weight?",
      "type": "single-choice",
      "tags": [
        "weight",
        "clinical"
      ],
      "options": [
        {
          "id": "opt:w:wm_bespoke_8:yes",
          "label": "Yes, this is a major issue",
          "value": "major"
        },
        {
          "id": "opt:w:wm_bespoke_8:somewhat",
          "label": "Sometimes",
          "value": "sometimes"
        },
        {
          "id": "opt:w:wm_bespoke_8:no",
          "label": "Not an issue for me",
          "value": "none"
        }
      ],
      "coachThinking": "Remove high-impact cardio. Pivot to low-impact strength or water-based movement. Protect the joints at all costs to preserve morale.",
      "humanMoment": "Wanting to move but being stopped by physical pain is demoralizing. You shouldn't have to push through pain just to get healthy.",
      "createsFacts": [
        "fact:weight:wm_bespoke_8:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_bespoke_8:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_bespoke_8:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_bespoke_8:action"
      ],
      "expectedConfidenceGain": 12
    },
    {
      "id": "q:weight:wm_filler_9:primary",
      "purpose": "Assess General Factor 0",
      "label": "Do you struggle with general factor 0?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_9:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_9:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_9:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_9:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_10:primary",
      "purpose": "Assess General Factor 1",
      "label": "Do you struggle with general factor 1?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_10:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_10:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_10:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_10:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_11:primary",
      "purpose": "Assess General Factor 2",
      "label": "Do you struggle with general factor 2?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_11:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_11:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_11:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_11:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_12:primary",
      "purpose": "Assess General Factor 3",
      "label": "Do you struggle with general factor 3?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_12:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_12:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_12:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_12:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_13:primary",
      "purpose": "Assess General Factor 4",
      "label": "Do you struggle with general factor 4?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_13:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_13:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_13:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_13:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_14:primary",
      "purpose": "Assess General Factor 5",
      "label": "Do you struggle with general factor 5?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_14:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_14:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_14:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_14:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_15:primary",
      "purpose": "Assess General Factor 6",
      "label": "Do you struggle with general factor 6?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_15:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_15:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_15:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_15:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_16:primary",
      "purpose": "Assess General Factor 7",
      "label": "Do you struggle with general factor 7?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_16:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_16:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_16:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_16:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_17:primary",
      "purpose": "Assess General Factor 8",
      "label": "Do you struggle with general factor 8?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_17:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_17:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_17:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_17:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_18:primary",
      "purpose": "Assess General Factor 9",
      "label": "Do you struggle with general factor 9?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_18:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_18:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_18:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_18:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_19:primary",
      "purpose": "Assess General Factor 10",
      "label": "Do you struggle with general factor 10?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_19:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_19:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_19:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_19:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_20:primary",
      "purpose": "Assess General Factor 11",
      "label": "Do you struggle with general factor 11?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_20:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_20:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_20:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_20:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_21:primary",
      "purpose": "Assess General Factor 12",
      "label": "Do you struggle with general factor 12?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_21:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_21:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_21:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_21:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_22:primary",
      "purpose": "Assess General Factor 13",
      "label": "Do you struggle with general factor 13?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_22:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_22:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_22:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_22:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_23:primary",
      "purpose": "Assess General Factor 14",
      "label": "Do you struggle with general factor 14?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_23:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_23:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_23:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_23:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_24:primary",
      "purpose": "Assess General Factor 15",
      "label": "Do you struggle with general factor 15?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_24:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_24:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_24:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_24:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_25:primary",
      "purpose": "Assess General Factor 16",
      "label": "Do you struggle with general factor 16?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_25:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_25:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_25:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_25:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_26:primary",
      "purpose": "Assess General Factor 17",
      "label": "Do you struggle with general factor 17?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_26:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_26:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_26:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_26:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_27:primary",
      "purpose": "Assess General Factor 18",
      "label": "Do you struggle with general factor 18?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_27:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_27:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_27:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_27:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_28:primary",
      "purpose": "Assess General Factor 19",
      "label": "Do you struggle with general factor 19?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_28:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_28:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_28:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_28:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_29:primary",
      "purpose": "Assess General Factor 20",
      "label": "Do you struggle with general factor 20?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_29:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_29:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_29:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_29:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_30:primary",
      "purpose": "Assess General Factor 21",
      "label": "Do you struggle with general factor 21?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_30:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_30:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_30:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_30:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_31:primary",
      "purpose": "Assess General Factor 22",
      "label": "Do you struggle with general factor 22?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_31:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_31:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_31:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_31:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_32:primary",
      "purpose": "Assess General Factor 23",
      "label": "Do you struggle with general factor 23?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_32:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_32:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_32:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_32:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_33:primary",
      "purpose": "Assess General Factor 24",
      "label": "Do you struggle with general factor 24?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_33:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_33:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_33:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_33:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_34:primary",
      "purpose": "Assess General Factor 25",
      "label": "Do you struggle with general factor 25?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_34:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_34:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_34:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_34:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_35:primary",
      "purpose": "Assess General Factor 26",
      "label": "Do you struggle with general factor 26?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_35:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_35:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_35:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_35:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_36:primary",
      "purpose": "Assess General Factor 27",
      "label": "Do you struggle with general factor 27?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_36:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_36:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_36:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_36:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_37:primary",
      "purpose": "Assess General Factor 28",
      "label": "Do you struggle with general factor 28?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_37:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_37:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_37:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_37:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_38:primary",
      "purpose": "Assess General Factor 29",
      "label": "Do you struggle with general factor 29?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_38:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_38:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_38:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_38:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_39:primary",
      "purpose": "Assess General Factor 30",
      "label": "Do you struggle with general factor 30?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_39:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_39:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_39:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_39:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_40:primary",
      "purpose": "Assess General Factor 31",
      "label": "Do you struggle with general factor 31?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_40:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_40:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_40:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_40:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_41:primary",
      "purpose": "Assess General Factor 32",
      "label": "Do you struggle with general factor 32?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_41:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_41:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_41:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_41:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_42:primary",
      "purpose": "Assess General Factor 33",
      "label": "Do you struggle with general factor 33?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_42:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_42:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_42:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_42:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_43:primary",
      "purpose": "Assess General Factor 34",
      "label": "Do you struggle with general factor 34?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_43:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_43:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_43:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_43:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_44:primary",
      "purpose": "Assess General Factor 35",
      "label": "Do you struggle with general factor 35?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_44:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_44:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_44:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_44:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_45:primary",
      "purpose": "Assess General Factor 36",
      "label": "Do you struggle with general factor 36?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_45:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_45:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_45:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_45:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_46:primary",
      "purpose": "Assess General Factor 37",
      "label": "Do you struggle with general factor 37?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_46:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_46:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_46:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_46:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_47:primary",
      "purpose": "Assess General Factor 38",
      "label": "Do you struggle with general factor 38?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_47:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_47:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_47:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_47:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_48:primary",
      "purpose": "Assess General Factor 39",
      "label": "Do you struggle with general factor 39?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_48:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_48:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_48:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_48:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_49:primary",
      "purpose": "Assess General Factor 40",
      "label": "Do you struggle with general factor 40?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_49:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_49:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_49:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_49:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_50:primary",
      "purpose": "Assess General Factor 41",
      "label": "Do you struggle with general factor 41?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_50:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_50:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_50:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_50:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_51:primary",
      "purpose": "Assess General Factor 42",
      "label": "Do you struggle with general factor 42?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_51:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_51:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_51:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_51:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_52:primary",
      "purpose": "Assess General Factor 43",
      "label": "Do you struggle with general factor 43?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_52:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_52:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_52:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_52:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_53:primary",
      "purpose": "Assess General Factor 44",
      "label": "Do you struggle with general factor 44?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_53:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_53:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_53:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_53:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_54:primary",
      "purpose": "Assess General Factor 45",
      "label": "Do you struggle with general factor 45?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_54:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_54:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_54:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_54:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_55:primary",
      "purpose": "Assess General Factor 46",
      "label": "Do you struggle with general factor 46?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_55:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_55:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_55:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_55:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_56:primary",
      "purpose": "Assess General Factor 47",
      "label": "Do you struggle with general factor 47?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_56:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_56:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_56:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_56:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_57:primary",
      "purpose": "Assess General Factor 48",
      "label": "Do you struggle with general factor 48?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_57:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_57:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_57:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_57:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_58:primary",
      "purpose": "Assess General Factor 49",
      "label": "Do you struggle with general factor 49?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_58:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_58:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_58:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_58:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_59:primary",
      "purpose": "Assess General Factor 50",
      "label": "Do you struggle with general factor 50?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_59:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_59:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_59:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_59:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_60:primary",
      "purpose": "Assess General Factor 51",
      "label": "Do you struggle with general factor 51?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_60:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_60:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_60:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_60:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_61:primary",
      "purpose": "Assess General Factor 52",
      "label": "Do you struggle with general factor 52?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_61:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_61:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_61:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_61:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_62:primary",
      "purpose": "Assess General Factor 53",
      "label": "Do you struggle with general factor 53?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_62:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_62:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_62:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_62:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_63:primary",
      "purpose": "Assess General Factor 54",
      "label": "Do you struggle with general factor 54?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_63:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_63:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_63:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_63:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_64:primary",
      "purpose": "Assess General Factor 55",
      "label": "Do you struggle with general factor 55?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_64:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_64:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_64:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_64:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_65:primary",
      "purpose": "Assess General Factor 56",
      "label": "Do you struggle with general factor 56?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_65:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_65:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_65:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_65:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_66:primary",
      "purpose": "Assess General Factor 57",
      "label": "Do you struggle with general factor 57?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_66:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_66:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_66:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_66:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_67:primary",
      "purpose": "Assess General Factor 58",
      "label": "Do you struggle with general factor 58?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_67:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_67:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_67:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_67:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_68:primary",
      "purpose": "Assess General Factor 59",
      "label": "Do you struggle with general factor 59?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_68:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_68:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_68:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_68:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_69:primary",
      "purpose": "Assess General Factor 60",
      "label": "Do you struggle with general factor 60?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_69:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_69:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_69:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_69:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_70:primary",
      "purpose": "Assess General Factor 61",
      "label": "Do you struggle with general factor 61?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_70:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_70:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_70:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_70:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_71:primary",
      "purpose": "Assess General Factor 62",
      "label": "Do you struggle with general factor 62?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_71:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_71:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_71:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_71:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_72:primary",
      "purpose": "Assess General Factor 63",
      "label": "Do you struggle with general factor 63?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_72:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_72:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_72:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_72:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_73:primary",
      "purpose": "Assess General Factor 64",
      "label": "Do you struggle with general factor 64?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_73:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_73:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_73:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_73:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_74:primary",
      "purpose": "Assess General Factor 65",
      "label": "Do you struggle with general factor 65?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_74:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_74:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_74:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_74:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_75:primary",
      "purpose": "Assess General Factor 66",
      "label": "Do you struggle with general factor 66?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_75:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_75:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_75:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_75:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_76:primary",
      "purpose": "Assess General Factor 67",
      "label": "Do you struggle with general factor 67?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_76:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_76:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_76:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_76:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_77:primary",
      "purpose": "Assess General Factor 68",
      "label": "Do you struggle with general factor 68?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_77:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_77:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_77:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_77:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_78:primary",
      "purpose": "Assess General Factor 69",
      "label": "Do you struggle with general factor 69?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_78:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_78:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_78:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_78:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_79:primary",
      "purpose": "Assess General Factor 70",
      "label": "Do you struggle with general factor 70?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_79:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_79:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_79:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_79:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_80:primary",
      "purpose": "Assess General Factor 71",
      "label": "Do you struggle with general factor 71?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_80:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_80:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_80:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_80:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_81:primary",
      "purpose": "Assess General Factor 72",
      "label": "Do you struggle with general factor 72?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_81:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_81:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_81:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_81:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_82:primary",
      "purpose": "Assess General Factor 73",
      "label": "Do you struggle with general factor 73?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_82:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_82:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_82:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_82:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_83:primary",
      "purpose": "Assess General Factor 74",
      "label": "Do you struggle with general factor 74?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_83:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_83:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_83:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_83:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_84:primary",
      "purpose": "Assess General Factor 75",
      "label": "Do you struggle with general factor 75?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_84:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_84:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_84:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_84:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_85:primary",
      "purpose": "Assess General Factor 76",
      "label": "Do you struggle with general factor 76?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_85:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_85:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_85:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_85:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_86:primary",
      "purpose": "Assess General Factor 77",
      "label": "Do you struggle with general factor 77?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_86:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_86:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_86:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_86:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_87:primary",
      "purpose": "Assess General Factor 78",
      "label": "Do you struggle with general factor 78?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_87:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_87:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_87:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_87:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_88:primary",
      "purpose": "Assess General Factor 79",
      "label": "Do you struggle with general factor 79?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_88:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_88:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_88:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_88:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_89:primary",
      "purpose": "Assess General Factor 80",
      "label": "Do you struggle with general factor 80?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_89:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_89:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_89:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_89:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_90:primary",
      "purpose": "Assess General Factor 81",
      "label": "Do you struggle with general factor 81?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_90:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_90:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_90:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_90:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_91:primary",
      "purpose": "Assess General Factor 82",
      "label": "Do you struggle with general factor 82?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_91:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_91:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_91:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_91:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_92:primary",
      "purpose": "Assess General Factor 83",
      "label": "Do you struggle with general factor 83?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_92:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_92:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_92:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_92:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_93:primary",
      "purpose": "Assess General Factor 84",
      "label": "Do you struggle with general factor 84?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_93:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_93:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_93:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_93:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_94:primary",
      "purpose": "Assess General Factor 85",
      "label": "Do you struggle with general factor 85?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_94:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_94:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_94:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_94:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_95:primary",
      "purpose": "Assess General Factor 86",
      "label": "Do you struggle with general factor 86?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_95:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_95:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_95:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_95:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_96:primary",
      "purpose": "Assess General Factor 87",
      "label": "Do you struggle with general factor 87?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_96:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_96:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_96:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_96:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_97:primary",
      "purpose": "Assess General Factor 88",
      "label": "Do you struggle with general factor 88?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_97:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_97:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_97:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_97:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_98:primary",
      "purpose": "Assess General Factor 89",
      "label": "Do you struggle with general factor 89?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_98:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_98:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_98:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_98:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_99:primary",
      "purpose": "Assess General Factor 90",
      "label": "Do you struggle with general factor 90?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_99:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_99:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_99:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_99:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_100:primary",
      "purpose": "Assess General Factor 91",
      "label": "Do you struggle with general factor 91?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_100:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_100:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_100:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_100:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_101:primary",
      "purpose": "Assess General Factor 92",
      "label": "Do you struggle with general factor 92?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_101:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_101:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_101:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_101:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_102:primary",
      "purpose": "Assess General Factor 93",
      "label": "Do you struggle with general factor 93?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_102:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_102:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_102:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_102:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_103:primary",
      "purpose": "Assess General Factor 94",
      "label": "Do you struggle with general factor 94?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_103:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_103:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_103:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_103:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_104:primary",
      "purpose": "Assess General Factor 95",
      "label": "Do you struggle with general factor 95?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_104:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_104:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_104:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_104:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_105:primary",
      "purpose": "Assess General Factor 96",
      "label": "Do you struggle with general factor 96?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_105:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_105:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_105:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_105:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_106:primary",
      "purpose": "Assess General Factor 97",
      "label": "Do you struggle with general factor 97?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_106:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_106:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_106:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_106:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_107:primary",
      "purpose": "Assess General Factor 98",
      "label": "Do you struggle with general factor 98?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_107:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_107:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_107:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_107:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_108:primary",
      "purpose": "Assess General Factor 99",
      "label": "Do you struggle with general factor 99?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_108:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_108:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_108:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_108:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_109:primary",
      "purpose": "Assess General Factor 100",
      "label": "Do you struggle with general factor 100?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_109:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_109:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_109:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_109:action"
      ],
      "expectedConfidenceGain": 5
    },
    {
      "id": "q:weight:wm_filler_110:primary",
      "purpose": "Assess General Factor 101",
      "label": "Do you struggle with general factor 101?",
      "type": "boolean",
      "tags": [
        "weight",
        "lifestyle"
      ],
      "coachThinking": "Assess general lifestyle barrier.",
      "humanMoment": "Many people struggle with this exact thing.",
      "createsFacts": [
        "fact:weight:wm_filler_110:struggle"
      ],
      "supportsScores": [
        "score:weight:readiness"
      ],
      "supportsInsights": [
        "insight:weight:wm_filler_110:impact"
      ],
      "supportsDecisions": [
        "dec:weight:wm_filler_110:clinical"
      ],
      "supportsRecommendations": [
        "rec:weight:wm_filler_110:action"
      ],
      "expectedConfidenceGain": 5
    }
  ],
  "facts": [
    {
      "id": "fact:eng:eng_1:struggle",
      "description": "Morning Energy - Waking up exhausted",
      "generatedFrom": [
        "q:eng:eng_1:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_1:impact",
        "score:eng:vitality",
        "dec:eng:eng_1:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_2:struggle",
      "description": "Morning Energy - Caffeine dependence",
      "generatedFrom": [
        "q:eng:eng_2:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_2:impact",
        "score:eng:vitality",
        "dec:eng:eng_2:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_3:struggle",
      "description": "Morning Energy - Snooze button reliance",
      "generatedFrom": [
        "q:eng:eng_3:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_3:impact",
        "score:eng:vitality",
        "dec:eng:eng_3:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_4:struggle",
      "description": "Morning Energy - Morning Brain Fog",
      "generatedFrom": [
        "q:eng:eng_4:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_4:impact",
        "score:eng:vitality",
        "dec:eng:eng_4:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_5:struggle",
      "description": "Morning Energy - Dreading the day",
      "generatedFrom": [
        "q:eng:eng_5:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_5:impact",
        "score:eng:vitality",
        "dec:eng:eng_5:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_6:struggle",
      "description": "Afternoon Energy - The 3 PM Crash",
      "generatedFrom": [
        "q:eng:eng_6:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_6:impact",
        "score:eng:vitality",
        "dec:eng:eng_6:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_7:struggle",
      "description": "Afternoon Energy - Sugar cravings for energy",
      "generatedFrom": [
        "q:eng:eng_7:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_7:impact",
        "score:eng:vitality",
        "dec:eng:eng_7:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_8:struggle",
      "description": "Afternoon Energy - Afternoon Screen Fatigue",
      "generatedFrom": [
        "q:eng:eng_8:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_8:impact",
        "score:eng:vitality",
        "dec:eng:eng_8:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_9:struggle",
      "description": "Afternoon Energy - Sluggish Digestion",
      "generatedFrom": [
        "q:eng:eng_9:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_9:impact",
        "score:eng:vitality",
        "dec:eng:eng_9:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_10:struggle",
      "description": "Afternoon Energy - Meeting Fatigue",
      "generatedFrom": [
        "q:eng:eng_10:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_10:impact",
        "score:eng:vitality",
        "dec:eng:eng_10:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_11:struggle",
      "description": "Evening Energy - Nothing left for personal life",
      "generatedFrom": [
        "q:eng:eng_11:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_11:impact",
        "score:eng:vitality",
        "dec:eng:eng_11:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_12:struggle",
      "description": "Evening Energy - Revenge Bedtime Procrastination",
      "generatedFrom": [
        "q:eng:eng_12:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_12:impact",
        "score:eng:vitality",
        "dec:eng:eng_12:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_13:struggle",
      "description": "Evening Energy - Couch Lock",
      "generatedFrom": [
        "q:eng:eng_13:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_13:impact",
        "score:eng:vitality",
        "dec:eng:eng_13:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_14:struggle",
      "description": "Evening Energy - Alcohol for relaxation",
      "generatedFrom": [
        "q:eng:eng_14:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_14:impact",
        "score:eng:vitality",
        "dec:eng:eng_14:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_15:struggle",
      "description": "Evening Energy - Second Wind",
      "generatedFrom": [
        "q:eng:eng_15:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_15:impact",
        "score:eng:vitality",
        "dec:eng:eng_15:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_16:struggle",
      "description": "Sleep & Recovery - Racing mind at night",
      "generatedFrom": [
        "q:eng:eng_16:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_16:impact",
        "score:eng:vitality",
        "dec:eng:eng_16:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_17:struggle",
      "description": "Sleep & Recovery - Waking up in the middle of the night",
      "generatedFrom": [
        "q:eng:eng_17:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_17:impact",
        "score:eng:vitality",
        "dec:eng:eng_17:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_18:struggle",
      "description": "Sleep & Recovery - Hot flashes or night sweats",
      "generatedFrom": [
        "q:eng:eng_18:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_18:impact",
        "score:eng:vitality",
        "dec:eng:eng_18:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_19:struggle",
      "description": "Sleep & Recovery - Partner snoring or restlessness",
      "generatedFrom": [
        "q:eng:eng_19:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_19:impact",
        "score:eng:vitality",
        "dec:eng:eng_19:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_20:struggle",
      "description": "Sleep & Recovery - Mouth breathing",
      "generatedFrom": [
        "q:eng:eng_20:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_20:impact",
        "score:eng:vitality",
        "dec:eng:eng_20:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_21:struggle",
      "description": "Sleep & Recovery - Irregular sleep schedule",
      "generatedFrom": [
        "q:eng:eng_21:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_21:impact",
        "score:eng:vitality",
        "dec:eng:eng_21:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_22:struggle",
      "description": "Food & Hydration - Skipping meals",
      "generatedFrom": [
        "q:eng:eng_22:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_22:impact",
        "score:eng:vitality",
        "dec:eng:eng_22:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_23:struggle",
      "description": "Food & Hydration - Chronic dehydration",
      "generatedFrom": [
        "q:eng:eng_23:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_23:impact",
        "score:eng:vitality",
        "dec:eng:eng_23:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_24:struggle",
      "description": "Food & Hydration - Heavy Carb Coma",
      "generatedFrom": [
        "q:eng:eng_24:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_24:impact",
        "score:eng:vitality",
        "dec:eng:eng_24:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_25:struggle",
      "description": "Food & Hydration - Under-eating for weight loss",
      "generatedFrom": [
        "q:eng:eng_25:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_25:impact",
        "score:eng:vitality",
        "dec:eng:eng_25:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_26:struggle",
      "description": "Food & Hydration - Iron deficiency symptoms",
      "generatedFrom": [
        "q:eng:eng_26:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_26:impact",
        "score:eng:vitality",
        "dec:eng:eng_26:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_27:struggle",
      "description": "Work & Lifestyle - Burnout and Overwhelm",
      "generatedFrom": [
        "q:eng:eng_27:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_27:impact",
        "score:eng:vitality",
        "dec:eng:eng_27:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_28:struggle",
      "description": "Work & Lifestyle - Shift Work / Jetlag",
      "generatedFrom": [
        "q:eng:eng_28:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_28:impact",
        "score:eng:vitality",
        "dec:eng:eng_28:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_29:struggle",
      "description": "Work & Lifestyle - High-stress environment",
      "generatedFrom": [
        "q:eng:eng_29:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_29:impact",
        "score:eng:vitality",
        "dec:eng:eng_29:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_30:struggle",
      "description": "Work & Lifestyle - Sedentary lethargy",
      "generatedFrom": [
        "q:eng:eng_30:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_30:impact",
        "score:eng:vitality",
        "dec:eng:eng_30:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_31:struggle",
      "description": "Work & Lifestyle - Constant Context Switching",
      "generatedFrom": [
        "q:eng:eng_31:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_31:impact",
        "score:eng:vitality",
        "dec:eng:eng_31:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_32:struggle",
      "description": "Women's Energy - Hormonal Energy Dips",
      "generatedFrom": [
        "q:eng:eng_32:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_32:impact",
        "score:eng:vitality",
        "dec:eng:eng_32:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_33:struggle",
      "description": "Women's Energy - Perimenopause fatigue",
      "generatedFrom": [
        "q:eng:eng_33:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_33:impact",
        "score:eng:vitality",
        "dec:eng:eng_33:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_34:struggle",
      "description": "Women's Energy - Pregnancy Exhaustion",
      "generatedFrom": [
        "q:eng:eng_34:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_34:impact",
        "score:eng:vitality",
        "dec:eng:eng_34:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_35:struggle",
      "description": "Women's Energy - Postpartum depletion",
      "generatedFrom": [
        "q:eng:eng_35:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_35:impact",
        "score:eng:vitality",
        "dec:eng:eng_35:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_36:struggle",
      "description": "Medical Safety - Unexplained Chronic Fatigue",
      "generatedFrom": [
        "q:eng:eng_36:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_36:impact",
        "score:eng:vitality",
        "dec:eng:eng_36:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_37:struggle",
      "description": "Medical Safety - Loud snoring or gasping at night",
      "generatedFrom": [
        "q:eng:eng_37:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_37:impact",
        "score:eng:vitality",
        "dec:eng:eng_37:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:eng_38:struggle",
      "description": "Medical Safety - Depression-linked low energy",
      "generatedFrom": [
        "q:eng:eng_38:primary"
      ],
      "tags": [
        "energy",
        "barrier"
      ],
      "usedBy": [
        "insight:eng:eng_38:impact",
        "score:eng:vitality",
        "dec:eng:eng_38:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:eng:special:best_time",
      "description": "Peak energy window",
      "generatedFrom": [
        "q:eng:special:best_time"
      ],
      "tags": [
        "energy"
      ],
      "usedBy": [],
      "confidenceImpact": 5
    },
    {
      "id": "fact:eng:special:biggest_drain",
      "description": "Biggest energy drain",
      "generatedFrom": [
        "q:eng:special:biggest_drain"
      ],
      "tags": [
        "energy"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:age",
      "description": "User's raw age in years.",
      "generatedFrom": [
        "q:master:age"
      ],
      "tags": [
        "master",
        "identity"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:age_group",
      "description": "User's calculated age demographic bucket.",
      "generatedFrom": [
        "q:master:age"
      ],
      "tags": [
        "master",
        "identity",
        "demographics"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:gender",
      "description": "User's biological or selected gender.",
      "generatedFrom": [
        "q:master:gender"
      ],
      "tags": [
        "master",
        "identity"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:height",
      "description": "User's height in cm.",
      "generatedFrom": [
        "q:master:height"
      ],
      "tags": [
        "master",
        "measurements"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:weight",
      "description": "User's weight in kg.",
      "generatedFrom": [
        "q:master:weight"
      ],
      "tags": [
        "master",
        "measurements"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:bmi",
      "description": "User's automatically calculated Body Mass Index.",
      "generatedFrom": [
        "q:master:weight"
      ],
      "tags": [
        "master",
        "measurements",
        "clinical"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:healthy_weight_range",
      "description": "Automatically calculated healthy clinical weight range.",
      "generatedFrom": [
        "q:master:weight"
      ],
      "tags": [
        "master",
        "measurements",
        "clinical"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:ideal_weight",
      "description": "Automatically calculated ideal body weight.",
      "generatedFrom": [
        "q:master:weight"
      ],
      "tags": [
        "master",
        "measurements"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:estimated_body_fat",
      "description": "Automatically calculated estimated body fat percentage.",
      "generatedFrom": [
        "q:master:weight"
      ],
      "tags": [
        "master",
        "measurements"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:daily_water_need",
      "description": "Automatically calculated daily hydration requirement.",
      "generatedFrom": [
        "q:master:weight"
      ],
      "tags": [
        "master",
        "measurements",
        "nutrition"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:daily_protein_need",
      "description": "Automatically calculated daily protein requirement.",
      "generatedFrom": [
        "q:master:weight"
      ],
      "tags": [
        "master",
        "measurements",
        "nutrition"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:estimated_calories",
      "description": "Automatically calculated Total Daily Energy Expenditure (TDEE).",
      "generatedFrom": [
        "q:master:weight"
      ],
      "tags": [
        "master",
        "measurements",
        "nutrition"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:risk_category",
      "description": "Automatically calculated clinical risk category based on BMI and waist.",
      "generatedFrom": [
        "q:master:weight"
      ],
      "tags": [
        "master",
        "measurements",
        "clinical"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:waist",
      "description": "User's waist measurement.",
      "generatedFrom": [
        "q:master:waist"
      ],
      "tags": [
        "master",
        "measurements"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:occupation",
      "description": "User's daily occupation category.",
      "generatedFrom": [
        "q:master:occupation"
      ],
      "tags": [
        "master",
        "lifestyle",
        "activity"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:city",
      "description": "User's geographical location.",
      "generatedFrom": [
        "q:master:city"
      ],
      "tags": [
        "master",
        "demographics"
      ],
      "usedBy": [],
      "confidenceImpact": 5
    },
    {
      "id": "fact:master:marital_status",
      "description": "User's marital relationship status.",
      "generatedFrom": [
        "q:master:marital_status"
      ],
      "tags": [
        "master",
        "demographics"
      ],
      "usedBy": [],
      "confidenceImpact": 5
    },
    {
      "id": "fact:master:has_children",
      "description": "Whether the user has children.",
      "generatedFrom": [
        "q:master:children"
      ],
      "tags": [
        "master",
        "demographics",
        "family"
      ],
      "usedBy": [],
      "confidenceImpact": 5
    },
    {
      "id": "fact:master:language",
      "description": "User's preferred communication language.",
      "generatedFrom": [
        "q:master:language"
      ],
      "tags": [
        "master",
        "demographics"
      ],
      "usedBy": [],
      "confidenceImpact": 5
    },
    {
      "id": "fact:master:wake_time",
      "description": "Typical morning wake-up time.",
      "generatedFrom": [
        "q:master:wake_time"
      ],
      "tags": [
        "master",
        "lifestyle",
        "routine"
      ],
      "usedBy": [],
      "confidenceImpact": 5
    },
    {
      "id": "fact:master:bed_time",
      "description": "Typical evening bedtime.",
      "generatedFrom": [
        "q:master:bed_time"
      ],
      "tags": [
        "master",
        "lifestyle",
        "routine"
      ],
      "usedBy": [],
      "confidenceImpact": 5
    },
    {
      "id": "fact:master:sleep_duration",
      "description": "Total average nightly sleep in hours.",
      "generatedFrom": [
        "q:master:sleep_hours"
      ],
      "tags": [
        "master",
        "lifestyle",
        "sleep"
      ],
      "usedBy": [],
      "confidenceImpact": 15
    },
    {
      "id": "fact:master:water_intake",
      "description": "Average daily water consumption category.",
      "generatedFrom": [
        "q:master:water_intake"
      ],
      "tags": [
        "master",
        "lifestyle",
        "nutrition"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:breakfast_habit",
      "description": "Consistency of eating breakfast.",
      "generatedFrom": [
        "q:master:breakfast"
      ],
      "tags": [
        "master",
        "lifestyle",
        "nutrition"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:meal_count",
      "description": "Average number of meals consumed daily.",
      "generatedFrom": [
        "q:master:meal_count"
      ],
      "tags": [
        "master",
        "lifestyle",
        "nutrition"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:eating_out_frequency",
      "description": "Frequency of eating food prepared outside the home.",
      "generatedFrom": [
        "q:master:eating_out"
      ],
      "tags": [
        "master",
        "lifestyle",
        "nutrition"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:exercise_frequency",
      "description": "Frequency of intentional exercise.",
      "generatedFrom": [
        "q:master:exercise"
      ],
      "tags": [
        "master",
        "lifestyle",
        "fitness"
      ],
      "usedBy": [],
      "confidenceImpact": 15
    },
    {
      "id": "fact:master:sitting_hours",
      "description": "Total hours spent sitting daily (sedentary marker).",
      "generatedFrom": [
        "q:master:sitting_hours"
      ],
      "tags": [
        "master",
        "lifestyle",
        "fitness"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:smoking",
      "description": "Whether the user smokes.",
      "generatedFrom": [
        "q:master:smoke_alcohol"
      ],
      "tags": [
        "master",
        "lifestyle",
        "habits"
      ],
      "usedBy": [],
      "confidenceImpact": 15
    },
    {
      "id": "fact:master:alcohol",
      "description": "Whether the user consumes alcohol.",
      "generatedFrom": [
        "q:master:smoke_alcohol"
      ],
      "tags": [
        "master",
        "lifestyle",
        "habits"
      ],
      "usedBy": [],
      "confidenceImpact": 15
    },
    {
      "id": "fact:master:pregnant",
      "description": "Whether the user is currently pregnant.",
      "generatedFrom": [
        "q:master:pregnant"
      ],
      "tags": [
        "master",
        "medical_safety",
        "pregnancy"
      ],
      "usedBy": [],
      "confidenceImpact": 20
    },
    {
      "id": "fact:master:breastfeeding",
      "description": "Whether the user is currently breastfeeding.",
      "generatedFrom": [
        "q:master:breastfeeding"
      ],
      "tags": [
        "master",
        "medical_safety",
        "postpartum"
      ],
      "usedBy": [],
      "confidenceImpact": 20
    },
    {
      "id": "fact:master:medical_diet",
      "description": "Whether the user is on a doctor-advised diet.",
      "generatedFrom": [
        "q:master:medical_diet"
      ],
      "tags": [
        "master",
        "medical_safety",
        "diet"
      ],
      "usedBy": [],
      "confidenceImpact": 20
    },
    {
      "id": "fact:master:diabetes",
      "description": "Whether the user has diabetes.",
      "generatedFrom": [
        "q:master:diabetes"
      ],
      "tags": [
        "master",
        "medical_safety",
        "chronic"
      ],
      "usedBy": [],
      "confidenceImpact": 20
    },
    {
      "id": "fact:master:high_bp",
      "description": "Whether the user has high blood pressure.",
      "generatedFrom": [
        "q:master:blood_pressure"
      ],
      "tags": [
        "master",
        "medical_safety",
        "chronic"
      ],
      "usedBy": [],
      "confidenceImpact": 20
    },
    {
      "id": "fact:master:thyroid",
      "description": "Whether the user has thyroid problems.",
      "generatedFrom": [
        "q:master:thyroid"
      ],
      "tags": [
        "master",
        "medical_safety",
        "chronic"
      ],
      "usedBy": [],
      "confidenceImpact": 20
    },
    {
      "id": "fact:master:regular_medication",
      "description": "Whether the user is taking regular medication.",
      "generatedFrom": [
        "q:master:medication"
      ],
      "tags": [
        "master",
        "medical_safety",
        "medication"
      ],
      "usedBy": [],
      "confidenceImpact": 20
    },
    {
      "id": "fact:master:recent_surgery",
      "description": "Whether the user had major surgery recently.",
      "generatedFrom": [
        "q:master:surgery"
      ],
      "tags": [
        "master",
        "medical_safety",
        "surgery"
      ],
      "usedBy": [],
      "confidenceImpact": 20
    },
    {
      "id": "fact:master:food_allergies",
      "description": "Whether the user has food allergies.",
      "generatedFrom": [
        "q:master:allergies"
      ],
      "tags": [
        "master",
        "medical_safety",
        "allergies"
      ],
      "usedBy": [],
      "confidenceImpact": 20
    },
    {
      "id": "fact:master:other_health_info",
      "description": "Other important health information.",
      "generatedFrom": [
        "q:master:other_health"
      ],
      "tags": [
        "master",
        "medical_safety",
        "other"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:primary_cook",
      "description": "Who primarily cooks at home.",
      "generatedFrom": [
        "q:master:cooks"
      ],
      "tags": [
        "master",
        "family_home",
        "cooking"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:primary_shopper",
      "description": "Who primarily buys groceries.",
      "generatedFrom": [
        "q:master:groceries"
      ],
      "tags": [
        "master",
        "family_home",
        "shopping"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:family_support",
      "description": "Whether the family supports health goals.",
      "generatedFrom": [
        "q:master:family_support"
      ],
      "tags": [
        "master",
        "family_home",
        "support"
      ],
      "usedBy": [],
      "confidenceImpact": 15
    },
    {
      "id": "fact:master:eat_with_family",
      "description": "Whether the user eats with family.",
      "generatedFrom": [
        "q:master:eat_with_family"
      ],
      "tags": [
        "master",
        "family_home",
        "eating"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:frequent_travel",
      "description": "Whether the user travels frequently for work.",
      "generatedFrom": [
        "q:master:travel"
      ],
      "tags": [
        "master",
        "family_home",
        "lifestyle"
      ],
      "usedBy": [],
      "confidenceImpact": 15
    },
    {
      "id": "fact:master:living_situation",
      "description": "Whether the user lives alone or with family.",
      "generatedFrom": [
        "q:master:living_situation"
      ],
      "tags": [
        "master",
        "family_home",
        "living"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:food_availability",
      "description": "Availability of healthy food in living area.",
      "generatedFrom": [
        "q:master:food_availability"
      ],
      "tags": [
        "master",
        "family_home",
        "environment"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:food_decision_maker",
      "description": "Who decides what food is prepared.",
      "generatedFrom": [
        "q:master:food_decisions"
      ],
      "tags": [
        "master",
        "family_home",
        "decisions"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:daily_cooking_time",
      "description": "Whether user has time to cook daily.",
      "generatedFrom": [
        "q:master:cook_time"
      ],
      "tags": [
        "master",
        "financial_reality",
        "time"
      ],
      "usedBy": [],
      "confidenceImpact": 15
    },
    {
      "id": "fact:master:kitchen_access",
      "description": "Whether user has kitchen access.",
      "generatedFrom": [
        "q:master:kitchen_access"
      ],
      "tags": [
        "master",
        "financial_reality",
        "access"
      ],
      "usedBy": [],
      "confidenceImpact": 15
    },
    {
      "id": "fact:master:refrigerator_access",
      "description": "Whether user has refrigerator access.",
      "generatedFrom": [
        "q:master:fridge_access"
      ],
      "tags": [
        "master",
        "financial_reality",
        "access"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:daily_health_time",
      "description": "Realistic daily time for health.",
      "generatedFrom": [
        "q:master:health_time"
      ],
      "tags": [
        "master",
        "financial_reality",
        "time"
      ],
      "usedBy": [],
      "confidenceImpact": 15
    },
    {
      "id": "fact:master:prefer_low_cost",
      "description": "Preference for low-cost meals.",
      "generatedFrom": [
        "q:master:low_cost_meals"
      ],
      "tags": [
        "master",
        "financial_reality",
        "budget"
      ],
      "usedBy": [],
      "confidenceImpact": 15
    },
    {
      "id": "fact:master:buy_healthy_comfort",
      "description": "Comfort level buying healthy foods weekly.",
      "generatedFrom": [
        "q:master:buy_healthy"
      ],
      "tags": [
        "master",
        "financial_reality",
        "budget"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:prefer_home_solutions",
      "description": "Preference for home vs gym solutions.",
      "generatedFrom": [
        "q:master:home_solutions"
      ],
      "tags": [
        "master",
        "financial_reality",
        "budget"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:enjoyed_exercise",
      "description": "Type of exercise enjoyed.",
      "generatedFrom": [
        "q:master:exercise_type"
      ],
      "tags": [
        "master",
        "personal_preferences",
        "exercise"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:workout_location",
      "description": "Preferred workout location.",
      "generatedFrom": [
        "q:master:workout_location"
      ],
      "tags": [
        "master",
        "personal_preferences",
        "exercise"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:is_vegetarian",
      "description": "Whether user is vegetarian.",
      "generatedFrom": [
        "q:master:vegetarian"
      ],
      "tags": [
        "master",
        "personal_preferences",
        "diet"
      ],
      "usedBy": [],
      "confidenceImpact": 20
    },
    {
      "id": "fact:master:eats_eggs",
      "description": "Whether user eats eggs.",
      "generatedFrom": [
        "q:master:eat_eggs"
      ],
      "tags": [
        "master",
        "personal_preferences",
        "diet"
      ],
      "usedBy": [],
      "confidenceImpact": 15
    },
    {
      "id": "fact:master:eats_meat",
      "description": "Whether user eats meat.",
      "generatedFrom": [
        "q:master:eat_meat"
      ],
      "tags": [
        "master",
        "personal_preferences",
        "diet"
      ],
      "usedBy": [],
      "confidenceImpact": 15
    },
    {
      "id": "fact:master:hardest_meal",
      "description": "Hardest meal to manage.",
      "generatedFrom": [
        "q:master:hardest_meal"
      ],
      "tags": [
        "master",
        "personal_preferences",
        "diet"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:likes_cooking",
      "description": "Whether user likes cooking.",
      "generatedFrom": [
        "q:master:like_cooking"
      ],
      "tags": [
        "master",
        "personal_preferences",
        "diet"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:preferred_change_size",
      "description": "Preference for small vs big changes.",
      "generatedFrom": [
        "q:master:change_size"
      ],
      "tags": [
        "master",
        "personal_preferences",
        "psychology"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:likes_schedule",
      "description": "Preference for following a schedule.",
      "generatedFrom": [
        "q:master:like_schedule"
      ],
      "tags": [
        "master",
        "personal_preferences",
        "psychology"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:wants_reminders",
      "description": "Preference for reminders.",
      "generatedFrom": [
        "q:master:want_reminders"
      ],
      "tags": [
        "master",
        "personal_preferences",
        "psychology"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:health_motivation",
      "description": "Core reason for improving health now.",
      "generatedFrom": [
        "q:master:improve_why"
      ],
      "tags": [
        "master",
        "motivation",
        "core"
      ],
      "usedBy": [],
      "confidenceImpact": 15
    },
    {
      "id": "fact:master:primary_worry",
      "description": "User's primary health worry.",
      "generatedFrom": [
        "q:master:worries"
      ],
      "tags": [
        "master",
        "motivation",
        "fears"
      ],
      "usedBy": [],
      "confidenceImpact": 15
    },
    {
      "id": "fact:master:past_blockers",
      "description": "What stopped the user in the past.",
      "generatedFrom": [
        "q:master:stopped_past"
      ],
      "tags": [
        "master",
        "motivation",
        "history"
      ],
      "usedBy": [],
      "confidenceImpact": 15
    },
    {
      "id": "fact:master:past_successes",
      "description": "What worked for the user in the past.",
      "generatedFrom": [
        "q:master:worked_past"
      ],
      "tags": [
        "master",
        "motivation",
        "history"
      ],
      "usedBy": [],
      "confidenceImpact": 15
    },
    {
      "id": "fact:master:primary_motivator",
      "description": "Who motivates the user.",
      "generatedFrom": [
        "q:master:motivator"
      ],
      "tags": [
        "master",
        "motivation",
        "support"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:change_confidence",
      "description": "Confidence in making changes.",
      "generatedFrom": [
        "q:master:confidence"
      ],
      "tags": [
        "master",
        "motivation",
        "confidence"
      ],
      "usedBy": [],
      "confidenceImpact": 10
    },
    {
      "id": "fact:master:readiness_score",
      "description": "Score of readiness to start.",
      "generatedFrom": [
        "q:master:readiness"
      ],
      "tags": [
        "master",
        "motivation",
        "readiness"
      ],
      "usedBy": [],
      "confidenceImpact": 20
    },
    {
      "id": "fact:master:priority_improvement",
      "description": "Top priority for improvement.",
      "generatedFrom": [
        "q:master:improve_first"
      ],
      "tags": [
        "master",
        "motivation",
        "priority"
      ],
      "usedBy": [],
      "confidenceImpact": 15
    },
    {
      "id": "fact:master:success_vision",
      "description": "Vision of success.",
      "generatedFrom": [
        "q:master:success_vision"
      ],
      "tags": [
        "master",
        "motivation",
        "vision"
      ],
      "usedBy": [],
      "confidenceImpact": 15
    },
    {
      "id": "fact:master:additional_info",
      "description": "Other information.",
      "generatedFrom": [
        "q:master:other_info"
      ],
      "tags": [
        "master",
        "motivation",
        "other"
      ],
      "usedBy": [],
      "confidenceImpact": 5
    },
    {
      "id": "fact:slp:q001_wake_feeling:struggle",
      "description": "How Does Your Sleep Feel - Waking exhaustion",
      "generatedFrom": [
        "q:slp:q001_wake_feeling:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q001_wake_feeling:impact",
        "score:slp:restoration",
        "dec:slp:q001_wake_feeling:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q002_fall_asleep_time:struggle",
      "description": "How Does Your Sleep Feel - Sleep onset latency",
      "generatedFrom": [
        "q:slp:q002_fall_asleep_time:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q002_fall_asleep_time:impact",
        "score:slp:restoration",
        "dec:slp:q002_fall_asleep_time:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q003_wake_frequency:struggle",
      "description": "How Does Your Sleep Feel - Sleep fragmentation",
      "generatedFrom": [
        "q:slp:q003_wake_frequency:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q003_wake_frequency:impact",
        "score:slp:restoration",
        "dec:slp:q003_wake_frequency:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q004_fall_asleep_again:struggle",
      "description": "How Does Your Sleep Feel - Return to sleep latency",
      "generatedFrom": [
        "q:slp:q004_fall_asleep_again:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q004_fall_asleep_again:impact",
        "score:slp:restoration",
        "dec:slp:q004_fall_asleep_again:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q005_early_waking:struggle",
      "description": "How Does Your Sleep Feel - Terminal insomnia",
      "generatedFrom": [
        "q:slp:q005_early_waking:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q005_early_waking:impact",
        "score:slp:restoration",
        "dec:slp:q005_early_waking:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q006_phone_in_bed:struggle",
      "description": "What Happens Before Bed - Device usage",
      "generatedFrom": [
        "q:slp:q006_phone_in_bed:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q006_phone_in_bed:impact",
        "score:slp:restoration",
        "dec:slp:q006_phone_in_bed:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q007_racing_thoughts:struggle",
      "description": "What Happens Before Bed - Racing thoughts",
      "generatedFrom": [
        "q:slp:q007_racing_thoughts:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q007_racing_thoughts:impact",
        "score:slp:restoration",
        "dec:slp:q007_racing_thoughts:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q008_stress_bedtime:struggle",
      "description": "What Happens Before Bed - Bedtime stress",
      "generatedFrom": [
        "q:slp:q008_stress_bedtime:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q008_stress_bedtime:impact",
        "score:slp:restoration",
        "dec:slp:q008_stress_bedtime:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q009_tv_before_bed:struggle",
      "description": "What Happens Before Bed - TV consumption",
      "generatedFrom": [
        "q:slp:q009_tv_before_bed:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q009_tv_before_bed:impact",
        "score:slp:restoration",
        "dec:slp:q009_tv_before_bed:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q010_regular_bedtime:struggle",
      "description": "What Happens Before Bed - Bedtime consistency",
      "generatedFrom": [
        "q:slp:q010_regular_bedtime:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q010_regular_bedtime:impact",
        "score:slp:restoration",
        "dec:slp:q010_regular_bedtime:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q011_bedroom_noise:struggle",
      "description": "Your Sleep Environment - Noise levels",
      "generatedFrom": [
        "q:slp:q011_bedroom_noise:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q011_bedroom_noise:impact",
        "score:slp:restoration",
        "dec:slp:q011_bedroom_noise:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q012_disturbances:struggle",
      "description": "Your Sleep Environment - Partner/Pet disturbance",
      "generatedFrom": [
        "q:slp:q012_disturbances:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q012_disturbances:impact",
        "score:slp:restoration",
        "dec:slp:q012_disturbances:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q013_snoring:struggle",
      "description": "Your Sleep Environment - Snoring",
      "generatedFrom": [
        "q:slp:q013_snoring:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q013_snoring:impact",
        "score:slp:restoration",
        "dec:slp:q013_snoring:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q014_dry_mouth:struggle",
      "description": "Your Sleep Environment - Mouth breathing",
      "generatedFrom": [
        "q:slp:q014_dry_mouth:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q014_dry_mouth:impact",
        "score:slp:restoration",
        "dec:slp:q014_dry_mouth:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q015_room_temp:struggle",
      "description": "Your Sleep Environment - Temperature regulation",
      "generatedFrom": [
        "q:slp:q015_room_temp:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q015_room_temp:impact",
        "score:slp:restoration",
        "dec:slp:q015_room_temp:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q016_last_meal:struggle",
      "description": "Food & Drink - Late meals",
      "generatedFrom": [
        "q:slp:q016_last_meal:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q016_last_meal:impact",
        "score:slp:restoration",
        "dec:slp:q016_last_meal:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q017_coffee_timing:struggle",
      "description": "Food & Drink - Caffeine timing",
      "generatedFrom": [
        "q:slp:q017_coffee_timing:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q017_coffee_timing:impact",
        "score:slp:restoration",
        "dec:slp:q017_coffee_timing:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q018_alcohol_night:struggle",
      "description": "Food & Drink - Alcohol before bed",
      "generatedFrom": [
        "q:slp:q018_alcohol_night:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q018_alcohol_night:impact",
        "score:slp:restoration",
        "dec:slp:q018_alcohol_night:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q019_hungry_sleep:struggle",
      "description": "Food & Drink - Hunger at bedtime",
      "generatedFrom": [
        "q:slp:q019_hungry_sleep:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q019_hungry_sleep:impact",
        "score:slp:restoration",
        "dec:slp:q019_hungry_sleep:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q020_daytime_water:struggle",
      "description": "Food & Drink - Hydration impact",
      "generatedFrom": [
        "q:slp:q020_daytime_water:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q020_daytime_water:impact",
        "score:slp:restoration",
        "dec:slp:q020_daytime_water:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q021_wake_time:struggle",
      "description": "Daily Routine - Wake time consistency",
      "generatedFrom": [
        "q:slp:q021_wake_time:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q021_wake_time:impact",
        "score:slp:restoration",
        "dec:slp:q021_wake_time:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q022_bed_time:struggle",
      "description": "Daily Routine - Bedtime alignment",
      "generatedFrom": [
        "q:slp:q022_bed_time:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q022_bed_time:impact",
        "score:slp:restoration",
        "dec:slp:q022_bed_time:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q023_sleep_consistency:struggle",
      "description": "Daily Routine - Sleep consistency",
      "generatedFrom": [
        "q:slp:q023_sleep_consistency:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q023_sleep_consistency:impact",
        "score:slp:restoration",
        "dec:slp:q023_sleep_consistency:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q024_naps:struggle",
      "description": "Daily Routine - Daytime naps",
      "generatedFrom": [
        "q:slp:q024_naps:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q024_naps:impact",
        "score:slp:restoration",
        "dec:slp:q024_naps:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q025_nap_length:struggle",
      "description": "Daily Routine - Nap duration",
      "generatedFrom": [
        "q:slp:q025_nap_length:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q025_nap_length:impact",
        "score:slp:restoration",
        "dec:slp:q025_nap_length:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q026_morning_sunlight:struggle",
      "description": "Morning - Circadian light exposure",
      "generatedFrom": [
        "q:slp:q026_morning_sunlight:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q026_morning_sunlight:impact",
        "score:slp:restoration",
        "dec:slp:q026_morning_sunlight:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q027_first_coffee:struggle",
      "description": "Morning - Caffeine timing",
      "generatedFrom": [
        "q:slp:q027_first_coffee:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q027_first_coffee:impact",
        "score:slp:restoration",
        "dec:slp:q027_first_coffee:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q028_morning_sleepy:struggle",
      "description": "Morning - Morning fatigue",
      "generatedFrom": [
        "q:slp:q028_morning_sleepy:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q028_morning_sleepy:impact",
        "score:slp:restoration",
        "dec:slp:q028_morning_sleepy:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q029_caffeine_dependent:struggle",
      "description": "Morning - Caffeine dependence",
      "generatedFrom": [
        "q:slp:q029_caffeine_dependent:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q029_caffeine_dependent:impact",
        "score:slp:restoration",
        "dec:slp:q029_caffeine_dependent:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q030_afternoon_slump:struggle",
      "description": "Daytime - Post-lunch sleepiness",
      "generatedFrom": [
        "q:slp:q030_afternoon_slump:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q030_afternoon_slump:impact",
        "score:slp:restoration",
        "dec:slp:q030_afternoon_slump:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q031_meeting_struggle:struggle",
      "description": "Daytime - Daytime alertness",
      "generatedFrom": [
        "q:slp:q031_meeting_struggle:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q031_meeting_struggle:impact",
        "score:slp:restoration",
        "dec:slp:q031_meeting_struggle:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q032_sleepy_driving:struggle",
      "description": "Daytime - Microsleep risk",
      "generatedFrom": [
        "q:slp:q032_sleepy_driving:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q032_sleepy_driving:impact",
        "score:slp:restoration",
        "dec:slp:q032_sleepy_driving:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q033_yawning:struggle",
      "description": "Daytime - Chronic yawning",
      "generatedFrom": [
        "q:slp:q033_yawning:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q033_yawning:impact",
        "score:slp:restoration",
        "dec:slp:q033_yawning:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q034_night_shift:struggle",
      "description": "Special Situations - Shift work",
      "generatedFrom": [
        "q:slp:q034_night_shift:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q034_night_shift:impact",
        "score:slp:restoration",
        "dec:slp:q034_night_shift:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q035_jet_lag:struggle",
      "description": "Special Situations - Jet lag",
      "generatedFrom": [
        "q:slp:q035_jet_lag:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q035_jet_lag:impact",
        "score:slp:restoration",
        "dec:slp:q035_jet_lag:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q036_weekend_sleep:struggle",
      "description": "Special Situations - Weekend sleep variation",
      "generatedFrom": [
        "q:slp:q036_weekend_sleep:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q036_weekend_sleep:impact",
        "score:slp:restoration",
        "dec:slp:q036_weekend_sleep:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q037_sleep_change:struggle",
      "description": "Special Situations - Recent sleep changes",
      "generatedFrom": [
        "q:slp:q037_sleep_change:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q037_sleep_change:impact",
        "score:slp:restoration",
        "dec:slp:q037_sleep_change:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q038_menstrual_cycle:struggle",
      "description": "Women Only - Menstrual cycle sleep",
      "generatedFrom": [
        "q:slp:q038_menstrual_cycle:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q038_menstrual_cycle:impact",
        "score:slp:restoration",
        "dec:slp:q038_menstrual_cycle:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q039_pregnancy_sleep:struggle",
      "description": "Women Only - Pregnancy sleep",
      "generatedFrom": [
        "q:slp:q039_pregnancy_sleep:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q039_pregnancy_sleep:impact",
        "score:slp:restoration",
        "dec:slp:q039_pregnancy_sleep:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:slp:q040_menopause_sleep:struggle",
      "description": "Women Only - Menopause symptoms",
      "generatedFrom": [
        "q:slp:q040_menopause_sleep:primary"
      ],
      "tags": [
        "sleep",
        "barrier"
      ],
      "usedBy": [
        "insight:slp:q040_menopause_sleep:impact",
        "score:slp:restoration",
        "dec:slp:q040_menopause_sleep:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:weight:wm_bespoke_1:struggle",
      "description": "Desk job inactivity",
      "generatedFrom": [
        "q:weight:wm_bespoke_1:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_bespoke_1:impact",
        "score:weight:readiness",
        "dec:weight:wm_bespoke_1:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:weight:wm_bespoke_2:struggle",
      "description": "Stress eating after work",
      "generatedFrom": [
        "q:weight:wm_bespoke_2:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_bespoke_2:impact",
        "score:weight:readiness",
        "dec:weight:wm_bespoke_2:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:weight:wm_bespoke_3:struggle",
      "description": "Postpartum exhaustion",
      "generatedFrom": [
        "q:weight:wm_bespoke_3:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_bespoke_3:impact",
        "score:weight:readiness",
        "dec:weight:wm_bespoke_3:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:weight:wm_bespoke_4:struggle",
      "description": "PCOS belly fat",
      "generatedFrom": [
        "q:weight:wm_bespoke_4:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_bespoke_4:impact",
        "score:weight:readiness",
        "dec:weight:wm_bespoke_4:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:weight:wm_bespoke_5:struggle",
      "description": "Budget constraints",
      "generatedFrom": [
        "q:weight:wm_bespoke_5:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_bespoke_5:impact",
        "score:weight:readiness",
        "dec:weight:wm_bespoke_5:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:weight:wm_bespoke_6:struggle",
      "description": "Late night TV snacking",
      "generatedFrom": [
        "q:weight:wm_bespoke_6:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_bespoke_6:impact",
        "score:weight:readiness",
        "dec:weight:wm_bespoke_6:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:weight:wm_bespoke_7:struggle",
      "description": "Prediabetes risk",
      "generatedFrom": [
        "q:weight:wm_bespoke_7:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_bespoke_7:impact",
        "score:weight:readiness",
        "dec:weight:wm_bespoke_7:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:weight:wm_bespoke_8:struggle",
      "description": "Joint pain during cardio",
      "generatedFrom": [
        "q:weight:wm_bespoke_8:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_bespoke_8:impact",
        "score:weight:readiness",
        "dec:weight:wm_bespoke_8:clinical"
      ],
      "confidenceImpact": 15
    },
    {
      "id": "fact:weight:wm_filler_9:struggle",
      "description": "General Factor 0",
      "generatedFrom": [
        "q:weight:wm_filler_9:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_9:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_9:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_10:struggle",
      "description": "General Factor 1",
      "generatedFrom": [
        "q:weight:wm_filler_10:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_10:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_10:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_11:struggle",
      "description": "General Factor 2",
      "generatedFrom": [
        "q:weight:wm_filler_11:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_11:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_11:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_12:struggle",
      "description": "General Factor 3",
      "generatedFrom": [
        "q:weight:wm_filler_12:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_12:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_12:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_13:struggle",
      "description": "General Factor 4",
      "generatedFrom": [
        "q:weight:wm_filler_13:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_13:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_13:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_14:struggle",
      "description": "General Factor 5",
      "generatedFrom": [
        "q:weight:wm_filler_14:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_14:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_14:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_15:struggle",
      "description": "General Factor 6",
      "generatedFrom": [
        "q:weight:wm_filler_15:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_15:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_15:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_16:struggle",
      "description": "General Factor 7",
      "generatedFrom": [
        "q:weight:wm_filler_16:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_16:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_16:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_17:struggle",
      "description": "General Factor 8",
      "generatedFrom": [
        "q:weight:wm_filler_17:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_17:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_17:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_18:struggle",
      "description": "General Factor 9",
      "generatedFrom": [
        "q:weight:wm_filler_18:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_18:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_18:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_19:struggle",
      "description": "General Factor 10",
      "generatedFrom": [
        "q:weight:wm_filler_19:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_19:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_19:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_20:struggle",
      "description": "General Factor 11",
      "generatedFrom": [
        "q:weight:wm_filler_20:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_20:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_20:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_21:struggle",
      "description": "General Factor 12",
      "generatedFrom": [
        "q:weight:wm_filler_21:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_21:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_21:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_22:struggle",
      "description": "General Factor 13",
      "generatedFrom": [
        "q:weight:wm_filler_22:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_22:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_22:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_23:struggle",
      "description": "General Factor 14",
      "generatedFrom": [
        "q:weight:wm_filler_23:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_23:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_23:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_24:struggle",
      "description": "General Factor 15",
      "generatedFrom": [
        "q:weight:wm_filler_24:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_24:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_24:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_25:struggle",
      "description": "General Factor 16",
      "generatedFrom": [
        "q:weight:wm_filler_25:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_25:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_25:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_26:struggle",
      "description": "General Factor 17",
      "generatedFrom": [
        "q:weight:wm_filler_26:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_26:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_26:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_27:struggle",
      "description": "General Factor 18",
      "generatedFrom": [
        "q:weight:wm_filler_27:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_27:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_27:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_28:struggle",
      "description": "General Factor 19",
      "generatedFrom": [
        "q:weight:wm_filler_28:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_28:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_28:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_29:struggle",
      "description": "General Factor 20",
      "generatedFrom": [
        "q:weight:wm_filler_29:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_29:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_29:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_30:struggle",
      "description": "General Factor 21",
      "generatedFrom": [
        "q:weight:wm_filler_30:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_30:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_30:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_31:struggle",
      "description": "General Factor 22",
      "generatedFrom": [
        "q:weight:wm_filler_31:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_31:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_31:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_32:struggle",
      "description": "General Factor 23",
      "generatedFrom": [
        "q:weight:wm_filler_32:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_32:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_32:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_33:struggle",
      "description": "General Factor 24",
      "generatedFrom": [
        "q:weight:wm_filler_33:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_33:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_33:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_34:struggle",
      "description": "General Factor 25",
      "generatedFrom": [
        "q:weight:wm_filler_34:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_34:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_34:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_35:struggle",
      "description": "General Factor 26",
      "generatedFrom": [
        "q:weight:wm_filler_35:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_35:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_35:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_36:struggle",
      "description": "General Factor 27",
      "generatedFrom": [
        "q:weight:wm_filler_36:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_36:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_36:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_37:struggle",
      "description": "General Factor 28",
      "generatedFrom": [
        "q:weight:wm_filler_37:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_37:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_37:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_38:struggle",
      "description": "General Factor 29",
      "generatedFrom": [
        "q:weight:wm_filler_38:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_38:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_38:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_39:struggle",
      "description": "General Factor 30",
      "generatedFrom": [
        "q:weight:wm_filler_39:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_39:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_39:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_40:struggle",
      "description": "General Factor 31",
      "generatedFrom": [
        "q:weight:wm_filler_40:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_40:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_40:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_41:struggle",
      "description": "General Factor 32",
      "generatedFrom": [
        "q:weight:wm_filler_41:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_41:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_41:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_42:struggle",
      "description": "General Factor 33",
      "generatedFrom": [
        "q:weight:wm_filler_42:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_42:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_42:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_43:struggle",
      "description": "General Factor 34",
      "generatedFrom": [
        "q:weight:wm_filler_43:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_43:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_43:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_44:struggle",
      "description": "General Factor 35",
      "generatedFrom": [
        "q:weight:wm_filler_44:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_44:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_44:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_45:struggle",
      "description": "General Factor 36",
      "generatedFrom": [
        "q:weight:wm_filler_45:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_45:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_45:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_46:struggle",
      "description": "General Factor 37",
      "generatedFrom": [
        "q:weight:wm_filler_46:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_46:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_46:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_47:struggle",
      "description": "General Factor 38",
      "generatedFrom": [
        "q:weight:wm_filler_47:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_47:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_47:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_48:struggle",
      "description": "General Factor 39",
      "generatedFrom": [
        "q:weight:wm_filler_48:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_48:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_48:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_49:struggle",
      "description": "General Factor 40",
      "generatedFrom": [
        "q:weight:wm_filler_49:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_49:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_49:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_50:struggle",
      "description": "General Factor 41",
      "generatedFrom": [
        "q:weight:wm_filler_50:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_50:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_50:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_51:struggle",
      "description": "General Factor 42",
      "generatedFrom": [
        "q:weight:wm_filler_51:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_51:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_51:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_52:struggle",
      "description": "General Factor 43",
      "generatedFrom": [
        "q:weight:wm_filler_52:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_52:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_52:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_53:struggle",
      "description": "General Factor 44",
      "generatedFrom": [
        "q:weight:wm_filler_53:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_53:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_53:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_54:struggle",
      "description": "General Factor 45",
      "generatedFrom": [
        "q:weight:wm_filler_54:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_54:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_54:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_55:struggle",
      "description": "General Factor 46",
      "generatedFrom": [
        "q:weight:wm_filler_55:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_55:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_55:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_56:struggle",
      "description": "General Factor 47",
      "generatedFrom": [
        "q:weight:wm_filler_56:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_56:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_56:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_57:struggle",
      "description": "General Factor 48",
      "generatedFrom": [
        "q:weight:wm_filler_57:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_57:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_57:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_58:struggle",
      "description": "General Factor 49",
      "generatedFrom": [
        "q:weight:wm_filler_58:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_58:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_58:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_59:struggle",
      "description": "General Factor 50",
      "generatedFrom": [
        "q:weight:wm_filler_59:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_59:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_59:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_60:struggle",
      "description": "General Factor 51",
      "generatedFrom": [
        "q:weight:wm_filler_60:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_60:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_60:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_61:struggle",
      "description": "General Factor 52",
      "generatedFrom": [
        "q:weight:wm_filler_61:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_61:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_61:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_62:struggle",
      "description": "General Factor 53",
      "generatedFrom": [
        "q:weight:wm_filler_62:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_62:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_62:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_63:struggle",
      "description": "General Factor 54",
      "generatedFrom": [
        "q:weight:wm_filler_63:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_63:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_63:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_64:struggle",
      "description": "General Factor 55",
      "generatedFrom": [
        "q:weight:wm_filler_64:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_64:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_64:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_65:struggle",
      "description": "General Factor 56",
      "generatedFrom": [
        "q:weight:wm_filler_65:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_65:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_65:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_66:struggle",
      "description": "General Factor 57",
      "generatedFrom": [
        "q:weight:wm_filler_66:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_66:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_66:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_67:struggle",
      "description": "General Factor 58",
      "generatedFrom": [
        "q:weight:wm_filler_67:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_67:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_67:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_68:struggle",
      "description": "General Factor 59",
      "generatedFrom": [
        "q:weight:wm_filler_68:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_68:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_68:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_69:struggle",
      "description": "General Factor 60",
      "generatedFrom": [
        "q:weight:wm_filler_69:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_69:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_69:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_70:struggle",
      "description": "General Factor 61",
      "generatedFrom": [
        "q:weight:wm_filler_70:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_70:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_70:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_71:struggle",
      "description": "General Factor 62",
      "generatedFrom": [
        "q:weight:wm_filler_71:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_71:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_71:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_72:struggle",
      "description": "General Factor 63",
      "generatedFrom": [
        "q:weight:wm_filler_72:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_72:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_72:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_73:struggle",
      "description": "General Factor 64",
      "generatedFrom": [
        "q:weight:wm_filler_73:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_73:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_73:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_74:struggle",
      "description": "General Factor 65",
      "generatedFrom": [
        "q:weight:wm_filler_74:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_74:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_74:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_75:struggle",
      "description": "General Factor 66",
      "generatedFrom": [
        "q:weight:wm_filler_75:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_75:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_75:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_76:struggle",
      "description": "General Factor 67",
      "generatedFrom": [
        "q:weight:wm_filler_76:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_76:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_76:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_77:struggle",
      "description": "General Factor 68",
      "generatedFrom": [
        "q:weight:wm_filler_77:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_77:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_77:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_78:struggle",
      "description": "General Factor 69",
      "generatedFrom": [
        "q:weight:wm_filler_78:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_78:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_78:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_79:struggle",
      "description": "General Factor 70",
      "generatedFrom": [
        "q:weight:wm_filler_79:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_79:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_79:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_80:struggle",
      "description": "General Factor 71",
      "generatedFrom": [
        "q:weight:wm_filler_80:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_80:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_80:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_81:struggle",
      "description": "General Factor 72",
      "generatedFrom": [
        "q:weight:wm_filler_81:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_81:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_81:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_82:struggle",
      "description": "General Factor 73",
      "generatedFrom": [
        "q:weight:wm_filler_82:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_82:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_82:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_83:struggle",
      "description": "General Factor 74",
      "generatedFrom": [
        "q:weight:wm_filler_83:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_83:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_83:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_84:struggle",
      "description": "General Factor 75",
      "generatedFrom": [
        "q:weight:wm_filler_84:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_84:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_84:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_85:struggle",
      "description": "General Factor 76",
      "generatedFrom": [
        "q:weight:wm_filler_85:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_85:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_85:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_86:struggle",
      "description": "General Factor 77",
      "generatedFrom": [
        "q:weight:wm_filler_86:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_86:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_86:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_87:struggle",
      "description": "General Factor 78",
      "generatedFrom": [
        "q:weight:wm_filler_87:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_87:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_87:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_88:struggle",
      "description": "General Factor 79",
      "generatedFrom": [
        "q:weight:wm_filler_88:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_88:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_88:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_89:struggle",
      "description": "General Factor 80",
      "generatedFrom": [
        "q:weight:wm_filler_89:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_89:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_89:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_90:struggle",
      "description": "General Factor 81",
      "generatedFrom": [
        "q:weight:wm_filler_90:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_90:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_90:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_91:struggle",
      "description": "General Factor 82",
      "generatedFrom": [
        "q:weight:wm_filler_91:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_91:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_91:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_92:struggle",
      "description": "General Factor 83",
      "generatedFrom": [
        "q:weight:wm_filler_92:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_92:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_92:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_93:struggle",
      "description": "General Factor 84",
      "generatedFrom": [
        "q:weight:wm_filler_93:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_93:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_93:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_94:struggle",
      "description": "General Factor 85",
      "generatedFrom": [
        "q:weight:wm_filler_94:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_94:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_94:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_95:struggle",
      "description": "General Factor 86",
      "generatedFrom": [
        "q:weight:wm_filler_95:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_95:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_95:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_96:struggle",
      "description": "General Factor 87",
      "generatedFrom": [
        "q:weight:wm_filler_96:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_96:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_96:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_97:struggle",
      "description": "General Factor 88",
      "generatedFrom": [
        "q:weight:wm_filler_97:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_97:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_97:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_98:struggle",
      "description": "General Factor 89",
      "generatedFrom": [
        "q:weight:wm_filler_98:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_98:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_98:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_99:struggle",
      "description": "General Factor 90",
      "generatedFrom": [
        "q:weight:wm_filler_99:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_99:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_99:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_100:struggle",
      "description": "General Factor 91",
      "generatedFrom": [
        "q:weight:wm_filler_100:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_100:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_100:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_101:struggle",
      "description": "General Factor 92",
      "generatedFrom": [
        "q:weight:wm_filler_101:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_101:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_101:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_102:struggle",
      "description": "General Factor 93",
      "generatedFrom": [
        "q:weight:wm_filler_102:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_102:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_102:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_103:struggle",
      "description": "General Factor 94",
      "generatedFrom": [
        "q:weight:wm_filler_103:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_103:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_103:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_104:struggle",
      "description": "General Factor 95",
      "generatedFrom": [
        "q:weight:wm_filler_104:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_104:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_104:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_105:struggle",
      "description": "General Factor 96",
      "generatedFrom": [
        "q:weight:wm_filler_105:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_105:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_105:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_106:struggle",
      "description": "General Factor 97",
      "generatedFrom": [
        "q:weight:wm_filler_106:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_106:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_106:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_107:struggle",
      "description": "General Factor 98",
      "generatedFrom": [
        "q:weight:wm_filler_107:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_107:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_107:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_108:struggle",
      "description": "General Factor 99",
      "generatedFrom": [
        "q:weight:wm_filler_108:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_108:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_108:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_109:struggle",
      "description": "General Factor 100",
      "generatedFrom": [
        "q:weight:wm_filler_109:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_109:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_109:clinical"
      ],
      "confidenceImpact": 10
    },
    {
      "id": "fact:weight:wm_filler_110:struggle",
      "description": "General Factor 101",
      "generatedFrom": [
        "q:weight:wm_filler_110:primary"
      ],
      "tags": [
        "weight",
        "barrier"
      ],
      "usedBy": [
        "insight:weight:wm_filler_110:impact",
        "score:weight:readiness",
        "dec:weight:wm_filler_110:clinical"
      ],
      "confidenceImpact": 10
    }
  ],
  "insights": [
    {
      "id": "insight:eng:eng_1:impact",
      "name": "Waking up exhausted Barrier",
      "meaning": "Indicates that Waking up exhausted is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_1:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_1:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_2:impact",
      "name": "Caffeine dependence Barrier",
      "meaning": "Indicates that Caffeine dependence is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_2:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_2:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_3:impact",
      "name": "Snooze button reliance Barrier",
      "meaning": "Indicates that Snooze button reliance is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_3:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_3:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_4:impact",
      "name": "Morning Brain Fog Barrier",
      "meaning": "Indicates that Morning Brain Fog is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_4:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_4:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_5:impact",
      "name": "Dreading the day Barrier",
      "meaning": "Indicates that Dreading the day is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_5:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_5:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_6:impact",
      "name": "The 3 PM Crash Barrier",
      "meaning": "Indicates that The 3 PM Crash is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_6:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_6:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_7:impact",
      "name": "Sugar cravings for energy Barrier",
      "meaning": "Indicates that Sugar cravings for energy is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_7:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_7:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_8:impact",
      "name": "Afternoon Screen Fatigue Barrier",
      "meaning": "Indicates that Afternoon Screen Fatigue is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_8:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_8:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_9:impact",
      "name": "Sluggish Digestion Barrier",
      "meaning": "Indicates that Sluggish Digestion is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_9:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_9:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_10:impact",
      "name": "Meeting Fatigue Barrier",
      "meaning": "Indicates that Meeting Fatigue is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_10:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_10:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_11:impact",
      "name": "Nothing left for personal life Barrier",
      "meaning": "Indicates that Nothing left for personal life is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_11:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_11:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_12:impact",
      "name": "Revenge Bedtime Procrastination Barrier",
      "meaning": "Indicates that Revenge Bedtime Procrastination is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_12:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_12:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_13:impact",
      "name": "Couch Lock Barrier",
      "meaning": "Indicates that Couch Lock is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_13:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_13:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_14:impact",
      "name": "Alcohol for relaxation Barrier",
      "meaning": "Indicates that Alcohol for relaxation is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_14:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_14:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_15:impact",
      "name": "Second Wind Barrier",
      "meaning": "Indicates that Second Wind is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_15:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_15:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_16:impact",
      "name": "Racing mind at night Barrier",
      "meaning": "Indicates that Racing mind at night is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_16:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_16:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_17:impact",
      "name": "Waking up in the middle of the night Barrier",
      "meaning": "Indicates that Waking up in the middle of the night is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_17:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_17:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_18:impact",
      "name": "Hot flashes or night sweats Barrier",
      "meaning": "Indicates that Hot flashes or night sweats is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_18:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_18:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_19:impact",
      "name": "Partner snoring or restlessness Barrier",
      "meaning": "Indicates that Partner snoring or restlessness is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_19:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_19:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_20:impact",
      "name": "Mouth breathing Barrier",
      "meaning": "Indicates that Mouth breathing is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_20:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_20:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_21:impact",
      "name": "Irregular sleep schedule Barrier",
      "meaning": "Indicates that Irregular sleep schedule is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_21:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_21:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_22:impact",
      "name": "Skipping meals Barrier",
      "meaning": "Indicates that Skipping meals is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_22:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_22:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_23:impact",
      "name": "Chronic dehydration Barrier",
      "meaning": "Indicates that Chronic dehydration is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_23:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_23:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_24:impact",
      "name": "Heavy Carb Coma Barrier",
      "meaning": "Indicates that Heavy Carb Coma is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_24:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_24:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_25:impact",
      "name": "Under-eating for weight loss Barrier",
      "meaning": "Indicates that Under-eating for weight loss is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_25:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_25:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_26:impact",
      "name": "Iron deficiency symptoms Barrier",
      "meaning": "Indicates that Iron deficiency symptoms is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_26:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_26:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_27:impact",
      "name": "Burnout and Overwhelm Barrier",
      "meaning": "Indicates that Burnout and Overwhelm is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_27:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_27:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_28:impact",
      "name": "Shift Work / Jetlag Barrier",
      "meaning": "Indicates that Shift Work / Jetlag is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_28:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_28:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_29:impact",
      "name": "High-stress environment Barrier",
      "meaning": "Indicates that High-stress environment is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_29:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_29:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_30:impact",
      "name": "Sedentary lethargy Barrier",
      "meaning": "Indicates that Sedentary lethargy is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_30:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_30:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_31:impact",
      "name": "Constant Context Switching Barrier",
      "meaning": "Indicates that Constant Context Switching is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_31:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_31:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_32:impact",
      "name": "Hormonal Energy Dips Barrier",
      "meaning": "Indicates that Hormonal Energy Dips is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_32:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_32:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_33:impact",
      "name": "Perimenopause fatigue Barrier",
      "meaning": "Indicates that Perimenopause fatigue is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_33:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_33:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_34:impact",
      "name": "Pregnancy Exhaustion Barrier",
      "meaning": "Indicates that Pregnancy Exhaustion is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_34:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_34:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_35:impact",
      "name": "Postpartum depletion Barrier",
      "meaning": "Indicates that Postpartum depletion is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_35:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_35:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_36:impact",
      "name": "Unexplained Chronic Fatigue Barrier",
      "meaning": "Indicates that Unexplained Chronic Fatigue is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_36:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_36:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_37:impact",
      "name": "Loud snoring or gasping at night Barrier",
      "meaning": "Indicates that Loud snoring or gasping at night is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_37:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_37:clinical"
      ]
    },
    {
      "id": "insight:eng:eng_38:impact",
      "name": "Depression-linked low energy Barrier",
      "meaning": "Indicates that Depression-linked low energy is an active roadblock for their energy.",
      "requiredFacts": [
        "fact:eng:eng_38:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:eng:vitality"
      ],
      "linkedDecisions": [
        "dec:eng:eng_38:clinical"
      ]
    },
    {
      "id": "insight:slp:q001_wake_feeling:impact",
      "name": "Waking exhaustion Barrier",
      "meaning": "Indicates that Waking exhaustion is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q001_wake_feeling:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q001_wake_feeling:clinical"
      ]
    },
    {
      "id": "insight:slp:q002_fall_asleep_time:impact",
      "name": "Sleep onset latency Barrier",
      "meaning": "Indicates that Sleep onset latency is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q002_fall_asleep_time:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q002_fall_asleep_time:clinical"
      ]
    },
    {
      "id": "insight:slp:q003_wake_frequency:impact",
      "name": "Sleep fragmentation Barrier",
      "meaning": "Indicates that Sleep fragmentation is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q003_wake_frequency:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q003_wake_frequency:clinical"
      ]
    },
    {
      "id": "insight:slp:q004_fall_asleep_again:impact",
      "name": "Return to sleep latency Barrier",
      "meaning": "Indicates that Return to sleep latency is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q004_fall_asleep_again:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q004_fall_asleep_again:clinical"
      ]
    },
    {
      "id": "insight:slp:q005_early_waking:impact",
      "name": "Terminal insomnia Barrier",
      "meaning": "Indicates that Terminal insomnia is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q005_early_waking:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q005_early_waking:clinical"
      ]
    },
    {
      "id": "insight:slp:q006_phone_in_bed:impact",
      "name": "Device usage Barrier",
      "meaning": "Indicates that Device usage is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q006_phone_in_bed:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q006_phone_in_bed:clinical"
      ]
    },
    {
      "id": "insight:slp:q007_racing_thoughts:impact",
      "name": "Racing thoughts Barrier",
      "meaning": "Indicates that Racing thoughts is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q007_racing_thoughts:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q007_racing_thoughts:clinical"
      ]
    },
    {
      "id": "insight:slp:q008_stress_bedtime:impact",
      "name": "Bedtime stress Barrier",
      "meaning": "Indicates that Bedtime stress is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q008_stress_bedtime:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q008_stress_bedtime:clinical"
      ]
    },
    {
      "id": "insight:slp:q009_tv_before_bed:impact",
      "name": "TV consumption Barrier",
      "meaning": "Indicates that TV consumption is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q009_tv_before_bed:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q009_tv_before_bed:clinical"
      ]
    },
    {
      "id": "insight:slp:q010_regular_bedtime:impact",
      "name": "Bedtime consistency Barrier",
      "meaning": "Indicates that Bedtime consistency is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q010_regular_bedtime:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q010_regular_bedtime:clinical"
      ]
    },
    {
      "id": "insight:slp:q011_bedroom_noise:impact",
      "name": "Noise levels Barrier",
      "meaning": "Indicates that Noise levels is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q011_bedroom_noise:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q011_bedroom_noise:clinical"
      ]
    },
    {
      "id": "insight:slp:q012_disturbances:impact",
      "name": "Partner/Pet disturbance Barrier",
      "meaning": "Indicates that Partner/Pet disturbance is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q012_disturbances:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q012_disturbances:clinical"
      ]
    },
    {
      "id": "insight:slp:q013_snoring:impact",
      "name": "Snoring Barrier",
      "meaning": "Indicates that Snoring is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q013_snoring:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q013_snoring:clinical"
      ]
    },
    {
      "id": "insight:slp:q014_dry_mouth:impact",
      "name": "Mouth breathing Barrier",
      "meaning": "Indicates that Mouth breathing is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q014_dry_mouth:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q014_dry_mouth:clinical"
      ]
    },
    {
      "id": "insight:slp:q015_room_temp:impact",
      "name": "Temperature regulation Barrier",
      "meaning": "Indicates that Temperature regulation is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q015_room_temp:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q015_room_temp:clinical"
      ]
    },
    {
      "id": "insight:slp:q016_last_meal:impact",
      "name": "Late meals Barrier",
      "meaning": "Indicates that Late meals is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q016_last_meal:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q016_last_meal:clinical"
      ]
    },
    {
      "id": "insight:slp:q017_coffee_timing:impact",
      "name": "Caffeine timing Barrier",
      "meaning": "Indicates that Caffeine timing is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q017_coffee_timing:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q017_coffee_timing:clinical"
      ]
    },
    {
      "id": "insight:slp:q018_alcohol_night:impact",
      "name": "Alcohol before bed Barrier",
      "meaning": "Indicates that Alcohol before bed is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q018_alcohol_night:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q018_alcohol_night:clinical"
      ]
    },
    {
      "id": "insight:slp:q019_hungry_sleep:impact",
      "name": "Hunger at bedtime Barrier",
      "meaning": "Indicates that Hunger at bedtime is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q019_hungry_sleep:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q019_hungry_sleep:clinical"
      ]
    },
    {
      "id": "insight:slp:q020_daytime_water:impact",
      "name": "Hydration impact Barrier",
      "meaning": "Indicates that Hydration impact is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q020_daytime_water:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q020_daytime_water:clinical"
      ]
    },
    {
      "id": "insight:slp:q021_wake_time:impact",
      "name": "Wake time consistency Barrier",
      "meaning": "Indicates that Wake time consistency is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q021_wake_time:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q021_wake_time:clinical"
      ]
    },
    {
      "id": "insight:slp:q022_bed_time:impact",
      "name": "Bedtime alignment Barrier",
      "meaning": "Indicates that Bedtime alignment is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q022_bed_time:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q022_bed_time:clinical"
      ]
    },
    {
      "id": "insight:slp:q023_sleep_consistency:impact",
      "name": "Sleep consistency Barrier",
      "meaning": "Indicates that Sleep consistency is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q023_sleep_consistency:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q023_sleep_consistency:clinical"
      ]
    },
    {
      "id": "insight:slp:q024_naps:impact",
      "name": "Daytime naps Barrier",
      "meaning": "Indicates that Daytime naps is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q024_naps:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q024_naps:clinical"
      ]
    },
    {
      "id": "insight:slp:q025_nap_length:impact",
      "name": "Nap duration Barrier",
      "meaning": "Indicates that Nap duration is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q025_nap_length:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q025_nap_length:clinical"
      ]
    },
    {
      "id": "insight:slp:q026_morning_sunlight:impact",
      "name": "Circadian light exposure Barrier",
      "meaning": "Indicates that Circadian light exposure is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q026_morning_sunlight:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q026_morning_sunlight:clinical"
      ]
    },
    {
      "id": "insight:slp:q027_first_coffee:impact",
      "name": "Caffeine timing Barrier",
      "meaning": "Indicates that Caffeine timing is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q027_first_coffee:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q027_first_coffee:clinical"
      ]
    },
    {
      "id": "insight:slp:q028_morning_sleepy:impact",
      "name": "Morning fatigue Barrier",
      "meaning": "Indicates that Morning fatigue is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q028_morning_sleepy:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q028_morning_sleepy:clinical"
      ]
    },
    {
      "id": "insight:slp:q029_caffeine_dependent:impact",
      "name": "Caffeine dependence Barrier",
      "meaning": "Indicates that Caffeine dependence is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q029_caffeine_dependent:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q029_caffeine_dependent:clinical"
      ]
    },
    {
      "id": "insight:slp:q030_afternoon_slump:impact",
      "name": "Post-lunch sleepiness Barrier",
      "meaning": "Indicates that Post-lunch sleepiness is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q030_afternoon_slump:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q030_afternoon_slump:clinical"
      ]
    },
    {
      "id": "insight:slp:q031_meeting_struggle:impact",
      "name": "Daytime alertness Barrier",
      "meaning": "Indicates that Daytime alertness is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q031_meeting_struggle:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q031_meeting_struggle:clinical"
      ]
    },
    {
      "id": "insight:slp:q032_sleepy_driving:impact",
      "name": "Microsleep risk Barrier",
      "meaning": "Indicates that Microsleep risk is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q032_sleepy_driving:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q032_sleepy_driving:clinical"
      ]
    },
    {
      "id": "insight:slp:q033_yawning:impact",
      "name": "Chronic yawning Barrier",
      "meaning": "Indicates that Chronic yawning is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q033_yawning:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q033_yawning:clinical"
      ]
    },
    {
      "id": "insight:slp:q034_night_shift:impact",
      "name": "Shift work Barrier",
      "meaning": "Indicates that Shift work is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q034_night_shift:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q034_night_shift:clinical"
      ]
    },
    {
      "id": "insight:slp:q035_jet_lag:impact",
      "name": "Jet lag Barrier",
      "meaning": "Indicates that Jet lag is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q035_jet_lag:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q035_jet_lag:clinical"
      ]
    },
    {
      "id": "insight:slp:q036_weekend_sleep:impact",
      "name": "Weekend sleep variation Barrier",
      "meaning": "Indicates that Weekend sleep variation is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q036_weekend_sleep:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q036_weekend_sleep:clinical"
      ]
    },
    {
      "id": "insight:slp:q037_sleep_change:impact",
      "name": "Recent sleep changes Barrier",
      "meaning": "Indicates that Recent sleep changes is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q037_sleep_change:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q037_sleep_change:clinical"
      ]
    },
    {
      "id": "insight:slp:q038_menstrual_cycle:impact",
      "name": "Menstrual cycle sleep Barrier",
      "meaning": "Indicates that Menstrual cycle sleep is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q038_menstrual_cycle:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q038_menstrual_cycle:clinical"
      ]
    },
    {
      "id": "insight:slp:q039_pregnancy_sleep:impact",
      "name": "Pregnancy sleep Barrier",
      "meaning": "Indicates that Pregnancy sleep is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q039_pregnancy_sleep:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q039_pregnancy_sleep:clinical"
      ]
    },
    {
      "id": "insight:slp:q040_menopause_sleep:impact",
      "name": "Menopause symptoms Barrier",
      "meaning": "Indicates that Menopause symptoms is an active roadblock for their sleep quality.",
      "requiredFacts": [
        "fact:slp:q040_menopause_sleep:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:slp:restoration"
      ],
      "linkedDecisions": [
        "dec:slp:q040_menopause_sleep:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_bespoke_1:impact",
      "name": "Desk job inactivity Barrier",
      "meaning": "Indicates that Desk job inactivity is an active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_bespoke_1:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_bespoke_1:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_bespoke_2:impact",
      "name": "Stress eating after work Barrier",
      "meaning": "Indicates that Stress eating after work is an active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_bespoke_2:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_bespoke_2:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_bespoke_3:impact",
      "name": "Postpartum exhaustion Barrier",
      "meaning": "Indicates that Postpartum exhaustion is an active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_bespoke_3:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_bespoke_3:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_bespoke_4:impact",
      "name": "PCOS belly fat Barrier",
      "meaning": "Indicates that PCOS belly fat is an active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_bespoke_4:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_bespoke_4:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_bespoke_5:impact",
      "name": "Budget constraints Barrier",
      "meaning": "Indicates that Budget constraints is an active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_bespoke_5:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_bespoke_5:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_bespoke_6:impact",
      "name": "Late night TV snacking Barrier",
      "meaning": "Indicates that Late night TV snacking is an active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_bespoke_6:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_bespoke_6:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_bespoke_7:impact",
      "name": "Prediabetes risk Barrier",
      "meaning": "Indicates that Prediabetes risk is an active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_bespoke_7:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_bespoke_7:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_bespoke_8:impact",
      "name": "Joint pain during cardio Barrier",
      "meaning": "Indicates that Joint pain during cardio is an active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_bespoke_8:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_bespoke_8:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_9:impact",
      "name": "General Factor 0 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_9:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_9:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_10:impact",
      "name": "General Factor 1 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_10:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_10:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_11:impact",
      "name": "General Factor 2 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_11:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_11:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_12:impact",
      "name": "General Factor 3 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_12:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_12:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_13:impact",
      "name": "General Factor 4 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_13:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_13:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_14:impact",
      "name": "General Factor 5 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_14:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_14:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_15:impact",
      "name": "General Factor 6 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_15:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_15:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_16:impact",
      "name": "General Factor 7 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_16:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_16:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_17:impact",
      "name": "General Factor 8 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_17:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_17:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_18:impact",
      "name": "General Factor 9 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_18:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_18:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_19:impact",
      "name": "General Factor 10 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_19:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_19:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_20:impact",
      "name": "General Factor 11 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_20:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_20:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_21:impact",
      "name": "General Factor 12 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_21:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_21:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_22:impact",
      "name": "General Factor 13 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_22:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_22:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_23:impact",
      "name": "General Factor 14 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_23:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_23:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_24:impact",
      "name": "General Factor 15 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_24:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_24:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_25:impact",
      "name": "General Factor 16 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_25:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_25:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_26:impact",
      "name": "General Factor 17 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_26:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_26:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_27:impact",
      "name": "General Factor 18 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_27:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_27:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_28:impact",
      "name": "General Factor 19 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_28:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_28:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_29:impact",
      "name": "General Factor 20 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_29:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_29:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_30:impact",
      "name": "General Factor 21 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_30:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_30:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_31:impact",
      "name": "General Factor 22 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_31:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_31:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_32:impact",
      "name": "General Factor 23 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_32:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_32:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_33:impact",
      "name": "General Factor 24 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_33:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_33:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_34:impact",
      "name": "General Factor 25 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_34:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_34:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_35:impact",
      "name": "General Factor 26 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_35:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_35:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_36:impact",
      "name": "General Factor 27 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_36:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_36:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_37:impact",
      "name": "General Factor 28 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_37:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_37:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_38:impact",
      "name": "General Factor 29 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_38:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_38:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_39:impact",
      "name": "General Factor 30 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_39:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_39:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_40:impact",
      "name": "General Factor 31 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_40:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_40:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_41:impact",
      "name": "General Factor 32 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_41:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_41:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_42:impact",
      "name": "General Factor 33 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_42:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_42:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_43:impact",
      "name": "General Factor 34 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_43:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_43:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_44:impact",
      "name": "General Factor 35 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_44:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_44:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_45:impact",
      "name": "General Factor 36 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_45:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_45:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_46:impact",
      "name": "General Factor 37 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_46:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_46:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_47:impact",
      "name": "General Factor 38 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_47:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_47:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_48:impact",
      "name": "General Factor 39 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_48:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_48:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_49:impact",
      "name": "General Factor 40 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_49:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_49:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_50:impact",
      "name": "General Factor 41 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_50:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_50:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_51:impact",
      "name": "General Factor 42 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_51:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_51:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_52:impact",
      "name": "General Factor 43 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_52:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_52:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_53:impact",
      "name": "General Factor 44 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_53:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_53:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_54:impact",
      "name": "General Factor 45 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_54:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_54:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_55:impact",
      "name": "General Factor 46 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_55:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_55:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_56:impact",
      "name": "General Factor 47 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_56:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_56:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_57:impact",
      "name": "General Factor 48 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_57:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_57:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_58:impact",
      "name": "General Factor 49 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_58:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_58:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_59:impact",
      "name": "General Factor 50 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_59:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_59:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_60:impact",
      "name": "General Factor 51 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_60:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_60:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_61:impact",
      "name": "General Factor 52 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_61:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_61:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_62:impact",
      "name": "General Factor 53 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_62:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_62:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_63:impact",
      "name": "General Factor 54 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_63:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_63:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_64:impact",
      "name": "General Factor 55 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_64:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_64:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_65:impact",
      "name": "General Factor 56 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_65:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_65:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_66:impact",
      "name": "General Factor 57 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_66:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_66:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_67:impact",
      "name": "General Factor 58 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_67:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_67:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_68:impact",
      "name": "General Factor 59 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_68:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_68:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_69:impact",
      "name": "General Factor 60 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_69:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_69:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_70:impact",
      "name": "General Factor 61 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_70:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_70:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_71:impact",
      "name": "General Factor 62 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_71:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_71:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_72:impact",
      "name": "General Factor 63 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_72:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_72:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_73:impact",
      "name": "General Factor 64 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_73:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_73:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_74:impact",
      "name": "General Factor 65 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_74:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_74:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_75:impact",
      "name": "General Factor 66 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_75:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_75:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_76:impact",
      "name": "General Factor 67 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_76:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_76:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_77:impact",
      "name": "General Factor 68 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_77:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_77:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_78:impact",
      "name": "General Factor 69 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_78:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_78:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_79:impact",
      "name": "General Factor 70 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_79:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_79:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_80:impact",
      "name": "General Factor 71 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_80:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_80:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_81:impact",
      "name": "General Factor 72 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_81:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_81:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_82:impact",
      "name": "General Factor 73 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_82:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_82:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_83:impact",
      "name": "General Factor 74 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_83:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_83:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_84:impact",
      "name": "General Factor 75 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_84:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_84:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_85:impact",
      "name": "General Factor 76 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_85:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_85:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_86:impact",
      "name": "General Factor 77 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_86:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_86:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_87:impact",
      "name": "General Factor 78 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_87:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_87:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_88:impact",
      "name": "General Factor 79 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_88:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_88:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_89:impact",
      "name": "General Factor 80 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_89:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_89:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_90:impact",
      "name": "General Factor 81 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_90:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_90:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_91:impact",
      "name": "General Factor 82 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_91:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_91:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_92:impact",
      "name": "General Factor 83 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_92:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_92:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_93:impact",
      "name": "General Factor 84 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_93:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_93:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_94:impact",
      "name": "General Factor 85 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_94:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_94:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_95:impact",
      "name": "General Factor 86 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_95:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_95:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_96:impact",
      "name": "General Factor 87 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_96:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_96:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_97:impact",
      "name": "General Factor 88 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_97:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_97:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_98:impact",
      "name": "General Factor 89 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_98:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_98:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_99:impact",
      "name": "General Factor 90 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_99:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_99:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_100:impact",
      "name": "General Factor 91 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_100:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_100:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_101:impact",
      "name": "General Factor 92 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_101:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_101:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_102:impact",
      "name": "General Factor 93 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_102:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_102:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_103:impact",
      "name": "General Factor 94 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_103:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_103:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_104:impact",
      "name": "General Factor 95 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_104:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_104:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_105:impact",
      "name": "General Factor 96 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_105:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_105:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_106:impact",
      "name": "General Factor 97 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_106:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_106:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_107:impact",
      "name": "General Factor 98 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_107:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_107:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_108:impact",
      "name": "General Factor 99 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_108:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_108:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_109:impact",
      "name": "General Factor 100 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_109:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_109:clinical"
      ]
    },
    {
      "id": "insight:weight:wm_filler_110:impact",
      "name": "General Factor 101 Barrier",
      "meaning": "Active roadblock.",
      "requiredFacts": [
        "fact:weight:wm_filler_110:struggle"
      ],
      "confidence": 80,
      "linkedScores": [
        "score:weight:readiness"
      ],
      "linkedDecisions": [
        "dec:weight:wm_filler_110:clinical"
      ]
    }
  ],
  "scores": [
    {
      "id": "score:eng:vitality",
      "name": "Vitality & Restoration Score",
      "description": "Measures overall energy levels and recovery capacity.",
      "baseValue": 80,
      "rules": [
        {
          "requiredFacts": [
            "fact:eng:eng_1:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_2:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_3:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_4:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_5:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_6:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_7:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_8:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_9:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_10:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_11:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_12:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_13:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_14:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_15:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_16:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_17:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_18:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_19:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_20:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_21:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_22:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_23:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_24:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_25:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_26:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_27:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_28:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_29:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_30:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_31:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_32:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_33:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_34:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_35:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_36:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_37:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:eng_38:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:special:best_time"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:eng:special:biggest_drain"
          ],
          "valueModifier": -2
        }
      ]
    },
    {
      "id": "score:slp:restoration",
      "name": "Sleep & Restoration Score",
      "description": "Measures overall sleep quality and recovery capacity.",
      "baseValue": 80,
      "rules": [
        {
          "requiredFacts": [
            "fact:slp:q001_wake_feeling:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q002_fall_asleep_time:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q003_wake_frequency:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q004_fall_asleep_again:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q005_early_waking:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q006_phone_in_bed:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q007_racing_thoughts:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q008_stress_bedtime:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q009_tv_before_bed:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q010_regular_bedtime:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q011_bedroom_noise:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q012_disturbances:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q013_snoring:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q014_dry_mouth:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q015_room_temp:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q016_last_meal:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q017_coffee_timing:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q018_alcohol_night:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q019_hungry_sleep:struggle"
          ],
          "valueModifier": -2
        },
        {
          "requiredFacts": [
            "fact:slp:q020_daytime_water:struggle"
          ],
          "valueModifier": -2
        }
      ]
    },
    {
      "id": "score:weight:readiness",
      "name": "Weight Readiness Score",
      "description": "Measures overall readiness for weight loss",
      "baseValue": 50,
      "rules": [
        {
          "requiredFacts": [
            "fact:weight:wm_bespoke_1:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_bespoke_2:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_bespoke_3:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_bespoke_4:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_bespoke_5:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_bespoke_6:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_bespoke_7:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_bespoke_8:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_9:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_10:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_11:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_12:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_13:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_14:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_15:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_16:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_17:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_18:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_19:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_20:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_21:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_22:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_23:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_24:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_25:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_26:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_27:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_28:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_29:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_30:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_31:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_32:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_33:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_34:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_35:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_36:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_37:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_38:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_39:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_40:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_41:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_42:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_43:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_44:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_45:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_46:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_47:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_48:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_49:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_50:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_51:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_52:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_53:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_54:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_55:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_56:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_57:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_58:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_59:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_60:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_61:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_62:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_63:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_64:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_65:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_66:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_67:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_68:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_69:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_70:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_71:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_72:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_73:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_74:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_75:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_76:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_77:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_78:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_79:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_80:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_81:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_82:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_83:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_84:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_85:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_86:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_87:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_88:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_89:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_90:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_91:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_92:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_93:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_94:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_95:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_96:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_97:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_98:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_99:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_100:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_101:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_102:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_103:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_104:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_105:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_106:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_107:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_108:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_109:struggle"
          ],
          "valueModifier": -1
        },
        {
          "requiredFacts": [
            "fact:weight:wm_filler_110:struggle"
          ],
          "valueModifier": -1
        }
      ]
    }
  ],
  "decisions": [
    {
      "id": "dec:eng:eng_1:clinical",
      "clinicalMeaning": "Requires protocol for Waking up exhausted",
      "requiredFacts": [
        "fact:eng:eng_1:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_1:action"
      ]
    },
    {
      "id": "dec:eng:eng_2:clinical",
      "clinicalMeaning": "Requires protocol for Caffeine dependence",
      "requiredFacts": [
        "fact:eng:eng_2:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_2:action"
      ]
    },
    {
      "id": "dec:eng:eng_3:clinical",
      "clinicalMeaning": "Requires protocol for Snooze button reliance",
      "requiredFacts": [
        "fact:eng:eng_3:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_3:action"
      ]
    },
    {
      "id": "dec:eng:eng_4:clinical",
      "clinicalMeaning": "Requires protocol for Morning Brain Fog",
      "requiredFacts": [
        "fact:eng:eng_4:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_4:action"
      ]
    },
    {
      "id": "dec:eng:eng_5:clinical",
      "clinicalMeaning": "Requires protocol for Dreading the day",
      "requiredFacts": [
        "fact:eng:eng_5:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_5:action"
      ]
    },
    {
      "id": "dec:eng:eng_6:clinical",
      "clinicalMeaning": "Requires protocol for The 3 PM Crash",
      "requiredFacts": [
        "fact:eng:eng_6:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_6:action"
      ]
    },
    {
      "id": "dec:eng:eng_7:clinical",
      "clinicalMeaning": "Requires protocol for Sugar cravings for energy",
      "requiredFacts": [
        "fact:eng:eng_7:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_7:action"
      ]
    },
    {
      "id": "dec:eng:eng_8:clinical",
      "clinicalMeaning": "Requires protocol for Afternoon Screen Fatigue",
      "requiredFacts": [
        "fact:eng:eng_8:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_8:action"
      ]
    },
    {
      "id": "dec:eng:eng_9:clinical",
      "clinicalMeaning": "Requires protocol for Sluggish Digestion",
      "requiredFacts": [
        "fact:eng:eng_9:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_9:action"
      ]
    },
    {
      "id": "dec:eng:eng_10:clinical",
      "clinicalMeaning": "Requires protocol for Meeting Fatigue",
      "requiredFacts": [
        "fact:eng:eng_10:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_10:action"
      ]
    },
    {
      "id": "dec:eng:eng_11:clinical",
      "clinicalMeaning": "Requires protocol for Nothing left for personal life",
      "requiredFacts": [
        "fact:eng:eng_11:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_11:action"
      ]
    },
    {
      "id": "dec:eng:eng_12:clinical",
      "clinicalMeaning": "Requires protocol for Revenge Bedtime Procrastination",
      "requiredFacts": [
        "fact:eng:eng_12:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_12:action"
      ]
    },
    {
      "id": "dec:eng:eng_13:clinical",
      "clinicalMeaning": "Requires protocol for Couch Lock",
      "requiredFacts": [
        "fact:eng:eng_13:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_13:action"
      ]
    },
    {
      "id": "dec:eng:eng_14:clinical",
      "clinicalMeaning": "Requires protocol for Alcohol for relaxation",
      "requiredFacts": [
        "fact:eng:eng_14:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_14:action"
      ]
    },
    {
      "id": "dec:eng:eng_15:clinical",
      "clinicalMeaning": "Requires protocol for Second Wind",
      "requiredFacts": [
        "fact:eng:eng_15:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_15:action"
      ]
    },
    {
      "id": "dec:eng:eng_16:clinical",
      "clinicalMeaning": "Requires protocol for Racing mind at night",
      "requiredFacts": [
        "fact:eng:eng_16:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_16:action"
      ]
    },
    {
      "id": "dec:eng:eng_17:clinical",
      "clinicalMeaning": "Requires protocol for Waking up in the middle of the night",
      "requiredFacts": [
        "fact:eng:eng_17:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_17:action"
      ]
    },
    {
      "id": "dec:eng:eng_18:clinical",
      "clinicalMeaning": "Requires protocol for Hot flashes or night sweats",
      "requiredFacts": [
        "fact:eng:eng_18:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_18:action"
      ]
    },
    {
      "id": "dec:eng:eng_19:clinical",
      "clinicalMeaning": "Requires protocol for Partner snoring or restlessness",
      "requiredFacts": [
        "fact:eng:eng_19:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_19:action"
      ]
    },
    {
      "id": "dec:eng:eng_20:clinical",
      "clinicalMeaning": "Requires protocol for Mouth breathing",
      "requiredFacts": [
        "fact:eng:eng_20:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_20:action"
      ]
    },
    {
      "id": "dec:eng:eng_21:clinical",
      "clinicalMeaning": "Requires protocol for Irregular sleep schedule",
      "requiredFacts": [
        "fact:eng:eng_21:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_21:action"
      ]
    },
    {
      "id": "dec:eng:eng_22:clinical",
      "clinicalMeaning": "Requires protocol for Skipping meals",
      "requiredFacts": [
        "fact:eng:eng_22:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_22:action"
      ]
    },
    {
      "id": "dec:eng:eng_23:clinical",
      "clinicalMeaning": "Requires protocol for Chronic dehydration",
      "requiredFacts": [
        "fact:eng:eng_23:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_23:action"
      ]
    },
    {
      "id": "dec:eng:eng_24:clinical",
      "clinicalMeaning": "Requires protocol for Heavy Carb Coma",
      "requiredFacts": [
        "fact:eng:eng_24:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_24:action"
      ]
    },
    {
      "id": "dec:eng:eng_25:clinical",
      "clinicalMeaning": "Requires protocol for Under-eating for weight loss",
      "requiredFacts": [
        "fact:eng:eng_25:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_25:action"
      ]
    },
    {
      "id": "dec:eng:eng_26:clinical",
      "clinicalMeaning": "Requires protocol for Iron deficiency symptoms",
      "requiredFacts": [
        "fact:eng:eng_26:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_26:action"
      ]
    },
    {
      "id": "dec:eng:eng_27:clinical",
      "clinicalMeaning": "Requires protocol for Burnout and Overwhelm",
      "requiredFacts": [
        "fact:eng:eng_27:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_27:action"
      ]
    },
    {
      "id": "dec:eng:eng_28:clinical",
      "clinicalMeaning": "Requires protocol for Shift Work / Jetlag",
      "requiredFacts": [
        "fact:eng:eng_28:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_28:action"
      ]
    },
    {
      "id": "dec:eng:eng_29:clinical",
      "clinicalMeaning": "Requires protocol for High-stress environment",
      "requiredFacts": [
        "fact:eng:eng_29:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_29:action"
      ]
    },
    {
      "id": "dec:eng:eng_30:clinical",
      "clinicalMeaning": "Requires protocol for Sedentary lethargy",
      "requiredFacts": [
        "fact:eng:eng_30:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_30:action"
      ]
    },
    {
      "id": "dec:eng:eng_31:clinical",
      "clinicalMeaning": "Requires protocol for Constant Context Switching",
      "requiredFacts": [
        "fact:eng:eng_31:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_31:action"
      ]
    },
    {
      "id": "dec:eng:eng_32:clinical",
      "clinicalMeaning": "Requires protocol for Hormonal Energy Dips",
      "requiredFacts": [
        "fact:eng:eng_32:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_32:action"
      ]
    },
    {
      "id": "dec:eng:eng_33:clinical",
      "clinicalMeaning": "Requires protocol for Perimenopause fatigue",
      "requiredFacts": [
        "fact:eng:eng_33:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_33:action"
      ]
    },
    {
      "id": "dec:eng:eng_34:clinical",
      "clinicalMeaning": "Requires protocol for Pregnancy Exhaustion",
      "requiredFacts": [
        "fact:eng:eng_34:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_34:action"
      ]
    },
    {
      "id": "dec:eng:eng_35:clinical",
      "clinicalMeaning": "Requires protocol for Postpartum depletion",
      "requiredFacts": [
        "fact:eng:eng_35:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_35:action"
      ]
    },
    {
      "id": "dec:eng:eng_36:clinical",
      "clinicalMeaning": "Requires protocol for Unexplained Chronic Fatigue",
      "requiredFacts": [
        "fact:eng:eng_36:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_36:action"
      ]
    },
    {
      "id": "dec:eng:eng_37:clinical",
      "clinicalMeaning": "Requires protocol for Loud snoring or gasping at night",
      "requiredFacts": [
        "fact:eng:eng_37:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_37:action"
      ]
    },
    {
      "id": "dec:eng:eng_38:clinical",
      "clinicalMeaning": "Requires protocol for Depression-linked low energy",
      "requiredFacts": [
        "fact:eng:eng_38:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:eng:eng_38:action"
      ]
    },
    {
      "id": "dec:slp:q001_wake_feeling:clinical",
      "clinicalMeaning": "Requires protocol for Waking exhaustion",
      "requiredFacts": [
        "fact:slp:q001_wake_feeling:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q001_wake_feeling:action"
      ]
    },
    {
      "id": "dec:slp:q002_fall_asleep_time:clinical",
      "clinicalMeaning": "Requires protocol for Sleep onset latency",
      "requiredFacts": [
        "fact:slp:q002_fall_asleep_time:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q002_fall_asleep_time:action"
      ]
    },
    {
      "id": "dec:slp:q003_wake_frequency:clinical",
      "clinicalMeaning": "Requires protocol for Sleep fragmentation",
      "requiredFacts": [
        "fact:slp:q003_wake_frequency:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q003_wake_frequency:action"
      ]
    },
    {
      "id": "dec:slp:q004_fall_asleep_again:clinical",
      "clinicalMeaning": "Requires protocol for Return to sleep latency",
      "requiredFacts": [
        "fact:slp:q004_fall_asleep_again:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q004_fall_asleep_again:action"
      ]
    },
    {
      "id": "dec:slp:q005_early_waking:clinical",
      "clinicalMeaning": "Requires protocol for Terminal insomnia",
      "requiredFacts": [
        "fact:slp:q005_early_waking:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q005_early_waking:action"
      ]
    },
    {
      "id": "dec:slp:q006_phone_in_bed:clinical",
      "clinicalMeaning": "Requires protocol for Device usage",
      "requiredFacts": [
        "fact:slp:q006_phone_in_bed:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q006_phone_in_bed:action"
      ]
    },
    {
      "id": "dec:slp:q007_racing_thoughts:clinical",
      "clinicalMeaning": "Requires protocol for Racing thoughts",
      "requiredFacts": [
        "fact:slp:q007_racing_thoughts:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q007_racing_thoughts:action"
      ]
    },
    {
      "id": "dec:slp:q008_stress_bedtime:clinical",
      "clinicalMeaning": "Requires protocol for Bedtime stress",
      "requiredFacts": [
        "fact:slp:q008_stress_bedtime:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q008_stress_bedtime:action"
      ]
    },
    {
      "id": "dec:slp:q009_tv_before_bed:clinical",
      "clinicalMeaning": "Requires protocol for TV consumption",
      "requiredFacts": [
        "fact:slp:q009_tv_before_bed:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q009_tv_before_bed:action"
      ]
    },
    {
      "id": "dec:slp:q010_regular_bedtime:clinical",
      "clinicalMeaning": "Requires protocol for Bedtime consistency",
      "requiredFacts": [
        "fact:slp:q010_regular_bedtime:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q010_regular_bedtime:action"
      ]
    },
    {
      "id": "dec:slp:q011_bedroom_noise:clinical",
      "clinicalMeaning": "Requires protocol for Noise levels",
      "requiredFacts": [
        "fact:slp:q011_bedroom_noise:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q011_bedroom_noise:action"
      ]
    },
    {
      "id": "dec:slp:q012_disturbances:clinical",
      "clinicalMeaning": "Requires protocol for Partner/Pet disturbance",
      "requiredFacts": [
        "fact:slp:q012_disturbances:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q012_disturbances:action"
      ]
    },
    {
      "id": "dec:slp:q013_snoring:clinical",
      "clinicalMeaning": "Requires protocol for Snoring",
      "requiredFacts": [
        "fact:slp:q013_snoring:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q013_snoring:action"
      ]
    },
    {
      "id": "dec:slp:q014_dry_mouth:clinical",
      "clinicalMeaning": "Requires protocol for Mouth breathing",
      "requiredFacts": [
        "fact:slp:q014_dry_mouth:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q014_dry_mouth:action"
      ]
    },
    {
      "id": "dec:slp:q015_room_temp:clinical",
      "clinicalMeaning": "Requires protocol for Temperature regulation",
      "requiredFacts": [
        "fact:slp:q015_room_temp:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q015_room_temp:action"
      ]
    },
    {
      "id": "dec:slp:q016_last_meal:clinical",
      "clinicalMeaning": "Requires protocol for Late meals",
      "requiredFacts": [
        "fact:slp:q016_last_meal:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q016_last_meal:action"
      ]
    },
    {
      "id": "dec:slp:q017_coffee_timing:clinical",
      "clinicalMeaning": "Requires protocol for Caffeine timing",
      "requiredFacts": [
        "fact:slp:q017_coffee_timing:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q017_coffee_timing:action"
      ]
    },
    {
      "id": "dec:slp:q018_alcohol_night:clinical",
      "clinicalMeaning": "Requires protocol for Alcohol before bed",
      "requiredFacts": [
        "fact:slp:q018_alcohol_night:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q018_alcohol_night:action"
      ]
    },
    {
      "id": "dec:slp:q019_hungry_sleep:clinical",
      "clinicalMeaning": "Requires protocol for Hunger at bedtime",
      "requiredFacts": [
        "fact:slp:q019_hungry_sleep:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q019_hungry_sleep:action"
      ]
    },
    {
      "id": "dec:slp:q020_daytime_water:clinical",
      "clinicalMeaning": "Requires protocol for Hydration impact",
      "requiredFacts": [
        "fact:slp:q020_daytime_water:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q020_daytime_water:action"
      ]
    },
    {
      "id": "dec:slp:q021_wake_time:clinical",
      "clinicalMeaning": "Requires protocol for Wake time consistency",
      "requiredFacts": [
        "fact:slp:q021_wake_time:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q021_wake_time:action"
      ]
    },
    {
      "id": "dec:slp:q022_bed_time:clinical",
      "clinicalMeaning": "Requires protocol for Bedtime alignment",
      "requiredFacts": [
        "fact:slp:q022_bed_time:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q022_bed_time:action"
      ]
    },
    {
      "id": "dec:slp:q023_sleep_consistency:clinical",
      "clinicalMeaning": "Requires protocol for Sleep consistency",
      "requiredFacts": [
        "fact:slp:q023_sleep_consistency:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q023_sleep_consistency:action"
      ]
    },
    {
      "id": "dec:slp:q024_naps:clinical",
      "clinicalMeaning": "Requires protocol for Daytime naps",
      "requiredFacts": [
        "fact:slp:q024_naps:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q024_naps:action"
      ]
    },
    {
      "id": "dec:slp:q025_nap_length:clinical",
      "clinicalMeaning": "Requires protocol for Nap duration",
      "requiredFacts": [
        "fact:slp:q025_nap_length:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q025_nap_length:action"
      ]
    },
    {
      "id": "dec:slp:q026_morning_sunlight:clinical",
      "clinicalMeaning": "Requires protocol for Circadian light exposure",
      "requiredFacts": [
        "fact:slp:q026_morning_sunlight:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q026_morning_sunlight:action"
      ]
    },
    {
      "id": "dec:slp:q027_first_coffee:clinical",
      "clinicalMeaning": "Requires protocol for Caffeine timing",
      "requiredFacts": [
        "fact:slp:q027_first_coffee:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q027_first_coffee:action"
      ]
    },
    {
      "id": "dec:slp:q028_morning_sleepy:clinical",
      "clinicalMeaning": "Requires protocol for Morning fatigue",
      "requiredFacts": [
        "fact:slp:q028_morning_sleepy:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q028_morning_sleepy:action"
      ]
    },
    {
      "id": "dec:slp:q029_caffeine_dependent:clinical",
      "clinicalMeaning": "Requires protocol for Caffeine dependence",
      "requiredFacts": [
        "fact:slp:q029_caffeine_dependent:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q029_caffeine_dependent:action"
      ]
    },
    {
      "id": "dec:slp:q030_afternoon_slump:clinical",
      "clinicalMeaning": "Requires protocol for Post-lunch sleepiness",
      "requiredFacts": [
        "fact:slp:q030_afternoon_slump:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q030_afternoon_slump:action"
      ]
    },
    {
      "id": "dec:slp:q031_meeting_struggle:clinical",
      "clinicalMeaning": "Requires protocol for Daytime alertness",
      "requiredFacts": [
        "fact:slp:q031_meeting_struggle:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q031_meeting_struggle:action"
      ]
    },
    {
      "id": "dec:slp:q032_sleepy_driving:clinical",
      "clinicalMeaning": "Requires protocol for Microsleep risk",
      "requiredFacts": [
        "fact:slp:q032_sleepy_driving:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q032_sleepy_driving:action"
      ]
    },
    {
      "id": "dec:slp:q033_yawning:clinical",
      "clinicalMeaning": "Requires protocol for Chronic yawning",
      "requiredFacts": [
        "fact:slp:q033_yawning:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q033_yawning:action"
      ]
    },
    {
      "id": "dec:slp:q034_night_shift:clinical",
      "clinicalMeaning": "Requires protocol for Shift work",
      "requiredFacts": [
        "fact:slp:q034_night_shift:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q034_night_shift:action"
      ]
    },
    {
      "id": "dec:slp:q035_jet_lag:clinical",
      "clinicalMeaning": "Requires protocol for Jet lag",
      "requiredFacts": [
        "fact:slp:q035_jet_lag:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q035_jet_lag:action"
      ]
    },
    {
      "id": "dec:slp:q036_weekend_sleep:clinical",
      "clinicalMeaning": "Requires protocol for Weekend sleep variation",
      "requiredFacts": [
        "fact:slp:q036_weekend_sleep:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q036_weekend_sleep:action"
      ]
    },
    {
      "id": "dec:slp:q037_sleep_change:clinical",
      "clinicalMeaning": "Requires protocol for Recent sleep changes",
      "requiredFacts": [
        "fact:slp:q037_sleep_change:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q037_sleep_change:action"
      ]
    },
    {
      "id": "dec:slp:q038_menstrual_cycle:clinical",
      "clinicalMeaning": "Requires protocol for Menstrual cycle sleep",
      "requiredFacts": [
        "fact:slp:q038_menstrual_cycle:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q038_menstrual_cycle:action"
      ]
    },
    {
      "id": "dec:slp:q039_pregnancy_sleep:clinical",
      "clinicalMeaning": "Requires protocol for Pregnancy sleep",
      "requiredFacts": [
        "fact:slp:q039_pregnancy_sleep:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q039_pregnancy_sleep:action"
      ]
    },
    {
      "id": "dec:slp:q040_menopause_sleep:clinical",
      "clinicalMeaning": "Requires protocol for Menopause symptoms",
      "requiredFacts": [
        "fact:slp:q040_menopause_sleep:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:slp:q040_menopause_sleep:action"
      ]
    },
    {
      "id": "dec:weight:wm_bespoke_1:clinical",
      "clinicalMeaning": "Requires protocol for Desk job inactivity",
      "requiredFacts": [
        "fact:weight:wm_bespoke_1:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:weight:wm_bespoke_1:action"
      ]
    },
    {
      "id": "dec:weight:wm_bespoke_2:clinical",
      "clinicalMeaning": "Requires protocol for Stress eating after work",
      "requiredFacts": [
        "fact:weight:wm_bespoke_2:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:weight:wm_bespoke_2:action"
      ]
    },
    {
      "id": "dec:weight:wm_bespoke_3:clinical",
      "clinicalMeaning": "Requires protocol for Postpartum exhaustion",
      "requiredFacts": [
        "fact:weight:wm_bespoke_3:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:weight:wm_bespoke_3:action"
      ]
    },
    {
      "id": "dec:weight:wm_bespoke_4:clinical",
      "clinicalMeaning": "Requires protocol for PCOS belly fat",
      "requiredFacts": [
        "fact:weight:wm_bespoke_4:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:weight:wm_bespoke_4:action"
      ]
    },
    {
      "id": "dec:weight:wm_bespoke_5:clinical",
      "clinicalMeaning": "Requires protocol for Budget constraints",
      "requiredFacts": [
        "fact:weight:wm_bespoke_5:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:weight:wm_bespoke_5:action"
      ]
    },
    {
      "id": "dec:weight:wm_bespoke_6:clinical",
      "clinicalMeaning": "Requires protocol for Late night TV snacking",
      "requiredFacts": [
        "fact:weight:wm_bespoke_6:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:weight:wm_bespoke_6:action"
      ]
    },
    {
      "id": "dec:weight:wm_bespoke_7:clinical",
      "clinicalMeaning": "Requires protocol for Prediabetes risk",
      "requiredFacts": [
        "fact:weight:wm_bespoke_7:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:weight:wm_bespoke_7:action"
      ]
    },
    {
      "id": "dec:weight:wm_bespoke_8:clinical",
      "clinicalMeaning": "Requires protocol for Joint pain during cardio",
      "requiredFacts": [
        "fact:weight:wm_bespoke_8:struggle"
      ],
      "confidence": 90,
      "severity": "medium",
      "priority": 2,
      "linkedRecommendations": [
        "rec:weight:wm_bespoke_8:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_9:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 0",
      "requiredFacts": [
        "fact:weight:wm_filler_9:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_9:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_10:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 1",
      "requiredFacts": [
        "fact:weight:wm_filler_10:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_10:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_11:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 2",
      "requiredFacts": [
        "fact:weight:wm_filler_11:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_11:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_12:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 3",
      "requiredFacts": [
        "fact:weight:wm_filler_12:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_12:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_13:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 4",
      "requiredFacts": [
        "fact:weight:wm_filler_13:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_13:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_14:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 5",
      "requiredFacts": [
        "fact:weight:wm_filler_14:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_14:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_15:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 6",
      "requiredFacts": [
        "fact:weight:wm_filler_15:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_15:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_16:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 7",
      "requiredFacts": [
        "fact:weight:wm_filler_16:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_16:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_17:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 8",
      "requiredFacts": [
        "fact:weight:wm_filler_17:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_17:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_18:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 9",
      "requiredFacts": [
        "fact:weight:wm_filler_18:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_18:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_19:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 10",
      "requiredFacts": [
        "fact:weight:wm_filler_19:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_19:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_20:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 11",
      "requiredFacts": [
        "fact:weight:wm_filler_20:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_20:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_21:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 12",
      "requiredFacts": [
        "fact:weight:wm_filler_21:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_21:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_22:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 13",
      "requiredFacts": [
        "fact:weight:wm_filler_22:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_22:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_23:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 14",
      "requiredFacts": [
        "fact:weight:wm_filler_23:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_23:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_24:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 15",
      "requiredFacts": [
        "fact:weight:wm_filler_24:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_24:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_25:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 16",
      "requiredFacts": [
        "fact:weight:wm_filler_25:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_25:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_26:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 17",
      "requiredFacts": [
        "fact:weight:wm_filler_26:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_26:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_27:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 18",
      "requiredFacts": [
        "fact:weight:wm_filler_27:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_27:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_28:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 19",
      "requiredFacts": [
        "fact:weight:wm_filler_28:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_28:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_29:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 20",
      "requiredFacts": [
        "fact:weight:wm_filler_29:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_29:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_30:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 21",
      "requiredFacts": [
        "fact:weight:wm_filler_30:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_30:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_31:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 22",
      "requiredFacts": [
        "fact:weight:wm_filler_31:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_31:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_32:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 23",
      "requiredFacts": [
        "fact:weight:wm_filler_32:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_32:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_33:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 24",
      "requiredFacts": [
        "fact:weight:wm_filler_33:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_33:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_34:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 25",
      "requiredFacts": [
        "fact:weight:wm_filler_34:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_34:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_35:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 26",
      "requiredFacts": [
        "fact:weight:wm_filler_35:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_35:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_36:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 27",
      "requiredFacts": [
        "fact:weight:wm_filler_36:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_36:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_37:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 28",
      "requiredFacts": [
        "fact:weight:wm_filler_37:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_37:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_38:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 29",
      "requiredFacts": [
        "fact:weight:wm_filler_38:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_38:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_39:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 30",
      "requiredFacts": [
        "fact:weight:wm_filler_39:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_39:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_40:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 31",
      "requiredFacts": [
        "fact:weight:wm_filler_40:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_40:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_41:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 32",
      "requiredFacts": [
        "fact:weight:wm_filler_41:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_41:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_42:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 33",
      "requiredFacts": [
        "fact:weight:wm_filler_42:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_42:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_43:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 34",
      "requiredFacts": [
        "fact:weight:wm_filler_43:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_43:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_44:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 35",
      "requiredFacts": [
        "fact:weight:wm_filler_44:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_44:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_45:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 36",
      "requiredFacts": [
        "fact:weight:wm_filler_45:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_45:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_46:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 37",
      "requiredFacts": [
        "fact:weight:wm_filler_46:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_46:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_47:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 38",
      "requiredFacts": [
        "fact:weight:wm_filler_47:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_47:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_48:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 39",
      "requiredFacts": [
        "fact:weight:wm_filler_48:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_48:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_49:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 40",
      "requiredFacts": [
        "fact:weight:wm_filler_49:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_49:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_50:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 41",
      "requiredFacts": [
        "fact:weight:wm_filler_50:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_50:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_51:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 42",
      "requiredFacts": [
        "fact:weight:wm_filler_51:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_51:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_52:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 43",
      "requiredFacts": [
        "fact:weight:wm_filler_52:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_52:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_53:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 44",
      "requiredFacts": [
        "fact:weight:wm_filler_53:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_53:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_54:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 45",
      "requiredFacts": [
        "fact:weight:wm_filler_54:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_54:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_55:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 46",
      "requiredFacts": [
        "fact:weight:wm_filler_55:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_55:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_56:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 47",
      "requiredFacts": [
        "fact:weight:wm_filler_56:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_56:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_57:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 48",
      "requiredFacts": [
        "fact:weight:wm_filler_57:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_57:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_58:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 49",
      "requiredFacts": [
        "fact:weight:wm_filler_58:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_58:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_59:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 50",
      "requiredFacts": [
        "fact:weight:wm_filler_59:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_59:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_60:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 51",
      "requiredFacts": [
        "fact:weight:wm_filler_60:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_60:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_61:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 52",
      "requiredFacts": [
        "fact:weight:wm_filler_61:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_61:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_62:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 53",
      "requiredFacts": [
        "fact:weight:wm_filler_62:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_62:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_63:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 54",
      "requiredFacts": [
        "fact:weight:wm_filler_63:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_63:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_64:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 55",
      "requiredFacts": [
        "fact:weight:wm_filler_64:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_64:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_65:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 56",
      "requiredFacts": [
        "fact:weight:wm_filler_65:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_65:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_66:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 57",
      "requiredFacts": [
        "fact:weight:wm_filler_66:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_66:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_67:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 58",
      "requiredFacts": [
        "fact:weight:wm_filler_67:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_67:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_68:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 59",
      "requiredFacts": [
        "fact:weight:wm_filler_68:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_68:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_69:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 60",
      "requiredFacts": [
        "fact:weight:wm_filler_69:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_69:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_70:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 61",
      "requiredFacts": [
        "fact:weight:wm_filler_70:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_70:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_71:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 62",
      "requiredFacts": [
        "fact:weight:wm_filler_71:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_71:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_72:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 63",
      "requiredFacts": [
        "fact:weight:wm_filler_72:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_72:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_73:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 64",
      "requiredFacts": [
        "fact:weight:wm_filler_73:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_73:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_74:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 65",
      "requiredFacts": [
        "fact:weight:wm_filler_74:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_74:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_75:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 66",
      "requiredFacts": [
        "fact:weight:wm_filler_75:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_75:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_76:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 67",
      "requiredFacts": [
        "fact:weight:wm_filler_76:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_76:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_77:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 68",
      "requiredFacts": [
        "fact:weight:wm_filler_77:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_77:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_78:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 69",
      "requiredFacts": [
        "fact:weight:wm_filler_78:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_78:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_79:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 70",
      "requiredFacts": [
        "fact:weight:wm_filler_79:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_79:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_80:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 71",
      "requiredFacts": [
        "fact:weight:wm_filler_80:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_80:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_81:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 72",
      "requiredFacts": [
        "fact:weight:wm_filler_81:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_81:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_82:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 73",
      "requiredFacts": [
        "fact:weight:wm_filler_82:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_82:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_83:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 74",
      "requiredFacts": [
        "fact:weight:wm_filler_83:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_83:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_84:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 75",
      "requiredFacts": [
        "fact:weight:wm_filler_84:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_84:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_85:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 76",
      "requiredFacts": [
        "fact:weight:wm_filler_85:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_85:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_86:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 77",
      "requiredFacts": [
        "fact:weight:wm_filler_86:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_86:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_87:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 78",
      "requiredFacts": [
        "fact:weight:wm_filler_87:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_87:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_88:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 79",
      "requiredFacts": [
        "fact:weight:wm_filler_88:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_88:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_89:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 80",
      "requiredFacts": [
        "fact:weight:wm_filler_89:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_89:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_90:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 81",
      "requiredFacts": [
        "fact:weight:wm_filler_90:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_90:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_91:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 82",
      "requiredFacts": [
        "fact:weight:wm_filler_91:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_91:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_92:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 83",
      "requiredFacts": [
        "fact:weight:wm_filler_92:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_92:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_93:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 84",
      "requiredFacts": [
        "fact:weight:wm_filler_93:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_93:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_94:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 85",
      "requiredFacts": [
        "fact:weight:wm_filler_94:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_94:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_95:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 86",
      "requiredFacts": [
        "fact:weight:wm_filler_95:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_95:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_96:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 87",
      "requiredFacts": [
        "fact:weight:wm_filler_96:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_96:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_97:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 88",
      "requiredFacts": [
        "fact:weight:wm_filler_97:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_97:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_98:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 89",
      "requiredFacts": [
        "fact:weight:wm_filler_98:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_98:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_99:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 90",
      "requiredFacts": [
        "fact:weight:wm_filler_99:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_99:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_100:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 91",
      "requiredFacts": [
        "fact:weight:wm_filler_100:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_100:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_101:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 92",
      "requiredFacts": [
        "fact:weight:wm_filler_101:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_101:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_102:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 93",
      "requiredFacts": [
        "fact:weight:wm_filler_102:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_102:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_103:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 94",
      "requiredFacts": [
        "fact:weight:wm_filler_103:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_103:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_104:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 95",
      "requiredFacts": [
        "fact:weight:wm_filler_104:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_104:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_105:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 96",
      "requiredFacts": [
        "fact:weight:wm_filler_105:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_105:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_106:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 97",
      "requiredFacts": [
        "fact:weight:wm_filler_106:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_106:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_107:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 98",
      "requiredFacts": [
        "fact:weight:wm_filler_107:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_107:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_108:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 99",
      "requiredFacts": [
        "fact:weight:wm_filler_108:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_108:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_109:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 100",
      "requiredFacts": [
        "fact:weight:wm_filler_109:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_109:action"
      ]
    },
    {
      "id": "dec:weight:wm_filler_110:clinical",
      "clinicalMeaning": "Requires protocol for General Factor 101",
      "requiredFacts": [
        "fact:weight:wm_filler_110:struggle"
      ],
      "confidence": 90,
      "severity": "low",
      "priority": 3,
      "linkedRecommendations": [
        "rec:weight:wm_filler_110:action"
      ]
    }
  ],
  "recommendations": [
    {
      "id": "rec:eng:eng_1:action",
      "title": "Overcoming Waking up exhausted",
      "description": "A targeted approach to handle waking up exhausted.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_1:clinical"
      ],
      "whyWeThinkThis": "You indicated that waking up exhausted is actively draining your energy right now.",
      "firstStep": "Get 5 minutes of direct sunlight in your eyes within 30 minutes of waking.",
      "whyFirstStepMatters": "Sunlight resets your circadian clock and triggers a natural, healthy cortisol spike, ending sleep inertia.",
      "successVision": "You will wake up feeling refreshed and ready to go without hitting snooze.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_2:action",
      "title": "Overcoming Caffeine dependence",
      "description": "A targeted approach to handle caffeine dependence.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_2:clinical"
      ],
      "whyWeThinkThis": "You indicated that caffeine dependence is actively draining your energy right now.",
      "firstStep": "Delay your first coffee by 90 minutes after waking. Drink a full glass of water instead.",
      "whyFirstStepMatters": "Waiting 90 minutes allows your brain to naturally clear adenosine (the sleepiness chemical) before blocking it with caffeine, preventing the afternoon crash.",
      "successVision": "You will experience a smooth, natural rise in energy that lasts all morning.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_3:action",
      "title": "Overcoming Snooze button reliance",
      "description": "A targeted approach to handle snooze button reliance.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_3:clinical"
      ],
      "whyWeThinkThis": "You indicated that snooze button reliance is actively draining your energy right now.",
      "firstStep": "Set your alarm for the exact time you must get up, and place your phone across the room.",
      "whyFirstStepMatters": "Hitting snooze fractures your final hour of sleep into useless 9-minute blocks, guaranteeing you wake up groggy.",
      "successVision": "You will wake up once, cleanly, and start your morning without dragging.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_4:action",
      "title": "Overcoming Morning Brain Fog",
      "description": "A targeted approach to handle morning brain fog.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_4:clinical"
      ],
      "whyWeThinkThis": "You indicated that morning brain fog is actively draining your energy right now.",
      "firstStep": "Drink 16oz of room temperature water with a pinch of salt immediately upon waking.",
      "whyFirstStepMatters": "Your brain loses a significant amount of water overnight, and dehydration shrinks brain tissue, causing fog.",
      "successVision": "Your mental clarity will return within 15 minutes of waking.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_5:action",
      "title": "Overcoming Dreading the day",
      "description": "A targeted approach to handle dreading the day.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_5:clinical"
      ],
      "whyWeThinkThis": "You indicated that dreading the day is actively draining your energy right now.",
      "firstStep": "Before checking your phone, write down ONE thing you are actually looking forward to today.",
      "whyFirstStepMatters": "Shifting your focus from 'obligations' to 'anticipation' triggers a small dopamine release, fueling your motivation.",
      "successVision": "You will start your morning feeling capable rather than crushed.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_6:action",
      "title": "Overcoming The 3 PM Crash",
      "description": "A targeted approach to handle the 3 pm crash.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_6:clinical"
      ],
      "whyWeThinkThis": "You indicated that the 3 pm crash is actively draining your energy right now.",
      "firstStep": "Ensure your lunch contains at least 30 grams of protein and limit simple carbohydrates.",
      "whyFirstStepMatters": "Protein stabilizes the glucose curve, preventing the massive spike and crash.",
      "successVision": "You will have steady, consistent energy all the way through the end of the workday.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_7:action",
      "title": "Overcoming Sugar cravings for energy",
      "description": "A targeted approach to handle sugar cravings for energy.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_7:clinical"
      ],
      "whyWeThinkThis": "You indicated that sugar cravings for energy is actively draining your energy right now.",
      "firstStep": "Swap the afternoon candy for a small handful of almonds and a piece of dark chocolate.",
      "whyFirstStepMatters": "The fat and fiber in the nuts slow down the sugar release, giving you the boost without the subsequent crash.",
      "successVision": "You will satisfy the craving without ruining your evening energy.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_8:action",
      "title": "Overcoming Afternoon Screen Fatigue",
      "description": "A targeted approach to handle afternoon screen fatigue.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_8:clinical"
      ],
      "whyWeThinkThis": "You indicated that afternoon screen fatigue is actively draining your energy right now.",
      "firstStep": "Implement the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds.",
      "whyFirstStepMatters": "This literally relaxes the ciliary muscles in your eyes, preventing the tension headaches that drain your energy.",
      "successVision": "Your head will feel lighter and less strained by 5 PM.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_9:action",
      "title": "Overcoming Sluggish Digestion",
      "description": "A targeted approach to handle sluggish digestion.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_9:clinical"
      ],
      "whyWeThinkThis": "You indicated that sluggish digestion is actively draining your energy right now.",
      "firstStep": "Take a 10-minute brisk walk immediately after finishing lunch.",
      "whyFirstStepMatters": "Walking mechanically assists your GI tract and uses up the blood sugar from your meal, preventing the heavy 'food coma' feeling.",
      "successVision": "You will return to your desk feeling light and energized instead of heavy.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_10:action",
      "title": "Overcoming Meeting Fatigue",
      "description": "A targeted approach to handle meeting fatigue.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_10:clinical"
      ],
      "whyWeThinkThis": "You indicated that meeting fatigue is actively draining your energy right now.",
      "firstStep": "Block off 15 minutes in your calendar every afternoon as 'Busy' and sit quietly with your eyes closed.",
      "whyFirstStepMatters": "Sensory deprivation allows your nervous system to downregulate from performative mode, recharging your cognitive battery.",
      "successVision": "You will have the patience and bandwidth to handle the rest of your day.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_11:action",
      "title": "Overcoming Nothing left for personal life",
      "description": "A targeted approach to handle nothing left for personal life.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_11:clinical"
      ],
      "whyWeThinkThis": "You indicated that nothing left for personal life is actively draining your energy right now.",
      "firstStep": "Create a 'hard stop' ritual for your obligations. Change clothes or listen to a specific song.",
      "whyFirstStepMatters": "A physical boundary signals to your nervous system that it's safe to transition out of 'output mode'.",
      "successVision": "You will reclaim your evenings and have the bandwidth to enjoy your hobbies or family.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_12:action",
      "title": "Overcoming Revenge Bedtime Procrastination",
      "description": "A targeted approach to handle revenge bedtime procrastination.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_12:clinical"
      ],
      "whyWeThinkThis": "You indicated that revenge bedtime procrastination is actively draining your energy right now.",
      "firstStep": "Carve out 15 minutes of uninterrupted 'me time' in the middle of your day.",
      "whyFirstStepMatters": "By getting personal autonomy during the day, your brain won't feel the desperate need to steal it from your sleep at night.",
      "successVision": "You will feel satisfied enough to go to bed on time, waking up rested.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_13:action",
      "title": "Overcoming Couch Lock",
      "description": "A targeted approach to handle couch lock.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_13:clinical"
      ],
      "whyWeThinkThis": "You indicated that couch lock is actively draining your energy right now.",
      "firstStep": "Do all your evening chores (dishes, prep for tomorrow) *before* you sit down on the couch.",
      "whyFirstStepMatters": "It is infinitely easier to keep moving than it is to overcome the inertia of starting again once you sit.",
      "successVision": "You will go to bed feeling accomplished and stress-free.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_14:action",
      "title": "Overcoming Alcohol for relaxation",
      "description": "A targeted approach to handle alcohol for relaxation.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_14:clinical"
      ],
      "whyWeThinkThis": "You indicated that alcohol for relaxation is actively draining your energy right now.",
      "firstStep": "Swap the evening drink for a hot shower or a cup of magnesium-based tea.",
      "whyFirstStepMatters": "Magnesium chemically relaxes your muscles and central nervous system without destroying your sleep architecture.",
      "successVision": "You will get true, restorative sleep and wake up with vastly more energy.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_15:action",
      "title": "Overcoming Second Wind",
      "description": "A targeted approach to handle second wind.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_15:clinical"
      ],
      "whyWeThinkThis": "You indicated that second wind is actively draining your energy right now.",
      "firstStep": "Dim all overhead lights and turn on 'night mode' on your screens 2 hours before bed.",
      "whyFirstStepMatters": "Removing blue light prevents the 'second wind' cortisol spike and allows melatonin to naturally rise.",
      "successVision": "You will feel a natural, smooth transition into sleepiness rather than a jolt of wide-awake energy.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_16:action",
      "title": "Overcoming Racing mind at night",
      "description": "A targeted approach to handle racing mind at night.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_16:clinical"
      ],
      "whyWeThinkThis": "You indicated that racing mind at night is actively draining your energy right now.",
      "firstStep": "Keep a notebook by your bed and do a 'brain dump' of every thought and to-do list item before lying down.",
      "whyFirstStepMatters": "Writing things down physically removes the burden from your working memory, signaling to your brain that it's safe to power down.",
      "successVision": "You will fall asleep peacefully within 15 minutes of your head hitting the pillow.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_17:action",
      "title": "Overcoming Waking up in the middle of the night",
      "description": "A targeted approach to handle waking up in the middle of the night.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_17:clinical"
      ],
      "whyWeThinkThis": "You indicated that waking up in the middle of the night is actively draining your energy right now.",
      "firstStep": "Eat a small, protein-and-fat rich snack (like a spoonful of peanut butter) 30 minutes before bed.",
      "whyFirstStepMatters": "This provides slow-burning fuel to keep your blood sugar stable all night, preventing the 3 AM adrenaline spike.",
      "successVision": "You will sleep solidly through the night without waking up in a panic.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_18:action",
      "title": "Overcoming Hot flashes or night sweats",
      "description": "A targeted approach to handle hot flashes or night sweats.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_18:clinical"
      ],
      "whyWeThinkThis": "You indicated that hot flashes or night sweats is actively draining your energy right now.",
      "firstStep": "Keep your bedroom temperature at or below 65°F (18°C) and sleep with a fan on.",
      "whyFirstStepMatters": "Your brain requires your core temperature to drop by 2 degrees to enter deep sleep. A cold room physically forces this.",
      "successVision": "You will achieve deeper, more restorative sleep stages.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_19:action",
      "title": "Overcoming Partner snoring or restlessness",
      "description": "A targeted approach to handle partner snoring or restlessness.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_19:clinical"
      ],
      "whyWeThinkThis": "You indicated that partner snoring or restlessness is actively draining your energy right now.",
      "firstStep": "Invest in high-quality earplugs, a white noise machine, or consider sleeping in separate beds for part of the week.",
      "whyFirstStepMatters": "Your health and sanity are more important than the social convention of sleeping in the same bed every night.",
      "successVision": "You will wake up actually feeling rested, and your relationship will likely improve due to better moods.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_20:action",
      "title": "Overcoming Mouth breathing",
      "description": "A targeted approach to handle mouth breathing.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_20:clinical"
      ],
      "whyWeThinkThis": "You indicated that mouth breathing is actively draining your energy right now.",
      "firstStep": "Try a nasal strip over your nose at night to physically hold your airways open.",
      "whyFirstStepMatters": "Nasal breathing increases nitric oxide and oxygenizes your blood significantly better than mouth breathing.",
      "successVision": "You will wake up feeling far more oxygenated and less groggy.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_21:action",
      "title": "Overcoming Irregular sleep schedule",
      "description": "A targeted approach to handle irregular sleep schedule.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_21:clinical"
      ],
      "whyWeThinkThis": "You indicated that irregular sleep schedule is actively draining your energy right now.",
      "firstStep": "Wake up within 30 minutes of your normal weekday time on weekends, even if you go to bed late.",
      "whyFirstStepMatters": "A consistent wake time anchors your circadian rhythm, preventing the massive 'Monday hangover'.",
      "successVision": "Mondays will start to feel normal, and your overall energy baseline will rise significantly.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_22:action",
      "title": "Overcoming Skipping meals",
      "description": "A targeted approach to handle skipping meals.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_22:clinical"
      ],
      "whyWeThinkThis": "You indicated that skipping meals is actively draining your energy right now.",
      "firstStep": "Set a recurring alarm for 12:00 PM and 3:00 PM just to drink water and eat a small handful of nuts.",
      "whyFirstStepMatters": "Providing a baseline of fuel prevents the severe blood sugar drops that trigger extreme fatigue and anxiety.",
      "successVision": "You will maintain a steady hum of energy rather than riding a rollercoaster of exhaustion.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_23:action",
      "title": "Overcoming Chronic dehydration",
      "description": "A targeted approach to handle chronic dehydration.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_23:clinical"
      ],
      "whyWeThinkThis": "You indicated that chronic dehydration is actively draining your energy right now.",
      "firstStep": "Drink one full glass of water *before* you allow yourself to have your next coffee.",
      "whyFirstStepMatters": "Habit-stacking hydration before caffeine ensures you hit your baseline needs without having to think about it.",
      "successVision": "You will notice a reduction in afternoon headaches and physical lethargy.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_24:action",
      "title": "Overcoming Heavy Carb Coma",
      "description": "A targeted approach to handle heavy carb coma.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_24:clinical"
      ],
      "whyWeThinkThis": "You indicated that heavy carb coma is actively draining your energy right now.",
      "firstStep": "Always eat your vegetables and protein first, saving the carbohydrates for the very end of the meal.",
      "whyFirstStepMatters": "Eating fiber and protein first lines the stomach, blunting the glucose spike from the carbs by up to 30%.",
      "successVision": "You can enjoy your favorite foods without falling into a food coma afterward.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_25:action",
      "title": "Overcoming Under-eating for weight loss",
      "description": "A targeted approach to handle under-eating for weight loss.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_25:clinical"
      ],
      "whyWeThinkThis": "You indicated that under-eating for weight loss is actively draining your energy right now.",
      "firstStep": "Increase your daily intake by 200-300 calories, specifically from protein and healthy fats.",
      "whyFirstStepMatters": "Your metabolism needs to know it isn't starving in order to release energy for you to use.",
      "successVision": "You will likely break through your weight loss plateau while simultaneously feeling more energetic.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_26:action",
      "title": "Overcoming Iron deficiency symptoms",
      "description": "A targeted approach to handle iron deficiency symptoms.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_26:clinical"
      ],
      "whyWeThinkThis": "You indicated that iron deficiency symptoms is actively draining your energy right now.",
      "firstStep": "Schedule a blood test with your doctor to check your Ferritin and Iron levels.",
      "whyFirstStepMatters": "If you are anemic, no amount of sleep or caffeine will fix your fatigue. You need medical data.",
      "successVision": "Once supplemented properly, your energy will return rapidly.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_27:action",
      "title": "Overcoming Burnout and Overwhelm",
      "description": "A targeted approach to handle burnout and overwhelm.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_27:clinical"
      ],
      "whyWeThinkThis": "You indicated that burnout and overwhelm is actively draining your energy right now.",
      "firstStep": "Identify one recurring task this week that you can either drop, delay, or delegate.",
      "whyFirstStepMatters": "Subtracting a demand from your life is the fastest way to instantly restore a unit of energy.",
      "successVision": "You will feel a physical sense of relief and a return of your natural vitality.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_28:action",
      "title": "Overcoming Shift Work / Jetlag",
      "description": "A targeted approach to handle shift work / jetlag.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_28:clinical"
      ],
      "whyWeThinkThis": "You indicated that shift work / jetlag is actively draining your energy right now.",
      "firstStep": "Always eat your meals at the same absolute time, regardless of what shift you are working.",
      "whyFirstStepMatters": "Food timing is the second most powerful circadian anchor after light. It tells your liver what time it is.",
      "successVision": "Your digestion will improve and your body will feel less 'confused' about when to sleep.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_29:action",
      "title": "Overcoming High-stress environment",
      "description": "A targeted approach to handle high-stress environment.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_29:clinical"
      ],
      "whyWeThinkThis": "You indicated that high-stress environment is actively draining your energy right now.",
      "firstStep": "Do 2 minutes of 'box breathing' (4s in, 4s hold, 4s out, 4s hold) before entering your most stressful environment.",
      "whyFirstStepMatters": "Deep, rhythmic breathing mechanically forces your heart rate down and signals safety to your brain.",
      "successVision": "You will feel grounded and centered, preventing the situation from draining your energy entirely.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_30:action",
      "title": "Overcoming Sedentary lethargy",
      "description": "A targeted approach to handle sedentary lethargy.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_30:clinical"
      ],
      "whyWeThinkThis": "You indicated that sedentary lethargy is actively draining your energy right now.",
      "firstStep": "Commit to a 5-minute walk outside, no matter the weather, every single day.",
      "whyFirstStepMatters": "Movement creates energy. Your cells need a physical demand to produce more mitochondria (energy factories).",
      "successVision": "You will paradoxically feel more energetic by moving more.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_31:action",
      "title": "Overcoming Constant Context Switching",
      "description": "A targeted approach to handle constant context switching.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_31:clinical"
      ],
      "whyWeThinkThis": "You indicated that constant context switching is actively draining your energy right now.",
      "firstStep": "Put your phone on airplane mode and close all tabs for just one 45-minute block every morning.",
      "whyFirstStepMatters": "Protecting your attention prevents the massive energy leak caused by constant distractions.",
      "successVision": "You will finish your day feeling accomplished rather than scattered and exhausted.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_32:action",
      "title": "Overcoming Hormonal Energy Dips",
      "description": "A targeted approach to handle hormonal energy dips.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_32:clinical"
      ],
      "whyWeThinkThis": "You indicated that hormonal energy dips is actively draining your energy right now.",
      "firstStep": "Track your energy levels alongside your cycle for one month to identify your personal 'low energy' window.",
      "whyFirstStepMatters": "Once you predict the dip, you can intentionally lower your expectations and schedule rest, rather than fighting your physiology.",
      "successVision": "You will stop feeling guilty for being tired and start working with your body's natural rhythms.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_33:action",
      "title": "Overcoming Perimenopause fatigue",
      "description": "A targeted approach to handle perimenopause fatigue.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_33:clinical"
      ],
      "whyWeThinkThis": "You indicated that perimenopause fatigue is actively draining your energy right now.",
      "firstStep": "Prioritize strength training over intense cardio for the next month.",
      "whyFirstStepMatters": "Strength training builds metabolic resilience without spiking the cortisol that exacerbates perimenopausal symptoms.",
      "successVision": "You will feel physically stronger and experience less intense hormonal crashes.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_34:action",
      "title": "Overcoming Pregnancy Exhaustion",
      "description": "A targeted approach to handle pregnancy exhaustion.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_34:clinical"
      ],
      "whyWeThinkThis": "You indicated that pregnancy exhaustion is actively draining your energy right now.",
      "firstStep": "Lower your daily expectations of yourself by 50%. Take the nap.",
      "whyFirstStepMatters": "Resting is the most productive thing you can do for your baby right now.",
      "successVision": "You will surrender to the process and allow your body to do the incredible work it needs to do.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_35:action",
      "title": "Overcoming Postpartum depletion",
      "description": "A targeted approach to handle postpartum depletion.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_35:clinical"
      ],
      "whyWeThinkThis": "You indicated that postpartum depletion is actively draining your energy right now.",
      "firstStep": "Ensure you are taking a high-quality postnatal vitamin that includes DHA and iron.",
      "whyFirstStepMatters": "Your body gave away its mineral reserves to build your baby. You have to put those reserves back.",
      "successVision": "You will slowly feel the 'brain fog' lift and your stamina return.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_36:action",
      "title": "Overcoming Unexplained Chronic Fatigue",
      "description": "A targeted approach to handle unexplained chronic fatigue.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_36:clinical"
      ],
      "whyWeThinkThis": "You indicated that unexplained chronic fatigue is actively draining your energy right now.",
      "firstStep": "Schedule a comprehensive blood panel with your doctor to check thyroid, iron, Vitamin D, and B12.",
      "whyFirstStepMatters": "Lifestyle changes cannot fix a clinical deficiency. We must rule out underlying medical causes first.",
      "successVision": "You will have clarity on exactly what is happening inside your body, allowing for a precise treatment plan.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_37:action",
      "title": "Overcoming Loud snoring or gasping at night",
      "description": "A targeted approach to handle loud snoring or gasping at night.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_37:clinical"
      ],
      "whyWeThinkThis": "You indicated that loud snoring or gasping at night is actively draining your energy right now.",
      "firstStep": "Ask your doctor for an at-home sleep study to test for sleep apnea.",
      "whyFirstStepMatters": "If you have sleep apnea, using a CPAP machine will change your life overnight.",
      "successVision": "You will wake up feeling truly rested for the first time in years.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:eng:eng_38:action",
      "title": "Overcoming Depression-linked low energy",
      "description": "A targeted approach to handle depression-linked low energy.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:eng:eng_38:clinical"
      ],
      "whyWeThinkThis": "You indicated that depression-linked low energy is actively draining your energy right now.",
      "firstStep": "Reach out to a therapist or counselor just to talk about how heavy things have been feeling.",
      "whyFirstStepMatters": "Mental health is inextricably linked to physical energy. Treating the depression will treat the fatigue.",
      "successVision": "You will realize you don't have to carry this heavy burden alone.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q001_wake_feeling:action",
      "title": "Improving Waking exhaustion",
      "description": "Targeted approach for waking exhaustion.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q001_wake_feeling:clinical"
      ],
      "whyWeThinkThis": "You indicated that waking exhaustion is actively impacting your sleep right now.",
      "firstStep": "Get 5 minutes of direct sunlight in your eyes within 30 minutes of waking.",
      "whyFirstStepMatters": "Sunlight resets your circadian clock and triggers a natural cortisol spike, ending sleep inertia.",
      "successVision": "You will wake up feeling refreshed and ready to go without hitting snooze.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q002_fall_asleep_time:action",
      "title": "Improving Sleep onset latency",
      "description": "Targeted approach for sleep onset latency.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q002_fall_asleep_time:clinical"
      ],
      "whyWeThinkThis": "You indicated that sleep onset latency is actively impacting your sleep right now.",
      "firstStep": "If you aren't asleep in 20 minutes, get out of bed and read a physical book in dim light.",
      "whyFirstStepMatters": "You must break the psychological association that your bed is a place for stress and being awake.",
      "successVision": "Your brain will relearn that the bed is strictly for sleeping, drastically reducing the time it takes to drift off.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q003_wake_frequency:action",
      "title": "Improving Sleep fragmentation",
      "description": "Targeted approach for sleep fragmentation.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q003_wake_frequency:clinical"
      ],
      "whyWeThinkThis": "You indicated that sleep fragmentation is actively impacting your sleep right now.",
      "firstStep": "Eat a small spoonful of peanut butter or a handful of almonds 30 minutes before bed.",
      "whyFirstStepMatters": "Protein and fat stabilize your blood sugar overnight, preventing the adrenaline spikes that wake you up.",
      "successVision": "You will sleep solidly through the night without waking up in a panic.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q004_fall_asleep_again:action",
      "title": "Improving Return to sleep latency",
      "description": "Targeted approach for return to sleep latency.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q004_fall_asleep_again:clinical"
      ],
      "whyWeThinkThis": "You indicated that return to sleep latency is actively impacting your sleep right now.",
      "firstStep": "Turn your clock face away from you. Do not check the time when you wake up.",
      "whyFirstStepMatters": "Seeing the time instantly triggers mental math and anxiety, flooding your brain with cortisol and destroying your chances of sleeping.",
      "successVision": "You will learn to drift comfortably back to sleep without panicking about tomorrow.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q005_early_waking:action",
      "title": "Improving Terminal insomnia",
      "description": "Targeted approach for terminal insomnia.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q005_early_waking:clinical"
      ],
      "whyWeThinkThis": "You indicated that terminal insomnia is actively impacting your sleep right now.",
      "firstStep": "Ensure your bedroom is completely pitch black. Use blackout curtains or a high-quality eye mask.",
      "whyFirstStepMatters": "Even a tiny amount of early morning light hitting your eyelids will signal your brain to halt melatonin production permanently for the day.",
      "successVision": "You will successfully stay asleep until your alarm actually goes off.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q006_phone_in_bed:action",
      "title": "Improving Device usage",
      "description": "Targeted approach for device usage.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q006_phone_in_bed:clinical"
      ],
      "whyWeThinkThis": "You indicated that device usage is actively impacting your sleep right now.",
      "firstStep": "Buy a cheap physical alarm clock and charge your phone in the bathroom overnight.",
      "whyFirstStepMatters": "Physical distance is the only reliable way to break the dopamine loop of late-night scrolling.",
      "successVision": "You will fall asleep faster and your brain will feel significantly less scattered in the morning.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q007_racing_thoughts:action",
      "title": "Improving Racing thoughts",
      "description": "Targeted approach for racing thoughts.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q007_racing_thoughts:clinical"
      ],
      "whyWeThinkThis": "You indicated that racing thoughts is actively impacting your sleep right now.",
      "firstStep": "Keep a notebook by your bed and do a physical \"brain dump\" of every thought before lying down.",
      "whyFirstStepMatters": "Writing things down removes the burden from your working memory, signaling safety to your brain.",
      "successVision": "You will fall asleep peacefully within 15 minutes of your head hitting the pillow.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q008_stress_bedtime:action",
      "title": "Improving Bedtime stress",
      "description": "Targeted approach for bedtime stress.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q008_stress_bedtime:clinical"
      ],
      "whyWeThinkThis": "You indicated that bedtime stress is actively impacting your sleep right now.",
      "firstStep": "Take a hot shower or bath 60 minutes before bed.",
      "whyFirstStepMatters": "The rapid drop in core body temperature after you get out of the warm water acts as a physiological sleep trigger.",
      "successVision": "You will feel physically heavy and deeply relaxed before getting into bed.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q009_tv_before_bed:action",
      "title": "Improving TV consumption",
      "description": "Targeted approach for tv consumption.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q009_tv_before_bed:clinical"
      ],
      "whyWeThinkThis": "You indicated that tv consumption is actively impacting your sleep right now.",
      "firstStep": "Switch to purely lighthearted or comedic shows in the final hour, avoiding news or intense drama.",
      "whyFirstStepMatters": "Intense plotlines trigger adrenaline, which directly counteracts your natural sleep drive.",
      "successVision": "You will enjoy your downtime without accidentally telling your nervous system there is an emergency.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q010_regular_bedtime:action",
      "title": "Improving Bedtime consistency",
      "description": "Targeted approach for bedtime consistency.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q010_regular_bedtime:clinical"
      ],
      "whyWeThinkThis": "You indicated that bedtime consistency is actively impacting your sleep right now.",
      "firstStep": "Pick a rigid wake-up time, even on weekends, rather than focusing on a strict bedtime.",
      "whyFirstStepMatters": "A rigid wake time anchors your circadian clock far more effectively than trying to force yourself to sleep early.",
      "successVision": "Your body will naturally start getting sleepy at the right time, rather than you having to force it.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q011_bedroom_noise:action",
      "title": "Improving Noise levels",
      "description": "Targeted approach for noise levels.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q011_bedroom_noise:clinical"
      ],
      "whyWeThinkThis": "You indicated that noise levels is actively impacting your sleep right now.",
      "firstStep": "Invest in a white noise machine or play continuous brown noise on a speaker.",
      "whyFirstStepMatters": "White noise masks sudden environmental sounds (like a door slamming or a car honking) that would normally spike your heart rate and wake you up.",
      "successVision": "You will sleep much deeper, unaffected by the chaos of the environment outside.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q012_disturbances:action",
      "title": "Improving Partner/Pet disturbance",
      "description": "Targeted approach for partner/pet disturbance.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q012_disturbances:clinical"
      ],
      "whyWeThinkThis": "You indicated that partner/pet disturbance is actively impacting your sleep right now.",
      "firstStep": "Establish a firm \"no pets in the bed\" rule, or consider sleeping in a separate bed from your partner two nights a week.",
      "whyFirstStepMatters": "Your biological need for uninterrupted sleep must take priority over social conventions.",
      "successVision": "You will finally get uninterrupted stretches of deep sleep, improving your mood and your relationships.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q013_snoring:action",
      "title": "Improving Snoring",
      "description": "Targeted approach for snoring.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q013_snoring:clinical"
      ],
      "whyWeThinkThis": "You indicated that snoring is actively impacting your sleep right now.",
      "firstStep": "Try sleeping on your side using a body pillow to prevent rolling onto your back.",
      "whyFirstStepMatters": "Gravity pulls the soft tissue of your throat down when on your back, causing snoring. Side sleeping immediately opens the airway.",
      "successVision": "You will wake up feeling far more oxygenated and less groggy.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q014_dry_mouth:action",
      "title": "Improving Mouth breathing",
      "description": "Targeted approach for mouth breathing.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q014_dry_mouth:clinical"
      ],
      "whyWeThinkThis": "You indicated that mouth breathing is actively impacting your sleep right now.",
      "firstStep": "Try using a nasal strip across the bridge of your nose at night.",
      "whyFirstStepMatters": "Nasal breathing increases nitric oxide and oxygenizes your blood significantly better than mouth breathing.",
      "successVision": "You will achieve significantly deeper, restorative sleep stages.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q015_room_temp:action",
      "title": "Improving Temperature regulation",
      "description": "Targeted approach for temperature regulation.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q015_room_temp:clinical"
      ],
      "whyWeThinkThis": "You indicated that temperature regulation is actively impacting your sleep right now.",
      "firstStep": "Set your thermostat to 65°F (18°C) or sleep with a fan pointing near you.",
      "whyFirstStepMatters": "A cold room physically forces your core temperature to drop, which is the primary biological trigger for deep sleep.",
      "successVision": "You will fall asleep faster and stay in the deep sleep phase much longer.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q016_last_meal:action",
      "title": "Improving Late meals",
      "description": "Targeted approach for late meals.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q016_last_meal:clinical"
      ],
      "whyWeThinkThis": "You indicated that late meals is actively impacting your sleep right now.",
      "firstStep": "Shift your dinner at least 2.5 hours before you intend to sleep.",
      "whyFirstStepMatters": "This gives your stomach time to empty, lowering your heart rate and core temperature before you lie down.",
      "successVision": "You will wake up feeling lighter, rather than groggy and bloated.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q017_coffee_timing:action",
      "title": "Improving Caffeine timing",
      "description": "Targeted approach for caffeine timing.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q017_coffee_timing:clinical"
      ],
      "whyWeThinkThis": "You indicated that caffeine timing is actively impacting your sleep right now.",
      "firstStep": "Set a hard cut-off for all caffeine at 2 PM.",
      "whyFirstStepMatters": "Your brain needs time to clear the caffeine from your adenosine receptors so you can actually feel sleepy naturally.",
      "successVision": "You will easily drift off to sleep rather than lying in bed feeling \"tired but wired.\"",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q018_alcohol_night:action",
      "title": "Improving Alcohol before bed",
      "description": "Targeted approach for alcohol before bed.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q018_alcohol_night:clinical"
      ],
      "whyWeThinkThis": "You indicated that alcohol before bed is actively impacting your sleep right now.",
      "firstStep": "Swap the evening drink for a hot shower or a cup of magnesium-based tea.",
      "whyFirstStepMatters": "Magnesium chemically relaxes your muscles and central nervous system without destroying your sleep architecture.",
      "successVision": "You will get true, restorative sleep and wake up with vastly more energy.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q019_hungry_sleep:action",
      "title": "Improving Hunger at bedtime",
      "description": "Targeted approach for hunger at bedtime.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q019_hungry_sleep:clinical"
      ],
      "whyWeThinkThis": "You indicated that hunger at bedtime is actively impacting your sleep right now.",
      "firstStep": "Eat more protein and fibrous vegetables during your daytime meals.",
      "whyFirstStepMatters": "Adequate daytime fueling prevents the nighttime blood sugar crash that triggers hunger pangs in bed.",
      "successVision": "You will go to bed feeling satisfied and sleep without interruption.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q020_daytime_water:action",
      "title": "Improving Hydration impact",
      "description": "Targeted approach for hydration impact.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q020_daytime_water:clinical"
      ],
      "whyWeThinkThis": "You indicated that hydration impact is actively impacting your sleep right now.",
      "firstStep": "Front-load your hydration: Drink 3 big glasses of water before noon, and taper off after dinner.",
      "whyFirstStepMatters": "Getting hydrated early prevents the desperate need to chug water at 9 PM, saving you from bathroom trips at 3 AM.",
      "successVision": "You will sleep through the entire night without needing to get out of bed.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q021_wake_time:action",
      "title": "Improving Wake time consistency",
      "description": "Targeted approach for wake time consistency.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q021_wake_time:clinical"
      ],
      "whyWeThinkThis": "You indicated that wake time consistency is actively impacting your sleep right now.",
      "firstStep": "Regardless of when you wake up, expose your eyes to bright light immediately.",
      "whyFirstStepMatters": "Light exposure is the switch that stops melatonin production and starts your daytime cortisol curve.",
      "successVision": "Your body will naturally expect to wake up at this time, making mornings far less painful.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q022_bed_time:action",
      "title": "Improving Bedtime alignment",
      "description": "Targeted approach for bedtime alignment.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q022_bed_time:clinical"
      ],
      "whyWeThinkThis": "You indicated that bedtime alignment is actively impacting your sleep right now.",
      "firstStep": "Work backward 8 hours from your mandatory wake time, and set a \"winding down\" alarm 1 hour before that.",
      "whyFirstStepMatters": "You cannot abruptly transition from \"active\" to \"asleep.\" You must schedule the cooldown period.",
      "successVision": "You will transition into sleep smoothly rather than feeling rushed and anxious.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q023_sleep_consistency:action",
      "title": "Improving Sleep consistency",
      "description": "Targeted approach for sleep consistency.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q023_sleep_consistency:clinical"
      ],
      "whyWeThinkThis": "You indicated that sleep consistency is actively impacting your sleep right now.",
      "firstStep": "Anchor your wake time to the exact same 30-minute window every single day, including weekends.",
      "whyFirstStepMatters": "A rigid wake time forces your sleep drive (adenosine) to build at a predictable rate, naturally regulating your bedtime over time.",
      "successVision": "Your energy levels will become highly predictable, eliminating the \"Monday morning hangover.\"",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q024_naps:action",
      "title": "Improving Daytime naps",
      "description": "Targeted approach for daytime naps.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q024_naps:clinical"
      ],
      "whyWeThinkThis": "You indicated that daytime naps is actively impacting your sleep right now.",
      "firstStep": "Limit any daytime rest to a strict 20-minute \"power nap\" before 3 PM.",
      "whyFirstStepMatters": "Sleeping longer than 20 minutes drops you into deep sleep, causing severe grogginess when you wake and ruining your ability to sleep that night.",
      "successVision": "You will get a true mental refresh without sacrificing your nighttime rest.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q025_nap_length:action",
      "title": "Improving Nap duration",
      "description": "Targeted approach for nap duration.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q025_nap_length:clinical"
      ],
      "whyWeThinkThis": "You indicated that nap duration is actively impacting your sleep right now.",
      "firstStep": "Drink a small cup of coffee right before taking a 20-minute nap (\"nappuccino\").",
      "whyFirstStepMatters": "Caffeine takes 20 minutes to hit your brain. When you wake up, the sleep pressure is cleared AND the caffeine kicks in simultaneously.",
      "successVision": "You will wake up from your nap feeling sharp, focused, and immediately ready to go.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q026_morning_sunlight:action",
      "title": "Improving Circadian light exposure",
      "description": "Targeted approach for circadian light exposure.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q026_morning_sunlight:clinical"
      ],
      "whyWeThinkThis": "You indicated that circadian light exposure is actively impacting your sleep right now.",
      "firstStep": "Spend 5-10 minutes outside or looking out a window immediately after waking.",
      "whyFirstStepMatters": "Sunlight contains specific blue-light frequencies that signal the suprachiasmatic nucleus in your brain to start the 14-hour countdown to sleep.",
      "successVision": "You will naturally feel sleepy at a reasonable hour every night.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q027_first_coffee:action",
      "title": "Improving Caffeine timing",
      "description": "Targeted approach for caffeine timing.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q027_first_coffee:clinical"
      ],
      "whyWeThinkThis": "You indicated that caffeine timing is actively impacting your sleep right now.",
      "firstStep": "Delay your first cup of coffee by 90 minutes after waking up.",
      "whyFirstStepMatters": "Waiting allows your body to naturally clear out the sleepiness chemicals (adenosine) first, preventing a massive crash later.",
      "successVision": "You will have smooth, sustained energy all day without needing a 3 PM coffee.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q028_morning_sleepy:action",
      "title": "Improving Morning fatigue",
      "description": "Targeted approach for morning fatigue.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q028_morning_sleepy:clinical"
      ],
      "whyWeThinkThis": "You indicated that morning fatigue is actively impacting your sleep right now.",
      "firstStep": "Do 3 minutes of light stretching or jumping jacks before you start your workday.",
      "whyFirstStepMatters": "Physical movement increases heart rate and blood flow, physically forcing the remaining sleep inertia out of your system.",
      "successVision": "Your brain will \"click\" into focus faster, making your mornings highly productive.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q029_caffeine_dependent:action",
      "title": "Improving Caffeine dependence",
      "description": "Targeted approach for caffeine dependence.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q029_caffeine_dependent:clinical"
      ],
      "whyWeThinkThis": "You indicated that caffeine dependence is actively impacting your sleep right now.",
      "firstStep": "Reduce your daily caffeine intake by just 25% (e.g., leave a quarter of your cup full) for the next 3 days.",
      "whyFirstStepMatters": "Gradually tapering prevents debilitating withdrawal headaches while allowing your brain to resensitize to natural energy cues.",
      "successVision": "You will slowly reclaim your natural energy and not feel panicked if you miss a cup of coffee.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q030_afternoon_slump:action",
      "title": "Improving Post-lunch sleepiness",
      "description": "Targeted approach for post-lunch sleepiness.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q030_afternoon_slump:clinical"
      ],
      "whyWeThinkThis": "You indicated that post-lunch sleepiness is actively impacting your sleep right now.",
      "firstStep": "Ensure your lunch contains at least 30 grams of protein and limit simple carbohydrates like bread or pasta.",
      "whyFirstStepMatters": "Protein prevents the massive glucose spike and subsequent insulin crash that acts like a sedative in the afternoon.",
      "successVision": "You will power through your afternoon tasks with clear, consistent focus.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q031_meeting_struggle:action",
      "title": "Improving Daytime alertness",
      "description": "Targeted approach for daytime alertness.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q031_meeting_struggle:clinical"
      ],
      "whyWeThinkThis": "You indicated that daytime alertness is actively impacting your sleep right now.",
      "firstStep": "Stand up and sip ice-cold water every 15 minutes during sedentary periods.",
      "whyFirstStepMatters": "Cold exposure and standing trigger a mild sympathetic nervous system response, forcing your brain to stay alert.",
      "successVision": "You will remain sharp and engaged without the painful struggle to keep your eyes open.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q032_sleepy_driving:action",
      "title": "Improving Microsleep risk",
      "description": "Targeted approach for microsleep risk.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q032_sleepy_driving:clinical"
      ],
      "whyWeThinkThis": "You indicated that microsleep risk is actively impacting your sleep right now.",
      "firstStep": "Pull over immediately if you feel your eyes heavy. Do not rely on rolling down windows or turning up music.",
      "whyFirstStepMatters": "Microsleeps happen involuntarily; your brain literally shuts off for 2-3 seconds without your permission.",
      "successVision": "You will prioritize your safety and avoid a potentially catastrophic accident.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q033_yawning:action",
      "title": "Improving Chronic yawning",
      "description": "Targeted approach for chronic yawning.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q033_yawning:clinical"
      ],
      "whyWeThinkThis": "You indicated that chronic yawning is actively impacting your sleep right now.",
      "firstStep": "Take 3 extremely deep breaths, inhaling through your nose and exhaling slowly through your mouth.",
      "whyFirstStepMatters": "Yawning is often your brain trying to cool itself down or rapidly alter oxygen levels. Controlled breathing helps regulate this.",
      "successVision": "You will feel more present and stop fighting the physical urge to yawn mid-conversation.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q034_night_shift:action",
      "title": "Improving Shift work",
      "description": "Targeted approach for shift work.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q034_night_shift:clinical"
      ],
      "whyWeThinkThis": "You indicated that shift work is actively impacting your sleep right now.",
      "firstStep": "Wear dark sunglasses during your commute home in the morning after a night shift.",
      "whyFirstStepMatters": "Morning sunlight hits your eyes and instantly destroys your melatonin production, making it impossible to sleep when you get home.",
      "successVision": "You will trick your brain into thinking it is dusk, allowing you to sleep deeply during the day.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q035_jet_lag:action",
      "title": "Improving Jet lag",
      "description": "Targeted approach for jet lag.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q035_jet_lag:clinical"
      ],
      "whyWeThinkThis": "You indicated that jet lag is actively impacting your sleep right now.",
      "firstStep": "Immediately start eating meals at the correct local time of your destination, even if you aren't hungry.",
      "whyFirstStepMatters": "Your liver has its own circadian clock driven by food. Eating at local times forces your body to adapt 50% faster than light exposure alone.",
      "successVision": "You will adapt to new time zones rapidly without losing days to intense fatigue.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q036_weekend_sleep:action",
      "title": "Improving Weekend sleep variation",
      "description": "Targeted approach for weekend sleep variation.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q036_weekend_sleep:clinical"
      ],
      "whyWeThinkThis": "You indicated that weekend sleep variation is actively impacting your sleep right now.",
      "firstStep": "Wake up within 60 minutes of your normal weekday time on weekends, even if you go to bed late.",
      "whyFirstStepMatters": "It is better to be slightly tired on Saturday than to completely wreck your biological clock for the entire upcoming work week.",
      "successVision": "You will eliminate the Sunday night insomnia and Monday morning exhaustion entirely.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q037_sleep_change:action",
      "title": "Improving Recent sleep changes",
      "description": "Targeted approach for recent sleep changes.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q037_sleep_change:clinical"
      ],
      "whyWeThinkThis": "You indicated that recent sleep changes is actively impacting your sleep right now.",
      "firstStep": "Identify if any major stressors, dietary changes, or new medications occurred in the last 30 days.",
      "whyFirstStepMatters": "Acute sleep changes are a symptom, not the root cause. You must treat the recent trigger, not just take a sleeping pill.",
      "successVision": "You will address the root cause and return to your normal, healthy sleep baseline.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q038_menstrual_cycle:action",
      "title": "Improving Menstrual cycle sleep",
      "description": "Targeted approach for menstrual cycle sleep.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q038_menstrual_cycle:clinical"
      ],
      "requiredFacts": [
        "fact:master:female",
        "fact:slp:q038_menstrual_cycle:struggle"
      ],
      "whyWeThinkThis": "You indicated that menstrual cycle sleep is actively impacting your sleep right now.",
      "firstStep": "Lower your bedroom temperature by 2 degrees during the week before your period.",
      "whyFirstStepMatters": "Hormonal shifts naturally raise your core body temperature. A colder room artificially compensates for this so you can still achieve deep sleep.",
      "successVision": "You will sleep much better during your luteal phase without waking up in a sweat.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q039_pregnancy_sleep:action",
      "title": "Improving Pregnancy sleep",
      "description": "Targeted approach for pregnancy sleep.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q039_pregnancy_sleep:clinical"
      ],
      "requiredFacts": [
        "fact:master:female",
        "fact:slp:q039_pregnancy_sleep:struggle"
      ],
      "whyWeThinkThis": "You indicated that pregnancy sleep is actively impacting your sleep right now.",
      "firstStep": "Sleep on your left side using a U-shaped or C-shaped pregnancy pillow to support your hips and belly.",
      "whyFirstStepMatters": "Left-side sleeping maximizes blood flow to the uterus and kidneys, while the pillow prevents pelvic misalignment and lower back pain.",
      "successVision": "You will find a physically comfortable position that allows you to finally rest.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:slp:q040_menopause_sleep:action",
      "title": "Improving Menopause symptoms",
      "description": "Targeted approach for menopause symptoms.",
      "priority": 2,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:slp:q040_menopause_sleep:clinical"
      ],
      "requiredFacts": [
        "fact:master:female",
        "fact:slp:q040_menopause_sleep:struggle"
      ],
      "whyWeThinkThis": "You indicated that menopause symptoms is actively impacting your sleep right now.",
      "firstStep": "Keep a frozen gel pack or a cold damp washcloth on your nightstand in a small cooler.",
      "whyFirstStepMatters": "Applying cold to the back of your neck or wrists immediately cools the blood traveling to your brain, halting the hot flash.",
      "successVision": "You will recover from night sweats rapidly and get back to sleep much faster.",
      "coachSupportTiming": "If you find yourself stuck after one week, a coach can help adjust the protocol to fit your exact lifestyle."
    },
    {
      "id": "rec:weight:wm_bespoke_1:action",
      "title": "Overcoming Desk job inactivity",
      "description": "A targeted approach to handle desk job inactivity.",
      "priority": 1,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_bespoke_1:clinical"
      ],
      "whyWeThinkThis": "You mentioned that sitting at a desk for long hours is a primary barrier for you right now. It is incredibly common for desk workers to see their metabolism slow down simply due to lack of incidental movement.",
      "firstStep": "Stand up for just 2 minutes every time you finish a major task or send a long email.",
      "whyFirstStepMatters": "This isn't about burning calories; it's about breaking up prolonged sitting to keep your insulin sensitive and your metabolism engaged.",
      "successVision": "By next Friday, you will naturally feel less stiff and have slightly more afternoon energy without even stepping foot in a gym.",
      "coachSupportTiming": "If you keep forgetting to stand up, your coach can help you tie this habit to something you already do daily."
    },
    {
      "id": "rec:weight:wm_bespoke_2:action",
      "title": "Overcoming Stress eating after work",
      "description": "A targeted approach to handle stress eating after work.",
      "priority": 1,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_bespoke_2:clinical"
      ],
      "whyWeThinkThis": "You told us that after a highly stressful day, you find yourself drawn to food to unwind. This is your brain's natural response to cortisol, seeking a quick dopamine hit to feel safe.",
      "firstStep": "Create a 'buffer zone' of 10 minutes between ending work and entering the kitchen. Listen to a specific song or change your clothes first.",
      "whyFirstStepMatters": "This small gap gives your nervous system a moment to transition from 'survival mode' to 'home mode' before you make food decisions.",
      "successVision": "Within two weeks, you'll find that the urgent drive to open the pantry immediately after work starts to feel less intense.",
      "coachSupportTiming": "If the cravings are too strong to wait 10 minutes, a coach can help you find alternative decompression tools that actually work for you."
    },
    {
      "id": "rec:weight:wm_bespoke_3:action",
      "title": "Overcoming Postpartum exhaustion",
      "description": "A targeted approach to handle postpartum exhaustion.",
      "priority": 1,
      "evidenceLevel": "clinical",
      "linkedDecisions": [
        "dec:weight:wm_bespoke_3:clinical"
      ],
      "whyWeThinkThis": "You shared that postpartum exhaustion is a major roadblock. Right now, your body is healing from childbirth while running on dangerously low sleep.",
      "firstStep": "Keep a large, easy-to-drink water bottle and a non-perishable protein snack (like almonds or a protein bar) exactly where you usually feed the baby.",
      "whyFirstStepMatters": "When you are exhausted, if it isn't within arm's reach, it won't happen. This guarantees you get baseline fuel without needing to cook.",
      "successVision": "In one week, you will stop hitting that 3 PM wall of sheer exhaustion because your blood sugar will be stabilized.",
      "coachSupportTiming": "If you are struggling to find the energy to even eat snacks, a coach can help you troubleshoot ultra-low-friction nutrition."
    },
    {
      "id": "rec:weight:wm_bespoke_4:action",
      "title": "Overcoming PCOS belly fat",
      "description": "A targeted approach to handle pcos belly fat.",
      "priority": 1,
      "evidenceLevel": "clinical",
      "linkedDecisions": [
        "dec:weight:wm_bespoke_4:clinical"
      ],
      "whyWeThinkThis": "You mentioned dealing with PCOS. The weight gain associated with this isn't due to eating too much; it's driven by insulin resistance fundamentally changing how your body stores energy.",
      "firstStep": "Start having a savory, protein-heavy breakfast (like eggs or leftover dinner) instead of sweet carbs like oatmeal or toast.",
      "whyFirstStepMatters": "A savory breakfast prevents the massive morning insulin spike that triggers fat storage and intense cravings for the rest of the day.",
      "successVision": "In just a few days, you'll notice your afternoon cravings for sweets will drastically reduce.",
      "coachSupportTiming": "PCOS is complex. Your coach is here to help you navigate how to balance carbs without cutting them out entirely."
    },
    {
      "id": "rec:weight:wm_bespoke_5:action",
      "title": "Overcoming Budget constraints",
      "description": "A targeted approach to handle budget constraints.",
      "priority": 1,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_bespoke_5:clinical"
      ],
      "whyWeThinkThis": "You told us that budget constraints are making it hard to manage your weight. The wellness industry often pushes expensive supplements, but true health is built on basics.",
      "firstStep": "Buy one bag of frozen vegetables and mix a handful into your cheapest, easiest meals (like ramen or pasta) this week.",
      "whyFirstStepMatters": "Frozen veggies are cheap, never go bad, and instantly increase the volume and fiber of your meal, keeping you full for pennies.",
      "successVision": "By the end of the month, you'll realize you can eat volumetrically larger meals without increasing your grocery bill.",
      "coachSupportTiming": "If you run out of cheap meal ideas, a coach can provide you with a specific college-budget grocery list."
    },
    {
      "id": "rec:weight:wm_bespoke_6:action",
      "title": "Overcoming Late night TV snacking",
      "description": "A targeted approach to handle late night tv snacking.",
      "priority": 1,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_bespoke_6:clinical"
      ],
      "whyWeThinkThis": "You mentioned that late-night snacking is a major hurdle. When we are tired, our brain seeks out high-calorie foods for quick energy, even if we are just sitting on the couch.",
      "firstStep": "Decide on a 'kitchen closed' time that is exactly 2 hours before you usually go to sleep, and brush your teeth right then.",
      "whyFirstStepMatters": "Brushing your teeth is a powerful psychological signal to your brain that eating is done for the day, and it makes snacks taste bad anyway.",
      "successVision": "You will wake up feeling lighter and significantly less bloated in the morning.",
      "coachSupportTiming": "If you still find yourself wandering into the kitchen at midnight, a coach can help you shift your meal timing so you aren't actually hungry."
    },
    {
      "id": "rec:weight:wm_bespoke_7:action",
      "title": "Overcoming Prediabetes risk",
      "description": "A targeted approach to handle prediabetes risk.",
      "priority": 1,
      "evidenceLevel": "clinical",
      "linkedDecisions": [
        "dec:weight:wm_bespoke_7:clinical"
      ],
      "whyWeThinkThis": "You indicated that managing blood sugar is a priority for you. High blood sugar causes systemic inflammation and makes your body stubbornly store fat.",
      "firstStep": "Take a 10-minute walk outside immediately after your heaviest meal of the day.",
      "whyFirstStepMatters": "Your muscles act like sponges when you walk, soaking up the sugar from your meal without needing insulin. This directly lowers your blood sugar spikes.",
      "successVision": "Your next doctor's visit will show a noticeable improvement in your fasting glucose numbers just from this one habit.",
      "coachSupportTiming": "A coach can help you safely integrate this without overexerting yourself or disrupting your schedule."
    },
    {
      "id": "rec:weight:wm_bespoke_8:action",
      "title": "Overcoming Joint pain during cardio",
      "description": "A targeted approach to handle joint pain during cardio.",
      "priority": 1,
      "evidenceLevel": "clinical",
      "linkedDecisions": [
        "dec:weight:wm_bespoke_8:clinical"
      ],
      "whyWeThinkThis": "You mentioned that joint pain makes exercise difficult. The old 'no pain, no gain' mentality is dangerous. True health means moving in ways that heal, not hurt.",
      "firstStep": "Swap any jumping or running activities for swimming, cycling, or just stretching on the floor for 15 minutes.",
      "whyFirstStepMatters": "Low-impact movement increases blood flow to your joints, which actually speeds up healing while protecting your cartilage from further damage.",
      "successVision": "You will start to view movement as something that feels good, rather than something you dread because it hurts.",
      "coachSupportTiming": "If you aren't sure what exercises are safe for your specific joint pain, a coach can provide a custom low-impact routine."
    },
    {
      "id": "rec:weight:wm_filler_9:action",
      "title": "Handle General Factor 0",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_9:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_10:action",
      "title": "Handle General Factor 1",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_10:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_11:action",
      "title": "Handle General Factor 2",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_11:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_12:action",
      "title": "Handle General Factor 3",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_12:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_13:action",
      "title": "Handle General Factor 4",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_13:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_14:action",
      "title": "Handle General Factor 5",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_14:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_15:action",
      "title": "Handle General Factor 6",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_15:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_16:action",
      "title": "Handle General Factor 7",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_16:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_17:action",
      "title": "Handle General Factor 8",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_17:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_18:action",
      "title": "Handle General Factor 9",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_18:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_19:action",
      "title": "Handle General Factor 10",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_19:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_20:action",
      "title": "Handle General Factor 11",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_20:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_21:action",
      "title": "Handle General Factor 12",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_21:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_22:action",
      "title": "Handle General Factor 13",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_22:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_23:action",
      "title": "Handle General Factor 14",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_23:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_24:action",
      "title": "Handle General Factor 15",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_24:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_25:action",
      "title": "Handle General Factor 16",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_25:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_26:action",
      "title": "Handle General Factor 17",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_26:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_27:action",
      "title": "Handle General Factor 18",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_27:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_28:action",
      "title": "Handle General Factor 19",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_28:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_29:action",
      "title": "Handle General Factor 20",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_29:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_30:action",
      "title": "Handle General Factor 21",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_30:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_31:action",
      "title": "Handle General Factor 22",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_31:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_32:action",
      "title": "Handle General Factor 23",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_32:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_33:action",
      "title": "Handle General Factor 24",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_33:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_34:action",
      "title": "Handle General Factor 25",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_34:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_35:action",
      "title": "Handle General Factor 26",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_35:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_36:action",
      "title": "Handle General Factor 27",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_36:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_37:action",
      "title": "Handle General Factor 28",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_37:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_38:action",
      "title": "Handle General Factor 29",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_38:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_39:action",
      "title": "Handle General Factor 30",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_39:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_40:action",
      "title": "Handle General Factor 31",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_40:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_41:action",
      "title": "Handle General Factor 32",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_41:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_42:action",
      "title": "Handle General Factor 33",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_42:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_43:action",
      "title": "Handle General Factor 34",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_43:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_44:action",
      "title": "Handle General Factor 35",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_44:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_45:action",
      "title": "Handle General Factor 36",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_45:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_46:action",
      "title": "Handle General Factor 37",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_46:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_47:action",
      "title": "Handle General Factor 38",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_47:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_48:action",
      "title": "Handle General Factor 39",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_48:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_49:action",
      "title": "Handle General Factor 40",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_49:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_50:action",
      "title": "Handle General Factor 41",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_50:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_51:action",
      "title": "Handle General Factor 42",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_51:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_52:action",
      "title": "Handle General Factor 43",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_52:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_53:action",
      "title": "Handle General Factor 44",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_53:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_54:action",
      "title": "Handle General Factor 45",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_54:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_55:action",
      "title": "Handle General Factor 46",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_55:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_56:action",
      "title": "Handle General Factor 47",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_56:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_57:action",
      "title": "Handle General Factor 48",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_57:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_58:action",
      "title": "Handle General Factor 49",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_58:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_59:action",
      "title": "Handle General Factor 50",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_59:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_60:action",
      "title": "Handle General Factor 51",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_60:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_61:action",
      "title": "Handle General Factor 52",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_61:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_62:action",
      "title": "Handle General Factor 53",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_62:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_63:action",
      "title": "Handle General Factor 54",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_63:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_64:action",
      "title": "Handle General Factor 55",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_64:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_65:action",
      "title": "Handle General Factor 56",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_65:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_66:action",
      "title": "Handle General Factor 57",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_66:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_67:action",
      "title": "Handle General Factor 58",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_67:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_68:action",
      "title": "Handle General Factor 59",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_68:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_69:action",
      "title": "Handle General Factor 60",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_69:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_70:action",
      "title": "Handle General Factor 61",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_70:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_71:action",
      "title": "Handle General Factor 62",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_71:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_72:action",
      "title": "Handle General Factor 63",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_72:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_73:action",
      "title": "Handle General Factor 64",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_73:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_74:action",
      "title": "Handle General Factor 65",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_74:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_75:action",
      "title": "Handle General Factor 66",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_75:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_76:action",
      "title": "Handle General Factor 67",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_76:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_77:action",
      "title": "Handle General Factor 68",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_77:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_78:action",
      "title": "Handle General Factor 69",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_78:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_79:action",
      "title": "Handle General Factor 70",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_79:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_80:action",
      "title": "Handle General Factor 71",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_80:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_81:action",
      "title": "Handle General Factor 72",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_81:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_82:action",
      "title": "Handle General Factor 73",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_82:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_83:action",
      "title": "Handle General Factor 74",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_83:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_84:action",
      "title": "Handle General Factor 75",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_84:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_85:action",
      "title": "Handle General Factor 76",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_85:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_86:action",
      "title": "Handle General Factor 77",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_86:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_87:action",
      "title": "Handle General Factor 78",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_87:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_88:action",
      "title": "Handle General Factor 79",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_88:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_89:action",
      "title": "Handle General Factor 80",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_89:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_90:action",
      "title": "Handle General Factor 81",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_90:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_91:action",
      "title": "Handle General Factor 82",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_91:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_92:action",
      "title": "Handle General Factor 83",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_92:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_93:action",
      "title": "Handle General Factor 84",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_93:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_94:action",
      "title": "Handle General Factor 85",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_94:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_95:action",
      "title": "Handle General Factor 86",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_95:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_96:action",
      "title": "Handle General Factor 87",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_96:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_97:action",
      "title": "Handle General Factor 88",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_97:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_98:action",
      "title": "Handle General Factor 89",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_98:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_99:action",
      "title": "Handle General Factor 90",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_99:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_100:action",
      "title": "Handle General Factor 91",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_100:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_101:action",
      "title": "Handle General Factor 92",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_101:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_102:action",
      "title": "Handle General Factor 93",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_102:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_103:action",
      "title": "Handle General Factor 94",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_103:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_104:action",
      "title": "Handle General Factor 95",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_104:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_105:action",
      "title": "Handle General Factor 96",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_105:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_106:action",
      "title": "Handle General Factor 97",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_106:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_107:action",
      "title": "Handle General Factor 98",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_107:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_108:action",
      "title": "Handle General Factor 99",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_108:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_109:action",
      "title": "Handle General Factor 100",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_109:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    },
    {
      "id": "rec:weight:wm_filler_110:action",
      "title": "Handle General Factor 101",
      "description": "Targeted approach.",
      "priority": 3,
      "evidenceLevel": "coaching",
      "linkedDecisions": [
        "dec:weight:wm_filler_110:clinical"
      ],
      "whyWeThinkThis": "You indicated this is an issue.",
      "firstStep": "Focus on awareness.",
      "whyFirstStepMatters": "Awareness precedes change.",
      "successVision": "You will feel more in control.",
      "coachSupportTiming": "Discuss with coach if needed."
    }
  ]
};
