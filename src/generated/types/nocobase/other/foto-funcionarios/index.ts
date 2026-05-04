/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FotoFuncionarios = z.infer<
	typeof import("./schemas").foto_funcionariosSchema
>;
export type FotoFuncionariosRelations = z.infer<
	typeof import("./schemas").foto_funcionariosRelationSchema
>;

export type FotoFuncionariosRelationKey = keyof FotoFuncionariosRelations;
