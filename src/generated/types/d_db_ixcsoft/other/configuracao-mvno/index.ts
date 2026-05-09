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
export type ConfiguracaoMvno = z.infer<
	typeof import("./schemas").configuracao_mvnoSchema
>;
export type ConfiguracaoMvnoRelations = Record<string, never>;

export type ConfiguracaoMvnoRelationKey = keyof ConfiguracaoMvnoRelations;
