/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ScriptsAjustes = z.infer<
	typeof import("./schemas").scripts_ajustesSchema
>;
export type ScriptsAjustesRelations = Record<string, never>;

export type ScriptsAjustesRelationKey = keyof ScriptsAjustesRelations;
