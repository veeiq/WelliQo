import { Construction, Sparkles } from "lucide-react";

export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full mb-6">
        <Sparkles className="w-10 h-10 text-blue-600 dark:text-blue-400" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {title} is Coming Soon
      </h2>
      <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8">
        No data yet. This module will become available automatically once sufficient user data exists in the ecosystem.
      </p>
      <div className="inline-flex items-center text-sm text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-zinc-900 px-4 py-2 rounded-full border border-gray-100 dark:border-zinc-800">
        <Construction className="w-4 h-4 mr-2" />
        Infrastructure provisioned and database-ready.
      </div>
    </div>
  );
}
