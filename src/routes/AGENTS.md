<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-17 -->

# AGENTS.md — routes

<!-- AGENTS-GENERATED:START overview -->

## Overview

React Router v7 route definitions — thin wrappers with `loader` guards + lazy-loaded page components from `src/pages/`.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                              | Purpose                                      |
| --------------------------------- | -------------------------------------------- |
| `router.tsx`                      | Root route tree with `createBrowserRouter()` |
| `dashboard.tsx`                   | Protected dashboard route (requires auth)    |
| `auth/login.tsx`                  | Public login route (requires guest)          |
| `auth/reset-password.tsx`         | Password reset request                       |
| `auth/reset-password-confirm.tsx` | Password reset confirmation                  |
| `cs/contratos.tsx`                | Contracts list route                         |
| `cs/negociacoes.tsx`              | Negotiations list route                      |
| `cs/negociacoes-detail.tsx`       | Negotiation detail route                     |
| `cs/pessoas.tsx`                  | People (PF/PJ) list route                    |
| `cs/pessoa-detail.tsx`            | Person detail route                          |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- **Route modules export `loader` + `Component`** — not default exports.
- **Protected routes**: Call `requireAuth(new URL(request.url).pathname)` in loader.
- **Public auth routes**: Call `requireGuest()` in loader (prevent logged-in users from seeing login).
- **Thin wrappers**: Route files import page components from `src/pages/` — no UI composition here.
- **Lazy loading**: Routes use `lazy()` import from `./router.tsx` — pages loaded on demand.
- **Nested layouts**: `<DashboardLayout>` wraps all protected routes (sidebar + content area).
- **404 handler**: `*` route renders `<NotFoundPage>` — always last in route tree.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                  | Reference file                         |
| ------------------------ | -------------------------------------- |
| Protected route loader   | `src/routes/dashboard.tsx`             |
| Public auth route loader | `src/routes/auth/login.tsx`            |
| Route with params        | `src/routes/cs/negociacoes-detail.tsx` |
| Router configuration     | `src/routes/router.tsx`                |

<!-- AGENTS-GENERATED:END golden-samples -->

<!-- AGENTS-GENERATED:START guard-patterns -->

## Guard Patterns

### Protected Route (requires authentication)

```typescript
// src/routes/dashboard.tsx
import { requireAuth } from "#/features/auth";
import { DashboardPage } from "#/pages/dashboard/dashboard-page";

export async function loader({ request }: LoaderFunctionArgs) {
  requireAuth(new URL(request.url).pathname);
  return null;
}

export function Component() {
  return <DashboardPage />;
}
```

### Public Auth Route (requires guest — NOT authenticated)

```typescript
// src/routes/auth/login.tsx
import { requireGuest } from "#/features/auth";
import { LoginPage } from "#/pages/auth/login-page";

export async function loader({ request }: LoaderFunctionArgs) {
  requireGuest();
  return null;
}

export function Component() {
  return <LoginPage />;
}
```

### Route with Params

```typescript
// src/routes/cs/negociacoes-detail.tsx
import { requireAuth } from "#/features/auth";
import { NegotiationDetailPage } from "#/pages/cs/negociacoes/negociacao-detail-page";

export async function loader({ request, params }: LoaderFunctionArgs) {
  requireAuth(new URL(request.url).pathname);
  // Optional: prefetch data here or let page handle it
  return null;
}

export function Component() {
  const { id } = useParams();
  return <NegotiationDetailPage id={id} />;
}
```

<!-- AGENTS-GENERATED:END guard-patterns -->

<!-- AGENTS-GENERATED:START adding-routes -->

## Adding New Routes

### Step 1: Create page component

```typescript
// src/pages/my-feature/my-page.tsx
export function MyPage() {
  return <div>My Page</div>;
}
```

### Step 2: Create route wrapper

```typescript
// src/routes/my-feature/my-route.tsx
import { requireAuth } from "#/features/auth";
import { MyPage } from "#/pages/my-feature/my-page";

export async function loader({ request }: LoaderFunctionArgs) {
  requireAuth(new URL(request.url).pathname);
  return null;
}

export function Component() {
  return <MyPage />;
}
```

### Step 3: Register in router

```typescript
// src/routes/router.tsx
import { myRoute } from "./my-feature/my-route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // ... existing routes
      {
        path: "my-feature",
        children: [
          {
            index: true,
            ...myRoute,
          },
        ],
      },
    ],
  },
]);
```

<!-- AGENTS-GENERATED:END adding-routes -->

<!-- AGENTS-GENERATED:START anti-patterns -->

## Anti-Patterns

| ❌ Avoid                                   | ✅ Use                                                |
| ------------------------------------------ | ----------------------------------------------------- |
| `<a href="/dashboard">` for internal links | `<Link to="/dashboard">` from react-router            |
| Business logic in loaders                  | Call services from pages/hooks, not loaders           |
| Multiple exports from route file           | Only `loader` + `Component`                           |
| Direct SDK calls in loaders                | Use repositories via services                         |
| `useNavigate()` in loader                  | Loaders can't use hooks — use `redirect()`            |
| Full-page reloads                          | Always use `<Link>` — never bare `<a>` for app routes |

<!-- AGENTS-GENERATED:END anti-patterns -->

<!-- AGENTS-GENERATED:START navigation -->

## Navigation Patterns

### Internal Navigation (within app)

```typescript
import { Link, useNavigate } from "react-router";

// Declarative
<Link to="/dashboard">Dashboard</Link>

// Programmatic
const navigate = useNavigate();
navigate("/dashboard");
navigate(-1); // back
navigate(`/negociacoes/${id}`); // with params
```

### External Navigation (off-site)

```typescript
// ✅ OK for external URLs
<a href="https://ixcsoft.com" target="_blank" rel="noopener noreferrer">
  IXC Portal
</a>
```

### With Search Params

```typescript
import { useSearch } from "react-router";

const search = useSearch();
const page = Number(search.page) || 1;

<Link to={`/negociacoes?page=${page + 1}`}>Next</Link>
```

<!-- AGENTS-GENERATED:END navigation -->

## When instructions conflict

The nearest `AGENTS.md` wins. For auth guard details, see `src/features/auth/AGENTS.md`.
