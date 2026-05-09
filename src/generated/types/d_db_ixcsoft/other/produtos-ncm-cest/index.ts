/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ProdutosNcmCest = z.infer<
	typeof import("./schemas").produtos_ncm_cestSchema
>;
export type ProdutosNcmCestRelations = Record<string, never>;

export type ProdutosNcmCestRelationKey = keyof ProdutosNcmCestRelations;
