/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VoipUraModulos = z.infer<
	typeof import("./schemas").voip_ura_modulosSchema
>;
export type VoipUraModulosRelations = Record<string, never>;

export type VoipUraModulosRelationKey = keyof VoipUraModulosRelations;
