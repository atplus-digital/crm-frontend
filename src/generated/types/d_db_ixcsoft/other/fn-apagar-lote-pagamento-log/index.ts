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
export type FnApagarLotePagamentoLog = z.infer<
	typeof import("./schemas").fn_apagar_lote_pagamento_logSchema
>;
export type FnApagarLotePagamentoLogRelations = Record<string, never>;

export type FnApagarLotePagamentoLogRelationKey =
	keyof FnApagarLotePagamentoLogRelations;
