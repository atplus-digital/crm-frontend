/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SuDeptoSubGrupoProd = z.infer<
	typeof import("./schemas").su_depto_sub_grupo_prodSchema
>;
export type SuDeptoSubGrupoProdRelations = Record<string, never>;

export type SuDeptoSubGrupoProdRelationKey = keyof SuDeptoSubGrupoProdRelations;
