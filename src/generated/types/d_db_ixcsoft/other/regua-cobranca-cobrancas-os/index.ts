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
export type ReguaCobrancaCobrancasOs = z.infer<
	typeof import("./schemas").regua_cobranca_cobrancas_osSchema
>;
export type ReguaCobrancaCobrancasOsRelations = Record<string, never>;

export type ReguaCobrancaCobrancasOsRelationKey =
	keyof ReguaCobrancaCobrancasOsRelations;
