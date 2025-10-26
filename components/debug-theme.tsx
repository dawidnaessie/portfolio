"use client"

import * as React from 'react'

export default function DebugTheme() {
  const [state, setState] = React.useState({ className: '', dataTheme: '', background: '', primary: '' })

  React.useEffect(() => {
    try {
      const html = document.documentElement
      const cs = getComputedStyle(html)
      setState({
        className: html.className || '',
        dataTheme: html.getAttribute('data-theme') || '',
        background: cs.getPropertyValue('--background')?.trim() || '',
        primary: cs.getPropertyValue('--primary')?.trim() || '',
      })
    } catch (e) {
      // noop
    }
  }, [])

  return (
    <div style={{ position: 'fixed', right: 12, bottom: 12, zIndex: 9999 }}>
      <div style={{ background: 'rgba(0,0,0,0.6)', color: 'white', padding: '8px 10px', borderRadius: 8, fontSize: 12, fontFamily: 'monospace' }}>
        <div><strong>html.class</strong>: {state.className || <em>—</em>}</div>
        <div><strong>data-theme</strong>: {state.dataTheme || <em>—</em>}</div>
        <div><strong>--background</strong>: {state.background || <em>—</em>}</div>
        <div><strong>--primary</strong>: {state.primary || <em>—</em>}</div>
      </div>
    </div>
  )
}
