/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ImCondominioLancPadrao = z.infer<
	typeof import("./schemas").im_condominio_lanc_padraoSchema
>;
export type ImCondominioLancPadraoRelations = Record<string, never>;

export type ImCondominioLancPadraoRelationKey =
	keyof ImCondominioLancPadraoRelations;
