/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SistemasAcessos = z.infer<
	typeof import("./schemas").sistemas_acessosSchema
>;
export type SistemasAcessosRelations = z.infer<
	typeof import("./schemas").sistemas_acessosRelationSchema
>;

export type SistemasAcessosRelationKey = keyof SistemasAcessosRelations;
