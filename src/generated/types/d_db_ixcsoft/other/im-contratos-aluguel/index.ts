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
export type ImContratosAluguel = z.infer<
	typeof import("./schemas").im_contratos_aluguelSchema
>;
export type ImContratosAluguelRelations = Record<string, never>;

export type ImContratosAluguelRelationKey = keyof ImContratosAluguelRelations;
