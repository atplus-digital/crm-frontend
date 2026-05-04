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
export type Pacotes = z.infer<typeof import("./schemas").pacotesSchema>;
export type PacotesRelations = z.infer<
	typeof import("./schemas").pacotesRelationSchema
>;

export type PacotesRelationKey = keyof PacotesRelations;
