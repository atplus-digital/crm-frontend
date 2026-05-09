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
export type TransfMotCancelamento = z.infer<
	typeof import("./schemas").transf_mot_cancelamentoSchema
>;
export type TransfMotCancelamentoRelations = Record<string, never>;

export type TransfMotCancelamentoRelationKey =
	keyof TransfMotCancelamentoRelations;
