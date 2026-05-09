/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadusuariosConsumoM = z.infer<
	typeof import("./schemas").radusuarios_consumo_mSchema
>;
export type RadusuariosConsumoMRelations = Record<string, never>;

export type RadusuariosConsumoMRelationKey = keyof RadusuariosConsumoMRelations;
