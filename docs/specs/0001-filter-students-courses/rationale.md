# 0001. Filter on students and courses list pages — rationale

## Context

The app already lists every student and every course on separate pages, with no way to narrow the list. As data grows, scrolling every record becomes slow and frustrating. The existing stack is Next.js 16 App Router, React, TypeScript, Mongoose for MongoDB, Tailwind CSS, and Zod, with all writes through Server Actions in the actions folder. Reads already go through getStudents and getCourses Server Actions that return every record sorted by createdAt. No schema change is needed because filtering matches fields that already exist. The project runs at Prototype workflow depth, so the build keeps to the thinnest working thread and defers polish.

## Options considered

### Option 1: Server side filtering in Mongoose queries

The Server Action receives a search term and adds a Mongoose $or regex match on the relevant fields before returning records.

Pros:
- The database returns only matching records so pages stay fast as data grows
- No need to load every record into the browser
- Follows the existing Server Actions pattern

Cons:
- Requires a small query change and regex escaping on the server

### Option 2: Client side filtering in React after loading all records

The page fetches every record once then filters them in the browser as the user types.

Pros:
- No change to Server Actions or database queries
- Instant filtering after the first load

Cons:
- Loads every record into the browser even when only one matches
- Pages get slower as data grows
- The filter state cannot be shared through the URL

## Rationale

The existing stack already reads through Server Actions and returns every record, so extending those actions with a search param is the smallest change that works end to end. Server side filtering keeps the browser from loading every record and lets the filter live in the URL. Client side filtering would load everything and could not be shared by link. This matches the Tracer Bullet build approach: one thin working thread through the UI, the action, and the database.
