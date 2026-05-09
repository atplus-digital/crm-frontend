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
export type RadSiciRegistros = z.infer<
	typeof import("./schemas").rad_sici_registrosSchema
>;
export type RadSiciRegistrosRelations = Record<string, never>;

export type RadSiciRegistrosRelationKey = keyof RadSiciRegistrosRelations;
