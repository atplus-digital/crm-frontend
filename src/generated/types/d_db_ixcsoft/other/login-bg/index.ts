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
export type LoginBg = z.infer<typeof import("./schemas").login_bgSchema>;
export type LoginBgRelations = Record<string, never>;

export type LoginBgRelationKey = keyof LoginBgRelations;
