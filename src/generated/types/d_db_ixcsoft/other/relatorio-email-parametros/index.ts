/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RelatorioEmailParametros = z.infer<
	typeof import("./schemas").relatorio_email_parametrosSchema
>;
export type RelatorioEmailParametrosRelations = Record<string, never>;

export type RelatorioEmailParametrosRelationKey =
	keyof RelatorioEmailParametrosRelations;
