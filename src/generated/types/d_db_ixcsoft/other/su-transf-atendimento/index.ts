/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SuTransfAtendimento = z.infer<
	typeof import("./schemas").su_transf_atendimentoSchema
>;
export type SuTransfAtendimentoRelations = Record<string, never>;

export type SuTransfAtendimentoRelationKey = keyof SuTransfAtendimentoRelations;
