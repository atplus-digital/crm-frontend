/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type MonitoraIndice = z.infer<
	typeof import("./schemas").monitora_indiceSchema
>;
export type MonitoraIndiceRelations = Record<string, never>;

export type MonitoraIndiceRelationKey = keyof MonitoraIndiceRelations;
