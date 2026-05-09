/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadCaixaFtthTecnologia = z.infer<
	typeof import("./schemas").rad_caixa_ftth_tecnologiaSchema
>;
export type RadCaixaFtthTecnologiaRelations = Record<string, never>;

export type RadCaixaFtthTecnologiaRelationKey =
	keyof RadCaixaFtthTecnologiaRelations;
