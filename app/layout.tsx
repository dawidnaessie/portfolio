import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dawid — Next.js Templates",
  description: "Professional Next.js template showcase featuring landing pages and portfolio designs",
  generator: "v0.app",
  metadataBase: new URL("https://showcase.example.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        {/* Inline script to set html[data-theme] synchronously on first paint
            based on the current pathname. This avoids a flash where .dark
            variables win before the client effect runs. */}
        <script dangerouslySetInnerHTML={{ __html: `(() => {
          try {
            const p = window.location && window.location.pathname ? window.location.pathname : '';
            if (p.startsWith('/landing-alpha')) {
              document.documentElement.setAttribute('data-theme','alpha')
            } else if (p.startsWith('/landing-beta')) {
              document.documentElement.setAttribute('data-theme','beta')
            } else if (p.startsWith('/portfolio-gamma')) {
              document.documentElement.setAttribute('data-theme','gamma')
            } else {
              document.documentElement.removeAttribute('data-theme')
            }
          } catch (e) { /* noop */ }
        })();` }} />

        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
