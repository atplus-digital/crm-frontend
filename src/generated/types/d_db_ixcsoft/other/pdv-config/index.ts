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
export type PdvConfig = z.infer<typeof import("./schemas").pdv_configSchema>;
export type PdvConfigRelations = Record<string, never>;

export type PdvConfigRelationKey = keyof PdvConfigRelations;
