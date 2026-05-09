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
export type DfConfig = z.infer<typeof import("./schemas").df_configSchema>;
export type DfConfigRelations = Record<string, never>;

export type DfConfigRelationKey = keyof DfConfigRelations;
