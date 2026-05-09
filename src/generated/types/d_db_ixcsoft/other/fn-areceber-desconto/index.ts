/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FnAreceberDesconto = z.infer<
	typeof import("./schemas").fn_areceber_descontoSchema
>;
export type FnAreceberDescontoRelations = Record<string, never>;

export type FnAreceberDescontoRelationKey = keyof FnAreceberDescontoRelations;
