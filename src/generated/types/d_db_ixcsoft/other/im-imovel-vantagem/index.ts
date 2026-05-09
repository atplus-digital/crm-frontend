/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ImImovelVantagem = z.infer<
	typeof import("./schemas").im_imovel_vantagemSchema
>;
export type ImImovelVantagemRelations = Record<string, never>;

export type ImImovelVantagemRelationKey = keyof ImImovelVantagemRelations;
