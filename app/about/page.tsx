'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, MapPin, Target, Users } from 'lucide-react';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">About Clystra Networks</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Founded in March 2025, Clystra Networks Pvt. Ltd. (CIN: U61101MH2025PTC443366) is a next-generation Internet Infrastructure Providing Company, headquartered in Nagpur, Maharashtra. We specialize in designing, deploying, and maintaining high-performance internet infrastructure that enables seamless connectivity for individuals, businesses, and institutions.
          Our head office is located at Flat No. 105, Saraswati Apartment 3, Wanjari Nagar, Medical College, Nagpur, from where we manage our growing network of operations across Maharashtra.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative w-full h-[100px] rounded-2xl overflow-hidden shadow-xl"
        >
          {/* <Image 
            src="/images/network-team.jpg" 
            alt="Clystra Networks Team" 
            fill 
            style={{ objectFit: 'cover' }}
            className="w-full h-full"
            priority
          /> */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white/90 dark:bg-gray-900/90 p-6 md:p-8 rounded-xl max-w-md text-center">
              <h2 className="text-2xl font-bold mb-3">Powering Digital India</h2>
              <p>With coverage in 5 major cities and expanding, we're bringing high-speed internet to every doorstep.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Journey Section */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Founded in 2025</h3>
                  <p className="text-gray-600 dark:text-gray-300">Started with a vision to provide affordable high-speed internet in Nagpur.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Expanded to 1 Cities</h3>
                  <p className="text-gray-600 dark:text-gray-300">Grew rapidly to serve Nagpur with reliable connectivity.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            {/* <Image 
              src="/images/company-growth.jpg" 
              alt="Clystra Networks Growth" 
              fill 
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            />
          </motion.div> */}
        </div>
      </section>

      {/* Our Values Section */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The principles that guide our decisions, shape our culture, and help us deliver exceptional service.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Customer First",
              description: "We prioritize customer satisfaction in everything we do, ensuring exceptional experiences every time.",
              icon: <Users className="h-8 w-8" />
            },
            {
              title: "Innovation",
              description: "We continually seek new technologies and methods to improve our services and offerings.",
              icon: <Target className="h-8 w-8" />
            },
            {
              title: "Reliability",
              description: "We're committed to providing consistent, dependable service you can count on day and night.",
              icon: <Check className="h-8 w-8" />
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Our Leadership Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the experts behind Clystra Networks who are passionate about connecting communities.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Mrs. Saniya Sheikh",
              position: "Director",
              image: "/images/ceo.jpg",
              bio: "Saniya leads our vision for nationwide connectivity."
            },
            {
              name: "Mr. Danish Sheikh",
              position: "Director",
              image: "/images/cto.jpg",
              bio: "Danish leads our vision for nationwide connectivity."
            }
          ].map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 w-full">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  style={{ objectFit: 'cover' }}
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.position}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Our Headquarters</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Visit our main office in the heart of Nagpur's technology district.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            {/* <Image 
              src="/images/headquarters.jpg" 
              alt="Clystra Networks Headquarters" 
              fill 
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            /> */}
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
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Nagpur Headquarters</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Flat No. 105, Saraswati Apartment 3, Wanjari Nagar, Medical College, Nagpur<br />
                  Maharashtra, India
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-32 font-medium">Phone:</div>
                <div>+91 7720033786</div>
              </div>
              <div className="flex items-center">
                <div className="w-32 font-medium">Email:</div>
                <div>info@clystranetworks.com</div>
              </div>
              <div className="flex items-center">
                <div className="w-32 font-medium">Working Hours:</div>
                <div>Mon-Fri: 10:30 AM - 7:30 PM</div>
                <div>Sat: 10:30 AM - 6:00 PM</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Join Our Growing Network</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the Clystra difference with our high-speed, reliable internet services. Check if we're available in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors" onClick={() => router.push('/coverage')}>
              Check Availability
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors" onClick={() => router.push('/contact')}>
              Contact Us
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}