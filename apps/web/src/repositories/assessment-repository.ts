import { prisma } from '@/lib/prisma';
import { AssessmentResult } from '@prisma/client';
import { CalculatedMetrics } from '@/store/assessment-store';

/**
 * Robustly extracts the CalculatedMetrics object from a database clinicalReport.
 * Handles both legacy formats (where clinicalReport IS the metrics) 
 * and V1 formats (where it's { clinical: metrics, experience: blocks }).
 */
export function extractMetrics(clinicalReport: any): CalculatedMetrics | null {
  if (!clinicalReport) return null;
  if (clinicalReport.clinical && typeof clinicalReport.clinical === 'object') {
    return clinicalReport.clinical as CalculatedMetrics;
  }
  return clinicalReport as CalculatedMetrics;
}

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
    return extractMetrics(result.clinicalReport);
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
      score: extractMetrics(r.clinicalReport)?.overallScore || 0
    })).reverse(); // oldest to newest for charts
  }
}
