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
export type ViewVoipSippeersCliente = z.infer<
	typeof import("./schemas").view_voip_sippeers_clienteSchema
>;
export type ViewVoipSippeersClienteRelations = Record<string, never>;

export type ViewVoipSippeersClienteRelationKey =
	keyof ViewVoipSippeersClienteRelations;
