/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Departamentos = z.infer<
	typeof import("./schemas").departamentosSchema
>;
export type DepartamentosRelations = z.infer<
	typeof import("./schemas").departamentosRelationSchema
>;

export type DepartamentosRelationKey = keyof DepartamentosRelations;
