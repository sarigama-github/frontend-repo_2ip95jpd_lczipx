import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="bg-[#172832] text-white">
      <Navbar />
      <main className="pt-20">
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold">About COG</h1>
          <p className="mt-4 text-white/70 max-w-3xl">Veteran-owned and practitioner-led, our team has served at every level of emergency management and homeland security. We build resilient systems that work when it matters most.</p>
        </section>
        <section className="bg-[#0f1a21]">
          <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold">Our Story</h2>
              <p className="mt-3 text-white/70">Founded by veterans with decades of field experience, COG was created to close the gap between policy and practice. We bring a mission-first mindset to complex, multi-agency environments.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Values</h2>
              <ul className="mt-3 space-y-2 text-white/70">
                <li>• Service — Mission above all</li>
                <li>• Integrity — Do the right thing, always</li>
                <li>• Excellence — Deliver measurable outcomes</li>
                <li>• Partnership — Work shoulder-to-shoulder with clients</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold">Leadership</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="h-40 rounded bg-white/5" />
                <h3 className="mt-4 text-lg font-semibold">Leader Name</h3>
                <p className="text-white/70 text-sm">Brief bio highlighting federal/state experience, certifications, and mission focus.</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-[#0f1a21]">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-semibold">Accreditations</h2>
            <ul className="mt-4 text-white/70 grid sm:grid-cols-2 gap-2">
              <li>• Veteran-Owned Small Business (VOSB)</li>
              <li>• ISO-aligned quality practices</li>
              <li>• FEMA/EMAP-aligned capabilities</li>
              <li>• Cleared personnel</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
