<!-- FOR AI AGENTS - Human readability is a side effect, not a goal -->
<!-- Managed by agent: keep sections and order; edit content, not structure -->
<!-- Last updated: 2026-04-13 | Last verified: 2026-04-13 -->

# AGENTS.md — ldap-selfservice

**Project:** ldap-selfservice — Self-service LDAP user management  
**Stack:** Go 1.25, LDAP SDK, Web UI  
**Precedence:** the **closest `AGENTS.md`** to the files you're changing wins. Root holds global defaults only.

## Commands (unverified)
> Source: go.mod — CI-sourced commands are most reliable

<!-- AGENTS-GENERATED:START commands -->
| Task | Command | ~Time |
|------|---------|-------|
| Typecheck | go build -v ./... | ~15s |
| Format | gofmt -w . | ~5s |
| Test (single) | go test -v -race | ~2s |
| Test (all) | go test -v -race -short ./... | ~30s |
| Build | go build -v ./... | ~30s |
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
cmd/             → CLI entrypoints
internal/        → internal packages (not exported)
pkg/ldap/        → LDAP operations package
```
<!-- AGENTS-GENERATED:END filemap -->

## Golden Samples (follow these patterns)
<!-- AGENTS-GENERATED:START golden-samples -->
| For | Reference | Key patterns |
|-----|-----------|--------------|
| LDAP Connection | `pkg/ldap/connection.go` | Connection pooling, TLS setup |
| User Handler | `internal/handler/user.go` | Password change, profile update |
<!-- AGENTS-GENERATED:END golden-samples -->

## Heuristics (quick decisions)
<!-- AGENTS-GENERATED:START heuristics -->
| When | Do |
|------|-----|
| Adding package | Internal → `internal/`, Public → `pkg/` |
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
- Follow Go 1.25 conventions and idioms
- Use `errors.Is` and `errors.As` for error handling
- Validate LDAP inputs to prevent injection attacks

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
- Commit go.sum without go.mod changes
- Use `panic()` for expected errors
- Log sensitive user data

## When instructions conflict
The nearest `AGENTS.md` wins. Explicit user prompts override files.
- For Go-specific patterns, defer to language idioms and standard library conventions
