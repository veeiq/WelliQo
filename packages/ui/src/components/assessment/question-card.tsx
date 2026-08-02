import * as React from 'react';

export interface QuestionCardProps {
  label: string;
  description?: string;
  children: React.ReactNode;
}

export function QuestionCard({ label, description, children }: Readonly<QuestionCardProps>) {
  return (
    <div className="flex flex-col gap-6 py-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {label}
        </h2>
        {description && <p className="text-lg text-muted">{description}</p>}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
