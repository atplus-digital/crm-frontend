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
export type RelatorioSuTicket = z.infer<
	typeof import("./schemas").relatorio_su_ticketSchema
>;
export type RelatorioSuTicketRelations = Record<string, never>;

export type RelatorioSuTicketRelationKey = keyof RelatorioSuTicketRelations;
