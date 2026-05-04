/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Labels + Enums
export * from "./labels";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type DatacenterMemorias = z.infer<
	typeof import("./schemas").datacenter_memoriasSchema
>;
export type DatacenterMemoriasRelations = z.infer<
	typeof import("./schemas").datacenter_memoriasRelationSchema
>;

export type DatacenterMemoriasRelationKey = keyof DatacenterMemoriasRelations;
