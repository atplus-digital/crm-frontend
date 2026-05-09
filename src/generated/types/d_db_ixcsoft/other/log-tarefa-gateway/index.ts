/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type LogTarefaGateway = z.infer<
	typeof import("./schemas").log_tarefa_gatewaySchema
>;
export type LogTarefaGatewayRelations = Record<string, never>;

export type LogTarefaGatewayRelationKey = keyof LogTarefaGatewayRelations;
