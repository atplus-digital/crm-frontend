/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FnDespesaTipo = z.infer<
	typeof import("./schemas").fn_despesa_tipoSchema
>;
export type FnDespesaTipoRelations = Record<string, never>;

export type FnDespesaTipoRelationKey = keyof FnDespesaTipoRelations;
