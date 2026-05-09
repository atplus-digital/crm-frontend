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
export type CotacaoCompraItens = z.infer<
	typeof import("./schemas").cotacao_compra_itensSchema
>;
export type CotacaoCompraItensRelations = Record<string, never>;

export type CotacaoCompraItensRelationKey = keyof CotacaoCompraItensRelations;
