# Actions

## Overview

Server Actions that handle all create, read, update, and delete operations for Students, Courses, and Enrollments. Every file in this folder carries `"use server"` and talks to MongoDB through Mongoose.

## Key files

| File | Owns |
|---|---|
| actions/course.actions.ts | Course CRUD: list, get, create, update, delete with join-row cleanup |
| actions/student.actions.ts | Student CRUD: list, get, create, update, delete with join-row cleanup |
| actions/enrollment.actions.ts | Enrollment CRUD: list all, list by student, list by course, create, update status, delete |

## Conventions

- Every action file starts with `"use server"`
- Call `connectToDatabase()` from `@/lib/db` before any database access
- Validate input with Zod schemas from `@/lib/validations` before writes
- Validate ObjectIds with `objectIdSchema` before querying by id
- Use `revalidatePath` after mutations and `redirect` to send the user to the right page
- Deleting a Student or Course also removes its Enrollment join rows so no row points at a missing record
- Reuse compiled Mongoose models with `models.<Name> || model(...)` to avoid overwrite errors during Next.js dev reloads

## Gotchas

- `deleteCourse` and `deleteStudent` cascade to Enrollment; the join rows are removed first, then the parent document
- Next.js can evaluate an action file more than once in development, so the model reuse guard in `models/` prevents Mongoose overwrite errors

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
