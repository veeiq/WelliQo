import React, { useState } from 'react';
import { useAssessmentStore, AssessmentData } from '../../../../../store/assessment-store';
import { PhoneCall } from 'lucide-react';
import { Button } from '@welliqo/ui/components/button';

export function CoachCallToAction() {
  const { data, answers, calculatedMetrics } = useAssessmentStore();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    coach: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.coach) {
      alert("Please fill in all fields.");
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          phoneNumber: formData.phone,
          coachSelected: formData.coach,
          primaryGoal: data.goal || 'Not Selected',
          assessmentData: {
            weight: data.weight,
            targetWeight: calculatedMetrics?.idealWeight || 'Unknown',
            height: data.height,
            age: data.age,
            gender: data.gender,
            answers
          }
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsOpen(false);
          setIsSuccess(false);
          setFormData({ name: '', phone: '', coach: '' });
        }, 3000);
      } else {
        alert("There was an error submitting your request. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-3xl p-6 sm:p-8 mt-12 border border-emerald-100 dark:border-emerald-900/50">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex-1 space-y-4 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-2">
              <PhoneCall className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              Ready for Real Results?
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Get a personalized nutrition plan and daily guidance from an expert Herbalife Coach to reach your goals faster.
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <Button 
              onClick={() => setIsOpen(true)}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200 dark:shadow-none font-semibold text-lg px-8 py-6 rounded-2xl"
            >
              Request a Free Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 w-full max-w-md shadow-2xl relative animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              ✕
            </button>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Connect with a Coach</h3>
              {isSuccess ? null : <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">We'll help you build a personalized nutrition plan to hit your targets.</p>}
            </div>

            {isSuccess ? (
              <div className="py-8 flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Request Sent!</h3>
                <p className="text-center text-slate-500 dark:text-slate-400">Your selected coach will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required 
                    placeholder="John Doe"
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">WhatsApp / Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required 
                    placeholder="+91 99999 99999"
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Select a Coach</label>
                  <select 
                    required 
                    value={formData.coach}
                    onChange={(e) => setFormData({...formData, coach: e.target.value})}
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="" disabled>Choose a coach</option>
                    <option value="Alok">Coach Alok (+91 9114211911)</option>
                    <option value="Priya">Coach Priya (+91 9337616265)</option>
                    <option value="Dipti">Coach Dipti (+91 7008183356)</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 mt-4 rounded-xl bg-emerald-600 text-white font-medium text-[17px] hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/20 disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
