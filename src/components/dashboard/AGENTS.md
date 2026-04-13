<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-13 -->

# AGENTS.md — dashboard components

<!-- AGENTS-GENERATED:START overview -->
## Overview
Dashboard UI components — user profile view, navigation, and main dashboard layout.
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File | Purpose |
|------|---------|
| `user-dashboard.tsx` | Main dashboard entry point with loading states and layout |
| `profile-details.tsx` | Presentational component for user information display |
| `profile-settings.tsx` | Editable profile form (nickname, email, phone) with validation and submit states |
| `detail-item.tsx` | Reusable label-value pair with icon for data grids |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START data-structure -->
## Data Structure

### AuthUser (from `#/modules/auth`)
```typescript
type AuthUser = {
  id: number;
  email: string;
  username: string;
  nickname: string | null;
  phone: string | null;
  roles: PermissionRole[];
};
```

**Source:** NocoBase `users` collection via `authStore`  
**Access pattern:** `useStore(authStore, (state) => state.user)`

### Display Logic
- **Display name:** `user.nickname || user.username` (fallback chain)
- **Missing data fallbacks:** "Não informado" for optional fields (`nickname`, `phone`)
- **Date formatting:** `formatDateInPortuguese(new Date())` for current date display
<!-- AGENTS-GENERATED:END data-structure -->

<!-- AGENTS-GENERATED:START ui-components -->
## UI Components

### shadcn/ui Components Used
| Component | Source | Usage |
|-----------|--------|-------|
| `Card`, `CardContent` | `#/components/ui/card` | Loading state container |
| `Badge` | `#/components/ui/badge` | Status indicator (Ativo) |
| `Separator` | `#/components/ui/separator` | Visual dividers between sections |

### Lucide Icons
| Icon | Usage |
|------|-------|
| `Calendar` | Current date display |
| `Mail` | Email field |
| `Phone` | Phone field |
| `Shield` | Username field |
| `User` | Nickname field |

### Custom Components

#### `DetailItem`
```typescript
interface DetailItemProps {
  label: string;
  value: string | React.ReactNode;
  icon: React.ReactNode;
}
```
**Purpose:** Label-value pair with icon, used in 2-column grid  
**Styling:** Uppercase label (xs, muted), value with icon (sm)

#### `InfoCard`
```typescript
interface InfoCardProps {
  title: string;
  value: string | React.ReactNode;
}
```
**Purpose:** Summary card for key metrics (ID, Status)  
**Styling:** Card-like with border, title (muted), value (heading, 2xl)
<!-- AGENTS-GENERATED:END ui-components -->

<!-- AGENTS-GENERATED:START patterns -->
## Patterns

### Layout Structure
- **Main container:** `flex min-h-screen flex-col gap-6 bg-background p-6`
- **Content max-width:** `max-w-2xl` centered with `mx-auto`
- **Responsive grid:** `grid-cols-2` on mobile, `sm:grid-cols-2` for tablets+

### Data Presentation
- **Grid layout:** 2-column responsive grid for detail items
- **Icon alignment:** Icons always left of values with `gap-2`
- **Section separation:** `Separator` between logical sections
- **Header pattern:** Title + subtitle with icon (date)

### State Management
- **Loading state:** Card with "Carregando perfil..." message
- **Null safety:** Guard clause `if (!user)` before rendering
- **Store subscription:** `useStore` from `@tanstack/react-store`
- **Profile updates:** `updateProfile()` from `#/modules/auth` + feedback states (`serverError`/`successMessage`)

### Accessibility
- **Semantic HTML:** `<header>`, `<main>`, `<section>` for structure
- **Label association:** Clear label-value relationships
- **Icon accessibility:** Decorative icons with `text-muted-foreground`
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern | Reference file |
|---------|---------------|
| Separation of presentational logic | `src/components/dashboard/profile-details.tsx` |
| Profile editing form | `src/components/dashboard/profile-settings.tsx` |
| Loading state handling | `src/components/dashboard/user-dashboard.tsx` |
| Reusable detail item | `src/components/dashboard/detail-item.tsx` |
| Responsive grid layout | `src/components/dashboard/profile-details.tsx` (line 45-69) |
| Fallback for missing data | `src/components/dashboard/profile-details.tsx` (line 48, 68) |
<!-- AGENTS-GENERATED:END golden-samples -->

<!-- AGENTS-GENERATED:START checklist -->
## PR/commit checklist
- [ ] New dashboard features have appropriate fallbacks for missing user data
- [ ] Components use consistent styling with shadcn/ui
- [ ] Loading states are handled properly
- [ ] User privacy considerations are addressed
- [ ] Responsive layout tested on mobile and desktop
- [ ] Icons are decorative (muted foreground, no aria-label needed)
<!-- AGENTS-GENERATED:END checklist -->
