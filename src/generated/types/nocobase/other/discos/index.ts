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
export type Discos = z.infer<typeof import("./schemas").discosSchema>;
export type DiscosRelations = z.infer<
	typeof import("./schemas").discosRelationSchema
>;

export type DiscosRelationKey = keyof DiscosRelations;
