import React from 'react';
import { ExperienceBlock } from '@/engine/types/experience-blocks';
import { 
  RecognitionBlockUI, 
  ReflectionBlockUI, 
  StrengthBlockUI, 
  UnderstandingBlockUI, 
  RealityBlockUI, 
  JourneyBlockUI, 
  ActionsBlockUI, 
  ResourcesBlockUI, 
  ScoreBlockUI,
  BodyIntelligenceBlockUI,
  NutritionIntelligenceBlockUI,
  DailyBlueprintBlockUI,
  CompanionNutritionBlockUI
} from './BlockComponents';

interface BlockRendererProps {
  block: ExperienceBlock;
}

export function BlockRenderer({ block }: BlockRendererProps) {
  // Respect engine-level visibility rules
  if (block.meta.visibilityRules?.hidden) {
    return null;
  }

  // React only asks: "How do I render this?"
  switch (block.meta.type) {
    case 'Recognition':
      return <RecognitionBlockUI block={block as any} />;
    case 'Reflection':
      return <ReflectionBlockUI block={block as any} />;
    case 'Strength':
      return <StrengthBlockUI block={block as any} />;
    case 'Understanding':
      return <UnderstandingBlockUI block={block as any} />;
    case 'Reality':
      return <RealityBlockUI block={block as any} />;
    case 'Journey':
      return <JourneyBlockUI block={block as any} />;
    case 'Actions':
      return <ActionsBlockUI block={block as any} />;
    case 'Resources':
      return <ResourcesBlockUI block={block as any} />;
    case 'Score':
      return <ScoreBlockUI block={block as any} />;
    case 'BodyIntelligence':
      return <BodyIntelligenceBlockUI block={block as any} />;
    case 'NutritionIntelligence':
      return <NutritionIntelligenceBlockUI block={block as any} />;
    case 'DailyBlueprint':
      return <DailyBlueprintBlockUI block={block as any} />;
    case 'CompanionNutrition':
      return <CompanionNutritionBlockUI block={block as any} />;
    default:
      console.warn(`Unknown block type: ${block.meta.type}`);
      return null;
  }
}
