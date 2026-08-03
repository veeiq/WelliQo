import React, { useState } from 'react';
import { useAssessmentStore } from '@/store/assessment-store';
import { ArrowLeft } from 'lucide-react';

const PILLARS = [
  {
    id: 'weight_group',
    label: 'Weight & Body Composition',
    icon: '⚖️',
    color: 'from-blue-400 to-indigo-500',
    shadow: 'shadow-blue-500/20',
    type: 'group',
    items: [
      { id: 'weight', label: 'Lose Weight & Burn Fat', icon: '📉' },
      { id: 'gain', label: 'Healthy Weight Gain', icon: '📈' },
      { id: 'muscle', label: 'Build Muscle & Tone Up', icon: '💪' },
    ]
  },
  {
    id: 'digestion_group',
    label: 'Digestion & Nutrition',
    icon: '🥗',
    color: 'from-emerald-400 to-green-500',
    shadow: 'shadow-emerald-500/20',
    type: 'group',
    items: [
      { id: 'nutrition', label: 'Better Eating Habits', icon: '🥗' },
      { id: 'gut', label: 'Improve Gut Health', icon: '🦠' },
      { id: 'hydration', label: 'Optimize Hydration', icon: '💧' },
    ]
  },
  {
    id: 'stress',
    label: 'Reduce Stress & Anxiety',
    icon: '🧘‍♂️',
    color: 'from-purple-400 to-fuchsia-500',
    shadow: 'shadow-purple-500/20',
    type: 'direct'
  },
  {
    id: 'womens_group',
    label: "Women's Wellness",
    icon: '🌸',
    color: 'from-pink-400 to-rose-500',
    shadow: 'shadow-pink-500/20',
    type: 'group',
    items: [
      { id: 'womens', label: "Women's Hormone Health", icon: '🌸' },
    ]
  },
  {
    id: 'energy',
    label: 'Boost Daily Energy',
    icon: '⚡',
    color: 'from-amber-400 to-orange-500',
    shadow: 'shadow-orange-500/20',
    type: 'direct'
  },
  {
    id: 'sleep',
    label: 'Improve Sleep Quality',
    icon: '😴',
    color: 'from-violet-400 to-purple-500',
    shadow: 'shadow-violet-500/20',
    type: 'direct'
  },
  {
    id: 'metabolic_group',
    label: 'Longevity & Metabolic',
    icon: '❤️',
    color: 'from-red-400 to-rose-500',
    shadow: 'shadow-red-500/20',
    type: 'group',
    items: [
      { id: 'heart', label: 'Heart & Metabolic Health', icon: '❤️' },
      { id: 'sugar', label: 'Blood Sugar Balance', icon: '🩸' },
      { id: 'immunity', label: 'Stronger Immunity', icon: '🛡️' },
    ]
  },
  {
    id: 'fitness_group',
    label: 'Fitness & Active Aging',
    icon: '🏃‍♂️',
    color: 'from-orange-400 to-amber-500',
    shadow: 'shadow-orange-500/20',
    type: 'group',
    items: [
      { id: 'fitness', label: 'Active & Fit Lifestyle', icon: '🏃‍♂️' },
      { id: 'aging', label: 'Healthy Aging & Joints', icon: '🦴' },
    ]
  },
  {
    id: 'skin_group',
    label: 'Skin, Hair & Beauty',
    icon: '✨',
    color: 'from-fuchsia-400 to-pink-500',
    shadow: 'shadow-fuchsia-500/20',
    type: 'group',
    items: [
      { id: 'skin', label: 'Glowing Skin & Anti-Aging', icon: '✨' },
      { id: 'hair', label: 'Strong Hair & Nails', icon: '💅' },
    ]
  }
];

export function GoalSelection() {
  const setGoal = useAssessmentStore((state) => state.setGoal);
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null);

  const activeGroup = PILLARS.find(p => p.id === activeGroupId);

  return (
    <div className="flex-1 flex flex-col pt-8 md:pt-16 px-4 pb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        
        {/* Header Section */}
        <div className="mb-12 text-center animate-in fade-in zoom-in-95 duration-1000 delay-150 fill-mode-both">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.2] text-balance">
            {activeGroup ? activeGroup.label : 'What brings you here today?'}
          </h2>
          <p className="mt-4 text-[19px] text-slate-500 dark:text-slate-400 font-medium">
            {activeGroup ? 'Select your specific focus area.' : "Select the area you'd most like to improve."}
          </p>
        </div>

        {/* Content Area */}
        <div className="w-full relative px-2">
          {!activeGroup ? (
            // Pillar Grid
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both">
              {PILLARS.map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => {
                    if (pillar.type === 'direct') {
                      setGoal(pillar.id);
                    } else {
                      setActiveGroupId(pillar.id);
                    }
                  }}
                  className={`group relative flex flex-col items-center justify-center gap-4 p-6 md:p-8 rounded-[2rem] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 transition-all duration-300 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 overflow-hidden text-center hover:${pillar.shadow}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800 group-hover:bg-transparent transition-colors duration-300">
                    <span className="text-5xl group-hover:scale-125 transition-transform duration-500 ease-out animate-bounce-in">{pillar.icon}</span>
                  </div>
                  
                  <span className="text-[17px] font-semibold text-slate-700 dark:text-slate-200 relative z-10 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {pillar.label}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            // Sub-items List
            <div className="max-w-2xl mx-auto w-full flex flex-col gap-4 animate-in slide-in-from-right-8 duration-500">
              <button
                onClick={() => setActiveGroupId(null)}
                className="self-start flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Categories
              </button>
              
              <div className="grid gap-4">
                {activeGroup.items?.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setGoal(item.id)}
                    className="flex items-center gap-6 p-6 w-full rounded-[1.5rem] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 transition-all duration-300 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10 text-left group"
                  >
                    <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/30 transition-colors">
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 mt-1">
                        Tap to start assessment
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
