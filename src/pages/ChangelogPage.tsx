import { ArrowRight, Sparkles } from 'lucide-react'

const entries = [
  { version: 'v0.6.0', summary: 'Improved service generation and runtime defaults for clean Go APIs.' },
  { version: 'v0.5.0', summary: 'Added better project health checks and database validation flows.' },
  { version: 'v0.4.0', summary: 'Introduced JWT support and stronger authentication foundation generation.' },
]

export default function ChangelogPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-28 sm:px-8 lg:px-8">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
        <Sparkles size={12} className="text-sky-600" />
        Releases
      </div>

      <h1 className="text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-5xl">Changelog</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        A short history of the feature work and stability improvements shipped for GOT.
      </p>

      <div className="mt-10 space-y-5">
        {entries.map(({ version, summary }) => (
          <article key={version} className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-[0_16px_32px_rgba(15,23,42,0.04)]">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">{version}</span>
              <ArrowRight size={16} className="text-slate-400" />
            </div>
            <p className="mt-3 text-base leading-7 text-slate-600">{summary}</p>
          </article>
        ))}
      </div>
    </main>
  )
}
