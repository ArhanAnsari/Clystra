'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wifi, Globe, Cloud, Shield, HeadphonesIcon, Cog, ArrowRight } from 'lucide-react';
import { LoadingSpinner } from '@/components/LoadingSpinner';

export default function ServicesPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: 'fiber-internet',
      title: 'High-Speed Fiber Internet',
      description: 'Experience lightning-fast internet with our state-of-the-art fiber optic network.',
      icon: <Wifi className="h-8 w-8" />,
      features: [
        'Speeds up to 1Gbps',
        'Unlimited data',
        'Low latency for gaming and streaming',
        'No throttling or data caps'
      ],
      image: '/images/fiber-internet.jpg'
    },
    {
      id: 'enterprise-solutions',
      title: 'Enterprise Networking Solutions',
      description: 'Custom networking solutions designed to meet the unique needs of your business.',
      icon: <Globe className="h-8 w-8" />,
      features: [
        'Dedicated business lines',
        'Point-to-point connectivity',
        'MPLS networks',
        'SD-WAN solutions'
      ],
      image: '/images/enterprise-network.jpg'
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      description: 'Reliable cloud infrastructure and services to power your digital transformation.',
      icon: <Cloud className="h-8 w-8" />,
      features: [
        'Cloud storage solutions',
        'Hybrid cloud setups',
        'Cloud backup and recovery',
        'Application hosting'
      ],
      image: '/images/cloud-services.jpg'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Services',
      description: 'Protect your network and data with our comprehensive security solutions.',
      icon: <Shield className="h-8 w-8" />,
      features: [
        'Network security audits',
        'Managed firewall services',
        'Threat detection and response',
        'DDoS protection'
      ],
      image: '/images/cybersecurity.jpg'
    },
    {
      id: 'support',
      title: '24/7 Technical Support',
      description: 'Round-the-clock assistance from our team of networking experts.',
      icon: <HeadphonesIcon className="h-8 w-8" />,
      features: [
        'Live chat support',
        'Phone and email assistance',
        'Remote troubleshooting',
        'On-site support when needed'
      ],
      image: '/images/tech-support.jpg'
    },
    {
      id: 'managed-it',
      title: 'Managed IT Services',
      description: 'Comprehensive IT management so you can focus on your core business.',
      icon: <Cog className="h-8 w-8" />,
      features: [
        'Network monitoring and management',
        'IT infrastructure maintenance',
        'System updates and patches',
        'Hardware and software support'
      ],
      image: '/images/managed-it.jpg'
    }
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From high-speed fiber internet to enterprise networking solutions, we provide cutting-edge 
            connectivity services to meet all your needs.
          </p>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 w-full">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/services/${service.id}`} 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="mb-20">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-lg mb-6">
                We understand that every business has unique requirements. Our team of experts can work with you to develop a customized solution that perfectly meets your needs.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                Contact Our Team
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <Image 
                src="/images/custom-solution.jpg" 
                alt="Custom Networking Solutions" 
                fill 
                style={{ objectFit: 'cover' }}
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">How We Work</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our streamlined process ensures you get the right solution with minimal hassle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: 1, title: 'Consultation', description: 'We discuss your needs and assess requirements.' },
            { step: 2, title: 'Solution Design', description: 'Our experts design a tailored solution for you.' },
            { step: 3, title: 'Implementation', description: 'We deploy and configure your services efficiently.' },
            { step: 4, title: 'Ongoing Support', description: 'We provide continuous monitoring and support.' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}