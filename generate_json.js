const fs = require('fs');
const path = require('path');

const evidence_list = [];
const rules_list = [];

function add_evidence(eid, desc, cat) {
    if (!evidence_list.some(e => e.id === eid)) {
        evidence_list.push({ id: eid, description: desc, category: cat });
    }
}

function add_rule(rid, qid, val, ev = undefined, find = undefined, sev = undefined, ded = 0, pri = undefined, conf_adj = 0) {
    const rule = {
        id: rid,
        questionId: qid,
        answerValue: val,
        scoreDeduction: ded
    };
    if (ev !== undefined) rule.evidenceId = ev;
    if (find !== undefined) rule.findingId = find;
    if (sev !== undefined) rule.severity = sev;
    if (pri !== undefined) rule.priority = pri;
    if (conf_adj !== 0) rule.confidenceAdjustment = conf_adj;
    rules_list.push(rule);
}

// Part 3A
// Q1
add_evidence("GOAL_WEIGHT_LOSS", "Wants to lose weight", "Goal");
add_rule("RULE_Q1_LOSE", "weight_goal", "lose", "GOAL_WEIGHT_LOSS");
add_evidence("GOAL_MAINTENANCE", "Wants to maintain weight", "Goal");
add_rule("RULE_Q1_MAINTAIN", "weight_goal", "maintain", "GOAL_MAINTENANCE");
add_evidence("GOAL_WEIGHT_GAIN", "Wants to gain weight", "Goal");
add_rule("RULE_Q1_GAIN", "weight_goal", "gain", "GOAL_WEIGHT_GAIN");
add_evidence("GOAL_RECOMPOSITION", "Wants to recomp", "Goal");
add_rule("RULE_Q1_RECOMP", "weight_goal", "recompose", "GOAL_RECOMPOSITION");

// Q2
add_evidence("TARGET_WEIGHT", "Target weight set", "Goal");
add_rule("RULE_Q2_SET", "target_weight", "*", "TARGET_WEIGHT"); // Will handle in evaluator

// Q3
add_rule("RULE_Q3_LT3", "goal_timeline", "less_than_3_months"); 
add_rule("RULE_Q3_6_12", "goal_timeline", "6_12_months", undefined, undefined, undefined, 0, undefined, 0); 

// Q4
add_evidence("WEIGHT_STABLE", "Weight mostly stable", "History");
add_rule("RULE_Q4_STABLE", "weight_history", "mostly_stable", "WEIGHT_STABLE");
add_evidence("WEIGHT_GAINING", "Weight increasing", "History");
add_rule("RULE_Q4_GAIN", "weight_history", "gradually_increased", "WEIGHT_GAINING", "POSITIVE_ENERGY_BALANCE", "MEDIUM", 8);
add_rule("RULE_Q4_LOSS", "weight_history", "gradually_decreased", undefined, "RECENT_WEIGHT_LOSS", undefined, 0);
add_rule("RULE_Q4_FLUCT", "weight_history", "large_fluctuations", undefined, "WEIGHT_CYCLING", "HIGH", 15);
add_rule("RULE_Q4_UNSURE", "weight_history", "unsure", undefined, undefined, undefined, 0, undefined, -5);

// Q5
add_rule("RULE_Q5_NEVER", "weight_attempts", "never");
add_rule("RULE_Q5_1_2", "weight_attempts", "1_2");
add_rule("RULE_Q5_3_5", "weight_attempts", "3_5", undefined, "REPEATED_DIET_ATTEMPTS", "MEDIUM", 5);
add_rule("RULE_Q5_5_PLUS", "weight_attempts", "more_than_5", undefined, "CHRONIC_DIET_CYCLING", "HIGH", 15);

// Q6
add_rule("RULE_Q6_TIME", "biggest_obstacle", "lack_of_time");
add_rule("RULE_Q6_STRESS", "biggest_obstacle", "stress");
add_rule("RULE_Q6_EMOTIONAL", "biggest_obstacle", "emotional_eating");
add_rule("RULE_Q6_EXERCISE", "biggest_obstacle", "lack_of_exercise");
add_rule("RULE_Q6_MOTIVATION", "biggest_obstacle", "low_motivation");
add_rule("RULE_Q6_DONTKNOW", "biggest_obstacle", "dont_know", undefined, undefined, undefined, 0, undefined, -10);

// Q7
add_rule("RULE_Q7_1_2", "meals_per_day", "1_2", undefined, "LOW_MEAL_FREQUENCY", "MEDIUM", 10);
add_rule("RULE_Q7_3", "meals_per_day", "3");
add_rule("RULE_Q7_4", "meals_per_day", "4");
add_rule("RULE_Q7_5", "meals_per_day", "5_plus", undefined, "FREQUENT_EATING", "LOW", 5);

// Q8
add_rule("RULE_Q8_NEVER", "skip_breakfast", "never");
add_rule("RULE_Q8_1_2", "skip_breakfast", "1_2_days", undefined, undefined, undefined, 2);
add_rule("RULE_Q8_3_5", "skip_breakfast", "3_5_days", undefined, "MEAL_INCONSISTENCY", "MEDIUM", 8);
add_rule("RULE_Q8_ALWAYS", "skip_breakfast", "almost_every_day", undefined, "FREQUENT_BREAKFAST_SKIPPING", "MEDIUM", 12);

// Q9
add_evidence("HEALTHY_SNACK_PATTERN", "Healthy snacks", "Nutrition");
add_rule("RULE_Q9_RARE", "snacking_frequency", "rarely", "HEALTHY_SNACK_PATTERN");
add_evidence("MODERATE_SNACKING", "Moderate snacks", "Nutrition");
add_rule("RULE_Q9_1", "snacking_frequency", "once_daily", "MODERATE_SNACKING");
add_rule("RULE_Q9_2_3", "snacking_frequency", "2_3_times", undefined, "FREQUENT_SNACKING", "LOW", 5);
add_rule("RULE_Q9_ALL", "snacking_frequency", "throughout_day", undefined, "CONTINUOUS_GRAZING", "MEDIUM", 12);

// Q10
add_rule("RULE_Q10_NEVER", "late_eating", "never");
add_rule("RULE_Q10_OCCASIONAL", "late_eating", "occasionally", undefined, undefined, undefined, 2);
add_rule("RULE_Q10_MOST", "late_eating", "most_days", undefined, "REGULAR_LATE_EATING", "MEDIUM", 8);
add_rule("RULE_Q10_EVERY", "late_eating", "every_day", undefined, "CHRONIC_LATE_EATING", "HIGH", 15);

// Q11
add_rule("RULE_Q11_RARE", "eating_out", "rarely");
add_rule("RULE_Q11_1_2", "eating_out", "1_2_times", undefined, undefined, undefined, 2);
add_rule("RULE_Q11_3_4", "eating_out", "3_4_times", undefined, "FREQUENT_EATING_OUT", "MEDIUM", 8);
add_rule("RULE_Q11_DAILY", "eating_out", "almost_daily", undefined, "HIGH_RESTAURANT_DEPENDENCY", "HIGH", 15);

// Q12
add_rule("RULE_Q12_NEVER", "sugary_drinks", "never");
add_rule("RULE_Q12_1_3", "sugary_drinks", "1_3_per_week", undefined, undefined, undefined, 3);
add_rule("RULE_Q12_4_6", "sugary_drinks", "4_6_per_week", undefined, "HIGH_SUGAR_BEVERAGES", "MEDIUM", 10);
add_rule("RULE_Q12_DAILY", "sugary_drinks", "daily", undefined, "DAILY_SUGAR_BEVERAGES", "HIGH", 18);
add_rule("RULE_Q12_MULTI", "sugary_drinks", "multiple_per_day", undefined, "EXCESS_LIQUID_CALORIES", "HIGH", 25);

// Q13
add_rule("RULE_Q13_SMALL", "portion_sizes", "small");
add_rule("RULE_Q13_MODERATE", "portion_sizes", "moderate");
add_rule("RULE_Q13_LARGE", "portion_sizes", "large", undefined, "LARGE_PORTIONS", "MEDIUM", 8);
add_rule("RULE_Q13_VERY", "portion_sizes", "very_large", undefined, "VERY_LARGE_PORTIONS", "HIGH", 15);

// Q14
add_rule("RULE_Q14_RARE", "cravings_freq", "rarely");
add_rule("RULE_Q14_WEEKLY", "cravings_freq", "weekly", undefined, undefined, undefined, 3);
add_rule("RULE_Q14_SEVERAL", "cravings_freq", "several_times", undefined, "FREQUENT_CRAVINGS", "MEDIUM", 8);
add_rule("RULE_Q14_DAILY", "cravings_freq", "daily", undefined, "PERSISTENT_CRAVINGS", "HIGH", 15);

// Q15
add_evidence("AFTERNOON_CRAVINGS", "Cravings in afternoon", "Behaviour");
add_evidence("EVENING_CRAVINGS", "Cravings in evening", "Behaviour");
add_evidence("VARIABLE_CRAVINGS", "Variable cravings", "Behaviour");
add_rule("RULE_Q15_MORN", "cravings_time", "morning");
add_rule("RULE_Q15_AFT", "cravings_time", "afternoon", "AFTERNOON_CRAVINGS");
add_rule("RULE_Q15_EVE", "cravings_time", "evening", "EVENING_CRAVINGS");
add_rule("RULE_Q15_LATE", "cravings_time", "late_night", undefined, "LATE_NIGHT_CRAVINGS", "MEDIUM", 5);
add_rule("RULE_Q15_RAND", "cravings_time", "random", "VARIABLE_CRAVINGS");

// Q16
add_rule("RULE_Q16_NEVER", "emotional_eating", "never");
add_rule("RULE_Q16_OCC", "emotional_eating", "occasionally", undefined, undefined, undefined, 2);
add_rule("RULE_Q16_FREQ", "emotional_eating", "frequently", undefined, "EMOTIONAL_EATING", "HIGH", 12);
add_rule("RULE_Q16_ALWAYS", "emotional_eating", "almost_always", undefined, "CHRONIC_EMOTIONAL_EATING", "CRITICAL", 20);

// Q17
add_evidence("VERY_SHORT_SLEEP", "Sleep < 5 hours", "Recovery");
add_rule("RULE_Q17_LT5", "sleep_hours", "less_than_5", "VERY_SHORT_SLEEP", "SLEEP_DEPRIVATION", "HIGH", 20);
add_rule("RULE_Q17_5_6", "sleep_hours", "5_6", undefined, "INADEQUATE_SLEEP", "MEDIUM", 10);
add_rule("RULE_Q17_6_7", "sleep_hours", "6_7", undefined, "BORDERLINE_SLEEP", "LOW", 5);
add_rule("RULE_Q17_7_8", "sleep_hours", "7_8");
add_rule("RULE_Q17_GT8", "sleep_hours", "more_than_8");

// Q18
add_rule("RULE_Q18_EXC", "sleep_quality", "excellent");
add_rule("RULE_Q18_GOOD", "sleep_quality", "good");
add_rule("RULE_Q18_FAIR", "sleep_quality", "fair", undefined, "SUBOPTIMAL_SLEEP", "LOW", 5);
add_rule("RULE_Q18_POOR", "sleep_quality", "poor", undefined, "POOR_SLEEP_QUALITY", "MEDIUM", 10);
add_rule("RULE_Q18_VPOOR", "sleep_quality", "very_poor", undefined, "SEVERE_SLEEP_DISRUPTION", "HIGH", 15);

// Q19
add_rule("RULE_Q19_LT4", "sitting_hours", "less_than_4");
add_rule("RULE_Q19_4_6", "sitting_hours", "4_6");
add_rule("RULE_Q19_6_8", "sitting_hours", "6_8", undefined, "MODERATE_SEDENTARY_TIME", "LOW", 5);
add_rule("RULE_Q19_8_10", "sitting_hours", "8_10", undefined, "HIGH_SEDENTARY_BEHAVIOUR", "MEDIUM", 10);
add_rule("RULE_Q19_GT10", "sitting_hours", "more_than_10", undefined, "VERY_HIGH_SEDENTARY_BEHAVIOUR", "HIGH", 15);

// Q20
add_rule("RULE_Q20_LT3", "daily_steps", "less_than_3000", undefined, "VERY_LOW_DAILY_MOVEMENT", "HIGH", 20);
add_rule("RULE_Q20_3_6", "daily_steps", "3000_5999", undefined, "LOW_DAILY_MOVEMENT", "MEDIUM", 12);
add_rule("RULE_Q20_6_8", "daily_steps", "6000_7999", undefined, "MODERATE_DAILY_MOVEMENT", "LOW", 5);
add_rule("RULE_Q20_8_10", "daily_steps", "8000_9999");
add_evidence("ACTIVE_LIFESTYLE", "High steps", "Activity");
add_rule("RULE_Q20_GT10", "daily_steps", "10000_plus", "ACTIVE_LIFESTYLE");

// Q21
add_rule("RULE_Q21_NEVER", "planned_exercise", "never", undefined, "NO_STRUCTURED_EXERCISE", "MEDIUM", 15);
add_rule("RULE_Q21_1_2", "planned_exercise", "one_two_days", undefined, "LIMITED_EXERCISE", "LOW", 8);
add_rule("RULE_Q21_3_4", "planned_exercise", "three_four_days");
add_rule("RULE_Q21_5", "planned_exercise", "five_plus_days");

// Q22
add_rule("RULE_Q22_VLOW", "stress_level", "very_low");
add_rule("RULE_Q22_LOW", "stress_level", "low");
add_rule("RULE_Q22_MOD", "stress_level", "moderate", undefined, "MODERATE_STRESS", "LOW", 3);
add_rule("RULE_Q22_HIGH", "stress_level", "high", undefined, "HIGH_STRESS", "MEDIUM", 10);
add_rule("RULE_Q22_VHIGH", "stress_level", "very_high", undefined, "CHRONIC_STRESS", "HIGH", 15);

// Q23
add_rule("RULE_Q23_VLOW", "energy_level", "very_low", undefined, "LOW_DAILY_ENERGY", "HIGH", 15);
add_rule("RULE_Q23_LOW", "energy_level", "low", undefined, "REDUCED_ENERGY", "MEDIUM", 8);
add_rule("RULE_Q23_MOD", "energy_level", "moderate", undefined, undefined, undefined, 2);
add_rule("RULE_Q23_GOOD", "energy_level", "good");
add_evidence("GOOD_VITALITY", "High energy", "Recovery");
add_rule("RULE_Q23_EXC", "energy_level", "excellent", "GOOD_VITALITY");

// Q24
add_rule("RULE_Q24_1", "confidence", "1", undefined, "LOW_SELF_CONFIDENCE", "MEDIUM", 0);
add_rule("RULE_Q24_2", "confidence", "2", undefined, "LOW_SELF_CONFIDENCE", "MEDIUM", 0);
add_rule("RULE_Q24_3", "confidence", "3", undefined, "LOW_SELF_CONFIDENCE", "MEDIUM", 0);
add_rule("RULE_Q24_4", "confidence", "4", undefined, "MODERATE_SELF_CONFIDENCE", "LOW", 0);
add_rule("RULE_Q24_5", "confidence", "5", undefined, "MODERATE_SELF_CONFIDENCE", "LOW", 0);
add_rule("RULE_Q24_6", "confidence", "6", undefined, "MODERATE_SELF_CONFIDENCE", "LOW", 0);
add_evidence("HIGH_READINESS", "High confidence", "Behaviour");
add_rule("RULE_Q24_7", "confidence", "7", "HIGH_READINESS");
add_rule("RULE_Q24_8", "confidence", "8", "HIGH_READINESS");
add_rule("RULE_Q24_9", "confidence", "9", "HIGH_READINESS");
add_rule("RULE_Q24_10", "confidence", "10", "HIGH_READINESS");

// Q25
add_evidence("GOOD_SUPPORT_SYSTEM", "Has support", "Behaviour");
add_rule("RULE_Q25_STRONG", "support_system", "strong_support", "GOOD_SUPPORT_SYSTEM");
add_rule("RULE_Q25_SOME", "support_system", "some_support");
add_rule("RULE_Q25_LTD", "support_system", "limited_support", undefined, "LIMITED_SUPPORT", "LOW", 0);
add_rule("RULE_Q25_NO", "support_system", "no_support", undefined, "NO_SUPPORT_SYSTEM", "MEDIUM", 0);


function writeJson(p, data) {
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

writeJson("apps/web/src/knowledge/evidence/weight-management.json", {
    id: "module_evidence_weight_management",
    version: "1.0.0",
    definition: "Core evidence definitions for weight management",
    reviewedBy: "Clinical Team",
    lastReviewed: "2026-08-05",
    nextReview: "2027-08-05",
    scientificReferences: [],
    evidence: evidence_list
});

writeJson("apps/web/src/knowledge/rules/weight-management.json", {
    id: "module_rules_weight_management",
    version: "1.0.0",
    definition: "Core clinical rules for weight management",
    reviewedBy: "Clinical Team",
    lastReviewed: "2026-08-05",
    nextReview: "2027-08-05",
    scientificReferences: [],
    rules: rules_list
});

console.log("Done");
