import { motion } from 'framer-motion'
import { Rocket, ArrowRight, Star } from 'lucide-react'

export default function Landing({ onJoin, onRoadmap }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-[#007BFF] to-[#00C6FF]" />
        <div className="absolute -bottom-24 -left-12 h-72 w-72 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-[#00C6FF] to-[#007BFF]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-[#F5F7FA] text-slate-700 border border-slate-200">
                <Star className="h-3.5 w-3.5 text-[#00A4FF]" />
                Premium learning experience
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Learn by Doing. <span className="bg-gradient-to-r from-[#007BFF] to-[#00C6FF] bg-clip-text text-transparent">Earn by Completing.</span>
              </h1>
              <p className="mt-4 text-slate-600 text-lg">
                Get tasks, complete them, earn your payback. A friendly, focused space to build skills week by week.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={onJoin}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white bg-gradient-to-r from-[#007BFF] to-[#00C6FF] shadow hover:shadow-lg transition-all"
                >
                  <Rocket className="h-5 w-5" />
                  Join Now
                </button>
                <button
                  onClick={onRoadmap}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white text-slate-800 border border-slate-200 hover:border-slate-300 transition"
                >
                  View Roadmap
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative z-10"
            >
              <div className="aspect-[4/3] rounded-3xl bg-white border border-slate-200 shadow-sm p-6 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      className="rounded-2xl h-20 bg-gradient-to-br from-[#F5F7FA] to-white border border-slate-200 flex items-center justify-center"
                    >
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#007BFF] to-[#00C6FF] opacity-90" />
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow border border-slate-200 text-sm">
                Smooth micro-interactions
              </div>
              <div className="absolute -top-6 -right-6 bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow border border-slate-200 text-sm">
                Minimal and crisp UI
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
