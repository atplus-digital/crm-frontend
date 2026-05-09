/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VoipExtensionGrupo = z.infer<
	typeof import("./schemas").voip_extension_grupoSchema
>;
export type VoipExtensionGrupoRelations = Record<string, never>;

export type VoipExtensionGrupoRelationKey = keyof VoipExtensionGrupoRelations;
