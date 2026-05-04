/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Facilidade = z.infer<typeof import("./schemas").facilidadeSchema>;
export type FacilidadeRelations = z.infer<
	typeof import("./schemas").facilidadeRelationSchema
>;

export type FacilidadeRelationKey = keyof FacilidadeRelations;
