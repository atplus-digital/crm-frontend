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
export type IxcTarefas = z.infer<typeof import("./schemas").ixc_tarefasSchema>;
export type IxcTarefasRelations = Record<string, never>;

export type IxcTarefasRelationKey = keyof IxcTarefasRelations;
