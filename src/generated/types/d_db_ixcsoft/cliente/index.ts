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
export type Cliente = z.infer<typeof import("./schemas").clienteSchema>;
export type ClienteRelations = z.infer<
	typeof import("./schemas").clienteRelationSchema
>;

export type ClienteRelationKey = keyof ClienteRelations;
