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
export type RelatorioRequisicaoMaterial = z.infer<
	typeof import("./schemas").relatorio_requisicao_materialSchema
>;
export type RelatorioRequisicaoMaterialRelations = Record<string, never>;

export type RelatorioRequisicaoMaterialRelationKey =
	keyof RelatorioRequisicaoMaterialRelations;
