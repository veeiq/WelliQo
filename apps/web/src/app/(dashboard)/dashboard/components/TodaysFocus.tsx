import React from 'react';
import { Droplet, Footprints, Moon } from 'lucide-react';

export function TodaysFocus() {
  const tasks = [
    {
      id: 1,
      title: 'Drink 2 more glasses of water',
      progress: '3/8 glasses',
      icon: <Droplet className="w-5 h-5 text-blue-500" />,
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      iconBg: 'bg-blue-100 dark:bg-blue-900/40',
      done: false
    },
    {
      id: 2,
      title: 'Walk 3,500 more steps',
      progress: '2,100 / 5,600 steps',
      icon: <Footprints className="w-5 h-5 text-emerald-500" />,
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
      iconBg: 'bg-emerald-100 dark:bg-emerald-900/40',
      done: false
    },
    {
      id: 3,
      title: 'Sleep before 11:00 PM',
      progress: 'Goal: 7-8 hours',
      icon: <Moon className="w-5 h-5 text-indigo-500" />,
      bg: 'bg-indigo-50 dark:bg-indigo-900/20',
      iconBg: 'bg-indigo-100 dark:bg-indigo-900/40',
      done: false
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm h-full flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-slate-900 dark:text-white mb-1">Today's Focus</h3>
        <p className="text-slate-500 text-sm mb-6">3 tasks for a better you</p>
        
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className={`${task.bg} p-4 rounded-2xl flex items-center gap-4 transition-colors hover:opacity-90 cursor-pointer`}>
              <div className={`w-10 h-10 ${task.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                {task.icon}
              </div>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">{task.title}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium bg-white/50 dark:bg-slate-950/50 px-2 py-1 rounded-md">{task.progress}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
        <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Expected Score Impact</span>
        <span className="text-lg font-bold text-emerald-600">+2 Points</span>
      </div>
    </div>
  );
}
