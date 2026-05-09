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
export type HsAdmSecao = z.infer<typeof import("./schemas").hs_adm_secaoSchema>;
export type HsAdmSecaoRelations = Record<string, never>;

export type HsAdmSecaoRelationKey = keyof HsAdmSecaoRelations;
