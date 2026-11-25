# Verify: filter on students & courses list pages · spec 0001 · updated 2026-11-25
_Steps derived from spec 0001 acceptance criteria. `/check verify` runs these; `/test` can later lock the durable ones._
## UI / manual
- [ ] visit /students → type a student name or email in the search box → list shows only matches → AC-1
- [ ] visit /courses → type a course title or code in the search box → list shows only matches → AC-2
- [ ] filter a list, then refresh the page → filter term stays in the URL and the list stays filtered → AC-3
- [ ] type a term that matches nothing → an empty state message renders instead of a blank list → AC-4
- [ ] type a search term with a regex character such as . or * → results stay correct, no error → AC-5
- [ ] type quickly → the list updates after a short pause, not on every keystroke → AC-6
## Commands
- [ ] npm run build → passes → build green
- [ ] npx tsc --noEmit → passes → typecheck green
## Acceptance-criteria coverage
- AC-1 covered by step 1 · AC-2 covered by step 2 · AC-3 covered by step 3 · AC-4 covered by step 4 · AC-5 covered by step 5 · AC-6 covered by step 6
