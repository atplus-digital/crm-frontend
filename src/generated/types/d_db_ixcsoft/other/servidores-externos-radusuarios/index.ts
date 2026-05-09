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
export type ServidoresExternosRadusuarios = z.infer<
	typeof import("./schemas").servidores_externos_radusuariosSchema
>;
export type ServidoresExternosRadusuariosRelations = Record<string, never>;

export type ServidoresExternosRadusuariosRelationKey =
	keyof ServidoresExternosRadusuariosRelations;
