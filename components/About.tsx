'use client'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const points = [
  'UK-based team — no outsourcing, ever',
  'Fixed-price projects — no surprise bills',
  'Results guaranteed or we work for free',
  '6-week average delivery time',
]

export default function About() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glow-violet">
              <Image
                src="https://v3b.fal.media/files/b/0aa19e11/jKeCohhGCurzVUUZNigh4_image.png"
                alt="NexusAI Team"
                width={600}
                height={450}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 glass rounded-xl p-4 border border-violet/20 glow-violet">
              <div className="text-2xl font-black text-white">6 Weeks</div>
              <div className="text-xs text-slate-400">Average delivery time</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-blue-light mb-6">
              About NexusAI
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              We Don&apos;t Sell AI Hype.<br />
              <span className="text-gradient">We Deliver Results.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              NexusAI was built by entrepreneurs who understand business first, technology second. We&apos;ve seen too many companies waste money on AI experiments that never shipped. Our approach is different: we start with your business problem, find the highest-ROI AI solution, and deliver it in weeks — not months. Based in the UK, working with SMBs and growing enterprises across every sector.
            </p>
            <ul className="space-y-4">
              {points.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-DEFAULT flex-shrink-0" />
                  <span className="text-slate-300 font-medium">{p}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}