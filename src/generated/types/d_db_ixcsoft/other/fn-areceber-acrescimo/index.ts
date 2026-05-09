/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FnAreceberAcrescimo = z.infer<
	typeof import("./schemas").fn_areceber_acrescimoSchema
>;
export type FnAreceberAcrescimoRelations = Record<string, never>;

export type FnAreceberAcrescimoRelationKey = keyof FnAreceberAcrescimoRelations;
