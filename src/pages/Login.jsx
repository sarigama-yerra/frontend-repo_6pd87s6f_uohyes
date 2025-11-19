import Navbar from '../components/Navbar'

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-24 pb-16">
        <section className="mt-6 max-w-md">
          <h1 className="text-white text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-blue-200/80 mt-2">Sign in to manage alerts and preferences.</p>

          <form className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6">
            <div>
              <label className="block text-sm text-blue-200/80">Email</label>
              <input type="email" className="mt-1 w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white focus:ring-2 focus:ring-cyan-400/40 outline-none" placeholder="you@example.com" />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-blue-200/80">Password</label>
              <input type="password" className="mt-1 w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white focus:ring-2 focus:ring-cyan-400/40 outline-none" placeholder="••••••••" />
            </div>
            <button className="mt-6 w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold px-3 py-2 rounded-lg">Sign in</button>
          </form>
        </section>
      </main>
    </div>
  )
}
