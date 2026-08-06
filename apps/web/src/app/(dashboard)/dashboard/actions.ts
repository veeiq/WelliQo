"use server"

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

/**
 * Ensures the user is authenticated and returns their ID
 */
async function requireAuth() {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }
  return session.user.id;
}

/**
 * Gets overview data for the main dashboard page
 */
export async function getUserDashboardData() {
  const userId = await requireAuth();

  const [user, latestAssessment, profile] = await Promise.all([
    prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, image: true },
    }),
    prisma.assessmentResult.findFirst({
      where: { userId },
      orderBy: { createdAt: "desc" },
    }),
    prisma.profile.findUnique({
      where: { userId },
    }),
  ]);

  return {
    user,
    latestAssessment,
    profile,
  };
}

/**
 * Gets all assessment history for the user
 */
export async function getUserHistory() {
  const userId = await requireAuth();

  const history = await prisma.assessmentResult.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return history;
}

/**
 * Gets all saved resources for the user
 */
export async function getSavedResources() {
  const userId = await requireAuth();

  const savedResources = await prisma.savedResource.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return savedResources;
}

/**
 * Gets the user's profile and preferences
 */
export async function getUserSettings() {
  const userId = await requireAuth();

  const [profile, preferences] = await Promise.all([
    prisma.profile.findUnique({ where: { userId } }),
    prisma.userPreference.findUnique({ where: { userId } }),
  ]);

  return { profile, preferences };
}

/**
 * Updates the user's profile
 */
export async function updateUserProfile(data: {
  goals?: string[];
  foodPreferences?: string[];
  medicalConditions?: string[];
  journeyStage?: string;
  name?: string;
}) {
  const userId = await requireAuth();

  const { name, ...profileData } = data;

  if (name) {
    await prisma.user.update({
      where: { id: userId },
      data: { name },
    });
  }

  const profile = await prisma.profile.upsert({
    where: { userId },
    update: profileData,
    create: {
      userId,
      ...profileData,
    },
  });

  revalidatePath("/dashboard/profile");
  return profile;
}

/**
 * Updates the user's preferences
 */
export async function updateUserPreferences(data: {
  theme?: string;
  language?: string;
  notifications?: boolean;
  units?: string;
}) {
  const userId = await requireAuth();

  const preferences = await prisma.userPreference.upsert({
    where: { userId },
    update: data,
    create: {
      userId,
      ...data,
    },
  });

  revalidatePath("/dashboard/settings");
  return preferences;
}

/**
 * Toggles saving/unsaving a resource
 */
export async function toggleSaveResource(resourceId: string, resourceType: string) {
  const userId = await requireAuth();

  const existing = await prisma.savedResource.findUnique({
    where: {
      userId_resourceId: {
        userId,
        resourceId,
      }
    }
  });

  if (existing) {
    await prisma.savedResource.delete({
      where: { id: existing.id }
    });
    revalidatePath("/dashboard/saved");
    return { saved: false };
  } else {
    await prisma.savedResource.create({
      data: {
        userId,
        resourceId,
        resourceType,
      }
    });
    revalidatePath("/dashboard/saved");
    return { saved: true };
  }
}

import { AssessmentRepository } from '@/repositories/assessment-repository';
import { CalculatedMetrics } from '@/store/assessment-store';
import { Recommendation } from '@/types/assessment';

export async function getLatestScore(): Promise<{ score: number; status: string; label: string } | null> {
  const userId = await requireAuth();
  const metrics = await AssessmentRepository.getLatestMetrics(userId);
  if (!metrics) return null;
  
  return {
    score: metrics.overallScore,
    status: metrics.scoreMeaning.split(' - ')[0] || metrics.scoreMeaning, // basic fallback
    label: metrics.scoreMeaning, 
  };
}

export async function getPrimaryRecommendation(): Promise<Recommendation | null> {
  const userId = await requireAuth();
  const metrics = await AssessmentRepository.getLatestMetrics(userId);
  if (!metrics || metrics.priorityPlan.length === 0) return null;
  
  // Return the highest priority recommendation
  return metrics.priorityPlan[0] || null;
}

export async function getLatestBreakdown() {
  const userId = await requireAuth();
  const metrics = await AssessmentRepository.getLatestMetrics(userId);
  if (!metrics) return null;
  
  return metrics.pillarScores;
}

export async function getScoreHistoryAction() {
  const userId = await requireAuth();
  return AssessmentRepository.getScoreHistory(userId);
}

export type DashboardState = 'NEW_USER' | 'ONE_REPORT' | 'MULTIPLE_REPORTS';

export async function getDashboardState(): Promise<DashboardState> {
  const userId = await requireAuth();
  const history = await AssessmentRepository.getScoreHistory(userId, 2);
  
  if (history.length === 0) {
    return 'NEW_USER';
  } else if (history.length === 1) {
    return 'ONE_REPORT';
  } else {
    return 'MULTIPLE_REPORTS';
  }
}
