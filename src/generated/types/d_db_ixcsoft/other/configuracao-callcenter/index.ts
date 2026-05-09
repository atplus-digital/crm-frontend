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
export type ConfiguracaoCallcenter = z.infer<
	typeof import("./schemas").configuracao_callcenterSchema
>;
export type ConfiguracaoCallcenterRelations = Record<string, never>;

export type ConfiguracaoCallcenterRelationKey =
	keyof ConfiguracaoCallcenterRelations;
