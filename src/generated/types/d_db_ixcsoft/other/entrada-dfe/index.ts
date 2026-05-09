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
export type EntradaDfe = z.infer<typeof import("./schemas").entrada_dfeSchema>;
export type EntradaDfeRelations = Record<string, never>;

export type EntradaDfeRelationKey = keyof EntradaDfeRelations;
