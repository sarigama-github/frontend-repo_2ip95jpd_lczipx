import Navbar from '../components/Navbar'

export default function Resources() {
  return (
    <div className="bg-[#172832] text-white">
      <Navbar />
      <main className="pt-20">
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold">Resources</h1>
          <p className="mt-4 text-white/70 max-w-3xl">Insights, templates, and upcoming workshops for practitioners and program leaders.</p>
        </section>
        <section className="bg-[#0f1a21]">
          <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
            <div>
              <h2 className="text-2xl font-semibold">Blog Posts</h2>
              <ul className="mt-4 space-y-3 text-white/80 text-sm">
                <li className="bg-white/[0.03] border border-white/10 rounded p-3">Building an Effective EOP</li>
                <li className="bg-white/[0.03] border border-white/10 rounded p-3">Funding Mitigation for Long-term Resilience</li>
                <li className="bg-white/[0.03] border border-white/10 rounded p-3">Exercise Design that Drives Readiness</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Events</h2>
              <ul className="mt-4 space-y-3 text-white/80 text-sm">
                <li className="bg-white/[0.03] border border-white/10 rounded p-3">Regional Preparedness Summit — June</li>
                <li className="bg-white/[0.03] border border-white/10 rounded p-3">Campus Safety Workshop — July</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Workshops</h2>
              <ul className="mt-4 space-y-3 text-white/80 text-sm">
                <li className="bg-white/[0.03] border border-white/10 rounded p-3">Hazard Mitigation Grants 101</li>
                <li className="bg-white/[0.03] border border-white/10 rounded p-3">ICS for Executives</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
