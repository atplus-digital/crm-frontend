/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FnAreceberAltCarteira = z.infer<
	typeof import("./schemas").fn_areceber_alt_carteiraSchema
>;
export type FnAreceberAltCarteiraRelations = Record<string, never>;

export type FnAreceberAltCarteiraRelationKey =
	keyof FnAreceberAltCarteiraRelations;
