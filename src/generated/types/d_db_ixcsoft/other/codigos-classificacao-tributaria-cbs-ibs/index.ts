/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CodigosClassificacaoTributariaCbsIbs = z.infer<
	typeof import("./schemas").codigos_classificacao_tributaria_cbs_ibsSchema
>;
export type CodigosClassificacaoTributariaCbsIbsRelations = Record<
	string,
	never
>;

export type CodigosClassificacaoTributariaCbsIbsRelationKey =
	keyof CodigosClassificacaoTributariaCbsIbsRelations;
