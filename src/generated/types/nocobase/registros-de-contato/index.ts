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
export type RegistrosDeContato = z.infer<
	typeof import("./schemas").registros_de_contatoSchema
>;
export type RegistrosDeContatoRelations = z.infer<
	typeof import("./schemas").registros_de_contatoRelationSchema
>;

export type RegistrosDeContatoRelationKey = keyof RegistrosDeContatoRelations;
