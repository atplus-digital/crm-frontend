/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FornecedorArquivos = z.infer<
	typeof import("./schemas").fornecedor_arquivosSchema
>;
export type FornecedorArquivosRelations = Record<string, never>;

export type FornecedorArquivosRelationKey = keyof FornecedorArquivosRelations;
