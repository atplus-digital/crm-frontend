/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type LogImportacaoCdrSummit = z.infer<
	typeof import("./schemas").log_importacao_cdr_summitSchema
>;
export type LogImportacaoCdrSummitRelations = Record<string, never>;

export type LogImportacaoCdrSummitRelationKey =
	keyof LogImportacaoCdrSummitRelations;
