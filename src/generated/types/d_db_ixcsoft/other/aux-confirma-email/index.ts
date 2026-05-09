/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type AuxConfirmaEmail = z.infer<
	typeof import("./schemas").aux_confirma_emailSchema
>;
export type AuxConfirmaEmailRelations = Record<string, never>;

export type AuxConfirmaEmailRelationKey = keyof AuxConfirmaEmailRelations;
