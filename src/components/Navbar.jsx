import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/resources', label: 'Resources' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0f1a21]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0f1a21]/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-[#C02026] grid place-items-center text-white font-extrabold">C</div>
          <span className="text-white font-semibold tracking-wide">COG</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center px-4 py-2 rounded-md bg-[#C02026] text-white text-sm font-semibold shadow hover:brightness-110 transition"
          >
            Work with COG
          </Link>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#172832]">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-2 py-2 rounded ${isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/10'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center px-3 py-2 rounded bg-[#C02026] text-white font-semibold"
            >
              Work with COG
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
