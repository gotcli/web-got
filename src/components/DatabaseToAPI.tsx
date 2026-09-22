import { ArrowDown, Check, Database, ShieldCheck, Sparkles } from 'lucide-react'
import { authCapabilities, microserviceFeatures, productionFeatures } from '../data/got'

export default function DatabaseToAPI() {
  return (
    <section id="introspect" className="relative border-y border-slate-200 bg-[#f0f6fb] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.18em] text-sky-700 uppercase">02 / Introspect</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-5xl">
              Your database<br />
              <span className="text-sky-700">already knows the model.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              GOT reads an existing PostgreSQL or SQL Server schema and generates entity, repository, service, handler, and route layers. MySQL can generate a project, but schema introspection is not available yet.
            </p>

            <div className="mt-8 grid gap-2 font-mono text-xs">
              {['PostgreSQL schema CRUD  ✓ stable', 'SQL Server schema CRUD ✓ beta', 'MySQL project generation ✓ beta', 'MySQL schema introspection — not yet'].map((item) => <div key={item} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-700">{item}</div>)}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_16px_32px_rgba(15,23,42,0.04)] sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-100 text-sky-700">
                <Database size={18} />
              </span>
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-slate-600">Schema flow</p>
            </div>

            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 font-mono text-sm text-slate-700">
              <p className="font-bold text-slate-950">users</p>
              <p>├── id bigint PK</p><p>├── email varchar</p><p>├── status varchar</p><p>└── created_at timestamp</p>
              <ArrowDown className="my-4 text-sky-600" size={18} />
              <p className="text-sky-700">Schema introspection → GOT → generated Go API</p>
            </div>
            <div className="mt-5 rounded-xl bg-slate-950 p-4 font-mono text-sm text-sky-300"><span className="text-white">$</span> got generate crud</div>
            <div className="mt-5 flex flex-wrap gap-2">{['Entity', 'Repository', 'Service', 'Handler', 'Routes'].map((item) => <span key={item} className="rounded-md bg-sky-50 px-2.5 py-1.5 text-xs font-semibold text-sky-700">{item}</span>)}</div>
            <div className="mt-5 grid gap-2 text-xs font-mono text-slate-600 sm:grid-cols-2">{['GET /users', 'GET /users/:id', 'POST /users', 'PUT /users/:id', 'DELETE /users/:id'].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div id="secure" className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-100 text-violet-700">
                <ShieldCheck size={18} />
              </span>
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-slate-600">04 / Secure</p>
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
              GOT adds JWT infrastructure and Fiber bearer middleware. Your application still owns login, password hashing, user lookup, token rotation, and revocation.
            </p>
          </div>

          <div id="operate" className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-100 text-amber-700">
                <Sparkles size={18} />
              </span>
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-slate-600">05 / Operate</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {productionFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                  <Check size={15} className="text-sky-600" />
                  {feature}
                </div>
              ))}
            </div>
            <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Microservice additions</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">{microserviceFeatures.map((feature) => <div key={feature} className="flex items-center gap-2 text-sm text-slate-700"><Check size={15} className="text-emerald-600" />{feature}</div>)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
