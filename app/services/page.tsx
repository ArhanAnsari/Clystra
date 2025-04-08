// 🛠️ Services Page (app/services/page.tsx)
export default function ServicesPage() {
    return (
      <section className="grid gap-6 md:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">🔌 New Internet Connections</h2>
          <p>Residential broadband and leased lines tailored for business-grade needs.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">🧵 Fiber Splicing</h2>
          <p>Precision splicing that reduces signal loss and boosts network efficiency.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">⚡ Connectivity Restoration</h2>
          <p>Fast response to outages with expert troubleshooting and restoration.</p>
        </div>
      </section>
    );
  }