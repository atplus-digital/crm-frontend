/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Asos = z.infer<typeof import("./schemas").asosSchema>;
export type AsosRelations = z.infer<
	typeof import("./schemas").asosRelationSchema
>;

export type AsosRelationKey = keyof AsosRelations;
