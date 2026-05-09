/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadpopRadioClienteFibraPerfil = z.infer<
	typeof import("./schemas").radpop_radio_cliente_fibra_perfilSchema
>;
export type RadpopRadioClienteFibraPerfilRelations = Record<string, never>;

export type RadpopRadioClienteFibraPerfilRelationKey =
	keyof RadpopRadioClienteFibraPerfilRelations;
