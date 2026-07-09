'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = ['Services', 'Results', 'Process', 'Pricing', 'Contact']

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-navy/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-DEFAULT flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" fill="white" />
          </div>
          <span className="font-bold text-xl text-white tracking-tight">NexusAI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium">
              {l}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden md:block shimmer-btn text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-DEFAULT/30">
          Get Free Strategy Call
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-white/5 px-6 py-4 space-y-3">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="block text-sm text-slate-300 hover:text-white py-2 font-medium">
              {l}
            </a>
          ))}
          <a href="#contact" className="block shimmer-btn text-white font-semibold text-sm px-5 py-3 rounded-xl text-center mt-2">
            Get Free Strategy Call
          </a>
        </div>
      )}
    </nav>
  )
}