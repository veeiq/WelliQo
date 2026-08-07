import React from 'react';
import Link from 'next/link';
import { 
  RecognitionBlock, ReflectionBlock, StrengthBlock, UnderstandingBlock, 
  RealityBlock, JourneyBlock, ActionsBlock, ResourcesBlock, ScoreBlock, ExperienceBlock,
  BodyIntelligenceBlock, NutritionIntelligenceBlock, DailyBlueprintBlock, CompanionNutritionBlock
} from '@/engine/types/experience-blocks';
import { AlertTriangle, TrendingUp, Leaf, CheckCircle2, BookOpen, Activity, ChevronRight, ActivitySquare, Target, Droplets, Moon, Footprints, Flame } from 'lucide-react';
import { HealthWheel } from '../HealthWheel';

const cn = (...classes: (string | boolean | undefined | null)[]) => classes.filter(Boolean).join(' ');

export const RecognitionBlockUI = ({ block }: { block: RecognitionBlock }) => (
  <div className="text-center space-y-6 pt-10 pb-8">
    <div className="inline-block px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
      Your Personalized Blueprint
    </div>
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.1] mb-6">
      {block.narrative.headline}
    </h1>
    <div className="text-emerald-600 dark:text-emerald-400 font-bold tracking-[0.2em] text-lg md:text-xl uppercase mb-6 mt-4">
      We noticed something important.
    </div>
    <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto whitespace-pre-line">
      {block.narrative.body}
    </p>
  </div>
);

export const ReflectionBlockUI = ({ block }: { block: ReflectionBlock }) => (
  <div className="py-8">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">{block.narrative.headline}</h2>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{block.narrative.body}</p>
    </div>
    <div className="mt-12 bg-emerald-600 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-emerald-900/20 max-w-3xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-20 pointer-events-none">
        <Leaf className="w-48 h-48" />
      </div>
      <div className="relative z-10">
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-500/50 p-4 rounded-full">
            <Leaf className="w-10 h-10 text-white" />
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">The good news?</h3>
        <p className="text-lg md:text-xl text-emerald-50 mb-2">{block.data.goodNews?.s1 || "Nothing we found suggests your body has stopped responding."}</p>
        <p className="text-lg md:text-xl text-emerald-50 mb-6">{block.data.goodNews?.s2 || "Your habits have become trapped in a cycle."}</p>
        <div className="inline-block px-6 py-2 bg-white text-emerald-800 rounded-full font-bold text-lg">{block.data.goodNews?.highlight || "Cycles can be broken."}</div>
      </div>
    </div>
  </div>
);

export const StrengthBlockUI = ({ block }: { block: StrengthBlock }) => (
  <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 p-6 rounded-3xl my-8">
    <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-2">{block.narrative.headline}</h3>
    <p className="text-emerald-800 dark:text-emerald-400/90 mb-4">{block.narrative.body}</p>
    <ul className="space-y-2">
      {block.data.strengths.map((strength, i) => (
        <li key={i} className="flex items-start gap-2 text-emerald-800 dark:text-emerald-400/90">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
          <span>{strength}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const UnderstandingBlockUI = ({ block }: { block: UnderstandingBlock }) => (
  <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl my-8">
    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">{block.narrative.headline}</h3>
    
    {block.narrative.evidence && block.narrative.evidence.length > 0 && (
      <div className="mb-6 bg-white dark:bg-slate-950 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Why we believe this</h4>
        <ul className="space-y-3 mb-6">
          {block.narrative.evidence.map((ev, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>{ev}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 mt-6 text-center flex flex-col items-center gap-4">
          <div>
            <p className="text-slate-900 dark:text-slate-100 font-semibold mb-2">We don't expect this report to be perfect.</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">If we misunderstood something, tell us what we missed.</p>
          </div>
          <Link href="/contact" className="px-6 py-2.5 mt-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-bold transition-all shadow-sm">
            Tell us what we missed
          </Link>
        </div>
      </div>
    )}

    <p className="text-slate-600 dark:text-slate-400 mb-4 text-lg leading-relaxed">{block.narrative.body}</p>
    {block.data.contextualInsights.map((insight, i) => (
      <div key={i} className="text-sm md:text-base leading-relaxed whitespace-pre-line text-slate-700 dark:text-slate-300">
        {insight}
      </div>
    ))}
  </div>
);

export const RealityBlockUI = ({ block }: { block: RealityBlock }) => (
  <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 p-6 md:p-8 rounded-3xl my-8">
    <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-orange-800 dark:text-orange-400">
      <TrendingUp className="w-5 h-5" />
      {block.narrative.headline}
    </h3>
    <div className="mt-4 pt-4 border-t border-orange-200/50 dark:border-orange-800/50">
      <div className="text-sm md:text-base leading-relaxed whitespace-pre-line text-orange-800 dark:text-orange-400/90">
        {block.narrative.body}
      </div>
    </div>
  </div>
);

export const JourneyBlockUI = ({ block }: { block: JourneyBlock }) => (
  <div className="text-center my-12">
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium mb-4">
      <Activity className="w-4 h-4" />
      What we'll focus on first: {block.data.mode}
    </div>
    <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">{block.narrative.headline}</h2>
    <p className="text-lg text-slate-600 dark:text-slate-400">{block.narrative.body}</p>
  </div>
);

export const ActionsBlockUI = ({ block }: { block: ActionsBlock }) => (
  <div className="my-12">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">{block.narrative.headline}</h2>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{block.narrative.body}</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      {block.data.actions.map((action, index) => (
        <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all text-left flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold text-sm shrink-0">
              {index + 1}
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-tight">{action.title}</h4>
          </div>
          
          <div className="space-y-3 text-sm flex-grow">
            {action.why && (
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed italic border-l-2 border-slate-200 dark:border-slate-800 pl-3">"{action.why}"</p>
            )}
            {action.action && (
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl mt-4">
                <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-1">Action</span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{action.action}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ResourcesBlockUI = ({ block }: { block: ResourcesBlock }) => {
  if (block.data.recommendedAssessments.length === 0) return null;
  return (
    <div className="my-12">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-emerald-500" />
        {block.narrative.headline}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6">{block.narrative.body}</p>
      {/* Example static rendering of resources */}
    </div>
  );
};

export const ScoreBlockUI = ({ block }: { block: ScoreBlock }) => (
  <div className="my-16 text-center pt-16">
    {block.data.pillars && block.data.pillars.length > 0 && (
      <div className="mb-16">
        <HealthWheel pillarScores={block.data.pillars?.map((p: any) => ({
          ...p,
          icon: p.id === 'nutrition' ? 'Apple' : p.id === 'mindset' ? 'Brain' : p.id === 'recovery' ? 'Moon' : 'Activity',
          weightPercent: 0
        })) || []} />
      </div>
    )}
    
    <div className="max-w-3xl mx-auto relative group">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
      
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl overflow-hidden flex flex-col items-center text-center">
        {/* Subtle Decorative Elements */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <h2 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600 dark:from-indigo-400 dark:to-emerald-400 mb-6 leading-tight">
          {block.narrative.headline}
        </h2>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 whitespace-pre-line leading-relaxed max-w-2xl font-medium">
          {block.narrative.body}
        </p>
        
        {block.data.showScore && (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-3xl blur opacity-30"></div>
            <div className="relative bg-white dark:bg-slate-950 px-10 py-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl flex items-center gap-8">
              <div className="text-left">
                <span className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">
                  Today's
                </span>
                <span className="block text-sm font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
                  Baseline
                </span>
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
              <span className={cn(
                "text-5xl md:text-6xl font-black tracking-tighter drop-shadow-sm",
                block.data.overallScore >= 90 ? "text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-emerald-600" : block.data.overallScore >= 75 ? "text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-emerald-500" : "text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-300 dark:to-purple-400"
              )}>
                {block.data.overallScore >= 90 ? '🌟 Excellent' : block.data.overallScore >= 75 ? '✅ Great' : block.data.overallScore}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

export const BodyIntelligenceBlockUI = ({ block }: { block: BodyIntelligenceBlock }) => {
  const m = block.data.metrics;
  return (
    <div className="my-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Your Body Today</h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">A snapshot of your current biometrics and clinical targets.</p>
      </div>
      
      <div className="bg-slate-900 dark:bg-slate-950 rounded-3xl p-6 md:p-8 border border-slate-800 text-white shadow-xl shadow-slate-900/20">
        
        {/* Top 4 Hero Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          <div className="bg-slate-800/50 p-4 rounded-2xl">
            <div className="text-slate-400 text-xs uppercase tracking-wider font-medium mb-1">Body Mass Index</div>
            <div className="text-2xl font-bold">{m.bmi}</div>
            <div className="text-xs text-slate-500 mt-1">{m.bmiCategory}</div>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-2xl">
            <div className="text-slate-400 text-xs uppercase tracking-wider font-medium mb-1 flex items-center gap-1"><Flame className="w-3 h-3"/> Target Calories</div>
            <div className="text-2xl font-bold text-orange-400">{m.targetCalories}</div>
            <div className="text-xs text-slate-500 mt-1">kcal / day</div>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-2xl">
            <div className="text-slate-400 text-xs uppercase tracking-wider font-medium mb-1 flex items-center gap-1"><ActivitySquare className="w-3 h-3"/> Target Protein</div>
            <div className="text-2xl font-bold text-blue-400">{m.targetProtein}g</div>
            <div className="text-xs text-slate-500 mt-1">per day</div>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-2xl">
            <div className="text-slate-400 text-xs uppercase tracking-wider font-medium mb-1 flex items-center gap-1"><Droplets className="w-3 h-3"/> Target Water</div>
            <div className="text-2xl font-bold text-cyan-400">{m.targetWater}L</div>
            <div className="text-xs text-slate-500 mt-1">per day</div>
          </div>
        </div>

        {/* Detailed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 pt-6 border-t border-slate-800 mb-8">
          <div>
            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Metabolic Age</div>
            <div className="text-lg font-semibold text-slate-200">{m.metabolicAge} yrs</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Est. Body Fat</div>
            <div className="text-lg font-semibold text-slate-200">{m.bodyFatEstimate}</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Lean Body Mass</div>
            <div className="text-lg font-semibold text-slate-200">{m.leanMass} kg</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Fat Mass</div>
            <div className="text-lg font-semibold text-slate-200">{m.fatMass} kg</div>
          </div>
          
          <div>
            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Target Weight</div>
            <div className="text-lg font-semibold text-slate-200">{m.targetWeight} kg</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Healthy Range</div>
            <div className="text-lg font-semibold text-slate-200">{m.healthyWeightRange} kg</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Fat to Lose</div>
            <div className="text-lg font-semibold text-slate-200">{m.fatToLose} kg</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Pace (Days)</div>
            <div className="text-lg font-semibold text-slate-200">{m.daysToGoal} days</div>
          </div>

          <div>
            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">BMR</div>
            <div className="text-lg font-semibold text-slate-200">{m.bmr} kcal</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">TDEE</div>
            <div className="text-lg font-semibold text-slate-200">{m.tdee} kcal</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Ideal Waist</div>
            <div className="text-lg font-semibold text-slate-200">{m.idealWaist}</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Waist Risk</div>
            <div className={cn("text-lg font-semibold", m.waistRisk === 'Low to Moderate' ? 'text-emerald-400' : 'text-amber-400')}>{m.waistRisk}</div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">If you improve just these 3 numbers...</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {block.data.improvementsScoreboard.map((item, i) => (
              <div key={i} className="bg-slate-800/50 rounded-2xl p-4 flex items-center justify-between">
                <span className="text-slate-300 font-medium flex items-center gap-2">
                  {item.label === 'Sleep' && <Moon className="w-4 h-4 text-indigo-400" />}
                  {item.label === 'Protein' && <ActivitySquare className="w-4 h-4 text-blue-400" />}
                  {item.label === 'Steps' && <Footprints className="w-4 h-4 text-emerald-400" />}
                  {item.label}
                </span>
                <div className="flex items-center gap-2 text-sm font-bold">
                  <span className="text-slate-500 line-through">{item.current}</span>
                  <ChevronRight className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-400">{item.target}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const NutritionIntelligenceBlockUI = ({ block }: { block: NutritionIntelligenceBlock }) => (
  <div className="my-16">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">{block.narrative.headline}</h2>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Nutrients that need your attention.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {block.data.nutrients.map((n, i) => (
        <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{n.label}</h3>
            <div className={cn(
              "w-3 h-3 rounded-full",
              n.status === 'green' ? "bg-emerald-500" : n.status === 'yellow' ? "bg-amber-400" : "bg-red-500"
            )}></div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mb-4 text-center">
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Target</div>
              <div className="text-sm font-bold text-slate-700 dark:text-slate-300">{n.target}</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Current</div>
              <div className="text-sm font-bold text-slate-700 dark:text-slate-300">{n.current}</div>
            </div>
            <div className={cn(
              "rounded-xl p-2 flex flex-col justify-center",
              n.status === 'green' ? "bg-emerald-50 dark:bg-emerald-900/20" : n.status === 'yellow' ? "bg-amber-50 dark:bg-amber-900/20" : "bg-red-50 dark:bg-red-900/20"
            )}>
              <div className={cn(
                "text-[10px] font-bold uppercase tracking-wider mb-1",
                n.status === 'green' ? "text-emerald-600 dark:text-emerald-400" : n.status === 'yellow' ? "text-amber-600 dark:text-amber-400" : "text-red-600 dark:text-red-400"
              )}>Gap</div>
              <div className={cn(
                "text-sm font-bold",
                n.status === 'green' ? "text-emerald-700 dark:text-emerald-300" : n.status === 'yellow' ? "text-amber-700 dark:text-amber-300" : "text-red-700 dark:text-red-300"
              )}>
                {n.status === 'green' ? '✅ Excellent' : n.gap}
              </div>
            </div>
          </div>
          
          {n.foodEquivalent && (
            <div className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4 bg-slate-50 dark:bg-slate-800/30 py-2 rounded-xl border border-slate-100 dark:border-slate-800">
              {n.foodEquivalent}
            </div>
          )}
          
          <div className="bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-2xl mb-4 flex-grow">
            <div className="text-xs font-bold text-blue-800 dark:text-blue-400 uppercase tracking-wider mb-2">Why it matters</div>
            <p className="text-sm text-blue-900/80 dark:text-blue-300/80 leading-relaxed">{n.whyItMatters}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const DailyBlueprintBlockUI = ({ block }: { block: DailyBlueprintBlock }) => (
  <div className="my-16 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-3xl p-8">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-emerald-900 dark:text-emerald-400">{block.narrative.headline}</h2>
      <p className="mt-4 text-lg text-emerald-800/80 dark:text-emerald-400/80">{block.narrative.body}</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {block.data.meals.map((meal, i) => (
        <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm text-center">
          <div className="text-emerald-800 dark:text-emerald-400 font-bold mb-4">{meal.name}</div>
          <div className="space-y-2">
            <div className="text-2xl font-black text-slate-900 dark:text-slate-100">{meal.protein}g</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Protein</div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1">
            <div className="text-lg font-bold text-slate-600 dark:text-slate-300">{meal.calories}</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Calories</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const CompanionNutritionBlockUI = ({ block }: { block: CompanionNutritionBlock }) => (
  <div className="my-16">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">{block.narrative.headline}</h2>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{block.narrative.body}</p>
    </div>
    
    <div className="space-y-6">
      {block.data.nutrients.map((n, i) => (
        <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row">
          {/* Left: Natural Foods */}
          <div className="p-6 md:w-1/2 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className={cn(
                "px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full",
                n.status === 'green' ? "bg-emerald-100 text-emerald-700" : n.status === 'yellow' ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"
              )}>{n.label} Gap</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Natural Sources</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {n.foods.map((foodGroup: any, j: number) => (
                <div key={j}>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    {foodGroup.category === 'Dairy' ? '🥛' : foodGroup.category === 'Plant' ? '🥜' : foodGroup.category === 'Egg' ? '🥚' : '🥩'}
                    {foodGroup.category}
                  </div>
                  <ul className="space-y-2">
                    {foodGroup.items.map((item: string, k: number) => (
                      <li key={k} className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Companion Support */}
          <div className="p-6 md:w-1/2 bg-slate-50 dark:bg-slate-900/50 flex flex-col justify-center">
            
            {/* Difficulty Rating */}
            {n.difficulty && (
              <div className="mb-6 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Difficulty to meet via food</div>
                  <div className={cn(
                    "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase",
                    n.difficulty === 'Easy' ? "bg-emerald-100 text-emerald-700" : n.difficulty === 'Moderate' ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"
                  )}>
                    {n.difficulty === 'Easy' ? '🟢' : n.difficulty === 'Moderate' ? '🟡' : '🔴'} {n.difficulty}
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic">
                  Food alone can absolutely meet your needs, but consistently reaching this amount every day may be {n.difficulty.toLowerCase()} depending on your routine.
                </p>
              </div>
            )}

            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Nutrition Support Options</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Discuss these options with your coach to help fill your {n.label.toLowerCase()} gap.</p>
            <div className="space-y-3 flex flex-col">
              {n.companionSupport.map((product: string, j: number) => (
                <a 
                  key={j} 
                  href="#coach-cta"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('coach-cta')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-start gap-3 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-emerald-500 hover:shadow-md cursor-pointer transition-all group"
                >
                  <Leaf className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">{product}</span>
                  <ChevronRight className="w-5 h-5 text-slate-300 dark:text-slate-600 ml-auto group-hover:text-emerald-500 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
