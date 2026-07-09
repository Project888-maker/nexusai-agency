'use client'
import { motion } from 'framer-motion'
import { Phone, FileText, Rocket } from 'lucide-react'

const steps = [
  { num: '01', icon: Phone, title: 'Discovery Call', desc: '30-minute free strategy session. We audit your current processes, identify bottlenecks, and map out quick-win AI opportunities specific to your business.' },
  { num: '02', icon: FileText, title: 'Custom Roadmap', desc: 'We design a tailored AI implementation plan with clear ROI targets, timelines, and milestones. You know exactly what you are getting and when.' },
  { num: '03', icon: Rocket, title: 'Build & Deploy', desc: 'Our team builds, tests, and deploys your AI solution. You see measurable results within 6 weeks of kickoff — guaranteed.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-28 px-6 overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-10"
        src="https://v3b.fal.media/files/b/0aa19e2a/DDB58IhyILA5AV7tmxmvS_video.mp4" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/70 to-navy" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-blue-light mb-6">
            <Rocket className="w-3.5 h-3.5" /> Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">From Zero to AI-Powered in 6 Weeks</h2>
          <p className="text-slate-400 text-lg">A proven 3-step process that delivers results, not experiments.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px bg-gradient-to-r from-blue-DEFAULT/50 via-violet/50 to-blue-DEFAULT/50" />
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 text-center hover:border-blue-DEFAULT/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-DEFAULT/15 flex items-center justify-center mx-auto mb-5 relative">
                <s.icon className="w-6 h-6 text-blue-DEFAULT" />
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-DEFAULT flex items-center justify-center text-xs font-bold text-white">{s.num.slice(-1)}</div>
              </div>
              <div className="text-xs font-bold text-blue-DEFAULT tracking-widest uppercase mb-2">Step {s.num}</div>
              <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}