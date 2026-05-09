/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type DiciPppLineProcessor = z.infer<
	typeof import("./schemas").dici_ppp_line_processorSchema
>;
export type DiciPppLineProcessorRelations = Record<string, never>;

export type DiciPppLineProcessorRelationKey =
	keyof DiciPppLineProcessorRelations;
