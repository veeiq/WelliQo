import Link from "next/link";
import { 
  BarChart, Users, FileText, ClipboardList, BookOpen, 
  LineChart, Users2, Bell, CheckSquare, Settings, 
  Activity, ShieldAlert, Shield, DollarSign, BrainCircuit,
  LogOut
} from "lucide-react";

const navigation = [
  { name: 'Founder Intelligence', href: '/admin', icon: BrainCircuit },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Reports', href: '/admin/reports', icon: FileText },
  { name: 'Assessments', href: '/admin/assessments', icon: ClipboardList },
  { name: 'Articles', href: '/admin/articles', icon: BookOpen },
  { name: 'Analytics', href: '/admin/analytics', icon: LineChart },
  { name: 'Coach CRM', href: '/admin/coach-crm', icon: Users2 },
  { name: 'Notifications', href: '/admin/notifications', icon: Bell },
  { name: 'Tasks', href: '/admin/tasks', icon: CheckSquare },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
  { name: 'System Health', href: '/admin/system-health', icon: Activity },
  { name: 'Audit Logs', href: '/admin/audit-logs', icon: ShieldAlert },
  { name: 'Security', href: '/admin/security', icon: Shield },
  { name: 'Revenue', href: '/admin/revenue', icon: DollarSign },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-zinc-950">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-zinc-800">
          <Link href="/admin" className="font-bold text-xl tracking-tight text-blue-600 dark:text-blue-400">
            WelliQo Admin
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-white"
              >
                <item.icon
                  className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300"
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="p-4 border-t border-gray-200 dark:border-zinc-800">
          <Link 
            href="/api/auth/signout" 
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
          >
            <LogOut className="mr-3 h-5 w-5 flex-shrink-0" />
            Sign out
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Mobile header could go here */}
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
