import React from 'react';
import { PhoneCall, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ConnectCoach() {
  const coaches = [
    {
      id: 1,
      name: 'Coach Alok',
      role: 'Wellness Coach',
      phone: '919114211911',
      avatar: '/logo.jpg' // Fallback
    },
    {
      id: 2,
      name: 'Coach Priya',
      role: 'Nutrition Coach',
      phone: '919337616265',
      avatar: '/logo.jpg' // Fallback
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm h-full flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-slate-900 dark:text-white mb-6">Connect with Coach</h3>
        
        <div className="space-y-4">
          {coaches.map((coach) => (
            <div key={coach.id} className="flex items-center justify-between p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold border border-slate-100 dark:border-slate-700 shadow-sm">
                  {coach.name.charAt(6)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{coach.name}</h4>
                  <p className="text-xs font-medium text-slate-500">{coach.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href={`tel:+${coach.phone}`}
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
                <a 
                  href={`https://wa.me/${coach.phone}?text=Hi%20${coach.name},%20I%20have%20a%20question%20about%20my%20wellness%20report`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-center">
        <Link href="#" className="text-sm font-semibold text-slate-500 hover:text-emerald-600 flex items-center gap-1">
          View All Coaches <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
