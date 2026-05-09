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
export type ImCondominioLancMensal = z.infer<
	typeof import("./schemas").im_condominio_lanc_mensalSchema
>;
export type ImCondominioLancMensalRelations = Record<string, never>;

export type ImCondominioLancMensalRelationKey =
	keyof ImCondominioLancMensalRelations;
