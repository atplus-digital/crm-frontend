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
export type ReguaCobrancaLotes = z.infer<
	typeof import("./schemas").regua_cobranca_lotesSchema
>;
export type ReguaCobrancaLotesRelations = Record<string, never>;

export type ReguaCobrancaLotesRelationKey = keyof ReguaCobrancaLotesRelations;
