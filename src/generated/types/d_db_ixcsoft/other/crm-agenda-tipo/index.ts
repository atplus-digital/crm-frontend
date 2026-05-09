/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CrmAgendaTipo = z.infer<
	typeof import("./schemas").crm_agenda_tipoSchema
>;
export type CrmAgendaTipoRelations = Record<string, never>;

export type CrmAgendaTipoRelationKey = keyof CrmAgendaTipoRelations;
