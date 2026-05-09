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
export type SuOssKitEquipamento = z.infer<
	typeof import("./schemas").su_oss_kit_equipamentoSchema
>;
export type SuOssKitEquipamentoRelations = Record<string, never>;

export type SuOssKitEquipamentoRelationKey = keyof SuOssKitEquipamentoRelations;
