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
export type SuOssChamado = z.infer<
	typeof import("./schemas").su_oss_chamadoSchema
>;
export type SuOssChamadoRelations = z.infer<
	typeof import("./schemas").su_oss_chamadoRelationSchema
>;

export type SuOssChamadoRelationKey = keyof SuOssChamadoRelations;
