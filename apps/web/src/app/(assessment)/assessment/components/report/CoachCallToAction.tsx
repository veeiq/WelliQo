import React, { useState } from 'react';
import { AssessmentData } from '../../../../../store/assessment-store';

export function CoachCallToAction({ data }: { data: AssessmentData }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-slate-900 dark:bg-slate-950 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden text-center">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-xl mx-auto space-y-6">
          <div className="w-16 h-16 mx-auto bg-emerald-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg shadow-emerald-500/30">
            👋
          </div>
          <h2 className="text-3xl font-bold text-white">You don't have to do this alone.</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Achieving your {data.goal || 'wellness'} goals is much easier with a customized nutrition plan and 1-on-1 daily guidance. We take the guesswork out of your health.
          </p>
          
          <button 
            onClick={() => setShowModal(true)}
            className="w-full md:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-full text-lg transition-all hover:scale-105 hover:shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 mx-auto"
          >
            <span>📞</span> Request a Free Consultation
          </button>
          
          <p className="text-xs text-slate-500 mt-4 max-w-md mx-auto">
            * Herbalife Independent Distributors. Our wellness products are not intended to diagnose, treat, cure, or prevent any disease. Results are not typical.
          </p>
        </div>
      </div>

      {showModal && <LeadCaptureModal onClose={() => setShowModal(false)} />}
    </>
  );
}

function LeadCaptureModal({ onClose }: { onClose: () => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request Sent! A coach will contact you shortly.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 w-full max-w-md shadow-2xl relative animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          ✕
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Speak to a Coach</h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">We'll help you build a personalized nutrition plan to hit your exact targets.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
            <input type="text" required className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
            <input type="tel" required className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Select a Coach</label>
            <select required className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="">Any Available Coach</option>
              <option value="alok">Coach Alok</option>
              <option value="priya">Coach Priya</option>
              <option value="dipti">Coach Dipti</option>
            </select>
          </div>
          <button 
            type="submit"
            className="w-full h-12 mt-4 rounded-xl bg-emerald-600 text-white font-medium text-[17px] hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/20"
          >
            Request Callback
          </button>
          <p className="text-[10px] text-slate-400 text-center mt-4">
            By submitting, you agree to be contacted by an Independent Herbalife Associate regarding your wellness goals.
          </p>
        </form>
      </div>
    </div>
  );
}
