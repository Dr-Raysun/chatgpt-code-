# Models

## Overview

Mongoose schemas and models for Students, Courses, and Enrollments. Enrollment is the join collection that models the many-to-many relationship between students and courses.

## Key files

| File | Owns |
|---|---|
| models/Course.ts | Course schema: title, unique uppercase code, optional description, timestamps |
| models/Student.ts | Student schema: name, unique lowercase email, timestamps |
| models/Enrollment.ts | Enrollment schema: student and course ObjectId refs, status, enrolledAt, compound unique index on {student, course} |

## Conventions

- Every schema uses `{ timestamps: true }` for createdAt and updatedAt
- Models are reused across dev reloads with `models.<Name> || model(...)`
- Email is stored lowercase and trimmed; course code is stored uppercase and trimmed
- ObjectIds are validated with `objectIdSchema` from `@/lib/validations` before use

## Gotchas

- The `{ student, course }` pair has a compound unique index; creating a duplicate pair throws at the database level
- `enrolledAt` belongs to the relationship, not to either parent document, so it lives on Enrollment

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
