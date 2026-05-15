/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Cidade = z.infer<typeof import("./schemas").cidadeSchema>;
export type CidadeRelations = z.infer<
	typeof import("./schemas").cidadeRelationSchema
>;

export type CidadeRelationKey = keyof CidadeRelations;
