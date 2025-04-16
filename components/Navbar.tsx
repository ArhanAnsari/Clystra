'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Network, Menu, X, Search, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModeToggle } from './ModeToggle';
import { Button } from './ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/departments', label: 'Departments' },
  { href: '/coverage', label: 'Coverage' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Network className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary hidden sm:inline">
              Clystra Networks
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNavItem"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-muted-foreground hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Chat Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="text-muted-foreground hover:text-primary"
            >
              <MessageCircle className="h-5 w-5" />
            </Button>

            {/* Theme Toggle */}
            <ModeToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-muted-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      pathname === link.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Panel */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-lg"
            >
              <div className="container mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 pl-10 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Panel */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full right-0 w-80 bg-background border border-border rounded-lg shadow-lg p-4"
            >
              <div className="space-y-4">
                <h3 className="font-semibold">Chat Support</h3>
                <div className="h-60 overflow-y-auto">
                  {/* Chat messages will go here */}
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button size="sm">Send</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
