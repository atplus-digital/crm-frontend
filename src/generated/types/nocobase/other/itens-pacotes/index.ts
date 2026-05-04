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
export type ItensPacotes = z.infer<
	typeof import("./schemas").itens_pacotesSchema
>;
export type ItensPacotesRelations = z.infer<
	typeof import("./schemas").itens_pacotesRelationSchema
>;

export type ItensPacotesRelationKey = keyof ItensPacotesRelations;
