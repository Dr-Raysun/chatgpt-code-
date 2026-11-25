# Scope: Many-to-Many CRUD

A learning demo for many-to-many relationships. Students join courses and enrollments track the connection between them. Built for anyone learning CRUD with MongoDB Mongoose and Next.js Server Actions.

**Build approach:** Tracer Bullet (vertical slices each feature built end to end through every layer working)
**Workflow:** Prototype (just /develop nothing after it rely on develop's own build time self check)

_These are recommendations to keep your build orderly, not requirements. Skip anything that does not fit: if you already know how to build a feature, use /develop and skip /architect. You decide when a feature is done._

## At a glance

| # | Feature | Phase | Status |
|---|---------|-------|--------|
| 1 | Student CRUD | existing | existing |
| 2 | Course CRUD | existing | existing |
| 3 | Enrollment CRUD | existing | existing |
| 4 | Mongoose data model & connection | existing | existing |
| 5 | Filter on students & courses list pages | Slice 1 | done |

## Existing

### A. Student CRUD · existing
Create view edit delete students with name and email. code in `actions/student.actions.ts`, `models/Student.ts`, `app/students/page.tsx`

### B. Course CRUD · existing
Create view edit delete courses with title code and description. code in `actions/course.actions.ts`, `models/Course.ts`, `app/courses/page.tsx`

### C. Enrollment CRUD · existing
Create view update status delete enrollments joining students to courses. code in `actions/enrollment.actions.ts`, `models/Enrollment.ts`, `app/enrollments/page.tsx`

### D. Mongoose data model & connection · existing
Three Mongoose models with timestamps and a compound unique index on student course plus a globally cached database connection. code in `models/`, `lib/db.ts`, `lib/validations.ts`

## Slice 1

### 1. Filter on students & courses list pages
Filter the students and courses lists so you can find records without scrolling.

**Done when:** user can filter the students list and courses list and the list updates; empty state renders when nothing matches.

Spec ../specs/0001-filter-students-courses/index.md · code in app/students/page.tsx app/courses/page.tsx actions/student.actions.ts actions/course.actions.ts lib/search.ts components/shared/SearchBox.tsx

- [x] Design it (spec): /architect filter on students & courses list pages
- [x] Build it: /develop filter on students & courses list pages
   - [x] Wire up search param on getStudents/getCourses Server Actions (AC-1, AC-2)
   - [x] Build case insensitive Mongoose match on name/email and title/code (AC-1, AC-2)
   - [x] Escape regex input, read URL query param, render empty state (AC-3, AC-4, AC-5)
   - [x] Apply debounce so the filter triggers as you type (AC-6)

## Legend

The decision box. Every feature carries exactly one, the sub-task whose label ends with (spec). Its wording varies (Design it (spec) normally), so skills locate it by that (spec) suffix, never by an exact label. Every other box is an execution box and /architect never ticks one.

Feature lifecycle: the scope updates as a feature moves; each row is what it shows and who sets it:

| State | Set by | The feature shows |
|---|---|---|
| planned · needs a decision | /scope | one box: Design it (spec): /architect <feature> |
| in-progress (designed) | /architect at spec capture | Design it ticked; spec linked; Build it: /develop <feature> + 2 to 5 milestones; the tier's closing boxes |
| in-progress (building) | /develop | milestone sub-boxes tick one by one; code pointer filled |
| in-progress (verified) | /check verify | Build it + milestones ticked; Verify it ticked |
| done | you when you decide it is | boxes you ran ticked; the tier's last stage is the suggested point to call it done |

Next step = the first unticked box always a command or a tracked milestone.
needs a decision = run /architect first; otherwise straight to /develop. The tag drops once the spec is captured.
Atomic build tasks live in the spec's ## Build plan not here: the scope carries only the milestone rollup.
Status planned → in-progress → done plus existing pre-workflow and dropped de-scoped kept for history.
Approach tag beside a heading e.g. · Facade overrides the project default for that feature; no tag inherits it.
Workflow tier tag beside a heading e.g. · Prototype sets that one feature's rigor above or below the project default; no tag inherits the default.
Workflow header line is the project default what runs after /develop: Prototype = nothing trust develop's own build time self check; Alpha = /check verify; Beta = /check verify then /test; GA = adds /check review then /document.
Pointer line spec <n> · code in <path>: the spec link added by /architect the code path by /develop.

## Deferred
Out of scope for the current build pass, kept so the plan stays honest.
- **Text index on filtered fields**: add a MongoDB text index on name/email/title/code if case insensitive regex scans become slow · from spec 0001 · needs a decision
