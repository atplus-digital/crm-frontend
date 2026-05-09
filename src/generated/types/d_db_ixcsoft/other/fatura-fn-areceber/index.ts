/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FaturaFnAreceber = z.infer<
	typeof import("./schemas").fatura_fn_areceberSchema
>;
export type FaturaFnAreceberRelations = Record<string, never>;

export type FaturaFnAreceberRelationKey = keyof FaturaFnAreceberRelations;
