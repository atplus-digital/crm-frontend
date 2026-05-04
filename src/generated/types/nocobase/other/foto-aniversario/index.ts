/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FotoAniversario = z.infer<
	typeof import("./schemas").foto_aniversarioSchema
>;
export type FotoAniversarioRelations = z.infer<
	typeof import("./schemas").foto_aniversarioRelationSchema
>;

export type FotoAniversarioRelationKey = keyof FotoAniversarioRelations;
