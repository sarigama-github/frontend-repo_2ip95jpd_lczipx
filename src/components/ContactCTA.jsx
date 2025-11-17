import { useState } from 'react'

const api = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ContactCTA() {
  const [form, setForm] = useState({ name: '', email: '', organization: '', message: '' })
  const [status, setStatus] = useState(null)

  async function submit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(`${api}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ name: '', email: '', organization: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-[#0f1a21] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Let’s build resilience together</h2>
          <p className="mt-3 text-white/70">Tell us about your mission. We’ll bring the people, process, and precision to help you achieve it.</p>
          <ul className="mt-6 space-y-2 text-white/70 text-sm">
            <li>• Rapid response teams available nationwide</li>
            <li>• Veteran-owned small business</li>
            <li>• Cleared personnel and accredited practitioners</li>
          </ul>
        </div>
        <form onSubmit={submit} className="bg-white/[0.03] border border-white/10 rounded-xl p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input required value={form.name} onChange={(e)=>setForm(f=>({...f,name:e.target.value}))} className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C02026]" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" required value={form.email} onChange={(e)=>setForm(f=>({...f,email:e.target.value}))} className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C02026]" />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Organization</label>
            <input value={form.organization} onChange={(e)=>setForm(f=>({...f,organization:e.target.value}))} className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C02026]" />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea required rows="4" value={form.message} onChange={(e)=>setForm(f=>({...f,message:e.target.value}))} className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C02026]" />
          </div>
          <button type="submit" disabled={status==='submitting'} className="inline-flex items-center px-4 py-2 rounded-md bg-[#C02026] text-white font-semibold shadow hover:brightness-110 transition disabled:opacity-60">
            {status==='submitting' ? 'Sending...' : 'Send inquiry'}
          </button>
          {status==='success' && <p className="text-green-400 text-sm">Thanks! We’ll be in touch shortly.</p>}
          {status==='error' && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}
