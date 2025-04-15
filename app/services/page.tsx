'use client';

import { motion } from 'framer-motion';
import { Shield, Cloud, Cpu, Server, Network, Globe2, Lock, Settings, Wifi } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'Network Security',
      description: 'Comprehensive security solutions including firewall management, threat detection, and incident response.',
      features: ['Firewall Management', 'Intrusion Detection', '24/7 Monitoring', 'Security Audits']
    },
    {
      icon: <Cloud className="h-12 w-12 text-blue-600" />,
      title: 'Cloud Solutions',
      description: 'End-to-end cloud services from migration to management and optimization.',
      features: ['Cloud Migration', 'Hybrid Cloud', 'Cloud Security', 'Performance Optimization']
    },
    {
      icon: <Cpu className="h-12 w-12 text-blue-600" />,
      title: 'IT Infrastructure',
      description: 'Design and implementation of scalable IT infrastructure solutions.',
      features: ['Network Design', 'Server Management', 'Storage Solutions', 'Infrastructure Monitoring']
    },
    {
      icon: <Server className="h-12 w-12 text-blue-600" />,
      title: 'Data Center Services',
      description: 'Modern data center solutions for efficient and reliable operations.',
      features: ['Colocation Services', 'Backup Solutions', 'Disaster Recovery', 'Power Management']
    },
    {
      icon: <Network className="h-12 w-12 text-blue-600" />,
      title: 'Network Management',
      description: 'Comprehensive network management and optimization services.',
      features: ['Network Monitoring', 'Performance Tuning', 'Bandwidth Management', 'Traffic Analysis']
    },
    {
      icon: <Globe2 className="h-12 w-12 text-blue-600" />,
      title: 'Global Connectivity',
      description: 'Worldwide network solutions for international businesses.',
      features: ['MPLS Networks', 'SD-WAN', 'VPN Services', 'Global Internet Access']
    }
  ];

  return (
    <PageTransition>
        <main className="min-h-screen pt-[100px]"> {/* Adjust this based on your navbar height */}
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-blue-100">
                Comprehensive networking solutions tailored to your business needs
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose Clystra Networks?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We combine technical expertise with industry best practices to deliver 
                exceptional networking solutions that drive business growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <Lock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-gray-600">
                  Industry-leading security measures to protect your valuable data and infrastructure.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock technical support and monitoring for your peace of mind.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <Wifi className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
                <p className="text-gray-600">
                  Flexible and scalable solutions that grow with your business needs.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Network?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how we can help optimize your network infrastructure
              </p>
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Schedule a Consultation
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}