"use client";

import { useState } from "react";
import { Bell } from "lucide-react";

export function Notifications({ preferences }: { preferences: any }) {
  const [reminders, setReminders] = useState(true);
  const [weekly, setWeekly] = useState(true);
  const [monthly, setMonthly] = useState(false);
  const [tips, setTips] = useState(true);
  const [updates, setUpdates] = useState(false);

  const Toggle = ({ label, description, checked, onChange }: any) => (
    <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{label}</h4>
        <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
      </div>
      <button 
        onClick={() => onChange(!checked)}
        className={`w-12 h-6 rounded-full transition-colors relative shrink-0 mt-1 ${checked ? "bg-emerald-500" : "bg-slate-300 dark:bg-slate-700"}`}
      >
        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${checked ? "left-7" : "left-1"}`} />
      </button>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center">
          <Bell className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Notifications</h2>
      </div>

      <div className="space-y-4">
        <Toggle 
          label="Assessment Reminders" 
          description="Get notified when it's time to take your next assessment."
          checked={reminders}
          onChange={setReminders}
        />
        <Toggle 
          label="Weekly Report" 
          description="A summary of your weekly focus actions and progress."
          checked={weekly}
          onChange={setWeekly}
        />
        <Toggle 
          label="Monthly Progress" 
          description="Detailed breakdown of your health trends every month."
          checked={monthly}
          onChange={setMonthly}
        />
        <Toggle 
          label="Health Tips" 
          description="Personalized advice based on your latest assessment."
          checked={tips}
          onChange={setTips}
        />
        <Toggle 
          label="Product Updates" 
          description="News about new features and improvements to WelliQo."
          checked={updates}
          onChange={setUpdates}
        />
      </div>
    </div>
  );
}
