'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  ArrowRight,
  Wifi, 
  Shield, 
  BarChart3, 
  Zap, 
  Globe, 
  Building2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you! Our team will contact you soon.');
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };
  
  const testimonials = [
    {
      quote: "Partnering with Clystra Networks has transformed our IT infrastructure. Their enterprise-grade connectivity and outstanding support have been instrumental in our digital transformation journey.",
      author: "Rajesh Mehta",
      title: "CTO, TechCorp India"
    },
    {
      quote: "The reliability and performance of Clystra's network solutions have exceeded our expectations. Their technical expertise and responsive support team make them an invaluable technology partner.",
      author: "Priya Sharma",
      title: "IT Director, Global Services Ltd"
    },
    {
      quote: "As we expanded our operations, Clystra Networks provided seamless connectivity across all our locations with impressive speed and minimal downtime. Their custom MPLS solution perfectly addressed our complex requirements.",
      author: "Vikram Singh",
      title: "Network Manager, Retail Chain Inc"
    }
  ];
  
  const services = [
    {
      icon: Wifi,
      title: 'High-Speed Fiber',
      description: 'Enterprise-grade fiber connectivity with speeds up to 10 Gbps and 99.99% uptime guarantee.',
      details: 'Our dedicated fiber infrastructure ensures consistent performance during peak hours with symmetric upload and download speeds. Ideal for businesses requiring reliable, high-bandwidth connectivity for cloud services, video conferencing, and large data transfers.'
    },
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Advanced security protocols and real-time threat monitoring to protect your critical data.',
      details: 'Comprehensive security solutions including next-generation firewalls, intrusion detection/prevention systems, DDoS mitigation, and 24/7 security monitoring. Our SOC team provides rapid response to potential threats and regular security assessments.'
    },
    {
      icon: BarChart3,
      title: 'Network Analytics',
      description: 'Comprehensive visibility into network performance with actionable insights.',
      details: 'Our advanced analytics platform provides real-time monitoring of bandwidth utilization, application performance, and network health. Custom dashboards and automated alerts help identify bottlenecks and optimize network efficiency.'
    },
    {
      icon: Zap,
      title: 'Low Latency Solutions',
      description: 'Ultra-low latency connectivity for time-sensitive operations and applications.',
      details: 'Purpose-built for financial institutions, gaming companies, and real-time applications. Our optimized routing minimizes latency to as low as 1-2ms, ensuring critical transactions and communications happen at the speed of business.'
    },
    {
      icon: Globe,
      title: 'MPLS Networks',
      description: 'Secure and reliable multi-site connectivity with quality of service guarantees.',
      details: 'Connect all your locations with a private, high-performance network that prioritizes critical traffic. Our MPLS solutions feature dynamic bandwidth allocation, built-in redundancy, and centralized management to simplify your multi-site infrastructure.'
    },
    {
      icon: Building2,
      title: 'Enterprise WiFi',
      description: 'Scalable wireless solutions designed for high-density enterprise environments.',
      details: 'High-performance wireless networks designed for corporate, educational, and large public venues. Our solutions feature seamless roaming, advanced user management, detailed analytics, and enterprise-grade security to support thousands of concurrent connections.'
    }
  ];

  return (
    <div className="flex flex-col">
        {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b dark:border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B9CFF]/10 via-background to-background dark:from-[#2B9CFF]/20 dark:via-background/70 dark:to-background"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Advanced <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2B9CFF] to-[#0066FF]">Network Infrastructure</span> for Modern Businesses
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Enterprise-grade connectivity solutions with industry-leading reliability, security, and support.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#2B9CFF] to-[#0066FF] hover:from-[#0066FF] hover:to-[#0055DD] text-white border-0 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Solutions
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-[#2B9CFF] text-foreground hover:bg-[#2B9CFF]/10 dark:hover:bg-[#2B9CFF]/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Contact Sales
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              Trusted by industry leaders
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {['TATA', 'Infosys', 'HCL', 'Tech Mahindra', 'Wipro'].map((company) => (
              <motion.div 
                key={company}
                className="text-xl font-bold text-muted-foreground/70 hover:text-[#2B9CFF] dark:hover:text-[#2B9CFF] transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Enterprise Network Solutions
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2B9CFF] to-[#0066FF] mx-auto my-6 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-[#2B9CFF] dark:hover:border-[#2B9CFF] transition-all duration-300 hover:shadow-md bg-white dark:bg-gray-900 relative overflow-hidden group"
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#2B9CFF] to-[#0066FF] group-hover:w-full transition-all duration-500"></div>
                <div className="flex items-start">
                  <service.icon className="h-10 w-10 text-[#2B9CFF] dark:text-[#2B9CFF] mb-4 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                
                <AnimatePresence>
                  {activeService === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800"
                    >
                      <p className="text-sm text-muted-foreground mb-4">{service.details}</p>
                      <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button 
                          variant="link" 
                          className="px-0 text-[#0066FF] dark:text-[#2B9CFF] hover:text-[#0055DD] dark:hover:text-[#3BA6FF]"
                        >
                          Learn more <ExternalLink className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '99.99%', label: 'Network Uptime' },
              { value: '10 Gbps', label: 'Maximum Speed' },
              { value: '24/7', label: 'Technical Support' },
              { value: '500+', label: 'Enterprise Clients' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 transform transition-transform duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2B9CFF] to-[#0066FF] mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
                initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our Clients Say
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2B9CFF] to-[#0066FF] mx-auto my-6 rounded-full"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute top-8 left-4 text-6xl text-[#2B9CFF]/20 dark:text-[#2B9CFF]/20">"</div>
            <div className="absolute bottom-8 right-4 text-6xl text-[#2B9CFF]/20 dark:text-[#2B9CFF]/20">"</div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800"
              >
                <p className="text-xl md:text-2xl italic mb-8 relative z-10">
                  {testimonials[activeTestimonial].quote}
                </p>
                <footer className="font-medium">
                  <div className="text-[#0066FF] dark:text-[#2B9CFF]">{testimonials[activeTestimonial].author}</div>
                  <div className="text-muted-foreground">{testimonials[activeTestimonial].title}</div>
                </footer>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={`testimonial-${testimonial.author.replace(/\s+/g, '-').toLowerCase()}`}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-[#0066FF] scale-125' 
                      : 'bg-gray-300 dark:bg-gray-700 hover:bg-[#2B9CFF]/50 dark:hover:bg-[#2B9CFF]/50'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#0066FF] to-[#2B9CFF] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to elevate your network infrastructure?
            </motion.h2>
            <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl mb-8 text-white/80"
            >
              Contact our team to discuss your business requirements
            </motion.p>
            
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-white/30 focus:border-white/30 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="h-10 shrink-0 bg-white text-[#0066FF] hover:bg-white hover:text-[#0055DD] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-[#0066FF]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Contact Sales
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
              
              <div className="mt-4 text-sm text-white/70">
                By submitting, you agree to our <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>
              </div>
            </div>
            </div>
          </div>
        </section>
    </div>
  );
}
