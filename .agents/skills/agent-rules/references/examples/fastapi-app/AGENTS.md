<!-- FOR AI AGENTS - Human readability is a side effect, not a goal -->
<!-- Managed by agent: keep sections and order; edit content, not structure -->
<!-- Last updated: 2026-04-13 | Last verified: 2026-04-13 -->

# AGENTS.md — fastapi-app

**Project:** fastapi-app — Python REST API with FastAPI  
**Stack:** Python 3.11+, FastAPI, Pydantic v2, Ruff, Pytest  
**Precedence:** the **closest `AGENTS.md`** to the files you're changing wins. Root holds global defaults only.

## Commands (unverified)

> Source: pyproject.toml — CI-sourced commands are most reliable

<!-- AGENTS-GENERATED:START commands -->

| Task          | Command       | ~Time |
| ------------- | ------------- | ----- |
| Typecheck     | mypy .        | ~15s  |
| Lint          | ruff check .  | ~10s  |
| Format        | ruff format . | ~5s   |
| Test (single) | pytest        | ~2s   |
| Test (all)    | pytest        | ~30s  |

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
src/             → application source code
src/routers/     → API route handlers
src/services/    → business logic layer
src/models/      → Pydantic models and DB models
```

<!-- AGENTS-GENERATED:END filemap -->

## Golden Samples (follow these patterns)

<!-- AGENTS-GENERATED:START golden-samples -->

| For        | Reference                      | Key patterns                        |
| ---------- | ------------------------------ | ----------------------------------- |
| Entrypoint | `src/main.py`                  | FastAPI app, CORS, middleware setup |
| Router     | `src/routers/items.py`         | APIRouter, dependency injection     |
| Service    | `src/services/item_service.py` | Business logic, DB operations       |
| Model      | `src/models/item.py`           | Pydantic v2 schemas                 |

<!-- AGENTS-GENERATED:END golden-samples -->

## Heuristics (quick decisions)

<!-- AGENTS-GENERATED:START heuristics -->

| When                 | Do                                                  |
| -------------------- | --------------------------------------------------- |
| Adding dependency    | Update `pyproject.toml`                             |
| Adding env var       | Add to `.env.example` first                         |
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
- Follow PEP 8 style guide and Python >=3.11 features
- Use type hints for all function signatures
- Use async/await for I/O operations

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
- Commit requirements.txt without pyproject.toml changes
- Use print() for logging in production code
- Block event loop with synchronous I/O

## Scoped AGENTS.md (MUST read when working in these directories)

<!-- AGENTS-GENERATED:START scope-index -->

- `./src/AGENTS.md` — Backend services (Python)
<!-- AGENTS-GENERATED:END scope-index -->

> **Agents**: When you read or edit files in a listed directory, you **must** load its AGENTS.md first. It contains directory-specific conventions that override this root file.

## When instructions conflict

The nearest `AGENTS.md` wins. Explicit user prompts override files.

- For Python-specific patterns, follow PEP 8 and project tooling (ruff/black)
