import { Link, NavLink } from 'react-router-dom'
import { Menu, Wallet, LineChart, Gem, LogIn } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Navbar() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="lg:hidden p-2 rounded-md hover:bg-white/5">
                <Menu className="w-6 h-6 text-blue-300" />
              </button>
              <Link to="/" className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-semibold tracking-tight">TA Scanner</span>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-2">
              <NavItem to="/" label="Dashboard" icon={<LineChart className='w-4 h-4' />} />
              <NavItem to="/screener" label="Market Screener" icon={<Gem className='w-4 h-4' />} />
              <NavItem to="/pricing" label="Pricing" icon={<Gem className='w-4 h-4' />} />
            </nav>

            <div className="flex items-center gap-3">
              <Link to="/login" className="text-blue-200 hover:text-white text-sm font-medium flex items-center gap-2">
                <LogIn className="w-4 h-4" /> Sign in
              </Link>
              <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-2 rounded-lg shadow ring-1 ring-white/20">
                Get Pro
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[340px] relative overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/60 to-slate-900" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28">
          <div className="max-w-2xl">
            <p className="text-cyan-300/90 text-xs font-semibold tracking-widest uppercase">Realtime Pattern Intelligence</p>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Futuristic Technical Analysis Scanner</h1>
            <p className="mt-3 text-blue-200/90">Scan markets for Harmonics, Quasimodo and Wolfe Waves across multiple exchanges and timeframes with confidence scoring.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({ to, label, icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${isActive ? 'text-white bg-white/10' : 'text-blue-200 hover:text-white hover:bg-white/5'}`}
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  )
}
