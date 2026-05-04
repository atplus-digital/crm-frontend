/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type AnexosNegociacoes = z.infer<
	typeof import("./schemas").anexos_negociacoesSchema
>;
export type AnexosNegociacoesRelations = z.infer<
	typeof import("./schemas").anexos_negociacoesRelationSchema
>;

export type AnexosNegociacoesRelationKey = keyof AnexosNegociacoesRelations;
