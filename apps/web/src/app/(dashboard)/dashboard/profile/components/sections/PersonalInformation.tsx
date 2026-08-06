"use client";

import { useState } from "react";
import { User, Check, Loader2 } from "lucide-react";

export function PersonalInformation({ user, profile }: { user: any; profile: any }) {
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  
  // States
  const [name, setName] = useState(user?.name || "");
  const [dob, setDob] = useState(profile?.dob ? new Date(profile.dob).toISOString().split('T')[0] : "");
  const [gender, setGender] = useState(profile?.gender || "");
  const [country, setCountry] = useState(profile?.country || "");

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
            <User className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Personal Information</h2>
        </div>
        {!isEditing ? (
          <button onClick={() => setIsEditing(true)} className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
            Edit Information
          </button>
        ) : (
          <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors disabled:opacity-50">
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
            Save
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Full Name</label>
          {isEditing ? (
            <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500" />
          ) : (
            <p className="text-slate-600 dark:text-slate-400 py-2">{name || "Not set"}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
          <p className="text-slate-500 py-2">{user?.email}</p>
          <p className="text-xs text-slate-400 mt-1">Managed in Account & Security</p>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Date of Birth</label>
          {isEditing ? (
            <input type="date" value={dob} onChange={e => setDob(e.target.value)} className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500" />
          ) : (
            <p className="text-slate-600 dark:text-slate-400 py-2">{dob || "Not set"}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Gender</label>
          {isEditing ? (
            <select value={gender} onChange={e => setGender(e.target.value)} className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          ) : (
            <p className="text-slate-600 dark:text-slate-400 py-2">{gender || "Not set"}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Country</label>
          {isEditing ? (
            <input type="text" value={country} onChange={e => setCountry(e.target.value)} className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500" placeholder="e.g. United States" />
          ) : (
            <p className="text-slate-600 dark:text-slate-400 py-2">{country || "Not set"}</p>
          )}
        </div>
      </div>
    </div>
  );
}
