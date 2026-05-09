/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type DfTipoElementoRegiaoPlano = z.infer<
	typeof import("./schemas").df_tipo_elemento_regiao_planoSchema
>;
export type DfTipoElementoRegiaoPlanoRelations = Record<string, never>;

export type DfTipoElementoRegiaoPlanoRelationKey =
	keyof DfTipoElementoRegiaoPlanoRelations;
