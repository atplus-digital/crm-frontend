/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ConvenioNotasVinculadas = z.infer<
	typeof import("./schemas").convenio_notas_vinculadasSchema
>;
export type ConvenioNotasVinculadasRelations = Record<string, never>;

export type ConvenioNotasVinculadasRelationKey =
	keyof ConvenioNotasVinculadasRelations;
