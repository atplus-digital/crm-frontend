/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SuOssChamadoMpMiniProjeto = z.infer<
	typeof import("./schemas").su_oss_chamado_mp_mini_projetoSchema
>;
export type SuOssChamadoMpMiniProjetoRelations = Record<string, never>;

export type SuOssChamadoMpMiniProjetoRelationKey =
	keyof SuOssChamadoMpMiniProjetoRelations;
