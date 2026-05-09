/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RequisicaoPatrimonio = z.infer<
	typeof import("./schemas").requisicao_patrimonioSchema
>;
export type RequisicaoPatrimonioRelations = Record<string, never>;

export type RequisicaoPatrimonioRelationKey =
	keyof RequisicaoPatrimonioRelations;
