import { ArrowRight, BookOpen, Code2, Layers3 } from 'lucide-react'

const docSections = {
  '/docs/getting-started': {
    heading: 'Getting Started',
    intro: 'Install GOT, initialize a service, and start shipping normal Go APIs in minutes.',
    bullets: [
      { title: 'Install GOT', description: 'Download the binary for your platform and verify the CLI is available in your shell.' },
      { title: 'Initialize a service', description: 'Run got init service --architecture standard to create a working Go + Fiber service.' },
      { title: 'Start coding', description: 'Add business logic and keep the generated source cleanly owned by your team.' },
    ],
  },
  '/docs/commands': {
    heading: 'Commands',
    intro: 'The GOT CLI focuses on project generation, source mutation, and operational validation.',
    bullets: [
      { title: 'got init', description: 'Create a standard API, microservice, or workspace project.' },
      { title: 'got api', description: 'Generate entity, repository, service, handler, and route layers for a feature.' },
      { title: 'got add method', description: 'Apply a method to the relevant source boundaries without replacing the full structure.' },
      { title: 'got doctor', description: 'Validate configuration, project health, database readiness, and runtime assumptions.' },
    ],
  },
  '/docs/architecture': {
    heading: 'Architecture',
    intro: 'GOT generates conventional Go project structure so your app stays understandable and buildable.',
    bullets: [
      { title: 'Standard API', description: 'A single-service architecture for focused applications and internal APIs.' },
      { title: 'Microservice', description: 'A deployable service with readiness, timeouts, graceful shutdown, and Docker defaults.' },
      { title: 'Workspace', description: 'Multi-service coordination for teams that want multiple independent services in one repo.' },
    ],
  },
} as const

type DocsRoute = keyof typeof docSections

export default function DocsPage({ path }: { path: string }) {
  const route = (path in docSections ? path : '/docs/getting-started') as DocsRoute
  const page = docSections[route]

  return (
    <main className="mx-auto max-w-6xl px-5 py-28 sm:px-8 lg:px-8">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
        <BookOpen size={12} className="text-sky-600" />
        Documentation
      </div>

      <h1 className="text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-5xl">{page.heading}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{page.intro}</p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {page.bullets.map(({ title, description }, index) => {
          const Icon = [Code2, Layers3, ArrowRight][index % 3]
          return (
            <article key={title} className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-[0_16px_32px_rgba(15,23,42,0.04)]">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-100 text-sky-700">
                <Icon size={18} />
              </span>
              <h2 className="mt-5 text-xl font-black tracking-[-0.04em] text-slate-950">{title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
            </article>
          )
        })}
      </div>

      <div className="mt-12 rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-slate-200 shadow-[0_16px_32px_rgba(15,23,42,0.08)]">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">Example</p>
        <code className="mt-4 block font-mono text-sm text-sky-300">
          $ got init service --architecture standard
        </code>
      </div>
    </main>
  )
}
