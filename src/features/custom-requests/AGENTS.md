# Custom Requests Feature

## Overview

Feature module for custom request operations. Provides typed wrappers around NocoBase custom request API with Zod validation, error handling, and React Query integration.

## Structure

```
custom-requests/
├── index.ts                      # Barrel export
├── errors.ts                     # Error classes
├── utils/
│   ├── types.ts                 # Type definitions
│   ├── schemas.ts               # Zod schemas
│   └── service.ts               # Service functions
└── hooks/
    └── useCustomRequests.ts     # React Query hooks
```

## Key Files

| File                         | Purpose                                                                     |
| ---------------------------- | --------------------------------------------------------------------------- |
| `utils/types.ts`             | Centralized types: CustomRequestKey, payloads, responses, helpers           |
| `utils/schemas.ts`           | Zod schemas with preserved inference                                        |
| `utils/service.ts`           | sendRequest, validatePayload, buildTemplateContext                          |
| `errors.ts`                  | CustomRequestError, CustomRequestValidationError, CustomRequestNetworkError |
| `hooks/useCustomRequests.ts` | useSendRequest, useRequests, useRequest                                     |

## Usage

```typescript
import { sendRequest, useSendRequest } from "#/features/custom-requests";

// Direct call
const result = await sendRequest("criarContratoIxc", {
  payload: { id_contrato: 1, id_cliente: 2, produto: "TV" },
});

// Hook
const mutation = useSendRequest();
mutation.mutate({ key: "criarContratoIxc", payload: { ... } });
```

## Request Keys

- `criarContratoIxc` - IXC contract creation
- `qualirunInfo` - Qualirun info lookup
- `n8nCompras` - N8N compras workflow
