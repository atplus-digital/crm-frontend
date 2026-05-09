/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CotacaoCompra = z.infer<
	typeof import("./schemas").cotacao_compraSchema
>;
export type CotacaoCompraRelations = Record<string, never>;

export type CotacaoCompraRelationKey = keyof CotacaoCompraRelations;
