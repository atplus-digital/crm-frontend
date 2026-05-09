/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadusuariosCircuito = z.infer<
	typeof import("./schemas").radusuarios_circuitoSchema
>;
export type RadusuariosCircuitoRelations = Record<string, never>;

export type RadusuariosCircuitoRelationKey = keyof RadusuariosCircuitoRelations;
