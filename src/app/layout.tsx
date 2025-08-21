import type { Metadata } from 'next'

import { RootProvider } from 'fumadocs-ui/provider'

import './globals.css'

export const metadata: Metadata = {
  title: 'shadcn registry - notcodev',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='flex flex-col h-dvh'>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
