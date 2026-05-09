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
export type LogsExclusao = z.infer<
	typeof import("./schemas").logs_exclusaoSchema
>;
export type LogsExclusaoRelations = Record<string, never>;

export type LogsExclusaoRelationKey = keyof LogsExclusaoRelations;
