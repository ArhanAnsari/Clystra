// File: app/contact/page.tsx
import React from "react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-10 md:px-20">
      <h1 className="text-3xl font-bold text-primary mb-6">Let’s Connect</h1>
      <p className="mb-4">Got questions? Need a new connection? We’re here to help.</p>

      <div className="space-y-4">
        <p>
          📍 <strong>Office Address:</strong><br />
          Clystra Networks Pvt. Ltd.<br />
          Nagpur, Maharashtra
        </p>
        <p>
          📞 <strong>Phone:</strong> +91-XXXXXXXXXX
        </p>
        <p>
          ✉️ <strong>Email:</strong> contact@clystra.com
        </p>
      </div>

      <div className="mt-6">
        <Button>Contact Form</Button>
      </div>
    </main>
  );
}