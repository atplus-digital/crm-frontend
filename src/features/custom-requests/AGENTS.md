# Custom Requests Feature

## Overview

Feature module for custom request operations. Provides typed wrappers around NocoBase custom request API with Zod validation, error handling, and React Query integration.

## Architecture

The feature uses a **split registry pattern** with two sources:

1. **Auto-generated entries** (`generated-registry.ts`) — Fetched from NocoBase API, regenerated via `pnpm generate-custom-requests`
2. **Manual entries** (`split/`) — Hand-crafted schemas for entries that need enhanced type safety or custom payload validation

The `merged-registry.ts` combines both sources at runtime.

```
┌─────────────────────────────────────────────────────────────┐
│                    NocoBase API                             │
└─────────────────────────┬───────────────────────────────────┘
                          │ pnpm generate-custom-requests
                          ▼
              ┌───────────────────────────┐
              │  generated-registry.ts    │  ← Auto-generated (do not edit)
              │  (50+ entries)           │
              └─────────────┬─────────────┘
                            │
                            │ merge
                            ▼
              ┌───────────────────────────┐
              │    merged-registry.ts     │  ← Final registry
              │  + manual split/ entries  │
              └─────────────┬─────────────┘
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
          service.ts   hooks/        index.ts
```

## Structure

```
custom-requests/
├── index.ts                        # Barrel export
├── errors.ts                       # Error classes
├── generated-registry.ts           # Auto-generated from NocoBase (do not edit)
├── merged-registry.ts             # Merges generated + manual entries
├── split/                          # Manual schema files (enhanced entries)
│   ├── criarContratoIxc.ts        # IXC contract creation
│   ├── n8nCompras.ts              # N8N compras workflow
│   └── qualirunInfo.ts            # Qualirun info lookup
├── utils/
│   ├── types.ts                   # Type definitions
│   ├── schemas.ts                 # Legacy Zod schemas (deprecated)
│   └── service.ts                 # Service functions (sendRequest, validatePayload)
├── hooks/
│   └── useCustomRequests.ts       # React Query hooks
└── __tests__/
    └── *.test.ts
```

## Key Files

| File                           | Purpose                                                                     |
| ------------------------------ | --------------------------------------------------------------------------- |
| `generated-registry.ts`        | Auto-generated entries from NocoBase API                                    |
| `merged-registry.ts`           | Final registry: generated + manual entries combined                         |
| `split/*.ts`                   | Manual enhanced schemas (preferred over generated z.any())                  |
| `utils/types.ts`               | Types: CustomRequestEntry, CustomRequestRegistryKey, payloads, responses    |
| `utils/schemas.ts`             | Legacy Zod schemas (deprecated — use split/ instead)                        |
| `utils/service.ts`             | sendRequest, validatePayload, buildTemplateContext                          |
| `errors.ts`                    | CustomRequestError, CustomRequestValidationError, CustomRequestNetworkError |
| `hooks/use-custom-requests.ts` | useCustomRequest                                                            |

## Type Safety Levels

Entries in the registry have two type safety levels:

| Level    | Schema            | Use Case                             |
| -------- | ----------------- | ------------------------------------ |
| Enhanced | Custom Zod schema | Known endpoints with typed payloads  |
| Generic  | `z.any()`         | Auto-generated entries from NocoBase |

**Prefer enhanced entries** (split/) for endpoints you actively use. The auto-generated entries use `z.any()` because NocoBase doesn't expose schema information.

## Adding Enhanced Entries

1. Create a new file in `split/` (e.g., `split/myRequest.ts`)
2. Export a `payloadSchema` (Zod schema) and optionally `responseSchema`
3. Add the entry to `merged-registry.ts` manual registry
4. Re-export types from `index.ts`

```typescript
// split/myRequest.ts
import { z } from "zod";

export const payloadSchema = z.object({
  field1: z.string(),
  field2: z.number(),
});
```

## Usage

```typescript
import { sendRequest, useCustomRequest } from "#/features/custom-requests";

// Type-safe call (enhanced entries)
const result = await sendRequest("criarContratoIxc", {
  payload: { id_contrato: 1, id_cliente: 2, produto: "TV" },
});

// Hook (React Query)
const mutation = useCustomRequest();
mutation.mutate({ key: "criarContratoIxc", payload: { ... } });
```

## Enhanced Request Keys (Typed Payloads)

- `criarContratoIxc` - IXC contract creation
- `qualirunInfo` - Qualirun info lookup
- `n8nCompras` - N8N compras workflow

## Regenerating Auto-Generated Entries

Run the generation script to sync with NocoBase API:

```bash
pnpm generate-custom-requests
```

This fetches all custom request configurations from NocoBase and generates `generated-registry.ts`.

## Registry Size

- **Auto-generated entries**: 50+ (from NocoBase)
- **Manual entries**: 3 (with enhanced type safety)
  | `hooks/use-custom-requests.ts` | useCustomRequest |
