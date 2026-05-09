/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SalaDeConferencia = z.infer<
	typeof import("./schemas").sala_de_conferenciaSchema
>;
export type SalaDeConferenciaRelations = Record<string, never>;

export type SalaDeConferenciaRelationKey = keyof SalaDeConferenciaRelations;
