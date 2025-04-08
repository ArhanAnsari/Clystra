// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clystra Networks Pvt. Ltd.',
  description: 'Empowering India with Seamless Connectivity — Broadband & Leased Line Services',
  keywords: 'Clystra Networks, Internet Provider Nagpur, Fiber Broadband, Leased Line, Maharashtra Internet',
  authors: [{ name: 'Clystra Networks Pvt. Ltd.' }],
  themeColor: '#0f172a'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}