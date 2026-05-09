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
export type ServidoresExternos = z.infer<
	typeof import("./schemas").servidores_externosSchema
>;
export type ServidoresExternosRelations = Record<string, never>;

export type ServidoresExternosRelationKey = keyof ServidoresExternosRelations;
