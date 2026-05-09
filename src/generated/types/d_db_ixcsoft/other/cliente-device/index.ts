/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ClienteDevice = z.infer<
	typeof import("./schemas").cliente_deviceSchema
>;
export type ClienteDeviceRelations = Record<string, never>;

export type ClienteDeviceRelationKey = keyof ClienteDeviceRelations;
