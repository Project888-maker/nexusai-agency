'use client'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  { name: 'Sarah Mitchell', role: 'CEO, RetailTech UK', quote: 'NexusAI automated our entire customer onboarding process. We saved 20 hours a week and customer satisfaction went up 35%. The ROI was clear within weeks.' },
  { name: 'James Thornton', role: 'MD, Apex Financial Services', quote: 'Our sales team now uses AI-powered lead scoring and conversion rates jumped 28%. NexusAI delivered everything they promised, on time and on budget.' },
  { name: 'Priya Sharma', role: 'Operations Director, MediCare Solutions', quote: 'We were skeptical about AI. NexusAI made it simple, fast, and the results were beyond what we expected. Genuinely transformative for our operations.' },
  { name: 'David Chen', role: 'Founder, LegalEdge UK', quote: 'The AI document processing system NexusAI built saves us 15 hours per case. Our lawyers now focus on strategy, not admin. Incredible value.' },
]

export default function Testimonials() {
  return (
    <section className="py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">What Our Clients Say</h2>
          <p className="text-slate-400 text-lg">Real results from UK businesses that made the leap to AI.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-7 border border-white/8 hover:border-blue-DEFAULT/30 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-blue-DEFAULT/40 mb-4" />
              <p className="text-slate-300 leading-relaxed mb-6 text-base">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{t.role}</div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}