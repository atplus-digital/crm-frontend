/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VoipExtension = z.infer<
	typeof import("./schemas").voip_extensionSchema
>;
export type VoipExtensionRelations = Record<string, never>;

export type VoipExtensionRelationKey = keyof VoipExtensionRelations;
