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
export type RequisicaoMaterial = z.infer<
	typeof import("./schemas").requisicao_materialSchema
>;
export type RequisicaoMaterialRelations = Record<string, never>;

export type RequisicaoMaterialRelationKey = keyof RequisicaoMaterialRelations;
