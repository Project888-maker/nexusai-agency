'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Shield, TrendingUp } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <video autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src="https://v3b.fal.media/files/b/0aa19e37/EX4F0PZ_b7CmwzUtmK1t1_video.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/50 to-navy" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-DEFAULT/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Ready to Outpace<br />
            <span className="text-gradient">Your Competition?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute AI strategy call. No pitch, no pressure — just a clear plan for how AI can transform your business.
          </p>
          <motion.a
            href="mailto:hello@nexusai.co.uk"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 shimmer-btn text-white font-bold text-lg px-10 py-5 rounded-2xl hover:shadow-2xl hover:shadow-blue-DEFAULT/40 transition-shadow duration-300"
          >
            Book My Free Strategy Call <ArrowRight className="w-5 h-5" />
          </motion.a>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm text-slate-500">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-DEFAULT" /> Free 30-min consultation</span>
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-blue-DEFAULT" /> No commitment required</span>
            <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-blue-DEFAULT" /> Results in 6 weeks</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}