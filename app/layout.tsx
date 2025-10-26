import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: '--font-sans' })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-mono' })
const sourceSerif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif' })

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
  <html lang="en" className={`${geist.variable} ${geistMono.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        {/* Inline script to set html[data-theme] and key CSS variables synchronously
            on first paint based on the current pathname. Setting CSS custom
            properties inline guarantees they override any stylesheet rules
            (including `.dark`) so per-site themes appear immediately. */}
        <script dangerouslySetInnerHTML={{ __html: `(() => {
          try {
            const p = window.location && window.location.pathname ? window.location.pathname : '';
            const html = document.documentElement;
            const set = (k, v) => html.style.setProperty(k, v);
            const setMany = (obj) => Object.entries(obj).forEach(([k, v]) => set(k, v));

            if (p.startsWith('/landing-alpha')) {
              html.setAttribute('data-theme','alpha');
              html.classList.remove('dark');
              setMany({
                '--primary':'#3b82f6','--primary-foreground':'#ffffff','--secondary':'#f3f4f6','--secondary-foreground':'#4b5563',
                '--accent':'#e0f2fe','--accent-foreground':'#1e3a8a','--background':'#ffffff','--foreground':'#333333',
                '--card':'#ffffff','--card-foreground':'#333333','--popover':'#ffffff','--popover-foreground':'#333333',
                '--muted':'#f9fafb','--muted-foreground':'#6b7280','--destructive':'#ef4444','--destructive-foreground':'#ffffff',
                '--border':'#e5e7eb','--input':'#e5e7eb','--ring':'#3b82f6','--chart-1':'#3b82f6','--chart-2':'#2563eb',
                '--chart-3':'#1d4ed8','--chart-4':'#1e40af','--chart-5':'#1e3a8a','--sidebar':'#f9fafb','--sidebar-foreground':'#333333',
                '--sidebar-primary':'#3b82f6','--sidebar-primary-foreground':'#ffffff','--sidebar-accent':'#e0f2fe','--sidebar-accent-foreground':'#1e3a8a',
                '--sidebar-border':'#e5e7eb','--sidebar-ring':'#3b82f6'
              });
            } else if (p.startsWith('/landing-beta')) {
              html.setAttribute('data-theme','beta');
              html.classList.remove('dark');
              setMany({
                '--background':'#fff7ed','--foreground':'#422006','--primary':'#b45309','--primary-foreground':'#ffffff',
                '--accent':'#f59e0b','--accent-foreground':'#ffffff'
              });
            } else if (p.startsWith('/portfolio-gamma')) {
              html.setAttribute('data-theme','gamma');
              html.classList.remove('dark');
              setMany({
                '--background':'#faf5ff','--foreground':'#2e1065','--primary':'#6b21a8','--primary-foreground':'#ffffff',
                '--accent':'#a855f7','--accent-foreground':'#ffffff'
              });
            } else {
              html.removeAttribute('data-theme');
              // remove any inline overrides we might have set previously
              ['--background','--foreground','--primary','--primary-foreground','--accent','--accent-foreground'].forEach(k => html.style.removeProperty(k));
            }
          } catch (e) { /* noop */ }
        })();` }} />

        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
