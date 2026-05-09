/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VscBatch = z.infer<typeof import("./schemas").vsc_batchSchema>;
export type VscBatchRelations = Record<string, never>;

export type VscBatchRelationKey = keyof VscBatchRelations;
