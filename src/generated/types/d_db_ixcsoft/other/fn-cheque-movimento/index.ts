/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FnChequeMovimento = z.infer<
	typeof import("./schemas").fn_cheque_movimentoSchema
>;
export type FnChequeMovimentoRelations = Record<string, never>;

export type FnChequeMovimentoRelationKey = keyof FnChequeMovimentoRelations;
