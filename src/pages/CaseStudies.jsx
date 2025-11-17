import Navbar from '../components/Navbar'

function CaseCard({ title }){
  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
      <div className="h-40 rounded bg-white/5" />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="text-white/70 text-sm">Long-form narrative detailing mission context, approach, and outcomes. Includes metrics and impact highlights.</p>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <div className="bg-[#172832] text-white">
      <Navbar />
      <main className="pt-20">
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold">Case Studies</h1>
          <p className="mt-4 text-white/70 max-w-3xl">Select examples across preparedness, response, and recovery demonstrating measurable outcomes.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              'Statewide Hazard Mitigation Program',
              'Campus Emergency Operations Overhaul',
              'Disaster Recovery Grants Management',
              'Urban Security Risk Assessment',
              'Public Health Surge Coordination',
              'Continuity of Operations Modernization',
            ].map((t) => <CaseCard key={t} title={t} />)}
          </div>
        </section>
        <section className="bg-[#0f1a21]">
          <div className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-3 gap-6">
            {[
              { k: '200+', v: 'Projects' },
              { k: '50+', v: 'Jurisdictions' },
              { k: '$1B+', v: 'Managed' },
            ].map((m) => (
              <div key={m.k} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center">
                <div className="text-3xl font-extrabold">{m.k}</div>
                <div className="mt-2 text-white/70">{m.v}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
