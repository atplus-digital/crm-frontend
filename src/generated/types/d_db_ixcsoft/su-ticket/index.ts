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
export type SuTicket = z.infer<typeof import("./schemas").su_ticketSchema>;
export type SuTicketRelations = z.infer<
	typeof import("./schemas").su_ticketRelationSchema
>;

export type SuTicketRelationKey = keyof SuTicketRelations;
