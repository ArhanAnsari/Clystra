// 🧭 Navbar (app/components/Navbar.tsx)
'use client';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Coverage", href: "/coverage" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {

  return (
    <header className="w-full bg-background text-foreground shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">
    <nav className="flex gap-6 items-center">
      <Link href="/" className="text-xl font-bold text-primary">Clystra Networks</Link>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-sm font-medium hover:text-primary"
        >
          {link.name}
        </Link>
      ))}
      <ModeToggle />
    </nav>
    </header>
  );
}
