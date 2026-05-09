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
export type LoteEnvios = z.infer<typeof import("./schemas").lote_enviosSchema>;
export type LoteEnviosRelations = Record<string, never>;

export type LoteEnviosRelationKey = keyof LoteEnviosRelations;
