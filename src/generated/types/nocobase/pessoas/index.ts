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
export type Pessoas = z.infer<typeof import("./schemas").pessoasSchema>;
export type PessoasRelations = z.infer<
	typeof import("./schemas").pessoasRelationSchema
>;

export type PessoasRelationKey = keyof PessoasRelations;
