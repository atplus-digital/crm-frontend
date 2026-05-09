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
export type RelatorioEnvioEmailParametro = z.infer<
	typeof import("./schemas").relatorio_envio_email_parametroSchema
>;
export type RelatorioEnvioEmailParametroRelations = Record<string, never>;

export type RelatorioEnvioEmailParametroRelationKey =
	keyof RelatorioEnvioEmailParametroRelations;
