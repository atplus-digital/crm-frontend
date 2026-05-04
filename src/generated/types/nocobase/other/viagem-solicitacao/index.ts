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
export type ViagemSolicitacao = z.infer<
	typeof import("./schemas").viagem_solicitacaoSchema
>;
export type ViagemSolicitacaoRelations = z.infer<
	typeof import("./schemas").viagem_solicitacaoRelationSchema
>;

export type ViagemSolicitacaoRelationKey = keyof ViagemSolicitacaoRelations;
