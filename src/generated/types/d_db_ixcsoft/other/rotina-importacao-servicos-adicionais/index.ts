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
export type RotinaImportacaoServicosAdicionais = z.infer<
	typeof import("./schemas").rotina_importacao_servicos_adicionaisSchema
>;
export type RotinaImportacaoServicosAdicionaisRelations = Record<string, never>;

export type RotinaImportacaoServicosAdicionaisRelationKey =
	keyof RotinaImportacaoServicosAdicionaisRelations;
