import { Check, Zap, Crown } from 'lucide-react'
import { useState } from 'react'

export default function PricingTable() {
  const [billing, setBilling] = useState('monthly')

  const tiers = [
    {
      name: 'Free',
      price: { monthly: 0, yearly: 0 },
      tagline: 'Kickstart your scanning',
      features: [
        '10 scans/day',
        'Basic patterns',
        'Community support'
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Pro',
      price: { monthly: 19, yearly: 190 },
      tagline: 'Serious trading edge',
      features: [
        'Unlimited scans',
        'All patterns',
        'Smart alerts',
        'Export to TradingView'
      ],
      cta: 'Upgrade to Pro',
      highlighted: true
    },
    {
      name: 'Whale',
      price: { monthly: 79, yearly: 790 },
      tagline: 'Institutional-grade',
      features: [
        'Priority servers',
        'Custom pattern builder',
        'Team seats (5)',
        'Dedicated success manager'
      ],
      cta: 'Talk to Sales',
      highlighted: false
    }
  ]

  return (
    <section className="relative">
      <div className="flex items-center justify-center mb-6">
        <div className="bg-white/5 border border-white/10 rounded-full p-1 inline-flex items-center gap-2">
          <ToggleOption label="Monthly" value="monthly" active={billing==='monthly'} onClick={()=>setBilling('monthly')}/>
          <ToggleOption label="Yearly" value="yearly" active={billing==='yearly'} onClick={()=>setBilling('yearly')}/>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.name} className={`relative rounded-2xl p-6 border ${tier.highlighted ? 'bg-gradient-to-b from-cyan-500/10 to-blue-500/10 border-cyan-400/40' : 'bg-white/5 border-white/10'}`}>
            {tier.highlighted && (
              <div className="absolute -top-3 right-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 text-xs font-bold px-2 py-1 rounded-md shadow">
                Best Value
              </div>
            )}
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold text-lg">{tier.name}</h3>
              {tier.name === 'Pro' ? <Zap className="w-5 h-5 text-cyan-300"/> : tier.name === 'Whale' ? <Crown className="w-5 h-5 text-yellow-300"/> : null}
            </div>
            <p className="text-blue-200/80 text-sm mt-1">{tier.tagline}</p>
            <div className="mt-4">
              <span className="text-3xl font-bold text-white">{tier.price[billing] === 0 ? 'Free' : `$${tier.price[billing]}`}</span>
              {tier.price[billing] !== 0 && <span className="text-blue-200/70 text-sm"> / {billing}</span>}
            </div>
            <ul className="mt-4 space-y-2">
              {tier.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-blue-100 text-sm">
                  <Check className="w-4 h-4 text-cyan-300"/> {f}
                </li>
              ))}
            </ul>
            <button className={`mt-5 w-full text-sm font-semibold px-3 py-2 rounded-lg ${tier.highlighted ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900' : 'bg-white/10 text-white hover:bg-white/15'}`}>
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

function ToggleOption({ label, active, onClick }) {
  return (
    <button onClick={onClick} className={`px-3 py-1 text-xs rounded-full transition ${active ? 'bg-white text-slate-900 font-semibold' : 'text-blue-200 hover:text-white'}`}>
      {label}
    </button>
  )
}
