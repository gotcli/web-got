import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

const roadmap = [
  'Expand supported database introspection coverage',
  'Improve CLI ergonomics and generated project defaults',
  'Increase architecture support for service-specific conventions',
  'Strengthen operational tooling and project health checks',
]

export default function RoadmapPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-28 sm:px-8 lg:px-8">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
        Roadmap
      </div>

      <h1 className="text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-5xl">What is coming next.</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        The roadmap focuses on improving the quality of generated Go applications, developer workflows, and operational readiness.
      </p>

      <div className="mt-10 space-y-4 rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-[0_16px_32px_rgba(15,23,42,0.04)]">
        {roadmap.map((item, index) => (
          <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <span className="mt-1 grid h-6 w-6 place-items-center rounded-full bg-sky-100 text-sky-700">
              <CheckCircle2 size={14} />
            </span>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Phase {index + 1}</div>
              <p className="mt-1 text-base font-medium text-slate-800">{item}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800">
        See the latest updates
        <ArrowUpRight size={16} />
      </div>
    </main>
  )
}
