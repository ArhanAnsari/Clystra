"use client";

// import Image from "next/image";
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
      { hash: '/', name: 'Home' },
      { hash: '/about', name: 'About' },
      { hash: '/services', name: 'Services' },
      { hash: '/departments', name: 'Departments' },
      { hash: '/coverage', name: 'Coverage' },
      { hash: '/blog', name: 'Blog' },
      { hash: '/contact', name: 'Contact' },
  ];

  const isLinkActive = (hash: string) => {
    if (hash === pathname) return true;
    return false;
  };

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    hash: string
  ) => {
    e.preventDefault();
  
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const target = document.querySelector(hash);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 30,
          behavior: "smooth",
        });
      }
    }
  };
  

  return (    
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* <Image
            src="/logo.png"
            alt="Hedge AI Logo"
            width={32}
            height={32}
            className="rounded-full"
          /> */}
          <span className="font-medium text-xl gradient-text">
            Clystra Networks
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.hash}
              onClick={(e) => handleScroll(e, link.hash)}
              className={`text-sm transition-colors hover:text-primary ${
                isLinkActive(link.hash) ? "text-primary font-medium" : "text-muted-foreground"
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
                  href={link.hash}
                  onClick={(e) => {
                    handleScroll(e, link.hash);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block py-2 text-sm transition-colors hover:text-primary ${
                    isLinkActive(link.hash) ? "text-primary font-medium" : "text-muted-foreground"
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
