'use client';

import { motion } from 'framer-motion';
import { Users, Award, Clock, Globe2 } from 'lucide-react';
import PageTransition from '../../components/PageTransition';
import Image from 'next/image';

export default function About() {
  const stats = [
    { icon: <Users />, value: '100+', label: 'Clients Served' },
    { icon: <Award />, value: '1+', label: 'Years Experience' },
    { icon: <Clock />, value: '24/7', label: 'Support Available' },
    { icon: <Globe2 />, value: '10+', label: 'Cities Covered' },
  ];

  const team = [
    {
      name: 'Mrs. Saniya Sheikh',
      position: 'Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Mr. Danish Sheikh',
      position: 'Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Clystra Networks</h1>
              <p className="text-xl text-blue-100">
                Shaping India's digital future through robust internet infrastructure
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Founded in March 2025, Clystra Networks Pvt. Ltd. (CIN: U61101MH2025PTC443366) is a next-generation 
                  Internet Infrastructure Providing Company, headquartered in Nagpur, Maharashtra. We specialize in 
                  designing, deploying, and maintaining high-performance internet infrastructure that enables seamless 
                  connectivity for individuals, businesses, and institutions.
                </p>
                <p className="text-gray-600">
                  Our head office is located at Flat No. 105, Saraswati Apartment 3, Wanjari Nagar, Medical College, 
                  Nagpur, from where we manage our growing network of operations across Maharashtra.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[400px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                  alt="Clystra Networks Office"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be a leading force in shaping India's digital future by providing robust, reliable, and 
                  accessible internet infrastructure that empowers communities, fuels innovation, and bridges 
                  the digital divide.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Develop and deliver high-quality internet infrastructure</li>
                  <li>• Support digital inclusion in underserved regions</li>
                  <li>• Innovate continuously in technology and service delivery</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-16"
            >
              Our Leadership Team
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-16"
            >
              What We Do
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "High-speed broadband infrastructure development",
                "Fiber optic and wireless network deployment",
                "Customized internet solutions",
                "Scalable infrastructure for ISPs",
                "Data center solutions",
                "Enterprise networks"
              ].map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <p className="text-gray-600">{service}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}