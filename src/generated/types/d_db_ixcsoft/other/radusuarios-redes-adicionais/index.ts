/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadusuariosRedesAdicionais = z.infer<
	typeof import("./schemas").radusuarios_redes_adicionaisSchema
>;
export type RadusuariosRedesAdicionaisRelations = Record<string, never>;

export type RadusuariosRedesAdicionaisRelationKey =
	keyof RadusuariosRedesAdicionaisRelations;
