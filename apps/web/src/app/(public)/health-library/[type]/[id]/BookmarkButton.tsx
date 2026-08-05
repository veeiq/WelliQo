"use client";

import { useState } from "react";
import { Bookmark } from "lucide-react";
import { toggleSaveResource } from "@/app/(dashboard)/dashboard/actions";
import { useRouter } from "next/navigation";

export function BookmarkButton({ 
  resourceId, 
  resourceType, 
  initialSaved,
  userId
}: { 
  resourceId: string, 
  resourceType: string, 
  initialSaved: boolean,
  userId: string | undefined 
}) {
  const [isSaved, setIsSaved] = useState(initialSaved);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleToggle = async () => {
    if (!userId) {
      router.push("/auth/login");
      return;
    }
    
    setIsPending(true);
    try {
      const result = await toggleSaveResource(resourceId, resourceType);
      setIsSaved(result.saved);
    } catch (e) {
      console.error(e);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <button 
      onClick={handleToggle}
      disabled={isPending}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
        isSaved 
          ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400" 
          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
      }`}
    >
      <Bookmark className={`w-4 h-4 ${isSaved ? "fill-emerald-700 dark:fill-emerald-400" : ""}`} />
      {isSaved ? "Saved" : "Save to Library"}
    </button>
  );
}
