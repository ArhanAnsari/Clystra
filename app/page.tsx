
// app/page.tsx (Home Page)
import AnimatedSection from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="container py-10">
      <AnimatedSection>
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-primary">Empowering Maharashtra with Seamless Connectivity</h1>
        <p className="text-lg mt-4 max-w-2xl text-muted">Welcome to Clystra Networks Pvt. Ltd. — your go-to provider for robust, high-speed internet infrastructure in Nagpur and across Maharashtra.</p>
        <div className="flex gap-4 mt-6">
          <Link href="/contact"><Button size="lg">Contact Us</Button></Link>
          <Link href="/about"><Button variant="secondary" size="lg">Learn More</Button></Link>
        </div>
      </AnimatedSection>
    </main>
  )
}