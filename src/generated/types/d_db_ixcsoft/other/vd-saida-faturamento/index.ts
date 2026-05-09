/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VdSaidaFaturamento = z.infer<
	typeof import("./schemas").vd_saida_faturamentoSchema
>;
export type VdSaidaFaturamentoRelations = Record<string, never>;

export type VdSaidaFaturamentoRelationKey = keyof VdSaidaFaturamentoRelations;
