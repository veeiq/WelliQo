import fs from 'fs';
import path from 'path';
import { RulesEngine } from '../src/engine/rules-engine';
import { SynergyEngine } from '../src/engine/synergy-engine';
import { ScoreEngine } from '../src/engine/score-engine';
import { ReportBuilder } from '../src/engine/report-builder';
import { FormulaRegistry } from '../src/engine/formula-registry';
import { config } from '../src/assessments/build-muscle-tone/config';
import { KnowledgeRepositoryLoader } from '../src/engine/knowledge-loader';

KnowledgeRepositoryLoader.getInstance();

const answers = {
    assessmentId: 'build-muscle-tone',
    strength_training_days: '3_4_days', training_experience: 'more_than_1_year', progressive_overload: 'always',
    workout_duration: '60_90_minutes', muscle_group_frequency: 'twice', training_intensity: 'often', structured_program: 'always',
    post_workout_protein: 'always', daily_protein_intake: 'track_daily', calorie_surplus: 'definitely_yes',
    meal_frequency: 'four', meal_skipping: 'never', nutrition_consistency: 'extremely_consistent',
    muscle_recovery: 'fully_recovered', rest_days: 'two', workout_energy: 'excellent', strength_progress: 'much_stronger', post_workout_fatigue: 'rarely',
    biggest_obstacle: 'budget', progress_tracking: 'often', confidence: 9, commitment: 10, missed_workouts: 'rarely',
    routine_disruption: 'reduce_duration', primary_goal: 'build_lean_muscle'
};

const rulesEngine = new RulesEngine();
const synergyEngine = new SynergyEngine();
const scoreEngine = new ScoreEngine();
const reportBuilder = new ReportBuilder();

const rulesResult = rulesEngine.evaluate(answers);
const activeIndicators = new Set([...rulesResult.evidenceIds, ...rulesResult.findingIds]);
const synergyResult = synergyEngine.evaluate(activeIndicators);
const scoreResult = scoreEngine.calculate(rulesResult, synergyResult, config as any);
const report = reportBuilder.build(answers, rulesResult, synergyResult, scoreResult);

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WelliQo Dashboard - Build Muscle & Tone</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; color: #1f2937; margin: 0; padding: 20px; }
        .dashboard { max-width: 900px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 30px; }
        .score-card { background: white; padding: 30px; border-radius: 16px; text-align: center; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin-bottom: 24px; }
        .score-circle { width: 120px; height: 120px; border-radius: 50%; background: conic-gradient(#3b82f6 ${report.overallScore}%, #e5e7eb 0); display: flex; align-items: center; justify-content: center; font-size: 36px; font-weight: bold; margin: 0 auto 16px; position: relative; }
        .score-circle::before { content: ""; position: absolute; inset: 10px; background: white; border-radius: 50%; }
        .score-circle span { position: relative; z-index: 1; color: #1e3a8a; }
        
        .pillars { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
        .pillar { background: white; padding: 20px; border-radius: 12px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .pillar-score { font-size: 24px; font-weight: bold; color: #2563eb; margin: 8px 0; }
        .pillar-name { font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; }

        .section { background: white; padding: 24px; border-radius: 12px; margin-bottom: 24px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .section-title { font-size: 18px; font-weight: 600; margin: 0 0 16px 0; border-bottom: 1px solid #e5e7eb; padding-bottom: 12px; }
        
        .finding { display: flex; align-items: flex-start; margin-bottom: 16px; padding: 12px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #3b82f6; }
        .finding-critical { border-left-color: #ef4444; background: #fef2f2; }
        .finding-high { border-left-color: #f59e0b; background: #fffbeb; }
        .finding-info { border-left-color: #10b981; background: #ecfdf5; }
        .finding-title { font-weight: 600; margin: 0 0 4px 0; }
        .finding-desc { font-size: 14px; color: #4b5563; margin: 0; }

        .recommendation { margin-bottom: 20px; }
        .rec-title { font-weight: 600; font-size: 16px; margin: 0 0 8px 0; color: #1e40af; }
        .rec-why { font-size: 14px; color: #4b5563; margin: 0 0 8px 0; font-style: italic; }
        .rec-action { display: inline-block; background: #dbeafe; color: #1e40af; padding: 6px 12px; border-radius: 999px; font-size: 13px; font-weight: 500; }
    </style>
</head>
<body>
    <div class="dashboard">
        <div class="header">
            <h1>Build Muscle & Tone Assessment</h1>
            <p style="color: #6b7280;">Persona: Experienced Muscle Builder</p>
        </div>

        <div class="score-card">
            <h2 style="margin-top: 0; color: #374151;">Muscle Building Readiness Score</h2>
            <div class="score-circle">
                <span>${report.overallScore}</span>
            </div>
            <p style="font-size: 18px; font-weight: 500; color: #111827; margin: 0;">Status: <span style="color: #10b981;">Optimal</span></p>
            <p style="color: #6b7280; font-size: 14px; margin-top: 8px;">You have a solid foundation for hypertrophy.</p>
        </div>

        <div class="pillars">
            <div class="pillar">
                <div class="pillar-name">Activity</div>
                <div class="pillar-score">${scoreResult.pillarScores.Activity}</div>
            </div>
            <div class="pillar">
                <div class="pillar-name">Nutrition</div>
                <div class="pillar-score">${scoreResult.pillarScores.Nutrition}</div>
            </div>
            <div class="pillar">
                <div class="pillar-name">Recovery</div>
                <div class="pillar-score">${scoreResult.pillarScores.Recovery}</div>
            </div>
            <div class="pillar">
                <div class="pillar-name">Behaviour</div>
                <div class="pillar-score">${scoreResult.pillarScores.Behaviour}</div>
            </div>
        </div>

        <div class="section">
            <h3 class="section-title">Key Findings</h3>
            ${report.scoreExplanation.map(f => `
                <div class="finding finding-${(f as any).severity?.toLowerCase() || 'info'}">
                    <div>
                        <h4 class="finding-title">${f.label || (f as any).title}</h4>
                        <p class="finding-desc">${f.description}</p>
                    </div>
                </div>
            `).join('')}
            ${report.scoreExplanation.length === 0 ? '<p>No negative findings detected!</p>' : ''}
        </div>

        <div class="section">
            <h3 class="section-title">Recommendations</h3>
            ${report.priorityPlan.map(r => `
                <div class="recommendation">
                    <h4 class="rec-title">${r.title}</h4>
                    <p class="rec-why">${r.whyThisMatters || ''}</p>
                    <div class="rec-action">${(r.actionSteps || [])[0] || 'Continue current plan'}</div>
                </div>
            `).join('')}
            ${report.priorityPlan.length === 0 ? '<p>Keep up the great work! Maintain your current routine.</p>' : ''}
        </div>
    </div>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '..', 'scratch', 'build_muscle_dashboard.html'), html);
console.log('Dashboard generated.');
