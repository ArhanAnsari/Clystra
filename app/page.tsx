import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-white dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]" >
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-cyan-400">
          Connecting Maharashtra to the Future
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          At Clystra Networks Pvt. Ltd., we deliver high-speed, reliable internet
          and communication solutions tailored for both homes and enterprises
          across Nagpur and Maharashtra.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 text-lg rounded-full">
              Get Started
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-2 text-lg rounded-full"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">About Clystra</h2>
        <p className="text-slate-300 max-w-3xl mx-auto">
          Founded with a mission to revolutionize digital connectivity, Clystra
          Networks Pvt. Ltd. brings cutting-edge internet infrastructure, expert
          fiber services, and customer-first solutions to empower Maharashtra’s
          growth in the digital age.
        </p>
        <div className="mt-6">
          <Link href="/about">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">
          Our Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {["High-Speed Broadband", "Leased Line Solutions", "Fiber Splicing & Maintenance", "Fast Restoration Service", "Enterprise Network Setup", "Rural Connectivity Projects"].map((title, index) => (
            <Card
              key={index}
              className="bg-slate-800 text-slate-100 hover:shadow-xl transition-shadow h-full"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🌐</div>
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                <p className="text-sm text-slate-400">
                  Description for {title} service.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/services">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full">
              View All Services
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer Section with Contact CTA */}
      <section className="text-center space-y-4">
        <h3 className="text-2xl text-cyan-300 font-semibold">
          Ready to upgrade your connectivity?
        </h3>
        <Link href="/contact">
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg rounded-full">
            Book a Consultation
          </Button>
        </Link>
      </section>
    </main>
  );
}
