/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type OpcoesSmpTemplate = z.infer<
	typeof import("./schemas").opcoes_smp_templateSchema
>;
export type OpcoesSmpTemplateRelations = z.infer<
	typeof import("./schemas").opcoes_smp_templateRelationSchema
>;

export type OpcoesSmpTemplateRelationKey = keyof OpcoesSmpTemplateRelations;
