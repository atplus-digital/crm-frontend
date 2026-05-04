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
export type Empresas = z.infer<typeof import("./schemas").empresasSchema>;
export type EmpresasRelations = z.infer<
	typeof import("./schemas").empresasRelationSchema
>;

export type EmpresasRelationKey = keyof EmpresasRelations;
