import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clystra Networks Pvt. Ltd. - Advanced Internet Infrastructure Solutions',
  description: 'Leading internet infrastructure provider in Maharashtra, offering high-performance connectivity solutions for businesses and individuals.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider  attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <AnimatePresence mode="wait">
          <main className="min-h-[calc(100vh-160px)] px-4 md:px-10 py-10">{children}</main>
          </AnimatePresence>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}