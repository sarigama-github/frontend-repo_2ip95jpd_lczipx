import Navbar from '../components/Navbar'

export default function ServicesPage() {
  return (
    <div className="bg-[#172832] text-white">
      <Navbar />
      <main className="pt-20">
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold">Services</h1>
          <p className="mt-4 text-white/70 max-w-3xl">From risk assessments to recovery grants management, our teams integrate with yours to deliver outcomes. Explore categories and see related case studies.</p>
        </section>
        <section className="bg-[#0f1a21]">
          <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Homeland Security', link: '/case-studies#homeland-security' },
              { title: 'Emergency Preparedness', link: '/case-studies#preparedness' },
              { title: 'Disaster Response & Recovery', link: '/case-studies#recovery' },
              { title: 'Grants & Program Management', link: '/case-studies#grants' },
              { title: 'Training & Exercises', link: '/case-studies#training' },
              { title: 'Continuity & Resilience', link: '/case-studies#continuity' },
            ].map((c) => (
              <a key={c.title} href={c.link} className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:bg-white/[0.06] transition">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-2 text-white/70 text-sm">See related case studies →</p>
              </a>
            ))}
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold">Our Process</h2>
            <ol className="mt-4 space-y-2 text-white/70 text-sm">
              <li>1. Assess mission, risks, and constraints</li>
              <li>2. Co-design solutions with stakeholders</li>
              <li>3. Implement with embedded practitioners</li>
              <li>4. Measure impact and transfer knowledge</li>
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Impact Highlights</h2>
            <ul className="mt-4 space-y-2 text-white/70 text-sm">
              <li>• Reduced incident response times by 35%</li>
              <li>• Secured $250M+ in mitigation and recovery funding</li>
              <li>• Trained 10,000+ responders and campus officials</li>
            </ul>
          </div>
        </section>
        <section className="bg-[#0f1a21]">
          <div className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-3 gap-6">
            {[
              { k: '35%', v: 'Faster Response' },
              { k: '$250M+', v: 'Funding Secured' },
              { k: '10k+', v: 'Personnel Trained' },
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
