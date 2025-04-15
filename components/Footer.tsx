'use client';

import { Network, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import ModeToggle from './ModeToggle';

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-gradient-to-r from-blue-900 to-blue-800 text-white"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <Network className="h-8 w-8" />
              <span className="text-2xl font-bold">Clystra Networks</span>
            </div>
            <p className="text-blue-100">
              CIN: U61101MH2025PTC443366<br />
              Empowering digital growth across Maharashtra
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-300 transition">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-300 transition">Services</a></li>
              <li><a href="/departments" className="hover:text-blue-300 transition">Departments</a></li>
              <li><a href="/coverage" className="hover:text-blue-300 transition">Coverage</a></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-300" />
                <span>Flat No. 105, Saraswati Apartment 3,<br />Wanjari Nagar, Medical College,<br />Nagpur</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <span>clystranetworks@gmail.com</span> | <span>info@clystranetworks.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold">Newsletter</h3>
            <p className="text-blue-100">Subscribe to our newsletter for updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg w-full text-gray-900 focus:outline-none"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
            <ModeToggle />
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-blue-700 mt-8 pt-8 text-center"
        >
          <p className="text-blue-100">
            © {new Date().getFullYear()} Clystra Networks Pvt Ltd. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}