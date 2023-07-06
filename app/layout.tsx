import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

import ToogleDark from '@/components/ToogleDark'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'A Chat App',

}

export default function RootLayout({children}: {children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
        <ToogleDark />
         {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
