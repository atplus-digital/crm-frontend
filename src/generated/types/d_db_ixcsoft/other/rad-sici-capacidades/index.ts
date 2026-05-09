/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadSiciCapacidades = z.infer<
	typeof import("./schemas").rad_sici_capacidadesSchema
>;
export type RadSiciCapacidadesRelations = Record<string, never>;

export type RadSiciCapacidadesRelationKey = keyof RadSiciCapacidadesRelations;
