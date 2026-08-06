import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { getUserSettings } from "../actions";
import { ProfileClient } from "./components/ProfileClient";
import { auth } from "@/auth";

export default async function ProfilePage() {
  const session = await auth();
  const user = session?.user || {};
  
  const settings = await getUserSettings();

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
      </div>
    }>
      <ProfileClient 
        user={user} 
        profile={settings.profile} 
        preferences={settings.preferences} 
      />
    </Suspense>
  );
}
