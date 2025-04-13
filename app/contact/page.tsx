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
            <p>clystranetworks@gmail.com</p>
            <p>info@clystranetworks.com</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="mb-2 text-cyan-400" />
            <p>+91 7720033786</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="mb-2 text-cyan-400" />
            <p>Nagpur, Maharashtra</p>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.672163698438!2d79.10093887520027!3d21.12563248444443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1004a0c6197%3A0xa1cb13640664c65a!2sClystra%20Networks%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1744552446612!5m2!1sen!2sin" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </main>
  );
}
