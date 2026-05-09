/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FlFuncoes = z.infer<typeof import("./schemas").fl_funcoesSchema>;
export type FlFuncoesRelations = Record<string, never>;

export type FlFuncoesRelationKey = keyof FlFuncoesRelations;
