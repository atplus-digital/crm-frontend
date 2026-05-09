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
export type CentralBloqueioIp = z.infer<
	typeof import("./schemas").central_bloqueio_ipSchema
>;
export type CentralBloqueioIpRelations = Record<string, never>;

export type CentralBloqueioIpRelationKey = keyof CentralBloqueioIpRelations;
