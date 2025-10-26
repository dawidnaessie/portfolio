"use client"

import * as React from 'react'

export function Header({ logo = 'Site', links = [] }: { logo?: React.ReactNode; links?: Array<{ href: string; label: string }> }) {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="text-xl font-bold">{logo}</div>
        <nav>
          <ul className="flex gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
