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
export type CrmNegociacoesProdutos = z.infer<
	typeof import("./schemas").crm_negociacoes_produtosSchema
>;
export type CrmNegociacoesProdutosRelations = Record<string, never>;

export type CrmNegociacoesProdutosRelationKey =
	keyof CrmNegociacoesProdutosRelations;
