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
export type IxcPermissoesCampos = z.infer<
	typeof import("./schemas").ixc_permissoes_camposSchema
>;
export type IxcPermissoesCamposRelations = Record<string, never>;

export type IxcPermissoesCamposRelationKey = keyof IxcPermissoesCamposRelations;
