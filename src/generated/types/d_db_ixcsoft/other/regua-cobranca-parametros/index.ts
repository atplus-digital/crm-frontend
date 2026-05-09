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
export type ReguaCobrancaParametros = z.infer<
	typeof import("./schemas").regua_cobranca_parametrosSchema
>;
export type ReguaCobrancaParametrosRelations = Record<string, never>;

export type ReguaCobrancaParametrosRelationKey =
	keyof ReguaCobrancaParametrosRelations;
