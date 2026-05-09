/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ProdutosCnfClassificacaoTributariaCol = z.infer<
	typeof import("./schemas").produtos_cnf_classificacao_tributaria_colSchema
>;
export type ProdutosCnfClassificacaoTributariaColRelations = Record<
	string,
	never
>;

export type ProdutosCnfClassificacaoTributariaColRelationKey =
	keyof ProdutosCnfClassificacaoTributariaColRelations;
