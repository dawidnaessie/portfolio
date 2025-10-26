"use client"

import * as React from 'react'

export function Footer({ children }: { children?: React.ReactNode }) {
  return (
    <footer className="w-full mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center text-sm text-muted-foreground">
        {children ?? <span>© {new Date().getFullYear()} My Site. All rights reserved.</span>}
      </div>
    </footer>
  )
}

export default Footer
