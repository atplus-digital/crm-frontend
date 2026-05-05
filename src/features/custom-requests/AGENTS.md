# Custom Requests Feature

## Overview

Feature module for custom request operations. Provides typed wrappers around NocoBase custom request API with Zod validation, error handling, and React Query integration.

## Architecture

The feature consumes a single generated registry source:

1. **API entries** — fetched from NocoBase by `pnpm generate-custom-requests`
2. **Manual entries** — configured in `scripts/generate-custom-requests/config.ts` via `manualRequests`

Both are merged during generation and emitted into `src/generated/custom-requests/generated-registry.ts`.

## Structure

```
custom-requests/
├── index.ts                        # Feature public exports
├── errors.ts                       # Error classes
├── components/
│   ├── index.ts                    # Component exports
│   └── popup-request.tsx           # Dialog + button component for custom requests
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
| `components/popup-request.tsx`                        | Dialog button component with confirmation flow         |
| `utils/service.ts`                                    | Core execution and payload validation                  |
| `hooks/use-custom-requests.ts`                        | React Query mutation wrapper                           |
| `errors.ts`                                           | CustomRequestError hierarchy                           |

## Adding Enhanced Manual Entries

1. Open `scripts/generate-custom-requests/config.ts`
2. Add entry to `manualRequests` with `key`, `name`, `collection`, `method`, `url`, and `payloadSchema`
3. Run `pnpm generate-custom-requests`
4. Run `pnpm test src/features/custom-requests` (or relevant test subset)

## Usage

### Hook (imperative)

```typescript
import { sendRequest, useCustomRequest } from "#/features/custom-requests";

const result = await sendRequest("criarContratoIxc", {
  payload: { id_contrato: 1, id_cliente: 2, produto: "TV" },
});

const mutation = useCustomRequest("criarContratoIxc");
mutation.mutate({ payload: { id_contrato: 1 } });
```

### PopupRequest Component

Button component with integrated dialog for executing custom requests:

```tsx
import { PopupRequest } from "#/features/custom-requests";

// Basic usage with confirmation (default)
<PopupRequest identifier="negociacao_atualizada" payload={{ id: 1 }}>
  Atualizar Negociação
</PopupRequest>

// Skip confirmation (direct execution)
<PopupRequest identifier="log_test" confirm={false}>
  Executar Log
</PopupRequest>

// With custom confirmation message
<PopupRequest identifier="qualirun" confirmMessage="Executar QUALI RUN?">
  Executar
</PopupRequest>

// With success callback
<PopupRequest
  identifier="qualirun"
  onSuccess={(data) => console.log("Sucesso:", data)}
>
  Executar
</PopupRequest>
```

When payload templates reference `currentUser` (for example `{{currentUser.id}}`),
`useCustomRequest()` auto-injects the authenticated user data. You can omit
`currentUser` in `mutation.mutate({ payload })` and keep passing only the
request-specific business fields.

## Regeneration

```bash
pnpm generate-custom-requests
```

This regenerates `src/generated/custom-requests/generated-registry.ts` and split files configured in `splitRequests`.
