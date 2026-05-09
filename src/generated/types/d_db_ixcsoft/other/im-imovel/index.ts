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
export type ImImovel = z.infer<typeof import("./schemas").im_imovelSchema>;
export type ImImovelRelations = Record<string, never>;

export type ImImovelRelationKey = keyof ImImovelRelations;
