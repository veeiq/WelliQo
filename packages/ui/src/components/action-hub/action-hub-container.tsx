import React from 'react';
import type { ActionHub } from '@welliqo/content';

import { PlaybookHero } from './playbook-hero';
import { OneNextStep } from './one-next-step';
import { ContextualSolutions } from './contextual-solutions';
import { ExploreFurther } from './explore-further';
import { MDXRenderer } from './mdx-renderer';

interface ActionHubContainerProps {
  actionHub: ActionHub;
}

export function ActionHubContainer({ actionHub }: ActionHubContainerProps) {
  // Find the primary habit
  const habit = actionHub.supportingNodes.find((n: any) => n.type === 'habit') || null;
  
  // Find recipes (food first vs accelerator)
  // For demonstration, we assume the first recipe is food-first, second is accelerator.
  // In a robust implementation, this could use metadata or tags.
  const recipes = actionHub.supportingNodes.filter((n: any) => n.type === 'recipe');
  const foodFirst = recipes[0] || null;
  const accelerator = recipes[1] || null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-50 overflow-x-hidden selection:bg-indigo-200 dark:selection:bg-indigo-900 pb-24">
      
      {/* 1. The Personalized Playbook Hero (Aha! Moment) */}
      <PlaybookHero primaryContent={actionHub.primaryContent} />

      <div className="space-y-24">
        {/* 2. The One Next Step (Gentle CTA) */}
        <OneNextStep habit={habit} />

        {/* 3. Contextual Solutions (Food vs Accelerator) */}
        <ContextualSolutions 
          foodFirst={foodFirst} 
          accelerator={accelerator} 
          foodFirstBody={foodFirst ? <MDXRenderer source={foodFirst.rawBody || ''} /> : null}
          acceleratorBody={accelerator ? <MDXRenderer source={accelerator.rawBody || ''} /> : null}
        />

        {/* 4. Knowledge Discovery (Science Bridge) */}
        <ExploreFurther concepts={actionHub.explanations} />
      </div>

    </div>
  );
}
