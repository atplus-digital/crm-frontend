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
export type ReguaCobrancaEnvios = z.infer<
	typeof import("./schemas").regua_cobranca_enviosSchema
>;
export type ReguaCobrancaEnviosRelations = Record<string, never>;

export type ReguaCobrancaEnviosRelationKey = keyof ReguaCobrancaEnviosRelations;
