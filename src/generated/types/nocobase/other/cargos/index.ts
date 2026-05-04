/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Cargos = z.infer<typeof import("./schemas").cargosSchema>;
export type CargosRelations = z.infer<
	typeof import("./schemas").cargosRelationSchema
>;

export type CargosRelationKey = keyof CargosRelations;
