<!-- FOR AI AGENTS - Human readability is a side effect, not a goal -->
<!-- Managed by agent: keep sections and order; edit content, not structure -->
<!-- Last updated: 2026-04-13 | Last verified: 2026-04-13 -->

# AGENTS.md — pnpm-workspace

**Project:** pnpm-workspace — Monorepo with pnpm workspaces  
**Stack:** TypeScript, pnpm, Turborepo  
**Precedence:** the **closest `AGENTS.md`** to the files you're changing wins. Root holds global defaults only.

## Commands (unverified)
> Source: package.json — CI-sourced commands are most reliable

<!-- AGENTS-GENERATED:START commands -->
| Task | Command | ~Time |
|------|---------|-------|
| Typecheck | pnpm dlx tsc --noEmit | ~15s |
| Lint | pnpm dlx eslint . | ~10s |
| Format | pnpm dlx prettier --write . | ~5s |
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
packages/        → workspace packages
packages/app/    → main application
packages/ui/     → shared UI components
packages/utils/  → shared utilities
```
<!-- AGENTS-GENERATED:END filemap -->

## Golden Samples (follow these patterns)
<!-- AGENTS-GENERATED:START golden-samples -->
| For | Reference | Key patterns |
|-----|-----------|--------------|
| Package Config | `packages/ui/package.json` | Workspace dependency declarations |
| Shared Module | `packages/utils/src/index.ts` | Barrel exports, re-exports |
<!-- AGENTS-GENERATED:END golden-samples -->

## Heuristics (quick decisions)
<!-- AGENTS-GENERATED:START heuristics -->
| When | Do |
|------|-----|
| Committing | Use Conventional Commits (feat:, fix:, docs:, etc.) |
| Merging PRs | Squash and merge |
| Adding dependency | Ask first - we minimize deps |
| Unsure about pattern | Check Golden Samples above |
<!-- AGENTS-GENERATED:END heuristics -->

## Repository Settings
<!-- AGENTS-GENERATED:START repo-settings -->
- **Default branch:** `main`
- **Merge strategy:** squash, merge, rebase
<!-- AGENTS-GENERATED:END repo-settings -->

## Boundaries

### Always Do
- Run pre-commit checks before committing
- Add tests for new code paths
- Use conventional commit format: `type(scope): subject`
- Use TypeScript strict mode with proper type annotations
- Respect workspace boundaries (don't import across packages without explicit deps)
- Run builds from workspace root

### Ask First
- Adding new dependencies
- Modifying CI/CD configuration
- Changing public API signatures
- Running full e2e test suites
- Repo-wide refactoring or rewrites
- Adding new workspace packages

### Never Do
- Commit secrets, credentials, or sensitive data
- Modify vendor/, node_modules/, or generated files
- Push diretamente na branch main/master
- Delete migration files or schema changes
- Commit package-lock.json without package.json changes
- Use any type without justification
- Mix pnpm with npm/yarn in the same workspace

## When instructions conflict
The nearest `AGENTS.md` wins. Explicit user prompts override files.
- For TypeScript/JavaScript patterns, follow project eslint/prettier config
