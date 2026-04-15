<!-- FOR AI AGENTS - Human readability is a side effect, not a goal -->
<!-- Managed by agent: keep sections and order; edit content, not structure -->
<!-- Last updated: 2026-04-13 | Last verified: 2026-04-13 -->

# AGENTS.md — t3x-rte-ckeditor-image

**Project:** t3x-rte-ckeditor-image — TYPO3 CKEditor image plugin  
**Stack:** PHP 8.1+, TYPO3 v12+, JavaScript  
**Precedence:** the **closest `AGENTS.md`** to the files you're changing wins. Root holds global defaults only.

## Commands (unverified)

> Source: composer.json — CI-sourced commands are most reliable

<!-- AGENTS-GENERATED:START commands -->

| Task          | Command                               | ~Time |
| ------------- | ------------------------------------- | ----- |
| Lint          | vendor/bin/php-cs-fixer fix --dry-run | ~10s  |
| Format        | vendor/bin/php-cs-fixer fix           | ~5s   |
| Test (single) | vendor/bin/phpunit                    | ~2s   |
| Test (all)    | vendor/bin/phpunit                    | ~30s  |

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
Classes/           → PHP backend classes
Configuration/     → TYPO3 configuration
Resources/         → Static assets, templates
JavaScript/        → CKEditor plugin code
```

<!-- AGENTS-GENERATED:END filemap -->

## Golden Samples (follow these patterns)

<!-- AGENTS-GENERATED:START golden-samples -->

| For             | Reference                                | Key patterns                           |
| --------------- | ---------------------------------------- | -------------------------------------- |
| CKEditor Plugin | `JavaScript/ImagePlugin.js`              | Plugin registration, button definition |
| TYPO3 Backend   | `Classes/Controller/ImageController.php` | Backend processing                     |

<!-- AGENTS-GENERATED:END golden-samples -->

## Heuristics (quick decisions)

<!-- AGENTS-GENERATED:START heuristics -->

| When                 | Do                                                  |
| -------------------- | --------------------------------------------------- |
| Adding class         | Follow PSR-4 in `Classes/` or `src/`                |
| Committing           | Use Conventional Commits (feat:, fix:, docs:, etc.) |
| Merging PRs          | Squash and merge                                    |
| Adding dependency    | Ask first - we minimize deps                        |
| Unsure about pattern | Check Golden Samples above                          |

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
- Follow PSR-12 coding standards and PHP ^8.1 features
- Follow TYPO3 coding guidelines
- Use type declarations for all methods

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
- Modify core TYPO3 framework files
- Use deprecated TYPO3 APIs

## When instructions conflict

The nearest `AGENTS.md` wins. Explicit user prompts override files.

- For PHP-specific patterns, follow PSR standards
- For TYPO3 patterns, follow official TYPO3 documentation
