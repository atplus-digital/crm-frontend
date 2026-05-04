/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type P10scfhrhkw = z.infer<typeof import("./schemas").p10scfhrhkwSchema>;
export type P10scfhrhkwRelations = z.infer<
	typeof import("./schemas").p10scfhrhkwRelationSchema
>;

export type P10scfhrhkwRelationKey = keyof P10scfhrhkwRelations;
