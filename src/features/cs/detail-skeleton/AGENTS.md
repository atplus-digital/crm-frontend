<!-- Managed by agent: keep sections and order; edit content, not structure -->

# AGENTS.md — detail-skeleton

## Overview

Shared skeleton components for Customer Success detail screens.

## Components

| File                        | Export                | Description                                                       |
| --------------------------- | --------------------- | ----------------------------------------------------------------- |
| `detail-skeleton.tsx`       | `DetailSkeleton`      | Skeleton for detail sections with configurable number of sections |
| `card-section-skeleton.tsx` | `CardSectionSkeleton` | Skeleton wrapped in Card component with CardHeader/CardContent    |

## Usage

```tsx
import { DetailSkeleton, CardSectionSkeleton } from "#/features/cs/detail-skeleton";

// DetailSkeleton - skeleton for detail sections
<DetailSkeleton sections={3} />

// CardSectionSkeleton - skeleton in card format
<CardSectionSkeleton />
```
