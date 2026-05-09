/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FnTipoDespesa = z.infer<
	typeof import("./schemas").fn_tipo_despesaSchema
>;
export type FnTipoDespesaRelations = Record<string, never>;

export type FnTipoDespesaRelationKey = keyof FnTipoDespesaRelations;
