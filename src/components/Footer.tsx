export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <div className="text-lg font-black tracking-[-0.06em] text-slate-950">GOT</div>
          <p className="mt-1 text-sm text-slate-600">Build Go APIs. Own the Code.</p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm font-medium text-slate-600">
          <a href="/" className="hover:text-slate-950">Landing</a>
          <a href="/docs" className="hover:text-slate-950">Docs</a>
          <a href="/community" className="hover:text-slate-950">Community</a>
          <a href="/roadmap" className="hover:text-slate-950">Roadmap</a>
          <a href="https://github.com/gotcli/got" target="_blank" rel="noreferrer" className="hover:text-slate-950">GitHub</a>
        </div>

        <p className="text-sm text-slate-500">© 2026 GOT</p>
      </div>
    </footer>
  )
}
