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
export type LogsPatrimonioSerieMac = z.infer<
	typeof import("./schemas").logs_patrimonio_serie_macSchema
>;
export type LogsPatrimonioSerieMacRelations = Record<string, never>;

export type LogsPatrimonioSerieMacRelationKey =
	keyof LogsPatrimonioSerieMacRelations;
