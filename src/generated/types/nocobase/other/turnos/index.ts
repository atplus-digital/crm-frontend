/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Turnos = z.infer<typeof import("./schemas").turnosSchema>;
export type TurnosRelations = z.infer<
	typeof import("./schemas").turnosRelationSchema
>;

export type TurnosRelationKey = keyof TurnosRelations;
