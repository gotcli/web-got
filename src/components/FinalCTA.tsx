import { ArrowRight, Check } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="download" className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 px-6 py-14 text-center shadow-[0_20px_40px_rgba(15,23,42,0.04)] sm:px-12 sm:py-18">
        <p className="text-xs font-bold tracking-[0.18em] text-sky-700 uppercase">Final CTA</p>
        <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-6xl">
          Stop writing boilerplate.
          <span className="mt-2 block">Start building.</span>
        </h2>

        <div className="mt-8 rounded-[1.25rem] border border-slate-200 bg-slate-950 p-4 font-mono text-sm text-sky-300 shadow-inner">
          $ got init
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="/docs/getting-started" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800">
            Get Started
            <ArrowRight size={18} />
          </a>
          <a href="https://github.com/gotcli/got" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 hover:border-slate-300">
            View on GitHub
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm font-medium text-slate-600">
          {['Layered architecture', 'Generated code you own', 'Built for Go teams'].map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <Check size={16} className="text-sky-600" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
