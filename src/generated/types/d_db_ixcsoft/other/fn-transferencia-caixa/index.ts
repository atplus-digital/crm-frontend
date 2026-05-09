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
export type FnTransferenciaCaixa = z.infer<
	typeof import("./schemas").fn_transferencia_caixaSchema
>;
export type FnTransferenciaCaixaRelations = Record<string, never>;

export type FnTransferenciaCaixaRelationKey =
	keyof FnTransferenciaCaixaRelations;
