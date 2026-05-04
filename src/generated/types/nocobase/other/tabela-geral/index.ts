/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type TabelaGeral = z.infer<
	typeof import("./schemas").tabela_geralSchema
>;
export type TabelaGeralRelations = z.infer<
	typeof import("./schemas").tabela_geralRelationSchema
>;

export type TabelaGeralRelationKey = keyof TabelaGeralRelations;
