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
export type TrocaEndereco = z.infer<
	typeof import("./schemas").troca_enderecoSchema
>;
export type TrocaEnderecoRelations = z.infer<
	typeof import("./schemas").troca_enderecoRelationSchema
>;

export type TrocaEnderecoRelationKey = keyof TrocaEnderecoRelations;
