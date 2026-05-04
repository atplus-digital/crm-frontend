/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FContatos = z.infer<typeof import("./schemas").f_contatosSchema>;
export type FContatosRelations = z.infer<
	typeof import("./schemas").f_contatosRelationSchema
>;

export type FContatosRelationKey = keyof FContatosRelations;
