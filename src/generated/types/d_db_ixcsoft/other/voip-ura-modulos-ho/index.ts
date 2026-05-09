/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VoipUraModulosHo = z.infer<
	typeof import("./schemas").voip_ura_modulos_hoSchema
>;
export type VoipUraModulosHoRelations = Record<string, never>;

export type VoipUraModulosHoRelationKey = keyof VoipUraModulosHoRelations;
