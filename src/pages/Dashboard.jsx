import { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import PatternCard from '../components/PatternCard'
import mock from '../data/mockData.json'

export default function Dashboard() {
  const [filters, setFilters] = useState({
    exchange: 'All',
    pair: 'All',
    timeframe: 'All',
    patterns: mock.patterns
  })

  const filtered = useMemo(() => {
    return mock.opportunities.filter(o => {
      const exOk = filters.exchange === 'All' || o.exchange === filters.exchange
      const pairOk = filters.pair === 'All' || o.pair === filters.pair
      const tfOk = filters.timeframe === 'All' || o.timeframe === filters.timeframe
      const patOk = filters.patterns.includes(o.category)
      return exOk && pairOk && tfOk && patOk
    })
  }, [filters])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-24 pb-16">
        <div className="flex flex-col lg:flex-row gap-4">
          <Sidebar onFilterChange={setFilters} />

          <section className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-white text-xl font-semibold">Detected Opportunities</h2>
                <p className="text-blue-200/80 text-sm">{filtered.length} results</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {filtered.map(item => (
                <PatternCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        </div>

        <section className="mt-12">
          <h3 className="text-white font-semibold text-xl mb-3">Membership</h3>
          <p className="text-blue-200/80 text-sm mb-4">Choose a plan to unlock real-time alerts and premium pattern detection.</p>
        </section>
      </main>
    </div>
  )
}
