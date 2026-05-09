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
export type RadCaixaFtth = z.infer<
	typeof import("./schemas").rad_caixa_ftthSchema
>;
export type RadCaixaFtthRelations = Record<string, never>;

export type RadCaixaFtthRelationKey = keyof RadCaixaFtthRelations;
