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
export type WflTarefa = z.infer<typeof import("./schemas").wfl_tarefaSchema>;
export type WflTarefaRelations = Record<string, never>;

export type WflTarefaRelationKey = keyof WflTarefaRelations;
