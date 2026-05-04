/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type UtiliCabos = z.infer<typeof import("./schemas").utili_cabosSchema>;
export type UtiliCabosRelations = z.infer<
	typeof import("./schemas").utili_cabosRelationSchema
>;

export type UtiliCabosRelationKey = keyof UtiliCabosRelations;
