"use client";

import { useState } from "react";
import { Activity, Check, Loader2, Info } from "lucide-react";

export function HealthBaseline({ profile }: { profile: any }) {
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  const [height, setHeight] = useState(profile?.height || "");
  const [weight, setWeight] = useState(profile?.weight || "");
  const [activity, setActivity] = useState(profile?.activityLevel || "");
  const [goal, setGoal] = useState(profile?.primaryGoal || "");
  const [food, setFood] = useState(profile?.foodPreferences?.join(", ") || "");
  const [medical, setMedical] = useState(profile?.medicalConditions?.join(", ") || "");

  const handleSave = async () => {
    setSaving(true);
    // Simulate save
    setTimeout(() => {
      setSaving(false);
      setIsEditing(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Health Baseline</h2>
          </div>
        </div>
        {!isEditing ? (
          <button onClick={() => setIsEditing(true)} className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
            Edit Baseline
          </button>
        ) : (
          <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors disabled:opacity-50">
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
            Save
          </button>
        )}
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 p-4 rounded-xl flex gap-3 text-sm mb-8">
        <Info className="w-5 h-5 shrink-0" />
        <p>
          <strong>Important:</strong> These changes will be used for future assessments. Previous reports remain unchanged.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Height (cm)</label>
          {isEditing ? (
            <input type="number" value={height} onChange={e => setHeight(e.target.value)} className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500" />
          ) : (
            <p className="text-slate-600 dark:text-slate-400 py-2">{height ? `${height} cm` : "Not set"}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Weight (kg)</label>
          {isEditing ? (
            <input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500" />
          ) : (
            <p className="text-slate-600 dark:text-slate-400 py-2">{weight ? `${weight} kg` : "Not set"}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Activity Level</label>
          {isEditing ? (
            <select value={activity} onChange={e => setActivity(e.target.value)} className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="">Select activity level</option>
              <option value="Sedentary">Sedentary</option>
              <option value="Lightly Active">Lightly Active</option>
              <option value="Moderately Active">Moderately Active</option>
              <option value="Very Active">Very Active</option>
            </select>
          ) : (
            <p className="text-slate-600 dark:text-slate-400 py-2">{activity || "Not set"}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Primary Goal</label>
          {isEditing ? (
            <select value={goal} onChange={e => setGoal(e.target.value)} className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="">Select goal</option>
              <option value="Weight Loss">Weight Loss</option>
              <option value="Build Muscle">Build Muscle</option>
              <option value="Improve Sleep">Improve Sleep</option>
              <option value="Reduce Stress">Reduce Stress</option>
              <option value="Better Nutrition">Better Nutrition</option>
            </select>
          ) : (
            <p className="text-slate-600 dark:text-slate-400 py-2">{goal || "Not set"}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Food Preferences (Optional)</label>
          {isEditing ? (
            <input type="text" value={food} onChange={e => setFood(e.target.value)} placeholder="e.g. Vegetarian, Gluten-Free" className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500" />
          ) : (
            <div className="flex flex-wrap gap-2 pt-1">
              {food ? food.split(",").map((g: string, i: number) => (
                <span key={i} className="px-3 py-1 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full text-sm font-medium">
                  {g.trim()}
                </span>
              )) : (
                <span className="text-slate-400 text-sm py-1">None specified</span>
              )}
            </div>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Medical Conditions (Optional)</label>
          {isEditing ? (
            <input type="text" value={medical} onChange={e => setMedical(e.target.value)} placeholder="e.g. Hypertension, Diabetes" className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500" />
          ) : (
            <div className="flex flex-wrap gap-2 pt-1">
              {medical ? medical.split(",").map((g: string, i: number) => (
                <span key={i} className="px-3 py-1 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm font-medium">
                  {g.trim()}
                </span>
              )) : (
                <span className="text-slate-400 text-sm py-1">None specified</span>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
