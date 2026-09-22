import { ArrowRight, Check, Layers3, Sparkles } from 'lucide-react'
import { generateCards, generatedTree, sourceLayers } from '../data/got'

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-bold tracking-[0.18em] text-sky-700 uppercase">01 / Generate</p>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-5xl">
            Generate the boring stuff.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {generateCards.map(({ title, command, description }) => (
            <article key={title} className="panel-surface rounded-xl p-6 sm:p-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-sky-700 uppercase">
                <Sparkles size={10} />
                {title}
              </div>

              <code className="mt-6 block rounded-xl border border-slate-200 bg-slate-950 px-3 py-3 font-mono text-xs text-sky-300">
                {command}
              </code>

              <p className="mt-6 text-base leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-8 rounded-xl border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-100 text-sky-700">
                <Layers3 size={18} />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-600">Generated output</p>
            </div>

            <div className="mt-6 rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-300">
              {generatedTree.map((line) => <p key={line}>{line}</p>)}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">{sourceLayers.map((item) => <span key={item} className="rounded-md bg-sky-50 px-2.5 py-1.5 text-xs font-semibold text-sky-700">{item}</span>)}</div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">You write the business logic.</p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              GOT builds the application structure. You implement the business logic.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Check size={16} className="text-sky-600" />
              No GOT runtime required
              <ArrowRight size={16} className="text-slate-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
