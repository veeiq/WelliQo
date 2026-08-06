import { prisma } from '@/lib/prisma';
import { AssessmentResult } from '@prisma/client';
import { CalculatedMetrics } from '@/store/assessment-store';

export class AssessmentRepository {
  /**
   * Retrieves the most recent assessment result for a user
   */
  static async getLatestAssessment(userId: string): Promise<AssessmentResult | null> {
    return prisma.assessmentResult.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Retrieves the latest CalculatedMetrics explicitly typed
   */
  static async getLatestMetrics(userId: string): Promise<CalculatedMetrics | null> {
    const result = await this.getLatestAssessment(userId);
    if (!result) return null;
    return result.clinicalReport as unknown as CalculatedMetrics;
  }

  /**
   * Retrieves a history of scores for trending (Future-proofing)
   */
  static async getScoreHistory(userId: string, limit: number = 10) {
    const results = await prisma.assessmentResult.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: limit,
      select: {
        id: true,
        createdAt: true,
        clinicalReport: true
      }
    });
    
    return results.map(r => ({
      id: r.id,
      date: r.createdAt,
      score: (r.clinicalReport as unknown as CalculatedMetrics).overallScore
    })).reverse(); // oldest to newest for charts
  }
}
