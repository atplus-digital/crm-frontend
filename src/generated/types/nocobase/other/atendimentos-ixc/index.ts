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
export type AtendimentosIxc = z.infer<
	typeof import("./schemas").atendimentos_ixcSchema
>;
export type AtendimentosIxcRelations = z.infer<
	typeof import("./schemas").atendimentos_ixcRelationSchema
>;

export type AtendimentosIxcRelationKey = keyof AtendimentosIxcRelations;
