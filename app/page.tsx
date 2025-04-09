import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ModeToggle";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Coverage", href: "/coverage" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <>
      {/* Navbar */}
      {/* <header className="w-full bg-background text-foreground shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="text-xl font-bold text-primary">Clystra Networks</Link>
        <nav className="flex gap-6 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <ModeToggle />
        </nav>
      </header> */}

      {/* Main Content */}
      <main className="min-h-screen bg-background text-foreground px-6 py-10 md:px-20">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Empowering Maharashtra with Seamless Connectivity
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Welcome to Clystra Networks Pvt. Ltd. — your go-to provider for robust,
            high-speed internet infrastructure in Nagpur and across Maharashtra.
            Whether you need a broadband connection for your home or a leased
            line for your business, we've got you covered with reliable, scalable
            solutions.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button>Get Started</Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </section>

        {/* Why Clystra */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {[
            { icon: "🚀", title: "Ultra-fast broadband & leased lines" },
            { icon: "🔧", title: "Expert fiber splicing & maintenance" },
            { icon: "💡", title: "Fast response for connectivity restoration" },
            { icon: "🌐", title: "Built for modern homes and next-gen businesses" },
          ].map((item, index) => (
            <Card key={index} className="bg-muted text-muted-foreground">
              <CardContent className="p-4">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-base leading-tight">
                  {item.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      {/* Footer */}
      {/* <footer className="w-full border-t border-border bg-muted px-6 py-6 text-center text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Clystra Networks Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-primary text-muted-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </footer> */}
    </>
  );
}