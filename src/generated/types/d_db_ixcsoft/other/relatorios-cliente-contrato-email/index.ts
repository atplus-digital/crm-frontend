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
export type RelatoriosClienteContratoEmail = z.infer<
	typeof import("./schemas").relatorios_cliente_contrato_emailSchema
>;
export type RelatoriosClienteContratoEmailRelations = Record<string, never>;

export type RelatoriosClienteContratoEmailRelationKey =
	keyof RelatoriosClienteContratoEmailRelations;
