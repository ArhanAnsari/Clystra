//File: app/departments/page.tsx
import React from "react";

export default function DepartmentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-white dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]">
      <section className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-400">Departments</h1>
        <section>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-2"><strong>HR Department</strong></h2>
          <p className="text-slate-300 mb-4">
            <strong>Tariq Israr Ansari</strong>, MBA (HR & Finance), GDC&A<br />
            General Manager cum HR Head (GMHR), Clystra Networks Pvt. Ltd.
          </p>
          <p className="text-slate-300 mb-4">
            Tariq Ansari brings over 17 years of rich and diverse experience spanning Human Resources, Banking, Finance, Administration, and Insurance. He also holds deep insights into Co-operative Society branch operations and audit, giving him a unique edge in understanding both people and processes across sectors.
          </p>
          <p className="text-slate-300 mb-4">
            As the General Manager cum HR Head at Clystra Networks Pvt. Ltd., He plays a pivotal role in shaping the company’s human capital strategy, driving organizational growth, and fostering a culture of innovation and performance. His academic credentials—an MBA in HR & Finance along with a GDC&A—reflect his strong foundation in both strategic and operational aspects of management.
          </p>
          <p className="text-slate-300 mb-4">
            With a proven track record of leadership and a deep understanding of business dynamics, He is committed to aligning HR initiatives with corporate goals and building a work environment that attracts, retains, and nurtures top talent.
          </p>
        </section>
        {/* Section for contact us in HR Department */}
        <section className="text-center space-y-4 mt-8">
          <h2 className="text-2xl font-semibold text-primary"><strong>Contact Us</strong></h2>
          <p className="text-slate-300">For inquiries, please reach out to us at:</p>
          <p className="text-slate-300"><strong>Email:</strong> hr@clystranetworks.com</p>
          <p className="text-slate-300"><strong>Phone:</strong> +91 9823083123</p>
        </section>  
      </section>
    </main>
  );
}
