/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Labels + Enums
export * from "./labels";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Radippoolv6 = z.infer<typeof import("./schemas").radippoolv6Schema>;
export type Radippoolv6Relations = Record<string, never>;

export type Radippoolv6RelationKey = keyof Radippoolv6Relations;
