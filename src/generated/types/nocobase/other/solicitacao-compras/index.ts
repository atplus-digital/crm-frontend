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
export type SolicitacaoCompras = z.infer<
	typeof import("./schemas").solicitacao_comprasSchema
>;
export type SolicitacaoComprasRelations = z.infer<
	typeof import("./schemas").solicitacao_comprasRelationSchema
>;

export type SolicitacaoComprasRelationKey = keyof SolicitacaoComprasRelations;
