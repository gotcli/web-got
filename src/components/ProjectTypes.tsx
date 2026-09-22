import { Boxes, Container, Package } from 'lucide-react'

const types = [
  { icon: Package, title: 'Standard', cmd: 'got init service --architecture standard', text: 'A layered API foundation for internal APIs, admin systems, modular monoliths, and smaller applications.' },
  { icon: Container, title: 'Microservice', cmd: 'got init service --architecture microservice', text: 'One independently deployed service with health endpoints, graceful shutdown, HTTP timeouts, and Docker.' },
  { icon: Boxes, title: 'Workspace', cmd: 'got init workspace --services account,payment,notification', text: 'Multiple independently buildable Go services with their own modules and deployment lifecycle.' },
]
export default function ProjectTypes() { return <section className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div><p className="font-mono text-xs font-bold tracking-[0.18em] text-sky-700 uppercase">08 / Start</p><h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-ink sm:text-5xl">Three ways to start.</h2></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{types.map(({icon:Icon,title,cmd,text}) => <article key={title} className="rounded-xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"><Icon className="text-brand"/><h3 className="mt-5 text-2xl font-black text-ink">{title}</h3><code className="mt-4 block overflow-x-auto rounded-lg bg-slate-950 p-3 text-xs text-blue-300">$ {cmd}</code><p className="mt-5 leading-7 text-slate-600">{text}</p></article>)}</div></div></section> }
