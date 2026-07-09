'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

function Counter({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

const metrics = [
  { prefix: '£', target: 24, suffix: 'M+', label: 'Client Revenue Generated', sub: 'across all projects' },
  { prefix: '', target: 50, suffix: '+', label: 'AI Projects Delivered', sub: 'UK businesses transformed' },
  { prefix: '', target: 40, suffix: '%', label: 'Avg Productivity Increase', sub: 'measured across clients' },
  { prefix: '', target: 6, suffix: ' Wks', label: 'Average Time to Results', sub: 'from kickoff to live' },
]

export default function Stats() {
  return (
    <section id="results" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="https://v3b.fal.media/files/b/0aa19e39/f1DfVwQcCGPHy4BjbJL5T_image.png" alt="" fill className="object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/80 to-navy" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">The Numbers Don&apos;t Lie</h2>
          <p className="text-slate-400 text-lg">Real results from real UK businesses.</p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 text-center glow-blue"
            >
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                <Counter target={m.target} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <div className="text-sm font-semibold text-white mb-1">{m.label}</div>
              <div className="text-xs text-slate-500">{m.sub}</div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 border border-blue-DEFAULT/20 max-w-3xl mx-auto text-center"
        >
          <p className="text-slate-300 text-lg leading-relaxed italic">&ldquo;AI adoption in UK businesses jumped from 15% to over 40% in a single year. The businesses that act now will dominate their industries by 2026.&rdquo;</p>
          <p className="text-slate-500 text-sm mt-4">— McKinsey State of AI Report, 2025</p>
        </motion.div>
      </div>
    </section>
  )
}