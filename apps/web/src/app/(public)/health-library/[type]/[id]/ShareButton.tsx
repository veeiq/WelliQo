"use client";

import { Share } from "lucide-react";
import { useState } from "react";

export function ShareButton({ title, text, url }: { title: string; text: string; url?: string }) {
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    const shareUrl = url || window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: shareUrl,
        });
      } catch (e) {
        // user cancelled or error
      }
    } else {
      // Fallback to copy link
      await navigator.clipboard.writeText(shareUrl);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
    >
      <Share className="w-4 h-4" />
      {shared ? "Copied!" : "Share"}
    </button>
  );
}
