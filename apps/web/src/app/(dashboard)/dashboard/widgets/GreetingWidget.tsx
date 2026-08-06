import React from 'react';
import { auth } from '@/auth';
import { AssessmentRepository } from '@/repositories/assessment-repository';

export async function GreetingWidget() {
  const session = await auth();
  const firstName = session?.user?.name?.split(' ')[0] || 'there';
  
  let subtitle = 'Welcome to your personalized wellness dashboard.';
  
  if (session?.user?.id) {
    const history = await AssessmentRepository.getScoreHistory(session.user.id, 2);
    if (history.length >= 2) {
      const diff = history[history.length - 1]!.score - history[history.length - 2]!.score;
      if (diff > 0) {
        subtitle = `Your wellness score improved by ${diff} points since last time!`;
      } else if (diff < 0) {
        subtitle = `Your score dipped slightly. Let's get back on track.`;
      } else {
        subtitle = `You're maintaining a steady wellness score. Keep it up!`;
      }
    } else if (history.length === 1) {
      subtitle = `Here's how your wellness is progressing.`;
    } else {
      subtitle = `Let's build your health blueprint today.`;
    }
  }

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        Good {getGreetingTime()}, {firstName} 👋
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}

function getGreetingTime() {
  const hour = new Date().getHours();
  if (hour < 12) return 'morning';
  if (hour < 18) return 'afternoon';
  return 'evening';
}

export function GreetingSkeleton() {
  return (
    <div className="mb-8 animate-pulse">
      <div className="h-10 w-64 bg-slate-200 dark:bg-slate-800 rounded-lg mb-3"></div>
      <div className="h-6 w-96 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
    </div>
  );
}
