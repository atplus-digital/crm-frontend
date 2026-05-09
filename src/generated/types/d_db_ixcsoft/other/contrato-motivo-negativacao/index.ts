/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ContratoMotivoNegativacao = z.infer<
	typeof import("./schemas").contrato_motivo_negativacaoSchema
>;
export type ContratoMotivoNegativacaoRelations = Record<string, never>;

export type ContratoMotivoNegativacaoRelationKey =
	keyof ContratoMotivoNegativacaoRelations;
