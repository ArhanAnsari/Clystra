'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Users2, Brain, Network, Code, HeadphonesIcon, Briefcase, MapPin, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { LoadingSpinner } from '@/components/LoadingSpinner';

export default function Departments() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const departments = [
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: 'Human Resources',
      head: 'Tariq Israr Ansari',
      description: 'Managing talent acquisition, employee relations, and organizational development.',
      teamSize: '10+ HR Professionals',
      email: 'hr@clystranetworks.com',
      phone: '+91 9823083123',
    },
    {
      icon: <Network className="h-12 w-12 text-primary" />,
      title: 'Network Operations',
      head: 'Aarav Patel',
      description: 'Monitoring and maintaining our network infrastructure to ensure optimal performance.',
      teamSize: '25+ Network Engineers',
      email: 'network@clystranetworks.com',
      phone: '+91 9876543210',
    },
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: 'Software Development',
      head: 'Arhan Ansari',
      description: 'Building innovative software solutions to enhance our service delivery.',
      teamSize: '1 Developer',
      email: 'arhanansari2009@gmail.com',
      phone: '+91 9823083123'
    },
    {
      icon: <HeadphonesIcon className="h-12 w-12 text-primary" />,
      title: 'Customer Support',
      head: 'Rahul Verma',
      description: 'Providing 24/7 assistance to help customers resolve any issues promptly.',
      teamSize: '30+ Support Specialists',
      email: 'support@clystranetworks.com',
      phone: '+91 9876543212',
    },
    {
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      title: 'Sales & Marketing',
      head: 'Neha Kapoor',
      description: 'Driving business growth through strategic marketing and sales initiatives.',
      teamSize: '20+ Sales Professionals',
      email: 'sales@clystranetworks.com',
      phone: '+91 9876543213',
    },
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: 'Research & Development',
      head: 'Vikram Mehta',
      description: 'Exploring new technologies to keep us at the forefront of network innovation.',
      teamSize: '12+ R&D Specialists',
      email: 'research@clystranetworks.com',
      phone: '+91 9876543214',
    },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b dark:border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background dark:from-primary/20 dark:via-background/70 dark:to-background"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            >
              Our Departments
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Specialized teams working together to deliver excellence in networking solutions
            </motion.p>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100 dark:border-gray-700 group"
              >
                <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">{dept.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{dept.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{dept.description}</p>
                <div className="border-t dark:border-gray-700 pt-4 mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Department Head</p>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{dept.head}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Team Size</p>
                  <p className="text-sm text-primary">{dept.teamSize}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Contact:</p>
                  <a href={`mailto:${dept.email}`} className="text-sm text-primary hover:underline block">{dept.email}</a>
                  <a href={`tel:${dept.phone}`} className="text-sm text-primary hover:underline block">{dept.phone}</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Organization Structure</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A well-coordinated team of experts working together to deliver exceptional networking solutions
            </p>
          </motion.div>

          <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden shadow-xl">
            {/* <Image 
              src="/images/org-chart.jpg" 
              alt="Organization Structure" 
              fill 
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Working Together</h3>
                <p className="max-w-lg">Our cross-functional teams collaborate seamlessly to deliver exceptional service</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Executive Leadership</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Strategic direction and vision for the company's growth and success
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Department Heads</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Experienced leaders managing specialized teams across different domains
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Technical Teams</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Skilled professionals delivering excellence in their respective areas
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing team
            </p>
            <Link href="/careers" className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
              View Open Positions
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}