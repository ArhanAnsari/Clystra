// app/not-found.tsx
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { GhostIcon } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 10000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-slate-100 to-white dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] text-gray-800 dark:text-white px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center z-10"
      >
        <GhostIcon className="w-16 h-16 text-cyan-600 dark:text-cyan-400 mb-2 animate-pulse" />
        <h1 className="text-6xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">404</h1>
        <p className="text-xl text-slate-700 dark:text-slate-300 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-xl transition-all"
        >
          Go Home
        </Link>
        <p className="text-sm text-gray-500 mt-4">Redirecting to home in 10 seconds...</p>
      </motion.div>

      {/* Background Illustration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute w-[400px] h-[400px] bg-cyan-200 dark:bg-cyan-800 rounded-full blur-3xl -z-10 bottom-10 left-10"
      />
    </main>
  );
}