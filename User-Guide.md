Build a complete promotional website for **GOT CLI (Go Templatify)**.

The goal is to present GOT as a polished, professional Go developer tool and convert visitors into users.

## Source of Truth

First, read:

`User-Guide.md`

Use it as the source of truth for all GOT features, commands, architecture, database support, configuration, and limitations.

IMPORTANT:

* Do not invent GOT features.
* Do not invent commands or flags.
* Do not claim planned features are currently available.
* If the website content conflicts with `User-Guide.md`, follow `User-Guide.md`.
* Do not use fake testimonials.
* Do not use fake customer/company logos.
* Do not make unsupported performance claims.

---

# Tech Stack

Build with:

* React
* TypeScript
* Vite
* Tailwind CSS
* Lucide React
* Framer Motion

Use reusable components and clean TypeScript.

Suggested structure:

```text id="3qj6xv"
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TerminalDemo.tsx
│   ├── Features.tsx
│   ├── Architecture.tsx
│   ├── DatabaseToAPI.tsx
│   ├── ProjectTypes.tsx
│   ├── CLIShowcase.tsx
│   ├── HowItWorks.tsx
│   ├── PlatformSupport.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
│
├── pages/
│   └── Home.tsx
│
├── data/
│   └── got.ts
│
├── App.tsx
└── main.tsx
```

Do not put the entire landing page into one component.

---

# Visual Direction

Create a bright, premium developer-tool landing page.

The design should feel like a modern commercial developer product.

Style:

* Light theme
* White background
* Very light blue sections
* Soft blue gradients
* Dark navy typography
* Electric blue primary color
* Large rounded cards
* Thin borders
* Soft shadows
* Generous whitespace
* Clean developer-focused typography
* Modern SaaS aesthetic
* Professional rather than playful

Suggested palette:

```text id="jy7snb"
background:       #FFFFFF
background-soft:  #F7FAFF
background-blue:  #EFF6FF

primary:          #0A84FF
primary-hover:    #0070E0

heading:          #0B1930
body:             #475569
muted:            #64748B

border:           #E2E8F0
success:          #22C55E
```

Avoid:

* excessive dark sections
* excessive gradients
* excessive glassmorphism
* generic Bootstrap appearance
* crypto-style design
* admin dashboard appearance
* unnecessary stock photos
* fake company logos

The website should feel like:

**Developer Tool + SaaS Product + Modern Go Ecosystem**

---

# Navbar

Create a sticky translucent white navbar.

Left:

**GOT**
Go Templatify

Navigation:

Product
Features
Architecture
CLI
Docs

Right:

GitHub
Download

Use a strong blue Download button.

On mobile use a clean hamburger menu.

---

# Hero

Use a two-column desktop layout.

LEFT:

Eyebrow:

`GENERAL-PURPOSE GO/FIBER PROJECT GENERATOR`

Main headline:

# Build Go APIs.

# Skip the boilerplate.

Make `Skip the boilerplate.` blue.

Description:

`GOT helps you generate clean, production-ready Go/Fiber projects so you can focus on business logic instead of repetitive project setup.`

Primary button:

`Get Started`

Secondary:

`View Documentation`

Below the buttons show:

Fast
Production Ready
General Purpose
Developer Friendly

RIGHT:

Create a premium terminal component.

Use a real `got init service` command and options verified from `User-Guide.md`.

Animate the terminal output subtly using Framer Motion.

Show GOT generating:

* project structure
* Go module
* database configuration
* route
* handler
* service
* repository
* health checks
* logging
* Docker configuration

Only show steps actually supported by GOT.

Finish with:

```text id="b79zmp"
✓ Project created successfully

Your API is ready.
```

---

# Why GOT

Create a clean centered section.

Heading:

## Start your Go project with a solid foundation.

Explain that GOT is general-purpose and can be used for systems such as:

* Banking
* Healthcare
* E-Commerce
* Government
* Internal Tools
* SaaS

These are use cases only.

Do NOT imply endorsement from companies or organizations.

---

# Core Features

Create responsive feature cards based entirely on `User-Guide.md`.

Important capabilities to highlight if currently supported:

### Generate CRUD

Database schema → working API.

### Multiple Databases

Show the actual database support and status from the User Guide.

Do not imply that CRUD generation works for a database where only project generation is supported.

### JWT Authentication

Show the actual command from the User Guide.

### File Upload

Show the actual command and capabilities.

### Structured Logging

Explain request IDs, HTTP/service/database logs and sensitive-data handling only where documented.

### Flexible Architecture

Standard Service
Microservice
Workspace

Use Lucide icons and subtle pastel icon backgrounds.

---

# Major Selling Point

Create a visually strong section:

# Database → Go API

Visual flow:

```text id="95f34w"
Existing Database

        ↓

Schema Inspection

        ↓

      GOT CLI

        ↓

┌──────────────────┐
│ Entity           │
│ Repository       │
│ Service          │
│ Handler          │
│ Route            │
└──────────────────┘

        ↓

Working REST API
```

Show the real `--generate-crud` command from `User-Guide.md`.

Mention supported databases accurately.

If password handling is documented, include a small security callout explaining the masked password prompt.

This should be one of the most visually prominent sections on the page.

---

# Architecture

Create section:

# A Solid Architecture for Real Projects

Show:

```text id="ryp99z"
Route
  ↓
Handler
  ↓
Service
  ↓
Repository
  ↓
Entity / Schema
  ↓
Database
```

Use different subtle pastel colors for each layer.

Beside the diagram show a realistic generated project tree.

IMPORTANT:

Read `User-Guide.md` and/or generated templates and make the project tree match GOT's actual output.

Do not invent directories.

Add small animations showing data flowing through the layers.

---

# Choose Your Architecture

Create three premium cards.

## Standard Service

Show the real GOT command.

Explain its intended use.

## Microservice

Show the real command.

Highlight only supported capabilities such as:

* health checks
* graceful shutdown
* timeout configuration
* structured logging
* Docker

## Workspace

Show the real command.

Visualize:

```text id="7stntv"
business-platform/

account-service
payment-service
notification-service

go.work
got-workspace.json
compose.yml
Makefile
```

Explain that services are independently buildable/deployable where supported by the User Guide.

---

# CLI Showcase

Create a developer-focused section:

# One CLI. Less repetitive setup.

Build an interactive terminal/tabs component showing real GOT commands.

Extract the available commands directly from `User-Guide.md`.

Examples may include:

```bash id="1wd8cf"
got init service
got init workspace
got api --name users
got add method ...
got add auth --jwt
got add upload
got add service reporting
got version
```

Only include commands that currently exist.

Each command should have:

* syntax
* short description
* copy button

---

# How It Works

Create four steps.

01 — Install

Download the GOT binary for the operating system.

02 — Generate

Run GOT and choose project architecture/database options.

03 — Develop

Implement application-specific business logic.

04 — Run / Deploy

Run locally or use generated Docker support where available.

Use a horizontal timeline on desktop.

Use a vertical timeline on mobile.

---

# Platform Support

Show supported platforms from `User-Guide.md`.

For example, only if supported:

macOS Apple Silicon
macOS Intel
Linux AMD64
Linux ARM64
Windows AMD64

Use platform icons/cards.

---

# CTA

Create a large light-blue gradient CTA near the bottom.

Headline:

# Stop rebuilding the same Go foundation.

Description:

`Generate the foundation. Focus on your business.`

Buttons:

Download GOT
Read the Documentation

Below show concise benefits based on actual GOT capabilities.

---

# Footer

Logo:

GOT
Go Templatify

Tagline:

`Build faster. Go further.`

Links:

Product
Features
Architecture
Docs
CLI
GitHub

Copyright:

`© 2026 GOT`

---

# Animation

Use Framer Motion but keep animation subtle.

Implement:

* hero fade/slide
* terminal typing/output animation
* cards appearing on scroll
* hover elevation
* architecture flow animation
* smooth scrolling
* CTA micro-interactions

Do not over-animate.

---

# Responsive Design

The website must look excellent at:

375px
768px
1024px
1440px+

Hero:

Desktop → two columns
Mobile → text first, terminal second

Feature cards and architecture sections must collapse cleanly.

Terminal must never overflow the screen.

---

# Content Quality

This is a promotional website, so copy should be concise.

Do not copy the entire User Guide onto the landing page.

Transform technical documentation into clear product messaging.

Prioritize these GOT selling points:

1. Fast Go project generation
2. Database → CRUD generation
3. Clean layered architecture
4. Standard / Microservice / Workspace
5. JWT authentication
6. File upload
7. Structured logging
8. Production-oriented defaults

But every claim must still be supported by `User-Guide.md`.

---

# Important UX Rule

A visitor should understand within 5 seconds:

**What is GOT?**

A Go/Fiber project generator.

**Why should I care?**

It removes repetitive backend setup.

**What can it generate?**

A clean, structured Go API foundation.

**How do I try it?**

Run/download GOT and use `got init service`.

---

# Implementation Requirements

After implementation:

1. Run the project.
2. Fix TypeScript errors.
3. Fix ESLint errors where configured.
4. Verify responsive layout.
5. Verify there are no horizontal overflows.
6. Verify navigation links.
7. Verify terminal animations.
8. Verify every GOT command shown against `User-Guide.md`.
9. Remove placeholder content.
10. Remove fake testimonials and fake logos.
11. Ensure production build succeeds.

Run:

```bash id="gmz4x6"
npm run build
```

Fix all errors until the production build passes.

Do not modify GOT CLI source code.

The final result should be a complete, polished promotional website ready for further branding and deployment.


# GOT CLI (Go Templatify)

คู่มือการใช้งานฉบับเต็ม: [Word (.docx)](docs/GOT-User-Guide.docx) · [Word 97-2004 (.doc)](docs/GOT-User-Guide.doc) · [Markdown source](docs/GOT-User-Guide.md)

`got` is a general-purpose Go/Fiber project generator. It is not tied to a specific business domain: the same CLI can bootstrap commerce, banking, healthcare, internal tools, government systems, or any other API-based system.

It generates a consistent foundation so teams can focus on business logic instead of repeatedly setting up project structure, configuration, logging, database access, and deployment files.

## What it generates

- Layered code: route, handler, service, repository, schema, and entity
- Standard JSON responses with `status`, `message`, and `data`
- PostgreSQL, MySQL, or SQL Server configuration
- Executable CRUD from an existing PostgreSQL or SQL Server schema
- Structured JSON logs for HTTP, service, and database operations
- JWT access and refresh token support
- Secure multipart file uploads
- Health checks, graceful shutdown, Docker, and environment configuration
- Single-service projects or multi-service workspaces

## Choose a project type

| Need | Command | Result |
| --- | --- | --- |
| One API application | `got init service` | One Go module and one deployment unit |
| Multiple independent services | `got init workspace` | A root workspace containing multiple Go modules |

Within `got init service`, choose an architecture:

| Architecture | Best for | Generated foundation |
| --- | --- | --- |
| `standard` | Internal APIs, admin systems, modular monoliths, and smaller applications | Layered API, configuration, database, logging, and middleware |
| `microservice` | One independently deployed service | Everything in standard mode plus health endpoints, graceful shutdown, HTTP timeouts, Dockerfile, and `.dockerignore` |

`got init workspace` always creates independently buildable microservices. Each child service owns its module, configuration, database layer, health checks, Dockerfile, and deployment lifecycle.

## Install

Download the binary for your operating system from the authorized [Releases page](https://github.com/gottam-kod/go-template-cli/releases) or from the link supplied by your administrator. You do not need to clone the source code or run `go install`.

| Operating system | CPU | Release file |
| --- | --- | --- |
| macOS | Apple Silicon (`arm64`) | `got-darwin-arm64` |
| macOS | Intel (`x86_64`) | `got-darwin-amd64` |
| Linux | `x86_64` | `got-linux-amd64` |
| Linux | `arm64` | `got-linux-arm64` |
| Windows | `x86_64` | `got-windows-amd64.exe` |

Check the CPU architecture on macOS or Linux:

```sh
uname -m
```

### macOS

```sh
mkdir -p "$HOME/.local/bin"
mv "$HOME/Downloads/got-darwin-arm64" "$HOME/.local/bin/got"
chmod +x "$HOME/.local/bin/got"
echo 'export PATH="$HOME/.local/bin:$PATH"' >> "$HOME/.zshrc"
source "$HOME/.zshrc"
got version
```

Use `got-darwin-amd64` on an Intel Mac. If macOS preserves a quarantine attribute on an authorized internal binary, verify the checksum and then run:

```sh
xattr -d com.apple.quarantine "$HOME/.local/bin/got"
```

### Linux

```sh
mkdir -p "$HOME/.local/bin"
mv "$HOME/Downloads/got-linux-amd64" "$HOME/.local/bin/got"
chmod +x "$HOME/.local/bin/got"
echo 'export PATH="$HOME/.local/bin:$PATH"' >> "$HOME/.profile"
. "$HOME/.profile"
got version
```

Use `got-linux-arm64` on an ARM64 machine.

### Windows PowerShell

```powershell
Rename-Item "$HOME\Downloads\got-windows-amd64.exe" "got.exe"
New-Item -ItemType Directory -Force "$HOME\bin"
Move-Item "$HOME\Downloads\got.exe" "$HOME\bin\got.exe"
$env:Path = "$HOME\bin;$env:Path"
got version
```

Add `%USERPROFILE%\bin` to the user `PATH` to keep `got` available in new terminals.

### Verify the binary

Every release includes `checksums.txt`. Run this command from the download directory and install only a binary reported as `OK`:

```sh
shasum -a 256 -c checksums.txt
```

## Quick start

### Create one service

Run the interactive initializer:

```sh
got init service
```

Or provide all project options:

```sh
got init service \
  --name customer-api \
  --module example.com/customer-api \
  --architecture standard \
  --db pg

cd customer-api
go test ./...
go run .
```

`got init [flags]` remains available as a backward-compatible alias for `got init service [flags]`.

### Create a microservice workspace

The names are examples only. Replace them with services from any business domain:

```sh
got init workspace \
  --name business-platform \
  --module example.com/business-platform \
  --services account,payment,notification \
  --db pg
```

Generated structure:

```text
business-platform/
├── account-service/        # independent Go module
├── payment-service/        # independent Go module
├── notification-service/   # independent Go module
├── go.work
├── got-workspace.json
├── compose.yml
├── Makefile
└── README.md
```

Add another service later from the workspace root:

```sh
cd business-platform
got add service reporting
```

The command creates `reporting-service` and updates `go.work`, `compose.yml`, `Makefile`, and the workspace README.

## Generate CRUD from an existing database

GOT can inspect an existing PostgreSQL or SQL Server schema and generate entity, repository, service, handler, and route layers.

### PostgreSQL

```sh
got init service \
  --name ordering-api \
  --module example.com/ordering-api \
  --architecture microservice \
  --db pg

cd ordering-api
got generate crud
```

The command reads `DB_DRIVER`, `DB_HOST`, `DB_PORT`, `DB_NAME`, and `DB_USERNAME` from the generated `config.yml`. Override a value for one inspection run when needed:

```sh
got generate crud --db-host localhost --db-schema public
```

### SQL Server

```sh
got init service \
  --name billing-api \
  --module example.com/billing-api \
  --architecture microservice \
  --db mssql

cd billing-api
got generate crud --db-host sql.internal --db-schema dbo
```

The password is always read from a masked prompt. It is not accepted as a command-line flag and is never written to the generated project. Schema inspection is read-only.

After generation, set the generated application's prefixed `DB_PASSWORD` environment variable before starting it. For example, `example.com/ordering-api` uses `ORDERING_API_DB_PASSWORD`.

Defaults are `5432` and `public` for PostgreSQL, and `1433` and `dbo` for SQL Server. CRUD generation currently requires each table to have one integer primary key.

### Database support

| Capability | Status |
| --- | --- |
| PostgreSQL project generation and schema CRUD | Stable |
| MySQL project generation | Beta |
| SQL Server project generation and schema CRUD | Beta |
| Oracle and MongoDB | Planned as optional packages; not included in the core CLI |

MySQL can generate a project, but `got generate crud` currently supports only PostgreSQL and SQL Server. The combined `got init service --generate-crud` workflow remains available for backward compatibility.

## Extend a generated project

Run extension commands inside a generated service directory.

### Generate an API feature

```sh
got api --name users
```

This creates entity, schema, repository, service, handler, and route files. API names use lowercase `snake_case`. Existing files are not overwritten. Repository operations are intentionally left for the application's business requirements; use `got generate crud` when executable CRUD should be generated from the configured database.

### Add a method

```sh
got add method \
  --folder orders \
  --name Approve \
  --http-method PATCH \
  --path /:id/approve
```

The command updates the repository, service, handler, and route using Go's syntax tree. If `orders` does not exist, GOT first scaffolds those four layers. The default HTTP method is `POST`, and the default path is the kebab-case method name: `PublishOrder` becomes `/publish-order`.

New repository methods contain a deliberate `TODO` panic until their database operation is implemented.

### Add JWT authentication

```sh
got add auth --jwt
```

This generates JWT access/refresh token management and Fiber bearer middleware. Access and refresh secrets must be different random values of at least 32 bytes and supplied through environment variables.

Generated projects prefix variables with the final module name. For example:

```sh
export ORDERING_API_JWT_ACCESS_SECRET="replace-with-a-secure-random-value"
export ORDERING_API_JWT_REFRESH_SECRET="replace-with-another-secure-random-value"
```

Login, password verification, and user lookup remain application-specific.

### Add file upload

```sh
got add upload
curl -F "file=@document.pdf" http://127.0.0.1:3000/api/uploads
```

The generated `POST /api/uploads` endpoint expects multipart field `file`. It uses random stored names, removes client path components, validates extension and content type, and stores files through an interface that can later be replaced by S3 or MinIO.

Configure `UPLOAD_DIR`, `UPLOAD_MAX_SIZE`, and `UPLOAD_ALLOWED_EXTENSIONS` using the generated project's environment prefix. Defaults allow `.jpg`, `.jpeg`, `.png`, and `.pdf`, with a 10 MiB file limit and a 12 MiB HTTP body limit.

### Add Swagger UI and OpenAPI

```sh
got add swagger
go run .
```

Open `http://127.0.0.1:3000/swagger/index.html`. The OpenAPI 3.0 specification is available at `http://127.0.0.1:3000/swagger/openapi.json` and stored in `docs/openapi.json` for review and extension.

The specification is embedded in the compiled binary, so it does not require a separate file at runtime. Swagger UI assets are loaded from jsDelivr and require browser network access. Set the generated project's prefixed `SWAGGER_ENABLED=false` environment variable to disable it. Swagger routes are always disabled when `APP_ENV=production`.

The specification endpoint discovers registered Fiber paths and HTTP methods at runtime, including routes added later by `got api` and `got add method`. Path parameters such as `:id` become OpenAPI parameters automatically. Generated operations use the common response envelope; add business-specific request/response schemas and descriptions to `docs/openapi.json` as the API evolves.

## Generated runtime conventions

### HTTP responses

Endpoints and the global error handler use one envelope. `status` is the real HTTP status code, while `message` defaults to the standard English status text from Go's `net/http` package.

```json
{
  "status": 200,
  "message": "OK",
  "data": {}
}
```

Typical values include `200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, and `500 Internal Server Error`. Delete operations return `200` with `data: null`; an HTTP `204` response cannot include a JSON body.

### Structured logs for Elastic

Generated services write newline-delimited JSON to stdout and `LOG_DIR/application.log`, which defaults to `logs/application.log`. Follow a request by `request_id` through:

- `http.inbound`: method, path, client IP, and request ID
- `database`: duration, affected rows, slow-query state, and error
- `service`: service, operation, duration, error, and sanitized `result_data`
- `http.outbound`: status, path, request ID, and total duration

Request bodies, authorization headers, and database credentials are not logged. Fields containing password, secret, token, authorization, or cookie are redacted. Results larger than 64 KiB are replaced with a size summary. Incoming `X-Request-ID` values are preserved; otherwise middleware creates one and returns it in the response header.

The GORM adapter does not log SQL text or bound parameters. `DB_SLOW_QUERY_THRESHOLD` controls slow-query warnings and defaults to `200ms`.

Example Filebeat input:

```yaml
filebeat.inputs:
  - type: filestream
    id: got-service-json
    paths:
      - /path/to/service/logs/application.log
    parsers:
      - ndjson:
          target: ""
          add_error_key: true
```

Use Filebeat or the deployment platform to manage rotation and retention. Generated projects ignore `logs/` in Git.

## Diagnose the environment

Check the local toolchain without contacting external systems:

```sh
got doctor
```

From a generated service or workspace root, validate project files, configuration, required secrets, and writable runtime directories:

```sh
got doctor --project
```

External checks are opt-in. This checks Go module DNS, the configured database TCP endpoint, and the local readiness endpoint with short timeouts:

```sh
got doctor --project --connect
```

Use JSON output in CI:

```sh
got doctor --project --json
```

Warnings do not fail the command. One or more `FAIL` results produce a non-zero exit code. Secret values are never printed.

## Command reference

```text
got init service [flags]       Create one standard API or microservice
got init workspace [flags]     Create a multi-service workspace
got init [flags]               Backward-compatible service shorthand
got generate crud [flags]      Generate CRUD from the current project's database
got api --name <feature>       Generate a layered API feature
got add method [flags]         Add a method across feature layers
got add auth --jwt             Add JWT access and refresh tokens
got add upload                 Add a multipart upload endpoint
got add swagger                Add OpenAPI 3.0 and Swagger UI
got add service <name>         Add a service to a workspace
got doctor [flags]             Check the environment or generated project
got version                    Print the installed version
got completion <shell>         Generate shell completion
```

Service initialization flags:

```text
-n, --name string          Destination directory name
-m, --module string        Go module import path
-a, --architecture string  standard or microservice
-d, --db string            pg, mysql, or mssql
    --generate-crud        Inspect the database and generate executable CRUD
    --db-host string       Database host
    --db-port uint16       Database port
    --db-name string       Database name
    --db-user string       Database username
    --db-schema string     Database schema
```

Workspace initialization flags:

```text
-n, --name string       Workspace directory name
-m, --module string     Module prefix for child services
    --services string   Comma-separated service names
-d, --db string         pg, mysql, or mssql
```

Project CRUD generation flags:

```text
    --db-host string       Override the configured database host
    --db-port uint16       Override the configured database port
    --db-name string       Override the configured database name
    --db-user string       Override the configured database username
    --db-schema string     Schema (default: public for pg, dbo for mssql)
```

Get the authoritative help for the installed version:

```sh
got --help
got init service --help
got init workspace --help
got generate crud --help
got add method --help
got add swagger --help
got doctor --help
```

## Developing this CLI

Requirements:

- Go 1.22 or newer
- Internet access for the initial dependency download

Common commands:

```sh
make fmt       # format source
make test      # run tests
make vet       # run static checks
make build     # build ./bin/got
make check     # run format check, tests, and vet
```

Every push to `main` builds Linux, macOS, and Windows development binaries. They are available from the GitHub Actions workflow run under **Artifacts** for 14 days.

Build with an embedded version:

```sh
go build -ldflags "-X main.version=v1.0.0" -o bin/got .
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the source structure and template-development workflow.

## License

See [LICENSE](LICENSE).
