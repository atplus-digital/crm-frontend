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
export type CartoesFixadosKanban = z.infer<
	typeof import("./schemas").cartoes_fixados_kanbanSchema
>;
export type CartoesFixadosKanbanRelations = Record<string, never>;

export type CartoesFixadosKanbanRelationKey =
	keyof CartoesFixadosKanbanRelations;
