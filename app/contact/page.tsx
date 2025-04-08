// app/contact/page.tsx
'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import AnimatedSection from '@/components/AnimatedSection'
import { toast } from 'sonner'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    toast.success('Message sent!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <main className="container py-10">
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-primary">Let’s Connect</h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-xl">
          <Input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
          <Input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
          <Textarea placeholder="Your Message" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
          <Button type="submit" size="lg">Send Message</Button>
        </form>
      </AnimatedSection>
    </main>
  )
}