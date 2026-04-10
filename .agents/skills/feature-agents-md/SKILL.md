---
name: feature-agents-md
description: >-
  Create or update AGENTS.md inside feature folders of this project (e.g.
  src/modules/auth/, src/components/auth/, src/components/ui/). Use this skill
  whenever you create a new feature folder, add or remove files from an existing
  feature folder, refactor a feature, or are asked to document a folder. Also
  use it when finishing any task that touches files inside src/modules/**,
  src/components/**, src/hooks/**, src/lib/**, or any other src/* feature
  directory — if the folder lacks an AGENTS.md or the existing one is stale,
  update it before marking the task done.
user-invocable: true
---

# Feature AGENTS.md Skill

## Purpose

Every feature folder in `src/` should have a scoped `AGENTS.md` that tells
future agents exactly what the folder owns, what the files do, and which
patterns to follow — without repeating what the parent files already say.

Scoped files **override** the parent for their directory. Keep them short and
pointed; say only what is different or specific to this folder.

---

## When to create vs. update

| Situation | Action |
|-----------|--------|
| New feature folder with ≥ 2 files | **Create** AGENTS.md in that folder |
| Files added / removed from an existing feature | **Update** the filemap section |
| Folder refactored or patterns changed | **Update** patterns / golden-samples |
| Folder already has an up-to-date AGENTS.md | No action needed |

After creating a scoped AGENTS.md, also add it to the **Scoped AGENTS.md** index
in `src/AGENTS.md` (the `<!-- AGENTS-GENERATED:START scope-index -->` block) and
in the root `AGENTS.md` if the folder is a major subsystem.

---

## Template

Use this template verbatim. Populate every section from the actual code — never
guess or fabricate file purposes; read the files if unsure.

```markdown
<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: YYYY-MM-DD -->

# AGENTS.md — <folder-name>

<!-- AGENTS-GENERATED:START overview -->
## Overview
<One sentence: what this feature owns and is responsible for.>
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File | Purpose |
|------|---------|
| `<filename>` | <what it does — one line> |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->
## Patterns
<Bullet list of the 2-4 conventions that are specific to this folder.
Skip anything already covered by src/AGENTS.md or the root AGENTS.md.>
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern | Reference file |
|---------|---------------|
| <pattern name> | `<path/to/file.ts>` |
<!-- AGENTS-GENERATED:END golden-samples -->
```

---

## Section guidance

### overview
One sentence only. State what the folder *owns*, not how it is implemented.

> Good: "Authentication module — client, store, service, and route guards."  
> Bad: "This folder contains the auth files for the project."

### filemap
List every non-trivial file. Skip generated files (`*.gen.ts`, `routeTree.gen.ts`),
pure re-exports with no logic, and test helpers unless they are important to
understand the feature.

Include the *role* of each file, not just its type:

> Good: `store.ts` — Zustand store holding `user`, `token`, and `isAuthenticated`  
> Bad: `store.ts` — state store

### patterns
Only write patterns that are **specific to this folder**. Do not repeat:
- Biome / formatting rules (already in `src/AGENTS.md`)
- Conventional commit format (already in root `AGENTS.md`)
- General TypeScript rules

Examples of good feature-level patterns:
- "All exports go through `index.ts` — never import directly from sub-files outside this module."
- "Guards (`guard.ts`) must call the auth store; never read cookies or localStorage directly."
- "Components in this folder receive all data via props — no direct store access."

### golden-samples
Point to **real files in this repo** that demonstrate the correct pattern for
this folder. Prefer the most recently written, cleanest file. One or two samples
are enough.

---

## Minimal example — src/modules/auth/AGENTS.md

```markdown
<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-10 -->

# AGENTS.md — auth

<!-- AGENTS-GENERATED:START overview -->
## Overview
Authentication module — NocoBase client, Zustand store, service layer, and
TanStack Router guards.
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File | Purpose |
|------|---------|
| `index.ts` | Barrel export — only file other modules should import from |
| `client.ts` | NocoBase SDK client instance (reads `VITE_NOCOBASE_*` env vars) |
| `store.ts` | Zustand store — `user`, `token`, `isAuthenticated`, `setAuth`, `clearAuth` |
| `service.ts` | Auth operations: `login()`, `logout()`, `resetPassword()` |
| `guard.ts` | `requireAuth()` and `requireGuest()` for TanStack Router `beforeLoad` |
| `types.ts` | Shared TypeScript types for auth domain |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->
## Patterns
- Export only through `index.ts`; external modules must never import sub-files directly.
- Guards read auth state from the store — never from `localStorage` or cookies.
- `service.ts` calls `client.ts` methods; components call service functions, not the client directly.
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern | Reference file |
|---------|---------------|
| Route guard usage | `src/routes/index.tsx` |
| Auth service call in component | `src/components/auth/login-form.tsx` |
<!-- AGENTS-GENERATED:END golden-samples -->
```

---

---

## Intent-skills mapping (root AGENTS.md)

The root `AGENTS.md` has an `<!-- intent-skills:start / end -->` block that maps
task descriptions to skill files. When an agent starts work on something that
matches a mapping, it automatically loads the corresponding SKILL.md into context.

**When to add or update a mapping:**
- You created a new skill in `.agents/skills/<skill-name>/SKILL.md`
- You created a new feature module that wraps a library with its own skill
  (e.g. a new TanStack package installed in `node_modules`)
- An existing task description no longer matches what the skill does

**Format** (inside the `<!-- intent-skills:start -->` / `<!-- intent-skills:end -->` markers):

```yaml
- task: "<short description of when the agent should load this skill>"
  load: "<relative path to SKILL.md from the repo root>"
```

**Rules:**
- `task` must be phrased as an action the agent is performing, not as a label.
  > Good: `"Adding or configuring routes"`  
  > Bad: `"TanStack Router"`
- `load` must be a path that actually exists — verify before writing.
- One entry per skill; do not duplicate.
- Keep task descriptions short (≤ 10 words) and distinct from existing entries.

**Example** — adding a local skill:

```yaml
<!-- intent-skills:start -->
- task: "Adding or configuring routes"
  load: "node_modules/@tanstack/router-core/skills/router-core/SKILL.md"
- task: "Creating or updating feature AGENTS.md files"
  load: ".agents/skills/feature-agents-md/SKILL.md"
<!-- intent-skills:end -->
```

> Reference: https://tanstack.com/intent/latest/docs/getting-started/quick-start-consumers

---

## Checklist before finishing

- [ ] Every file in the folder appears in the filemap (or is explicitly omitted with a reason)
- [ ] Patterns section contains only folder-specific rules
- [ ] Golden samples point to real, existing files in the repo
- [ ] `Last updated` date matches today
- [ ] Scoped AGENTS.md index in `src/AGENTS.md` includes this file (add if missing)
- [ ] Root `AGENTS.md` intent-skills block updated if a new local skill was created
