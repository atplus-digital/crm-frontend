/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RedesAutorizadas = z.infer<
	typeof import("./schemas").redes_autorizadasSchema
>;
export type RedesAutorizadasRelations = Record<string, never>;

export type RedesAutorizadasRelationKey = keyof RedesAutorizadasRelations;
