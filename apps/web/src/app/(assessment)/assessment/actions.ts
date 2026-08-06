"use server";

import { getRecommendationsForAssessment } from "@/lib/knowledge-engine";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function getRecommendationsAction(goals: string[], findings: string[]) {
  const recommendations = await getRecommendationsForAssessment(goals, findings);
  return recommendations;
}

export async function saveAssessmentResultAction(
  clientReportId: string,
  assessmentId: string,
  assessmentName: string,
  answers: any,
  clinicalReport: any
) {
  const session = await auth();
  if (!session?.user?.id) {
    return { error: "Unauthorized" };
  }

  try {
    const existing = await prisma.assessmentResult.findUnique({
      where: { clientReportId }
    });

    if (existing) {
      return { success: true, result: existing };
    }

    const result = await prisma.assessmentResult.create({
      data: {
        clientReportId,
        userId: session.user.id,
        assessmentId,
        assessmentName,
        assessmentVersion: "1.0",
        answers,
        clinicalReport,
        schemaVersion: "1.0"
      }
    });

    return { success: true, result };
  } catch (error: any) {
    if (error?.code === 'P2002') {
      // Race condition occurred, another request inserted it first. Fetch and return it.
      const existing = await prisma.assessmentResult.findUnique({
        where: { clientReportId }
      });
      if (existing) {
        return { success: true, result: existing };
      }
    }
    console.error("Failed to save assessment:", error);
    return { error: "Failed to save assessment" };
  }
}
