import React, { useEffect } from 'react';
import { useAssessmentStore } from '@/store/assessment-store';
import { DynamicQuestionRenderer } from '@welliqo/ui/components/assessment';
import { UNIVERSAL_PROFILE_QUESTIONS } from '@/config/assessment-questions';
import { ASSESSMENTS } from '@/assessments/registry';
import { motion, AnimatePresence } from 'framer-motion';

export function SimpleQuestionnaire() {
  const { 
    data, 
    answers,
    currentQuestionIndex, 
    recordAnswer, 
    nextQuestion, 
    prevQuestion 
  } = useAssessmentStore();

  const assessmentId = data.assessmentId || 'weight';

  let goalQuestions: any[] = [];
  const assessment = ASSESSMENTS.find(a => a.id === assessmentId);
  if (assessment && assessment.status === 'available') {
    goalQuestions = assessment.questions;
  }
  
  // Combine Universal Profile with Goal Questions
  const questionsList = [...UNIVERSAL_PROFILE_QUESTIONS, ...goalQuestions];
  
  // Safe bounds check just in case
  const safeIndex = Math.min(Math.max(0, currentQuestionIndex), questionsList.length - 1);
  const currentQuestion = questionsList[safeIndex];

  if (!currentQuestion) return null;

  // The value is stored either in `data` (baseline) or `answers` (dynamic)
  const baselineKeys = ['name', 'age', 'gender', 'height', 'weight', 'occupation', 'activityLevel', 'conditions', 'food_preference', 'smoking', 'alcohol'];
  const currentValue = baselineKeys.includes(currentQuestion.id) 
    ? data[currentQuestion.id as keyof typeof data]
    : answers[currentQuestion.id];

  const isAnswered = currentValue !== undefined && currentValue !== null && currentValue !== '' && (Array.isArray(currentValue) ? currentValue.length > 0 : true);

  // Interstitial logic
  const [showInterstitial, setShowInterstitial] = React.useState(false);
  const prevIndexRef = React.useRef(currentQuestionIndex);

  useEffect(() => {
    // If moving FORWARD from last universal question to first deep dive question
    if (prevIndexRef.current === UNIVERSAL_PROFILE_QUESTIONS.length - 1 && currentQuestionIndex === UNIVERSAL_PROFILE_QUESTIONS.length) {
      setShowInterstitial(true);
    }
    prevIndexRef.current = currentQuestionIndex;
  }, [currentQuestionIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showInterstitial && e.key === 'Enter') {
        setShowInterstitial(false);
        return;
      }
      if (e.key === 'Enter' && isAnswered) {
        nextQuestion(questionsList.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswered, safeIndex, questionsList.length, nextQuestion, showInterstitial]);

  // Ensure type alignment for dynamic renderer
  const formattedQuestion = {
    ...currentQuestion,
    type: currentQuestion.type.replace('_', '-') as any
  };

  if (showInterstitial) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 animate-in zoom-in-95 fade-in duration-500">
        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-2 text-center">
          Great! Your health profile is complete.
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-center max-w-md mb-8">
          Now let's understand your lifestyle and specific goals to personalize your plan.
        </p>
        <button
          onClick={() => setShowInterstitial(false)}
          className="relative flex h-14 items-center justify-center overflow-hidden rounded-xl bg-emerald-600 px-10 font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700 active:scale-[0.98]"
        >
          <span className="relative z-10 text-[16px]">Continue</span>
          <span className="relative z-10 ml-2">→</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col relative w-full">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex-1 flex flex-col pt-4 md:pt-6 px-4 md:px-6 pb-[var(--assessment-footer-height)] w-full max-w-2xl mx-auto"
        >
          {/* Conversational Header */}
          <div className="space-y-3 text-center mb-6 md:mb-10 shrink-0">
            {currentQuestion.intro && (
              <p className="text-sm md:text-base font-medium text-emerald-600 dark:text-emerald-400">
                {currentQuestion.intro}
              </p>
            )}
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-slate-900 dark:text-slate-50 text-balance leading-tight px-2">
              {currentQuestion.label}
            </h2>

            {currentQuestion.why && (
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-md mx-auto bg-slate-100 dark:bg-slate-800/50 py-1.5 px-3 rounded-full inline-block">
                💡 {currentQuestion.why}
              </p>
            )}
          </div>

          <div className="flex-1 flex flex-col w-full mb-4 px-1">
            <DynamicQuestionRenderer
              question={formattedQuestion as any}
              value={currentValue}
              onChange={(val) => recordAnswer(currentQuestion.id, val)}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Sticky Bottom Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-3 md:px-6 md:py-4 z-10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
        
        {/* Desktop Footer */}
        <div className="hidden md:flex max-w-4xl mx-auto items-center justify-between">
          <button 
            onClick={() => prevQuestion(UNIVERSAL_PROFILE_QUESTIONS.length)} 
            className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 font-medium transition-colors text-sm w-32 text-left"
          >
            ← Back
          </button>
          
          <button
            onClick={() => nextQuestion(questionsList.length)}
            disabled={!isAnswered}
            className="relative flex h-12 items-center justify-center overflow-hidden rounded-xl bg-emerald-600 px-12 font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 disabled:shadow-none"
          >
            <span className="relative z-10 text-[16px]">
              {safeIndex === questionsList.length - 1 ? 'Complete Assessment' : 'Continue'}
            </span>
          </button>
          
          <span className="text-slate-400 font-medium text-xs w-32 text-right">
            Progress saved automatically
          </span>
        </div>

        {/* Mobile Footer */}
        <div className="flex md:hidden flex-col items-center gap-3">
          <button
            onClick={() => nextQuestion(questionsList.length)}
            disabled={!isAnswered}
            className="w-full relative flex h-12 items-center justify-center overflow-hidden rounded-xl bg-emerald-600 px-10 font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 disabled:shadow-none"
          >
            <span className="relative z-10 text-[16px]">
              {safeIndex === questionsList.length - 1 ? 'Complete Assessment' : 'Continue'}
            </span>
          </button>
          
          <button 
            onClick={() => prevQuestion(UNIVERSAL_PROFILE_QUESTIONS.length)} 
            className="text-slate-400 font-medium text-sm"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
