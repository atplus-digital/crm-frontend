/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type DfConexoesElementosCoordenadas = z.infer<
	typeof import("./schemas").df_conexoes_elementos_coordenadasSchema
>;
export type DfConexoesElementosCoordenadasRelations = Record<string, never>;

export type DfConexoesElementosCoordenadasRelationKey =
	keyof DfConexoesElementosCoordenadasRelations;
