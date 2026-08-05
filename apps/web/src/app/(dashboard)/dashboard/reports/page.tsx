import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { HydratedReport } from "../components/HydratedReport";

export default async function LatestReportPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const latestReport = await prisma.assessmentResult.findFirst({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' }
  });

  if (!latestReport) {
    redirect("/dashboard");
  }

  return (
    <HydratedReport 
      metrics={latestReport.clinicalReport as any} 
      data={latestReport.answers as any} 
      answers={latestReport.answers as any}
      hideSaveAction={true}
    />
  );
}
