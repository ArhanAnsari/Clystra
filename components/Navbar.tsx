// 🧭 Navbar (app/components/Navbar.tsx)
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ModeToggle } from './ModeToggle';

export default function Navbar() {

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md dark:shadow-lg bg-white dark:bg-gray-800">
      <Link href="/" className="text-xl font-bold text-primary">Clystra</Link>
      <div className="space-x-4 hidden md:flex">
        <Link href="/" className="hover:text-primary">Home</Link>
        <Link href="/about" className="hover:text-primary">About</Link>
        <Link href="/services" className="hover:text-primary">Services</Link>
        <Link href="/contact" className="hover:text-primary">Contact</Link>
      </div>
      <ModeToggle />
    </nav>
  );
}
