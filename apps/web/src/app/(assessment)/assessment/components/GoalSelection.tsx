import React from 'react';
import { useAssessmentStore } from '@/store/assessment-store';
import { ASSESSMENTS } from '@/assessments/registry';

interface Section {
  title: string;
  theme: { color: string; shadow: string };
  items: any[];
}

const THEMES: Record<string, { color: string; shadow: string }> = {
  'Weight & Body Goals': { color: 'from-amber-400 to-orange-500', shadow: 'shadow-orange-500/20' },
  'Foundation Wellness': { color: 'from-blue-400 to-indigo-500', shadow: 'shadow-blue-500/20' },
  'Metabolic Health': { color: 'from-emerald-400 to-teal-500', shadow: 'shadow-emerald-500/20' },
  'Lifestyle Health': { color: 'from-sky-400 to-blue-500', shadow: 'shadow-sky-500/20' },
  'Mental & Emotional': { color: 'from-violet-400 to-purple-500', shadow: 'shadow-violet-500/20' },
  'Beauty & Healthy Aging': { color: 'from-rose-400 to-pink-500', shadow: 'shadow-rose-500/20' },
  'Men & Women': { color: 'from-fuchsia-400 to-purple-500', shadow: 'shadow-fuchsia-500/20' },
  'Food & Eating': { color: 'from-green-400 to-emerald-500', shadow: 'shadow-green-500/20' },
  'Special Lifestyle': { color: 'from-indigo-400 to-violet-500', shadow: 'shadow-indigo-500/20' },
  'AI Master': { color: 'from-slate-400 to-slate-600', shadow: 'shadow-slate-500/20' }
};

export function GoalSelection() {
  const setAssessmentId = useAssessmentStore((state) => state.setAssessmentId);

  // Group assessments by category
  const sectionsMap = new Map<string, any[]>();
  ASSESSMENTS.forEach(assessment => {
    if (!sectionsMap.has(assessment.category)) {
      sectionsMap.set(assessment.category, []);
    }
    sectionsMap.get(assessment.category)!.push(assessment);
  });

  const sections: Section[] = Array.from(sectionsMap.entries()).map(([title, items]) => ({
    title,
    theme: THEMES[title] || THEMES['AI Master']!,
    items
  }));

  return (
    <div className="flex-1 flex flex-col pt-8 md:pt-16 px-4 pb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 overflow-y-auto hide-scrollbar">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        
        {/* Header Section */}
        <div className="mb-16 text-center animate-in fade-in zoom-in-95 duration-1000 delay-150 fill-mode-both">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.2] text-balance">
            The World's Most Complete Wellness Assessment
          </h2>
          <p className="mt-4 text-[19px] text-slate-500 dark:text-slate-400 font-medium">
            Select the area you'd most like to improve today.
          </p>
        </div>

        {/* Sections */}
        <div className="w-full flex flex-col gap-16 px-2">
          {sections.map((section, sectionIdx) => (
            <div key={section.title} className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both" style={{ animationDelay: `${(sectionIdx + 2) * 150}ms` }}>
              <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
                <h3 className="text-2xl md:text-3xl font-medium text-slate-900 dark:text-white">
                  {section.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {section.items.map((item) => {
                  const disabled = item.status !== 'available';
                  return (
                    <button
                      key={item.id}
                      disabled={disabled}
                      onClick={() => setAssessmentId(item.id)}
                      className={`group relative flex flex-col items-center justify-center gap-4 p-6 rounded-[2rem] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 transition-all duration-300 text-center ${disabled ? 'opacity-60 cursor-not-allowed grayscale' : `hover:border-transparent hover:shadow-2xl hover:-translate-y-2 hover:${section.theme.shadow}`}`}
                    >
                      {!disabled && (
                        <div className={`absolute inset-0 bg-gradient-to-br ${section.theme.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-[2rem]`} />
                      )}
                      
                      <div className={`relative z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800 transition-colors duration-300 ${!disabled && 'group-hover:bg-transparent'}`}>
                        <span className={`text-4xl md:text-5xl transition-transform duration-500 ease-out ${!disabled && 'group-hover:scale-125 animate-bounce-in'}`}>
                          {item.emoji || '✨'}
                        </span>
                      </div>
                      
                      <div className="flex flex-col gap-1 relative z-10">
                        <span className={`text-[15px] md:text-[17px] font-semibold text-slate-700 dark:text-slate-200 transition-colors ${!disabled && 'group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                          {item.title}
                        </span>
                        {disabled && (
                          <span className="text-xs font-bold text-amber-500 tracking-wider uppercase">Coming Soon</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
