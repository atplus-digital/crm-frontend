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
export type LoteEnvio = z.infer<typeof import("./schemas").lote_envioSchema>;
export type LoteEnvioRelations = Record<string, never>;

export type LoteEnvioRelationKey = keyof LoteEnvioRelations;
