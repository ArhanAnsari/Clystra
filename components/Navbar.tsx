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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="h-16" />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-background/50 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo + Company Name */}
            <Link href="/" className="flex items-center space-x-2">
              <Network className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <span className="text-lg sm:text-xl font-bold text-primary whitespace-nowrap">
                Clystra Networks
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Actions & Hamburger */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-muted-foreground hover:text-primary"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="text-muted-foreground hover:text-primary"
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
              <ModeToggle />
              {/* Hamburger button only visible on mobile */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-muted-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="grid gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                        pathname === link.href
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground hover:bg-accent hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Overlays */}
      <AnimatePresence>
        {(isSearchOpen || isChatOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30"
            onClick={() => {
              setIsSearchOpen(false);
              setIsChatOpen(false);
            }}
          />
        )}
      </AnimatePresence>

      {/* Search Input */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 bg-background border-b border-border shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="relative max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 pl-10 pr-10 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute right-1 top-1/2 -translate-y-1/2"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Box */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.dialog
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            open
            className="fixed top-16 right-4 w-80 z-40 bg-background border border-border rounded-lg shadow-lg"
          >
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold">Chat Support</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsChatOpen(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4 h-[400px] overflow-y-auto">
              {/* Chat messages go here */}
            </div>
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 text-sm rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="sm" variant="default">
                  Send
                </Button>
              </div>
            </div>
          </motion.dialog>
        )}
      </AnimatePresence>
    </>
  );
}
