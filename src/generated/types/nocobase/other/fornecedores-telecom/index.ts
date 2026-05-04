/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FornecedoresTelecom = z.infer<
	typeof import("./schemas").fornecedores_telecomSchema
>;
export type FornecedoresTelecomRelations = z.infer<
	typeof import("./schemas").fornecedores_telecomRelationSchema
>;

export type FornecedoresTelecomRelationKey = keyof FornecedoresTelecomRelations;
