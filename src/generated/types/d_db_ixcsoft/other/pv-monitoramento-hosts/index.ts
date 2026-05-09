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
export type PvMonitoramentoHosts = z.infer<
	typeof import("./schemas").pv_monitoramento_hostsSchema
>;
export type PvMonitoramentoHostsRelations = Record<string, never>;

export type PvMonitoramentoHostsRelationKey =
	keyof PvMonitoramentoHostsRelations;
