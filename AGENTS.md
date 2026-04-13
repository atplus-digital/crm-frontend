<!-- FOR AI AGENTS - Human readability is a side effect, not a goal -->
<!-- Managed by agent: keep sections and order; edit content, not structure -->
<!-- Last updated: 2026-04-13 | Last verified: 2026-04-13 -->

# AGENTS.md — CRM AT+

**Project:** CRM AT+ — Customer Relationship Management system powered by NocoBase  
**Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui, React Router v7, NocoBase SDK  
**Precedence:** the **closest `AGENTS.md`** to the files you're changing wins. Root holds global defaults only.

## Commands
<!-- AGENTS-GENERATED:START commands -->
| Task | Command | ~Time |
|------|---------|-------|
| Dev server | `pnpm dev` | — |
| Typecheck | `pnpm typecheck` ou `pnpm dlx tsc --noEmit` | ~15s |
| Lint + Format | `pnpm biome:fix` | ~5s |
| Test | `pnpm test` | ~30s |
| Build | `pnpm build` | ~30s |
| Preview build | `pnpm preview` | — |
| Generate types | `pnpm generate-types` | ~10s |
| Check unused code | `pnpm knip` | ~10s |
<!-- AGENTS-GENERATED:END commands -->

> If commands fail, verify against Makefile/package.json/composer.json or ask user to update.

## Workflow
1. **Before coding**: Read nearest `AGENTS.md` + check Golden Samples for the area you're touching
2. **After each change**: Run the smallest relevant check (lint → typecheck → single test)
3. **Before committing**: Run full test suite if changes affect >2 files or touch shared code
4. **Before claiming done**: Run verification and **show output as evidence** — never say "try again" or "should work now" without proof

## File Map
<!-- AGENTS-GENERATED:START filemap -->
```
scripts/         → automation scripts
src/             → application source code
public/          → public static files
docs/            → documentation
```
<!-- AGENTS-GENERATED:END filemap -->

## Golden Samples (follow these patterns)
<!-- AGENTS-GENERATED:START golden-samples -->
| For | Reference | Key patterns |
|-----|-----------|--------------|
| Route (protected) | `src/routes/index.tsx` | `requireAuth` in `loader`, `Component` export |
| Route (public auth) | `src/routes/login.tsx` | `requireGuest` in `loader`, `Component` export |
| Auth module | `src/modules/auth/index.ts` | barrel export pattern |
| Error handling | `src/components/error-boundary.tsx` | React Error Boundary pattern with user-friendly UI |
| Component structure | `src/components/dashboard/profile-details.tsx` | Separate business logic from presentation in dashboard |
<!-- AGENTS-GENERATED:END golden-samples -->

## Heuristics (quick decisions)
<!-- AGENTS-GENERATED:START heuristics -->
| When | Do |
|------|-----|
| Adding env var | Add to `.env.example` first |
| Merging PRs | Squash and merge |
| Adding dependency | Ask first - we minimize deps |
| Unsure about pattern | Check Golden Samples above |
<!-- AGENTS-GENERATED:END heuristics -->

## Repository Settings
<!-- AGENTS-GENERATED:START repo-settings -->
- **Default branch:** `main`
- **Merge strategy:** squash, merge, rebase
<!-- AGENTS-GENERATED:END repo-settings -->

<!-- AGENTS-GENERATED:START ci-rules -->
## CI/Quality Gates
> Platform: github-actions

### Version Matrix
- Node 24
<!-- AGENTS-GENERATED:END ci-rules -->

## Boundaries

### Always Do
- Run pre-commit checks before committing
- Add tests for new code paths
- Use conventional commit format: `type(scope): subject`
- **Show test output as evidence before claiming work is complete** — never say "try again" or "should work now" without proof
- For upstream dependency fixes: run **full** test suite, not just affected tests
- Use TypeScript strict mode with proper type annotations

### Ask First
- Adding new dependencies
- Modifying CI/CD configuration
- Changing public API signatures
- Running full e2e test suites
- Repo-wide refactoring or rewrites

### Never Do
- Commit secrets, credentials, or sensitive data
- Modify vendor/, node_modules/, or generated files
- Push diretamente na branch main/master
- Delete migration files or schema changes
- Commit package-lock.json without package.json changes
- Use any type without justification

## Contributing (for AI agents)
- **Comprehension**: Understand the problem before submitting code. Read the linked issue, understand *why* the change is needed, not just *what* to change.
- **Context**: Every PR must explain the trade-offs considered and link to the issue it addresses. Disclose AI assistance if the project requires it.
- **Continuity**: Respond to review feedback. Drive-by PRs without follow-up will be closed.

<!-- AGENTS-GENERATED:START module-boundaries -->

<!-- AGENTS-GENERATED:END module-boundaries -->

## Codebase State
<!-- AGENTS-GENERATED:START codebase-state -->

- Contains deprecated code (grep for @deprecated)
<!-- AGENTS-GENERATED:END codebase-state -->

## Scoped AGENTS.md (MUST read when working in these directories)
<!-- AGENTS-GENERATED:START scope-index -->
- `./src/AGENTS.md` — Frontend application (TypeScript/React/Vue)
- `./.github/workflows/AGENTS.md` — GitHub Actions workflows and CI/CD automation
<!-- AGENTS-GENERATED:END scope-index -->

> **Agents**: When you read or edit files in a listed directory, you **must** load its AGENTS.md first. It contains directory-specific conventions that override this root file.

## Skill Mappings — load when working in these areas

<!-- intent-skills:start -->
- task: "Creating or updating feature AGENTS.md files"
  load: ".agents/skills/feature-agents-md/SKILL.md"
<!-- intent-skills:end -->

## When instructions conflict
The nearest `AGENTS.md` wins. Explicit user prompts override files.
- For TypeScript/JavaScript patterns, follow Biome config (`biome.json`)
