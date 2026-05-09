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
export type PcpApAssistencia = z.infer<
	typeof import("./schemas").pcp_ap_assistenciaSchema
>;
export type PcpApAssistenciaRelations = Record<string, never>;

export type PcpApAssistenciaRelationKey = keyof PcpApAssistenciaRelations;
