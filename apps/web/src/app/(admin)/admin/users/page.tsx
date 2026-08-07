import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { User, Activity, FileText } from "lucide-react";

export default async function UsersAdminPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      profile: true,
      _count: {
        select: { assessments: true, coachNotes: true }
      }
    }
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">User Management</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          View and manage all registered users, their reports, and coaching status.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-zinc-900/50 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3">User</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Joined</th>
                  <th className="px-4 py-3 text-center">Reports</th>
                  <th className="px-4 py-3 text-center">Notes</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} className="border-b border-gray-100 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-900/50">
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                          {user.name?.charAt(0) || <User className="w-4 h-4" />}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{user.name || 'Anonymous'}</p>
                          <p className="text-xs text-gray-500">{user.email || user.mobile}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-zinc-800 dark:text-gray-300">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center text-emerald-600">
                        <FileText className="w-4 h-4 mr-1" />
                        {user._count.assessments}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center text-amber-600">
                        <Activity className="w-4 h-4 mr-1" />
                        {user._count.coachNotes}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link 
                        href={`/admin/users/${user.id}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        View 360°
                      </Link>
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
