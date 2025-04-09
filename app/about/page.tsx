// File: app/about/page.tsx
import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-10 md:px-20">
      <h1 className="text-3xl font-bold text-primary mb-4">About Clystra Networks Pvt. Ltd.</h1>
      <p className="mb-4">
        Founded on March 20, 2025, Clystra Networks is on a mission to revolutionize internet connectivity across Maharashtra. With a focus on performance, reliability, and customer-first service, we’re building the backbone of digital communication for both homes and enterprises.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>High-speed internet broadband connections</li>
        <li>Dedicated leased line solutions</li>
        <li>Optical fiber splicing</li>
        <li>Rapid internet fault repair & restoration</li>
      </ul>
      <p className="mt-4">
        With local expertise and a future-ready mindset, we’re redefining what internet service should look like.
      </p>
    </main>
  );
}