/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadpopRadioClienteNeutroVlan = z.infer<
	typeof import("./schemas").radpop_radio_cliente_neutro_vlanSchema
>;
export type RadpopRadioClienteNeutroVlanRelations = Record<string, never>;

export type RadpopRadioClienteNeutroVlanRelationKey =
	keyof RadpopRadioClienteNeutroVlanRelations;
