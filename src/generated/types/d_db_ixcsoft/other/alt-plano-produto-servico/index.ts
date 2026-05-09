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
export type AltPlanoProdutoServico = z.infer<
	typeof import("./schemas").alt_plano_produto_servicoSchema
>;
export type AltPlanoProdutoServicoRelations = Record<string, never>;

export type AltPlanoProdutoServicoRelationKey =
	keyof AltPlanoProdutoServicoRelations;
