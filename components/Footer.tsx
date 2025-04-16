'use client';

import { Network, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import NewsletterForm from './NewsLetterForm';

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
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <Network className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="text-xl sm:text-2xl font-bold">Clystra Networks</span>
            </div>
            <p className="text-sm sm:text-base text-blue-100">
              CIN: U61101MH2025PTC443366<br />
              Empowering digital growth across Maharashtra
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="/about" className="hover:text-blue-300 transition inline-block">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-300 transition inline-block">Services</a></li>
              <li><a href="/departments" className="hover:text-blue-300 transition inline-block">Departments</a></li>
              <li><a href="/coverage" className="hover:text-blue-300 transition inline-block">Coverage</a></li>
              <li><a href="/contact" className="hover:text-blue-300 transition inline-block">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 flex-shrink-0 mt-1" />
                <span>Flat No. 105, Saraswati Apartment 3,<br />Wanjari Nagar, Medical College,<br />Nagpur</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <a href="tel:+917720033786" className="hover:text-blue-300 transition">+91 7720033786</a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-300 flex-shrink-0 mt-1" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                  <a href="mailto:clystranetworks@gmail.com" className="hover:text-blue-300 transition">clystranetworks@gmail.com</a>
                  <span className="hidden sm:inline">|</span>
                  <a href="mailto:info@clystranetworks.com" className="hover:text-blue-300 transition">info@clystranetworks.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Newsletter</h3>
            <p className="text-sm sm:text-base text-blue-100">Subscribe to our newsletter for updates</p>
            <NewsletterForm />
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-blue-700 mt-8 pt-6 text-center text-sm sm:text-base"
        >
          <p className="text-blue-100">
            © {new Date().getFullYear()} Clystra Networks Pvt Ltd. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}