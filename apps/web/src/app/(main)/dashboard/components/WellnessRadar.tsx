import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export function WellnessRadar() {
  // We can pull these from store later, mocking for UI parity
  const data = [
    { subject: 'Nutrition', A: 92, fullMark: 100 },
    { subject: 'Hydration', A: 80, fullMark: 100 },
    { subject: 'Energy', A: 75, fullMark: 100 },
    { subject: 'Sleep', A: 68, fullMark: 100 },
    { subject: 'Stress', A: 71, fullMark: 100 },
    { subject: 'Fitness', A: 66, fullMark: 100 },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm h-full flex flex-col">
      <h3 className="font-bold text-slate-900 dark:text-white mb-2">Wellness Radar</h3>
      
      <div className="flex-1 min-h-[250px] w-full mt-4 relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} 
            />
            {/* Hiding the radius axis numbers to match the clean UI */}
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name="Wellness"
              dataKey="A"
              stroke="#10b981"
              strokeWidth={2}
              fill="#10b981"
              fillOpacity={0.2}
            />
          </RadarChart>
        </ResponsiveContainer>
        
        {/* Overlaying labels exactly like the image if desired, but PolarAngleAxis handles it well */}
      </div>
    </div>
  );
}
