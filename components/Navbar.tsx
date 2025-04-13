'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ModeToggle } from './ModeToggle';
import Image from 'next/image';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Departments', href: '/departments' },
  { name: 'Coverage', href: '/coverage' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-background text-foreground shadow px-6 py-4 sticky top-0 z-50"
    >
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-primary">
          {/* <Image src="/logo.svg" alt="Clystra Logo" width={30} height={30} /> */}
          <span>Clystra Networks</span>
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                pathname === link.href ? 'text-primary underline' : 'hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <ModeToggle />
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden mt-4 space-y-2"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 text-sm font-medium rounded transition-colors duration-200 ${
                pathname === link.href ? 'text-primary underline' : 'hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="px-4">
            <ModeToggle />
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
