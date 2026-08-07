import React from 'react';
import { 
  RecognitionBlock, ReflectionBlock, StrengthBlock, UnderstandingBlock, 
  RealityBlock, JourneyBlock, ActionsBlock, ResourcesBlock, ScoreBlock,
  BodyIntelligenceBlock, NutritionIntelligenceBlock, DailyBlueprintBlock, CompanionNutritionBlock
} from '../../../../../../../engine/types/experience-blocks';
import { Leaf, CheckCircle2, TrendingUp, Activity, Moon, ActivitySquare, Footprints, Flame, Droplets } from 'lucide-react';

const cn = (...classes: (string | boolean | undefined | null)[]) => classes.filter(Boolean).join(' ');

const PrintSectionDivider = ({ num, title, subtitle }: { num: string, title: string, subtitle?: string }) => (
  <div className="text-center my-12" style={{ breakAfter: 'avoid-page' }}>
    <div className="flex items-center justify-center gap-4 mb-4">
      <div className="h-px bg-slate-300 w-16"></div>
      <div className="text-slate-400 font-bold tracking-[0.3em] text-sm">{num}</div>
      <div className="h-px bg-slate-300 w-16"></div>
    </div>
    <h2 className="text-[28px] font-bold text-slate-900 uppercase tracking-widest">{title}</h2>
    {subtitle && <p className="text-lg text-slate-500 mt-2 italic">{subtitle}</p>}
  </div>
);

export const PrintRecognitionBlock = ({ block }: { block: RecognitionBlock }) => (
  <div className="text-center space-y-6 pt-12 pb-16" style={{ breakInside: 'avoid', widows: 3, orphans: 3 }}>
    <div className="inline-block px-4 py-1.5 border border-emerald-200 text-emerald-800 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
      Your Personalized Blueprint
    </div>
    <h1 className="text-[36px] font-bold tracking-tight text-slate-900 leading-[1.2] mb-6 px-12">
      {block.narrative.headline}
    </h1>
    <div className="text-emerald-700 font-bold tracking-[0.2em] text-lg uppercase mb-6 mt-4">
      We noticed something important.
    </div>
    <p className="text-[20px] text-slate-600 max-w-2xl mx-auto whitespace-pre-line leading-[1.8]">
      {block.narrative.body}
    </p>
  </div>
);

export const PrintReflectionBlock = ({ block }: { block: ReflectionBlock }) => (
  <div className="py-8" style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
    <PrintSectionDivider num="01" title="Initial Assessment" subtitle={block.narrative.headline} />
    <p className="text-center mt-4 text-[20px] text-slate-600 mb-12 max-w-2xl mx-auto leading-[1.8]">{block.narrative.body}</p>
    
    <div className="bg-emerald-50 rounded-2xl p-10 text-center mx-auto max-w-3xl" style={{ border: '1px solid #d1fae5', boxShadow: '0 4px 12px rgba(0,0,0,.04)' }}>
      <div className="flex justify-center mb-4">
        <Leaf className="w-8 h-8 text-emerald-600" />
      </div>
      <h3 className="text-[24px] font-bold mb-4 text-emerald-900">The good news?</h3>
      <p className="text-lg text-emerald-800 mb-2 leading-relaxed">{block.data.goodNews?.s1 || "Nothing we found suggests your body has stopped responding."}</p>
      <p className="text-lg text-emerald-800 mb-6 leading-relaxed">{block.data.goodNews?.s2 || "Your habits have become trapped in a cycle."}</p>
      <div className="inline-block px-6 py-2 bg-emerald-600 text-white rounded-full font-bold text-sm tracking-wide">
        {block.data.goodNews?.highlight || "Cycles can be broken."}
      </div>
    </div>
  </div>
);

export const PrintStrengthBlock = ({ block }: { block: StrengthBlock }) => (
  <div className="bg-white p-8 rounded-2xl my-10 mx-auto max-w-3xl" style={{ border: '1px solid #e2e8f0', breakInside: 'avoid', boxShadow: '0 4px 12px rgba(0,0,0,.04)' }}>
    <h3 className="text-[22px] font-bold text-slate-900 mb-4">{block.narrative.headline}</h3>
    <p className="text-slate-600 mb-8 text-[18px] leading-[1.8]">{block.narrative.body}</p>
    <ul className="space-y-5">
      {block.data.strengths.map((strength, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-800">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
          <span className="leading-[1.8] text-[18px]">{strength}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const PrintUnderstandingBlock = ({ block }: { block: UnderstandingBlock }) => (
  <div className="bg-slate-50 p-10 rounded-2xl my-10 mx-auto max-w-3xl" style={{ border: '1px solid #e2e8f0', breakInside: 'avoid', boxShadow: '0 4px 12px rgba(0,0,0,.04)' }}>
    <h3 className="text-[24px] font-bold text-slate-900 mb-8">{block.narrative.headline}</h3>
    
    {block.narrative.evidence && block.narrative.evidence.length > 0 && (
      <div className="mb-10 bg-white rounded-xl p-8 border border-slate-200">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Why we believe this</h4>
        <ul className="space-y-5">
          {block.narrative.evidence.map((ev, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
              <span className="leading-[1.8] text-[16px]">{ev}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

    <p className="text-slate-700 mb-6 text-[18px] leading-[1.8]">{block.narrative.body}</p>
    {block.data.contextualInsights.map((insight, i) => (
      <div key={i} className="text-[18px] leading-[1.8] whitespace-pre-line text-slate-600 mb-4">
        {insight}
      </div>
    ))}
  </div>
);

export const PrintRealityBlock = ({ block }: { block: RealityBlock }) => (
  <div className="bg-orange-50/50 p-10 rounded-2xl my-10 mx-auto max-w-3xl" style={{ border: '1px solid #ffedd5', breakInside: 'avoid', boxShadow: '0 4px 12px rgba(0,0,0,.04)' }}>
    <h3 className="text-[24px] font-bold mb-6 flex items-center gap-3 text-orange-900">
      <TrendingUp className="w-6 h-6" />
      {block.narrative.headline}
    </h3>
    <div className="border-t border-orange-200/50 pt-6">
      <div className="text-[18px] leading-[1.8] whitespace-pre-line text-orange-800/90">
        {block.narrative.body}
      </div>
    </div>
  </div>
);

export const PrintJourneyBlock = ({ block }: { block: JourneyBlock }) => (
  <div className="text-center my-16" style={{ breakInside: 'avoid' }}>
    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-blue-800 rounded-full font-medium mb-6 text-sm border border-blue-100">
      <Activity className="w-4 h-4" />
      What we'll focus on first: {block.data.mode}
    </div>
    <h2 className="text-[32px] font-bold text-slate-900 mb-6">{block.narrative.headline}</h2>
    <p className="text-[20px] text-slate-600 leading-[1.8] max-w-3xl mx-auto">{block.narrative.body}</p>
  </div>
);

export const PrintActionsBlock = ({ block }: { block: ActionsBlock }) => (
  <div className="my-16" style={{ breakInside: 'avoid' }}>
    <PrintSectionDivider num="02" title="Action Plan" subtitle={block.narrative.headline} />
    <p className="text-center mt-6 text-[20px] text-slate-600 mb-12 max-w-3xl mx-auto leading-[1.8]">{block.narrative.body}</p>
    
    <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
      {block.data.actions.map((action, index) => (
        <div key={index} className="bg-white p-8 rounded-2xl flex flex-col h-full" style={{ border: '1px solid #e2e8f0', breakInside: 'avoid', boxShadow: '0 4px 12px rgba(0,0,0,.04)' }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-bold text-base shrink-0">
              {index + 1}
            </div>
            <h4 className="text-[20px] font-bold text-slate-900 leading-tight">{action.title}</h4>
          </div>
          
          <div className="space-y-6 text-base flex-grow">
            {action.why && (
              <p className="text-slate-600 leading-[1.8] italic border-l-2 border-slate-200 pl-4">"{action.why}"</p>
            )}
            {action.action && (
              <div className="bg-slate-50 p-6 rounded-xl mt-4 border border-slate-100">
                <span className="font-semibold text-slate-900 block mb-2 uppercase text-xs tracking-wider">Action</span>
                <p className="text-slate-700 leading-[1.8]">{action.action}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const PrintScoreBlock = ({ block }: { block: ScoreBlock }) => (
  <div className="my-16 text-center" style={{ breakInside: 'avoid' }}>
    <div className="max-w-2xl mx-auto bg-white rounded-3xl p-12 flex flex-col items-center text-center" style={{ border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,.04)' }}>
      <h2 className="text-[28px] font-black text-slate-900 mb-6 leading-tight">
        {block.narrative.headline}
      </h2>
      <p className="text-lg text-slate-600 mb-10 whitespace-pre-line leading-[1.8] font-medium">
        {block.narrative.body}
      </p>
      
      {block.data.showScore && (
        <div className="bg-slate-50 px-12 py-8 rounded-2xl border border-slate-200 flex items-center gap-8">
          <div className="text-left">
            <span className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
              Today's
            </span>
            <span className="block text-sm font-bold text-slate-600 uppercase tracking-widest">
              Baseline
            </span>
          </div>
          <div className="w-px h-16 bg-slate-300"></div>
          <span className="text-[48px] font-black tracking-tighter text-slate-900">
            {block.data.overallScore >= 90 ? 'Excellent' : block.data.overallScore >= 75 ? 'Great' : block.data.overallScore}
          </span>
        </div>
      )}
    </div>
  </div>
);

export const PrintBodyIntelligenceBlock = ({ block }: { block: BodyIntelligenceBlock }) => {
  const m = block.data.metrics;
  return (
    <div className="my-16" style={{ breakInside: 'avoid' }}>
      <PrintSectionDivider num="03" title="Body Intelligence" subtitle="A snapshot of your current biometrics and clinical targets." />
      
      <div className="bg-white rounded-2xl p-10 mt-10 max-w-4xl mx-auto" style={{ border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,.04)' }}>
        <div className="grid grid-cols-4 gap-6 mb-10">
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl text-center">
            <div className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-2">Body Mass Index</div>
            <div className="text-[28px] font-bold text-slate-900">{m.bmi}</div>
            <div className="text-sm text-slate-500 mt-1">{m.bmiCategory}</div>
          </div>
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl text-center">
            <div className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-2 flex justify-center items-center gap-1"><Flame className="w-4 h-4"/> Target Calories</div>
            <div className="text-[28px] font-bold text-slate-900">{m.targetCalories}</div>
            <div className="text-sm text-slate-500 mt-1">kcal / day</div>
          </div>
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl text-center">
            <div className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-2 flex justify-center items-center gap-1"><ActivitySquare className="w-4 h-4"/> Target Protein</div>
            <div className="text-[28px] font-bold text-slate-900">{m.targetProtein}g</div>
            <div className="text-sm text-slate-500 mt-1">per day</div>
          </div>
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl text-center">
            <div className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-2 flex justify-center items-center gap-1"><Droplets className="w-4 h-4"/> Target Water</div>
            <div className="text-[28px] font-bold text-slate-900">{m.targetWater}L</div>
            <div className="text-sm text-slate-500 mt-1">per day</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-8 gap-y-10 pt-10 border-t border-slate-200 mb-10">
          <div>
            <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Metabolic Age</div>
            <div className="text-[20px] font-bold text-slate-800">{m.metabolicAge} yrs</div>
          </div>
          <div>
            <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Est. Body Fat</div>
            <div className="text-[20px] font-bold text-slate-800">{m.bodyFatEstimate}</div>
          </div>
          <div>
            <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Lean Body Mass</div>
            <div className="text-[20px] font-bold text-slate-800">{m.leanMass} kg</div>
          </div>
          <div>
            <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Fat Mass</div>
            <div className="text-[20px] font-bold text-slate-800">{m.fatMass} kg</div>
          </div>
          
          <div>
            <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Target Weight</div>
            <div className="text-[20px] font-bold text-slate-800">{m.targetWeight} kg</div>
          </div>
          <div>
            <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Healthy Range</div>
            <div className="text-[20px] font-bold text-slate-800">{m.healthyWeightRange} kg</div>
          </div>
          <div>
            <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Fat to Lose</div>
            <div className="text-[20px] font-bold text-slate-800">{m.fatToLose} kg</div>
          </div>
          <div>
            <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Pace (Days)</div>
            <div className="text-[20px] font-bold text-slate-800">{m.daysToGoal} days</div>
          </div>

          <div>
            <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">BMR</div>
            <div className="text-[20px] font-bold text-slate-800">{m.bmr} kcal</div>
          </div>
          <div>
            <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">TDEE</div>
            <div className="text-[20px] font-bold text-slate-800">{m.tdee} kcal</div>
          </div>
          <div>
            <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Ideal Waist</div>
            <div className="text-[20px] font-bold text-slate-800">{m.idealWaist}</div>
          </div>
          <div>
            <div className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Waist Risk</div>
            <div className="text-[20px] font-bold text-slate-800">{m.waistRisk}</div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8 text-center">If you improve just these 3 numbers...</h4>
          <div className="grid grid-cols-3 gap-8">
            {block.data.improvementsScoreboard.map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-6 flex items-center justify-between">
                <span className="text-[18px] text-slate-700 font-bold flex items-center gap-2">
                  {item.label}
                </span>
                <div className="flex items-center gap-3 text-base font-bold">
                  <span className="text-slate-400 line-through">{item.current}</span>
                  <span className="text-slate-300">→</span>
                  <span className="text-emerald-600">{item.target}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PrintNutritionIntelligenceBlock = ({ block }: { block: NutritionIntelligenceBlock }) => (
  <div className="my-16" style={{ breakInside: 'avoid' }}>
    <PrintSectionDivider num="04" title="Micronutrient Dashboard" subtitle="Nutrients that need your attention." />
    
    <div className="grid grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
      {block.data.nutrients.map((n, i) => (
        <div key={i} className="bg-white rounded-2xl p-8 flex flex-col h-full" style={{ border: '1px solid #e2e8f0', breakInside: 'avoid', boxShadow: '0 4px 12px rgba(0,0,0,.04)' }}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-[22px] font-bold text-slate-900">{n.label}</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-8 text-center">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Target</div>
              <div className="text-base font-bold text-slate-800">{n.target}</div>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Current</div>
              <div className="text-base font-bold text-slate-800">{n.current}</div>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-xl p-3 flex flex-col justify-center">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-1 text-slate-500">Gap</div>
              <div className="text-base font-bold text-slate-800">
                {n.status === 'green' ? '✅' : n.gap}
              </div>
            </div>
          </div>
          
          {n.foodEquivalent && (
            <div className="text-center text-sm font-medium text-slate-600 mb-8 bg-slate-50 py-3 rounded-xl border border-slate-100">
              {n.foodEquivalent}
            </div>
          )}
          
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl mb-2 flex-grow">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Why it matters</div>
            <p className="text-[15px] text-slate-700 leading-[1.8]">{n.whyItMatters}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const PrintDailyBlueprintBlock = ({ block }: { block: DailyBlueprintBlock }) => (
  <div className="my-16 p-12 bg-white rounded-3xl mx-auto max-w-4xl" style={{ border: '1px solid #e2e8f0', breakInside: 'avoid', boxShadow: '0 4px 12px rgba(0,0,0,.04)' }}>
    <div className="text-center mb-12">
      <h2 className="text-[28px] font-bold text-slate-900">{block.narrative.headline}</h2>
      <p className="mt-4 text-[20px] text-slate-600 leading-[1.8]">{block.narrative.body}</p>
    </div>
    <div className="grid grid-cols-4 gap-8">
      {block.data.meals.map((meal, i) => (
        <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-2xl text-center">
          <div className="text-slate-800 font-bold mb-6 text-[18px]">{meal.name}</div>
          <div className="space-y-2">
            <div className="text-[36px] font-black text-slate-900 leading-none">{meal.protein}g</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Protein</div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 space-y-2">
            <div className="text-[22px] font-bold text-slate-700 leading-none">{meal.calories}</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Calories</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const PrintCompanionNutritionBlock = ({ block }: { block: CompanionNutritionBlock }) => (
  <div className="my-16" style={{ breakInside: 'avoid' }}>
    <PrintSectionDivider num="05" title="Companion Nutrition" subtitle="Strategic products to help close nutritional gaps." />
    
    <div className="space-y-8 mt-10 max-w-4xl mx-auto">
      {block.data.nutrients.map((n, i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden flex" style={{ border: '1px solid #e2e8f0', breakInside: 'avoid', boxShadow: '0 4px 12px rgba(0,0,0,.04)' }}>
          
          {/* Left: Natural Foods */}
          <div className="p-10 w-1/2 border-r border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-slate-100 text-slate-700">
                {n.label} Gap
              </div>
              <h3 className="text-[20px] font-bold text-slate-900">Natural Sources</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {n.foods.map((foodGroup: any, j: number) => (
                <div key={j}>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    {foodGroup.category}
                  </div>
                  <ul className="space-y-4">
                    {foodGroup.items.map((item: string, k: number) => (
                      <li key={k} className="text-[16px] font-medium text-slate-700 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Companion Support */}
          <div className="p-10 w-1/2 bg-slate-50 flex flex-col justify-center">
            {n.difficulty && (
              <div className="mb-8 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Difficulty to meet via food</div>
                  <div className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-slate-100 text-slate-700">
                    {n.difficulty}
                  </div>
                </div>
                <p className="text-[15px] text-slate-600 leading-[1.8] italic">
                  Food alone can absolutely meet your needs, but consistently reaching this amount every day may be {n.difficulty.toLowerCase()} depending on your routine.
                </p>
              </div>
            )}

            <h3 className="text-[20px] font-bold text-slate-900 mb-3">Nutrition Support Options</h3>
            <p className="text-[15px] text-slate-500 mb-8">Discuss these options with your coach to help fill your {n.label.toLowerCase()} gap.</p>
            <div className="space-y-4 flex flex-col">
              {n.companionSupport.map((product: string, j: number) => (
                <div key={j} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <Leaf className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-800 text-[16px]">{product}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
