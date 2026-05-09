/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FnAreceberNotasGeradas = z.infer<
	typeof import("./schemas").fn_areceber_notas_geradasSchema
>;
export type FnAreceberNotasGeradasRelations = Record<string, never>;

export type FnAreceberNotasGeradasRelationKey =
	keyof FnAreceberNotasGeradasRelations;
