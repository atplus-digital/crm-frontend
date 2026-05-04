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
export type LancamentosFerias = z.infer<
	typeof import("./schemas").lancamentos_feriasSchema
>;
export type LancamentosFeriasRelations = z.infer<
	typeof import("./schemas").lancamentos_feriasRelationSchema
>;

export type LancamentosFeriasRelationKey = keyof LancamentosFeriasRelations;
