import { Braces, Database, FileUp, KeyRound, Layers3, ScrollText } from 'lucide-react'

export const features = [
  { icon: Braces, title: 'CRUD foundation', text: 'Turn schema-informed setup into a clean, layered API foundation.' },
  { icon: Database, title: 'Database-ready', text: 'Choose database options during generation and keep data access behind repositories.' },
  { icon: KeyRound, title: 'JWT authentication', text: 'Add an authentication foundation without rebuilding the surrounding project structure.' },
  { icon: FileUp, title: 'File upload', text: 'Generate the foundation for handling uploads inside the same project architecture.' },
  { icon: ScrollText, title: 'Structured logging', text: 'Start with logging designed for the HTTP, service, and data layers.' },
  { icon: Layers3, title: 'Flexible architecture', text: 'Start a standard service, a microservice, or organize multiple services in a workspace.' },
]

export const commands = [
  { name: 'Service', command: 'got init service', text: 'Create a new Go/Fiber service through a guided setup.' },
  { name: 'Workspace', command: 'got init workspace', text: 'Create a workspace foundation for multiple services.' },
  { name: 'CRUD', command: 'got generate crud', text: 'Generate executable CRUD from PostgreSQL or SQL Server.' },
  { name: 'API', command: 'got api --name users', text: 'Scaffold entity, schema, repository, service, handler, and route files.' },
  { name: 'Method', command: 'got add method --folder orders --name Approve --http-method PATCH --path /:id/approve', text: 'Add a method across an existing feature’s layers.' },
  { name: 'JWT', command: 'got add auth --jwt', text: 'Add JWT access and refresh token management with Fiber middleware.' },
  { name: 'Upload', command: 'got add upload', text: 'Add a secure multipart file upload endpoint.' },
  { name: 'Swagger', command: 'got add swagger', text: 'Add OpenAPI 3.0 documentation and Swagger UI.' },
  { name: 'Add service', command: 'got add service reporting', text: 'Add another independently buildable service to a workspace.' },
  { name: 'Doctor', command: 'got doctor --project', text: 'Validate generated project files, configuration, secrets, and runtime directories.' },
  { name: 'Version', command: 'got version', text: 'Display the installed GOT version.' },
  { name: 'Completion', command: 'got completion zsh', text: 'Generate shell completion for your preferred shell.' },
]

export const layers = [
  { name: 'Route', color: '#dbeafe' },
  { name: 'Handler', color: '#e0e7ff' },
  { name: 'Service', color: '#ede9fe' },
  { name: 'Repository', color: '#dcfce7' },
  { name: 'Entity / Schema', color: '#fef3c7' },
  { name: 'Database', color: '#ffe4e6' },
]
