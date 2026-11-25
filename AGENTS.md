# Many-to-Many CRUD

## Stack

- **Language / Runtime**: TypeScript, Node 18+
- **Framework**: Next.js 16 (App Router)
- **Key dependencies**: React, Mongoose, Tailwind CSS, Zod
- **Package manager**: npm

## Build approach

Tracer Bullet (vertical slices each feature built end to end through every layer working)

## Commands

```bash
# Install
npm install

# Dev server
npm run dev

# Build
npm run build

# Test
none configured
```

## Specs

Stored in `docs/specs/`. Format: `docs/specs/NNNN-title.md`.

## Rules

- All writes go through Server Actions ("use server") in `actions/`
- Connect to MongoDB with `connectToDatabase()` in `lib/db.ts`, which caches the connection globally
- Reuse Mongoose models with `models.<Name> || model(...)` to survive Next.js dev reloads
- Validate input with Zod schemas in `lib/validations.ts` before any write
- Validate ObjectIds with `objectIdSchema` before DB writes
- Revalidate affected paths with `revalidatePath` and `redirect` after mutations
- Removing a Student or Course also removes its Enrollment join rows
- Enrollment is the join collection; `{ student, course }` is a compound unique index

## Context files

- [actions/AGENTS.md](actions/AGENTS.md): Server Actions CRUD layer conventions and gotchas
- [models/AGENTS.md](models/AGENTS.md): Mongoose schema conventions and the Next.js dev reload guard

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
