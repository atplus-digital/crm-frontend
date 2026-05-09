/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VdSaidaTransporteVolumes = z.infer<
	typeof import("./schemas").vd_saida_transporte_volumesSchema
>;
export type VdSaidaTransporteVolumesRelations = Record<string, never>;

export type VdSaidaTransporteVolumesRelationKey =
	keyof VdSaidaTransporteVolumesRelations;
