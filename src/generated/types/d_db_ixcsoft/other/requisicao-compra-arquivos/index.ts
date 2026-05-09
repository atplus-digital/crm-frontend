/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RequisicaoCompraArquivos = z.infer<
	typeof import("./schemas").requisicao_compra_arquivosSchema
>;
export type RequisicaoCompraArquivosRelations = Record<string, never>;

export type RequisicaoCompraArquivosRelationKey =
	keyof RequisicaoCompraArquivosRelations;
