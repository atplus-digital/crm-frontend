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
export type DfConexoes = z.infer<typeof import("./schemas").df_conexoesSchema>;
export type DfConexoesRelations = Record<string, never>;

export type DfConexoesRelationKey = keyof DfConexoesRelations;
