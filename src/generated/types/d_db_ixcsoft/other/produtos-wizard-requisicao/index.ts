/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ProdutosWizardRequisicao = z.infer<
	typeof import("./schemas").produtos_wizard_requisicaoSchema
>;
export type ProdutosWizardRequisicaoRelations = Record<string, never>;

export type ProdutosWizardRequisicaoRelationKey =
	keyof ProdutosWizardRequisicaoRelations;
