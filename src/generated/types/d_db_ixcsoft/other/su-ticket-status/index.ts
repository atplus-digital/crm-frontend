/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SuTicketStatus = z.infer<
	typeof import("./schemas").su_ticket_statusSchema
>;
export type SuTicketStatusRelations = Record<string, never>;

export type SuTicketStatusRelationKey = keyof SuTicketStatusRelations;
