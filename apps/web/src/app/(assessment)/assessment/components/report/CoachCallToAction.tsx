import React, { useState } from 'react';
import { useAssessmentStore } from '../../../../../store/assessment-store';
import { PhoneCall, MessageCircle, Mail, User, Globe, Award } from 'lucide-react';
import { Button } from '@welliqo/ui/components/button';

const COACHES = {
  alok: { 
    name: 'Wellness Coach Alok', 
    firstName: 'Alok',
    exp: '5+ Years Experience', 
    lang: 'English, Hindi, Odia', 
    phone: '919114211911', 
    email: 'alok@welliqo.com' 
  },
  priya: { 
    name: 'Wellness Coach Priya', 
    firstName: 'Priya',
    exp: '4+ Years Experience', 
    lang: 'English, Hindi, Odia', 
    phone: '919337616265', 
    email: 'priya@welliqo.com' 
  },
  dipti: { 
    name: 'Wellness Coach Dipti', 
    firstName: 'Dipti',
    exp: '3+ Years Experience', 
    lang: 'English, Hindi, Odia', 
    phone: '917008183356', 
    email: 'dipti@welliqo.com' 
  }
};

export function CoachCallToAction() {
  const { data, answers, calculatedMetrics } = useAssessmentStore();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: answers.name || '',
    phone: '',
    coach: '',
  });

  const selectedCoach = formData.coach ? COACHES[formData.coach as keyof typeof COACHES] : null;

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
              Get a personalized nutrition plan and daily guidance from an expert Wellness Coach to reach your goals faster.
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <Button 
              onClick={() => setIsOpen(true)}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200 dark:shadow-none font-semibold text-lg px-8 py-6 rounded-2xl"
            >
              Talk to a Wellness Coach
            </Button>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 w-full max-w-lg shadow-2xl relative animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto hide-scrollbar">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors z-10"
            >
              ✕
            </button>
            
            <div className="text-center mb-6 pt-2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Connect with a Coach</h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Select a coach to view their profile and contact options.</p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Select a Coach</label>
                <select 
                  value={formData.coach}
                  onChange={(e) => setFormData({...formData, coach: e.target.value})}
                  className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                >
                  <option value="" disabled>Choose your preferred coach</option>
                  <option value="alok">{COACHES.alok.name}</option>
                  <option value="priya">{COACHES.priya.name}</option>
                  <option value="dipti">{COACHES.dipti.name}</option>
                </select>
              </div>

              {selectedCoach && (
                <div className="animate-in fade-in slide-in-from-top-4 duration-500 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center shrink-0">
                      <User className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">{selectedCoach.name}</h4>
                      <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mt-1">
                        <Award className="w-4 h-4 text-emerald-500" /> {selectedCoach.exp}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                        <Globe className="w-4 h-4 text-emerald-500" /> {selectedCoach.lang}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300 text-center mb-4">
                      Connect with {selectedCoach.firstName} instantly:
                    </p>
                    
                    <a 
                      href={`https://wa.me/${selectedCoach.phone}?text=Hi Coach ${selectedCoach.firstName}, I just completed my WelliQo assessment and would like to discuss my personalized plan.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-[#25D366] text-white font-medium hover:bg-[#20bd5a] transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Chat on WhatsApp
                    </a>

                    <div className="grid grid-cols-2 gap-3">
                      <a 
                        href={`tel:+${selectedCoach.phone}`}
                        className="flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                      >
                        <PhoneCall className="w-5 h-5" />
                        Call Now
                      </a>
                      <a 
                        href={`mailto:${selectedCoach.email}?subject=WelliQo Wellness Consultation Request&body=Hi Coach ${selectedCoach.firstName},%0D%0A%0D%0AI just completed my assessment and my score was ${calculatedMetrics?.overallScore || 'unknown'}. I would like to schedule a consultation.`}
                        className="flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                        Email
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Standard data and messaging rates may apply. By contacting our coaches, you agree to receive guidance and personalized plans based on your assessment results.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
