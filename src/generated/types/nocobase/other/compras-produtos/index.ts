/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ComprasProdutos = z.infer<
	typeof import("./schemas").compras_produtosSchema
>;
export type ComprasProdutosRelations = z.infer<
	typeof import("./schemas").compras_produtosRelationSchema
>;

export type ComprasProdutosRelationKey = keyof ComprasProdutosRelations;
