"use client";

import { Download } from "lucide-react";
import { useState } from "react";

export function DownloadButton({ title, type }: { title: string; type: string }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // In a real implementation, we could generate a PDF using a library like jspdf 
    // or call an API endpoint that returns a PDF stream.
    // For MVP, we use the browser's built-in print functionality
    window.print();
    setTimeout(() => setDownloading(false), 1000);
  };

  return (
    <button 
      onClick={handleDownload}
      disabled={downloading}
      className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
    >
      <Download className="w-4 h-4" />
      {downloading ? "Preparing..." : "Download"}
    </button>
  );
}
