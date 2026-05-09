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
export type FlAdtoSalario = z.infer<
	typeof import("./schemas").fl_adto_salarioSchema
>;
export type FlAdtoSalarioRelations = Record<string, never>;

export type FlAdtoSalarioRelationKey = keyof FlAdtoSalarioRelations;
