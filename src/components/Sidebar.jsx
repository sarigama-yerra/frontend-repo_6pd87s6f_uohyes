import { useEffect, useMemo, useState } from 'react'
import { ChevronDown, Filter, Layers3, TimerReset, Building2 } from 'lucide-react'
import mock from '../data/mockData.json'

export default function Sidebar({ onFilterChange }) {
  const exchanges = mock.exchanges
  const timeframes = mock.timeframes
  const allPatterns = mock.patterns

  const [exchange, setExchange] = useState('All')
  const [pair, setPair] = useState('All')
  const [timeframe, setTimeframe] = useState('All')
  const [patterns, setPatterns] = useState(allPatterns)

  const pairsForExchange = useMemo(() => {
    if (exchange === 'All') return mock.pairs
    return mock.pairs.filter(p => p.exchange === exchange)
  }, [exchange])

  useEffect(() => {
    onFilterChange({ exchange, pair, timeframe, patterns })
  }, [exchange, pair, timeframe, patterns])

  const togglePattern = (p) => {
    setPatterns(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p])
  }

  const reset = () => {
    setExchange('All'); setPair('All'); setTimeframe('All'); setPatterns(allPatterns)
  }

  return (
    <aside className="w-full lg:w-80 shrink-0 bg-slate-900/60 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-blue-200">
          <Filter className="w-4 h-4" />
          <span className="text-sm font-semibold">Filters</span>
        </div>
        <button onClick={reset} className="inline-flex items-center gap-1 text-xs text-cyan-300 hover:text-white">
          <TimerReset className="w-4 h-4"/> Reset
        </button>
      </div>

      <Field label="Exchange" icon={<Building2 className='w-4 h-4'/>}>
        <Select value={exchange} onChange={setExchange} options={["All", ...exchanges]} />
      </Field>

      <Field label="Pair" icon={<Layers3 className='w-4 h-4'/>}>
        <Select value={pair} onChange={setPair} options={["All", ...pairsForExchange.map(p=>p.symbol)]} />
      </Field>

      <Field label="Timeframe" icon={<TimerReset className='w-4 h-4'/>}>
        <Select value={timeframe} onChange={setTimeframe} options={["All", ...timeframes]} />
      </Field>

      <div className="mt-3">
        <label className="text-xs font-semibold text-blue-200/80 flex items-center gap-2 mb-2">
          <ChevronDown className="w-4 h-4"/> Pattern Selector
        </label>
        <div className="grid grid-cols-1 gap-2">
          {allPatterns.map(p => (
            <button
              key={p}
              onClick={() => togglePattern(p)}
              className={`text-left px-3 py-2 rounded-lg text-xs border transition ${patterns.includes(p) ? 'bg-cyan-400/10 text-cyan-300 border-cyan-400/30' : 'bg-white/5 text-blue-200/90 border-white/10 hover:bg-white/10'}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}

function Field({ label, icon, children }) {
  return (
    <div className="mt-3">
      <label className="text-xs font-semibold text-blue-200/80 flex items-center gap-2 mb-2">
        {icon} {label}
      </label>
      {children}
    </div>
  )
}

function Select({ value, onChange, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full appearance-none bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
      >
        {options.map(opt => (
          <option key={opt} value={opt} className="bg-slate-900">{opt}</option>
        ))}
      </select>
      <ChevronDown className="w-4 h-4 text-blue-200 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  )
}
