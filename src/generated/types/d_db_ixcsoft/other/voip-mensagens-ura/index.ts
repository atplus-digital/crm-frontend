/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VoipMensagensUra = z.infer<
	typeof import("./schemas").voip_mensagens_uraSchema
>;
export type VoipMensagensUraRelations = Record<string, never>;

export type VoipMensagensUraRelationKey = keyof VoipMensagensUraRelations;
