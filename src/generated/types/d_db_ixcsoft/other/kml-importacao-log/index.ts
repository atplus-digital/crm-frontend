/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type KmlImportacaoLog = z.infer<
	typeof import("./schemas").kml_importacao_logSchema
>;
export type KmlImportacaoLogRelations = Record<string, never>;

export type KmlImportacaoLogRelationKey = keyof KmlImportacaoLogRelations;
