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
export type SuOssChamadoArquivos = z.infer<
	typeof import("./schemas").su_oss_chamado_arquivosSchema
>;
export type SuOssChamadoArquivosRelations = Record<string, never>;

export type SuOssChamadoArquivosRelationKey =
	keyof SuOssChamadoArquivosRelations;
