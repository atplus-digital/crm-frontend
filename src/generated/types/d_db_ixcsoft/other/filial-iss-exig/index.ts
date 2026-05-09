/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FilialIssExig = z.infer<
	typeof import("./schemas").filial_iss_exigSchema
>;
export type FilialIssExigRelations = Record<string, never>;

export type FilialIssExigRelationKey = keyof FilialIssExigRelations;
