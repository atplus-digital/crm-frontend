/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ServiceFiltros = z.infer<
	typeof import("./schemas").service_filtrosSchema
>;
export type ServiceFiltrosRelations = Record<string, never>;

export type ServiceFiltrosRelationKey = keyof ServiceFiltrosRelations;
