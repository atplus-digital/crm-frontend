<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-13 | Last verified: 2026-04-13 -->

# AGENTS.md — src

<!-- AGENTS-GENERATED:START overview -->
## Overview
Backend services (Python) — FastAPI routers, services, and Pydantic models
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File | Purpose |
|------|---------|
| `src/main.py` | FastAPI app, CORS, middleware setup |
| `src/config.py` | Settings, environment variables |
| `src/routers/items.py` | Item CRUD API endpoints |
| `src/services/item_service.py` | Business logic layer |
| `src/models/item.py` | Pydantic schemas |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples (follow these patterns)
| Pattern | Reference | Key patterns |
|---------|-----------|--------------|
| Router | `src/routers/items.py` | APIRouter, dependency injection, HTTP status codes |
| Service | `src/services/item_service.py` | CRUD operations, validation, error handling |
| Model | `src/models/item.py` | Pydantic v2 Field validators, computed fields |
<!-- AGENTS-GENERATED:END golden-samples -->

<!-- AGENTS-GENERATED:START setup -->
## Setup & environment
- Install: `pip install -e .`
- Python version: >=3.11
- Package manager: uv
- Environment variables: See .env or .env.example
<!-- AGENTS-GENERATED:END setup -->

<!-- AGENTS-GENERATED:START commands -->
## Build & tests
- Typecheck: `mypy .`
- Format: `ruff format .`
- Lint: `ruff check .`
- Test: `pytest`
<!-- AGENTS-GENERATED:END commands -->

<!-- AGENTS-GENERATED:START code-style -->
## Code style & conventions
- Follow PEP 8 style guide
- Use type hints for all function signatures
- Naming: `snake_case` for functions/variables, `PascalCase` for classes
- Docstrings: Google style, required for public APIs
- Imports: group by stdlib, third-party, local (use isort)
- Modern Python: prefer `|` over `Union`, `list` over `List`
<!-- AGENTS-GENERATED:END code-style -->

<!-- AGENTS-GENERATED:START security -->
## Security & safety
- Validate and sanitize all user inputs
- Use parameterized queries for database access
- Never use dynamic code execution with untrusted data
- Sensitive data: never log or expose in errors
- File paths: validate and use `pathlib` for path operations
- Subprocess: use list args, avoid shell=True with user input
<!-- AGENTS-GENERATED:END security -->

<!-- AGENTS-GENERATED:START checklist -->
## PR/commit checklist
- [ ] Tests pass: `pytest`
- [ ] Type check clean: `mypy .`
- [ ] Lint clean: `ruff check .`
- [ ] Formatted: `ruff format .`
- [ ] Public functions have docstrings
<!-- AGENTS-GENERATED:END checklist -->

<!-- AGENTS-GENERATED:START examples -->
## Patterns to Follow
> **Prefer looking at real code in this repo over generic examples.**
> See **Golden Samples** section above for files that demonstrate correct patterns.
<!-- AGENTS-GENERATED:END examples -->

<!-- AGENTS-GENERATED:START help -->
## When stuck
- Check Python documentation: https://docs.python.org
- Review existing patterns in this codebase
- Check root AGENTS.md for project-wide conventions
- Use `python -m pydoc <module>` for stdlib help
<!-- AGENTS-GENERATED:END help -->
