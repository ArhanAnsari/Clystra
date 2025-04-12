//File: app/departments/page.tsx
//TODO: Add HR Department
//Add Tariq Ansari
//(MBA Finance, GDC&A)
//GMHR
import React from "react";

export default function DepartmentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-white dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]"  >
      <section className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-400">Departments</h1>
        <p className="text-slate-300">
          Our specialized departments include Network Operations, Customer Support,
          Infrastructure Deployment, and R&D. Each team plays a crucial role in
          keeping Clystra's mission moving forward across Maharashtra.
        </p>
      </section>
    </main>
  );
}
