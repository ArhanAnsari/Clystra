'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Image from 'next/image';

export default function Departments() {
  const departments = [
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: 'Human Resources',
      head: 'Tariq Israr Ansari',
      description: 'Managing talent acquisition, employee relations, and organizational development.',
      teamSize: '10+ HR Professionals',
      email: 'hr@clystranetworks.com',
      phone: '+91 9823083123',
    },
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Departments</h1>
              <p className="text-xl text-blue-100">
                Specialized teams working together to deliver excellence in networking solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Departments Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
                >
                  <div className="mb-6">{dept.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{dept.title}</h3>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <div className="border-t pt-4 mt-4">
                    <p className="text-sm text-gray-600">Department Head</p>
                    <p className="font-semibold text-gray-900">{dept.head}</p>
                    {/* <p className="font-semibold text-gray-900">Tariq Ansari brings over 17 years of rich and diverse experience spanning Human Resources, Banking, Finance, Administration, and Insurance. He also holds deep insights into Co-operative Society branch operations and audit, giving him a unique edge in understanding both people and processes across sectors.</p>
                    <p className="font-semibold text-gray-900">As the General Manager cum HR Head at Clystra Networks Pvt. Ltd., He plays a pivotal role in shaping the company’s human capital strategy, driving organizational growth, and fostering a culture of innovation and performance. His academic credentials—an MBA in HR & Finance along with a GDC&A—reflect his strong foundation in both strategic and operational aspects of management.</p>
                    <p className="font-semibold text-gray-900">With a proven track record of leadership and a deep understanding of business dynamics, He is committed to aligning HR initiatives with corporate goals and building a work environment that attracts, retains, and nurtures top talent.</p> */}
                    <p className="text-sm text-gray-600 mt-2">Team Size</p>
                    <p className="text-sm text-blue-600 mt-2">{dept.teamSize}</p>
                    <p className="text-sm text-gray-600 mt-2">Contact:</p>
                    <p className="text-sm text-gray-600">{dept.email}</p>
                    <p className="text-sm text-gray-600">{dept.phone}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Organization Structure */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Our Organization Structure</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A well-coordinated team of experts working together to deliver exceptional networking solutions
              </p>
            </motion.div>

            <div className="relative h-[400px] mb-12">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                alt="Team Collaboration"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6"
              >
                <h3 className="text-xl font-semibold mb-4">Executive Leadership</h3>
                <p className="text-gray-600">
                  Strategic direction and vision for the company's growth and success
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6"
              >
                <h3 className="text-xl font-semibold mb-4">Department Heads</h3>
                <p className="text-gray-600">
                  Experienced leaders managing specialized teams across different domains
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6"
              >
                <h3 className="text-xl font-semibold mb-4">Technical Teams</h3>
                <p className="text-gray-600">
                  Skilled professionals delivering excellence in their respective areas
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
              <p className="text-xl text-blue-100 mb-8">
                We're always looking for talented individuals to join our growing team
              </p>
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                View Open Positions
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}