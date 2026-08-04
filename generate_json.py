import json
import os

evidence_list = []
rules_list = []

def add_evidence(eid, desc, cat):
    if not any(e['id'] == eid for e in evidence_list):
        evidence_list.append({"id": eid, "description": desc, "category": cat})

def add_rule(rid, qid, val, ev=None, find=None, sev=None, ded=0, pri=None, conf_adj=0):
    rules_list.append({
        "id": rid,
        "questionId": qid,
        "answerValue": val,
        "evidenceId": ev,
        "findingId": find,
        "severity": sev,
        "scoreDeduction": ded,
        "priority": pri,
        "confidenceAdjustment": conf_adj
    })

# Part 3A
# Q1
add_evidence("GOAL_WEIGHT_LOSS", "Wants to lose weight", "Goal")
add_rule("RULE_Q1_LOSE", "weight_goal", "lose", ev="GOAL_WEIGHT_LOSS")
add_evidence("GOAL_MAINTENANCE", "Wants to maintain weight", "Goal")
add_rule("RULE_Q1_MAINTAIN", "weight_goal", "maintain", ev="GOAL_MAINTENANCE")
add_evidence("GOAL_WEIGHT_GAIN", "Wants to gain weight", "Goal")
add_rule("RULE_Q1_GAIN", "weight_goal", "gain", ev="GOAL_WEIGHT_GAIN")
add_evidence("GOAL_RECOMPOSITION", "Wants to recomp", "Goal")
add_rule("RULE_Q1_RECOMP", "weight_goal", "recompose", ev="GOAL_RECOMPOSITION")

# Q2: target_weight - generates TARGET_WEIGHT evidence. (We'll handle the difference in the score engine/rules engine later, or just capture the evidence).
add_evidence("TARGET_WEIGHT", "Target weight set", "Goal")

# Q3
add_rule("RULE_Q3_LT3", "goal_timeline", "less_than_3_months") # Logic in engine for Target Diff
add_rule("RULE_Q3_6_12", "goal_timeline", "6_12_months", ded=-5) # Actually Positive behaviour +5 motivation, so deduction is 0.

# Q4
add_evidence("WEIGHT_STABLE", "Weight mostly stable", "History")
add_rule("RULE_Q4_STABLE", "weight_history", "mostly_stable", ev="WEIGHT_STABLE")
add_evidence("WEIGHT_GAINING", "Weight increasing", "History")
add_rule("RULE_Q4_GAIN", "weight_history", "gradually_increased", ev="WEIGHT_GAINING", find="POSITIVE_ENERGY_BALANCE", sev="MEDIUM", ded=8)
add_rule("RULE_Q4_LOSS", "weight_history", "gradually_decreased", find="RECENT_WEIGHT_LOSS", ded=0)
add_rule("RULE_Q4_FLUCT", "weight_history", "large_fluctuations", find="WEIGHT_CYCLING", sev="HIGH", ded=15)
add_rule("RULE_Q4_UNSURE", "weight_history", "unsure", conf_adj=-5)

# Q5
add_rule("RULE_Q5_NEVER", "weight_attempts", "never")
add_rule("RULE_Q5_1_2", "weight_attempts", "1_2")
add_rule("RULE_Q5_3_5", "weight_attempts", "3_5", find="REPEATED_DIET_ATTEMPTS", sev="MEDIUM", ded=5)
add_rule("RULE_Q5_5_PLUS", "weight_attempts", "more_than_5", find="CHRONIC_DIET_CYCLING", sev="HIGH", ded=15)

# Q6
add_rule("RULE_Q6_TIME", "biggest_obstacle", "lack_of_time")
add_rule("RULE_Q6_STRESS", "biggest_obstacle", "stress")
add_rule("RULE_Q6_EMOTIONAL", "biggest_obstacle", "emotional_eating")
add_rule("RULE_Q6_EXERCISE", "biggest_obstacle", "lack_of_exercise")
add_rule("RULE_Q6_MOTIVATION", "biggest_obstacle", "low_motivation")
add_rule("RULE_Q6_DONTKNOW", "biggest_obstacle", "dont_know", conf_adj=-10)

# Q7
add_rule("RULE_Q7_1_2", "meals_per_day", "1_2", find="LOW_MEAL_FREQUENCY", sev="MEDIUM", ded=10)
add_rule("RULE_Q7_3", "meals_per_day", "3")
add_rule("RULE_Q7_4", "meals_per_day", "4")
add_rule("RULE_Q7_5", "meals_per_day", "5_plus", find="FREQUENT_EATING", sev="LOW", ded=5)

# Q8
add_rule("RULE_Q8_NEVER", "skip_breakfast", "never")
add_rule("RULE_Q8_1_2", "skip_breakfast", "1_2_days", ded=2)
add_rule("RULE_Q8_3_5", "skip_breakfast", "3_5_days", find="MEAL_INCONSISTENCY", sev="MEDIUM", ded=8)
add_rule("RULE_Q8_ALWAYS", "skip_breakfast", "almost_every_day", find="FREQUENT_BREAKFAST_SKIPPING", sev="MEDIUM", ded=12)

# Q9
add_evidence("HEALTHY_SNACK_PATTERN", "Healthy snacks", "Nutrition")
add_rule("RULE_Q9_RARE", "snacking_frequency", "rarely", ev="HEALTHY_SNACK_PATTERN")
add_evidence("MODERATE_SNACKING", "Moderate snacks", "Nutrition")
add_rule("RULE_Q9_1", "snacking_frequency", "once_daily", ev="MODERATE_SNACKING")
add_rule("RULE_Q9_2_3", "snacking_frequency", "2_3_times", find="FREQUENT_SNACKING", sev="LOW", ded=5)
add_rule("RULE_Q9_ALL", "snacking_frequency", "throughout_day", find="CONTINUOUS_GRAZING", sev="MEDIUM", ded=12)

# Q10
add_rule("RULE_Q10_NEVER", "late_eating", "never")
add_rule("RULE_Q10_OCCASIONAL", "late_eating", "occasionally", ded=2)
add_rule("RULE_Q10_MOST", "late_eating", "most_days", find="REGULAR_LATE_EATING", sev="MEDIUM", ded=8)
add_rule("RULE_Q10_EVERY", "late_eating", "every_day", find="CHRONIC_LATE_EATING", sev="HIGH", ded=15)

# Q11
add_rule("RULE_Q11_RARE", "eating_out", "rarely")
add_rule("RULE_Q11_1_2", "eating_out", "1_2_times", ded=2)
add_rule("RULE_Q11_3_4", "eating_out", "3_4_times", find="FREQUENT_EATING_OUT", sev="MEDIUM", ded=8)
add_rule("RULE_Q11_DAILY", "eating_out", "almost_daily", find="HIGH_RESTAURANT_DEPENDENCY", sev="HIGH", ded=15)

# Q12
add_rule("RULE_Q12_NEVER", "sugary_drinks", "never")
add_rule("RULE_Q12_1_3", "sugary_drinks", "1_3_per_week", ded=3)
add_rule("RULE_Q12_4_6", "sugary_drinks", "4_6_per_week", find="HIGH_SUGAR_BEVERAGES", sev="MEDIUM", ded=10)
add_rule("RULE_Q12_DAILY", "sugary_drinks", "daily", find="DAILY_SUGAR_BEVERAGES", sev="HIGH", ded=18)
add_rule("RULE_Q12_MULTI", "sugary_drinks", "multiple_per_day", find="EXCESS_LIQUID_CALORIES", sev="HIGH", ded=25)

# Q13
add_rule("RULE_Q13_SMALL", "portion_sizes", "small")
add_rule("RULE_Q13_MODERATE", "portion_sizes", "moderate")
add_rule("RULE_Q13_LARGE", "portion_sizes", "large", find="LARGE_PORTIONS", sev="MEDIUM", ded=8)
add_rule("RULE_Q13_VERY", "portion_sizes", "very_large", find="VERY_LARGE_PORTIONS", sev="HIGH", ded=15)

# Q14
add_rule("RULE_Q14_RARE", "cravings_freq", "rarely")
add_rule("RULE_Q14_WEEKLY", "cravings_freq", "weekly", ded=3)
add_rule("RULE_Q14_SEVERAL", "cravings_freq", "several_times", find="FREQUENT_CRAVINGS", sev="MEDIUM", ded=8)
add_rule("RULE_Q14_DAILY", "cravings_freq", "daily", find="PERSISTENT_CRAVINGS", sev="HIGH", ded=15)

# Q15
add_evidence("AFTERNOON_CRAVINGS", "Cravings in afternoon", "Behaviour")
add_evidence("EVENING_CRAVINGS", "Cravings in evening", "Behaviour")
add_evidence("VARIABLE_CRAVINGS", "Variable cravings", "Behaviour")
add_rule("RULE_Q15_MORN", "cravings_time", "morning")
add_rule("RULE_Q15_AFT", "cravings_time", "afternoon", ev="AFTERNOON_CRAVINGS")
add_rule("RULE_Q15_EVE", "cravings_time", "evening", ev="EVENING_CRAVINGS")
add_rule("RULE_Q15_LATE", "cravings_time", "late_night", find="LATE_NIGHT_CRAVINGS", sev="MEDIUM", ded=5)
add_rule("RULE_Q15_RAND", "cravings_time", "random", ev="VARIABLE_CRAVINGS")

# Q16
add_rule("RULE_Q16_NEVER", "emotional_eating", "never")
add_rule("RULE_Q16_OCC", "emotional_eating", "occasionally", ded=2)
add_rule("RULE_Q16_FREQ", "emotional_eating", "frequently", find="EMOTIONAL_EATING", sev="HIGH", ded=12)
add_rule("RULE_Q16_ALWAYS", "emotional_eating", "almost_always", find="CHRONIC_EMOTIONAL_EATING", sev="CRITICAL", ded=20)

# Q17
add_evidence("VERY_SHORT_SLEEP", "Sleep < 5 hours", "Recovery")
add_rule("RULE_Q17_LT5", "sleep_hours", "less_than_5", ev="VERY_SHORT_SLEEP", find="SLEEP_DEPRIVATION", sev="HIGH", ded=20)
add_rule("RULE_Q17_5_6", "sleep_hours", "5_6", find="INADEQUATE_SLEEP", sev="MEDIUM", ded=10)
add_rule("RULE_Q17_6_7", "sleep_hours", "6_7", find="BORDERLINE_SLEEP", sev="LOW", ded=5)
add_rule("RULE_Q17_7_8", "sleep_hours", "7_8")
add_rule("RULE_Q17_GT8", "sleep_hours", "more_than_8")

# Q18
add_rule("RULE_Q18_EXC", "sleep_quality", "excellent")
add_rule("RULE_Q18_GOOD", "sleep_quality", "good")
add_rule("RULE_Q18_FAIR", "sleep_quality", "fair", find="SUBOPTIMAL_SLEEP", ded=5)
add_rule("RULE_Q18_POOR", "sleep_quality", "poor", find="POOR_SLEEP_QUALITY", ded=10)
add_rule("RULE_Q18_VPOOR", "sleep_quality", "very_poor", find="SEVERE_SLEEP_DISRUPTION", ded=15)

# Q19
add_rule("RULE_Q19_LT4", "sitting_hours", "less_than_4")
add_rule("RULE_Q19_4_6", "sitting_hours", "4_6")
add_rule("RULE_Q19_6_8", "sitting_hours", "6_8", find="MODERATE_SEDENTARY_TIME", ded=5)
add_rule("RULE_Q19_8_10", "sitting_hours", "8_10", find="HIGH_SEDENTARY_BEHAVIOUR", ded=10)
add_rule("RULE_Q19_GT10", "sitting_hours", "more_than_10", find="VERY_HIGH_SEDENTARY_BEHAVIOUR", ded=15)

# Q20
add_rule("RULE_Q20_LT3", "daily_steps", "less_than_3000", find="VERY_LOW_DAILY_MOVEMENT", sev="HIGH", ded=20)
add_rule("RULE_Q20_3_6", "daily_steps", "3000_5999", find="LOW_DAILY_MOVEMENT", ded=12)
add_rule("RULE_Q20_6_8", "daily_steps", "6000_7999", find="MODERATE_DAILY_MOVEMENT", ded=5)
add_rule("RULE_Q20_8_10", "daily_steps", "8000_9999")
add_evidence("ACTIVE_LIFESTYLE", "High steps", "Activity")
add_rule("RULE_Q20_GT10", "daily_steps", "10000_plus", ev="ACTIVE_LIFESTYLE")

# Q21
add_rule("RULE_Q21_NEVER", "planned_exercise", "never", find="NO_STRUCTURED_EXERCISE", ded=15)
add_rule("RULE_Q21_1_2", "planned_exercise", "one_two_days", find="LIMITED_EXERCISE", ded=8)
add_rule("RULE_Q21_3_4", "planned_exercise", "three_four_days")
add_rule("RULE_Q21_5", "planned_exercise", "five_plus_days")

# Q22
add_rule("RULE_Q22_VLOW", "stress_level", "very_low")
add_rule("RULE_Q22_LOW", "stress_level", "low")
add_rule("RULE_Q22_MOD", "stress_level", "moderate", find="MODERATE_STRESS", ded=3)
add_rule("RULE_Q22_HIGH", "stress_level", "high", find="HIGH_STRESS", ded=10)
add_rule("RULE_Q22_VHIGH", "stress_level", "very_high", find="CHRONIC_STRESS", ded=15)

# Q23
add_rule("RULE_Q23_VLOW", "energy_level", "very_low", find="LOW_DAILY_ENERGY", ded=15)
add_rule("RULE_Q23_LOW", "energy_level", "low", find="REDUCED_ENERGY", ded=8)
add_rule("RULE_Q23_MOD", "energy_level", "moderate", ded=2)
add_rule("RULE_Q23_GOOD", "energy_level", "good")
add_evidence("GOOD_VITALITY", "High energy", "Recovery")
add_rule("RULE_Q23_EXC", "energy_level", "excellent", ev="GOOD_VITALITY")

# Q24
add_rule("RULE_Q24_1", "confidence", "1", find="LOW_SELF_CONFIDENCE")
add_rule("RULE_Q24_2", "confidence", "2", find="LOW_SELF_CONFIDENCE")
add_rule("RULE_Q24_3", "confidence", "3", find="LOW_SELF_CONFIDENCE")
add_rule("RULE_Q24_4", "confidence", "4", find="MODERATE_SELF_CONFIDENCE")
add_rule("RULE_Q24_5", "confidence", "5", find="MODERATE_SELF_CONFIDENCE")
add_rule("RULE_Q24_6", "confidence", "6", find="MODERATE_SELF_CONFIDENCE")
add_evidence("HIGH_READINESS", "High confidence", "Behaviour")
add_rule("RULE_Q24_7", "confidence", "7", ev="HIGH_READINESS")
add_rule("RULE_Q24_8", "confidence", "8", ev="HIGH_READINESS")
add_rule("RULE_Q24_9", "confidence", "9", ev="HIGH_READINESS")
add_rule("RULE_Q24_10", "confidence", "10", ev="HIGH_READINESS")

# Q25
add_evidence("GOOD_SUPPORT_SYSTEM", "Has support", "Behaviour")
add_rule("RULE_Q25_STRONG", "support_system", "strong_support", ev="GOOD_SUPPORT_SYSTEM")
add_rule("RULE_Q25_SOME", "support_system", "some_support")
add_rule("RULE_Q25_LTD", "support_system", "limited_support", find="LIMITED_SUPPORT")
add_rule("RULE_Q25_NO", "support_system", "no_support", find="NO_SUPPORT_SYSTEM")


def write_json(path, data):
    with open(path, "w") as f:
        json.dump(data, f, indent=2)

write_json("apps/web/src/knowledge/evidence/weight-management.json", {
    "id": "module_evidence_weight_management",
    "version": "1.0.0",
    "definition": "Core evidence definitions for weight management",
    "reviewedBy": "Clinical Team",
    "lastReviewed": "2026-08-05",
    "nextReview": "2027-08-05",
    "scientificReferences": [],
    "evidence": evidence_list
})

# Make sure to drop Nones from rules
cleaned_rules = []
for r in rules_list:
    cleaned = {k:v for k,v in r.items() if v is not None}
    cleaned_rules.append(cleaned)

write_json("apps/web/src/knowledge/rules/weight-management.json", {
    "id": "module_rules_weight_management",
    "version": "1.0.0",
    "definition": "Core clinical rules for weight management",
    "reviewedBy": "Clinical Team",
    "lastReviewed": "2026-08-05",
    "nextReview": "2027-08-05",
    "scientificReferences": [],
    "rules": cleaned_rules
})

print("Done generating JSON files for evidence and rules.")
