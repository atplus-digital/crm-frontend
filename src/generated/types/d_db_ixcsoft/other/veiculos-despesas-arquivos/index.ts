/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VeiculosDespesasArquivos = z.infer<
	typeof import("./schemas").veiculos_despesas_arquivosSchema
>;
export type VeiculosDespesasArquivosRelations = Record<string, never>;

export type VeiculosDespesasArquivosRelationKey =
	keyof VeiculosDespesasArquivosRelations;
