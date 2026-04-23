<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-22 -->

# AGENTS.md — workflows

<!-- AGENTS-GENERATED:START overview -->

## Overview

GitHub Actions workflows and CI/CD automation

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                        | Purpose                              |
| --------------------------- | ------------------------------------ |
| `deploy-test-coverage.yaml` | Deploy Test Coverage to GitHub Pages |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Workflow files

- Workflows: 1 workflow file(s)

### Active Workflows

#### `deploy-test-coverage.yaml`

**Purpose:** Deploy test coverage reports to GitHub Pages

**Triggers:**

- `push` to `main` branch
- `workflow_dispatch` (manual trigger)

**Jobs:**
| Job | Runs On | Dependencies | Purpose |
| -------- | --------------- | ------------ | ------------------------------------------------------ |
| `build` | `ubuntu-latest` | none | Install deps, run tests with coverage, upload artifact |
| `deploy` | `ubuntu-latest` | `build` | Deploy coverage artifact to GitHub Pages |

**Environment Variables:**

- Node.js: `24`
- pnpm: `10`
- Coverage output: `./coverage`

**Permissions:**

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

**Concurrency:**

- Group: `pages`
- Cancel in progress: `false`

**Key Steps (build job):**

1. Checkout code
2. Setup pnpm (v5)
3. Setup Node.js (v6)
4. Ensure `.env.local` exists (copy from `.env.example`)
5. Run: `pnpm install --frozen-lockfile`
6. Run: `pnpm biome:fix`
7. Run: `pnpm knip`
8. Run: `pnpm test --coverage`
9. Upload artifact to `./coverage`

**Key Steps (deploy job):**

1. Deploy to GitHub Pages environment
2. Output: `${{ steps.deployment.outputs.page_url }}`

**Actions Used:**
| Action | Version | Purpose |
| ------------------------------- | ------- | -------------------------- |
| `actions/checkout` | `v6` | Repository checkout |
| `pnpm/action-setup` | `v5` | pnpm package manager setup |
| `actions/setup-node` | `v6` | Node.js environment setup |
| `actions/upload-pages-artifact` | `v4` | Upload coverage artifact |
| `actions/deploy-pages` | `v5` | Deploy to GitHub Pages |

**Environment:**

- Name: `github-pages`
- URL: Dynamic (output from deployment step)
<!-- AGENTS-GENERATED:END setup -->

<!-- AGENTS-GENERATED:START structure -->

## Directory structure

```
.github/
  workflows/
    deploy-test-coverage.yaml  → Deploy test coverage to GitHub Pages
  AGENTS.md                    → This file (workflow documentation)
```

<!-- AGENTS-GENERATED:END structure -->

<!-- AGENTS-GENERATED:START code-style -->

## Workflow conventions

- **Pin action versions** with full SHA, not tags (`uses: actions/checkout@abc123...`)
- **Minimal permissions**: Use `permissions:` block, never use `permissions: write-all`
- **Reusable workflows**: Extract common patterns to `.github/workflows/reusable-*.yml`
- **Job dependencies**: Use `needs:` to express dependencies
- **Caching**: Use `actions/cache` for dependencies (npm, composer, go)

### Naming conventions

| Type          | Convention      | Example                            |
| ------------- | --------------- | ---------------------------------- |
| Workflow file | `<purpose>.yml` | `ci.yml`, `release.yml`            |
| Workflow name | Title Case      | `CI Pipeline`, `Release`           |
| Job ID        | kebab-case      | `build-and-test`, `deploy-staging` |
| Step name     | Sentence case   | `Install dependencies`             |
| Secret        | SCREAMING_SNAKE | `DEPLOY_TOKEN`, `NPM_TOKEN`        |

<!-- AGENTS-GENERATED:END code-style -->

<!-- AGENTS-GENERATED:START patterns -->

## Common patterns

### Project-specific: Coverage deployment

```yaml
name: Deploy Test Coverage to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - uses: pnpm/action-setup@v5
        with:
          version: 10
      - uses: actions/setup-node@v6
        with:
          node-version: 24
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm biome:fix
      - run: pnpm knip
      - run: pnpm test --coverage
      - uses: actions/upload-pages-artifact@v4
        with:
          path: ./coverage

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v5
```

### Basic CI workflow (template for new workflows)

```yaml
name: CI
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

permissions:
  contents: read

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2
      - uses: actions/setup-node@39370e3970a6d050c480ffad4ff0ed4d3fdee5af # v4.1.0
        with:
          node-version: "24"
          cache: "npm"
      - run: npm ci
      - run: npm test
```

### Conditional deployment

```yaml
jobs:
  deploy:
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    needs: [test, build]
    environment: production
    steps:
      - name: Deploy
        run: ./deploy.sh
```

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START issues -->

## Common issues

| Issue                  | Status     | Notes                                                                                                                                 |
| ---------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Action version pinning | ⚠️ Warning | Current workflow uses tags (`@v6`, `@v5`) instead of full SHA pins. Security section recommends SHA pinning for production workflows. |
| No PR validation       | ℹ️ Info    | Workflow only runs on `main` push, not on pull requests. Consider adding `pull_request` trigger for early feedback.                   |
| No matrix testing      | ℹ️ Info    | Single Node version (24) tested. Add matrix strategy if multi-version support needed.                                                 |

<!-- AGENTS-GENERATED:END issues -->

<!-- AGENTS-GENERATED:START security -->

## Security & safety

- **NEVER** expose secrets in logs: use `::add-mask::` for dynamic secrets
- **Pin actions** to full commit SHA, not mutable tags
- **Minimal permissions**: Start with `contents: read`, add only what's needed
- **Environment protection**: Use environments with required reviewers for deploys
- **Secret scanning**: Enable in repository settings
- **Dependency review**: Use `actions/dependency-review-action` for PRs
- **OIDC**: Prefer OIDC over long-lived secrets for cloud providers
<!-- AGENTS-GENERATED:END security -->

<!-- AGENTS-GENERATED:START checklist -->

## PR/commit checklist

- [ ] Actions pinned to full SHA (not tags)
- [ ] Permissions block uses minimal required permissions
- [ ] Secrets are not exposed in logs
- [ ] Workflow syntax valid: `actionlint` or GitHub UI validation
- [ ] Matrix strategy covers required versions/platforms
- [ ] Caching configured for dependencies
- [ ] Environment variables match project standards (Node 24, pnpm 10)
- [ ] Coverage deployment uses correct artifact path (`./coverage`)
<!-- AGENTS-GENERATED:END checklist -->

<!-- AGENTS-GENERATED:START examples -->

## Patterns to Follow

> **Prefer looking at real code in this repo over generic examples.**
> See **Golden Samples** section above for files that demonstrate correct patterns.

<!-- AGENTS-GENERATED:END examples -->

<!-- AGENTS-GENERATED:START help -->

## When stuck

- GitHub Actions docs: https://docs.github.com/en/actions
- Workflow syntax: https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions
- Action marketplace: https://github.com/marketplace?type=actions
- Use `act` for local testing: https://github.com/nektos/act
- Check existing workflows in this repo for patterns
- GitHub Pages deployment: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Project-specific notes

- **Node version**: Always use Node 24 (per CI matrix in root AGENTS.md)
- **Package manager**: pnpm (never npm or yarn)
- **Coverage output**: `./coverage` directory (Vitest default)
- **Pre-test commands**: Always run `pnpm biome:fix` and `pnpm knip` before tests
- **Lockfile**: Use `--frozen-lockfile` flag for reproducible installs
<!-- AGENTS-GENERATED:END help -->
