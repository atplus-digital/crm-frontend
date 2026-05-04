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
export type OpcoesStfcTemplate = z.infer<
	typeof import("./schemas").opcoes_stfc_templateSchema
>;
export type OpcoesStfcTemplateRelations = z.infer<
	typeof import("./schemas").opcoes_stfc_templateRelationSchema
>;

export type OpcoesStfcTemplateRelationKey = keyof OpcoesStfcTemplateRelations;
