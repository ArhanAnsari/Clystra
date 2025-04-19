"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ModeToggle from "@/components/ModeToggle";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
      { href: '/', name: 'Home' },
      { href: '/about', name: 'About' },
      { href: '/services', name: 'Services' },
      { href: '/departments', name: 'Departments' },
      { href: '/coverage', name: 'Coverage' },
      { href: '/blog', name: 'Blog' },
      { href: '/contact', name: 'Contact' },
  ];

  const isLinkActive = (href: string) => {
    return pathname === href;
  };

  return (    
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-final.jpg"
            alt="Clystra Networks Logo"
            width={150}
            height={150}
          />
          <span className="font-medium text-xl gradient-text">
            CLYSTRA NETWORKS PVT. LTD.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm transition-colors hover:text-primary ${
                isLinkActive(link.href) ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background"
          >
            <div className="container py-4 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-sm transition-colors hover:text-primary ${
                    isLinkActive(link.href) ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
