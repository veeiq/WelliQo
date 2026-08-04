import React from 'react';
import { useAssessmentStore } from '@/store/assessment-store';

type SectionItem = {
  id: string;
  label: string;
  icon: string;
  disabled?: boolean;
};

type Section = {
  title: string;
  theme: {
    color: string;
    shadow: string;
  };
  items: SectionItem[];
};

const SECTIONS: Section[] = [
  {
    title: 'Weight & Body Goals',
    theme: { color: 'from-amber-400 to-orange-500', shadow: 'shadow-orange-500/20' },
    items: [
      { id: 'weight', label: 'Weight Management', icon: '⚖️' },
      { id: 'lose_weight', label: 'Lose Weight & Burn Fat', icon: '🔥' },
      { id: 'healthy_weight_gain', label: 'Healthy Weight Gain', icon: '🍽️' },
      { id: 'muscle', label: 'Build Muscle & Tone', icon: '💪' },
      { id: 'fitness', label: 'Fitness & Active Lifestyle', icon: '🏃' },
    ]
  },
  {
    title: 'Foundation Wellness',
    theme: { color: 'from-blue-400 to-indigo-500', shadow: 'shadow-blue-500/20' },
    items: [
      { id: 'general_wellness', label: 'General Wellness Assessment', icon: '🌍' },
      { id: 'sleep', label: 'Sleep & Recovery', icon: '😴' },
      { id: 'energy', label: 'Daily Energy', icon: '⚡' },
      { id: 'nutrition', label: 'Nutrition', icon: '🥗' },
      { id: 'hydration', label: 'Hydration', icon: '💧' },
      { id: 'stress', label: 'Stress & Mental Wellbeing', icon: '😌' },
      { id: 'brain_health', label: 'Brain Health & Mental Focus', icon: '🧠' },
    ]
  },
  {
    title: 'Metabolic Health',
    theme: { color: 'from-emerald-400 to-teal-500', shadow: 'shadow-emerald-500/20' },
    items: [
      { id: 'heart', label: 'Heart & Metabolic Health', icon: '❤️' },
      { id: 'sugar', label: 'Blood Sugar Balance', icon: '🩸' },
      { id: 'gut', label: 'Gut Health', icon: '🦠' },
      { id: 'digestive', label: 'Digestive Wellness', icon: '🍃' },
      { id: 'immunity', label: 'Stronger Immunity', icon: '🛡️' },
    ]
  },
  {
    title: 'Lifestyle Health',
    theme: { color: 'from-sky-400 to-blue-500', shadow: 'shadow-sky-500/20' },
    items: [
      { id: 'digital_wellness', label: 'Digital Wellness', icon: '📱' },
      { id: 'office_worker', label: 'Office Worker Wellness', icon: '💻' },
      { id: 'eye_wellness', label: 'Eye Wellness', icon: '👁️' },
      { id: 'posture', label: 'Posture & Spine Health', icon: '🦴' },
      { id: 'respiratory', label: 'Respiratory Wellness', icon: '🫁' },
      { id: 'preventive', label: 'Preventive Health & Risk', icon: '🧬' },
      { id: 'seasonal', label: 'Seasonal Wellness', icon: '🌞' },
    ]
  },
  {
    title: 'Mental & Emotional',
    theme: { color: 'from-violet-400 to-purple-500', shadow: 'shadow-violet-500/20' },
    items: [
      { id: 'anxiety', label: 'Anxiety & Emotional Wellness', icon: '😌' },
      { id: 'cognitive', label: 'Memory & Cognitive Health', icon: '🧠' },
    ]
  },
  {
    title: 'Beauty & Healthy Aging',
    theme: { color: 'from-rose-400 to-pink-500', shadow: 'shadow-rose-500/20' },
    items: [
      { id: 'aging', label: 'Healthy Aging & Joint Health', icon: '❤️' },
      { id: 'skin', label: 'Glowing Skin & Anti-Aging', icon: '✨' },
      { id: 'hair', label: 'Strong Hair & Nails', icon: '💇' },
      { id: 'hormonal', label: 'Hormonal Wellness', icon: '🌸' },
    ]
  },
  {
    title: 'Men & Women',
    theme: { color: 'from-fuchsia-400 to-purple-500', shadow: 'shadow-fuchsia-500/20' },
    items: [
      { id: 'womens', label: "Women's Wellness", icon: '🌿' },
      { id: 'mens', label: "Men's Wellness", icon: '👨' },
      { id: 'pregnancy', label: 'Pregnancy & Postpartum', icon: '👶' },
    ]
  },
  {
    title: 'Food & Eating',
    theme: { color: 'from-green-400 to-emerald-500', shadow: 'shadow-green-500/20' },
    items: [
      { id: 'plant_based', label: 'Smart Plant-Based Nutrition', icon: '🌱' },
      { id: 'grocery', label: 'Smart Grocery Shopping', icon: '🛒' },
      { id: 'family_nutrition', label: 'Healthy Family Nutrition', icon: '👨‍👩‍👧‍👦' },
    ]
  },
  {
    title: 'Special Lifestyle',
    theme: { color: 'from-indigo-400 to-violet-500', shadow: 'shadow-indigo-500/20' },
    items: [
      { id: 'student', label: 'Student Wellness', icon: '🎓' },
      { id: 'travel', label: 'Travel Wellness', icon: '🌍' },
      { id: 'healthy_habits', label: 'Lifestyle Transformation', icon: '🎯' },
    ]
  },
  {
    title: 'AI Master',
    theme: { color: 'from-slate-400 to-slate-600', shadow: 'shadow-slate-500/20' },
    items: [
      { id: 'ai_master', label: 'WelliQo Wellness 360°', icon: '🤖', disabled: true },
    ]
  }
];

export function GoalSelection() {
  const setGoal = useAssessmentStore((state) => state.setGoal);

  return (
    <div className="flex-1 flex flex-col pt-8 md:pt-16 px-4 pb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
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
          {SECTIONS.map((section, sectionIdx) => (
            <div key={section.title} className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both" style={{ animationDelay: `${(sectionIdx + 2) * 150}ms` }}>
              <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
                <h3 className="text-2xl md:text-3xl font-medium text-slate-900 dark:text-white">
                  {section.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    disabled={item.disabled}
                    onClick={() => setGoal(item.id)}
                    className={`group relative flex flex-col items-center justify-center gap-4 p-6 rounded-[2rem] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 transition-all duration-300 text-center ${item.disabled ? 'opacity-60 cursor-not-allowed grayscale' : `hover:border-transparent hover:shadow-2xl hover:-translate-y-2 hover:${section.theme.shadow}`}`}
                  >
                    {!item.disabled && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${section.theme.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-[2rem]`} />
                    )}
                    
                    <div className={`relative z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800 transition-colors duration-300 ${!item.disabled && 'group-hover:bg-transparent'}`}>
                      <span className={`text-4xl md:text-5xl transition-transform duration-500 ease-out ${!item.disabled && 'group-hover:scale-125 animate-bounce-in'}`}>
                        {item.icon}
                      </span>
                    </div>
                    
                    <div className="flex flex-col gap-1 relative z-10">
                      <span className={`text-[15px] md:text-[17px] font-semibold text-slate-700 dark:text-slate-200 transition-colors ${!item.disabled && 'group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                        {item.label}
                      </span>
                      {item.disabled && (
                        <span className="text-xs font-bold text-amber-500 tracking-wider uppercase">Coming Soon</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
