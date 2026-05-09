/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type TransportadoraServicos = z.infer<
	typeof import("./schemas").transportadora_servicosSchema
>;
export type TransportadoraServicosRelations = Record<string, never>;

export type TransportadoraServicosRelationKey =
	keyof TransportadoraServicosRelations;
