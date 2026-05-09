/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FnAreceberMotivoDesconto = z.infer<
	typeof import("./schemas").fn_areceber_motivo_descontoSchema
>;
export type FnAreceberMotivoDescontoRelations = Record<string, never>;

export type FnAreceberMotivoDescontoRelationKey =
	keyof FnAreceberMotivoDescontoRelations;
