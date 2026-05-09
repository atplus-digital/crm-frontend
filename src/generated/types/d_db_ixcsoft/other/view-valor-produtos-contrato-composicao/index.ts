/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ViewValorProdutosContratoComposicao = z.infer<
	typeof import("./schemas").view_valor_produtos_contrato_composicaoSchema
>;
export type ViewValorProdutosContratoComposicaoRelations = Record<
	string,
	never
>;

export type ViewValorProdutosContratoComposicaoRelationKey =
	keyof ViewValorProdutosContratoComposicaoRelations;
