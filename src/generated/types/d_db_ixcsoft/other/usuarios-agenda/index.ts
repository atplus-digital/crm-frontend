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
export type UsuariosAgenda = z.infer<
	typeof import("./schemas").usuarios_agendaSchema
>;
export type UsuariosAgendaRelations = Record<string, never>;

export type UsuariosAgendaRelationKey = keyof UsuariosAgendaRelations;
