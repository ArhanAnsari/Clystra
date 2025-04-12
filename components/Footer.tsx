// 🦶 Footer (app/components/Footer.tsx)
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Departments', href: '/departments' },
  { name: 'Coverage', href: '/coverage' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full border-t border-border bg-muted px-6 py-6 text-center text-sm mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Clystra Networks Pvt. Ltd. All rights reserved.
        </p>
        <div className="flex space-x-4 flex-wrap">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`whitespace-nowrap transition-colors duration-200 ${
                pathname === link.href ? 'text-primary underline' : 'hover:text-primary text-muted-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
