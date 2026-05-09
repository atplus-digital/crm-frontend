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
export type ReguaCobrancaCobrancasLogs = z.infer<
	typeof import("./schemas").regua_cobranca_cobrancas_logsSchema
>;
export type ReguaCobrancaCobrancasLogsRelations = Record<string, never>;

export type ReguaCobrancaCobrancasLogsRelationKey =
	keyof ReguaCobrancaCobrancasLogsRelations;
