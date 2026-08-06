import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { clientReportId, assessmentId, answers, calculatedMetrics } = body;

    if (!clientReportId || !calculatedMetrics || !assessmentId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Idempotency check: see if report already exists for this clientReportId
    const existing = await prisma.assessmentResult.findUnique({
      where: { clientReportId }
    });

    if (existing) {
      return NextResponse.json({ 
        success: true, 
        message: 'Report already synced', 
        id: existing.id 
      });
    }

    // Create new AssessmentResult
    const newReport = await prisma.assessmentResult.create({
      data: {
        userId: session.user.id,
        clientReportId,
        assessmentId,
        assessmentName: 'Weight Management', // This can be dynamic based on assessmentId later
        assessmentVersion: '1.0',
        answers: answers || {},
        clinicalReport: calculatedMetrics,
        schemaVersion: '1.0',
      }
    });

    return NextResponse.json({ 
      success: true, 
      id: newReport.id 
    });
  } catch (error) {
    console.error('Assessment Sync API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
