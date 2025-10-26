import { useState } from 'react'
import { Rocket, Home, LayoutDashboard } from 'lucide-react'

const tabs = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'auth', label: 'Join', icon: Rocket },
  { key: 'student', label: 'Dashboard', icon: LayoutDashboard },
]

export default function Navbar({ active, onChange }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF] to-[#00C6FF]" />
            </div>
            <span className="font-semibold text-slate-900">Task & Payback</span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => onChange(key)}
                className={`group inline-flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                  active === key
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm">{label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onChange('student')}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#007BFF] to-[#00C6FF] text-white px-4 py-2 rounded-full shadow hover:shadow-md transition-all"
            >
              <LayoutDashboard className="h-4 w-4" />
              <span className="text-sm font-medium">Open App</span>
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden rounded-full p-2 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {tabs.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => {
                    onChange(key)
                    setOpen(false)
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-left ${
                    active === key
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
