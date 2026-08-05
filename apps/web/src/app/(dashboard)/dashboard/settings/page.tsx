"use client";

import { useEffect, useState } from "react";
import { getUserSettings, updateUserPreferences } from "../actions";
import { Settings as SettingsIcon, Check, Loader2, Moon, Globe, Scale, Bell } from "lucide-react";
import { useTheme } from "next-themes";

export default function SettingsPage() {
  const { setTheme } = useTheme();
  const [preferences, setPreferences] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Form state
  const [themePref, setThemePref] = useState("SYSTEM");
  const [language, setLanguage] = useState("EN");
  const [units, setUnits] = useState("METRIC");
  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getUserSettings();
        setPreferences(data.preferences);
        setThemePref(data.preferences?.theme || "SYSTEM");
        setLanguage(data.preferences?.language || "EN");
        setUnits(data.preferences?.units || "METRIC");
        setNotifications(data.preferences?.notifications ?? true);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateUserPreferences({
        theme: themePref,
        language,
        units,
        notifications,
      });
      // Apply theme locally
      if (themePref === "SYSTEM") setTheme("system");
      if (themePref === "LIGHT") setTheme("light");
      if (themePref === "DARK") setTheme("dark");
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            App Settings
          </h1>
          <p className="text-slate-600 dark:text-slate-400">Customize your WelliQo experience.</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-all shadow-sm disabled:opacity-50"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
          Save Settings
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm divide-y divide-slate-100 dark:divide-slate-800">
        
        {/* Theme */}
        <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0">
              <Moon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Appearance</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Choose between light, dark, or system default mode.</p>
            </div>
          </div>
          <select 
            value={themePref}
            onChange={(e) => setThemePref(e.target.value)}
            className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
          >
            <option value="SYSTEM">System Default</option>
            <option value="LIGHT">Light Mode</option>
            <option value="DARK">Dark Mode</option>
          </select>
        </div>

        {/* Language */}
        <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Language</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Your preferred language for content and assessments.</p>
            </div>
          </div>
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
          >
            <option value="EN">English</option>
            <option value="ES">Español (Coming soon)</option>
            <option value="FR">Français (Coming soon)</option>
          </select>
        </div>

        {/* Units */}
        <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Measurement Units</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Choose between Metric (kg/cm) and Imperial (lbs/ft).</p>
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

        {/* Notifications */}
        <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Email Notifications</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Receive reminders and weekly wellness insights.</p>
            </div>
          </div>
          <button 
            onClick={() => setNotifications(!notifications)}
            className={`w-12 h-6 rounded-full transition-colors relative ${notifications ? "bg-emerald-500" : "bg-slate-300 dark:bg-slate-700"}`}
          >
            <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${notifications ? "left-7" : "left-1"}`} />
          </button>
        </div>

      </div>
    </div>
  );
}
