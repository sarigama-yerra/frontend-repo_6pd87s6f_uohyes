import { TrendingUp, TrendingDown, LineChart } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function PatternCard({ item }) {
  const isBullish = /Bullish|Long/i.test(item.pattern)
  const color = isBullish ? '#22d3ee' : '#f43f5e'

  const data = item.prices.map(p => ({ x: p.t, y: p.c }))

  return (
    <div className="group bg-slate-900/60 border border-white/10 rounded-2xl p-4 hover:border-cyan-400/40 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: color }} />
            <p className="text-xs text-blue-200/80">{item.exchange} • {item.timeframe}</p>
          </div>
          <h3 className="mt-1 text-white font-semibold text-sm">{item.pair}</h3>
        </div>
        <div className="text-right">
          <span className="text-xs text-blue-200/70">Confidence</span>
          <div className="text-lg font-bold" style={{ color }}>{item.confidence}%</div>
        </div>
      </div>

      <div className="h-24">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={`grad-${item.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.6}/>
                <stop offset="100%" stopColor={color} stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="x" hide />
            <YAxis domain={["auto", "auto"]} hide />
            <Tooltip contentStyle={{ background: 'rgba(15,23,42,.9)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 12 }} labelStyle={{ color: '#93c5fd' }} />
            <Area type="monotone" dataKey="y" stroke={color} strokeWidth={2} fill={`url(#grad-${item.id})`} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 text-xs text-blue-200">
          {isBullish ? <TrendingUp className="w-4 h-4 text-cyan-300"/> : <TrendingDown className="w-4 h-4 text-rose-400"/>}
          <span>{item.pattern}</span>
        </div>
        <div className="text-[10px] text-blue-200/70 bg-white/5 border border-white/10 px-2 py-1 rounded-md inline-flex items-center gap-1">
          <LineChart className="w-3 h-3"/> Mini-chart
        </div>
      </div>
    </div>
  )
}
