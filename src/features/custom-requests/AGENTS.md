# Custom Requests Feature

## Overview

Feature module for custom request operations. Provides typed wrappers around NocoBase custom request API with Zod validation, error handling, and React Query integration.

## Architecture

The feature consumes a single generated registry source:

1. **API entries** — fetched from NocoBase by `pnpm generate-custom-requests`
2. **Manual entries** — configured in `scripts/generate-custom-requests/config.ts` via `manualRequests`

Both are merged during generation and emitted into `src/generated/custom-requests/generated-registry.ts`.

```
┌─────────────────────────────────────────────────────────────┐
│                    NocoBase API                             │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          │ pnpm generate-custom-requests
                          ▼
┌──────────────────────────────────────────────────────────────┐
│ scripts/generate-custom-requests/config.ts                  │
│  - splitRequests                                             │
│  - manualRequests                                            │
└─────────────────────────┬────────────────────────────────────┘
                          │ merge during generation
                          ▼
┌──────────────────────────────────────────────────────────────┐
│ src/generated/custom-requests/generated-registry.ts          │
│  - customRequestsRegistry                                    │
│  - CustomRequestRegistryKey                                  │
└─────────────────────────┬────────────────────────────────────┘
                          │
              ┌───────────┼───────────┐
              ▼           ▼           ▼
         service.ts     hooks/      index.ts
```

## Structure

```
custom-requests/
├── index.ts                        # Feature public exports
├── errors.ts                       # Error classes
├── hooks/
│   └── use-custom-requests.ts      # React Query hook
├── utils/
│   ├── service.ts                  # sendRequest + helpers
│   ├── types.ts                    # Feature types
│   └── schemas.ts                  # Legacy schemas (avoid for new entries)
└── __tests__/
    └── *.test.ts
```

## Key Files

| File                                                  | Purpose                                                |
| ----------------------------------------------------- | ------------------------------------------------------ |
| `src/generated/custom-requests/generated-registry.ts` | Final generated registry (API + manual config entries) |
| `scripts/generate-custom-requests/config.ts`          | Declares `splitRequests` and `manualRequests`          |
| `utils/service.ts`                                    | Core execution and payload validation                  |
| `hooks/use-custom-requests.ts`                        | React Query mutation wrapper                           |
| `errors.ts`                                           | CustomRequestError hierarchy                           |

## Adding Enhanced Manual Entries

1. Open `scripts/generate-custom-requests/config.ts`
2. Add entry to `manualRequests` with `key`, `name`, `collection`, `method`, `url`, and `payloadSchema`
3. Run `pnpm generate-custom-requests`
4. Run `pnpm test src/features/custom-requests` (or relevant test subset)

## Usage

```typescript
import { sendRequest, useCustomRequest } from "#/features/custom-requests";

const result = await sendRequest("criarContratoIxc", {
  payload: { id_contrato: 1, id_cliente: 2, produto: "TV" },
});

const mutation = useCustomRequest();
mutation.mutate({ key: "criarContratoIxc", payload: { id_contrato: 1 } });
```

## Regeneration

```bash
pnpm generate-custom-requests
```

This regenerates `src/generated/custom-requests/generated-registry.ts` and split files configured in `splitRequests`.
