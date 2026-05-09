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
export type UsuariosAgendaCompromisso = z.infer<
	typeof import("./schemas").usuarios_agenda_compromissoSchema
>;
export type UsuariosAgendaCompromissoRelations = Record<string, never>;

export type UsuariosAgendaCompromissoRelationKey =
	keyof UsuariosAgendaCompromissoRelations;
