'use client';
import Link from 'next/link';
import { ArrowLeft, User, MessageCircle, PhoneCall, Mail, Globe, Award, HeartPulse } from 'lucide-react';
import { Button } from '@welliqo/ui/components/button';

export default function CoachPage() {
  const coaches = [
    {
      id: 'priya',
      name: 'Wellness Coach Priya',
      specialization: 'Herbalife Wellness Coach',
      experience: '5+ Years Experience',
      languages: 'English, Hindi, Odia',
      timings: '6:00 AM - 6:00 PM',
      phone: '919337616265',
      email: 'priya@welliqo.com',
      bio: 'Having experience as a Herbalife Wellness Coach, training 200+ people physically on a regular basis and impacting the lives of 1000+ people virtually.',
      avatarUrl: '/images/coaches/priya.jpg'
    },
    {
      id: 'dipti',
      name: 'Wellness Coach Dipti',
      specialization: 'Weight Management Coach',
      experience: '5+ Years Experience',
      languages: 'English, Hindi, Odia',
      timings: '6:00 AM - 6:00 PM',
      phone: '917008183356',
      email: 'dipti@welliqo.com',
      bio: 'Dedicated weight management specialist focused on sustainable lifestyle changes. Experienced in creating personalized wellness plans for diverse needs.',
      avatarUrl: '/images/coaches/dipti.jpg'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8">
      <div className="max-w-4xl mx-auto w-full">
        <Link 
          href="/dashboard"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 mb-6 font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </Link>

        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Connect with a Wellness Coach
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
            Get personalized guidance, expert nutrition plans, and daily motivation from our certified professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {coaches.map(coach => (
            <div key={coach.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full -mr-16 -mt-16 z-0"></div>
              
              <div className="flex items-center gap-5 mb-6 relative z-10">
                <div className="w-20 h-20 rounded-full border-4 border-emerald-50 dark:border-emerald-900/30 overflow-hidden shrink-0 shadow-sm">
                  <img src={coach.avatarUrl} alt={coach.name} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">{coach.name}</h3>
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-500 text-sm font-semibold mt-1">
                    <HeartPulse className="w-4 h-4" />
                    {coach.specialization}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8 text-sm relative z-10">
                <p className="text-slate-600 dark:text-slate-400 italic mb-4 line-clamp-3">
                  "{coach.bio}"
                </p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{coach.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Globe className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="truncate">{coach.languages}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 col-span-2">
                    <User className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Available: {coach.timings}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 relative z-10 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a 
                  href={`https://wa.me/${coach.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-all shadow-md shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href={`tel:+${coach.phone}`}
                    className="flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <PhoneCall className="w-4 h-4" />
                    Call
                  </a>
                  <a 
                    href={`mailto:${coach.email}`}
                    className="flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
