import { Space_Grotesk, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { ThemeProvider } from 'next-themes'
import ScrollToTop from '@/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
import type { Metadata } from 'next'

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})
const body = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: {
    default: 'AC TECH.AI Ltd',
    template: '%s | AC TECH.AI',
  },
  description:
    'AC TECH.AI Ltd — Colorado AI technology company building intelligent products and digital infrastructure.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <body className={`${body.variable} ${display.variable} ${body.className} bg-background text-white`}>
        <ThemeProvider
          attribute='class'
          enableSystem={false}
          forcedTheme='dark'
          defaultTheme='dark'>
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
