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
export type ConsultasPf = z.infer<
	typeof import("./schemas").consultas_pfSchema
>;
export type ConsultasPfRelations = z.infer<
	typeof import("./schemas").consultas_pfRelationSchema
>;

export type ConsultasPfRelationKey = keyof ConsultasPfRelations;
