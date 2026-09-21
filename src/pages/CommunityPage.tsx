import { ArrowRight, MessageSquare, Rocket, Users } from 'lucide-react'

const communityLinks = [
  { title: 'Discussions', description: 'Ask questions, share patterns, and exchange deployment notes with other Go developers.', icon: MessageSquare },
  { title: 'Contributors', description: 'See how the project evolves and where to contribute ideas, issues, or improvements.', icon: Users },
  { title: 'Releases', description: 'Follow new features, bug fixes, and the current status of the project lifecycle.', icon: Rocket },
]

export default function CommunityPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-28 sm:px-8 lg:px-8">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
        <Users size={12} className="text-sky-600" />
        Community
      </div>

      <h1 className="text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-5xl">Build with the GOT community.</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        GOT is for developers who want a clear Go API foundation without turning their application into a framework dependency.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {communityLinks.map(({ title, description, icon: Icon }) => (
          <article key={title} className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-[0_16px_32px_rgba(15,23,42,0.04)]">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-100 text-sky-700">
              <Icon size={18} />
            </span>
            <h2 className="mt-5 text-xl font-black tracking-[-0.04em] text-slate-950">{title}</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <a href="https://github.com/gotcli/got" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
          GitHub
          <ArrowRight size={16} />
        </a>
        <a href="/changelog" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800">
          Changelog
        </a>
      </div>
    </main>
  )
}
