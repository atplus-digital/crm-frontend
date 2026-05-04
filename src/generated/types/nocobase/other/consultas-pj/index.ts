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
export type ConsultasPj = z.infer<
	typeof import("./schemas").consultas_pjSchema
>;
export type ConsultasPjRelations = z.infer<
	typeof import("./schemas").consultas_pjRelationSchema
>;

export type ConsultasPjRelationKey = keyof ConsultasPjRelations;
