/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SalesUsuarioConfig = z.infer<
	typeof import("./schemas").sales_usuario_configSchema
>;
export type SalesUsuarioConfigRelations = Record<string, never>;

export type SalesUsuarioConfigRelationKey = keyof SalesUsuarioConfigRelations;
