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
export type FnMovimFinanLanc = z.infer<
	typeof import("./schemas").fn_movim_finan_lancSchema
>;
export type FnMovimFinanLancRelations = Record<string, never>;

export type FnMovimFinanLancRelationKey = keyof FnMovimFinanLancRelations;
