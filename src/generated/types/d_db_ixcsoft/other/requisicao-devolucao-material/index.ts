/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RequisicaoDevolucaoMaterial = z.infer<
	typeof import("./schemas").requisicao_devolucao_materialSchema
>;
export type RequisicaoDevolucaoMaterialRelations = Record<string, never>;

export type RequisicaoDevolucaoMaterialRelationKey =
	keyof RequisicaoDevolucaoMaterialRelations;
