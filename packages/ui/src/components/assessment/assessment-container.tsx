import * as React from 'react';

export function AssessmentContainer({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col px-4 py-8 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
