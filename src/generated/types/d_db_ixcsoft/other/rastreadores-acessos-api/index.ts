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
export type RastreadoresAcessosApi = z.infer<
	typeof import("./schemas").rastreadores_acessos_apiSchema
>;
export type RastreadoresAcessosApiRelations = Record<string, never>;

export type RastreadoresAcessosApiRelationKey =
	keyof RastreadoresAcessosApiRelations;
