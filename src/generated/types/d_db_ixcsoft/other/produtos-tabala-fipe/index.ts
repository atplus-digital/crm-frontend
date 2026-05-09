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
export type ProdutosTabalaFipe = z.infer<
	typeof import("./schemas").produtos_tabala_fipeSchema
>;
export type ProdutosTabalaFipeRelations = Record<string, never>;

export type ProdutosTabalaFipeRelationKey = keyof ProdutosTabalaFipeRelations;
