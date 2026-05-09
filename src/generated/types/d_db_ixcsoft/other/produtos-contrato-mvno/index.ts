/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ProdutosContratoMvno = z.infer<
	typeof import("./schemas").produtos_contrato_mvnoSchema
>;
export type ProdutosContratoMvnoRelations = Record<string, never>;

export type ProdutosContratoMvnoRelationKey =
	keyof ProdutosContratoMvnoRelations;
