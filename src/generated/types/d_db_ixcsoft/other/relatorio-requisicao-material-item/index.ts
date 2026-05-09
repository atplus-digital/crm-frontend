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
export type RelatorioRequisicaoMaterialItem = z.infer<
	typeof import("./schemas").relatorio_requisicao_material_itemSchema
>;
export type RelatorioRequisicaoMaterialItemRelations = Record<string, never>;

export type RelatorioRequisicaoMaterialItemRelationKey =
	keyof RelatorioRequisicaoMaterialItemRelations;
