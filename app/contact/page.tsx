import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-white dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]" >
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-cyan-400">Contact Us</h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          We’re here to help you with all your internet and connectivity needs.
          Reach out to us via any of the following methods:
        </p>
        <div className="grid gap-6 md:grid-cols-3 py-8">
          <div className="flex flex-col items-center">
            <Mail className="mb-2 text-cyan-400" />
            <p>support@clystra.in</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="mb-2 text-cyan-400" />
            <p>+91 98765 43210</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="mb-2 text-cyan-400" />
            <p>Nagpur, Maharashtra</p>
          </div>
        </div>
      </section>
    </main>
  );
}
