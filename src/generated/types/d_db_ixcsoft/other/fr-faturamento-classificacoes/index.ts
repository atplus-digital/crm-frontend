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
export type FrFaturamentoClassificacoes = z.infer<
	typeof import("./schemas").fr_faturamento_classificacoesSchema
>;
export type FrFaturamentoClassificacoesRelations = Record<string, never>;

export type FrFaturamentoClassificacoesRelationKey =
	keyof FrFaturamentoClassificacoesRelations;
