/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FuncionariosArquivos = z.infer<
	typeof import("./schemas").funcionarios_arquivosSchema
>;
export type FuncionariosArquivosRelations = Record<string, never>;

export type FuncionariosArquivosRelationKey =
	keyof FuncionariosArquivosRelations;
