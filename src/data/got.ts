import type { LucideIcon } from 'lucide-react'
import {
  Braces,
  Database,
  FileCode2,
  FolderKanban,
  KeyRound,
  Layers3,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
  Wrench,
} from 'lucide-react'

export type NavLink = { label: string; href: string; target?: string }

export const navLinks: NavLink[] = [
  { label: 'Landing', href: '/' },
  { label: 'Docs', href: '/docs' },
  { label: 'Community', href: '/community' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'GitHub', href: 'https://github.com/gotcli/got', target: '_blank' },
]

export const techStack = ['Go 1.25', 'Fiber', 'Viper', 'GORM']

export const generateCards = [
  {
    title: 'got init',
    command: 'got init service --architecture standard',
    description: 'Create a clean Go + Fiber project with the structure you need to build from day one.',
  },
  {
    title: 'got api',
    command: 'got api --name users',
    description: 'Generate the API layers you expect: entity, repository, service, handler, and routes.',
  },
  {
    title: 'got generate crud',
    command: 'got generate crud',
    description: 'Generate the boring CRUD foundation so you can focus on the business logic.',
  },
]

export const sourceLayers = ['Entity', 'Repository', 'Service', 'Handler', 'Routes']

export const authCapabilities = [
  'Access token',
  'Refresh token',
  'Bearer middleware',
  'Roles in JWT claims',
  'Issuer validation',
  'Audience validation',
  'Algorithm validation',
  'Expiry validation',
  'Token-type validation',
]

export const productionFeatures = [
  'Structured JSON logging',
  'Request ID',
  'Context propagation',
  'Secret redaction',
  'Bounded result logging',
  'HTTP request body limits',
  'Graceful shutdown',
  'HTTP timeouts',
  'Liveness endpoint',
  'Readiness endpoint',
  'Database readiness',
  'Multi-stage Docker build',
  'Distroless runtime',
]

export const doctorChecks = [
  'GOT',
  'Go',
  'Git',
  'Docker',
  'Project structure',
  'Configuration',
  'Database',
  'JWT',
  'Writable directories',
  'Readiness',
]

export const featureCards: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Braces, title: 'Generate the boring stuff', text: 'Create the service skeleton, routes, and core API layers in one command.' },
  { icon: Database, title: 'Database to API', text: 'Inspect PostgreSQL or SQL Server schemas and turn them into working Go API code.' },
  { icon: Wrench, title: 'Extend existing code', text: 'Add methods to existing Go source without replacing the structure you already own.' },
  { icon: KeyRound, title: 'Auth foundations', text: 'Add JWT primitives and middleware while leaving login, hashing, and token policy to your app.' },
  { icon: ShieldCheck, title: 'Production ready', text: 'Ship with logging, health checks, timeouts, and Docker defaults designed for services.' },
  { icon: FolderKanban, title: 'Project shapes', text: 'Choose a standard API, microservice, or workspace to match your delivery model.' },
]

export const commands = [
  { name: 'Service', command: 'got init service --architecture standard', text: 'Create a Go + Fiber service with a clean baseline architecture.' },
  { name: 'API', command: 'got api --name users', text: 'Generate entity, repository, service, handler, and routes for a feature.' },
  { name: 'Method', command: 'got add method --folder orders --name Approve --http-method PATCH --path /:id/approve', text: 'Modify the relevant source layers in an existing service without a wholesale rewrite.' },
  { name: 'Doctor', command: 'got doctor --project --connect', text: 'Verify project health, dependencies, configuration, and database readiness.' },
]

export const architectureModes = [
  {
    title: 'Standard API',
    command: 'got init service --architecture standard',
    text: 'A single-service Go API designed for a focused application or service boundary.',
    icon: Layers3,
  },
  {
    title: 'Microservice',
    command: 'got init service --architecture microservice',
    text: 'A deployable service with health checks, timeouts, graceful shutdown, and container defaults.',
    icon: TerminalSquare,
  },
  {
    title: 'Workspace',
    command: 'got init workspace',
    text: 'Create a multi-service workspace with independent service boundaries and shared tooling.',
    icon: Workflow,
  },
]

export const layers = [
  { name: 'Route', color: '#dbeafe' },
  { name: 'Handler', color: '#e2e8f0' },
  { name: 'Service', color: '#e0f2fe' },
  { name: 'Repository', color: '#dcfce7' },
  { name: 'Entity / Schema', color: '#fef3c7' },
  { name: 'Database', color: '#fef2f2' },
]

export const flowSteps = [
  { icon: Database, label: 'Database' },
  { icon: Sparkles, label: 'GOT' },
  { icon: FileCode2, label: 'Go API' },
]
