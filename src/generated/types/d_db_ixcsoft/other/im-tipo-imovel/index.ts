/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ImTipoImovel = z.infer<
	typeof import("./schemas").im_tipo_imovelSchema
>;
export type ImTipoImovelRelations = Record<string, never>;

export type ImTipoImovelRelationKey = keyof ImTipoImovelRelations;
