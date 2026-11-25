# 0001. Filter on students and courses list pages

**Date**: 2026-11-25
**Status**: Accepted

## Summary

This spec adds filtering to the students and courses list pages so a person can find records without scrolling. The user types a search term and the list updates as they type, showing only matches for student name or email, and course title or code. Filtering runs on the server in Mongoose queries and the current filter shows in the page URL as a query param so the filtered list can be bookmarked and shared.

## Requirements

User stories:
- As a visitor, I want to filter the students list by name or email so I can find a student without scrolling.
- As a visitor, I want to filter the courses list by title or code so I can find a course without scrolling.

Acceptance criteria:
- **AC-1**: typing a search term into the students list updates the list to show only students whose name or email contains the term, case insensitive
- **AC-2**: typing a search term into the courses list updates the list to show only courses whose title or code contains the term, case insensitive
- **AC-3**: the current filter term appears in the page URL as a query param so the filtered list is bookmarkable and shareable
- **AC-4**: when no record matches the filter, an empty state message renders instead of a blank list
- **AC-5**: special regex characters in the user's input, such as . or *, are escaped so they cannot break the match or return wrong results
- **AC-6**: the filter applies as the user types with a short debounce rather than waiting for a submit

## Decision

Chosen option: Option 1 Server side filtering in Mongoose queries.

Add an optional search term param to getStudents and getCourses. The actions build a case insensitive $or match on name and email for students, and title and code for courses. The filter term is read from the page URL query param and reflected back so the filtered list is bookmarkable. User input is regex escaped before building the query.

**Implementation skills**: none

## Rationale

Reasoning and options: see rationale.md.

## Feature design

Data model sketch:
- No schema change. Filtering matches existing Student fields name and email, and existing Course fields title and code.

State transitions: not applicable

API surface:
| Action | Method | Key inputs | Key outputs | Auth | Key errors |
|---|---|---|---|---|---|
| getStudents | Server Action | optional search term string | filtered student list | none | database error |
| getCourses | Server Action | optional search term string | filtered course list | none | database error |

Value sourcing:
| Action | Value produced / displayed | Source |
|---|---|---|
| getStudents | filtered student list | DB column name or email matched against the search input param |
| getCourses | filtered course list | DB column title or code matched against the search input param |
| pages | current filter term shown in UI | URL query param read on server render |

Key invariants:
- An empty or missing search term returns every record unchanged
- Matching is case insensitive so abc and ABC return the same results

Security model:
- No auth or authorization. Filtering is open to anyone who can view the student and course lists. No regulated data is exposed beyond what the list pages already show.

Configuration required:
- None. No new env vars or credentials are needed.

Critical test scenarios:
- Happy path: type a search term and the list updates to show only matches, verifies AC-1 and AC-2
- Empty state: type a term that matches nothing and an empty state message renders, verifies AC-4
- Regex safety: type a term with a special regex character such as . or * and results remain correct, verifies AC-5

## Build plan

1. Add an optional search term param to getStudents and getCourses Server Actions, satisfies AC-1 and AC-2
2. Build a case insensitive Mongoose $or regex match on name and email for students, satisfies AC-1
3. Build a case insensitive Mongoose $or regex match on title and code for courses, satisfies AC-2
4. Escape special regex characters in user input before building the query, satisfies AC-5
5. Read the filter term from the URL query param and reflect it in the UI, satisfies AC-3
6. Render an empty state message when no record matches, satisfies AC-4
7. Apply debounce so the filter triggers as the user types, satisfies AC-6

## Migration plan

Strategy: no migration needed
Phases:
1. No schema change so no migration runs
Rollback: revert the Server Action and page changes in one commit
Risks: none beyond a UI regression on the list pages

## Consequences

Positive:
- Users can find records without scrolling as data grows
- Filtered lists are bookmarkable and shareable through the URL
- Pages load only matching records, staying fast

Negative / tradeoffs:
- Regex escaping adds a small server-side step
- Case insensitive regex cannot use a standard index efficiently, so very large collections may need a text index later

Neutral:
- No schema change and no new dependencies
- The existing list page layout is reused, only filtered

## Follow-up

- [ ] Consider a MongoDB text index on the filtered fields if collections grow large enough that case insensitive regex scans become slow
