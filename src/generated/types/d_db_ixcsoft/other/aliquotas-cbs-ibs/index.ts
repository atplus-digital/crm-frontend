/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type AliquotasCbsIbs = z.infer<
	typeof import("./schemas").aliquotas_cbs_ibsSchema
>;
export type AliquotasCbsIbsRelations = Record<string, never>;

export type AliquotasCbsIbsRelationKey = keyof AliquotasCbsIbsRelations;
