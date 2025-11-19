import Navbar from '../components/Navbar'
import PricingTable from '../components/PricingTable'

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-24 pb-16">
        <section className="mt-6">
          <div className="max-w-3xl mb-6">
            <h1 className="text-white text-3xl font-bold tracking-tight">Simple, transparent pricing</h1>
            <p className="text-blue-200/80 mt-2">Scale from hobbyist to institutional without switching tools.</p>
          </div>

          <PricingTable />
        </section>
      </main>
    </div>
  )
}
