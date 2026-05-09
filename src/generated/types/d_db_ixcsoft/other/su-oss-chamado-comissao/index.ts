/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SuOssChamadoComissao = z.infer<
	typeof import("./schemas").su_oss_chamado_comissaoSchema
>;
export type SuOssChamadoComissaoRelations = Record<string, never>;

export type SuOssChamadoComissaoRelationKey =
	keyof SuOssChamadoComissaoRelations;
