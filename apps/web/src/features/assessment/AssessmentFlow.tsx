'use client';

import * as React from 'react';
import { useAssessmentStore } from '@/lib/assessment-store';
import { QuestionRegistry } from '@welliqo/assessment-engine';
import {
  AssessmentContainer,
  QuestionCard,
  ProgressIndicator,
  Navigation,
  DynamicQuestionRenderer,
} from '@welliqo/ui/components/assessment';

export interface AssessmentFlowProps {
  registry: QuestionRegistry;
}

export function AssessmentFlow({ registry }: Readonly<AssessmentFlowProps>) {
  const {
    currentQuestionId,
    answers,
    history,
    isComplete,
    setAnswer,
    nextQuestion,
    previousQuestion,
    getErrors,
    startAssessment,
  } = useAssessmentStore();

  const [hasHydrated, setHasHydrated] = React.useState(false);

  React.useEffect(() => {
    useAssessmentStore.persist.rehydrate();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasHydrated(true);
  }, []);

  React.useEffect(() => {
    if (hasHydrated && !currentQuestionId && !isComplete) {
      const firstId = registry.getFirstQuestionId();
      if (firstId) {
        startAssessment(firstId);
      }
    }
  }, [hasHydrated, currentQuestionId, isComplete, registry, startAssessment]);

  if (!hasHydrated || (!currentQuestionId && !isComplete)) {
    return (
      <AssessmentContainer>
        <div className="flex h-64 items-center justify-center">
          <p className="text-muted">Loading assessment...</p>
        </div>
      </AssessmentContainer>
    );
  }

  if (isComplete) {
    return (
      <AssessmentContainer>
        <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Assessment Complete</h2>
          <p className="text-lg text-muted">Thank you for completing the wellness assessment.</p>
        </div>
      </AssessmentContainer>
    );
  }

  const currentItem = registry.getQuestion(currentQuestionId!);
  if (!currentItem) {
    return (
      <AssessmentContainer>
        <div className="flex h-64 items-center justify-center">
          <p className="text-destructive">Error: Question not found.</p>
        </div>
      </AssessmentContainer>
    );
  }

  const { question } = currentItem;
  const currentValue = answers[question.id];
  const errors = getErrors(registry);
  const totalQuestions = registry.getAllQuestions().length;
  const currentStep = history.length + 1;

  const handleNext = () => {
    nextQuestion(registry);
  };

  const handleBack = () => {
    previousQuestion();
  };

  return (
    <AssessmentContainer>
      <ProgressIndicator current={currentStep} total={totalQuestions} />
      
      <QuestionCard label={question.label} description={question.description}>
        <DynamicQuestionRenderer
          question={question}
          value={currentValue}
          onChange={(val) => setAnswer(question.id, val)}
        />
        {errors.length > 0 && (
          <div className="mt-4 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
            {errors[0]}
          </div>
        )}
      </QuestionCard>
      
      <Navigation
        onNext={handleNext}
        onBack={handleBack}
        canGoBack={history.length > 0}
        canGoNext={currentValue !== undefined && currentValue !== null && currentValue !== ''}
        nextLabel={currentItem.defaultNextId === 'END' && currentItem.rules.length === 0 ? 'Submit' : 'Next'}
      />
    </AssessmentContainer>
  );
}
