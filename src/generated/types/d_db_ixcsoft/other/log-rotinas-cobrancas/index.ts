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
export type LogRotinasCobrancas = z.infer<
	typeof import("./schemas").log_rotinas_cobrancasSchema
>;
export type LogRotinasCobrancasRelations = Record<string, never>;

export type LogRotinasCobrancasRelationKey = keyof LogRotinasCobrancasRelations;
