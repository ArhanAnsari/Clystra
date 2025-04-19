'use client';

import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [loading, setLoading] = useState(true);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    if (!formData.email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setFormSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Your message has been sent successfully!');
      setFormSubmitting(false);
      setFormSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
        setFormSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@clystranetworks.com',
        'support@clystranetworks.com'
      ],
      action: 'mailto:info@clystranetworks.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+91 7720033786',
        'Mon-Fri, 9:00 AM - 6:00 PM IST'
      ],
      action: 'tel:+917720033786'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        'Flat No. 105, Saraswati Apartment 3,',
        'Wanjari Nagar, Medical College, Nagpur'
      ],
      action: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.671797373069!2d79.10094991090406!3d21.125647080466912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1004a0c6197%3A0xa1cb13640664c65a!2sClystra%20Networks%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1745068873098!5m2!1sen!2sin'
    }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="text-center">
          <div className="mb-4">
            <LoadingSpinner />
          </div>
          <p className="text-muted-foreground">Loading contact information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b dark:border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B9CFF]/10 via-background to-background dark:from-[#2B9CFF]/20 dark:via-background/70 dark:to-background"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2B9CFF] to-[#0066FF]">Touch</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              We're here to help with any questions about our services or solutions
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.a
                href={info.action}
                target={info.icon === MapPin ? "_blank" : undefined}
                rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-[#2B9CFF] dark:hover:border-[#2B9CFF] transition-all duration-300 hover:shadow-md bg-white dark:bg-gray-900 relative overflow-hidden group flex flex-col items-center text-center"
              >
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#2B9CFF] to-[#0066FF] group-hover:w-full transition-all duration-500"></div>
                <div className="w-12 h-12 rounded-full bg-[#2B9CFF]/10 flex items-center justify-center mb-4">
                  <info.icon className="h-6 w-6 text-[#2B9CFF]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground">{detail}</p>
                  ))}
                </div>
                <div className="text-sm text-[#0066FF] dark:text-[#2B9CFF] mt-auto font-medium">
                  {info.icon === Mail ? 'Send an email' : 
                    info.icon === Phone ? 'Call now' : 'View on map'}
                  <ArrowRight className="inline-block ml-1 h-3 w-3" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                Send Us a Message
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#2B9CFF] to-[#0066FF] mx-auto my-4 rounded-full"></div>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800"
            >
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your enquiry about?"
                    className="w-full"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your requirements in detail"
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={formSubmitting || formSubmitted}
                    className={`px-8 transition-all duration-300 ${
                      formSubmitted 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-gradient-to-r from-[#2B9CFF] to-[#0066FF] hover:from-[#0066FF] hover:to-[#0055DD]'
                    } text-white`}
                  >
                    {formSubmitting ? (
                      <span className="flex items-center gap-2">
                        <LoadingSpinner />
                        <span>Sending...</span>
                      </span>
                    ) : formSubmitted ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>Message Sent!</span>
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden h-[400px] border border-gray-200 dark:border-gray-800">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.671797373069!2d79.10094991090406!3d21.125647080466912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1004a0c6197%3A0xa1cb13640664c65a!2sClystra%20Networks%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1745068873098!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              title="Clystra Networks location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}