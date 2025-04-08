// app/about/page.tsx
'use client'

import AnimatedSection from '@/components/AnimatedSection'

export default function AboutPage() {
  return (
    <main className="container py-10">
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-primary mb-4">About Clystra Networks</h1>
        <p className="text-lg text-muted max-w-3xl">
          Clystra Networks Pvt. Ltd. is a pioneering internet service provider based in Nagpur, dedicated to delivering ultra-fast, reliable, and secure connectivity solutions across Maharashtra. With a focus on both broadband and leased line services, we empower businesses, institutions, and homes with cutting-edge technology and seamless internet experiences.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl font-semibold mt-10 text-secondary">Our Mission</h2>
        <p className="text-base mt-2 text-muted max-w-2xl">
          To revolutionize connectivity across Maharashtra by providing innovative, affordable, and high-speed internet services that support the digital growth of every sector we serve.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl font-semibold mt-10 text-secondary">Why Choose Us?</h2>
        <ul className="list-disc ml-6 mt-2 text-muted space-y-2">
          <li>Reliable and consistent high-speed internet</li>
          <li>Dedicated leased line solutions for enterprises</li>
          <li>Responsive customer support and service</li>
          <li>Expanding coverage across urban and rural Maharashtra</li>
          <li>Commitment to digital transformation and innovation</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl font-semibold mt-10 text-secondary">Our Vision</h2>
        <p className="text-base mt-2 text-muted max-w-2xl">
          We envision a digitally empowered Maharashtra where everyone—from startups to students—has access to the internet as a basic right, fueling productivity, education, and progress.
        </p>
      </AnimatedSection>
    </main>
  )
}
