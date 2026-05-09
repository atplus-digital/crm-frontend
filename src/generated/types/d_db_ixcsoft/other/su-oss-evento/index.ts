/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SuOssEvento = z.infer<
	typeof import("./schemas").su_oss_eventoSchema
>;
export type SuOssEventoRelations = Record<string, never>;

export type SuOssEventoRelationKey = keyof SuOssEventoRelations;
