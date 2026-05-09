/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FornecedorContratoModelo = z.infer<
	typeof import("./schemas").fornecedor_contrato_modeloSchema
>;
export type FornecedorContratoModeloRelations = Record<string, never>;

export type FornecedorContratoModeloRelationKey =
	keyof FornecedorContratoModeloRelations;
