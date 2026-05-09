/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ViewFnAreceberRemessas = z.infer<
	typeof import("./schemas").view_fn_areceber_remessasSchema
>;
export type ViewFnAreceberRemessasRelations = Record<string, never>;

export type ViewFnAreceberRemessasRelationKey =
	keyof ViewFnAreceberRemessasRelations;
