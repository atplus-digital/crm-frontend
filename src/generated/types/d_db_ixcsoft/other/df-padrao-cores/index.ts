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
export type DfPadraoCores = z.infer<
	typeof import("./schemas").df_padrao_coresSchema
>;
export type DfPadraoCoresRelations = Record<string, never>;

export type DfPadraoCoresRelationKey = keyof DfPadraoCoresRelations;
