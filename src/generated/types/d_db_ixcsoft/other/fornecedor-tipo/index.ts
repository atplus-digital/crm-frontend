/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FornecedorTipo = z.infer<
	typeof import("./schemas").fornecedor_tipoSchema
>;
export type FornecedorTipoRelations = Record<string, never>;

export type FornecedorTipoRelationKey = keyof FornecedorTipoRelations;
