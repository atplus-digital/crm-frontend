/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ProdutosFornecedores = z.infer<
	typeof import("./schemas").produtos_fornecedoresSchema
>;
export type ProdutosFornecedoresRelations = Record<string, never>;

export type ProdutosFornecedoresRelationKey =
	keyof ProdutosFornecedoresRelations;
