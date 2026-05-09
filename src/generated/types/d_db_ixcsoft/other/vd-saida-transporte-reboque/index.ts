/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VdSaidaTransporteReboque = z.infer<
	typeof import("./schemas").vd_saida_transporte_reboqueSchema
>;
export type VdSaidaTransporteReboqueRelations = Record<string, never>;

export type VdSaidaTransporteReboqueRelationKey =
	keyof VdSaidaTransporteReboqueRelations;
