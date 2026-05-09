/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ServiceCores = z.infer<
	typeof import("./schemas").service_coresSchema
>;
export type ServiceCoresRelations = Record<string, never>;

export type ServiceCoresRelationKey = keyof ServiceCoresRelations;
