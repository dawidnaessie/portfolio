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

    const themeVars: Record<string, Record<string, string>> = {
      alpha: {
        '--primary': '#3b82f6', '--primary-foreground': '#ffffff',
        '--secondary': '#f3f4f6', '--secondary-foreground': '#4b5563',
        '--accent': '#e0f2fe', '--accent-foreground': '#1e3a8a',
        '--background': '#ffffff', '--foreground': '#333333',
        '--card': '#ffffff', '--card-foreground': '#333333',
        '--popover': '#ffffff', '--popover-foreground': '#333333',
        '--muted': '#f9fafb', '--muted-foreground': '#6b7280',
        '--destructive': '#ef4444', '--destructive-foreground': '#ffffff',
        '--border': '#e5e7eb', '--input': '#e5e7eb', '--ring': '#3b82f6',
        '--chart-1': '#3b82f6', '--chart-2': '#2563eb', '--chart-3': '#1d4ed8',
        '--chart-4': '#1e40af', '--chart-5': '#1e3a8a',
        '--sidebar': '#f9fafb', '--sidebar-foreground': '#333333',
        '--sidebar-primary': '#3b82f6', '--sidebar-primary-foreground': '#ffffff',
        '--sidebar-accent': '#e0f2fe', '--sidebar-accent-foreground': '#1e3a8a',
        '--sidebar-border': '#e5e7eb', '--sidebar-ring': '#3b82f6',
      },
      beta: {
        '--background': '#fff7ed', '--foreground': '#422006',
        '--accent': '#f59e0b', '--accent-foreground': '#ffffff',
        '--primary': '#b45309', '--primary-foreground': '#ffffff',
      },
      gamma: {
        '--background': '#faf5ff', '--foreground': '#2e1065',
        '--accent': '#a855f7', '--accent-foreground': '#ffffff',
        '--primary': '#6b21a8', '--primary-foreground': '#ffffff',
      },
    }

    const setMany = (map: Record<string, string>) => {
      for (const [k, v] of Object.entries(map)) {
        try { html.style.setProperty(k, v) } catch (e) { /* noop */ }
      }
    }

    const removeMany = (map: Record<string, string>) => {
      for (const k of Object.keys(map)) {
        try { html.style.removeProperty(k) } catch (e) { /* noop */ }
      }
    }

    if (pageTheme === 'default') {
      html.removeAttribute('data-theme')
      // remove inline vars for all known themes so we fall back to stylesheet defaults
      Object.values(themeVars).forEach(removeMany)
    } else {
      html.setAttribute('data-theme', pageTheme)
      // remove the generic `dark` class so `.dark` rules don't override per-site vars
      html.classList.remove('dark')
      // apply inline variables for the active theme so client navigation stays consistent
      const vars = themeVars[pageTheme]
      if (vars) setMany(vars)

      // Observe html.class changes and force-remove `dark` if any library (e.g. next-themes)
      // attempts to re-add it after our effect runs. This guarantees the chosen
      // site theme remains the only active one.
      const observer = new MutationObserver(() => {
        try {
          // If we have a data-theme attribute set on html, it's an active
          // site-specific theme — ensure `.dark` is not present.
          if (html.getAttribute('data-theme') && html.classList.contains('dark')) {
            html.classList.remove('dark')
          }
        } catch (e) {
          /* noop */
        }
      })
      observer.observe(html, { attributes: true, attributeFilter: ['class'] })

      // cleanup observer on effect re-run/unmount
      return () => {
        try { observer.disconnect() } catch (e) { /* noop */ }
      }
    }

    // no cleanup in the default branch; values change on subsequent navigations
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

