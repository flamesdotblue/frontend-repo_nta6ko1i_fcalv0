import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle2, MessageCircle, Wallet, Clock, Star } from 'lucide-react'

const mockTasks = [
  { id: 1, title: 'Build a Landing Page', due: 'Sun, Oct 27', reward: 10, status: 'Pending', type: 'Weekly' },
  { id: 2, title: 'JavaScript Quiz', due: 'Tue, Oct 29', reward: 5, status: 'Submitted', type: 'Weekly' },
  { id: 3, title: 'Portfolio Case Study', due: 'Nov 15', reward: 25, status: 'Verified', type: 'Monthly' },
  { id: 4, title: 'Mentor Review Summary', due: 'Completed', reward: 8, status: 'Verified', type: 'Completed' },
]

const mockMessages = [
  { id: 1, from: 'Mentor Mia', text: 'Great job on week 2! Add more accessibility notes.', time: '10:24' },
  { id: 2, from: 'Jacob', text: 'Thanks! Pushed an update with ARIA labels.', time: '10:27', own: true },
]

export default function StudentArea() {
  const [tab, setTab] = useState('dashboard')
  const [taskTab, setTaskTab] = useState('Weekly')

  const progress = 64
  const balance = 72.5

  const filteredTasks = useMemo(() => mockTasks.filter(t => (taskTab === 'All' ? true : t.type === taskTab)), [taskTab])

  return (
    <section className="bg-[#F5F7FA] border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {[
            { key: 'dashboard', label: 'Dashboard' },
            { key: 'tasks', label: 'Tasks' },
            { key: 'chat', label: 'Mentor Chat' },
            { key: 'roadmap', label: 'Roadmap' },
            { key: 'rewards', label: 'Rewards' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-4 py-2 rounded-full text-sm transition border ${
                tab === key
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === 'dashboard' && (
          <div className="grid lg:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2 rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Hi Jacob, your next task is ready!</h3>
              <p className="text-slate-600">Keep your streak going and earn this week’s payback.</p>

              <div className="mt-6">
                <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
                  <span>Weekly Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-3 w-full bg-[#F5F7FA] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#007BFF] to-[#00C6FF]"
                  />
                </div>
              </div>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <InfoCard title="This Week’s Task" icon={Calendar}>
                  Build and submit a responsive landing page.
                </InfoCard>
                <InfoCard title="Payback Status" icon={Wallet}>
                  Eligible • ${balance.toFixed(2)} balance
                </InfoCard>
                <InfoCard title="Mentor Feedback" icon={MessageCircle}>
                  "Refine your hero typography and spacing."
                </InfoCard>
              </div>

              <div className="mt-6">
                <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#007BFF] to-[#00C6FF] text-white px-5 py-2.5 shadow hover:shadow-md transition">
                  <CheckCircle2 className="h-5 w-5" />
                  Submit Task
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900">Recent Activity</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3"><Clock className="h-4 w-4 text-[#00A4FF] mt-0.5" /> Submitted JS Quiz</li>
                <li className="flex items-start gap-3"><Clock className="h-4 w-4 text-[#00A4FF] mt-0.5" /> Mentor reviewed Week 1</li>
                <li className="flex items-start gap-3"><Clock className="h-4 w-4 text-[#00A4FF] mt-0.5" /> Wallet credited $5</li>
              </ul>

              <div className="mt-6 rounded-2xl p-4 bg-gradient-to-br from-[#007BFF]/10 to-[#00C6FF]/10 border border-slate-200">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-[#007BFF]" />
                  <div>
                    <div className="font-medium text-slate-900">You’re on a 3‑week streak!</div>
                    <div className="text-slate-600 text-sm">Stay consistent to boost rewards.</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {tab === 'tasks' && (
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
              {['Weekly', 'Monthly', 'Completed', 'All'].map(t => (
                <button key={t} onClick={() => setTaskTab(t)} className={`px-3 py-1.5 rounded-full text-sm border ${taskTab === t ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'}`}>{t}</button>
              ))}
            </div>

            <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredTasks.map(task => (
                <motion.div key={task.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-slate-200 p-4 bg-[#F5F7FA]">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">{task.title}</div>
                      <div className="text-sm text-slate-600 flex items-center gap-2 mt-1"><Calendar className="h-4 w-4" /> {task.due}</div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full border ${
                      task.status === 'Verified' ? 'bg-green-50 text-green-700 border-green-200' :
                      task.status === 'Submitted' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                      'bg-white text-slate-700 border-slate-200'
                    }`}>{task.status}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-slate-700">Reward: ${task.reward}</span>
                    <button className="text-sm rounded-full px-3 py-1 bg-white border border-slate-200 hover:border-slate-300">Open</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {tab === 'chat' && (
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <div className="h-72 overflow-auto space-y-3">
              {mockMessages.map(m => (
                <div key={m.id} className={`max-w-[75%] rounded-2xl px-4 py-2 border ${m.own ? 'ml-auto bg-[#EAF3FF] border-slate-200' : 'bg-white border-slate-200'}`}>
                  <div className="text-xs text-slate-500">{m.own ? 'You' : m.from} • {m.time}</div>
                  <div className="text-slate-800">{m.text}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <input className="flex-1 rounded-full border border-slate-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C6FF]" placeholder="Type your message..." />
              <button className="rounded-full px-4 py-2 bg-gradient-to-r from-[#007BFF] to-[#00C6FF] text-white">Send</button>
            </div>
          </div>
        )}

        {tab === 'roadmap' && (
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <div className="relative pl-6">
              {[1,2,3,4,5,6].map(week => (
                <div key={week} className="relative pb-6">
                  <div className={`absolute left-0 top-0 h-full w-px ${week < 6 ? 'bg-slate-200' : ''}`}></div>
                  <div className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full ${week === 3 ? 'bg-gradient-to-br from-[#007BFF] to-[#00C6FF]' : 'bg-slate-300'}`}></div>
                  <div className="ml-2">
                    <div className="font-semibold text-slate-900">Week {week} {week === 3 && <span className="text-xs text-white bg-slate-900 px-2 py-0.5 rounded-full ml-2">Current</span>}</div>
                    <div className="text-sm text-slate-600">Focus: {['HTML','CSS','JS Basics','Responsive UI','APIs','Final Project'][week-1]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'rewards' && (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <div className="text-slate-500 text-sm">Wallet Balance</div>
              <div className="mt-2 text-3xl font-bold text-slate-900">${balance.toFixed(2)}</div>
              <div className="mt-4 rounded-2xl p-4 bg-gradient-to-br from-[#007BFF]/10 to-[#00C6FF]/10 border border-slate-200">
                Earn payback for each verified task.
              </div>
            </div>

            <div className="lg:col-span-2 rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900 mb-4">Transactions</h4>
              <div className="space-y-3">
                {[
                  { id: 1, label: 'Week 2 Verified', amount: '+$10.00' },
                  { id: 2, label: 'JS Quiz Bonus', amount: '+$5.00' },
                  { id: 3, label: 'Project Review', amount: '+$8.00' },
                ].map(t => (
                  <div key={t.id} className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 bg-[#F5F7FA]">
                    <div className="flex items-center gap-3"><Wallet className="h-4 w-4 text-[#00A4FF]" /> {t.label}</div>
                    <div className="font-medium text-emerald-600">{t.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function InfoCard({ title, icon: Icon, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4 bg-[#F5F7FA]">
      <div className="flex items-center gap-2 text-slate-700 text-sm font-medium"><Icon className="h-4 w-4 text-[#00A4FF]" /> {title}</div>
      <div className="mt-1 text-slate-900">{children}</div>
    </div>
  )
}
