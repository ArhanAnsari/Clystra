import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GA_TRACKING_ID } from '@/lib/analytics';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://clystranetworks.com'),
  title: {
    default: 'Clystra Networks - Advanced Internet Infrastructure Solutions',
    template: '%s | Clystra Networks'
  },
  description: 'Leading internet infrastructure provider in Maharashtra, offering high-speed fiber broadband, leased lines, and enterprise network solutions.',
  keywords: ['internet infrastructure', 'network solutions', 'ISP', 'Maharashtra'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://clystranetworks.com',
    title: 'Clystra Networks',
    description: 'Clystra Networks - Advanced Internet Infrastructure Solutions',
    siteName: 'Clystra Networks',
    images: [
      {
        url: '/logo-final.jpg',
        width: 1200,
        height: 630,
        alt: 'Clystra Networks Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clystra Networks',
    description: 'Clystra Networks - Advanced Internet Infrastructure Solutions',
    images: ['/logo-final.jpg']
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico'
  },
  manifest: '/site.webmanifest'
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster position="top-right" richColors closeButton />
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