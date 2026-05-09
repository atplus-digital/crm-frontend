/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PcpApProducao = z.infer<
	typeof import("./schemas").pcp_ap_producaoSchema
>;
export type PcpApProducaoRelations = Record<string, never>;

export type PcpApProducaoRelationKey = keyof PcpApProducaoRelations;
