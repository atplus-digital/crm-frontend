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
export type RequisicaoMaterialPatrimonioWizard = z.infer<
	typeof import("./schemas").requisicao_material_patrimonio_wizardSchema
>;
export type RequisicaoMaterialPatrimonioWizardRelations = Record<string, never>;

export type RequisicaoMaterialPatrimonioWizardRelationKey =
	keyof RequisicaoMaterialPatrimonioWizardRelations;
