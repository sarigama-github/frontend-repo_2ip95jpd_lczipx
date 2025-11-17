import { motion } from 'framer-motion'

const logos = [
  'FEMA', 'DHS', 'USDA', 'DoE', 'CDC', 'State EMAs', 'Universities'
]

export default function Partners() {
  return (
    <section className="bg-[#0f1a21] text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between flex-wrap gap-6 opacity-80">
          {logos.map((l, i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="text-sm tracking-widest uppercase"
            >
              {l}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
