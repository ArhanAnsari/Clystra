import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesPage() {
  const services = [
    { icon: "🚀", title: "High-Speed Broadband", desc: "Fiber internet for homes and businesses." },
    { icon: "🛰️", title: "Leased Line Solutions", desc: "Dedicated internet lines." },
    { icon: "🔧", title: "Fiber Splicing", desc: "Expert setup & maintenance." },
    { icon: "📡", title: "Rural Connectivity", desc: "Internet access for remote areas." },
    { icon: "⚡", title: "Fast Restoration", desc: "Quick issue recovery." },
    { icon: "🌐", title: "Enterprise Networks", desc: "Infrastructure for companies." }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-white dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-cyan-400">Our Services</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Card key={i} className="bg-slate-800 text-slate-100">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                <p className="text-sm text-slate-400">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
