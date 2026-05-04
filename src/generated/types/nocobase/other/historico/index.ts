/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Historico = z.infer<typeof import("./schemas").historicoSchema>;
export type HistoricoRelations = z.infer<
	typeof import("./schemas").historicoRelationSchema
>;

export type HistoricoRelationKey = keyof HistoricoRelations;
