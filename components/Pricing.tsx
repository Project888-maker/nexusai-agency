'use client'
import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '£2,500',
    period: 'one-time',
    desc: 'Perfect for businesses taking their first AI step.',
    features: ['AI Strategy Workshop (1 day)', 'Full process audit', '90-day AI roadmap', 'Quick-win identification', '30-day follow-up support', 'Recorded session'],
    cta: 'Book Workshop',
    popular: false,
    color: 'border-white/8'
  },
  {
    name: 'Growth',
    price: '£7,500',
    period: 'per project',
    desc: 'Our most popular package. Real AI, real results.',
    features: ['Everything in Starter', 'Custom AI agent or chatbot', 'Integration with existing tools', 'Staff training session', '90-day support included', 'Weekly progress reports', 'Performance dashboard'],
    cta: 'Start Project',
    popular: true,
    color: 'border-blue-DEFAULT/50'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'retainer',
    desc: 'Full AI transformation for scaling businesses.',
    features: ['Full AI transformation programme', 'Multiple AI systems', 'Dedicated AI consultant', 'Monthly retainer option', 'Priority support 24/7', 'Quarterly strategy reviews', 'Custom integrations'],
    cta: 'Talk to Us',
    popular: false,
    color: 'border-violet/30'
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Transparent Pricing. Real Results.</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">No hidden fees. No vague deliverables. Clear AI solutions with measurable outcomes.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative glass rounded-2xl p-8 border ${t.color} ${t.popular ? 'glow-blue scale-105' : ''} hover:border-blue-DEFAULT/40 transition-all duration-300`}
            >
              {t.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 shimmer-btn text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                  <Zap className="w-3 h-3" fill="white" /> Most Popular
                </div>
              )}
              <div className="mb-6">
                <div className="text-sm font-semibold text-blue-light uppercase tracking-widest mb-2">{t.name}</div>
                <div className="text-4xl font-black text-white mb-1">{t.price}</div>
                <div className="text-slate-500 text-sm">{t.period}</div>
                <p className="text-slate-400 text-sm mt-3">{t.desc}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-blue-DEFAULT flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`block w-full text-center font-bold py-3.5 rounded-xl transition-all duration-200 text-sm ${
                t.popular
                  ? 'shimmer-btn text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-DEFAULT/30'
                  : 'glass text-white hover:bg-white/10 border border-white/10'
              }`}>{t.cta}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}