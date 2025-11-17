import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Services from '../components/Services'
import Sectors from '../components/Sectors'
import ProofPoints from '../components/ProofPoints'
import ContactCTA from '../components/ContactCTA'

export default function Home() {
  return (
    <div className="bg-[#172832]">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Partners />
        <Services />
        <Sectors />
        <ProofPoints />
        <ContactCTA />
      </main>
      <footer className="bg-[#0f1a21] text-white/70 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
          <div>© {new Date().getFullYear()} COG. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
