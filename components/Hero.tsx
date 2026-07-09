'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Play, TrendingUp, Users, Zap, Star } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { value: '£2.4M+', label: 'Client Revenue Generated' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '40%', label: 'Avg Productivity Gain' },
  { value: '98%', label: 'Client Satisfaction' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src="https://v3b.fal.media/files/b/0aa19e1e/XowFD21bDGkiKxdKOi0di_video.mp4"
      />
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-DEFAULT/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-transparent to-navy" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-slate-300 mb-8"
            >
              <Star className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />
              Trusted by 50+ UK Businesses
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6"
            >
              Transform Your
              <br />
              Business With The
              <br />
              <span className="text-gradient">Power of AI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl"
            >
              NexusAI delivers end-to-end AI solutions for UK businesses — from strategy to deployment. Stop losing to competitors who already use AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <a href="#contact" className="shimmer-btn text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-200 hover:shadow-xl hover:shadow-blue-DEFAULT/30">
                Book Free Strategy Call <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#results" className="glass text-white font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-200">
                <Play className="w-4 h-4 text-blue-DEFAULT" fill="currentColor" /> See Our Results
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((s, i) => (
                <div key={i} className="glass rounded-xl p-3 text-center">
                  <div className="text-xl font-black text-white">{s.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden glow-blue">
              <Image
                src="https://v3b.fal.media/files/b/0aa19e0f/uNEzBvdVKMPokebHDc5xk_image.png"
                alt="AI Technology"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent rounded-2xl" />
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-xl p-4 glow-blue">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-DEFAULT" />
                <div>
                  <div className="text-sm font-bold text-white">+40% Productivity</div>
                  <div className="text-xs text-slate-400">Average client result</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}