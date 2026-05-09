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
export type OnusAutorizacaoMassaLogs = z.infer<
	typeof import("./schemas").onus_autorizacao_massa_logsSchema
>;
export type OnusAutorizacaoMassaLogsRelations = Record<string, never>;

export type OnusAutorizacaoMassaLogsRelationKey =
	keyof OnusAutorizacaoMassaLogsRelations;
