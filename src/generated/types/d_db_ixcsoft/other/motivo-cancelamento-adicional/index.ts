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
export type MotivoCancelamentoAdicional = z.infer<
	typeof import("./schemas").motivo_cancelamento_adicionalSchema
>;
export type MotivoCancelamentoAdicionalRelations = Record<string, never>;

export type MotivoCancelamentoAdicionalRelationKey =
	keyof MotivoCancelamentoAdicionalRelations;
