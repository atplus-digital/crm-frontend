/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SuOssModeloImpressao = z.infer<
	typeof import("./schemas").su_oss_modelo_impressaoSchema
>;
export type SuOssModeloImpressaoRelations = Record<string, never>;

export type SuOssModeloImpressaoRelationKey =
	keyof SuOssModeloImpressaoRelations;
