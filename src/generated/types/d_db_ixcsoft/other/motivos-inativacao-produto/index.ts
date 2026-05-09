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
export type MotivosInativacaoProduto = z.infer<
	typeof import("./schemas").motivos_inativacao_produtoSchema
>;
export type MotivosInativacaoProdutoRelations = Record<string, never>;

export type MotivosInativacaoProdutoRelationKey =
	keyof MotivosInativacaoProdutoRelations;
