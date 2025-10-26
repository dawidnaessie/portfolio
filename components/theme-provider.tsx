'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes'
import { usePathname } from 'next/navigation'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const pathname = usePathname()

  // Detect which "site variant" is active
  const pageTheme =
    pathname.startsWith('/landing-alpha') ? 'alpha' :
    pathname.startsWith('/landing-beta') ? 'beta' :
    pathname.startsWith('/portfolio-gamma') ? 'gamma' :
    'default'

  // Write the page theme to the html element so CSS selectors like
  // `html[data-theme="alpha"]` override root/class-based dark rules.
  // Use useLayoutEffect so the attribute is applied before paint to avoid flicker.
  React.useLayoutEffect(() => {
    if (typeof document === 'undefined') return

    const html = document.documentElement
    if (pageTheme === 'default') {
      html.removeAttribute('data-theme')
    } else {
      html.setAttribute('data-theme', pageTheme)
    }

    // no cleanup to avoid removing theme on unmount
  }, [pageTheme])

  return (
    // Use system default so we don't force dark globally.
    <NextThemesProvider {...props} attribute="class" defaultTheme="system">
      {/* Keep a full-height wrapper for layout, but the active theme attribute
          is applied to <html> via the effect above. */}
      <div className="min-h-screen">
        {children}
      </div>
    </NextThemesProvider>
  )
}

