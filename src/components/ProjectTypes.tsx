import { Boxes, Container, Package } from 'lucide-react'

const types = [
  { icon: Package, title: 'Standard Service', cmd: 'got init service', text: 'A focused Go/Fiber API foundation for a single service.' },
  { icon: Container, title: 'Microservice', cmd: 'got init service --architecture microservice', text: 'An independently deployed service with health checks, graceful shutdown, HTTP timeouts, and Docker.' },
  { icon: Boxes, title: 'Workspace', cmd: 'got init workspace', text: 'Organize multiple independently focused services in one workspace.' },
]
export default function ProjectTypes() { return <section className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="text-center"><p className="font-bold text-brand">YOUR PROJECT, YOUR SHAPE</p><h2 className="mt-3 text-4xl font-black text-ink sm:text-5xl">Choose your architecture.</h2></div><div className="mt-14 grid gap-5 lg:grid-cols-3">{types.map(({icon:Icon,title,cmd,text}) => <article key={title} className="rounded-3xl border border-slate-200 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><Icon className="text-brand"/><h3 className="mt-5 text-2xl font-black text-ink">{title}</h3><code className="mt-4 block overflow-x-auto rounded-lg bg-slate-950 p-3 text-xs text-blue-300">$ {cmd}</code><p className="mt-5 leading-7">{text}</p></article>)}</div></div></section> }
