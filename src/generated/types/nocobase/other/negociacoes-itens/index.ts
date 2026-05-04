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
export type NegociacoesItens = z.infer<
	typeof import("./schemas").negociacoes_itensSchema
>;
export type NegociacoesItensRelations = z.infer<
	typeof import("./schemas").negociacoes_itensRelationSchema
>;

export type NegociacoesItensRelationKey = keyof NegociacoesItensRelations;
