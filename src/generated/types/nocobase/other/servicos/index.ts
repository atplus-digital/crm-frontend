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
export type Servicos = z.infer<typeof import("./schemas").servicosSchema>;
export type ServicosRelations = z.infer<
	typeof import("./schemas").servicosRelationSchema
>;

export type ServicosRelationKey = keyof ServicosRelations;
