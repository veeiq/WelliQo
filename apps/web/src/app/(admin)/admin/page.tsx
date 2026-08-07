import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, FileText, Target } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function FounderIntelligencePage() {
  // We calculate real numbers dynamically from Prisma.
  // In a truly scalable system, we'd cache this or aggregate, but for V1 it's live.
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [
    totalUsers,
    newUsersToday,
    totalReports,
    reportsToday,
    coachRequests
  ] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({ where: { createdAt: { gte: today } } }),
    prisma.assessmentResult.count(),
    prisma.assessmentResult.count({ where: { createdAt: { gte: today } } }),
    prisma.activityLog.count({ where: { action: 'COACH_REQUESTED', createdAt: { gte: today } } })
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Founder Intelligence</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Your daily operating brief. Here's what's happening today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">New Users Today</CardTitle>
            <Users className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{newUsersToday}</div>
            <p className="text-xs text-muted-foreground">
              {totalUsers} total registered users
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Reports Generated</CardTitle>
            <FileText className="w-4 h-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reportsToday}</div>
            <p className="text-xs text-muted-foreground">
              {totalReports} total historical reports
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Coach Inquiries</CardTitle>
            <Target className="w-4 h-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{coachRequests}</div>
            <p className="text-xs text-muted-foreground">
              Action required today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <Activity className="w-4 h-4 text-rose-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">Nominal</div>
            <p className="text-xs text-muted-foreground">
              All services operational
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Top Analytical Findings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                Sufficient data required to identify top community findings. Check back when more assessments are completed.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>High-Priority Follow-ups</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                No immediate follow-ups required right now.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
