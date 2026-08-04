Perfect. I will remember the structure. 

From now on, **every assessment will follow the exact same template** . Once Weight Management is finished, every future assessment becomes much faster because we reuse the structure. 

# **Assessment #1 – Weight Management Clinical Specification v1.0** 

# **Part 1 – Assessment Foundation** 

This document defines the purpose, philosophy, clinical scope, architecture, and expected outcomes of the Weight Management assessment. It serves as the permanent foundation before any clinical logic, calculations, or recommendations are implemented. 

# **1. Assessment Identity** 

# **Assessment Name** 

⚖️� Weight Management 

# **Assessment ID** 

weight_management 

# **Version** 

v1.0 

# **Category** 

Weight & Body Goals 

# **Assessment Type** 

Preventive Lifestyle & Clinical Wellness Assessment 

# **Difficulty** 

Beginner 

# **Estimated Completion Time** 

6–8 Minutes 

# **Total Questions** 

11 Universal Profile Questions + 25 Specialist Questions 

Total = 36 Questions 

# **2. Primary Objective** 

The purpose of this assessment is **not simply to calculate BMI or determine whether a person should lose or gain weight.** 

Its primary objective is to identify the **root causes** preventing an individual from achieving and maintaining a healthy body weight. 

Rather than focusing only on body weight, the assessment evaluates the complete lifestyle patterns influencing body composition, metabolism, nutrition, activity, recovery, and behavioral consistency. 

The engine should identify: 

- What is happening? 

- Why it is happening? 

- Which factors have the greatest impact? 

- Which changes will produce the highest improvement. 

- What realistic results can be expected. 

# **3. Clinical Philosophy** 

Weight is an **outcome** , not the disease. 

The assessment must evaluate the behaviours driving weight change rather than treating weight as the only problem. 

The report should educate the user that sustainable weight management is influenced by multiple interacting domains, including: 

- Body composition 

- Dietary quality 

- Energy balance 

- Physical activity 

- Daily movement (NEAT) 

- Sleep quality 

- Stress 

- Eating behaviour 

- Recovery 

- Habit consistency 

The engine should therefore prioritize behavioural causes over isolated numerical measurements. 

# **4. Target Users** 

This assessment is designed for adults who: 

- Want to lose weight 

- Want to gain healthy weight 

- Want to maintain current weight 

- Have experienced repeated weight fluctuations 

- Feel stuck despite dieting 

- Want to improve body composition 

- Want a personalized nutrition and lifestyle roadmap 

It is **not** intended to diagnose medical disease. 

The assessment provides wellness guidance and should encourage medical consultation whenever findings indicate elevated health risks. 

# **5. Assessment Scope** 

This assessment evaluates five major domains: 

# **A. Body Composition** 

- Current weight status 

- BMI classification 

- Estimated body fat 

- Healthy weight range 

# **B. Nutrition Behaviour** 

- Meal consistency 

- Food quality 

- Portion awareness 

- Sugary beverages 

- Eating out 

- Protein habits 

- Late-night eating 

# **C. Physical Activity** 

- Daily movement 

- Sitting time 

- Walking 

- Exercise behaviour 

- Activity consistency 

# **D. Recovery & Lifestyle** 

- Sleep duration 

- Daily recovery 

- Stress exposure 

- Lifestyle balance 

# **E. Behaviour & Motivation** 

- Cravings 

- Emotional eating 

- Previous weight-loss attempts 

- Barriers 

- Confidence 

- Readiness for change 

# **6. What This Assessment Must Deliver** 

The final report must answer four fundamental questions: 

# **Question 1** 

# **What is happening in my body right now?** 

Examples: 

- Healthy weight 

- Overweight 

- Underweight 

- Excess body fat 

- Poor eating habits 

- Low activity 

**Question 2** 

**Why is this happening?** 

Identify behavioural causes supported by evidence. 

Examples: 

- Frequent sugary drinks 

- Large portions 

- Sedentary lifestyle 

- Emotional eating 

- Poor sleep 

# **Question 3** 

# **What should I improve first?** 

The engine should identify the highest-impact priorities instead of overwhelming the user. 

Maximum: 

3 Primary Priorities 

5 Secondary Priorities 

# **Question 4** 

# **What results can I realistically expect?** 

Examples: 

- Improved energy 

- Better satiety 

- Reduced cravings 

- Healthier body composition 

- Sustainable weight change 

- Better metabolic health 

# **7. Success Criteria** 

A successful Weight Management assessment should: 

- Produce clinically believable results. 

- Explain every conclusion. 

- Personalize recommendations. 

- Prioritize the most impactful actions. 

- Avoid generic advice. 

- Generate realistic expectations. 

- Build user confidence. 

- Encourage long-term lifestyle change. 

# **8. Non-Objectives** 

This assessment must **not** : 

- Diagnose disease. 

- Replace medical consultation. 

- Prescribe medications. 

- Recommend extreme diets. 

- Promote rapid weight loss. 

- Make unsupported health claims. 

- Recommend supplements without evidence defined in the assessment logic. 

# **9. Integration with Clinical Intelligence Engine** 

The Weight Management assessment will serve as the **reference implementation** for the entire WelliQo Clinical Intelligence Engine. 

It must fully demonstrate: 

- Evidence-based reasoning 

- Clinical findings 

- Formula execution 

- Score validation 

- Recommendation generation 

- Timeline prediction 

- Metric generation 

- Knowledge reuse 

- Explainable outputs 

Every future assessment will follow the same architecture. 

**10. Acceptance Criteria** 

This assessment will be considered complete only when: 

- Every specialist question contributes to clinical reasoning. 

- Every finding is supported by evidence. 

- Every recommendation references one or more findings. 

- Every metric is generated from validated calculations. 

- Every score is clinically believable. 

- Every report section is personalized. 

- No unused questions exist. 

- No unused formulas exist. 

- No hardcoded report content exists. 

- No duplicated clinical logic exists. 

- The assessment is production-ready and reusable as the Gold Standard for all future WelliQo assessments. 

# **Part 2 should not just be "25 questions."** 

It should become the **Master Question Specification** . 

That means for **every single question** we define everything Gemini will ever need. 

For each question we'll include: 

- Question ID 

- Question Text 

- Clinical Objective 

- Why this question exists 

- UI Component 

- Answer Options 

- Stored Value 

- Required/Optional 

- Help Text 

- Clinical Category 

- Pillar 

- Future Evidence Mapping (reference only) 

- Notes 

This means **Gemini never has to ask another question about UI or IDs** . 

# **Assessment #1 – Weight Management Clinical Specification v1.0** 

# **Part 2 – Master Question Bank** 

# **Objective** 

The Weight Management assessment consists of **25 specialist questions** asked after the user completes the 11 Universal Profile Questions. 

These questions are designed to identify the behavioural, nutritional, lifestyle, and motivational factors affecting body weight. Every question has a specific clinical purpose and must contribute to the Clinical Intelligence Engine. 

Every question must: 

- Have a unique ID. 

- Belong to exactly one primary pillar. 

- Capture clinically meaningful information. 

- Contribute to evidence generation. 

- Be reusable where appropriate in future assessments. 

- Avoid duplication with the 11 universal questions. 

# **Pillar Distribution** 

|**Pillar**|**Questons**|**Weight**|
|---|---|---|
|Goal & Weight History|5|15%|
|Nutriton & Eatng Habits|8|35%|
|Physical Actvity & Lifestyle|6|25%|
|Behaviour, Recovery & Mindset|6|25%|
|Total Questons:**25**|||



# **Question 1** 

# **Question ID** 

weight_goal 

# **UI** 

Single Choice Card 

# **Question** 

# **What is your primary weight goal right now?** 

# **Clinical Purpose** 

Determine the user's desired outcome so future recommendations, calorie targets, timelines, and report language can be personalized. 

# **Options** 

- Lose Weight 

- Maintain Weight 

- Gain Healthy Weight 

- Improve Body Composition 

# **Stored Value** 

lose 

maintain 

gain 

recompose 

# **Required** 

Yes 

# **Question 2** 

# **ID** 

target_weight 

# **UI** 

Weight Picker 

# **Question** 

# **What is your target body weight?** 

# **Purpose** 

Measure desired change and compare with clinically healthy range. 

# **Unit** 

kg (convert lbs if needed) 

Required: Yes 

# **Question 3** 

# **ID** 

goal_timeline 

# **UI** 

Single Choice 

# **Question** 

# **When would you ideally like to achieve your goal?** 

# **Options** 

- Less than 3 months 

- 3–6 months 

- 6–12 months 

- More than 1 year 

- No specific timeline 

Purpose: Understand expectations and identify unrealistic goals. 

# **Question 4** 

# **ID** 

weight_history 

# **Question** 

# **How has your weight changed during the last 12 months?** 

# Options 

- Mostly Stable 

- Gradually Increased 

- Gradually Decreased 

- Large Fluctuations 

- Unsure 

# Purpose 

Identify long-term weight trends. 

# **Question 5** 

# **ID** 

weight_attempts 

# **Question** 

# **How many serious attempts have you made to change your weight?** 

Options 

- Never 

- 1–2 

- 3–5 

- More than 5 

Purpose 

Measure previous behaviour and identify repeated dieting patterns. 

# **Question 6** 

# **ID** 

biggest_obstacle 

# **Question** 

**What do you feel is the biggest obstacle preventing you from reaching your goal?** 

Options 

- Lack of Time 

- Emotional Eating 

- Constant Hunger 

- Low Motivation 

- Stress 

- Family/Social Events 

- Lack of Exercise 

- Don't Know 

# Purpose 

Identify the highest perceived barrier. 

# **Question 7** 

# **ID** 

meals_per_day 

# **Question** 

# **How many meals do you usually eat each day?** 

Options 

- 1–2 

- 3 

- 4 

- 5+ 

# Purpose 

Understand meal frequency. 

# **Question 8** 

# **ID** 

skip_breakfast 

# **Question** 

# **How often do you skip breakfast?** 

# Options 

- Never 

- 1–2 days/week 

- 3–5 days/week 

- Almost Every Day 

# Purpose 

Assess meal timing consistency. 

# **Question 9** 

# **ID** 

snacking_frequency 

# **Question** 

# **How often do you snack between meals?** 

# Options 

- Rarely 

- Once Daily 

- 2–3 Times Daily 

#  Throughout the Day 

Purpose 

Measure eating frequency and satiety. 

# **Question 10** 

# **ID** 

late_eating 

# **Question** 

# **How often do you eat within 2 hours before bedtime?** 

Options 

- Never 

- Occasionally 

- Most Days 

- Every Day 

# Purpose 

Evaluate meal timing. 

# **Question 11** 

# **ID** 

eating_out 

# **Question** 

# **How often do you eat restaurant, fast food, or takeaway meals?** 

# Options 

- Rarely 

- 1–2 Times/Week 

- 3–4 Times/Week 

- Almost Daily 

# Purpose 

Estimate dietary quality. 

**Question 12** 

# **ID** 

sugary_drinks 

# **Question** 

# **How often do you consume sugary drinks?** 

Options 

- Never 

- 1–3 Per Week 

- 4–6 Per Week 

- Daily 

- Multiple Per Day 

# Purpose 

Assess liquid calorie intake. 

# **Question 13** 

# **ID** 

portion_sizes 

# **Question** 

# **How would you describe your usual portion sizes?** 

# Options 

- Small 

- Moderate 

- Large 

- Very Large 

# Purpose 

Estimate energy intake. 

# **Question 14** 

# **ID** 

cravings_freq 

# **Question** 

**How often do you experience strong food cravings?** 

Options 

- Rarely 

- Weekly 

- Several Times Weekly 

- Daily 

# Purpose 

Assess appetite regulation. 

# **Question 15** 

# **ID** 

cravings_time 

# **Question** 

# **When do cravings usually occur?** 

# Options 

- Morning 

- Afternoon 

- Evening 

- Late Night 

- Random 

# Purpose 

Identify craving patterns. 

# **Question 16** 

# **ID** 

emotional_eating 

# **Question** 

# **How often do you eat because of emotions rather than hunger?** 

Options 

- Never 

- Occasionally 

- Frequently 

- Almost Always 

Purpose 

Measure emotional eating. 

# **Question 17** 

# **ID** 

sleep_hours 

# **Question** 

# **How many hours do you usually sleep each night?** 

Options 

- Less than 5 

- 5–6 

- 6–7 

- 7–8 

- More than 8 

# Purpose 

Assess recovery. 

# **Question 18** 

# **ID** 

sleep_quality 

# **Question** 

# **How would you rate the quality of your sleep?** 

Options 

- Very Poor 

- Poor 

- Fair 

- Good 

- Excellent 

# Purpose 

Measure restorative sleep. 

# **Question 19** 

# **ID** 

sitting_hours 

# **Question** 

# **How many hours do you spend sitting during a typical day?** 

Options 

- Less than 4 

- 4–6 

- 6–8 

- 8–10 

- More than 10 

# Purpose 

Estimate sedentary behaviour. 

# **Question 20** 

# **ID** 

daily_steps 

# **Question** 

# **On average, how many steps do you walk each day?** 

# Options 

- Less than 3,000 

- 3,000–5,999 

- 6,000–7,999 

- 8,000–9,999 

- 10,000+ 

# Purpose 

Measure daily movement. 

# **Question 21** 

**ID** 

planned_exercise 

# **Question** 

# **How many days each week do you perform planned exercise?** 

Options 

- Never 

- 1–2 

- 3–4 

- 5+ 

# Purpose 

Measure structured activity. 

# **Question 22** 

# **ID** 

stress_level 

# **Question** 

# **How would you rate your current stress level?** 

# Options 

- Very Low 

- Low 

- Moderate 

- High 

- Very High 

# Purpose 

Assess stress burden. 

# **Question 23** 

# **ID** 

energy_level 

# **Question** 

**How would you rate your daily energy level?** 

Options 

- Very Low 

- Low 

- Moderate 

- Good 

- Excellent 

Purpose 

Measure perceived vitality. 

# **Question 24** 

# **ID** 

confidence 

# **Question** 

# **How confident are you that you can achieve your goal?** 

Scale 

1–10 

# Purpose 

Assess self-efficacy and readiness. 

# **Question 25** 

# **ID** 

support_system 

# **Question** 

**Do you have family or friends who support your health goals?** 

Options 

- Strong Support 

- Some Support 

- Very Little Support 

- No Support 

Purpose 

Understand environmental support. 

# **End of Part 2** 

This completes the **Master Question Bank** . 

Every question now has: 

- A stable ID 

- A defined UI 

- A clinical purpose 

- Standardized answer options 

Part 3 is where the real clinical intelligence lives, and it's **far too large** to fit in a single response without sacrificing quality. 

It includes, for all 25 questions: 

- Every answer option mapped to evidence. 

- Evidence strength. 

- Confidence scoring. 

- Finding generation. 

- Severity. 

- Pillar score deductions. 

- Synergy rules. 

- Recommendation triggers. 

- Timeline impacts. 

- Knowledge extraction. 

That's the largest section of the entire specification—likely **30–40 pages** on its own. 

If I try to compress it into one reply, it will either: 

- omit important clinical logic, 

- oversimplify the reasoning, or 

- produce something Gemini would have to guess from. 

Excellent. Now we're building the **brain** of WelliQo. 

This is where WelliQo becomes different from every BMI calculator. 

# **Assessment #1 – Weight Management Clinical Specification v1.0** 

# **Part 3A – Clinical Logic Mapping (Questions 1–8)** 

# **Objective** 

This section defines how the Clinical Intelligence Engine transforms the first eight specialist questions into: 

Question 

↓ 

Answer 

↓ 

Evidence 

↓ 

Finding 

↓ 

Severity 

↓ 

Pillar Score 

↓ 

Recommendation Trigger 

No answer should exist without contributing to the engine. 

# **Pillar** 

# **Goal & Weight History** 

Weight = **15%** 

Purpose: 

Understand **where the user wants to go** , whether the goal is realistic, and whether previous behaviour indicates barriers to success. 

This pillar does **not** judge the user. 

Instead, it influences: 

- Timeline 

- Motivation 

- Goal realism 

- Recommendation priority 

- Confidence 

# **Q1** 

# **weight_goal** 

"What is your primary weight goal?" 

# **lose** 

Evidence 

GOAL_WEIGHT_LOSS 

Finding 

None 

Severity 

None 

Score 

0 

Purpose 

Used by: 

- Calorie calculation 

- Protein target 

- Timeline 

- Report wording 

- Recommendation selection 

# **maintain** 

Evidence 

GOAL_MAINTENANCE 

No deductions. 

# **gain** 

Evidence 

GOAL_WEIGHT_GAIN 

No deductions. 

# **recompose** 

Evidence 

GOAL_RECOMPOSITION 

No deductions. 

# **Engine Rule** 

Goal never changes score. 

It changes 

everything else. 

# **Q2** 

# **target_weight** 

Evidence Generated 

TARGET_WEIGHT Engine calculates Target Difference 

= 

Current Weight 

- 

Target Weight 

If 

Difference 

<2kg 

# ↓ 

# Finding 

# REALISTIC_GOAL 

# 2–10kg 

↓ 

Finding 

MODERATE_GOAL 

10–20kg 

↓ 

Finding 

# SIGNIFICANT_WEIGHT_CHANGE 

20kg 

↓ 

Finding 

MAJOR_WEIGHT_CHANGE 

Severity 

Medium 

Timeline automatically extended. 

If 

Target weight is outside healthy BMI 

↓ 

Finding 

UNREALISTIC_TARGET 

Severity 

High 

Recommendation 

Healthy weight education. 

# **Q3** 

goal_timeline 

<3 months 

If 

Target Difference >10kg 

↓ 

Finding 

UNREALISTIC_EXPECTATION 

Severity 

High 

Deduction 

−10 

3–6 months 

Target Difference 

<10kg 

↓ 

No deduction 

6–12 months 

# ↓ 

Positive behaviour 

+5 Motivation 

No timeline 

# ↓ 

No deduction 

Purpose 

Used only for 

Timeline prediction 

# **Q4** 

weight_history 

Stable 

↓ 

Evidence 

WEIGHT_STABLE 

No deduction 

Gradually Increased 

↓ 

Evidence 

WEIGHT_GAINING 

Finding 

Positive Energy Balance 

Severity 

Medium 

Deduction 

−8 

Gradually Decreased 

# ↓ 

Finding 

Recent Weight Loss 

No deduction 

Large Fluctuations 

↓ 

Finding 

Weight Cycling 

Severity 

High 

Deduction 

−15 

Recommendation 

Behaviour consistency. 

Unsure 

↓ 

Confidence 

−5% 

because historical certainty decreases. 

# **Q5** 

weight_attempts 

Never 

↓ 

No finding. 

1–2 

↓ 

Healthy experience. 

No deduction. 

3–5 

↓ 

Finding Repeated Diet Attempts 

Severity 

Medium 

Deduction 

−5 

5 

↓ 

Finding 

Chronic Diet Cycling 

Severity 

High 

Deduction 

−15 

Recommendation 

Lifestyle approach over restrictive dieting. 

Engine Note 

Repeated failure 

≠ 

Low motivation. Never punish motivation. 

# **Q6** 

biggest_obstacle 

This question 

does NOT affect score. 

It affects 

Recommendation Priority. 

Time 

# ↓ 

Recommendation 

Time-efficient habits. 

Stress 

# ↓ 

Stress module priority. 

Emotional Eating 

# ↓ 

Behaviour module priority. 

Exercise 

↓ 

Activity priority. 

Motivation 

# ↓ 

Habit coaching priority. 

Don't Know 

↓ 

Confidence 

−10% 

because perceived barriers are unclear. 

# **Q7** 

meals_per_day 

1–2 

↓ 

Finding 

Low Meal Frequency 

Severity 

Medium 

Deduction 

−10 

3 

↓ 

Ideal 

0 

4 

↓ 

Good 

0 

5+ 

↓ 

Finding 

Frequent Eating 

Severity 

Low 

Deduction −5 

Only if 

Portion Size 

Large 

Otherwise 

No deduction. 

Synergy 

Meals 

 

Large Portions 

↓ 

Higher calorie intake risk. 

# **Q8** 

skip_breakfast 

Never 

↓ 

0 

1–2 

↓ 

−2 

3–5 

↓ 

Finding 

Meal Inconsistency 

Severity 

Medium 

−8 

Almost Every Day 

↓ 

Finding 

Frequent Breakfast Skipping 

Severity 

Medium 

−12 

# Important Rule 

# Skipping breakfast 

is NOT automatically unhealthy. 

Do **not** generate a finding solely because breakfast is skipped. 

Only generate a clinically relevant finding if it combines with evidence such as: 

- 1–2 meals/day 

- Large evening meals 

- Frequent cravings 

- Late-night eating 

- Low energy 

- High hunger 

This avoids outdated assumptions and keeps recommendations evidence-based. 

# **Score Summary (Questions 1–8)** 

|**Queston**|**Maximum Deducton**|
|---|---|
|Goal|0|
|Target Weight|0|
|Timeline|10|
|Weight History|15|
|Previous Atempts|15|
|Biggest Obstacle|0|
|Meals Per Day|10|
|Breakfast|12|
|Maximum Possible|Deducton|



# 62 Points 

Actual deductions will be reduced through synergy logic in later sections so users are not penalized twice for the same behavioural pattern. 

# **Knowledge Created** 

This section introduces the following reusable knowledge objects: 

# **Evidence** 

- GOAL_WEIGHT_LOSS 

- GOAL_MAINTENANCE 

- GOAL_WEIGHT_GAIN 

- GOAL_RECOMPOSITION 

- TARGET_WEIGHT 

- WEIGHT_STABLE 

- WEIGHT_GAINING 

# **Findings** 

- REALISTIC_GOAL 

- MODERATE_GOAL 

- SIGNIFICANT_WEIGHT_CHANGE 

- MAJOR_WEIGHT_CHANGE 

- UNREALISTIC_TARGET 

- POSITIVE_ENERGY_BALANCE 

- WEIGHT_CYCLING 

- REPEATED_DIET_ATTEMPTS 

- CHRONIC_DIET_CYCLING 

- LOW_MEAL_FREQUENCY 

- FREQUENT_EATING 

- MEAL_INCONSISTENCY 

- FREQUENT_BREAKFAST_SKIPPING 

# **Recommendations** 

- Healthy Goal Setting 

- Sustainable Weight Loss Planning 

- Time-Efficient Lifestyle Changes 

- Stress Management 

- Emotional Eating Support 

- Meal Consistency Coaching 

 Balanced Meal Distribution 

# **⚠️� One improvement over our earlier design** 

I deliberately changed one thing: **breakfast skipping is no longer treated as inherently unhealthy** . Modern nutrition research doesn't support a blanket conclusion that everyone who skips breakfast has poorer health. Instead, the engine looks at the _context_ —meal frequency, cravings, late-night eating, energy levels, and other behaviours—before deciding whether breakfast skipping is actually contributing to a problem. 

This kind of context-aware reasoning is exactly what will make WelliQo's Clinical Intelligence Engine more credible and trustworthy over time. 

Yes, let's continue in the same format. (One note: the values below are a **clinical design specification** for your engine, not medical diagnosis rules.) 

# **Assessment #1 – Weight Management Clinical Specification v1.0** 

# **Part 3B – Clinical Logic Mapping (Questions 9–16)** 

# **Objective** 

This section transforms Questions 9–16 into structured clinical intelligence. 

Each answer contributes to: 

Answer 

↓ 

Evidence 

↓ 

Finding 

↓ 

Severity 

↓ 

Nutrition Score 

↓ 

Recommendation 

↓ 

Confidence 

This pillar contributes most heavily to Weight Management because nutrition behaviour is one of the strongest lifestyle determinants of body-weight outcomes. 

# **Nutrition & Eating Behaviour Pillar** 

Weight = **35%** 

Purpose: 

Evaluate eating quality, energy intake behaviours, meal timing, cravings and emotional eating. 

This pillar should never estimate calories directly. 

Instead it identifies behaviours associated with healthier or less healthy dietary patterns. 

# **Q9** 

# **snacking_frequency** 

Rarely 

↓ 

Evidence 

HEALTHY_SNACK_PATTERN 

Deduction 

0 

Once Daily 

↓ 

Evidence 

MODERATE_SNACKING 

Deduction 

0 

2–3 Times Daily 

↓ 

Finding 

FREQUENT_SNACKING 

Severity 

Low 

Deduction 

−5 

Throughout the Day 

↓ 

Finding 

CONTINUOUS_GRAZING 

Severity 

Medium 

Deduction 

−12 

Recommendation 

Structured eating schedule 

Synergy 

Frequent Snacking 

 

Large Portions 

↓ 

Increase deduction 

+5 

# **Q10** 

**late_eating** 

Never 

↓ 

0 

Occasionally 

↓ 

−2 

Most Days 

# ↓ 

Finding 

REGULAR_LATE_EATING 

Severity 

Medium 

Deduction 

−8 

Every Day 

↓ 

Finding 

CHRONIC_LATE_EATING 

Severity 

High 

Deduction 

−15 

Synergy 

Late Eating 

 

Poor Sleep 

# ↓ 

Recovery Risk 

Late Eating 

 

Large Portions 

# ↓ 

Positive Energy Balance 

# **Q11** 

# **eating_out** 

Rarely 

↓ 

0 

1–2/week 

↓ 

−2 

3–4/week 

↓ 

Finding 

FREQUENT_EATING_OUT 

Severity 

Medium 

Deduction 

−8 

Daily 

↓ 

Finding 

HIGH_RESTAURANT_DEPENDENCY 

Severity 

High 

Deduction 

−15 

Recommendation 

Meal planning 

Home food preparation 

# **Q12** 

# **sugary_drinks** 

Never 

↓ 

0 

1–3/week 

↓ 

−3 

4–6/week 

↓ 

Finding 

HIGH_SUGAR_BEVERAGES 

Severity 

Medium 

Deduction 

−10 

Daily 

↓ 

Finding 

DAILY_SUGAR_BEVERAGES 

Severity 

High 

Deduction 

−18 

Multiple Daily 

↓ 

Finding 

EXCESS_LIQUID_CALORIES 

Severity 

High 

Deduction −25 

Priority 

HIGH 

Synergy 

Sugary Drinks 

 

Low Activity 

# ↓ 

Higher Positive Energy Balance 

Sugary Drinks 

##  

Frequent Snacking 

# ↓ 

Higher Metabolic Risk 

# **Q13** 

**portion_sizes** 

Small 

↓ 

0 

# Moderate 

↓ 

0 

Large 

↓ 

Finding 

# LARGE_PORTIONS 

Severity 

Medium 

Deduction 

−8 

Very Large 

↓ 

Finding 

VERY_LARGE_PORTIONS 

Severity 

High 

Deduction 

−15 

Synergy 

Large Portions 

 

Late Eating 

↓ 

Positive Energy Balance 

Large Portions 

 

Frequent Eating Out 

# ↓ 

Higher Calorie Intake Pattern 

# **Q14** 

# **cravings_freq** 

Rarely 

↓ 

0 

Weekly 

↓ 

−3 

Several Times Weekly 

# ↓ 

Finding 

FREQUENT_CRAVINGS 

Severity 

Medium 

Deduction 

−8 

Daily 

↓ 

Finding 

PERSISTENT_CRAVINGS 

Severity 

High 

Deduction 

−15 

Important 

Cravings 

≠ 

Poor Discipline 

Never use judgmental language. 

Synergy 

Cravings 

 

Poor Sleep 

# ↓ 

Higher Appetite Risk 

Cravings 

 

Stress 

↓ 

Emotional Eating Risk 

# **Q15** 

# **cravings_time** 

Morning 

↓ No deduction Clinical Note 

Review breakfast quality if other findings support it. 

Afternoon 

↓ 

Evidence 

AFTERNOON_CRAVINGS 

No deduction 

Evening 

↓ 

Evidence 

EVENING_CRAVINGS 

No deduction 

Late Night 

↓ 

Finding 

LATE_NIGHT_CRAVINGS 

Severity 

Medium 

Deduction −5 

Only if 

Late Eating 

OR 

Poor Sleep 

exists. 

Random 

↓ 

Evidence 

# VARIABLE_CRAVINGS 

No deduction 

# Purpose 

This question primarily **adds context** . 

It should almost never create findings alone. 

# **Q16** 

# **emotional_eating** 

Never 

↓ 

0 

Occasionally 

↓ 

−2 

Frequently 

↓ 

Finding 

EMOTIONAL_EATING 

Severity 

High 

Deduction 

−12 

Almost Always 

↓ 

Finding 

CHRONIC_EMOTIONAL_EATING 

Severity 

Critical Deduction 

−20 

Priority 

Very High 

Synergy 

Emotional Eating 

##  

High Stress 

# ↓ 

Increase Severity 

Emotional Eating 

##  

Poor Sleep 

# ↓ 

Increase Confidence 

Emotional Eating 

##  

Frequent Cravings 

# ↓ 

Behavioural Pattern Confirmed 

Engine Rule 

Never label the user. 

# Say: 

"Your responses suggest eating may sometimes be influenced by emotions." 

Never say: 

"You are an emotional eater." 

# **Score Summary (Questions 9–16)** 

|**Queston**|**Maximum Deducton**|
|---|---|
|Snacking|12|
|Late Eatng|15|
|Eatng Out|15|
|Sugary Drinks|25|
|Porton Size|15|
|Cravings Frequency|15|
|Cravings Timing|5|
|Emotonal Eatng|20|
|Maximum Behaviou|r Deducton|
|122 Points||



The **Score Validator** must normalize deductions so overlapping behaviours don't unfairly stack. Multiple answers that describe the same underlying habit (e.g., late eating + late-night cravings + large portions) should increase confidence in a finding rather than simply multiplying penalties. 

# **Knowledge Created** 

# **Evidence** 

- HEALTHY_SNACK_PATTERN 

- MODERATE_SNACKING 

- AFTERNOON_CRAVINGS 

- EVENING_CRAVINGS 

- VARIABLE_CRAVINGS 

# **Findings** 

- FREQUENT_SNACKING 

- CONTINUOUS_GRAZING 

- REGULAR_LATE_EATING 

- CHRONIC_LATE_EATING 

- FREQUENT_EATING_OUT 

- HIGH_RESTAURANT_DEPENDENCY 

- HIGH_SUGAR_BEVERAGES 

- DAILY_SUGAR_BEVERAGES 

- EXCESS_LIQUID_CALORIES 

- LARGE_PORTIONS 

- VERY_LARGE_PORTIONS 

- FREQUENT_CRAVINGS 

- PERSISTENT_CRAVINGS 

- LATE_NIGHT_CRAVINGS 

- EMOTIONAL_EATING 

- CHRONIC_EMOTIONAL_EATING 

# **Recommendations** 

- Structured Meal Timing 

- Portion Awareness 

- Reduce Sugary Drinks 

- Home Meal Planning 

- Healthy Snacking Strategies 

- Craving Management 

- Emotional Eating Awareness 

- Mindful Eating Practices 

# 🔒 **Permanent Design Rules** 

1. **Context beats single answers.** One answer should rarely generate a high-severity finding on its own. 

2. **Use synergy to increase confidence before increasing penalties.** 

3. **Avoid shame-based language.** Findings should describe behaviours, not label people. 

4. **Recommendations must explain why they were generated** based on the user's responses. 

# **End of Part 3B.** 

The next section ( **Part 3C** ) will complete the engine by covering **Sleep, Activity, Stress, Energy, Confidence, and Social Support** , after which we'll have the full clinical logic for all 25 specialist questions. 

Perfect. This completes the **25-question clinical logic** . 

# **Assessment #1 – Weight Management Clinical Specification v1.0** 

# **Part 3C – Clinical Logic Mapping (Questions 17–25)** 

# **Objective** 

This section evaluates the user's recovery, movement, stress, confidence, and support system. 

Unlike nutrition, these questions **rarely determine weight directly** , but they strongly influence whether a person can successfully maintain healthy habits over time. 

# **Pillar** 

# **Physical Activity, Recovery & Behaviour** 

Weight = **50%** 

Split internally: 

- Activity → 25% 

- Recovery → 15% 

- Behaviour & Mindset → 10% 

# **Q17** 

# **sleep_hours** 

# **<5 Hours** 

Evidence 

VERY_SHORT_SLEEP 

Finding 

SLEEP_DEPRIVATION 

Severity 

High 

Deduction 

-20 

# **5–6 Hours** 

Finding 

INADEQUATE_SLEEP 

Severity 

Medium 

Deduction 

-10 

# **6–7 Hours** 

Finding 

BORDERLINE_SLEEP 

Severity 

Low 

Deduction 

-5 

# **7–8 Hours** 

Ideal 

0 

# **>8 Hours** 

No deduction 

Flag only for context. 

# **Engine Rule** 

Sleep duration alone should never create a critical finding. 

Sleep Quality (Q18) determines confidence. 

# **Q18** 

# **sleep_quality** 

Excellent 

↓ 

0 

Good 

↓ 

0 

Fair 

↓ 

Finding 

SUBOPTIMAL_SLEEP 

Deduction 

-5 

Poor 

↓ 

Finding 

POOR_SLEEP_QUALITY 

Deduction 

-10 

Very Poor 

↓ 

Finding 

SEVERE_SLEEP_DISRUPTION 

Deduction 

-15 

Synergy 

Poor Sleep 

 

High Stress 

# ↓ 

Recovery Risk ↑ 

Poor Sleep 

##  

Late Eating 

# ↓ 

Sleep Hygiene Finding 

Poor Sleep 

##  

Daily Cravings 

# ↓ 

Appetite Regulation Risk 

# **Q19** 

# **sitting_hours** 

<4 

↓ 

Ideal 

0 

4–6 

↓ 

0 

6–8 

↓ 

Finding 

# MODERATE_SEDENTARY_TIME 

Deduction 

-5 

8–10 

↓ 

Finding 

HIGH_SEDENTARY_BEHAVIOUR 

Deduction 

-10 

10 

↓ 

Finding 

VERY_HIGH_SEDENTARY_BEHAVIOUR 

Deduction 

-15 

Important 

If Daily Steps are high, 

reduce severity. 

# **Q20** 

# **daily_steps** 

<3000 

↓ 

Finding 

VERY_LOW_DAILY_MOVEMENT 

Severity 

High 

Deduction 

-20 

3000–5999 

↓ 

Finding 

LOW_DAILY_MOVEMENT 

Deduction 

-12 

6000–7999 

↓ 

Finding 

MODERATE_DAILY_MOVEMENT 

Deduction 

-5 

8000–9999 

↓ 

Good 

0 

10000+ 

↓ 

Excellent 

0 

Positive Evidence 

ACTIVE_LIFESTYLE 

# **Q21** 

**planned_exercise** 

Never 

↓ 

Finding 

NO_STRUCTURED_EXERCISE 

Deduction 

-15 

1–2 

↓ 

Finding 

LIMITED_EXERCISE 

Deduction 

-8 

3–4 

↓ 

Ideal 

0 

5+ 

↓ 

Excellent 

0 

# Important 

Exercise should not completely offset poor daily movement. 

Steps and exercise are evaluated independently. 

# **Q22** 

**stress_level** 

Very Low 

↓ 

0 

Low 

↓ 

0 

Moderate 

↓ 

Finding 

# MODERATE_STRESS 

Deduction 

# -3 

High 

↓ 

Finding 

HIGH_STRESS 

Deduction 

-10 

Very High 

↓ 

Finding 

CHRONIC_STRESS 

Deduction 

-15 

Synergy 

Stress 

 

Poor Sleep 

↓ 

Recovery Risk 

Stress 

 

Emotional Eating 

↓ 

Behavioural Risk 

Stress 

 

Cravings 

↓ 

Higher Appetite Risk 

# **Q23** 

# **energy_level** 

Very Low 

↓ 

Finding 

LOW_DAILY_ENERGY 

Deduction 

-15 

Low 

↓ 

Finding 

REDUCED_ENERGY 

Deduction 

-8 

Moderate 

↓ 

-2 

Good 

↓ 

0 

Excellent 

↓ 

Positive Evidence 

GOOD_VITALITY 

Important 

Energy is a supporting indicator. 

Never diagnose fatigue. 

# **Q24** 

# **confidence** 

Scale 

1–10 

1–3 

↓ 

Finding 

LOW_SELF_CONFIDENCE 

Deduction 

0 

Priority 

Increase coaching support. 

4–6 

↓ 

Finding 

MODERATE_SELF_CONFIDENCE 

No deduction. 

7–10 

↓ 

Positive Evidence 

HIGH_READINESS 

Important 

Confidence should NEVER reduce the health score. 

It changes coaching style. 

# **Q25** 

# **support_system** 

Strong Support 

↓ 

Positive Evidence 

GOOD_SUPPORT_SYSTEM 

Some Support 

↓ 

Neutral 

Little Support 

↓ 

Finding 

LIMITED_SUPPORT 

No deduction 

Recommendation 

Accountability strategies. 

No Support 

↓ 

Finding 

NO_SUPPORT_SYSTEM 

No deduction 

Priority 

Behaviour Coaching 

Important 

Support system influences long-term adherence, not current health. 

Never reduce health score because someone lacks support. 

# **Score Summary (Questions 17–25)** 

|**Queston**|**Maximum Deducton**|
|---|---|
|Sleep Duraton|20|
|Sleep Quality|15|
|Sitng Hours|15|
|Daily Steps|20|
|Planned Exercise|15|
|Stress|15|
|Energy|15|
|Confdence|0|



# **Question** 

# **Maximum Deduction** 

Support 0 

Maximum Behaviour Deduction 

115 Points 

The **Score Validator** must normalize deductions to avoid double-penalizing closely related behaviours. For example, poor sleep duration and poor sleep quality should reinforce the confidence of a sleep-related finding more than simply adding both penalties at full weight. 

# **Knowledge Created** 

# **Evidence** 

- ACTIVE_LIFESTYLE 

- GOOD_VITALITY 

- HIGH_READINESS 

- GOOD_SUPPORT_SYSTEM 

# **Findings** 

- SLEEP_DEPRIVATION 

- INADEQUATE_SLEEP 

- BORDERLINE_SLEEP 

- SUBOPTIMAL_SLEEP 

- POOR_SLEEP_QUALITY 

- SEVERE_SLEEP_DISRUPTION 

- MODERATE_SEDENTARY_TIME 

- HIGH_SEDENTARY_BEHAVIOUR 

- VERY_HIGH_SEDENTARY_BEHAVIOUR 

- VERY_LOW_DAILY_MOVEMENT 

- LOW_DAILY_MOVEMENT 

- MODERATE_DAILY_MOVEMENT 

- NO_STRUCTURED_EXERCISE 

- LIMITED_EXERCISE 

- MODERATE_STRESS 

- HIGH_STRESS 

- CHRONIC_STRESS 

- LOW_DAILY_ENERGY 

- REDUCED_ENERGY 

- LOW_SELF_CONFIDENCE 

- MODERATE_SELF_CONFIDENCE 

- LIMITED_SUPPORT 

- NO_SUPPORT_SYSTEM 

# **Recommendations** 

- Improve Sleep Routine 

- Increase Daily Movement 

- Build Exercise Consistency 

- Stress Management Practices 

- Energy Recovery Strategies 

- Behaviour Coaching 

- Accountability & Support Planning 

# **End of Part 3C** 

# ✅ **Part 3 is now complete.** 

At this point, every one of the **25 specialist questions** has: 

- Clinical purpose 

- Evidence generation 

- Finding mapping 

- Severity logic 

- Score contribution 

- Recommendation triggers 

- Synergy hooks 

- Confidence rules 

- Engine behaviour 

The next section, **Part 3D – Synergy Rules** , is where the Clinical Intelligence Engine starts combining these findings to create truly personalized and explainable outputs instead of treating each answer in isolation. This is one of the biggest differentiators for WelliQo. 

Perfect. **Part 3D is where WelliQo stops being a questionnaire and becomes an intelligence engine.** 

This is probably the most valuable section of the entire specification. 

# **Assessment #1 – Weight Management Clinical Specification v1.0** 

# **Part 3D – Clinical Synergy Intelligence Engine** 

# **Objective** 

Individual answers rarely explain a person's weight challenges on their own. The engine must identify **patterns of related behaviours** and generate higher-confidence findings based on combinations of evidence. 

# **Important principles:** 

- Synergy should primarily increase **confidence** and **clinical priority** , not endlessly stack score deductions. 

- Related findings should be merged into a single, clearer explanation where appropriate. 

- Users should receive a few meaningful insights rather than a long list of disconnected findings. 

# **Synergy Confidence Levels** 

**Supporting Evidence Confidence** 

Single indicator 60% Two related indicators 75% 

Three related indicators 90% 

Four or more indicators 95% (Maximum) 

Confidence must never reach 100%. 

# **SYNERGY GROUP 1 – Positive Energy Balance** 

# **Required Indicators (choose any 3 or more)** 

- Large Portion Sizes 

- Frequent Eating Out 

- Sugary Drinks 

- Frequent Snacking 

- Continuous Grazing 

- Late Eating 

- Very Low Daily Movement 

# **Generate** 

Finding ID 

POSITIVE_ENERGY_BALANCE_PATTERN 

Severity 

High 

Confidence 

90–95% 

Priority 

Very High 

Explanation 

Your responses suggest several daily habits that may be causing you to consume more energy than you consistently burn. Rather than one single behaviour, it is the combination of these habits that is likely contributing to weight gain. 

Recommendation Priority 

1 

# **SYNERGY GROUP 2 – Recovery Deficit** 

Indicators 

- Poor Sleep Duration 

- Poor Sleep Quality 

- High Stress 

- Low Daily Energy 

Generate 

RECOVERY_DEFICIT_PATTERN 

Severity 

High 

Confidence 

90% 

Explanation 

Your recovery may not be fully supporting your health goals. Improving sleep quality and managing stress could make healthy eating and regular activity easier to maintain. 

# **SYNERGY GROUP 3 – Sedentary Lifestyle** 

Indicators 

- Sitting >8 Hours 

- Less than 6,000 Steps 

- No Planned Exercise 

# Generate 

SEDENTARY_LIFESTYLE_PATTERN 

Severity 

High 

Confidence 

90% 

Explanation 

Your activity pattern suggests prolonged sitting combined with limited movement and exercise. Increasing daily movement may provide meaningful health benefits even before significant weight loss occurs. 

# **SYNERGY GROUP 4 – Emotional Eating Pattern** 

Indicators 

- Emotional Eating 

- High Stress 

- Frequent Cravings 

- Late-Night Cravings 

Generate 

EMOTIONAL_EATING_PATTERN 

Severity 

High 

Confidence 

95% 

Explanation 

Your responses suggest that emotions and stress may sometimes influence your eating decisions. Addressing these triggers may help improve long-term consistency. 

# **SYNERGY GROUP 5 – Irregular Eating Pattern** 

# Indicators 

- Breakfast Skipping 

- 1–2 Meals 

- Late Eating 

- Frequent Snacking 

Generate 

IRREGULAR_EATING_PATTERN 

Severity 

Medium 

Confidence 

85% 

Explanation 

Your meal timing appears inconsistent. Creating a more regular eating routine may improve hunger control and make healthy choices easier. 

# **SYNERGY GROUP 6 – Weight Cycling Risk** 

Indicators 

- More than 5 Previous Attempts 

- Large Weight Fluctuations 

- Unrealistic Timeline 

Generate 

WEIGHT_CYCLING_PATTERN 

Severity 

High 

Confidence 

95% 

Explanation 

Your history suggests repeated attempts to change weight. Focusing on sustainable habits rather than rapid results may improve long-term success. 

# **SYNERGY GROUP 7 – Low Behaviour Readiness** 

Indicators 

- Confidence ≤3 

- No Support System 

- Motivation selected as Biggest Obstacle 

Generate 

LOW_BEHAVIOUR_READINESS 

Severity 

Medium 

Confidence 

85% 

Priority 

Behaviour Coaching 

Important Rule 

This **must not reduce the health score** . 

It changes coaching style, follow-up frequency, and encouragement. 

# **Protective (Positive) Synergies** 

The engine should also recognize strengths. 

# **Active Healthy Lifestyle** 

Indicators 

- ≥10,000 Steps 

- Exercise ≥3 Days/Week 

- Good Energy 

- Good Sleep 

Generate 

ACTIVE_HEALTHY_PATTERN 

This becomes the user's **"Biggest Win"** in the report. 

No deductions. 

# **Strong Recovery** 

Indicators 

- Good Sleep 

- Low Stress 

- Good Energy 

# Generate 

STRONG_RECOVERY_PATTERN 

Highlight this as a strength. 

# **Balanced Eating Pattern** 

Indicators 

- Moderate Portions 

- Rare Sugary Drinks 

- Rare Eating Out 

- Regular Meals 

# Generate 

BALANCED_NUTRITION_PATTERN 

Use as positive reinforcement. 

# **Duplicate Prevention Rules** 

If the engine creates: 

- HIGH_SUGAR_BEVERAGES 

- LARGE_PORTIONS 

- LATE_EATING 

- POSITIVE_ENERGY_BALANCE_PATTERN 

The report should **prioritize the pattern** and summarize the individual findings underneath it, rather than presenting four unrelated problems. 

The goal is a report that feels insightful, not repetitive. 

# **Priority Ranking** 

Every finding receives a priority score. 

Suggested order: 

1. Critical clinical risks 

2. High-confidence synergy patterns 

3. Individual high-severity findings 

4. Moderate findings 

5. Low findings 

6. Positive findings 

Show only the most relevant findings first to avoid overwhelming the user. 

# **Engine Rules** 

1. A synergy finding **never replaces** the underlying evidence. It summarizes it. 

2. Confidence increases with corroborating evidence; score penalties should not simply multiply. 

3. Positive behaviours should be recognized, not just problems. 

4. The report should surface **3 primary priorities** and **up to 5 supporting findings** , not every possible issue. 

# **Knowledge Created** 

# **Synergy Findings** 

- POSITIVE_ENERGY_BALANCE_PATTERN 

- RECOVERY_DEFICIT_PATTERN 

- SEDENTARY_LIFESTYLE_PATTERN 

- EMOTIONAL_EATING_PATTERN 

- IRREGULAR_EATING_PATTERN 

- WEIGHT_CYCLING_PATTERN 

- LOW_BEHAVIOUR_READINESS 

- ACTIVE_HEALTHY_PATTERN 

- STRONG_RECOVERY_PATTERN 

- BALANCED_NUTRITION_PATTERN 

# **End of Part 3D** 

This completes the **Synergy Intelligence Layer** . 

The next section, **Part 3E – Clinical Score Engine** , will define **how all evidence, findings, and synergy are combined into a fair, explainable, and clinically believable overall score** , ensuring users are neither unfairly penalized nor given misleadingly high scores. This is where the final wellness score becomes trustworthy rather than just a sum of deductions. 

Excellent. This is the **heart** of the Clinical Intelligence Engine. 

One thing though—I want to improve what we originally planned. 

Most wellness apps do: 

100 

↓ 

Minus deductions 

↓ 

Final Score 

- ✅ That's too simplistic. 

I want WelliQo to have a **Clinical Score Engine** . 

# **Assessment #1 – Weight Management Clinical Specification v1.0** 

# **Part 3E – Clinical Score Engine** 

# **Objective** 

The Wellness Score must be: 

- Clinically believable 

- Explainable 

- Fair 

- Consistent 

- Difficult to "game" 

- Driven by multiple health domains rather than a single behaviour 

The score should reflect **overall lifestyle quality** , not just body weight. 

# **Core Philosophy** 

The score answers one question: 

# **"How well do your current daily habits support achieving and maintaining a healthy body weight?"** 

It is **NOT** : 

- A diagnosis 

- A BMI score 

- A body-fat score 

- A calorie score 

It is a behavioural wellness score. 

# **Stage 1 — Pillar Scores** 

Each pillar is scored independently. 

|**Pillar**|**Weight**|
|---|---|
|Goal & Weight History|15%|
|Nutriton & Eatng Behaviour|35%|
|Physical Actvity|25%|
|Recovery (Sleep & Stress)|15%|
|Behaviour & Readiness|10%|
|Each pillar begins at**100**.||



Only that pillar's questions affect its score. 

Example: 

Nutrition 

100 

↓ 

Sugary Drinks 

↓ 

Portion Size 

↓ 

Late Eating 

↓ 

Snacking 

↓ 

Nutrition Score = 72 

# **Stage 2 — Deduction Rules** 

Each answer carries a deduction based on **clinical impact** . Suggested ranges: 

# **Impact Deduction** 

Minimal 0–3 Mild 4–7 

Moderate 8–12 

High 13–18 

Very High 19–25 

No single answer should deduct more than **25 points** . 

# **Stage 3 — Confidence Adjustment** 

The score should not punish uncertain information. 

Example: 

If the user selects: 

- Unsure 

- Don't Know 

The engine should: 

- slightly reduce confidence 

- request follow-up in future assessments 

# **Do not heavily reduce the score.** 

Unknown ≠ unhealthy. 

# **Stage 4 — Synergy Validation** 

Before final scoring: 

Run all synergy rules. 

If multiple findings describe the same behaviour: 

Late Eating 

+ 

Late Night Cravings 

+ 

Large Portions 

Do **not** 

- -15 

- -12 

- -15 

- = -42 

Instead 

Create 

Positive Energy Balance Pattern 

↓ 

Increase Confidence 

↓ 

Increase Priority 

↓ 

Apply Synergy Modifier 

Maximum synergy adjustment: 

# **±10 points** 

This prevents double penalties. 

# **Stage 5 — Clinical Validator** 

Run validation. 

Rules: 

# **Rule 1** 

Healthy behaviours must not receive poor scores. 

Example: 

Healthy BMI 

Good Sleep 

Good Activity 

Healthy Eating 

↓ 

Score 

Must exceed 85 

# **Rule 2** 

Multiple major risk behaviours cannot receive excellent scores. 

Example: Sugary Drinks Daily 

No Exercise 

Very Poor Sleep 

Large Portions 

↓ 

Score 

Must not exceed 70 

# **Rule 3** 

One poor answer should never destroy the score. 

Example: Good lifestyle 

↓ 

One sugary drink answer 

↓ 

Still Good Score 

# **Rule 4** 

Positive behaviour matters. 

Healthy behaviours improve pillar scores and help offset minor weaknesses. 

# **Stage 6 — Final Wellness Score** 

Formula 

Final Score 

= 

Weighted Average 

of 

Validated Pillar Scores 

+ 

Synergy Adjustment 

Clamp: 

Minimum 

0 

Maximum 

100 

# **Score Interpretation** 

# **Score Meaning** 

- 96–100 Outstanding Lifestyle 

- 90–95 Excellent Lifestyle 

- 80–89 Good Lifestyle 

- 70–79 Fair – Improvement Needed 

- 60–69 Increased Lifestyle Risk 

- 40–59 High Lifestyle Risk 

Below 40 Immediate Lifestyle Attention Recommended 

Avoid words like: 

- Bad 

- Failure 

- Poor Person 

Describe behaviours, never judge the user. 

# **Pillar Interpretation** 

Each pillar also receives a rating. 

Example: 

Nutrition 

92 

↓ 

Excellent 

Activity 

68 

↓ 

Needs Improvement 

Recovery 

81 

↓ 

Good 

Behaviour 

74 

↓ 

Fair 

The report explains each one. 

# **Biggest Win** 

Highest pillar 

↓ 

Becomes 

# **Your Biggest Strength** 

Example: 

"Your recovery habits are already supporting your long-term health. Maintaining this strength will make future improvements easier." 

# **Biggest Opportunity** 

Lowest pillar 

↓ 

Becomes 

# **Your Biggest Opportunity** 

Example: 

"Improving your daily nutrition habits is likely to have the greatest impact on your weightmanagement journey." 

# **Confidence Score** 

The engine should also calculate an internal confidence value. 

Not shown to the user (initially). 

Based on: 

- Complete answers 

- Evidence quality 

- Number of supporting findings 

- Conflicting responses 

Example: 

Assessment Confidence 

92% 

This prepares WelliQo for future AI explanations. 

# **Impossible Score Protection** 

The validator must reject impossible outcomes. 

# Examples: 

Excellent Lifestyle 

+ 

Healthy BMI 

↓ 

38 

✅ Reject 

Daily Sugary Drinks 

No Exercise 

Very Poor Sleep 

↓ 

96 

✅ Reject 

Everything Healthy 

↓ 

100 

Accept 

Everything Poor 

↓ 

5 

# Accept 

# **Engine Priority** 

The report is **not sorted by deductions** . 

Priority order: 

1. Critical clinical patterns 

2. High-confidence synergy findings 

3. Largest improvement opportunity 

4. Positive strengths 

5. Supporting findings 

This ensures the report tells a meaningful story rather than presenting a random list of deductions. 

# **Validation Checklist** 

Before returning a score: 

- Every pillar calculated independently. 

- Every finding supported by evidence. 

- Synergy rules applied. 

- Duplicate deductions normalized. 

- Impossible score validation passed. 

- Score clamped to 0–100. 

- Biggest Win identified. 

- Biggest Opportunity identified. 

- Assessment confidence calculated. 

# **End of Part 3E** 

# **✅ Part 3 Complete** 

At this point, Weight Management has: 

- Clinical reasoning 

- Evidence mapping 

- Behaviour analysis 

- Synergy engine 

- Explainable findings 

- Clinically validated scoring 

- Personalized prioritization 

# **This is now a true Clinical Intelligence Engine rather than a questionnaire with deductions.** 

Perfect. Now we move to the **mathematical heart** of Weight Management. 

This is where every metric shown to the user becomes **traceable, explainable, and reusable** . 

# **Assessment #1 – Weight Management Clinical Specification v1.0** 

# **Part 4 – Formula & Calculation Registry** 

# **Objective** 

This section defines every mathematical calculation required by the Weight Management assessment. Each formula must be transparent, reproducible, and based on accepted wellness or nutrition principles where applicable. The engine should never display a calculated value that cannot be explained. 

# **General Formula Rules** 

1. Every formula must have: 

   - Formula ID 

   - Formula Name 

   - Purpose 

   - Inputs 

   - Formula 

   - Output Unit 

   - Validation Rules 

   - Assumptions 

   - Limitations 

   - Reusable Status 

2. Every calculated metric must include: 

   - Current Value 

   - Ideal Value (if applicable) 

   - Difference 

   - Interpretation 

3. Round values for readability: 

   - Weight, BMI, Body Fat: **1 decimal place** 

   - Calories: whole number 

   - Protein: whole number 

   - Water: one decimal place (litres) 

# **Formula 1 – Body Mass Index (BMI)** 

# **Formula ID** 

FORMULA_BMI 

# **Purpose** 

Estimate body weight relative to height. 

# **Inputs** 

- Height (m) 

- Weight (kg) 

# **Formula** 

BMI = Weight ÷ Height² 

# **Output** 

kg/m² 

# **Categories** 

**BMI Classification** 

<18.5 Underweight 

18.5–24.9 Healthy Weight 

25.0–29.9 Overweight ≥30 Obesity 

# **Notes** 

BMI is a screening tool, not a measure of body fat or health by itself. 

Reusable: ✅ 

# **Formula 2 – Healthy Weight Range** 

# **Formula ID** 

FORMULA_HEALTHY_WEIGHT_RANGE 

# **Purpose** 

Estimate a healthy weight range using BMI 18.5–24.9. 

# **Inputs** 

 Height 

# **Formula** 

Minimum Healthy Weight = 18.5 × Height² 

Maximum Healthy Weight = 24.9 × Height² 

# **Output** 

kg 

Reusable: ✅ 

# **Formula 3 – Target Weight Difference** 

# **Formula ID** 

FORMULA_TARGET_WEIGHT_DIFF 

# **Formula** 

Current Weight − Target Weight 

# **Output** 

kg 

Purpose 

Determine the amount of change required and support timeline estimation. Reusable: Assessment-specific 

# **Formula 4 – Estimated Body Fat %** 

# **Formula ID** 

FORMULA_BODY_FAT_ESTIMATE 

# **Purpose** 

Estimate body fat percentage when direct measurement is unavailable. 

# **Inputs** 

- BMI 

- Age 

- Sex 

# **Formula** 

Use the currently approved estimation model implemented in the engine (configurable for future updates). 

# **Output** 

% 

# **Important** 

Clearly indicate this is an **estimate** , not a direct measurement. 

Reusable: ✅ 

# **Formula 5 – Basal Metabolic Rate (BMR)** 

# **Formula ID** 

FORMULA_BMR 

# **Purpose** 

Estimate daily energy required at complete rest. 

# **Inputs** 

- Age 

- Sex 

- Height 

- Weight 

# **Formula** 

Use the **Mifflin–St Jeor equation** . 

# **Output** 

kcal/day 

Reusable: ✅ 

# **Formula 6 – Total Daily Energy Expenditure (TDEE)** 

# **Formula ID** 

FORMULA_TDEE 

# **Purpose** 

Estimate daily energy expenditure based on activity. 

# **Inputs** 

- BMR 

- Activity Level 

# **Activity Multipliers** 

**Activity Multiplier** Sedentary 1.20 Lightly Active 1.375 Moderately Active 1.55 Very Active 1.725 

# **Formula** 

TDEE = BMR × Activity Multiplier 

Reusable: ✅ 

# **Formula 7 – Daily Calorie Target** 

# **Formula ID** 

FORMULA_CALORIE_TARGET 

# **Purpose** 

Provide a personalised calorie target based on the selected weight goal. 

# **Logic** 

Lose Weight → Moderate calorie deficit 

Maintain → Approximately TDEE 

Gain Healthy Weight → Moderate calorie surplus 

The exact adjustment should be configurable rather than hardcoded. 

# **Output** 

kcal/day 

Reusable: Assessment-specific 

# **Formula 8 – Daily Protein Goal** 

# **Formula ID** 

FORMULA_PROTEIN_TARGET 

# **Purpose** 

Estimate daily protein needs based on the user's goal. 

# **Inputs** 

- Weight 

- Goal 

# **Logic** 

General Wellness → ~1.0 g/kg 

Weight Loss → ~1.6–2.0 g/kg 

Muscle Building → ~1.6–2.2 g/kg 

Weight Gain → ~1.2–1.6 g/kg 

The exact value within these ranges should be configurable and consistently applied. 

# **Output** 

grams/day Reusable: ✅ 

# **Formula 9 – Daily Water Goal** 

# **Formula ID** 

FORMULA_WATER_TARGET 

# **Purpose** 

Estimate daily hydration needs. 

# **Inputs** 

- Weight 

# **Formula** 

Approximately **35 mL × body weight (kg)** 

# **Output** 

Litres/day 

# **Adjustment Notes** 

May increase based on: 

- High activity 

- Hot climate 

- Heavy sweating 

These adjustments should be configurable for future assessments. 

Reusable: ✅ 

# **Formula 10 – Healthy Weight Progress Timeline** 

# **Formula ID** 

FORMULA_PROGRESS_TIMELINE 

# **Purpose** 

Estimate a realistic timeframe based on target weight difference. 

# **Inputs** 

- Current Weight 

- Target Weight 

- Selected Goal 

# **Logic** 

The engine should estimate a realistic timeline using conservative lifestyle-based progress assumptions rather than promising rapid results. 

# **Output** 

Estimated duration range 

Examples: 

- Small change 

- Moderate change 

- Significant change 

Avoid exact promises. 

Reusable: Assessment-specific 

# **Formula 11 – Overall Weight Risk Indicator** 

# **Formula ID** 

FORMULA_WEIGHT_RISK 

# **Purpose** 

Combine multiple indicators into an internal risk classification. 

# **Inputs** 

- BMI 

- Body Fat Estimate 

- Activity 

- Nutrition Score 

- Recovery Score 

# **Output** 

- Low 

- Moderate 

- High 

This supports report prioritisation and is not displayed as a medical diagnosis. 

Reusable: Assessment-specific 

# **Formula Validation Rules** 

Every calculation must pass: 

- Required inputs present 

- Units validated 

- Numeric ranges checked 

- Missing values handled gracefully 

- No divide-by-zero errors 

- Consistent rounding 

If a calculation cannot be completed due to insufficient information, the engine should omit the metric and explain why instead of displaying incorrect data. 

# **Formula Audit Requirements** 

Each calculated metric should internally retain: 

- Formula ID 

- Input values 

- Calculated result 

- Timestamp 

- Engine version 

This enables future debugging and auditability. 

# **Metric Card Mapping** 

|**Metric Card**|**Formula**|
|---|---|
|BMI|FORMULA_BMI|
|Healthy Weight Range|FORMULA_HEALTHY_WEIGHT_RANGE|
|Estmated Body Fat|FORMULA_BODY_FAT_ESTIMATE|
|BMR|FORMULA_BMR|
|TDEE|FORMULA_TDEE|
|Daily Calories|FORMULA_CALORIE_TARGET|
|Daily Protein|FORMULA_PROTEIN_TARGET|
|Daily Water|FORMULA_WATER_TARGET|
|Progress Timeline|FORMULA_PROGRESS_TIMELINE|



# **Design Principles** 

- Never display calculations without context. 

- Clearly distinguish measured values from estimates. 

- Keep formulas configurable where future assessments may require different assumptions. 

- Prefer realistic guidance over optimistic promises. 

- Ensure every formula is reusable unless it is genuinely assessment-specific. 

# **End of Part 4** 

# **Status after Part 4** 

- ✅ Assessment Foundation 

- ✅ Master Question Bank 

- ✅ Clinical Logic 

- ✅ Synergy Engine 

- ✅ Clinical Score Engine 

- ✅ Formula & Calculation Registry 

The next major section ( **Part 5 – Clinical Findings Library** ) is where we define the complete catalogue of findings that the engine can generate, including IDs, severity, evidence requirements, explanations, and links to recommendations. This becomes one of the core reusable assets for future assessments. 

Excellent. This is probably the **second most valuable part** after the Question Logic. 

From this point onward, **findings become the language of the engine.** 

Everything eventually becomes: 

Answers 

↓ 

Evidence 

↓ 

Clinical Findings 

↓ 

Recommendations 

↓ 

Report 

# **Assessment #1 – Weight Management Clinical Specification v1.0** 

**Part 5 – Clinical Findings Library** 

# **Objective** 

Clinical Findings are the **interpreted health insights** generated by the Clinical Intelligence Engine. A Finding is **not** a diagnosis. 

A Finding is a clinically explainable observation based on one or more pieces of supporting evidence. Every finding must answer: 

- What did we observe? 

- Why do we believe this? 

- How confident are we? 

- Why does it matter? 

- 

- What should the user do? 

**Finding Standard** 

Every finding MUST contain: Finding ID 

Title Category Severity Confidence Priority Evidence Required Clinical Explanation User Explanation Clinical Impact Recommendation IDs Contraindications Report Visibility 

Reusable 

# **Severity Levels** 

# **Level Meaning** 

INFO Educational LOW Minor Opportunity 

MEDIUM Lifestyle Concern 

HIGH Important Risk 

CRITICAL Immediate Lifestyle Attention CRITICAL ≠ Medical Emergency. 

Only indicates highest lifestyle priority. 

# **Confidence Scale** 

|**Evidence**|**Confdence**|
|---|---|
|Single Answer|60%|
|Two Supportng Answers|75%|
|Three Supportng Answers|90%|
|Four+ Supportng Answers|95%|
|Never show 100%.||



# **Priority Levels** 

Priority controls report order. 

# URGENT 

↓ 

HIGH 

↓ 

MEDIUM 

↓ 

LOW 

↓ 

INFO 

# **Finding Categories** 

Body Composition 

Nutrition 

Activity 

Recovery 

Behaviour 

Lifestyle 

Positive Pattern 

# **FINDING 1** 

# **ID** 

FINDING_OVERWEIGHT Category 

Body Composition 

Evidence 

BMI 

25–29.9 

Severity 

MEDIUM 

# Priority 

HIGH 

Clinical Explanation 

Current body weight is above the recommended healthy BMI range. 

User Explanation 

Your current weight is above the healthy range for your height. Gradual improvements in nutrition, movement, and recovery may help improve overall health. 

# Clinical Impact 

Higher long-term risk of metabolic complications if associated with unhealthy lifestyle behaviours. 

Recommendation 

- Healthy Weight Plan 

- Portion Awareness 

- Activity Increase 

Reusable 

YES 

# **FINDING 2** 

# **ID** 

FINDING_OBESITY 

Evidence 

BMI ≥30 

Severity 

HIGH 

Priority 

URGENT 

Recommendation 

Weight Reduction Strategy 

Lifestyle Coaching 

Movement Plan 

# **FINDING 3** 

# **ID** 

FINDING_UNDERWEIGHT 

Evidence 

BMI <18.5 

Severity 

MEDIUM 

Priority 

HIGH 

Recommendation 

Healthy Weight Gain Plan 

Protein Support 

Balanced Nutrition 

# **FINDING 4** 

# **ID** 

FINDING_EXCESS_BODY_FAT 

Evidence 

Estimated Body Fat 

Above Healthy Range 

Severity 

HIGH 

Explanation 

Estimated body fat is above the healthy range. Improving body composition—not simply reducing body weight—should be a primary focus. 

# **FINDING 5** 

# **ID** 

FINDING_POSITIVE_ENERGY_BALANCE 

Evidence 

Generated only by Synergy Engine 

Severity 

HIGH 

Priority 

URGENT 

Explanation 

Several daily habits suggest your overall energy intake may regularly exceed your energy expenditure. 

# **FINDING 6** 

# **ID** 

FINDING_LOW_PROTEIN_PATTERN 

Evidence 

Meal Pattern 

 

Food Quality 

 

Weight Goal 

Severity 

MEDIUM 

Explanation 

Your eating pattern may not consistently provide enough protein to support healthy weight management. 

# **FINDING 7** 

# **ID** 

FINDING_HIGH_SUGAR_INTAKE 

Evidence 

Sugary Drinks 

 

Snacking 

Severity 

MEDIUM Explanation 

Your responses suggest frequent intake of added sugars that may contribute to excess energy intake. 

# **FINDING 8** 

# **ID** 

FINDING_IRREGULAR_EATING 

Evidence 

Breakfast 

Meals 

Late Eating 

Severity 

MEDIUM 

Explanation 

Meal timing appears inconsistent throughout the day. 

# **FINDING 9** 

# **ID** 

FINDING_SEDENTARY_LIFESTYLE 

Evidence 

Steps 

Exercise Sitting Severity 

# HIGH 

Explanation 

Your daily movement appears below the level generally associated with good long-term health. 

# **FINDING 10** 

# **ID** 

FINDING_POOR_RECOVERY 

Evidence 

Sleep 

Stress 

Energy 

Severity 

HIGH 

Explanation 

Recovery habits may not currently support your weight-management goals. 

# **FINDING 11** 

# **ID** 

FINDING_HIGH_STRESS_PATTERN 

Evidence 

Stress 

Sleep 

Emotional Eating 

Severity 

MEDIUM 

Explanation 

Stress may be affecting both your lifestyle habits and consistency. 

# **FINDING 12** 

# **ID** 

FINDING_EMOTIONAL_EATING_PATTERN 

Evidence 

Emotional Eating Cravings Stress 

Severity HIGH 

Explanation 

Some eating behaviours appear influenced by emotional triggers rather than physical hunger. 

# **FINDING 13** 

# **ID** 

FINDING_WEIGHT_CYCLING Evidence 

Repeated Attempts 

Weight History Severity 

HIGH 

Explanation 

Your responses suggest repeated cycles of losing and regaining weight. 

# **FINDING 14** 

# **ID** 

FINDING_UNREALISTIC_EXPECTATION 

Evidence 

Timeline 

Target Weight 

Severity MEDIUM 

Explanation 

Your desired timeline may not align with a gradual, sustainable lifestyle approach. 

# **FINDING 15** 

# **ID** 

FINDING_LOW_BEHAVIOUR_READINESS 

Evidence 

Confidence 

Support 

Obstacle 

Severity 

LOW 

Explanation 

You may benefit from smaller, more achievable habit changes before pursuing larger goals. 

# **Positive Findings** 

The engine should celebrate strengths. 

# **ID** 

FINDING_ACTIVE_LIFESTYLE 

Evidence 

High Steps 

Exercise 

Good Energy 

Purpose 

Highlight positive behaviour. 

# **ID** 

FINDING_BALANCED_NUTRITION 

Evidence 

Meals 

Portions Low Sugar Purpose 

Reinforce healthy habits. 

# **ID** 

FINDING_STRONG_RECOVERY 

Evidence 

Sleep 

Stress 

Energy 

Purpose 

Positive reinforcement. 

# **ID** 

FINDING_HIGH_READINESS 

Evidence 

Confidence 

Support 

Purpose 

Encourage faster progress. 

# **Engine Rules** 

# **Rule 1** 

A finding NEVER exists without evidence. 

# **Rule 2** 

A recommendation NEVER exists without a finding. 

# **Rule 3** 

Duplicate findings must merge. 

Example 

Poor Sleep 

+ 

Stress 

+ 

Low Energy 

↓ 

One 

Recovery Finding. 

# **Rule 4** 

Positive findings are mandatory. 

Every report should include at least 

# **one strength** 

whenever supported by the evidence. 

# **Rule 5** 

Never shame. 

Bad: 

"You are obese." 

Good: 

"Your current measurements suggest your body weight is above the healthy range." 

# **Rule 6** 

Maximum visible findings 

Primary 

3 

Secondary 

5 

Positive 

2 

Hide everything else unless expanded. 

# **Finding Flow** 

Questions 

↓ 

Evidence 

↓ 

Finding 

↓ 

Confidence 

↓ 

Severity 

↓ 

Priority 

↓ 

Recommendation 

↓ 

# Report 

# **Validation** 

Every Finding must satisfy: 

- ✅ Has ID 

- ✅ Has Evidence 

- ✅ Has Severity 

- ✅ Has Confidence 

- ✅ Has Recommendation 

- ✅ Has Explanation 

- ✅ Has Priority 

Otherwise 

Reject Finding. 

# **Knowledge Extraction** 

Reusable: 

YES 

Every Finding defined here should become reusable for future assessments whenever appropriate, avoiding duplication while allowing assessment-specific thresholds or triggers if needed. 

# **End of Part 5** 

This completes the **Clinical Findings Library** for Weight Management. 

At this stage, the engine has: 

- Assessment structure 

- Questions 

- Clinical logic 

- Synergy rules 

- Scoring 

- Formulas 

- A standardized library of findings 

The next section ( **Part 6 – Recommendation Library** ) will connect every finding to actionable, personalized guidance, ensuring the report tells users not just _what_ was observed, but _what to do next and why_ . 

Excellent. This is where WelliQo becomes a **coach instead of a scorecard** . 

Most wellness apps stop at "You have a problem." 

WelliQo must answer: 

**"Exactly what should I do next, why should I do it, what benefit can I expect, and how long might it take?"** 

# **Assessment #1 – Weight Management Clinical Specification v1.0** 

# **Part 6 – Clinical Recommendation Library** 

# **Objective** 

Recommendations are personalized lifestyle actions generated from one or more Clinical Findings. A recommendation is **not** generic advice. 

Every recommendation must be directly traceable back to evidence collected during the assessment. 

The user should immediately understand: 

- Why they are receiving this recommendation 

- Which habits triggered it 

- What action to take 

- What benefits to expect 

- When they may notice improvement 

# **Recommendation Standard** 

Every recommendation MUST contain: 

Recommendation ID 

# Title 

Category 

Priority 

Triggered By Findings 

Supporting Evidence 

Recommendation Text 

Why This Matters 

Action Steps 

Expected Benefits 

Expected Timeline 

Contraindications 

Success Indicators 

Reusable 

# **Priority Levels** 

# **Priority Meaning** 

URGENT Highest impact HIGH Strongly Recommended MEDIUM Helpful LOW Educational 

# **Categories** 

Nutrition 

Movement 

Exercise 

Recovery 

Hydration 

Behaviour 

Lifestyle 

Mindset 

Education 

# **Recommendation 1** 

# **ID** 

REC_HEALTHY_WEIGHT_PLAN 

Category 

Lifestyle 

Priority 

URGENT 

Triggered By 

- FINDING_OVERWEIGHT 

- FINDING_OBESITY 

# **Recommendation** 

Focus on building sustainable daily habits rather than pursuing rapid weight loss. Gradual improvements are more likely to produce lasting results. 

# **Why This Matters** 

Healthy weight management is primarily achieved through consistent nutrition, regular movement, quality sleep, and behaviour change—not short-term restrictive diets. 

# **Action Steps** 

- Set realistic weekly goals 

- Monitor progress consistently 

- Build habits gradually 

- Prioritize long-term consistency 

# **Expected Benefits** 

- Sustainable weight change 

- Better energy 

- Improved metabolic health 

- Reduced weight regain risk 

# **Timeline** 

Visible improvements typically develop over weeks to months depending on consistency and individual circumstances. 

# **Success Indicators** 

- Consistent habits 

- Improved energy 

- Improved measurements 

- Better confidence 

# Reusable 

YES 

# **Recommendation 2** 

# **ID** 

REC_PORTION_AWARENESS 

Triggered By 

- LARGE_PORTIONS 

- POSITIVE_ENERGY_BALANCE_PATTERN 

Priority 

HIGH 

Recommendation 

Become more aware of portion sizes before changing the types of food you eat. Small reductions in portion size can meaningfully reduce excess energy intake without making meals feel restrictive. 

Expected Benefits 

- Improved satiety awareness 

- Better calorie control 

- Easier long-term adherence 

# **Recommendation 3** 

# **ID** 

REC_REDUCE_SUGARY_DRINKS 

Triggered By 

- HIGH_SUGAR_INTAKE 

Priority 

HIGH 

Recommendation 

Replace sugar-sweetened beverages with water or other low- or no-added-sugar options whenever practical. 

Expected Benefits 

- Reduced added sugar intake 

- Lower liquid calorie intake 

- Better hydration 

**Recommendation 4** 

# **ID** 

REC_REGULAR_MEALS 

Triggered By 

 IRREGULAR_EATING 

Priority 

HIGH 

Recommendation 

Develop a meal schedule that fits your lifestyle and helps reduce long gaps between eating occasions if those gaps contribute to overeating later in the day. 

# **Recommendation 5** 

# **ID** 

REC_ACTIVITY_PLAN 

Triggered By 

 SEDENTARY_LIFESTYLE 

Priority 

HIGH 

Recommendation 

Increase daily movement gradually. Small increases in walking, standing, and other routine activity can provide meaningful health benefits. 

Action Steps 

- Walk more frequently 

- Reduce prolonged sitting 

- Increase daily movement gradually 

# **Recommendation 6** 

# **ID** 

REC_EXERCISE_ROUTINE 

Triggered By 

- NO_STRUCTURED_EXERCISE 

Priority 

MEDIUM 

Recommendation 

Aim to build a regular exercise routine that is realistic for your schedule and fitness level. 

Important 

Consistency is more important than intensity when starting. 

# **Recommendation 7** 

# **ID** 

REC_SLEEP_RECOVERY 

Triggered By 

- POOR_RECOVERY 

Priority 

HIGH 

Recommendation 

Improving sleep duration and sleep quality may make healthy eating, activity, and recovery easier to maintain. 

Expected Benefits 

- Better recovery 

- Improved daytime energy 

- Improved consistency 

# **Recommendation 8** 

# **ID** 

REC_STRESS_MANAGEMENT 

Triggered By 

 HIGH_STRESS_PATTERN 

Priority 

MEDIUM 

Recommendation 

Identify practical strategies that help reduce or manage daily stress, as persistent stress can affect eating behaviours, recovery, and motivation. 

# **Recommendation 9** 

# **ID** 

REC_EMOTIONAL_EATING_SUPPORT 

Triggered By 

 EMOTIONAL_EATING_PATTERN 

Priority 

HIGH 

Recommendation 

Before eating, pause briefly and ask whether you are responding to physical hunger or an emotional trigger. Increasing awareness is often the first step toward changing the habit. 

Important 

Never imply blame. 

# **Recommendation 10** 

# **ID** 

REC_WEIGHT_CYCLING 

Triggered By 

 WEIGHT_CYCLING 

Priority 

HIGH 

Recommendation 

Rather than repeatedly starting over with restrictive plans, focus on creating routines that you can realistically maintain for months and years. 

# **Recommendation 11** 

# **ID** 

REC_REALISTIC_EXPECTATIONS 

Triggered By 

 UNREALISTIC_EXPECTATION 

Priority 

MEDIUM 

Recommendation 

Set milestones that prioritize healthy lifestyle improvements instead of rapid weight change. Sustainable progress is generally more maintainable. 

# **Recommendation 12** 

# **ID** 

REC_BEHAVIOUR_COACHING 

Triggered By 

 LOW_BEHAVIOUR_READINESS 

Priority 

MEDIUM 

Recommendation 

Start with one or two simple habits instead of trying to change everything at once. Early success often builds confidence for larger lifestyle changes. 

# **Positive Recommendations** 

These reinforce strengths rather than correcting problems. 

# **ID** 

REC_KEEP_GOING 

Triggered By 

- ACTIVE_HEALTHY_PATTERN 

Recommendation 

You already have several healthy habits supporting your goal. Focus on maintaining these strengths while improving one additional area at a time. 

# **ID** 

REC_RECOVERY_STRENGTH 

Triggered By 

- STRONG_RECOVERY 

Recommendation 

Your recovery habits appear to be a strength. Continue protecting your sleep and stress-management routines as you work toward your goals. 

# **ID** 

REC_BALANCED_NUTRITION 

Triggered By 

- BALANCED_NUTRITION 

Recommendation 

Your eating habits already include several positive behaviours. Continue building on this strong foundation rather than making unnecessary drastic changes. 

# **Recommendation Prioritisation** 

The engine should rank recommendations in this order: 

1. Urgent lifestyle priorities 

2. High-confidence synergy-based recommendations 

3. High-priority behaviour changes 

4. Positive reinforcement 

5. Educational suggestions 

Display a maximum of: 

- **3 Primary Recommendations** 

- **3 Supporting Recommendations** 

- **2 Positive Reinforcement Messages** 

This keeps the report focused and actionable. 

# **Recommendation Quality Rules** 

Every recommendation must: 

- Be evidence-based within the assessment. 

- Explain **why** it appears. 

- Be achievable. 

- Avoid fear-based messaging. 

- Avoid promising guaranteed outcomes. 

- Use encouraging, respectful language. 

- Match the user's identified goal where applicable. 

# **Validation Rules** 

Every recommendation must have: 

- A valid Recommendation ID 

- At least one triggering finding 

- A defined priority 

- A "Why This Matters" explanation 

- Practical action steps 

- Expected benefits 

- An expected timeline 

- Success indicators 

If any of these are missing, the recommendation should fail validation before release. 

# **Knowledge Extraction** 

All recommendations in this library should be reusable by future assessments whenever clinically appropriate. Assessment-specific wording may vary, but the underlying recommendation logic should be shared rather than duplicated. 

# **End of Part 6** 

At this stage, the Weight Management specification now includes: 

- ✅ Assessment Foundation 

- ✅ Question Bank 

- ✅ Clinical Logic 

- ✅ Synergy Engine 

- ✅ Clinical Score Engine 

- ✅ Formula Registry 

- ✅ Clinical Findings Library 

- ✅ Clinical Recommendation Library 

The next section, **Part 7 – Report Intelligence & Metric Cards** , will define exactly **what the user sees** , how findings become an engaging report, which metric cards are shown, how priorities are presented, and how the report explains itself in a way that builds trust rather than simply displaying numbers. 

Excellent. This is where everything we've built becomes visible to the user. 

**Part 7 does not define UI design.** It defines the **intelligence that the UI presents** . Whether your UI changes next month or next year, the report logic remains the same. 

# **Assessment #1 – Weight Management Clinical Specification v1.0** 

# **Part 7 – Report Intelligence & Metric Cards** 

# **Objective** 

The report should answer one question: 

**"If I spend only 3 minutes reading this report, what do I need to know and what should I do next?"** 

The report must: 

- Be personalized 

- Be encouraging 

- Explain every conclusion 

- Prioritize actions 

- Avoid information overload 

- Build trust 

# **Report Philosophy** 

The report is **not a medical report.** 

It is a **Lifestyle Intelligence Report.** 

It should: 

- Explain 

- Educate 

- Prioritize 

- Motivate 

Never frighten. 

Never shame. 

Never overwhelm. 

# **Report Structure** 

The report consists of **12 sections** displayed in the following order. 

# **Section 1** 

# **Overall Wellness Score** 

Display 

- Overall Score 

- Score Category 

- Short Explanation 

Example 82 / 100 

Good Lifestyle 

Your current lifestyle already supports several healthy habits. 

Improving just a few key behaviours could significantly enhance your long-term results. 

**Section 2** 

**Biggest Win** 

Always show ONE. 

Example 

🏆 Your Biggest Strength 

You maintain a good level of daily physical activity. 

This gives you a strong foundation for achieving your weight goal. 

Generated from: 

Highest pillar 

OR 

Positive synergy 

# **Section 3** 

# **Biggest Opportunity** 

Always show ONE. 

Example 

- ✅ Your Biggest Opportunity 

Reducing sugary drinks and improving meal timing could have the greatest impact on your progress. Generated from 

Lowest scoring pillar Highest priority finding 

# **Section 4** 

# **Your Health Snapshot** 

Display 

# **BMI** 

Current 

Ideal 

Interpretation 

# **Healthy Weight Range** 

Current 

Target 

Difference 

Interpretation 

# **Estimated Body Fat** 

Estimated 

Healthy Range 

Interpretation 

# **Daily Calories** 

Current Need 

Recommended Target 

# **Protein Goal** 

Daily grams 

Explanation 

# **Water Goal** 

Litres 

Explanation 

# **Progress Timeline** 

Estimated 

Conservative 

Lifestyle Based 

# Rule 

Never show raw numbers alone. 

Every metric needs 

a human explanation. 

# **Section 5** 

# **Pillar Performance** 

Display Each pillar independently. Example Nutrition 

72 Needs Improvement ━━━━━━━━━━━ Activity 88 Good ━━━━━━━━━━━━━━ Recovery 91 Excellent ━━━━━━━━━━━━━━━━ Rule Every pillar 

must include 

one sentence. 

Example 

Improving meal consistency may have the greatest impact on this pillar. 

# **Section 6** 

# **Clinical Findings** 

Show 

Maximum 

3 Primary Findings 

Example 

1. 

Positive Energy Balance Pattern 

Confidence 

94% 

Priority 

High 

↓ 

Explanation 

Rule 

Do not dump 15 findings. 

Prioritize. 

# **Section 7** 

# **Why You Received These Findings** 

This is the explainability section. 

Example 

We reached this conclusion because you reported: 

- ✓ Daily sugary drinks 

- ✓ Large portions 

- ✓ Frequent snacking 

✓ Low activity 

This builds trust. 

# **Section 8** 

# **Personalized Action Plan** 

Display 

Top 3 Recommendations 

Each contains 

# **Why** 

# **Action** 

# **Expected Benefit** 

# **Estimated Timeline** 

Example 

Reduce sugary drinks 

Why 

Liquid calories may be contributing to excess energy intake. 

Action 

Replace one sugary drink each day with water. 

Expected Benefit 

Lower calorie intake. 

Timeline 

2–4 weeks. 

# **Section 9** 

# **Nutrition Profile** 

Show 

Calories Protein 

Water 

Meal Structure 

Do NOT recommend brands. Do NOT recommend products. Only nutritional targets. 

Future 

Supplement suggestions can plug in here. 

# **Section 10** 

# **Progress Projection** 

Show 

30 Days 

# ↓ 

Expected early habit improvements 

# 60 Days 

↓ 

Expected behaviour improvements 

90 Days 

# ↓ 

Expected measurable lifestyle improvements 

180 Days 

↓ 

Long-term expectations 

Important 

Never promise weight loss. 

Always say 

"may" 

or 

"can contribute." 

# **Section 11** 

# **Positive Reinforcement** 

Always finish positively. 

Example 

You already have several healthy behaviours. 

Building on these strengths will usually produce better long-term results than trying to change everything at once. 

# **Section 12** 

# **Next Assessment Recommendation** 

Example 

Based on today's results, 

your next recommended assessment is 

✅ Lose Weight & Burn Fat 

because it provides deeper analysis of nutrition quality, 

fat loss behaviour, 

and calorie balance. 

Future assessments 

will link together. 

# **Metric Card Standard** 

Every metric card must contain: 

Metric Name 

Current Value 

Ideal Value 

Difference 

Clinical Meaning 

Priority 

Formula ID 

Example 

BMI 

Current 

28.4 Ideal 18.5–24.9 Difference +3.5 

Meaning 

Your BMI is above the healthy range for your height. 

Formula FORMULA_BMI 

# **Report Language Rules** 

Never say 

# ✅ 

"You are unhealthy." Instead ✅ "Your current habits suggest opportunities to improve your long-term health." 

Never say 

# ✅ 

"You failed." 

Instead 

✅ 

"Improving these areas could have the greatest impact." 

Never use fear. 

Never use shame. 

Never diagnose. 

# **Explainability Rule** 

Every score 

Every finding 

Every recommendation 

Every metric 

must answer WHY. 

If the report cannot explain 

WHY 

it should not display that item. 

# **Report Validation** 

Before rendering 

validate 

Overall Score Exists 

✓ 

Pillar Scores Exist 

✓ 

Biggest Win Exists 

✓ 

Biggest Opportunity Exists 

✓ 

Primary Findings ≤3 

✓ 

Recommendations ≤3 

✓ 

Metrics Validated 

✓ 

Formula References Exist 

✓ 

No Duplicate Findings 

✓ 

No Empty Sections 

✓ 

# **Report Flow** 

Assessment 

↓ 

Clinical Engine 

↓ 

Evidence 

↓ 

Findings 

↓ 

Recommendations 

↓ 

Report Builder 

↓ 

Final Report 

# **Future AI Ready** 

Every section should expose structured data. 

This will allow future AI features like: 

"Why did my nutrition score drop?" 

or 

"What changed compared to last month?" 

without redesigning the engine. 

Excellent. This is one of the most important architectural parts because it prevents WelliQo from becoming a messy project with duplicated logic. 

This section defines **what knowledge belongs in the reusable knowledge repository** versus **what stays inside an assessment** . 

# **Assessment #1 – Weight Management Clinical Specification v1.0** 

# **Part 8 – Knowledge Repository & Reusability** 

# **Objective** 

The Knowledge Repository is the permanent clinical knowledge layer of the Clinical Intelligence Engine (CIE). 

Its purpose is to ensure that clinical knowledge is: 

- Written once 

- Validated once 

- Reused everywhere 

- Never duplicated 

Assessment modules should focus on **asking questions and interpreting answers** , while the Knowledge Repository provides the reusable formulas, thresholds, findings, and recommendations that support those assessments. 

# **Core Principle** 

The Knowledge Repository is **not** a medical encyclopedia or wiki. 

It should only contain knowledge that is **actively used** by one or more WelliQo assessments. 

If a piece of knowledge is never used by an assessment, it should not exist in the repository. 

**Repository Structure** 

src/ 

└── knowledge/ 

├── body-composition/ ├── nutrition/ ├── hydration/ ├── metabolism/ ├── activity/ ├── recovery/ ├── behaviour/ ├── findings/ 

├── recommendations/ 

├── formulas/ ├── thresholds/ └── references/ 

# **What Belongs in the Repository** 

# **1. Formulas** 

Reusable calculations. 

Examples: 

- BMI 

- Healthy Weight Range 

- BMR 

- TDEE 

- Water Target 

- Protein Target 

- Body Fat Estimate 

These should never be duplicated inside assessment modules. 

# **2. Thresholds** 

Examples: 

BMI Classification 

Underweight 

Healthy 

Overweight 

Obesity 

Protein intake ranges Water intake ranges Activity multipliers Risk classifications 

Sleep ranges Step ranges 

All thresholds should exist once. 

# **3. Clinical Findings** 

Reusable findings. 

Examples 

Sedentary Lifestyle 

Poor Recovery 

Positive Energy Balance 

High Stress Pattern 

Emotional Eating Pattern 

Future assessments can reuse these. 

# **4. Recommendations** 

Reusable lifestyle recommendations. 

Examples 

Increase Daily Movement 

Improve Sleep Routine 

Reduce Sugary Drinks 

Portion Awareness 

Stress Management 

Hydration 

Assessment-specific wording may vary, 

but logic remains shared. 

# **5. Evidence Definitions** 

Examples 

VERY_LOW_ACTIVITY 

HIGH_SUGAR_INTAKE 

GOOD_SLEEP 

LATE_EATING 

HIGH_STRESS 

GOOD_RECOVERY 

These become common evidence objects. 

# **6. Scientific References** 

Every reusable knowledge object should optionally reference: 

- Source Name 

- Publication 

- Guideline 

- Version 

- Last Reviewed 

This improves future maintainability without requiring references to be displayed to the user. 

# **What Does NOT Belong** 

The repository should **not** contain: 

- Assessment questions 

- UI components 

- Report layouts 

- Assessment-specific timelines 

- Assessment navigation 

- Icons 

- Categories 

- User responses 

- Scores 

Those remain inside assessment modules. 

# **Assessment Module Responsibilities** 

Weight Management should contain: 

- Questions 

- Question mapping 

- Pillar configuration 

- Assessment-specific scoring 

- Assessment-specific synergy 

- Assessment metadata 

Everything else should be imported from the Knowledge Repository. 

# **Reusability Matrix** 

|**Component**|**Reusable?**|
|---|---|
|BMI Formula|✅|
|TDEE Formula|✅|
|Water Formula|✅|
|Protein Formula|✅|
|Body Fat Estmate|✅|
|Healthy Weight Range|✅|
|Sedentary Lifestyle Finding|✅|
|Poor Recovery Finding|✅|
|Emotonal Eatng Finding|✅|
|Reduce Sugary Drinks Recommendaton|✅|
|Improve Sleep Recommendaton|✅|
|Weight Management Questons|✅|
|Weight Management Pillars|✅|
|Weight Management Timeline Rules|✅|
|Weight Management Score Weights|✅|



# **Knowledge Loading Rules** 

Each assessment should request only the knowledge it needs. Example 

Weight Management 

↓ 

Needs 

BMI 

Protein 

Water 

Activity 

Recovery 

↓ 

Load only those modules 

This keeps the engine lightweight and scalable. 

# **Versioning** 

Every knowledge module must contain: 

Module ID 

Version 

Created Date 

Last Updated 

Status 

Author 

Engine Version Compatibility 

This allows future updates without breaking older assessments. 

# **Deprecation Policy** 

If a formula or recommendation changes: 

- Do not delete it immediately. 

- Mark it as deprecated. 

- Keep backward compatibility until all assessments are migrated. 

# **Validation Rules** 

Before build: 

The validator should ensure: 

- Every imported knowledge module exists. 

- No duplicate IDs. 

- All references resolve correctly. 

- All formulas validate. 

- Every recommendation referenced by an assessment exists. 

- Every finding referenced by an assessment exists. 

- No orphaned knowledge modules remain. 

# **Future Assessment Workflow** 

When creating a new assessment: 

1. Design the assessment. 

2. Check whether required knowledge already exists. 

3. Reuse existing modules whenever possible. 

4. Create new knowledge only when genuinely required. 

5. Register new knowledge. 

6. Validate. 

7. Freeze. 

This prevents unnecessary duplication across the 40+ assessments. 

# **Example: Weight Management Dependencies** 

Weight Management currently depends on: 

# **Formulas** 

- BMI 

- Healthy Weight Range 

- BMR 

- TDEE 

- Protein Target 

- Water Target 

- Body Fat Estimate 

# **Findings** 

- Sedentary Lifestyle 

- Positive Energy Balance 

- Poor Recovery 

- Emotional Eating Pattern 

- Weight Cycling 

- High Stress Pattern 

# **Recommendations** 

- Healthy Weight Plan 

- Portion Awareness 

- Reduce Sugary Drinks 

- Increase Daily Movement 

- Improve Sleep 

- Stress Management 

- Behaviour Coaching 

# **Repository Growth Rule** 

The repository should grow **organically** . 

Do **not** create modules "just in case." 

A module is added only when: 

- It is required by an assessment. 

- It has a clear reusable purpose. 

- It passes validation. 

This keeps the repository clean, focused, and maintainable. 

# **Final Architecture Flow** 

Assessment 

│ 

▼ 

Questions 

│ 

▼ 

Clinical Logic 

│ 

▼ 

Knowledge Repository 

│ 

├── Formulas 

├── Thresholds 

├── Findings 

├── Recommendations 

├── References 

▼ 

Clinical Engine 

│ 

▼ 

Report Builder 

│ 

▼ 

Lifestyle Intelligence Report 

# **Acceptance Criteria** 

Before Weight Management is marked complete: 

- ✅ No duplicated formulas. 

- ✅ No duplicated findings. 

- ✅ No duplicated recommendations. 

- ✅ All reusable knowledge extracted. 

- ✅ Assessment contains only assessment-specific logic. 

- ✅ Repository passes validation. 

- ✅ Future assessments can reuse the same modules without modification. 

Excellent. This is the part that separates a hobby project from a production-ready platform. Most apps test manually. We will build **validation into the engine itself** . 

# **Assessment #1 – Weight Management Clinical Specification v1.0** 

# **Part 9 – Validation & Test Suite** 

# **Objective** 

The Validation & Test Suite ensures the Weight Management assessment is: 

- Clinically believable 

- Technically correct 

- Stable 

- Reproducible 

- Explainable 

- Resistant to regressions 

Every future assessment must pass the same validation process before release. 

# **Validation Layers** 

The engine validates at **five levels** : 

1. Question Validation 

↓ 

2. Clinical Logic Validation 

- ↓ 

# 3. Calculation Validation 

↓ 

# 4. Report Validation 

↓ 

# 5. End-to-End User Validation 

A failure at any layer blocks the assessment from being marked as production-ready. 

# **Layer 1 – Question Validation** 

Every assessment must verify: 

# **Structure** 

- ✅ Exactly 25 specialist questions. 

- ✅ No duplicate Question IDs. 

- ✅ Every question belongs to one pillar. 

- ✅ Every question has a clinical purpose. 

- ✅ Every answer option has a stored value. 

- ✅ Every question has a valid UI type. 

# **Logic** 

Every question must contribute to at least one of: 

- Evidence 

- Formula 

- Finding 

- Recommendation 

- Timeline 

- Confidence 

Questions that do not influence the engine must fail validation. 

# **Layer 2 – Clinical Logic Validation** 

Every answer option must generate: 

Answer 

# ↓ 

# Evidence 

# ↓ 

Finding OR Context 

↓ 

Recommendation (directly or indirectly) 

Checks: 

- No orphan evidence 

- No orphan findings 

- No duplicate findings 

- No circular dependencies 

- No missing recommendation references 

- Confidence between 60–95% 

- Valid severity 

- Valid priority 

# **Layer 3 – Formula Validation** 

Each formula must verify: 

- Required inputs exist. 

- Units are correct. 

- Numeric ranges are valid. 

- No impossible values. 

- No divide-by-zero. 

- Correct rounding. 

- Formula ID exists. 

# **Example** 

BMI Input Height = 1.68 m 

Weight = 67 kg 

Expected BMI = 23.7 Tolerance ±0.1 

# **Layer 4 – Report Validation** 

Every generated report must contain: 

# **Overall** 

- Wellness Score 

- Score Category 

- Biggest Win 

- Biggest Opportunity 

# **Metrics** 

- BMI 

- Healthy Weight Range 

- Protein 

- Water 

- Calories 

- Timeline 

# **Findings** 

- At least one finding (or one positive finding if no concerns exist) 

- Maximum 3 primary findings 

 Maximum 5 supporting findings 

# **Recommendations** 

- Maximum 3 primary recommendations 

- Maximum 3 supporting recommendations 

- At least one positive reinforcement message 

# **Report Quality** 

- No empty sections 

- No duplicate content 

- Every metric explained 

- Every recommendation linked to a finding 

- Every finding linked to evidence 

# **Layer 5 – End-to-End Test Personas** 

The engine must be tested with representative user profiles. 

# **Persona 1 – Healthy Adult** 

Expected: 

- Score >90 

- Mostly positive findings 

- Maintenance recommendations 

- Biggest Win present 

# **Persona 2 – Overweight Office Worker** 

Characteristics: 

- High sitting time 

- Low steps 

- Sugary drinks 

- Large portions 

Expected: 

- Positive Energy Balance 

- Sedentary Lifestyle 

- Activity recommendations 

- Nutrition recommendations 

# **Persona 3 – Active but Poor Recovery** 

Characteristics: 

- Regular exercise 

- Good steps 

- Poor sleep 

- High stress 

Expected: 

- Strong Activity pillar 

- Poor Recovery finding 

- Sleep recommendations 

# **Persona 4 – Emotional Eating Pattern** 

Characteristics: 

- High stress 

- Emotional eating 

- Frequent cravings 

Expected: 

- Emotional Eating Pattern 

- Behaviour recommendations 

- Stress recommendations 

# **Persona 5 – Weight Cycling** 

Characteristics: 

- Many previous attempts 

- Unrealistic goals 

- Large weight fluctuations 

Expected: 

- Weight Cycling finding 

- Behaviour coaching 

- Sustainable planning 

# **Persona 6 – Underweight** 

Expected: 

- Healthy Weight Gain recommendations 

- Protein guidance 

- No weight-loss advice 

# **Persona 7 – Excellent Lifestyle** 

Characteristics: 

- Healthy BMI 

- Good nutrition 

- Good activity 

- Good recovery 

Expected: 

- Score >95 

- Mostly positive findings 

- Positive reinforcement 

- Minimal recommendations 

# **Persona 8 – Mixed Lifestyle** 

Some healthy behaviours 

Some unhealthy behaviours 

Expected: 

Balanced report 

No exaggerated conclusions 

# **Persona 9 – Missing Information** 

Several "Unsure" answers. 

Expected: 

Lower confidence 

No severe deductions 

Explain limited certainty 

# **Persona 10 – Contradictory Responses** 

Example: 

- 12,000 steps/day 

- No exercise 

- Sitting >10 hours 

Expected: 

Engine flags inconsistency internally. 

Confidence reduced. 

Do not generate impossible conclusions. 

# **Regression Tests** 

Every future engine update must verify: 

- Weight Management score unchanged for identical inputs. 

- Existing findings remain stable unless intentionally updated. 

- Existing formulas still pass. 

- Existing recommendations still resolve. 

No silent regressions. 

# **Performance Tests** 

Target performance: 

- Assessment evaluation: <100 ms 

- Report generation: <200 ms 

- Formula execution: <50 ms 

- Validation: <100 ms 

Exact values may vary by platform, but the engine should remain responsive even as more assessments are added. 

# **Explainability Tests** 

Every output must answer: 

- Why did I receive this score? 

- Why did I receive this finding? 

- Why this recommendation? 

- What evidence supports it? 

If any answer cannot be explained, validation fails. 

# **Acceptance Checklist** 

Before Weight Management is released: 

# **Questions** 

- ✅ 25 specialist questions 

- ✅ No duplicates 

- ✅ All mapped 

# **Logic** 

- ✅ Evidence complete 

- ✅ Findings complete 

- ✅ Recommendations complete 

- ✅ Synergy complete 

# **Calculations** 

- ✅ Formula validation 

- ✅ Correct rounding 

- ✅ No impossible values 

# **Report** 

- ✅ Complete 

- ✅ Personalized 

- ✅ Explainable 

- ✅ Positive reinforcement included 

# **Testing** 

- ✅ All personas pass 

- ✅ No regressions 

- ✅ No orphan references 

- ✅ No validation errors 

# **Production Readiness Criteria** 

Weight Management is considered **production-ready** only when: 

- All validation layers pass. 

- All test personas produce clinically believable outputs. 

- No hardcoded logic bypasses the Clinical Intelligence Engine. 

- The report is fully explainable. 

- The engine behaves consistently across repeated runs. 

# **End of Part 9** 

Perfect. This is the final document. It tells Gemini **exactly** how to implement everything we designed. No guessing. No architectural decisions. Just implementation. 

# **Assessment #1 – Weight Management Clinical Specification v1.0** 

# **Part 10 – Gemini Implementation Package** 

# **Objective** 

This document translates the complete Clinical Specification into a technical implementation plan. 

The Clinical Specification is now frozen. 

The Implementation Engineer **must not redesign or reinterpret** the clinical logic. 

The responsibility is to implement the specification faithfully while preserving the existing architecture. 

# **Implementation Principles** 

# **DO** 

- Implement exactly as specified. 

- Keep the Clinical Intelligence Engine generic. 

- Keep the UI presentation separate from the engine. 

- Reuse the Knowledge Repository whenever possible. 

- Validate every module before release. 

# **DO NOT** 

- Invent formulas. 

- Invent findings. 

- Invent recommendations. 

- Invent score adjustments. 

- Change question wording. 

- Change clinical thresholds. 

- Hardcode report content. 

- Bypass the validator. 

If implementation concerns arise, stop and request clarification rather than making assumptions. 

# **Implementation Order** 

The implementation must follow this sequence: 

1. Knowledge Repository 

↓ 

2. Formula Registry 

↓ 

3. Findings Library 

↓ 

4. Recommendation Library 

↓ 

5. Clinical Rules 

↓ 

6. Synergy Engine 

↓ 

7. Score Engine ↓ 

8. Report Builder 

↓ 

9. Validator 

↓ 

10. UI Integration 

No later stage should be implemented before its dependencies. 

# **Phase 1 – Knowledge Repository** 

Create or populate only the knowledge modules required by Weight Management. Required reusable modules: 

# **Formulas** 

- BMI 

- Healthy Weight Range 

- BMR 

- TDEE 

- Protein Target 

- Water Target 

- Body Fat Estimate 

# **Findings** 

- Sedentary Lifestyle 

- Positive Energy Balance 

- Poor Recovery 

- Emotional Eating 

- Weight Cycling 

- High Stress 

- Active Lifestyle 

# **Recommendations** 

- Healthy Weight Plan 

- Portion Awareness 

- Reduce Sugary Drinks 

- Improve Sleep 

- Increase Daily Movement 

- Behaviour Coaching 

- Stress Management 

Only implement modules referenced by Weight Management. 

Do not create speculative knowledge. 

# **Phase 2 – Formula Registry** 

Implement every formula from Part 4. 

Requirements: 

- Configurable 

- Versioned 

- Validated 

- Unit-safe 

- Audit-friendly 

Every calculated value must expose: 

- Formula ID 

- Inputs 

- Result 

- Engine Version 

# **Phase 3 – Findings Engine** 

Implement the complete Findings Library. 

Requirements: 

Every finding: 

- Has evidence. 

- Has severity. 

- Has confidence. 

- Has explanation. 

- Has recommendation references. 

The engine must reject findings with incomplete metadata. 

# **Phase 4 – Recommendation Engine** 

Recommendations must be generated dynamically. 

Never display recommendations that are not supported by findings. 

The engine should: 

Finding(s) 

↓ 

Recommendation(s) 

↓ 

Priority Ranking 

↓ 

Deduplicate 

↓ 

Return Final List 

# **Phase 5 – Clinical Rule Engine** 

Implement every rule defined in Part 3. 

Every answer should generate: 

Answer 

↓ 

Evidence 

↓ 

Finding 

↓ 

Recommendation Trigger 

↓ 

Score Contribution 

# ↓ 

Confidence 

No answer should exist without a defined purpose. 

# **Phase 6 – Synergy Engine** 

Implement all synergy groups. 

Requirements: 

- Increase confidence. 

- Merge related findings. 

- Avoid duplicate deductions. 

- Promote pattern-based explanations. 

Do not multiply penalties for overlapping behaviours. 

# **Phase 7 – Clinical Score Engine** 

Implement the five-stage scoring process. 

Stages: 

1. Pillar Scores 

2. Behaviour Deductions 

3. Confidence Adjustment 

4. Synergy Normalization 

5. Clinical Validation 

The engine must produce: 

- Overall Score 

- Pillar Scores 

- Biggest Win 

- Biggest Opportunity 

- Internal Confidence 

# **Phase 8 – Report Builder** 

The Report Builder must consume only structured engine output. 

The UI should never calculate: 

- Scores 

- Findings 

- Recommendations 

- Metrics 

The UI only renders. 

Report sections: 

- Overall Score 

- Biggest Win 

- Biggest Opportunity 

- Health Snapshot 

- Pillars 

- Findings 

- Evidence 

- Action Plan 

- Nutrition Profile 

- Timeline 

- Positive Reinforcement 

- Next Assessment 

# **Phase 9 – Validation** 

Run validation before allowing report generation. 

Validation must include: 

# **Registry** 

- Assessment exists. 

- Metadata complete. 

- Version valid. 

# **Questions** 

- Exactly 25 specialist questions. 

- No duplicates. 

- Every question mapped. 

# **Findings** 

- No orphan findings. 

- No duplicate findings. 

# **Recommendations** 

- Valid references. 

- No duplicates. 

# **Report** 

- No empty sections. 

- No invalid metrics. 

If validation fails, 

throw a descriptive error and stop execution. 

Never silently continue. 

# **Phase 10 – UI Integration** 

Integrate the engine into the existing UI. 

Requirements: 

- No UI redesign unless required. 

- Existing navigation preserved. 

- Existing assessment flow preserved. 

- Existing registry preserved. 

The only changes should be those required to consume the new engine output. 

# **Required Files** 

The implementation is expected to update or create files similar to: 

src/ 

- ├── assessments/ 

- │   └── weight-management/ 

│       ├── questions.ts 

│       ├── config.ts 

│       └── index.ts 

│ 

├── clinical/ 

- │   ├── findings.ts 

- │   ├── recommendations.ts 

- │   ├── metrics.ts 

- │   └── rules.ts 

# │ 

- ├── engine/ 

- │   ├── evaluator.ts 

- │   ├── report-builder.ts 

- │   ├── score-validator.ts 

- │   └── evidence.ts 

# │ 

- ├── knowledge/ 

- │   ├── formulas/ 

- │   ├── findings/ 

- │   ├── recommendations/ 

- │   └── thresholds/ 

│ 

- └── store/ 

- └── assessment-store.ts 

Adapt file locations only if they better match the established project architecture. 

# **Backward Compatibility** 

The implementation must preserve: 

- Existing assessment registry 

- Existing navigation 

- Existing state management 

- Existing report routing 

- Existing assessment IDs 

- Existing universal profile questions 

No breaking changes. 

# **Quality Gates** 

The implementation is complete only if: 

# **Build** 

- npm run build passes. 

# **Registry** 

- Validator passes. 

# **Engine** 

- No runtime errors. 

# **Report** 

- All sections populated. 

# **Testing** 

- All Part 9 personas produce expected behaviour. 

# **Code Quality** 

- No hardcoded clinical text. 

- No duplicated formulas. 

- No duplicated findings. 

- No duplicated recommendations. 

- No bypasses around the Clinical Intelligence Engine. 

# **Deliverables** 

At completion, provide: 

1. Files created 

2. Files modified 

3. Validation results 

4. Test summary 

5. Build result 

6. Known limitations (if any) 

7. Migration notes (if applicable) 

**Final Acceptance Checklist** 

Weight Management is accepted only if: 

- ✅ Clinical Specification fully implemented. 

- ✅ All formulas operational. 

- ✅ All 25 specialist questions contribute to the engine. 

- ✅ All findings are evidence-backed. 

- ✅ All recommendations are personalized. 

- ✅ Synergy engine operational. 

- ✅ Clinical Score Engine operational. 

- ✅ Report fully explainable. 

- ✅ Validation passes. 

- ✅ Test suite passes. 

- ✅ Production build succeeds. 

- ✅ No hardcoded clinical logic remains outside the engine. 

# **FINAL RULE (Permanent Project Rule)** 

From this point forward, every new WelliQo assessment must follow this workflow: 

1. Create the complete **Clinical Specification** (Parts 1–10). 

2. Review and freeze the specification. 

3. Implement exactly as specified. 

4. Validate with the standard test suite. 

5. Freeze the implementation as the production version. 

6. Reuse existing knowledge whenever possible; create new knowledge only when required. 

No assessment should be implemented before its Clinical Specification is complete. 

# **✅ My Final Recommendation** 

This document is already at the level of an **internal software specification** , but before handing it to Gemini, I would add one final page at the very beginning: 

# **WelliQo Clinical Engine Manifesto (1 page)** 

It would define the permanent philosophy of the platform, such as: 

- Health is the result of habits, not a single metric. 

- Explain every conclusion. 

- Never shame or alarm users. 

- Reward strengths as well as identify opportunities. 

- Prefer sustainable lifestyle change over quick fixes. 

- Every recommendation must be evidence-backed within the engine. 

- Every output must answer **"Why?"** 

- Build reusable knowledge, not duplicated logic. 

That manifesto becomes the "constitution" for every future assessment and ensures the platform stays consistent even as it grows from 2 assessments to 40+. I think it would be one of the highestvalue documents in the entire WelliQo project. 

