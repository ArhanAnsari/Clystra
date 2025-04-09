// app/page.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <>
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
          <div className="mt-6 flex flex-wrap justify-center gap-4">
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
    </>
  );
}