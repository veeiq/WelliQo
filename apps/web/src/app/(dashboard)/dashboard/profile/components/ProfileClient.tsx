"use client";

import { useState } from "react";
import { User, Activity, Shield, Link as LinkIcon, Bell, Settings, Lock, CreditCard, Info } from "lucide-react";

// Mock component imports - we will create these next
import { PersonalInformation } from "./sections/PersonalInformation";
import { HealthBaseline } from "./sections/HealthBaseline";
import { AccountSecurity } from "./sections/AccountSecurity";
import { ConnectedAccounts } from "./sections/ConnectedAccounts";
import { Notifications } from "./sections/Notifications";
import { Preferences } from "./sections/Preferences";
import { Privacy } from "./sections/Privacy";
import { Membership } from "./sections/Membership";
import { About } from "./sections/About";
import { ProfileProgressBar } from "./ProfileProgressBar";

export type ProfileTab = 
  | "personal" 
  | "health" 
  | "account" 
  | "connected" 
  | "notifications" 
  | "preferences" 
  | "privacy" 
  | "membership" 
  | "about";

interface ProfileClientProps {
  user: any;
  profile: any;
  preferences: any;
}

export function ProfileClient({ user, profile, preferences }: ProfileClientProps) {
  const [activeTab, setActiveTab] = useState<ProfileTab>("personal");

  const tabs = [
    { id: "personal", label: "Personal Information", icon: User },
    { id: "health", label: "Health Baseline", icon: Activity },
    { id: "account", label: "Account & Security", icon: Shield },
    { id: "connected", label: "Connected Accounts", icon: LinkIcon },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "preferences", label: "Preferences", icon: Settings },
    { id: "privacy", label: "Privacy", icon: Lock },
    { id: "membership", label: "Membership", icon: CreditCard },
    { id: "about", label: "About", icon: Info },
  ] as const;

  const renderContent = () => {
    switch (activeTab) {
      case "personal": return <PersonalInformation user={user} profile={profile} />;
      case "health": return <HealthBaseline profile={profile} />;
      case "account": return <AccountSecurity user={user} />;
      case "connected": return <ConnectedAccounts user={user} />;
      case "notifications": return <Notifications preferences={preferences} />;
      case "preferences": return <Preferences preferences={preferences} />;
      case "privacy": return <Privacy user={user} />;
      case "membership": return <Membership />;
      case "about": return <About />;
      default: return null;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto animate-in fade-in duration-500 pb-20 md:pb-0">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Profile Hub</h1>
        <p className="text-slate-600 dark:text-slate-400">Manage your identity, health baseline, and account settings.</p>
      </div>

      <ProfileProgressBar user={user} profile={profile} />

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {/* Sidebar Navigation */}
        <div className="md:w-64 shrink-0 overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar border-b md:border-b-0 border-slate-200 dark:border-slate-800">
          <nav className="flex md:flex-col gap-1 w-max md:w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as ProfileTab)}
                  className={`
                    flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all whitespace-nowrap md:whitespace-normal text-left
                    ${isActive 
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-emerald-600 dark:text-emerald-500' : 'text-slate-400'}`} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200/50 dark:border-slate-800 p-6 md:p-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
