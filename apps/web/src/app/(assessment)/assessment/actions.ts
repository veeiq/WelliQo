"use server";

import { getRecommendationsForAssessment } from "@/lib/knowledge-engine";

export async function getRecommendationsAction(goals: string[], findings: string[]) {
  const recommendations = await getRecommendationsForAssessment(goals, findings);
  return recommendations;
}
