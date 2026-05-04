/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CabosOpticos = z.infer<
	typeof import("./schemas").cabos_opticosSchema
>;
export type CabosOpticosRelations = z.infer<
	typeof import("./schemas").cabos_opticosRelationSchema
>;

export type CabosOpticosRelationKey = keyof CabosOpticosRelations;
