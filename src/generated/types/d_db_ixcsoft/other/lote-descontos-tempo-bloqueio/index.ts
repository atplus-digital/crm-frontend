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
export type LoteDescontosTempoBloqueio = z.infer<
	typeof import("./schemas").lote_descontos_tempo_bloqueioSchema
>;
export type LoteDescontosTempoBloqueioRelations = Record<string, never>;

export type LoteDescontosTempoBloqueioRelationKey =
	keyof LoteDescontosTempoBloqueioRelations;
