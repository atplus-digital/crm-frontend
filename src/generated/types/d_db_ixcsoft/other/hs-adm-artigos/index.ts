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
export type HsAdmArtigos = z.infer<
	typeof import("./schemas").hs_adm_artigosSchema
>;
export type HsAdmArtigosRelations = Record<string, never>;

export type HsAdmArtigosRelationKey = keyof HsAdmArtigosRelations;
