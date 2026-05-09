/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type OperadoraTelefonia = z.infer<
	typeof import("./schemas").operadora_telefoniaSchema
>;
export type OperadoraTelefoniaRelations = Record<string, never>;

export type OperadoraTelefoniaRelationKey = keyof OperadoraTelefoniaRelations;
