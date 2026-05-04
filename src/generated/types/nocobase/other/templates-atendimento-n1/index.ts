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
export type TemplatesAtendimentoN1 = z.infer<
	typeof import("./schemas").templates_atendimento_n1Schema
>;
export type TemplatesAtendimentoN1Relations = z.infer<
	typeof import("./schemas").templates_atendimento_n1RelationSchema
>;

export type TemplatesAtendimentoN1RelationKey =
	keyof TemplatesAtendimentoN1Relations;
