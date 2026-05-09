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
export type VoipUraModulosAu = z.infer<
	typeof import("./schemas").voip_ura_modulos_auSchema
>;
export type VoipUraModulosAuRelations = Record<string, never>;

export type VoipUraModulosAuRelationKey = keyof VoipUraModulosAuRelations;
