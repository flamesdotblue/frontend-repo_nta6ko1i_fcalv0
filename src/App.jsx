import { useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import AuthPanel from './components/AuthPanel'
import StudentArea from './components/StudentArea'

function App() {
  const [active, setActive] = useState('home')

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar active={active} onChange={setActive} />

      {active === 'home' && (
        <>
          <Landing onJoin={() => setActive('auth')} onRoadmap={() => setActive('student')} />
          <AuthPanel />
          <StudentArea />
        </>
      )}

      {active === 'auth' && (
        <>
          <Landing onJoin={() => setActive('auth')} onRoadmap={() => setActive('student')} />
          <AuthPanel />
        </>
      )}

      {active === 'student' && <StudentArea />}

      <footer className="border-t border-slate-200 mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Task & Payback</div>
          <div className="text-sm text-slate-600">Built with the FlamesBlue theme</div>
        </div>
      </footer>
    </div>
  )
}

export default App
