import { ArrowRight, Check, Database, ShieldCheck, Sparkles } from 'lucide-react'
import { authCapabilities, flowSteps, productionFeatures } from '../data/got'

export default function DatabaseToAPI() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-sky-700 uppercase">Database to API</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-5xl">
              Database<br />
              <span className="text-slate-700">↓</span>
              <span className="mx-1 text-sky-700">GOT</span>
              <span className="text-slate-700">↓</span>
              Go API
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              GOT can inspect an existing database schema and turn it into a working service foundation. PostgreSQL and SQL Server are supported today. MySQL supports project generation, but schema introspection is not yet available.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-sky-50 p-5">
              <p className="text-xs font-bold tracking-[0.18em] text-sky-700 uppercase">Supported today</p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm font-medium text-slate-700">
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5">PostgreSQL</span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5">SQL Server</span>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_20px_40px_rgba(15,23,42,0.04)] sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-100 text-sky-700">
                <Database size={18} />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-600">Schema flow</p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              {flowSteps.map(({ icon: Icon, label }, index) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-sky-700 ring-1 ring-slate-200">
                        <Icon size={18} />
                      </span>
                      <span className="text-base font-semibold text-slate-800">{label}</span>
                    </div>
                    {index < flowSteps.length - 1 && <ArrowRight size={18} className="text-slate-400" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-18 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-100 text-violet-700">
                <ShieldCheck size={18} />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-600">Authentication</p>
            </div>

            <div className="mt-6 rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 font-mono text-sm text-slate-700">
              <span className="text-sky-700">$</span> got add auth --jwt
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {authCapabilities.map((capability) => (
                <span key={capability} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700">
                  {capability}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-600">
              GOT adds the JWT infrastructure, middleware, and validation primitives. Login flows, password hashing, user lookup, rotation, and revocation remain application concerns.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-100 text-amber-700">
                <Sparkles size={18} />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-600">Production ready</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {productionFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                  <Check size={15} className="text-sky-600" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
