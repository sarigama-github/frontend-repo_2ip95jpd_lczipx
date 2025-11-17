import { motion } from 'framer-motion'

const points = [
  { k: '200+', v: 'Projects Delivered' },
  { k: '50+', v: 'Jurisdictions Served' },
  { k: '15+', v: 'Years Average Experience' },
  { k: '$1B+', v: 'Grants Managed' },
]

export default function ProofPoints() {
  return (
    <section className="bg-[#172832] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center"
            >
              <div className="text-3xl font-extrabold text-white">{p.k}</div>
              <div className="mt-2 text-white/70">{p.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
