"use client"

import * as React from 'react'
import { Zap, Shield, Rocket, Globe, Code, Sparkles, Check } from 'lucide-react'

const ICONS: Record<string, React.ComponentType<any>> = {
  Zap,
  Shield,
  Rocket,
  Globe,
  Code,
  Sparkles,
  Check,
}

export function FeatureGrid({ features = [] }: { features?: Array<{ icon?: string | React.ComponentType<any>; title?: string; description?: string }> }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {features.map((f, i) => {
        const Icon = typeof f.icon === 'string' ? ICONS[f.icon] : (f.icon as React.ComponentType<any> | undefined)
        return (
          <div key={i} className="p-6 rounded-2xl border border-border bg-card">
            <div className="mb-4">{Icon ? <Icon className="w-6 h-6" /> : null}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-muted-foreground">{f.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default FeatureGrid
