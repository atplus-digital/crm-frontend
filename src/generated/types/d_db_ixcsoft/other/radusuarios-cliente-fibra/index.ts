/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadusuariosClienteFibra = z.infer<
	typeof import("./schemas").radusuarios_cliente_fibraSchema
>;
export type RadusuariosClienteFibraRelations = Record<string, never>;

export type RadusuariosClienteFibraRelationKey =
	keyof RadusuariosClienteFibraRelations;
