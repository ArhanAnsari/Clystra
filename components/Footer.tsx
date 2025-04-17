'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { FiHash } from 'react-icons/fi';
import { Separator } from '@/components/ui/separator';
import NewsletterForm from './NewsLetterForm';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
  ],
  services: [
    { name: 'Fiber Broadband', href: '/services/fiber' },
    { name: 'Leased Lines', href: '/services/leased-lines' },
    { name: 'Enterprise WiFi', href: '/services/enterprise-wifi' },
    { name: 'Network Support', href: '/services/network-support' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Help Center', href: '/help' },
    { name: 'Service Status', href: '/status' },
    { name: 'FAQs', href: '/faqs' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Acceptable Use Policy', href: '/aup' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

const contactInfo = [
  { icon: FiHash, text: 'CIN: U61101MH2025PTC443366' },
  { icon: Mail, text: 'clystranetworks@gmail.com | info@clystranetworks.com' },
  { icon: Phone, text: '+91 7720033786' },
  { icon: MapPin, text: 'Flat No. 105, Saraswati Apartment 3, Wanjari Nagar, Medical College, Nagpur' },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Clystra
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering businesses with high-speed, reliable internet connectivity and network solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support & Legal */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-4">Stay Updated</h3>
                <NewsletterForm />
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <info.icon className="h-4 w-4 mt-1 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {info.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Clystra Networks Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}