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
export type RemocaoSpcSerasa = z.infer<
	typeof import("./schemas").remocao_spc_serasaSchema
>;
export type RemocaoSpcSerasaRelations = Record<string, never>;

export type RemocaoSpcSerasaRelationKey = keyof RemocaoSpcSerasaRelations;
