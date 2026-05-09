/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ImportarArquivosFiscais = z.infer<
	typeof import("./schemas").importar_arquivos_fiscaisSchema
>;
export type ImportarArquivosFiscaisRelations = Record<string, never>;

export type ImportarArquivosFiscaisRelationKey =
	keyof ImportarArquivosFiscaisRelations;
