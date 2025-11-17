import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <div className="bg-[#172832] text-white">
      <Navbar />
      <main className="pt-20">
        <section className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl font-bold">Contact</h1>
            <p className="mt-4 text-white/70">We respond quickly to urgent needs and RFPs. Reach out to start the conversation.</p>
            <div className="mt-6 space-y-2 text-white/80 text-sm">
              <div>General: info@cog.gov</div>
              <div>Business: bd@cog.gov</div>
              <div>Phone: (555) 123-4567</div>
              <div>HQ: 123 Mission St, Washington, DC</div>
              <div className="mt-4">Certifications: VOSB, SAM Registered, ISO-aligned</div>
            </div>
            <div className="mt-6 h-56 rounded bg-white/5 border border-white/10 grid place-items-center text-white/50 text-sm">Map Placeholder</div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Inquiry Form</h2>
            <form className="mt-4 bg-white/[0.03] border border-white/10 rounded-xl p-6 grid grid-cols-1 gap-4">
              <input placeholder="Name" className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C02026]" />
              <input type="email" placeholder="Email" className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C02026]" />
              <input placeholder="Organization" className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C02026]" />
              <textarea rows="4" placeholder="Message" className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C02026]" />
              <button className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#C02026] text-white font-semibold">Send</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
