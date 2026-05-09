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
export type VoipUraModulosMe = z.infer<
	typeof import("./schemas").voip_ura_modulos_meSchema
>;
export type VoipUraModulosMeRelations = Record<string, never>;

export type VoipUraModulosMeRelationKey = keyof VoipUraModulosMeRelations;
