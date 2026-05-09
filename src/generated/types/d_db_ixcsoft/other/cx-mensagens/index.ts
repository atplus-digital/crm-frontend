/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CxMensagens = z.infer<
	typeof import("./schemas").cx_mensagensSchema
>;
export type CxMensagensRelations = Record<string, never>;

export type CxMensagensRelationKey = keyof CxMensagensRelations;
