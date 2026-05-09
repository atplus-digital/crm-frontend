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
export type MpMiniProjeto = z.infer<
	typeof import("./schemas").mp_mini_projetoSchema
>;
export type MpMiniProjetoRelations = Record<string, never>;

export type MpMiniProjetoRelationKey = keyof MpMiniProjetoRelations;
