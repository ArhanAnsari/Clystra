// File: app/services/page.tsx
import React from "react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-10 md:px-20">
      <h1 className="text-3xl font-bold text-primary mb-6">Our Core Services</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">🔌 New Internet Connections</h2>
          <ul className="list-disc list-inside">
            <li>Broadband for residential & commercial use</li>
            <li>Leased lines for businesses needing dedicated bandwidth</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">🧵 Fiber Splicing</h2>
          <ul className="list-disc list-inside">
            <li>Precision fiber optic splicing for new and existing infrastructure</li>
            <li>Reducing signal loss, improving efficiency</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">⚡ Connectivity Restoration</h2>
          <ul className="list-disc list-inside">
            <li>Fast, expert resolution of network issues</li>
            <li>Emergency fault repair to get you back online</li>
          </ul>
        </div>
      </div>
    </main>
  );
}