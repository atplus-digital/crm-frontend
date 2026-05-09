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
export type ProdutosIxcMvno = z.infer<
	typeof import("./schemas").produtos_ixc_mvnoSchema
>;
export type ProdutosIxcMvnoRelations = Record<string, never>;

export type ProdutosIxcMvnoRelationKey = keyof ProdutosIxcMvnoRelations;
