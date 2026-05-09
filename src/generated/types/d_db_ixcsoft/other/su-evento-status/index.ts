/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SuEventoStatus = z.infer<
	typeof import("./schemas").su_evento_statusSchema
>;
export type SuEventoStatusRelations = Record<string, never>;

export type SuEventoStatusRelationKey = keyof SuEventoStatusRelations;
