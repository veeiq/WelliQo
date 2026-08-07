import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Activity, FileText, Calendar, Clock, Star, BrainCircuit } from "lucide-react";
import Link from "next/link";

export default async function User360Page({ params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
    include: {
      profile: true,
      assessments: {
        orderBy: { createdAt: 'desc' }
      },
      activities: {
        orderBy: { createdAt: 'desc' }
      },
      coachNotes: {
        orderBy: { createdAt: 'desc' },
        include: { author: true }
      }
    }
  });

  if (!user) notFound();

  // Combine timeline events
  const timeline: Array<{
    id: string;
    type: 'JOINED' | 'ASSESSMENT' | 'ACTIVITY' | 'NOTE';
    date: Date;
    title: string;
    description?: string;
    icon: any;
    color: string;
  }> = [];

  timeline.push({
    id: 'join',
    type: 'JOINED',
    date: user.createdAt,
    title: 'Registered Account',
    icon: User,
    color: 'bg-blue-100 text-blue-600'
  });

  user.assessments.forEach(a => {
    timeline.push({
      id: a.id,
      type: 'ASSESSMENT',
      date: a.createdAt,
      title: `Completed ${a.assessmentName}`,
      description: `Report Version ${a.assessmentVersion}`,
      icon: FileText,
      color: 'bg-emerald-100 text-emerald-600'
    });
  });

  user.activities.forEach(a => {
    timeline.push({
      id: a.id,
      type: 'ACTIVITY',
      date: a.createdAt,
      title: a.action,
      icon: Activity,
      color: 'bg-purple-100 text-purple-600'
    });
  });

  user.coachNotes.forEach(n => {
    timeline.push({
      id: n.id,
      type: 'NOTE',
      date: n.createdAt,
      title: `Coach Note by ${n.author?.name || 'Coach'}`,
      description: n.content,
      icon: BrainCircuit,
      color: 'bg-amber-100 text-amber-600'
    });
  });

  timeline.sort((a, b) => b.date.getTime() - a.date.getTime());

  // Coach Opportunity Score (Basic heuristic: 1 point per assessment + 1 point for profile completion)
  let oppScore = 1; 
  if (user.assessments.length > 0) oppScore += 2;
  if (user.profile?.goals?.length) oppScore += 1;
  if (user.coachNotes.length > 0) oppScore += 1;
  oppScore = Math.min(5, oppScore);

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-center space-x-4">
        <Link href="/admin/users" className="text-sm text-blue-600 hover:underline">← Back to Users</Link>
      </div>

      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">User 360° Profile</h1>
          <p className="mt-1 text-gray-500">{user.email || user.mobile}</p>
        </div>
        <div className="flex items-center bg-gray-50 dark:bg-zinc-900 px-4 py-2 rounded-lg border border-gray-100 dark:border-zinc-800">
          <div className="mr-3">
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Opportunity Score</p>
            <div className="flex items-center mt-1">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} className={`w-4 h-4 ${star <= oppScore ? 'fill-amber-400 text-amber-400' : 'text-gray-300 dark:text-zinc-700'}`} />
              ))}
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{oppScore}.0</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Details */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Profile Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Name</p>
                <p className="font-medium">{user.name || 'Anonymous'}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Role</p>
                <p className="font-medium">{user.role}</p>
              </div>
              {user.profile && (
                <>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Journey Stage</p>
                    <p className="font-medium">{user.profile.journeyStage}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Primary Goal</p>
                    <p className="font-medium">{user.profile.primaryGoal || 'Not set'}</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Timeline */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Activity Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative border-l border-gray-200 dark:border-zinc-800 ml-4 space-y-8 pb-4">
                {timeline.map((event) => (
                  <div key={`${event.type}-${event.id}`} className="relative pl-8">
                    <span className={`absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white dark:ring-zinc-950 ${event.color}`}>
                      <event.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {event.title}
                      </div>
                      <div className="mt-1 flex items-center text-xs text-gray-500">
                        <Calendar className="mr-1.5 h-3 w-3 flex-shrink-0" />
                        {event.date.toLocaleDateString()}
                        <Clock className="mx-1.5 h-3 w-3 flex-shrink-0" />
                        {event.date.toLocaleTimeString()}
                      </div>
                      {event.description && (
                        <div className="mt-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-zinc-900/50 p-3 rounded-lg border border-gray-100 dark:border-zinc-800">
                          {event.description}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
