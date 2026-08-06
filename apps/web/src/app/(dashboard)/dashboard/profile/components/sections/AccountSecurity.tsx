"use client";

import { Shield, Key, Smartphone, MonitorSmartphone } from "lucide-react";

export function AccountSecurity({ user }: { user: any }) {
  const isGoogleOnly = !user?.password;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center">
          <Shield className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Account & Security</h2>
      </div>

      <div className="space-y-6">
        
        {/* Email */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Email Address</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">{user?.email}</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
            Verified ✅
          </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-slate-500">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Mobile Number</h4>
              {user?.mobile ? (
                <p className="text-sm text-slate-500 dark:text-slate-400">{user.mobile}</p>
              ) : (
                <p className="text-sm text-amber-600 dark:text-amber-500 font-medium">No mobile number added</p>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            {!user?.mobileVerified && user?.mobile && (
              <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg text-sm font-semibold transition-colors">
                Verify OTP
              </button>
            )}
            <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">
              {user?.mobile ? 'Change Number' : 'Add Number'}
            </button>
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-slate-500">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Password</h4>
              {isGoogleOnly ? (
                <p className="text-sm text-slate-500 dark:text-slate-400">Password not set. You sign in with Google.</p>
              ) : (
                <p className="text-sm text-slate-500 dark:text-slate-400">Last changed 3 months ago</p>
              )}
            </div>
          </div>
          <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">
            {isGoogleOnly ? 'Create Password' : 'Change Password'}
          </button>
        </div>

        {/* Devices */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-slate-500">
              <MonitorSmartphone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Device Management</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">You are signed in on 2 devices.</p>
            </div>
          </div>
          <button className="px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-sm font-medium transition-colors">
            Sign out of all devices
          </button>
        </div>

      </div>
    </div>
  );
}
