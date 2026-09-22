import { ArrowDown, ArrowRight } from 'lucide-react'
import { architectureModes, layers } from '../data/got'

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-bold tracking-[0.18em] text-sky-700 uppercase">07 / Structure</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-5xl">
            Explicit architecture. Ordinary Go.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-slate-500">Request path</p>
            <div className="mt-6 space-y-2">{layers.map(({ name, color }, index) => <div key={name} className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-md font-mono text-xs text-slate-600" style={{ backgroundColor: color }}>0{index + 1}</span><span className="font-semibold text-slate-800">{name}</span>{index < layers.length - 1 && <ArrowDown className="ml-auto text-slate-300" size={16} />}</div>)}</div>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
          {architectureModes.map(({ title, command, text, icon: Icon }) => (
            <article key={title} className="panel-surface rounded-xl p-6">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-sky-100 text-sky-700 ring-1 ring-sky-200">
                <Icon size={20} />
              </span>

              <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-slate-950">{title}</h3>
              <code className="mt-5 block rounded-xl border border-slate-200 bg-slate-950 p-3 font-mono text-xs text-sky-300">
                {command}
              </code>
              <p className="mt-5 text-base leading-7 text-slate-600">{text}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                Explore
                <ArrowRight size={16} />
              </div>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
