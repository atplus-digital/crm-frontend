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
export type DadosBancarios = z.infer<
	typeof import("./schemas").dados_bancariosSchema
>;
export type DadosBancariosRelations = Record<string, never>;

export type DadosBancariosRelationKey = keyof DadosBancariosRelations;
