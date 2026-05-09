/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PcpApAcabamento = z.infer<
	typeof import("./schemas").pcp_ap_acabamentoSchema
>;
export type PcpApAcabamentoRelations = Record<string, never>;

export type PcpApAcabamentoRelationKey = keyof PcpApAcabamentoRelations;
