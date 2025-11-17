import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] grid place-items-center bg-[#172832] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#172832]/40 via-[#172832]/60 to-[#172832] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Experienced Homeland Security & Emergency Response Professionals
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg text-white/80 max-w-3xl mx-auto"
        >
          Supporting Federal, State, and local governments, and educational institutions with readiness, response, and recovery.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a href="#contact" className="px-6 py-3 rounded-md bg-[#C02026] text-white font-semibold shadow hover:brightness-110 transition">Start a conversation</a>
          <a href="/services" className="px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition">Explore services</a>
        </motion.div>
      </div>
    </section>
  )
}
