'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Network, Menu, X, Search, MessageCircle, Bell, User, ChevronDown } from 'lucide-react';
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

const mockSearchResults = [
  'Internet Services',
  'Business Solutions',
  'Network Coverage',
  'Support Center',
  'Pricing Plans',
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New service available in your area', time: '2h ago' },
    { id: 2, text: 'Your bill is ready', time: '1d ago' },
  ]);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const filteredSearchResults = mockSearchResults.filter(result =>
    result.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <Link href="/" className="flex items-center space-x-4">
              <Network className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary whitespace-nowrap">
                Clystra Networks
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === link.href ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Search className="h-5 w-5" />
              </Button>

              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Bell className="h-5 w-5" />
                  {notifications.length > 0 && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                      {notifications.length}
                    </span>
                  )}
                </Button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </Button>

              <ModeToggle />

              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <User className="h-5 w-5" />
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-1"
                    >
                      <Link href="/profile" className="block px-4 py-2 text-sm hover:bg-accent">
                        Profile
                      </Link>
                      <Link href="/settings" className="block px-4 py-2 text-sm hover:bg-accent">
                        Settings
                      </Link>
                      <button className="block w-full text-left px-4 py-2 text-sm hover:bg-accent">
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Hamburger button only visible on mobile */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
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
        </div>
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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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
                {searchQuery && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute w-full mt-2 bg-background border border-border rounded-lg shadow-lg py-2"
                  >
                    {filteredSearchResults.map((result) => (
                      <button
                        key={result}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-accent"
                        onClick={() => {
                          setSearchQuery(result);
                          setIsSearchOpen(false);
                        }}
                      >
                        {result}
                      </button>
                    ))}
                  </motion.div>
                )}
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
              <h3 className="font-semibold">AI Chat Support</h3>
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
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="bg-accent p-3 rounded-lg">
                    <p className="text-sm">Hello! How can I help you today?</p>
                  </div>
                </div>
              </div>
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
