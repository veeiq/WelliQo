"use client";

export function ProfileProgressBar({ user, profile }: { user: any; profile: any }) {
  // Required fields according to the spec:
  // Name, Mobile, DOB, Height, Weight, Goal, Activity Level
  const requiredFields = [
    { name: "Name", value: user?.name },
    { name: "Mobile number", value: user?.mobile },
    { name: "Date of Birth", value: profile?.dob },
    { name: "Height", value: profile?.height },
    { name: "Weight", value: profile?.weight },
    { name: "Primary Goal", value: profile?.primaryGoal },
    { name: "Activity level", value: profile?.activityLevel },
  ];

  const completedFields = requiredFields.filter(f => !!f.value);
  const percentage = Math.round((completedFields.length / requiredFields.length) * 100);
  const missingFields = requiredFields.filter(f => !f.value).map(f => f.name);

  if (percentage === 100) return null;

  return (
    <div className="bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/50 rounded-2xl p-6 shadow-sm mb-8 flex flex-col md:flex-row md:items-center gap-6">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-slate-900 dark:text-white">Profile Completion</h3>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{percentage}% Complete</span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3 mb-4">
          <div 
            className="bg-emerald-500 h-3 rounded-full transition-all duration-1000 ease-out" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          <strong className="text-slate-900 dark:text-white">Missing:</strong> {missingFields.join(", ")}
        </p>
      </div>
      <div className="md:w-64 shrink-0 text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 p-4 rounded-xl">
        Complete these to improve recommendation accuracy for future assessments.
      </div>
    </div>
  );
}
