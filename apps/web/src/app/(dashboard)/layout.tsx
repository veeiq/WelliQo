import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { DashboardSidebar } from "./components/DashboardSidebar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex">
      <DashboardSidebar user={session.user} />
      
      <main className="flex-1 flex flex-col min-h-0 overflow-auto">
        <div className="p-4 md:p-8 lg:p-12">
          {children}
        </div>
      </main>
    </div>
  );
}
