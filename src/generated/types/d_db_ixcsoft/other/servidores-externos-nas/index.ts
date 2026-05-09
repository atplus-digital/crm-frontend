/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ServidoresExternosNas = z.infer<
	typeof import("./schemas").servidores_externos_nasSchema
>;
export type ServidoresExternosNasRelations = Record<string, never>;

export type ServidoresExternosNasRelationKey =
	keyof ServidoresExternosNasRelations;
