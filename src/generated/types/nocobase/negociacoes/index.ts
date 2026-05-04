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
export type Negociacoes = z.infer<typeof import("./schemas").negociacoesSchema>;
export type NegociacoesRelations = z.infer<
	typeof import("./schemas").negociacoesRelationSchema
>;

export type NegociacoesRelationKey = keyof NegociacoesRelations;
