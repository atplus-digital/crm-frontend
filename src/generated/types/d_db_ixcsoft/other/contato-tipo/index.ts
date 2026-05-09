/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ContatoTipo = z.infer<
	typeof import("./schemas").contato_tipoSchema
>;
export type ContatoTipoRelations = Record<string, never>;

export type ContatoTipoRelationKey = keyof ContatoTipoRelations;
