import { motion } from 'framer-motion'

const sectors = [
  { name: 'Federal Agencies', copy: 'Mission support and program delivery across national priorities.' },
  { name: 'State & Local', copy: 'Preparedness, mitigation, and recovery tailored to local needs.' },
  { name: 'Education', copy: 'Campus resilience, continuity, and emergency operations.' },
  { name: 'Healthcare', copy: 'Surge planning, continuity, and public health coordination.' },
]

export default function Sectors() {
  return (
    <section className="bg-[#0f1a21] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">Sectors We Serve</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="border border-white/10 rounded-xl p-6 bg-white/[0.03]"
            >
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
