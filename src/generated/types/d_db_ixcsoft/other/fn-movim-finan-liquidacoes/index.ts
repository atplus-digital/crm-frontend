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
export type FnMovimFinanLiquidacoes = z.infer<
	typeof import("./schemas").fn_movim_finan_liquidacoesSchema
>;
export type FnMovimFinanLiquidacoesRelations = Record<string, never>;

export type FnMovimFinanLiquidacoesRelationKey =
	keyof FnMovimFinanLiquidacoesRelations;
