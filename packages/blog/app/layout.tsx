import '../style/globals.css'
import type { ReactElement } from 'react'
import Navbar from '@/app/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'seesaw - Blog',
  description: '...',
}
 

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="flex justify-end mt-10 mr-10 ">
              <Navbar></Navbar>
            </div>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
