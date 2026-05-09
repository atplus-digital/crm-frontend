/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadusuariosConsumo = z.infer<
	typeof import("./schemas").radusuarios_consumoSchema
>;
export type RadusuariosConsumoRelations = Record<string, never>;

export type RadusuariosConsumoRelationKey = keyof RadusuariosConsumoRelations;
