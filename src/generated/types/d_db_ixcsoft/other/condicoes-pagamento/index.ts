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
export type CondicoesPagamento = z.infer<
	typeof import("./schemas").condicoes_pagamentoSchema
>;
export type CondicoesPagamentoRelations = Record<string, never>;

export type CondicoesPagamentoRelationKey = keyof CondicoesPagamentoRelations;
