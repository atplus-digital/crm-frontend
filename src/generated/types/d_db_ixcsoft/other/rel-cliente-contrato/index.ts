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
export type RelClienteContrato = z.infer<
	typeof import("./schemas").rel_cliente_contratoSchema
>;
export type RelClienteContratoRelations = Record<string, never>;

export type RelClienteContratoRelationKey = keyof RelClienteContratoRelations;
