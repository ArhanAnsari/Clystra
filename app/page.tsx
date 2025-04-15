'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Shield, Cloud, Cpu } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-[100px]"> {/* Adjust this based on your navbar height */}
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="container mx-auto px-6"
          >
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl font-bold mb-6"
              >
                Empowering Business Through Advanced Networking Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl mb-8"
              >
                Transform your enterprise with cutting-edge network infrastructure and innovative IT solutions.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center"
              >
                Get Started
                <ChevronRight className="ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-gray-50 dark:bg-background dark:text-foreground">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-16"
            >
              Our Services
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="h-12 w-12 text-blue-600" />,
                  title: 'Network Security',
                  description: 'Enterprise-grade security solutions to protect your valuable data and infrastructure.',
                },
                {
                  icon: <Cloud className="h-12 w-12 text-blue-600" />,
                  title: 'Cloud Solutions',
                  description: 'Seamless cloud integration and management services for modern businesses.',
                },
                {
                  icon: <Cpu className="h-12 w-12 text-blue-600" />,
                  title: 'IT Infrastructure',
                  description: 'Robust and scalable IT infrastructure design and implementation.',
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-muted dark:text-muted-foreground p-8 rounded-lg shadow-lg hover:shadow-xl transition"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
