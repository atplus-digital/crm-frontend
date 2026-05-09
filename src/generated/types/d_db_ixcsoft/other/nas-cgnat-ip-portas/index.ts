/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type NasCgnatIpPortas = z.infer<
	typeof import("./schemas").nas_cgnat_ip_portasSchema
>;
export type NasCgnatIpPortasRelations = Record<string, never>;

export type NasCgnatIpPortasRelationKey = keyof NasCgnatIpPortasRelations;
