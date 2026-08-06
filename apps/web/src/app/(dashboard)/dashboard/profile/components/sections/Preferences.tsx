"use client";

import { useState } from "react";
import { Settings, Moon, Globe, Scale } from "lucide-react";
import { useTheme } from "next-themes";

export function Preferences({ preferences }: { preferences: any }) {
  const { setTheme } = useTheme();
  
  const [themePref, setThemePref] = useState(preferences?.theme || "SYSTEM");
  const [language, setLanguage] = useState(preferences?.language || "EN");
  const [units, setUnits] = useState(preferences?.units || "METRIC");

  const handleThemeChange = (val: string) => {
    setThemePref(val);
    if (val === "SYSTEM") setTheme("system");
    if (val === "LIGHT") setTheme("light");
    if (val === "DARK") setTheme("dark");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center">
          <Settings className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Preferences</h2>
      </div>

      <div className="space-y-6">
        
        {/* Theme */}
        <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0">
              <Moon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">Appearance</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Choose between light, dark, or system default mode.</p>
            </div>
          </div>
          <select 
            value={themePref}
            onChange={(e) => handleThemeChange(e.target.value)}
            className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
          >
            <option value="SYSTEM">System Default</option>
            <option value="LIGHT">Light Mode</option>
            <option value="DARK">Dark Mode</option>
          </select>
        </div>

        {/* Language */}
        <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">Language</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Your preferred language for content and assessments.</p>
            </div>
          </div>
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
          >
            <option value="EN">English</option>
            <option value="ES">Español</option>
            <option value="FR">Français</option>
          </select>
        </div>

        {/* Units */}
        <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">Measurement Units</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Choose between Metric and Imperial systems.</p>
            </div>
          </div>
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button 
              onClick={() => setUnits("METRIC")}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${units === "METRIC" ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
            >
              Metric
            </button>
            <button 
              onClick={() => setUnits("IMPERIAL")}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${units === "IMPERIAL" ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
            >
              Imperial
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
