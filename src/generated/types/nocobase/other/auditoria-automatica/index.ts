/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type AuditoriaAutomatica = z.infer<
	typeof import("./schemas").auditoria_automaticaSchema
>;
export type AuditoriaAutomaticaRelations = z.infer<
	typeof import("./schemas").auditoria_automaticaRelationSchema
>;

export type AuditoriaAutomaticaRelationKey = keyof AuditoriaAutomaticaRelations;
