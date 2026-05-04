/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ComentariosSuspensaoDeContrato = z.infer<
	typeof import("./schemas").comentarios_suspensao_de_contratoSchema
>;
export type ComentariosSuspensaoDeContratoRelations = z.infer<
	typeof import("./schemas").comentarios_suspensao_de_contratoRelationSchema
>;

export type ComentariosSuspensaoDeContratoRelationKey =
	keyof ComentariosSuspensaoDeContratoRelations;
