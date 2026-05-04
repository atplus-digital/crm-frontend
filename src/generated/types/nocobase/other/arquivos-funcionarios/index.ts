/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ArquivosFuncionarios = z.infer<
	typeof import("./schemas").arquivos_funcionariosSchema
>;
export type ArquivosFuncionariosRelations = z.infer<
	typeof import("./schemas").arquivos_funcionariosRelationSchema
>;

export type ArquivosFuncionariosRelationKey =
	keyof ArquivosFuncionariosRelations;
