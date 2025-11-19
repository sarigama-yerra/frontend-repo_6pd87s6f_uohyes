import Navbar from '../components/Navbar'

export default function Screener() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-24 pb-16">
        <section className="mt-6">
          <div className="max-w-3xl mb-6">
            <h1 className="text-white text-3xl font-bold tracking-tight">Market Screener</h1>
            <p className="text-blue-200/80 mt-2">Overview heatmap and trend metrics coming soon.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-blue-200/70 text-xs">Asset {i+1}</div>
                <div className="text-white font-semibold mt-1">+{(Math.random()*5).toFixed(2)}%</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
