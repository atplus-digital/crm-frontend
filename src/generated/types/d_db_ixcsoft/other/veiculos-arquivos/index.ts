/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VeiculosArquivos = z.infer<
	typeof import("./schemas").veiculos_arquivosSchema
>;
export type VeiculosArquivosRelations = Record<string, never>;

export type VeiculosArquivosRelationKey = keyof VeiculosArquivosRelations;
