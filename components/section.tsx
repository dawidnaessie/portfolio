"use client"

import * as React from 'react'

export function Section({
  children,
  id,
  className = '',
  subdued = false,
}: {
  children?: React.ReactNode
  id?: string
  className?: string
  subdued?: boolean
}) {
  return (
    <section id={id} data-slot="section" className={`${subdued ? 'bg-muted/5' : ''} ${className}`}>
      <div className="max-w-7xl mx-auto px-4">{children}</div>
    </section>
  )
}

export default Section
