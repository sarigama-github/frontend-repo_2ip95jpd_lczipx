import { motion } from 'framer-motion'
import { Shield, AlertTriangle, RefreshCcw, Landmark, GraduationCap } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Homeland Security',
    desc: 'Risk assessments, security planning, and program management.',
    to: '/case-studies#homeland-security',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Preparedness',
    desc: 'All-hazards planning, exercises, and training.',
    to: '/case-studies#preparedness',
  },
  {
    icon: RefreshCcw,
    title: 'Disaster Response & Recovery',
    desc: 'Incident management, recovery planning, and grants support.',
    to: '/case-studies#recovery',
  },
  {
    icon: Landmark,
    title: 'Government Support',
    desc: 'Program implementation for federal, state, and local agencies.',
    to: '/case-studies#government',
  },
  {
    icon: GraduationCap,
    title: 'Education Sector',
    desc: 'Campus safety, emergency operations, and compliance.',
    to: '/case-studies#education',
  },
]

export default function Services() {
  return (
    <section className="bg-[#172832] text-white" id="services">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Core Services</h2>
            <p className="mt-3 text-white/70">Practitioner-led teams delivering measurable outcomes across preparedness, response, and recovery.</p>
          </div>
          <div className="text-right">
            <a href="/services" className="inline-flex items-center px-4 py-2 rounded-md bg-[#C02026] text-white font-semibold shadow hover:brightness-110 transition">View all services</a>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={s.to}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="group border border-white/10 rounded-xl p-6 bg-white/[0.03] hover:bg-white/[0.06] transition"
            >
              <s.icon className="w-6 h-6 text-[#C02026]" />
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
              <span className="mt-4 inline-block text-sm text-[#C02026] group-hover:translate-x-1 transition">View related case studies →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
