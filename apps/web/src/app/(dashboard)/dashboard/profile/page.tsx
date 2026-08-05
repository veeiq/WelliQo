"use client";

import { useEffect, useState } from "react";
import { getUserSettings, updateUserProfile } from "../actions";
import { User, Activity, Edit3, Check, Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, update } = useSession();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [goals, setGoals] = useState("");
  const [food, setFood] = useState("");
  const [medical, setMedical] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await getUserSettings();
        setProfile(data.profile);
        setName(session?.user?.name || "");
        setGoals(data.profile?.goals?.join(", ") || "");
        setFood(data.profile?.foodPreferences?.join(", ") || "");
        setMedical(data.profile?.medicalConditions?.join(", ") || "");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [session]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateUserProfile({
        name,
        goals: goals.split(",").map(s => s.trim()).filter(Boolean),
        foodPreferences: food.split(",").map(s => s.trim()).filter(Boolean),
        medicalConditions: medical.split(",").map(s => s.trim()).filter(Boolean),
      });
      if (name !== session?.user?.name) {
        await update({ name });
      }
      setIsEditing(false);
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
            My Profile
          </h1>
          <p className="text-slate-600 dark:text-slate-400">Manage your personal information and wellness preferences.</p>
        </div>
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-medium transition-colors"
          >
            <Edit3 className="w-4 h-4" /> Edit Profile
          </button>
        ) : (
          <button 
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
            Save Changes
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Personal Info */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Personal Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Full Name</label>
              {isEditing ? (
                <input 
                  type="text" 
                  value={name} 
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                />
              ) : (
                <p className="text-slate-600 dark:text-slate-400 py-2">{name || "Not set"}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
              <p className="text-slate-500 dark:text-slate-500 py-2">{session?.user?.email}</p>
              <p className="text-xs text-slate-400 mt-1">Email cannot be changed.</p>
            </div>
          </div>
        </section>

        {/* Wellness Preferences */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Wellness Preferences</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Primary Goals</label>
              {isEditing ? (
                <input 
                  type="text" 
                  value={goals} 
                  onChange={e => setGoals(e.target.value)}
                  placeholder="e.g. weight loss, better sleep (comma separated)"
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                />
              ) : (
                <div className="flex flex-wrap gap-2 pt-1">
                  {goals ? goals.split(",").map((g, i) => (
                    <span key={i} className="px-3 py-1 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full text-sm font-medium">
                      {g.trim()}
                    </span>
                  )) : (
                    <span className="text-slate-400 text-sm">No goals specified</span>
                  )}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Food Preferences</label>
              {isEditing ? (
                <input 
                  type="text" 
                  value={food} 
                  onChange={e => setFood(e.target.value)}
                  placeholder="e.g. Vegetarian, Gluten-Free (comma separated)"
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                />
              ) : (
                <p className="text-slate-600 dark:text-slate-400 py-1">{food || "None"}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Medical Conditions</label>
              {isEditing ? (
                <input 
                  type="text" 
                  value={medical} 
                  onChange={e => setMedical(e.target.value)}
                  placeholder="e.g. Hypertension, PCOS (comma separated)"
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                />
              ) : (
                <p className="text-slate-600 dark:text-slate-400 py-1">{medical || "None"}</p>
              )}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
