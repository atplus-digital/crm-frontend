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
export type FaturaMigracaoLog = z.infer<
	typeof import("./schemas").fatura_migracao_logSchema
>;
export type FaturaMigracaoLogRelations = Record<string, never>;

export type FaturaMigracaoLogRelationKey = keyof FaturaMigracaoLogRelations;
