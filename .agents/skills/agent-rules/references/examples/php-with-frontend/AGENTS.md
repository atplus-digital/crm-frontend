<!-- FOR AI AGENTS - Human readability is a side effect, not a goal -->
<!-- Managed by agent: keep sections and order; edit content, not structure -->
<!-- Last updated: 2026-04-13 | Last verified: 2026-04-13 -->

# AGENTS.md — php-with-frontend

**Project:** php-with-frontend — PHP backend with modern TypeScript frontend  
**Stack:** PHP 8.2+, Symfony/Laravel, React/Vue, npm/pnpm  
**Precedence:** the **closest `AGENTS.md`** to the files you're changing wins. Root holds global defaults only.

## Commands (unverified)
> Source: composer.json — CI-sourced commands are most reliable

<!-- AGENTS-GENERATED:START commands -->
| Task | Command | ~Time |
|------|---------|-------|
| Typecheck | composer run phpstan | ~15s |
| Lint | vendor/bin/php-cs-fixer fix --dry-run | ~10s |
| Format | vendor/bin/php-cs-fixer fix | ~5s |
| Test (single) | vendor/bin/phpunit | ~2s |
| Test (all) | composer run test | ~30s |
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
src/             → PHP application source code
src/Controller/  → HTTP controllers
web/             → Frontend application (TypeScript/React)
```
<!-- AGENTS-GENERATED:END filemap -->

## Golden Samples (follow these patterns)
<!-- AGENTS-GENERATED:START golden-samples -->
| For | Reference | Key patterns |
|-----|-----------|--------------|
| Controller | `src/Controller.php` | Request handling, response formatting |
| Service | `src/Service/ItemService.php` | Business logic layer |
| API Route | `src/Controller/ApiController.php` | REST endpoint patterns |
<!-- AGENTS-GENERATED:END golden-samples -->

## Heuristics (quick decisions)
<!-- AGENTS-GENERATED:START heuristics -->
| When | Do |
|------|-----|
| Adding class | Follow PSR-4 in `Classes/` or `src/` |
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
- Follow PSR-12 coding standards and PHP ^8.2 features
- Use type declarations for all methods
- Validate inputs in controllers

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
- Commit composer.lock without composer.json changes
- Modify core framework files
- Use raw SQL without parameterization

## Scoped AGENTS.md (MUST read when working in these directories)
<!-- AGENTS-GENERATED:START scope-index -->
- `./web/AGENTS.md` — Frontend application (TypeScript/React)
<!-- AGENTS-GENERATED:END scope-index -->

> **Agents**: When you read or edit files in a listed directory, you **must** load its AGENTS.md first. It contains directory-specific conventions that override this root file.

## When instructions conflict
The nearest `AGENTS.md` wins. Explicit user prompts override files.
- For PHP-specific patterns, follow PSR standards
