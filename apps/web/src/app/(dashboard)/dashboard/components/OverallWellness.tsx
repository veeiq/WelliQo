import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Apple, Droplet, Zap, Moon, Activity, HeartPulse } from 'lucide-react';
import { useAssessmentStore } from '@/store/assessment-store';

export function OverallWellness() {
  const { calculatedMetrics } = useAssessmentStore();
  const overallScore = calculatedMetrics?.overallScore || 0;

  const data = [
    { name: 'Score', value: overallScore },
    { name: 'Remaining', value: 100 - overallScore }
  ];

  const COLORS = ['#10b981', '#f1f5f9'];
  const DARK_COLORS = ['#10b981', '#1e293b'];

  const pillars = [
    { name: 'Nutrition', score: 92, color: 'bg-emerald-500', icon: <Apple className="w-5 h-5 text-emerald-500"/> },
    { name: 'Hydration', score: 80, color: 'bg-blue-500', icon: <Droplet className="w-5 h-5 text-blue-500"/> },
    { name: 'Energy', score: 75, color: 'bg-amber-500', icon: <Zap className="w-5 h-5 text-amber-500"/> },
    { name: 'Sleep', score: 68, color: 'bg-indigo-500', icon: <Moon className="w-5 h-5 text-indigo-500"/> },
    { name: 'Stress', score: 71, color: 'bg-orange-500', icon: <Activity className="w-5 h-5 text-orange-500"/> },
    { name: 'Fitness', score: 66, color: 'bg-teal-500', icon: <HeartPulse className="w-5 h-5 text-teal-500"/> },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm h-full flex flex-col">
      <h3 className="font-bold text-slate-900 dark:text-white mb-6">Overall Wellness</h3>
      
      <div className="flex-1 flex flex-col md:flex-row items-center gap-8">
        {/* Donut Chart */}
        <div className="w-48 h-48 relative flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} className={index === 1 ? "fill-slate-100 dark:fill-slate-800" : "fill-emerald-500"} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-4xl font-bold text-emerald-600">{overallScore}</span>
            <span className="text-sm font-semibold text-emerald-500">Excellent</span>
          </div>
        </div>

        {/* Pillars List */}
        <div className="flex-1 w-full space-y-4">
          {pillars.map((pillar) => (
            <div key={pillar.name} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                {pillar.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{pillar.name}</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{pillar.score}</span>
                </div>
                <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${pillar.color}`} 
                    style={{ width: `${pillar.score}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
