/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type LogsCargos = z.infer<typeof import("./schemas").logs_cargosSchema>;
export type LogsCargosRelations = z.infer<
	typeof import("./schemas").logs_cargosRelationSchema
>;

export type LogsCargosRelationKey = keyof LogsCargosRelations;
