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
export type Configuracoes = z.infer<
	typeof import("./schemas").configuracoesSchema
>;
export type ConfiguracoesRelations = z.infer<
	typeof import("./schemas").configuracoesRelationSchema
>;

export type ConfiguracoesRelationKey = keyof ConfiguracoesRelations;
