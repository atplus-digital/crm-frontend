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
export type MpElemento = z.infer<typeof import("./schemas").mp_elementoSchema>;
export type MpElementoRelations = Record<string, never>;

export type MpElementoRelationKey = keyof MpElementoRelations;
