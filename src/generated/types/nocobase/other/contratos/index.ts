/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Contratos = z.infer<typeof import("./schemas").contratosSchema>;
export type ContratosRelations = z.infer<
	typeof import("./schemas").contratosRelationSchema
>;

export type ContratosRelationKey = keyof ContratosRelations;
