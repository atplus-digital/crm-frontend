/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type _902ctke5dhq = z.infer<
	typeof import("./schemas")._902ctke5dhqSchema
>;
export type _902ctke5dhqRelations = z.infer<
	typeof import("./schemas")._902ctke5dhqRelationSchema
>;

export type _902ctke5dhqRelationKey = keyof _902ctke5dhqRelations;
