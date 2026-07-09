'use client'
import { motion } from 'framer-motion'
import { Map, Bot, MessageSquare, BarChart3, Brain, GraduationCap } from 'lucide-react'

const services = [
  { icon: Map, title: 'AI Strategy & Roadmap', desc: 'We audit your business, identify the highest-ROI AI opportunities, and build a 90-day implementation roadmap with clear milestones.', large: true, glow: 'glow-blue', border: 'border-blue-DEFAULT/30' },
  { icon: Bot, title: 'Custom AI Agents & Automation', desc: 'Deploy AI agents that handle customer service, lead qualification, data entry, and internal workflows 24/7 — no human needed.', large: true, glow: 'glow-violet', border: 'border-violet/30' },
  { icon: MessageSquare, title: 'AI Chatbot Development', desc: 'Intelligent chatbots trained on your business data. Handles 80% of customer queries automatically.', large: false, glow: '', border: 'border-white/8' },
  { icon: BarChart3, title: 'Data Analytics & Insights', desc: 'Turn raw business data into actionable dashboards and predictive models that drive decisions.', large: false, glow: '', border: 'border-white/8' },
  { icon: Brain, title: 'LLM & GPT Integration', desc: 'Embed powerful language models into your existing tools, CRMs, and workflows seamlessly.', large: false, glow: '', border: 'border-white/8' },
  { icon: GraduationCap, title: 'AI Training & Workshops', desc: 'Upskill your team with hands-on AI training tailored to your industry and business goals.', large: false, glow: '', border: 'border-white/8' },
]

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-blue-light mb-6">
            <Bot className="w-3.5 h-3.5" /> Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">What We Build For You</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Six high-impact AI services that deliver measurable ROI — not experiments, real results.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`glass rounded-2xl p-7 border ${s.border} ${s.glow} hover:border-blue-DEFAULT/40 transition-all duration-300 ${s.large ? 'md:col-span-1' : ''}`}
            >
              <div className="w-11 h-11 rounded-xl bg-blue-DEFAULT/15 flex items-center justify-center mb-5">
                <s.icon className="w-5 h-5 text-blue-DEFAULT" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}