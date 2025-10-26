import { useState } from 'react'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'

export default function AuthPanel() {
  const [mode, setMode] = useState('login')

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Jump in with a click</h2>
            <p className="mt-2 text-slate-600">Create your account or sign in. Your progress syncs across devices.</p>
            <div className="mt-6 inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-2 py-2">
              <button
                className={`px-4 py-2 rounded-full text-sm ${mode === 'login' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
                onClick={() => setMode('login')}
              >
                Login
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm ${mode === 'signup' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
                onClick={() => setMode('signup')}
              >
                Sign Up
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl bg-gradient-to-br from-[#EAF3FF] to-white border border-slate-200 p-6 shadow-sm"
          >
            <div className="mb-4 text-center">
              <div className="mx-auto h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#007BFF] to-[#00C6FF] text-white">
                <User className="h-6 w-6" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{mode === 'login' ? 'Welcome back' : 'Create an account'}</h3>
            </div>

            <form className="space-y-4">
              {mode === 'signup' && (
                <div>
                  <label className="text-sm text-slate-700">Full Name</label>
                  <input type="text" placeholder="Jane Doe" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C6FF]" />
                </div>
              )}
              <div>
                <label className="text-sm text-slate-700">Email</label>
                <input type="email" placeholder="you@example.com" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C6FF]" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Password</label>
                <input type="password" placeholder="••••••••" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C6FF]" />
              </div>

              <button type="button" className="w-full rounded-xl bg-gradient-to-r from-[#007BFF] to-[#00C6FF] text-white py-2.5 font-medium shadow hover:shadow-md transition">{mode === 'login' ? 'Login' : 'Create Account'}</button>

              <button type="button" className="w-full rounded-xl bg-white text-slate-800 py-2 border border-slate-200 hover:border-slate-300 transition">Continue with Google</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
