import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { HydratedReport } from "../../components/HydratedReport";

export default async function ReportByIdPage(
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const report = await prisma.assessmentResult.findUnique({
    where: { 
      id: params.id,
    }
  });

  if (!report || report.userId !== session.user.id) {
    redirect("/dashboard");
  }

  return (
    <HydratedReport 
      metrics={report.clinicalReport as any} 
      data={report.answers as any} 
      answers={report.answers as any}
      hideSaveAction={true}
    />
  );
}
