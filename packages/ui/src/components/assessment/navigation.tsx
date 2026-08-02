import * as React from 'react';
import { Button } from '../button';

export interface NavigationProps {
  onNext: () => void;
  onBack?: () => void;
  canGoNext: boolean;
  canGoBack: boolean;
  nextLabel?: string;
}

export function Navigation({
  onNext,
  onBack,
  canGoNext,
  canGoBack,
  nextLabel = 'Next',
}: Readonly<NavigationProps>) {
  return (
    <div className="flex items-center justify-between border-t border-border pt-6 mt-8">
      <div>
        {canGoBack && onBack && (
          <Button variant="secondary" onClick={onBack}>
            Back
          </Button>
        )}
      </div>
      <Button variant="primary" onClick={onNext} disabled={!canGoNext}>
        {nextLabel}
      </Button>
    </div>
  );
}
