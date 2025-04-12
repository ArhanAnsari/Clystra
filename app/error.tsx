// app/error.tsx
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangleIcon } from "lucide-react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-slate-100 to-white dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] text-gray-800 dark:text-white px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center z-10"
      >
        <AlertTriangleIcon className="w-16 h-16 text-red-500 mb-2 animate-bounce" />
        <h1 className="text-5xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">Something went wrong</h1>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">An unexpected error has occurred. Please try again.</p>
        <button
          onClick={reset}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-xl transition-all"
        >
          Try Again
        </button>
      </motion.div>

      {/* Background Illustration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute w-[400px] h-[400px] bg-red-200 dark:bg-red-800 rounded-full blur-3xl -z-10 top-20 right-10"
      />
    </main>
  );
}
