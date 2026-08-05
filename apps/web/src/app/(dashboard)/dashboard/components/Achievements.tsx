import React from 'react';
import { useUserStore } from '@/store/user-store';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Achievements() {
  const { achievements } = useUserStore();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-slate-900 dark:text-white">Achievements</h3>
          <Link href="#" className="text-sm font-semibold text-slate-500 hover:text-emerald-600 flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="flex flex-col items-center text-center">
              {/* Hexagon shape using CSS polygon */}
              <div 
                className={`w-14 h-16 sm:w-16 sm:h-20 bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-sm text-2xl sm:text-3xl mb-3`}
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                {achievement.icon}
              </div>
              <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{achievement.title}</p>
              <p className="text-[10px] sm:text-xs font-medium text-slate-500 mt-0.5">{achievement.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
