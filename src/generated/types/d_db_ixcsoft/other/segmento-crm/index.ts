/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SegmentoCrm = z.infer<
	typeof import("./schemas").segmento_crmSchema
>;
export type SegmentoCrmRelations = Record<string, never>;

export type SegmentoCrmRelationKey = keyof SegmentoCrmRelations;
