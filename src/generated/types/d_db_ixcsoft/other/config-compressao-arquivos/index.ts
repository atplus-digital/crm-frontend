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
export type ConfigCompressaoArquivos = z.infer<
	typeof import("./schemas").config_compressao_arquivosSchema
>;
export type ConfigCompressaoArquivosRelations = Record<string, never>;

export type ConfigCompressaoArquivosRelationKey =
	keyof ConfigCompressaoArquivosRelations;
