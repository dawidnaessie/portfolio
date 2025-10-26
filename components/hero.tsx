"use client"

import * as React from 'react'

export function Hero({ title, subtitle, cta }: { title?: React.ReactNode; subtitle?: React.ReactNode; cta?: any }) {
  return (
    <div className="rounded-2xl p-12 bg-card border border-border text-center">
      {title && <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>}
      {subtitle && <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>}
      {cta && (
        <div className="flex justify-center gap-4">
          {cta.primary && (
            <a className="px-6 py-3 bg-primary text-primary-foreground rounded-lg" href={cta.primary.href}>
              {cta.primary.label}
            </a>
          )}
          {cta.secondary && (
            <a className="px-6 py-3 border border-border rounded-lg" href={cta.secondary.href}>
              {cta.secondary.label}
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default Hero
