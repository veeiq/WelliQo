import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Smartphone, Mail, ShieldCheck, Key } from 'lucide-react';
import { useAssessmentStore } from '../../../../../store/assessment-store';
import { useUserStore } from '../../../../../store/user-store';

interface SaveReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SaveReportModal({ isOpen, onClose }: SaveReportModalProps) {
  const router = useRouter();
  const { data, answers, calculatedMetrics } = useAssessmentStore();
  const { login, saveReport, profile } = useUserStore();
  
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      alert('Please enter a valid mobile number.');
      return;
    }
    if (!password || password.length < 4) {
      alert('Please enter a valid password (min 4 characters).');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      if (isLoginMode) {
        // If login mode and they have a saved profile, ideally we would verify password here.
        // For mock auth, we just "log them in" and let them proceed.
        // In real app, we check Supabase auth.
        login(phone, password, email, profile?.name || answers.name || data.name || 'User');
      } else {
        // Sign up mode
        const userName = answers.name || data.name || 'User';
        login(phone, password, email, userName);
      }

      // 2. Save the report to their vault
      if (calculatedMetrics && data.goal) {
        saveReport({
          goal: data.goal,
          data,
          answers,
          metrics: calculatedMetrics
        });
      }

      // 3. Redirect to Dashboard
      setIsSubmitting(false);
      router.push('/dashboard');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 w-full max-w-md shadow-2xl relative animate-in zoom-in-95 duration-300 border border-emerald-100 dark:border-emerald-900/30">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          ✕
        </button>
        
        <div className="text-center mb-6 pt-2">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600 dark:text-emerald-400">
            <Lock className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
            {isLoginMode ? 'Welcome Back' : 'Unlock Your Vault'}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            {isLoginMode 
              ? 'Sign in to save this report to your existing dashboard.' 
              : 'Create an account to save your personalized protocol.'}
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-emerald-500" />
              WhatsApp / Mobile Number *
            </label>
            <input 
              type="tel" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required 
              placeholder="+91 99999 99999"
              className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <Key className="w-4 h-4 text-emerald-500" />
              Password *
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              placeholder="••••••••"
              className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow" 
            />
          </div>

          {!isLoginMode && (
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-emerald-500" />
                Email Address (Optional)
              </label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow" 
              />
            </div>
          )}

          <div className="pt-2">
            <button 
              type="submit"
              disabled={isSubmitting || !phone || !password}
              className="w-full h-12 rounded-xl bg-emerald-600 text-white font-medium text-[17px] hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/20 disabled:opacity-70 flex items-center justify-center gap-2 group"
            >
              {isSubmitting ? (
                isLoginMode ? "Signing in..." : "Unlocking Vault..."
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  {isLoginMode ? "Sign In & Save" : "Save to My Dashboard"}
                </>
              )}
            </button>
          </div>
          
          <div className="text-center pt-2">
            <button 
              type="button"
              onClick={() => setIsLoginMode(!isLoginMode)}
              className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors"
            >
              {isLoginMode ? "Don't have an account? Create Vault" : "Already have an account? Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
