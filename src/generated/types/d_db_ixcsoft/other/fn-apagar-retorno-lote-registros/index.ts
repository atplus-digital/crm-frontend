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
export type FnApagarRetornoLoteRegistros = z.infer<
	typeof import("./schemas").fn_apagar_retorno_lote_registrosSchema
>;
export type FnApagarRetornoLoteRegistrosRelations = Record<string, never>;

export type FnApagarRetornoLoteRegistrosRelationKey =
	keyof FnApagarRetornoLoteRegistrosRelations;
