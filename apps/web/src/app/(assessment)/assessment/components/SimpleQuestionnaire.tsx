import React from 'react';
import { useAssessmentStore } from '@/store/assessment-store';
import { DynamicQuestionRenderer } from '@welliqo/ui/components/assessment';
import { GOAL_QUESTIONS, DEFAULT_QUESTIONS } from '@/config/assessment-questions';

export function SimpleQuestionnaire() {
  const { 
    data, 
    answers,
    currentQuestionIndex, 
    recordAnswer, 
    nextQuestion, 
    prevQuestion 
  } = useAssessmentStore();

  const goal = data.goal || 'weight';
  const questionsList = GOAL_QUESTIONS[goal] || DEFAULT_QUESTIONS;
  
  // Safe bounds check just in case
  const safeIndex = Math.min(Math.max(0, currentQuestionIndex), questionsList.length - 1);
  const currentQuestion = questionsList[safeIndex];

  if (!currentQuestion) return null;

  // The value is stored either in `data` (baseline) or `answers` (dynamic)
  const baselineKeys = ['age', 'gender', 'height', 'weight', 'activityLevel', 'profession', 'conditions'];
  const currentValue = baselineKeys.includes(currentQuestion.id) 
    ? data[currentQuestion.id as keyof typeof data]
    : answers[currentQuestion.id];

  const isAnswered = currentValue !== undefined && currentValue !== null && currentValue !== '';

  // Ensure type alignment for dynamic renderer
  const formattedQuestion = {
    ...currentQuestion,
    type: currentQuestion.type.replace('_', '-') as any
  };

  return (
    <div className="flex-1 flex flex-col pt-8 md:pt-16 px-6 pb-24">
      <div className="w-full max-w-2xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold tracking-wide uppercase shadow-sm">
            {currentQuestion.section}
          </div>
          <h2 className="text-3xl md:text-[42px] font-medium tracking-tight text-slate-900 dark:text-slate-50 text-balance leading-tight">
            {currentQuestion.label}
          </h2>
        </div>

        <div className="flex-1 flex flex-col justify-center min-h-[300px]">
          <DynamicQuestionRenderer
            question={formattedQuestion as any}
            value={currentValue}
            onChange={(val) => recordAnswer(currentQuestion.id, val)}
          />
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-slate-100 dark:border-slate-800">
          <button 
            onClick={prevQuestion} 
            className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 font-medium px-4 py-2 transition-colors"
          >
            Back
          </button>
          
          <button
            onClick={() => nextQuestion(questionsList.length)}
            disabled={!isAnswered}
            className="group relative flex h-[60px] items-center justify-center overflow-hidden rounded-full bg-slate-900 dark:bg-white px-12 font-medium text-white dark:text-slate-900 shadow-xl shadow-slate-900/10 dark:shadow-white/10 transition-all hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-30 disabled:shadow-none"
          >
            <span className="relative z-10 text-[17px]">
              {safeIndex === questionsList.length - 1 ? 'Show My Results' : 'Continue'}
            </span>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10 ml-3 group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
