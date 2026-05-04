/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Zapsign = z.infer<typeof import("./schemas").zapsignSchema>;
export type ZapsignRelations = z.infer<
	typeof import("./schemas").zapsignRelationSchema
>;

export type ZapsignRelationKey = keyof ZapsignRelations;
