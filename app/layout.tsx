import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ChatWidget from '@/components/ChatWidget';
import Search from '@/components/Search';
import { GA_TRACKING_ID } from '@/lib/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://clystranetworks.com'),
  title: {
    default: 'Clystra Networks - Advanced Internet Infrastructure Solutions',
    template: '%s | Clystra Networks'
  },
  description: 'Leading internet infrastructure provider in Maharashtra...',
  keywords: ['internet infrastructure', 'network solutions', 'ISP', 'Maharashtra'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://clystranetworks.com',
    title: 'Clystra Networks',
    description: 'Advanced Internet Infrastructure Solutions',
    siteName: 'Clystra Networks'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clystra Networks',
    description: 'Advanced Internet Infrastructure Solutions',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <Search />
          <AnimatePresence mode="wait">
            <main className="min-h-[calc(100vh-160px)] px-4 md:px-10 py-10">{children}</main>
          </AnimatePresence>
          <Footer />
          <ChatWidget />
          <Toaster />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
      </body>
    </html>
  );
}