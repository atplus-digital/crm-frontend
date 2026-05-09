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
export type LoteImportacaoServicosAdicionais = z.infer<
	typeof import("./schemas").lote_importacao_servicos_adicionaisSchema
>;
export type LoteImportacaoServicosAdicionaisRelations = Record<string, never>;

export type LoteImportacaoServicosAdicionaisRelationKey =
	keyof LoteImportacaoServicosAdicionaisRelations;
