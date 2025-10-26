"use client"

import * as React from 'react'

export function Testimonial({ quote, author, role }: { quote: string; author?: string; role?: string }) {
  return (
    <blockquote className="p-6 rounded-2xl border border-border bg-card">
      <p className="mb-4 text-muted-foreground">“{quote}”</p>
      <div className="text-sm font-medium">{author}</div>
      {role && <div className="text-xs text-muted-foreground">{role}</div>}
    </blockquote>
  )
}

export default Testimonial
