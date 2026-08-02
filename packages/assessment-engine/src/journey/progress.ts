import type { Journey, JourneyProgress } from './types';
import { resolveEnabledSections, resolveEnabledGroups } from './resolver';

export function initializeProgress(journey: Journey): JourneyProgress {
  const initialSections = resolveEnabledSections(journey.sections, {});
  const firstSection = initialSections.length > 0 ? initialSections[0] : null;
  
  let firstGroupId = null;
  if (firstSection) {
    const initialGroups = resolveEnabledGroups(firstSection.questionGroups || [], {});
    const firstGroup = initialGroups[0];
    firstGroupId = firstGroup ? firstGroup.id : null;
  }

  return {
    journeyId: journey.id,
    version: journey.version,
    completedSectionIds: [],
    currentSectionId: firstSection?.id ?? null,
    currentGroupId: firstGroupId,
    isComplete: !firstSection,
  };
}

function findNextValidSectionAndGroup(
  enabledSections: ReturnType<typeof resolveEnabledSections>,
  startIndex: number,
  answers: Record<string, unknown>
): { sectionId: string | null; groupId: string | null; skippedSectionIds: string[] } {
  const skippedSectionIds: string[] = [];

  for (let i = startIndex; i < enabledSections.length; i++) {
    const section = enabledSections[i];
    if (!section) continue;
    const groups = resolveEnabledGroups(section.questionGroups || [], answers);
    const firstGroup = groups[0];
    if (firstGroup) {
      return { sectionId: section.id, groupId: firstGroup.id, skippedSectionIds };
    }
    // Section has no enabled groups, skip it
    skippedSectionIds.push(section.id);
  }

  return { sectionId: null, groupId: null, skippedSectionIds };
}

export function determineNextStep(
  journey: Journey,
  currentProgress: JourneyProgress,
  answers: Record<string, unknown>
): JourneyProgress {
  if (currentProgress.isComplete || !currentProgress.currentSectionId) {
    return { ...currentProgress, isComplete: true };
  }

  const enabledSections = resolveEnabledSections(journey.sections, answers);
  const currentSectionIndex = enabledSections.findIndex(
    (s) => s.id === currentProgress.currentSectionId
  );

  if (currentSectionIndex === -1) {
    return { ...currentProgress, isComplete: true };
  }

  const currentSection = enabledSections[currentSectionIndex];
  if (!currentSection) {
    return { ...currentProgress, isComplete: true };
  }
  const enabledGroups = resolveEnabledGroups(currentSection.questionGroups || [], answers);
  
  let nextGroupId: string | null = null;
  let nextSectionId: string | null = null;
  const newCompletedSections = new Set(currentProgress.completedSectionIds);

  if (currentProgress.currentGroupId) {
    const currentGroupIndex = enabledGroups.findIndex(
      (g) => g.id === currentProgress.currentGroupId
    );

    if (currentGroupIndex !== -1 && currentGroupIndex < enabledGroups.length - 1) {
      // Next group in current section
      const nextGroup = enabledGroups[currentGroupIndex + 1];
      nextGroupId = nextGroup ? nextGroup.id : null;
      nextSectionId = currentSection.id;
    } else {
      // Section is complete
      newCompletedSections.add(currentSection.id);
      
      const { sectionId, groupId, skippedSectionIds } = findNextValidSectionAndGroup(
        enabledSections,
        currentSectionIndex + 1,
        answers
      );

      nextSectionId = sectionId;
      nextGroupId = groupId;
      skippedSectionIds.forEach((id) => newCompletedSections.add(id));
    }
  }

  return {
    ...currentProgress,
    completedSectionIds: Array.from(newCompletedSections),
    currentSectionId: nextSectionId,
    currentGroupId: nextGroupId,
    isComplete: !nextSectionId,
  };
}
