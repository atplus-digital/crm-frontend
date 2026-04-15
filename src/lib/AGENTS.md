<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-13 -->

# AGENTS.md — lib

<!-- AGENTS-GENERATED:START overview -->

## Overview

Pure utility functions with no React dependency — shared helpers used across the application.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                | Purpose                                                                                                                                |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `utils.ts`          | General utilities: `cn()` (clsx + tailwind-merge), `formatDateInPortuguese()`, `formatDatePtBR()`, `formatCurrency()`, `getInitials()` |
| `logger.ts`         | Structured logger: `createLogger(module)` factory. Dev mode → all levels; production → warn + error only                               |
| `filter-builder.ts` | Generic NocoBase/IXC filter builder: `buildFilter()`, `eq()`, `includes()`, `gt()`, `gte()`, `lt()`, `lte()`, `or()`, `nestedField()`  |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- All functions in this folder are pure TypeScript — no React imports.
- Use `#/` alias for imports (e.g., `import { isDev } from "#/env"`).
- `createLogger(module)` returns a scoped logger with `[module]` prefix; never use raw `console.*` in application code.
- Logger levels: `debug` (dev only), `info`, `warn`, `error` — gated by `isDev` from `#/env`.

### Filter Builder Pattern

Use `filter-builder.ts` for NocoBase/IXC query filters. This consolidates duplicate filter builder patterns.

```typescript
import {
  buildFilter,
  eq,
  includes,
  or,
  nestedField,
} from "#/lib/filter-builder";

// Single condition
const filter = buildFilter([includes("f_nome", "John")]);
// Returns: { f_nome: { $includes: "John" } }

// Multiple conditions (auto-wrapped in $and)
const filter = buildFilter([
  includes("f_nome", "John"),
  eq("status", "active"),
]);
// Returns: { $and: [{ f_nome: { $includes: "John" } }, { status: { $eq: "active" } }] }

// Nested OR condition
const filter = buildFilter([
  or(
    nestedField("f_pessoa", includes("f_cpf", "123")),
    nestedField("f_empresa", includes("f_cnpj", "456")),
  ),
]);
// Returns: { $or: [{ f_pessoa: { f_cpf: { $includes: "123" } } }, ...] }
```

**Helper functions:**

- `eq(field, value)` — Equality filter
- `includes(field, value)` — Partial match (LIKE)
- `gt(field, value)`, `gte(field, value)` — Greater than / greater than or equal
- `lt(field, value)`, `lte(field, value)` — Less than / less than or equal
- `or(...conditions)` — OR condition
- `nestedField(field, condition)` — Nested field filter

**When to use:** Always use `filter-builder.ts` instead of creating custom filter builder functions in services.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern          | Reference file                       |
| ---------------- | ------------------------------------ |
| Logger usage     | `src/features/auth/guard.ts`         |
| Utility function | `src/lib/utils.ts`                   |
| Filter builder   | `src/features/cs/pessoas-service.ts` |

<!-- AGENTS-GENERATED:END golden-samples -->

<!-- AGENTS-GENERATED:START formatting -->

## Formatting Utilities

### Date Formatting

Use `formatDatePtBR()` for consistent date display in Portuguese (Brazil):

```typescript
import { formatDatePtBR } from "#/lib/utils";

// Database date string → "14/04/2026 15:30"
const formatted = formatDatePtBR("2026-04-14T15:30:00Z");

// Handles invalid dates gracefully
formatDatePtBR("0000-00-00"); // Returns: "—"
formatDatePtBR(""); // Returns: "—"
```

**When to use:**

- Displaying dates from NocoBase/IXC API
- Table cells with timestamps
- Detail views showing creation/update dates

### Currency Formatting

Use `formatCurrency()` for Brazilian Real (BRL) formatting:

```typescript
import { formatCurrency } from "#/lib/utils";

// Number → "R$ 1.234,56"
const formatted = formatCurrency(1234.56);

// Handles null/undefined/0 gracefully
formatCurrency(null); // Returns: "-"
formatCurrency(undefined); // Returns: "-"
formatCurrency(0); // Returns: "-"
```

**When to use:**

- Price display in tables
- Monetary values from API
- Contract values, deal amounts, etc.

### General Utilities

```typescript
import { cn, getInitials, formatDateInPortuguese } from "#/lib/utils";

// Classname merging (Tailwind + conditional classes)
cn("base-class", isActive && "active-class");

// Get first letter as uppercase
getInitials("John"); // Returns: "J"

// Full date in Portuguese (for headers, titles)
formatDateInPortuguese(new Date());
// Returns: "Terça-feira, 14 de abril de 2026"
```

<!-- AGENTS-GENERATED:END formatting -->
