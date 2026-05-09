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
export type TabelaCodClassificaoTribCbsIbs = z.infer<
	typeof import("./schemas").tabela_cod_classificao_trib_cbs_ibsSchema
>;
export type TabelaCodClassificaoTribCbsIbsRelations = Record<string, never>;

export type TabelaCodClassificaoTribCbsIbsRelationKey =
	keyof TabelaCodClassificaoTribCbsIbsRelations;
