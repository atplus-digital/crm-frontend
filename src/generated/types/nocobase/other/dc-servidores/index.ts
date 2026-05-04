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
export type DcServidores = z.infer<
	typeof import("./schemas").dc_servidoresSchema
>;
export type DcServidoresRelations = z.infer<
	typeof import("./schemas").dc_servidoresRelationSchema
>;

export type DcServidoresRelationKey = keyof DcServidoresRelations;
