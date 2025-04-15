'use client';

import { motion } from 'framer-motion';
import { MapPin, Globe2, Network, Signal } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Image from 'next/image';

export default function Coverage() {
  const locations = [
    {
      city: 'Nagpur',
      type: 'Headquarters',
      address: 'Flat No. 105, Saraswati Apartment 3, Wanjari Nagar, Medical College, Nagpur',
      services: ['Network Operations Center', 'Data Center', 'Support Hub']
    }
  ];

  const services = [
    {
      icon: <Network className="h-12 w-12 text-blue-600" />,
      title: 'Network Coverage',
      description: 'High-speed network infrastructure across major cities'
    },
    {
      icon: <Signal className="h-12 w-12 text-blue-600" />,
      title: 'Connectivity Solutions',
      description: 'Reliable connectivity options for businesses of all sizes'
    },
    {
      icon: <Globe2 className="h-12 w-12 text-blue-600" />,
      title: 'Global Reach',
      description: 'International network partnerships for worldwide coverage'
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Coverage</h1>
              <p className="text-xl text-blue-100">
                Extensive network coverage across India with global connectivity solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Coverage Map */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Network Presence</h2>
              <p className="text-gray-600">
                Strategic locations across India to serve you better
              </p>
            </motion.div>

            <div className="relative h-[500px] mb-12">
              <Image
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
                alt="Coverage Map"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-16"
            >
              Our Locations
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
                >
                  <div className="flex items-start mb-4">
                    <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                    <div>
                      <h3 className="text-xl font-semibold">{location.city}</h3>
                      <p className="text-blue-600">{location.type}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{location.address}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold mb-2">Available Services:</p>
                    <ul className="space-y-1">
                      {location.services.map((service) => (
                        <li key={service} className="text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Stats */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-blue-100">Cities Covered</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-blue-100">Network Points</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100">Uptime</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Support</div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}